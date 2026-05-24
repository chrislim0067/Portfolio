/** Premium carousel motion — controlled, precise, not flingy */
export const carouselSpring = {
  type: "spring" as const,
  stiffness: 380,
  damping: 42,
  mass: 0.9,
};

export const cardHoverTransition = {
  duration: 0.25,
  ease: [0.4, 0, 0.2, 1] as const,
};
