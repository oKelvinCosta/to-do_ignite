import type { ImgHTMLAttributes } from "react";

interface ImgProps extends ImgHTMLAttributes<HTMLImageElement> {
  isCircle?: boolean;
}

export default function Img({ className = "", isCircle = false, ...props }: ImgProps) {
  return (
    <>
      <img
        className={`w-full object-cover object-center ${isCircle && "aspect-square rounded-full"} ${className}`}
        alt="Imagem"
        loading="lazy"
        {...props}
      />
    </>
  );
}
