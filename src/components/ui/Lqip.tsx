import React from "react";
import { Blurhash } from "react-blurhash";

interface ILqipProps {
  blurHash: string;
  width: string;
  height: string;
}

const Lqip: React.FC<ILqipProps> = ({ blurHash, width, height }) => {
  return (
      <Blurhash hash={blurHash} width={width} height={height} punch={1} />
  );
};

export default Lqip;