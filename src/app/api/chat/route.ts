import OpenAI from "openai";
import { streamText } from "ai";
import { createOpenAI } from "@ai-sdk/openai";
import { DataAPIClient } from "@datastax/astra-db-ts";

const {
  ASTRA_DB_KEYSPACE,
  ASTRA_DB_COLLECTION,
  ASTRA_DB_API_ENDPOINT,
  OPENAI_API_KEY,
} = process.env;

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

// Create OpenAI provider for Vercel AI SDK
const openaiProvider = createOpenAI({
  apiKey: OPENAI_API_KEY,
});

// Connect to DB
const client = new DataAPIClient(ASTRA_DB_API_ENDPOINT);
const db = client.db(ASTRA_DB_API_ENDPOINT || "", {
  keyspace: ASTRA_DB_KEYSPACE,
});

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const latestMessage = messages[messages.length - 1]?.content || "";
    let docContext = "";

    // Generate embedding for the latest message
    const embedding = await openai.embeddings.create({
      model: "text-embedding-3-small",
      input: latestMessage,
      encoding_format: "float",
    });

    try {
      const collection = await db.collection(ASTRA_DB_COLLECTION || "");
      const cursor = collection.find(
        {},
        {
          sort: {
            $vector: embedding.data[0].embedding,
          },
          limit: 10,
        }
      );

      const documents = await cursor.toArray();
      const docsMap = documents.map((doc) => doc.text).join(" ");
      docContext = JSON.stringify(docsMap);
    } catch (error) {
      console.log("Error querying db...", error);
      docContext = "";
    }

    // System prompt template
    const template = {
      role: "system",
      content: `You are an AI assistant who knows everything about Formula One. 
                Use the below context to augment what you know about Formula One racing. 
                The context will provide you with the most recent page data from Wikipedia, the official F1 website, and others. 
                If the context doesn't include the information you need, answer based on your existing knowledge and don't mention the source of your information or what the context does or doesn't include. 
                Format responses using markdown where applicable and don't return images.

                ----------------
                START CONTEXT
                ${docContext}
                END CONTEXT
                ----------------
                QUESTION: ${latestMessage}
                ----------------
              `,
    };

    // Stream text using Vercel AI SDK
    const stream = await streamText({
      model: openaiProvider("gpt-4o"),
      messages: [template, ...messages],
    });

    return stream.toDataStreamResponse();
  } catch (error) {
    console.log("Error in POST handler...", error);
    throw error; // Re-throw to ensure error handling by the caller
  }
}
