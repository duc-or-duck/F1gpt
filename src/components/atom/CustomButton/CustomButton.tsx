"use client"; // Optional: Use this if the component should only render on the client
import { StyleButton } from "./CustomButton.style";
import { TButton } from "./CustomButton.type";

function CustomButton({ title, type = "button" }: TButton) {
  return <StyleButton type={type}>{title}</StyleButton>;
}

export default CustomButton;
