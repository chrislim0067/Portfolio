/**
 * Product-engineered background tokens.
 * Structured, minimal, enterprise AI dashboard — not decorative art.
 */

export type ThemePreset = "light" | "dark";

export const themeCrossfade = {
  duration: 0.8,
  ease: [0.4, 0, 0.2, 1] as const,
};

export const lightTheme = {
  base: "#f6f7f9",
  pageFallback: "#f6f7f9",
  /** Flat mesh — directional, no color explosions */
  mesh: `
    linear-gradient(180deg, #fafbfc 0%, #f4f5f7 42%, #eef0f3 100%)
  `,
  /** Top-edge product lighting (single source) */
  ambient: `
  linear-gradient(180deg, rgba(59, 130, 246, 0.04) 0%, transparent 28%),
  linear-gradient(90deg, transparent 0%, rgba(148, 163, 184, 0.03) 50%, transparent 100%)
  `,
  /** Horizon line — subtle depth */
  horizon: `linear-gradient(0deg, rgba(226, 232, 240, 0.5) 0%, transparent 12%)`,
  gridOpacity: 0.35,
  gridLine: "rgba(100, 116, 139, 0.07)",
  noiseOpacity: 0.022,
  vignette:
    "radial-gradient(ellipse 100% 85% at 50% 50%, transparent 55%, rgba(15, 23, 42, 0.04) 100%)",
  scanColor: "rgba(59, 130, 246, 0.025)",
  contentCalm:
    "radial-gradient(ellipse 62% 48% at 50% 8%, rgba(250, 251, 252, 0.92) 0%, transparent 72%)",
};

export const darkTheme = {
  base: "#0a0b0f",
  pageFallback: "#0a0b0f",
  mesh: `
    linear-gradient(180deg, #0c0d12 0%, #0a0b0f 38%, #08090c 100%)
  `,
  ambient: `
    linear-gradient(180deg, rgba(59, 130, 246, 0.05) 0%, transparent 22%),
    linear-gradient(90deg, transparent 0%, rgba(30, 41, 59, 0.4) 50%, transparent 100%)
  `,
  horizon: `linear-gradient(0deg, rgba(15, 23, 42, 0.6) 0%, transparent 14%)`,
  gridOpacity: 0.4,
  gridLine: "rgba(148, 163, 184, 0.05)",
  noiseOpacity: 0.028,
  vignette:
    "radial-gradient(ellipse 100% 80% at 50% 50%, transparent 50%, rgba(0, 0, 0, 0.45) 100%)",
  scanColor: "rgba(59, 130, 246, 0.03)",
  contentCalm:
    "radial-gradient(ellipse 62% 45% at 50% 6%, rgba(10, 11, 15, 0.75) 0%, transparent 70%)",
};

export function getThemePreset(theme: ThemePreset) {
  return theme === "dark" ? darkTheme : lightTheme;
}

/** Dashboard panel surfaces */
export const glassPresets = {
  light: {
    bg: "rgba(255, 255, 255, 0.94)",
    border: "rgba(226, 232, 240, 0.95)",
    blur: "12px",
    shadow:
      "0 0 0 1px rgba(15, 23, 42, 0.04), 0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 20px rgba(15, 23, 42, 0.04)",
  },
  dark: {
    bg: "rgba(255, 255, 255, 0.04)",
    border: "rgba(255, 255, 255, 0.08)",
    blur: "20px",
    shadow:
      "0 0 0 1px rgba(255, 255, 255, 0.04), 0 4px 24px rgba(0, 0, 0, 0.35)",
  },
} as const;
