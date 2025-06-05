import { ImageProps, StaticImageData } from "next/image";

export interface TImage {
  width: number; // next/image yêu cầu number cho width
  height: number; // next/image yêu cầu number cho height
  src: string | StaticImageData; // Hỗ trợ cả string (URL) và StaticImageData (import hình ảnh)
  alt?: string;
  priority?: boolean; // Thêm priority để hỗ trợ prop priority
}
