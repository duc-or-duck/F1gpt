"use client";

import Stack from "@mui/material/Stack";
import styled from "@emotion/styled"; // or use @mui/material/styles if preferred

export const StylePromptSuggestionsRows = styled(Stack)({
  display: "flex",
  flexDirection: "row",
  gap: "16px",
  padding: "12px",
  backgroundColor: "#FFFFFF",
  border: `1px solid #D50A0A`,
  borderRadius: "8px",
  "& > *": {
    transition: "transform 0.3s, opacity 0.3s",
    "&:hover": {
      transform: "scale(1.05)",
      opacity: 0.9,
    },
  },
});
