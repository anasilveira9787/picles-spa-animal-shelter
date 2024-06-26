import { ImgHTMLAttributes } from "react";
import thumbDefault from "../../../assets/thumb-default.jpg";
interface IImageBase64 extends ImgHTMLAttributes<HTMLImageElement> {}
export const ImageBase64 = ({ src, onError, ...rest }: IImageBase64) => {
  return (
    <img
      src={`data:image/*;base64,${src}`}
      onError={(e) => {
          onError && onError(e);
          e.currentTarget.src = thumbDefault;
      }}
      {...rest}
    />
  );
};
