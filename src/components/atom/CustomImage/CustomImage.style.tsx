import styled from "@emotion/styled";
import Image from "next/image";

export const StyleImage = styled(Image)(({ theme }) => ({
  borderRadius: "8px",
  border: `1px solid #D50A0A`, // Màu đỏ Ferrari
  objectFit: "contain",
  transition: "border-color 0.3s, transform 0.3s",
  "&:hover": {
    borderColor: "#FF2800", // Đỏ sáng hơn khi hover
    transform: "scale(1.05)", // Phóng to nhẹ
  },
}));
