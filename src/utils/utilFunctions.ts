export function getAspectRatio(width: number, height: number) {
  const aspectRatio = width / height;
  if (aspectRatio) {
    return aspectRatio.toFixed(3);
  }
}
