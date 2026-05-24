"use client";

import { darkTheme } from "@/lib/theme-styles";
import { AmbientLighting } from "./AmbientLighting";
import { ContentCalmZone } from "./ContentCalmZone";
import { NoiseOverlay } from "./NoiseOverlay";
import { ScanGradient } from "./ScanGradient";
import { SystemMesh } from "./SystemMesh";
import { TechnicalGrid } from "./TechnicalGrid";

/**
 * Dark — premium AI infrastructure dashboard. Charcoal, muted navy, restrained blue.
 */
export function DarkBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      <div
        className="absolute inset-0"
        style={{ backgroundColor: darkTheme.base }}
      />
      <SystemMesh preset="dark" />
      <TechnicalGrid preset="dark" />
      <AmbientLighting preset="dark" />
      <ScanGradient preset="dark" />
      <NoiseOverlay opacity={darkTheme.noiseOpacity} />
      <ContentCalmZone preset="dark" />
      <div
        className="absolute inset-0"
        style={{ background: darkTheme.vignette }}
      />
    </div>
  );
}
