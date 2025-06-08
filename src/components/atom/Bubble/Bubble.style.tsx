import styled from "@emotion/styled";
import Stack from "@mui/material/Stack";

export const StyleBubble = styled(Stack)({
  margin: "8px",
  padding: "12px",
  fontSize: "15px",
  border: "2px solid #FF0000", // Red border
  color: "#383838", // Dark text for contrast on white background
  boxShadow: "#959da533 0 8px 24px",
  width: "80%",
  textAlign: "left",
  borderRadius: "15px",
  backgroundColor: "#FFFFFF", // White background
});

export const bubbleUser = styled(StyleBubble)({
  borderRadius: "15px 15px 0 15px",
  marginLeft: "auto",
});

export const bubbleAssistant = styled(StyleBubble)({
  borderRadius: "15px 15px 15px 0",
});
