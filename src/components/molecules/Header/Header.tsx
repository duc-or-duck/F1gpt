"use client";

import CustomImage from "@/components/atom/CustomImage/CustomImage";
import f1Logo from "@/app/assets/f1-logo.jpg";
import { StyleHeader } from "./Header.style";

export default function CustomHeader() {
  return (
    <div>
      <StyleHeader
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CustomImage src={f1Logo} height={148} width={148} />
      </StyleHeader>
    </div>
  );
}
