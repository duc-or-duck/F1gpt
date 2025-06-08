import styled from "@emotion/styled";

export const StyledInputField = styled("input")({
  width: "85%",
  padding: "10px 16px",
  fontSize: "15px",
  borderRadius: "16px 0px 0px 16px",
  border: `1px solid #D50A0A`,
  backgroundColor: "white",

  "&:hover": {
    borderColor: "#FF2800",
  },

  "&:focus": {
    borderColor: "#FF2800",
    outline: "none",
    boxShadow: `0 0 0 2px rgba(255, 40, 0, 0.3)`,
  },

  "&:-webkit-autofill": {
    WebkitBoxShadow: "0 0 0 1000px rgba(255, 0, 0, 0.05) inset",
    WebkitTextFillColor: "inherit",
  },
});
