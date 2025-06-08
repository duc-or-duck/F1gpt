"use client";
import { StyleButton } from "./CustomButton.style";
import { TButton } from "./CustomButton.type";

// Sửa kiểu TButton để loại bỏ prop color
type CustomButtonProps = Omit<TButton, "color">;

function CustomButton({
  onClick,
  title,
  type = "button",
  ...props
}: CustomButtonProps) {
  return (
    <StyleButton
      onClick={onClick}
      type={type}
      {...props} // Chỉ truyền các props hợp lệ
    >
      {title}
    </StyleButton>
  );
}

export default CustomButton;
