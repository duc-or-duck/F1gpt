"use client";
import styled from "@emotion/styled";
import Image from "next/image";

export const StyleImage = styled(Image)({
  objectFit: "contain",
  transition: "border-color 0.3s, transform 0.3s",
  "&:hover": {
    borderColor: "#FF2800", // Đỏ sáng hơn khi hover
    transform: "scale(1.05)", // Phóng to nhẹ
  },
});
