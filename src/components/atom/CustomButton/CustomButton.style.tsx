import styled from "@emotion/styled";

export const StyleButton = styled.button({
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
