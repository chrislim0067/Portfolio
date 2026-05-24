"use client";

import { lightTheme } from "@/lib/theme-styles";
import { AmbientLighting } from "./AmbientLighting";
import { ContentCalmZone } from "./ContentCalmZone";
import { NoiseOverlay } from "./NoiseOverlay";
import { ScanGradient } from "./ScanGradient";
import { SystemMesh } from "./SystemMesh";
import { TechnicalGrid } from "./TechnicalGrid";

/**
 * Light — Linear / Apple enterprise UI. Minimal, structured, calm.
 */
export function LightBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      <div
        className="absolute inset-0"
        style={{ backgroundColor: lightTheme.base }}
      />
      <SystemMesh preset="light" />
      <TechnicalGrid preset="light" />
      <AmbientLighting preset="light" />
      <ScanGradient preset="light" />
      <NoiseOverlay opacity={lightTheme.noiseOpacity} />
      <ContentCalmZone preset="light" />
      <div
        className="absolute inset-0"
        style={{ background: lightTheme.vignette }}
      />
    </div>
  );
}
