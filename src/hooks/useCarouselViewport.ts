"use client";

import { useEffect, useState } from "react";

const MD_BREAKPOINT = 768;

/** Desktop/tablet: 2 visible · Mobile: 1 visible · Always slide by 1 */
export function useCarouselViewport(): number {
  const [visible, setVisible] = useState(2);

  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${MD_BREAKPOINT}px)`);
    const update = () => setVisible(mq.matches ? 2 : 1);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return visible;
}
