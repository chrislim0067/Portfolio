"use client";

import { motion, useReducedMotion } from "framer-motion";
import { scanVariants } from "@/lib/background-motion";
import { getThemePreset, type ThemePreset } from "@/lib/theme-styles";
import { cn } from "@/lib/utils";

interface ScanGradientProps {
  preset: ThemePreset;
  className?: string;
}

/**
 * Ultra-subtle horizontal scan — suggests computation / system idle.
 * Barely visible; disabled when reduced motion is preferred.
 */
export function ScanGradient({ preset, className }: ScanGradientProps) {
  const reduceMotion = useReducedMotion();
  const theme = getThemePreset(preset);

  if (reduceMotion) return null;

  return (
    <div
      className={cn("absolute inset-0 overflow-hidden opacity-60", className)}
      aria-hidden
    >
      <motion.div
        className="absolute top-0 h-full w-[40%]"
        variants={scanVariants}
        initial="initial"
        animate="animate"
        style={{
          background: `linear-gradient(
            90deg,
            transparent 0%,
            ${theme.scanColor} 45%,
            transparent 100%
          )`,
        }}
      />
    </div>
  );
}
