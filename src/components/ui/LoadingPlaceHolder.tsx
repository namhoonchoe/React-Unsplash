
export default function LoadingPlaceHolder() {
  const arr = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <>
      {arr.map((_, index) => (
        <div
          key={index}
          className="masonry-item rounded-lg skeleton aspect-[2/3]"
          
        ></div>
      ))}
    </>
  );
}
