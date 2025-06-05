// src/components/atom/CustomButton/CustomButton.style.tsx
import styled from "@emotion/styled";
import Button from "@mui/material/Button";

export const StyleButton = styled(Button)({
  width: "15%",
  backgroundColor: "#a80001",
  color: "white",
  fontWeight: "700",
  border: "none",
  padding: "10px 16px",
  borderRadius: "0 16px 16px 0",
  cursor: "pointer",

  "&:hover": {
    backgroundColor: "#900000",
  },
});
