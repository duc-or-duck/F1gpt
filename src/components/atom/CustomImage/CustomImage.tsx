import { TImage } from "./CustomImage.type";
import { StyleImage } from "./CustomImage.style";

function CustomImage({ width, height, src, alt, priority }: TImage) {
  return (
    <div>
      <StyleImage
        width={width}
        height={height}
        src={src}
        alt={alt || "custom image"}
        priority={priority}
      />
    </div>
  );
}

export default CustomImage;
