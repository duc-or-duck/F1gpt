import React from "react";
import f1Logo from "./assets/f1-logo.png";
import FormComponent from "@/components/molecules/Form/Form";
import Image from "next/image";
import CustomPromptSuggestionsRows from "@/components/atom/PromptSuggestionsRows/PromptSuggestionsRows";

async function fetchMessages() {
  return [];
}

export default async function Home() {
  const messages = await fetchMessages();
  const noMess = messages.length === 0;

  // Server Action
  const handleFormSubmit = async (formData: FormData) => {
    "use server";
    const message = formData.get("message")?.toString();
    console.log("Received message:", message);
    // Xử lý dữ liệu form ở đây (gọi API, lưu database, etc.)
  };

  return (
    <div>
      <main>
        <Image
          src={f1Logo} // URL từ thư mục public
          alt="Formula 1 logo"
          width={86}
          height={86}
          priority // Bị bỏ qua trong <img>
        />
        <section>
          {noMess ? (
            <>
              <p>
                The Ultimate place for Formula One super fans! Ask F1GPT
                anything about the fantastic topic of F1 racing and it will come
                back with the most up-to-date answers. We hope you enjoy!
              </p>
              <br />
              <CustomPromptSuggestionsRows />
            </>
          ) : (
            <>{/* Hiển thị tin nhắn ở đây */}</>
          )}
          <FormComponent onSubmit={handleFormSubmit} />
        </section>
      </main>
    </div>
  );
}
