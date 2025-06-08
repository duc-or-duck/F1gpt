"use client";

import React, { useState } from "react";
import FormComponent from "@/components/molecules/Form/Form";
import ChatMessages from "../ChatMessage/ChatMessage";

interface MessagePart {
  type: string;
  text?: string;
}

interface Message {
  id: string;
  role: "user" | "assistant";
  parts: MessagePart[];
}

interface ChatSectionProps {
  messages: Message[];
  isLoading: boolean;
}

const ChatSection = ({ messages, isLoading }: ChatSectionProps) => {
  const [input, setInput] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  return (
    <>
      <ChatMessages messages={messages} isLoading={isLoading} />
      <FormComponent
        // action={handleFormSubmit}
        value={input}
        onChange={handleInputChange}
      />
    </>
  );
};

export default ChatSection;
