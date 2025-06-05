import Stack from "@mui/material/Stack";
import styled from "@emotion/styled";

export const StylePromptSuggestionsRows = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexDirection: "row", // Sắp xếp theo hàng, phù hợp với layout F1 (ví dụ: danh sách gợi ý)
  gap: "16px", // Khoảng cách giữa các phần tử, lấy cảm hứng từ giao diện gọn gàng của F1
  padding: "12px", // Padding để tạo không gian
  backgroundColor: "#FFFFFF", // Nền đen hoặc trắng, phù hợp với F1
  border: `1px solid #D50A0A`, // Màu đỏ Ferrari
  borderRadius: "8px", // Bo góc nhẹ, hiện đại
  "& > *": {
    transition: "transform 0.3s, opacity 0.3s", // Hiệu ứng mượt mà cho các phần tử con
    "&:hover": {
      transform: "scale(1.05)", // Phóng to nhẹ khi hover, gợi cảm giác tốc độ
      opacity: 0.9, // Giảm nhẹ opacity khi hover
    },
  },
}));
