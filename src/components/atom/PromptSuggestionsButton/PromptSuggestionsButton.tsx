import { StylePromptSuggestionsButton } from "./PromptSuggestionsButton.style";
import { TPromptSuggestionsButton } from "./PromptSuggestionsButton.type";

export default function PromptSuggestionsButton({
  text,
  onClick,
}: TPromptSuggestionsButton) {
  return (
    <div>
      <StylePromptSuggestionsButton onClick={onClick}>
        {text}
      </StylePromptSuggestionsButton>
    </div>
  );
}
