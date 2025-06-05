import styled from "@emotion/styled";
import Input from "@mui/material/Input";

export const StyledInputField = styled(Input)(({ theme }) => ({
  width: "85%",
  padding: "10px 16px",
  fontSize: "15px",
  borderRadius: "16px 0px 0px 16px",
  border: `1px solid ${"#D50A0A"}`, // Màu đỏ Ferrari, điều chỉnh cho dark/light theme

  "&::before, &::after": {
    display: "none",
  },

  "& .MuiInputBase-input": {
    padding: 0, // Loại bỏ padding mặc định
  },

  "&:hover": {
    borderColor: "#FF2800", // Màu đỏ sáng hơn khi hover, lấy cảm hứng từ năng lượng F1
  },

  "&:focus": {
    borderColor: "#FF2800", // Màu đỏ sáng khi focus
    outline: "none",
  },

  "&.Mui-focused": {
    borderColor: "#FF2800", // Đảm bảo màu đỏ F1 khi focused
    boxShadow: `0 0 0 2px rgba(255, 40, 0, 0.3)`, // Box-shadow với tông đỏ nhạt
  },

  "&.mui-auto-fill": {
    backgroundColor: "rgba(255, 0, 0, 0.05)", // Nền đỏ nhạt cho autofill, phù hợp với chủ đề
  },
}));
