"use client";

import { motion, useReducedMotion } from "framer-motion";
import { systemBreatheVariants } from "@/lib/background-motion";
import { getThemePreset, type ThemePreset } from "@/lib/theme-styles";
import { cn } from "@/lib/utils";

interface SystemMeshProps {
  preset: ThemePreset;
  className?: string;
}

/**
 * Base structured gradient — flat, directional, product UI foundation.
 * No organic blobs or multi-color mesh explosions.
 */
export function SystemMesh({ preset, className }: SystemMeshProps) {
  const reduceMotion = useReducedMotion();
  const theme = getThemePreset(preset);

  return (
    <div className={cn("absolute inset-0", className)} aria-hidden>
      <div className="absolute inset-0" style={{ background: theme.mesh }} />
      <motion.div
        className="absolute inset-0"
        variants={systemBreatheVariants}
        initial="initial"
        animate={reduceMotion ? "initial" : "animate"}
        style={{ background: theme.ambient }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-[20%]"
        style={{ background: theme.horizon }}
      />
    </div>
  );
}
