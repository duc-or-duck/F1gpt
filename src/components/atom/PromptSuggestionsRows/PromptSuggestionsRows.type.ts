import { StackProps } from "@mui/material";

export type TPromptSuggestionsRows = {
  onPromptClick: (prompt: string) => void;
} & StackProps;
