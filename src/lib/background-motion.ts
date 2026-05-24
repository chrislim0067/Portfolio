import type { Transition, Variants } from "framer-motion";

/** Heavy, deliberate easing — infrastructure feel, not playful motion */
export const systemEase = [0.4, 0, 0.2, 1] as const;

export const systemTransition = (duration = 48): Transition => ({
  duration,
  repeat: Infinity,
  repeatType: "mirror",
  ease: systemEase,
});

/**
 * Barely perceptible luminance shift — atmosphere only.
 * ~2% opacity swing over 45s.
 */
export const systemBreatheVariants: Variants = {
  initial: { opacity: 1 },
  animate: {
    opacity: [1, 0.98, 1, 0.99, 1],
    transition: {
      duration: 45,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

/** Ultra-slow horizontal scan — digital system idle state */
export const scanVariants: Variants = {
  initial: { x: "-30%" },
  animate: {
    x: "130%",
    transition: {
      duration: 90,
      repeat: Infinity,
      ease: "linear",
    },
  },
};
