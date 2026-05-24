"use client";

import { getThemePreset, type ThemePreset } from "@/lib/theme-styles";
import { cn } from "@/lib/utils";

interface ContentCalmZoneProps {
  preset: ThemePreset;
  className?: string;
}

/**
 * Mutes background behind hero / main column so profile content stays grounded.
 * Static — no motion in the readability zone.
 */
export function ContentCalmZone({ preset, className }: ContentCalmZoneProps) {
  const theme = getThemePreset(preset);

  return (
    <div
      className={cn("pointer-events-none absolute inset-x-0 top-0", className)}
      style={{
        height: "min(520px, 55vh)",
        background: theme.contentCalm,
      }}
      aria-hidden
    />
  );
}
