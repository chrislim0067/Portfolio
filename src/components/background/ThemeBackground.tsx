"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { themeCrossfade } from "@/lib/theme-styles";
import { cn } from "@/lib/utils";
import { DarkBackground } from "./DarkBackground";
import { LightBackground } from "./LightBackground";

interface ThemeBackgroundProps {
  className?: string;
}

/**
 * Dual-layer background with crossfade on theme change.
 * Both layers stay mounted; opacity animates (no instant swap).
 */
export function ThemeBackground({ className }: ThemeBackgroundProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-0 z-0 overflow-hidden",
        className
      )}
      aria-hidden
    >
      {/* Light layer */}
      <motion.div
        className="absolute inset-0"
        initial={false}
        animate={{ opacity: mounted ? (isDark ? 0 : 1) : 1 }}
        transition={{ duration: themeCrossfade.duration, ease: themeCrossfade.ease }}
      >
        <LightBackground />
      </motion.div>

      {/* Dark layer */}
      <motion.div
        className="absolute inset-0"
        initial={false}
        animate={{ opacity: mounted ? (isDark ? 1 : 0) : 0 }}
        transition={{ duration: themeCrossfade.duration, ease: themeCrossfade.ease }}
      >
        <DarkBackground />
      </motion.div>
    </div>
  );
}
