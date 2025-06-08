"use client";
import PromptSuggestionsButton from "../PromptSuggestionsButton/PromptSuggestionsButton";
import { StylePromptSuggestionsRows } from "./PromptSuggestionsRows.style";
import { TPromptSuggestionsRows } from "./PromptSuggestionsRows.type";

function CustomPromptSuggestionsRows({
  onPromptClick,
}: TPromptSuggestionsRows) {
  const prompts = [
    "Who is head of racing for Aston Martin's F1 Academy team?",
    "Who is the highest paid F1 driver?",
    "Who will be the newest driver for Ferrari?",
    "Who is the current Formula One World Driver's Champion?",
  ];
  return (
    <StylePromptSuggestionsRows>
      {prompts.map((prompt, index) => (
        <PromptSuggestionsButton
          key={`suggestion-${index}`}
          text={prompt}
          onClick={() => onPromptClick(prompt)} // Pass prompt directly
        />
      ))}
    </StylePromptSuggestionsRows>
  );
}

export default CustomPromptSuggestionsRows;
