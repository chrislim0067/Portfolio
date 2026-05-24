"use client";

import { cn } from "@/lib/utils";

interface NoiseOverlayProps {
  className?: string;
  opacity?: number;
}

/**
 * Ultra-subtle film grain via SVG feTurbulence — adds SaaS texture without distraction.
 * Fixed overlay; no animation (avoids repaints).
 */
export function NoiseOverlay({ className, opacity = 0.035 }: NoiseOverlayProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 mix-blend-overlay",
        className
      )}
      style={{ opacity }}
      aria-hidden
    >
      <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <filter id="portfolio-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="4"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#portfolio-noise)" />
      </svg>
    </div>
  );
}
