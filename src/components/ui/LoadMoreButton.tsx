import React from "react";

type LoadMoreButtonProps = {
  isValidating: boolean;
  ArrayData: any[][];
  size: number;
  setSize: (
    size: number | ((_size: number) => number),
  ) => Promise<any[][] | undefined>
};

const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({
  isValidating,
  ArrayData,
  size,
  setSize,
}) => {
  const isPagenating =
    isValidating ||
    (size > 0 && ArrayData && typeof ArrayData[size - 1] === "undefined");

  const isEmpty = ArrayData?.[0]?.length === 0;

  const isReachingEnd =
    ArrayData.length >= 2 && ArrayData[ArrayData.length - 1]?.length < 25;

  if (isEmpty) return <></>;

  if (isReachingEnd)
  return (
    <button
      className="loadmore-button btn-disabled"
      tabIndex={-1}
      role="button"
      aria-disabled="true"
    >
      This is the Last
    </button>
  );

  if (ArrayData[ArrayData.length - 1]?.length < 25) return <></>;

  

  if (isPagenating)
    return (
      <button className="loadmore-button">
        <span className="loading loading-spinner"></span>
        loading
      </button>
    );

  return (
    <button
      className="loadmore-button"
      onClick={() => setSize(size + 1)}
    >
      load more
    </button>
  );
};

export default LoadMoreButton;
