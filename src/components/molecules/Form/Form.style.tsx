import InputBase from "@mui/material/InputBase";
import styled from "@emotion/styled";

export const StyledForm = styled("form")(({ theme }) => ({
  height: "50px",
  width: "100%",
  display: "flex",
  borderTop: "#828282 solid 2px",
  borderRadius: "16px",
  overflow: "hidden",
}));

export const StyledInput = styled(InputBase)(({ theme }) => ({
  width: "85%",
  padding: "10px 16px",
  fontSize: "15px",
  // border: `1px solid ${theme.divider}`,
  borderRadius: "16px 0px 0px 16px",
  // transition: theme.transitions.create(["border-color", "box-shadow"]),

  "&::before, &::after": {
    display: "none",
  },

  "& .MuiInputBase-input": {
    padding: 0, // Loại bỏ padding mặc định
  },

  "&:focus": {
    borderColor: "white",
    outline: "none",
  },

  "&:hover": {
    borderColor: "white",
  },

  "&.Mui-focused": {
    borderColor: "white",
    boxShadow: `0 0 0 2px gray`,
  },
  ".mui-auto-fill": {
    backgroundColor: "red",
  },
}));
