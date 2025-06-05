//import thư viện và cấu hình
import { SimilarityMetric } from "./loadDb.type";
import { DataAPIClient } from "@datastax/astra-db-ts";
import { PuppeteerWebBaseLoader } from "@langchain/community/document_loaders/web/puppeteer";
import OpenAI from "openai";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import "dotenv/config";

// Kiểm tra và lấy các biến môi trường
const {
  ASTRA_DB_KEYSPACE,
  ASTRA_DB_COLLECTION,
  ASTRA_DB_API_ENDPOINT,
  ASTRA_DB_API_TOKEN,
  OPENAI_API_KEY,
} = process.env;

// Kiểm tra xem các biến môi trường có được thiết lập không
if (
  !ASTRA_DB_API_TOKEN ||
  !ASTRA_DB_API_ENDPOINT ||
  !ASTRA_DB_KEYSPACE ||
  !ASTRA_DB_COLLECTION ||
  !OPENAI_API_KEY
) {
  throw new Error("Missing required environment variables");
}

// Kiểm tra giá trị keyspace hợp lệ
const keyspaceRegex = /^[a-zA-Z0-9_]{1,48}$/;
if (!keyspaceRegex.test(ASTRA_DB_KEYSPACE as string)) {
  throw new Error(
    `Invalid ASTRA_DB_KEYSPACE: '${ASTRA_DB_KEYSPACE}'. Must be 1-48 alphanumeric characters or underscore.`
  );
}

// Khởi tạo OpenAI client
const openai = new OpenAI({ apiKey: OPENAI_API_KEY });

// Danh sách các URL F1
const f1Data: string[] = [
  "https://en.wikipedia.org/wiki/Formula_One",
  "https://www.formula1.com/en/latest/all",
  "https://www.skysports.com/f1",
  "https://www.formula1.com/",
];

// Khởi tạo DataAPIClient
const client = new DataAPIClient(ASTRA_DB_API_TOKEN);

// Khởi tạo database với keyspace
const db = client.db(ASTRA_DB_API_ENDPOINT, { keyspace: ASTRA_DB_KEYSPACE });

// Tạo thực thể của RecursiveCharacterTextSplitter
const splitter = new RecursiveCharacterTextSplitter({
  //Cứ mỗi lần chia lấy 512 kí tự
  chunkSize: 512,
  //Giữa 2 đoạn chunk thì có 100 ký tự trùng lặp
  chunkOverlap: 100,
});

const createCollection = async (
  similarityMetric: SimilarityMetric = "dot_product"
) => {
  try {
    const res = await db.createCollection(ASTRA_DB_COLLECTION as string, {
      vector: {
        //kích thước của vector embedding phù hợp với mô hình
        dimension: 1536,
        metric: similarityMetric,
      },
    });
    console.log("Collection created:", res);
    return res;
  } catch (error) {
    console.error("Error creating collection:", error);
    throw error;
  }
};

const loadSampleData = async () => {
  const collection = await db.collection(ASTRA_DB_COLLECTION || "");
  for (const url of f1Data) {
    try {
      const content = await scrapePage(url);
      const chunks = await splitter.splitText(content);
      for (const chunk of chunks) {
        const embedding = await openai.embeddings.create({
          model: "text-embedding-3-small",
          input: chunk,
          encoding_format: "float",
        });

        const vector = embedding.data[0].embedding;

        const res = await collection.insertOne({
          $vector: vector,
          text: chunk,
        });

        console.log(`Inserted chunk from ${url}:`, res);
      }
    } catch (error) {
      console.error(`Error processing ${url}:`, error);
    }
  }
};

const scrapePage = async (url: string) => {
  const loader = new PuppeteerWebBaseLoader(url, {
    launchOptions: {
      headless: true,
    },
    gotoOptions: {
      waitUntil: "domcontentloaded",
    },
    evaluate: async (page, browser) => {
      const result = await page.evaluate(() => document.body.innerHTML);
      await browser.close();
      return result;
    },
  });
  const content = await loader.scrape();
  return content?.replace(/<[^>]*>?/gm, "") || "";
};

const main = async () => {
  try {
    await createCollection();
    await loadSampleData();
    console.log("Data loading completed.");
  } catch (error) {
    console.error("Error in main execution:", error);
    process.exit(1);
  }
};

main();
