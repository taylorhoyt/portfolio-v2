import React, { useState } from "react";
import Image, { ImageProps } from "next/image";

interface LoadingImageProps extends Omit<ImageProps, "onLoadingComplete"> {
  className?: string;
  alt: string;
}

const LoadingImage: React.FC<LoadingImageProps> = ({
  className = "",
  alt,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative h-full w-full">
      {isLoading && (
        <div className="absolute inset-0 flex animate-pulse items-center justify-center bg-transparent">
          <div className="border-silver-gray border-t-cadet-gray h-8 w-8 animate-spin rounded-full border-4"></div>
        </div>
      )}
      <Image
        {...props}
        alt={alt}
        className={`${className} ${isLoading ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
        onLoad={() => setIsLoading(false)}
        priority
      />
    </div>
  );
};

export default LoadingImage;
