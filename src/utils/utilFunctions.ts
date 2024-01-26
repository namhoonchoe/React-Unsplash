export function getAspectRatio(width: number, height: number) {
  const aspect = width / height;
  if (aspect) {
    return aspect.toFixed(3);
  }
}
