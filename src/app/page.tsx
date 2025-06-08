"use client"; // Thêm dòng này để giải quyết lỗi RSC và export default

import React from "react";
import CustomBubbleLoading from "@/components/atom/BubbleLoading/BubbleLoading";
import CustomHeader from "@/components/molecules/Header/Header";
import PromptSection from "@/components/molecules/PromptSection/PromptSection";
import { useChat } from "@ai-sdk/react";
import CustomBubble from "@/components/atom/Bubble/Bubble"; // Giả sử có component này
import FormComponent from "@/components/molecules/Form/Form";
import CustomPromptSuggestionsRows from "@/components/atom/PromptSuggestionsRows/PromptSuggestionsRows";
import { CreateMessage } from "@ai-sdk/react";

export default function Home() {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    append,
  } = useChat();
  const handlePrompt = (promText: string) => {
    const msg: CreateMessage = {
      id: crypto.randomUUID(),
      content: promText,
      role: "user",
    };
    append(msg);
  };

  // const noMessages = !messages || messages.length === 0;

  return (
    <div>
      <main>
        <CustomHeader />
        <section className="chat-container">
          {messages.length === 0 ? (
            <>
              <PromptSection />
              <CustomPromptSuggestionsRows onPromptClick={handlePrompt} />
            </>
          ) : (
            <div className="message-list">
              {Object.values(messages).map((message, index) => (
                <CustomBubble
                  message={{
                    content: message.content || "", // Adjust based on actual property
                    role: message.role === "user" ? "user" : "assistant", // Adjust based on actual property
                  }}
                  key={`message-${index}`}
                />
              ))}
              {isLoading && <CustomBubbleLoading />}
            </div>
          )}

          {/* <form onSubmit={handleSubmit} className="chat-form">
            <input
              value={input}
              onChange={handleInputChange}
              placeholder="Type your message..."
              disabled={isLoading}
            />
            <button type="submit" disabled={isLoading}>
              Send
            </button>
          </form> */}
          <FormComponent
            value={input}
            onChange={handleInputChange}
            onSubmit={handleSubmit} // Truyền hàm mới
          />
        </section>
      </main>
    </div>
  );
}
