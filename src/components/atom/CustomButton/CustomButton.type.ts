import { ButtonHTMLAttributes, MouseEvent } from "react";

export type TButton = {
  title: string;
  type?: "button" | "submit" | "reset";
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color">;
