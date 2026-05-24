/**
 * Overlapping slide carousel — show N cards, advance 1 index per step.
 * Example (5 items, 2 visible): [1][2] → [2][3] → [3][4] → [4][5]
 */

export interface CarouselWindow {
  visible: number;
  maxIndex: number;
  positionCount: number;
}

export function getCarouselWindow(
  total: number,
  visible: number
): CarouselWindow {
  if (total <= visible) {
    return { visible, maxIndex: 0, positionCount: 1 };
  }
  const maxIndex = total - visible;
  return { visible, maxIndex, positionCount: maxIndex + 1 };
}

export function clampIndex(index: number, maxIndex: number): number {
  return Math.max(0, Math.min(index, maxIndex));
}

export function getSlideOffsetPx(index: number, stepPx: number): number {
  return -index * stepPx;
}

/** Minimum drag distance as a fraction of one card step */
const DRAG_DISTANCE_RATIO = 0.18;
/** px/s — low threshold so backward swipes register reliably */
const VELOCITY_THRESHOLD = 120;

export type SwipeStep = -1 | 0 | 1;

/**
 * Decide swipe direction from drag delta only — never jump multiple indexes.
 * Uses info.offset (delta from drag start), NOT absolute track position.
 */
export function resolveSwipeStep(
  offsetX: number,
  velocityX: number,
  stepPx: number
): SwipeStep {
  if (stepPx <= 0) return 0;

  const distanceThreshold = stepPx * DRAG_DISTANCE_RATIO;

  // Drag left → next (finger moves left, offset negative)
  if (offsetX <= -distanceThreshold) return 1;
  // Drag right → previous
  if (offsetX >= distanceThreshold) return -1;

  // Light flick — at most one step, no multi-slide carry
  if (velocityX <= -VELOCITY_THRESHOLD) return 1;
  if (velocityX >= VELOCITY_THRESHOLD) return -1;

  return 0;
}

export function resolveIndexAfterSwipe(
  indexAtDragStart: number,
  swipeStep: SwipeStep,
  maxIndex: number
): number {
  return clampIndex(indexAtDragStart + swipeStep, maxIndex);
}
