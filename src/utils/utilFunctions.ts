export function getAspectRatio(width: number, height: number) {
  const aspectRatio = width / height;
  if (aspectRatio) {
    return aspectRatio.toFixed(3);
  }
}

export function scrollToTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "instant", 
  });
}