"use client";

import { getThemePreset, type ThemePreset } from "@/lib/theme-styles";
import { cn } from "@/lib/utils";

interface TechnicalGridProps {
  preset: ThemePreset;
  className?: string;
}

/**
 * Engineering grid + faint horizontal rules — structured, not decorative.
 */
export function TechnicalGrid({ preset, className }: TechnicalGridProps) {
  const theme = getThemePreset(preset);

  return (
    <div
      className={cn("pointer-events-none absolute inset-0", className)}
      aria-hidden
      style={{
        opacity: theme.gridOpacity,
        backgroundImage: `
          linear-gradient(${theme.gridLine} 1px, transparent 1px),
          linear-gradient(90deg, ${theme.gridLine} 1px, transparent 1px),
          linear-gradient(180deg, ${theme.gridLine} 0px, transparent 1px)
        `,
        backgroundSize: "80px 80px, 80px 80px, 100% 240px",
        backgroundPosition: "0 0, 0 0, 0 0",
        maskImage:
          "radial-gradient(ellipse 90% 70% at 50% 40%, black 8%, transparent 75%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 90% 70% at 50% 40%, black 8%, transparent 75%)",
      }}
    />
  );
}
