"use client";

import { getThemePreset, type ThemePreset } from "@/lib/theme-styles";
import { cn } from "@/lib/utils";

interface AmbientLightingProps {
  preset: ThemePreset;
  className?: string;
}

/**
 * Static directional lighting — top-down product illumination.
 * No animated blobs, no screen blend glow.
 */
export function AmbientLighting({ preset, className }: AmbientLightingProps) {
  const isDark = preset === "dark";

  return (
    <div className={cn("absolute inset-0", className)} aria-hidden>
      {/* Primary: overhead soft light */}
      <div
        className="absolute inset-x-0 top-0 h-[45%]"
        style={{
          background: isDark
            ? "linear-gradient(180deg, rgba(59, 130, 246, 0.04) 0%, transparent 100%)"
            : "linear-gradient(180deg, rgba(255, 255, 255, 0.6) 0%, transparent 100%)",
        }}
      />
      {/* Secondary: edge depth (vignette companion) */}
      <div
        className="absolute inset-y-0 left-0 w-[20%]"
        style={{
          background: isDark
            ? "linear-gradient(90deg, rgba(0, 0, 0, 0.25) 0%, transparent 100%)"
            : "linear-gradient(90deg, rgba(241, 245, 249, 0.4) 0%, transparent 100%)",
        }}
      />
      <div
        className="absolute inset-y-0 right-0 w-[20%]"
        style={{
          background: isDark
            ? "linear-gradient(270deg, rgba(0, 0, 0, 0.25) 0%, transparent 100%)"
            : "linear-gradient(270deg, rgba(241, 245, 249, 0.4) 0%, transparent 100%)",
        }}
      />
    </div>
  );
}
