import React, { useState } from "react";
import { Blurhash } from "react-blurhash";

type ImageCardProps = {
  blurHash: string;
  imageUrl: string;
};

const ImageCard: React.FC<ImageCardProps> = ({ blurHash, imageUrl }) => {
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
        }}
      />
      {isImageLoading && blurHash && (
        <Blurhash hash={blurHash} width={"100%"} height={"100%"} punch={1} />
      )}
    </>
  );
};
export default ImageCard;
