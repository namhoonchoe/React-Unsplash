import React, { useState } from "react";
import { Blurhash } from "react-blurhash";

type ImageCardProps = {
  blurHash?: string;
  imageUrl: string;
  skeleton?: boolean;
};

const ImageCard: React.FC<ImageCardProps> = ({
  blurHash,
  imageUrl,
  skeleton,
}) => {
  const [isImageLoading, setIsImageLoading] = useState<boolean>(true);

  return (
    <>
      <img
        src={imageUrl}
        onLoad={() => setIsImageLoading(false)}
        alt="image"
        style={{
          width: `${isImageLoading ? 0 : "100%"}`,
          height: `${isImageLoading ? 0 : "100%"}`,
          objectFit: "cover",
        }}
      />
      {isImageLoading && blurHash && (
        <Blurhash hash={blurHash} width={"100%"} height={"100%"} punch={1} />
      )}
      {isImageLoading && skeleton && (
        <div className="w-full h-full bg-gray-300 skeleton rounded-none"></div>
      )}
    </>
  );
};
export default ImageCard;
