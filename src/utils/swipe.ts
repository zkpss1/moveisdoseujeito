export function swipeDirection(from: { x: number; y: number }, to: { x: number; y: number }) {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  return Math.abs(dx) >= 50 && Math.abs(dx) > Math.abs(dy) ? (dx < 0 ? 1 : -1) : 0;
}
