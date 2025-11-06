import Image from "next/image";

const ProgressiveImageLoader = ({
  src,
  placeholderSrc,
  alt,
  ...props
}: {
  src: string;
  placeholderSrc: string;
  alt: string;
  className?: string;
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      placeholder="blur"
      blurDataURL={placeholderSrc}
      width={800}
      height={600}
      {...props}
    />
  );
};

export default ProgressiveImageLoader;
