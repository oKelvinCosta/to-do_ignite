interface PropsImg {
  className?: string;
  isCircle?: boolean;
  src: string;
}

export default function Img({
  className,
  isCircle = false,
  ...props
}: PropsImg) {
  return (
    <>
      <img
        className={`w-full object-cover object-center ${
          isCircle && "aspect-square rounded-full"
        } ${className}`}
        alt="Imagem"
        loading="lazy"
        {...props}
      />
    </>
  );
}
