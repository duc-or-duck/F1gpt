"use client";

import styled from "@emotion/styled";
import Stack from "@mui/material/Stack";
import { keyframes } from "@emotion/react";

// Define keyframes for smooth bubble animation
const bubbleAnimation = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(0.6);
    opacity: 0.7;
  }
`;

export const StyleBubbleLoading = styled(Stack)({
  width: "60px",
  height: "20px",
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "row",
  alignItems: "center",
  "& > div": {
    width: "16px",
    height: "16px",
    background: "#383838",
    borderRadius: "50%",
    animation: `${bubbleAnimation} 1.2s cubic-bezier(0.4, 0, 0.2, 1) infinite`,
    "&:nth-of-type(2)": {
      animationDelay: "0.2s",
    },
    "&:nth-of-type(3)": {
      animationDelay: "0.4s",
    },
  },
});
