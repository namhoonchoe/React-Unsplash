export function getAspectRatio(width: number, height: number) {
  const aspectRatio = width / height;
  if (aspectRatio) {
    return aspectRatio.toFixed(3);
  }
}

export function dateConverter(date:string){
  const year = date.slice(0,4);
  const month = date.slice(5, 7).replace(/(^0+)/, "");
  const day = date.slice(8,10).replace(/(^0+)/, "");
  return `${year}년 ${month}월 ${day}일`;
}

export function scrollToTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "instant", 
  });
}