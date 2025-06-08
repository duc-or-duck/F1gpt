"use client";

import { bubbleUser, bubbleAssistant } from "./Bubble.style";
import { TBubble } from "./Bubble.type";

const CustomBubble = ({ message }: TBubble) => {
  const { content, role } = message;
  const BubbleComponent = role === "user" ? bubbleUser : bubbleAssistant;

  return (
    <div>
      <BubbleComponent>{content}</BubbleComponent>
    </div>
  );
};

export default CustomBubble;
