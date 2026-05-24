"use client";

import { useState } from "react";
import { SectionCard } from "@/components/SectionCard";
import { about } from "@/data";

const PREVIEW_PARAGRAPH_COUNT = 1;

export function About() {
  const [expanded, setExpanded] = useState(false);
  const paragraphs = about.summary.split(/\n\n+/).map((p) => p.trim()).filter(Boolean);
  const hasMore = paragraphs.length > PREVIEW_PARAGRAPH_COUNT;
  const visibleParagraphs = expanded
    ? paragraphs
    : paragraphs.slice(0, PREVIEW_PARAGRAPH_COUNT);

  return (
    <SectionCard id="about" title="About">
      <div className="li-prose space-y-3">
        {visibleParagraphs.map((paragraph) => (
          <p key={paragraph} className="text-sm leading-[1.43] li-text">
            {paragraph}
          </p>
        ))}
      </div>

      {hasMore && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="li-link mt-3 text-sm font-semibold"
        >
          {expanded ? "Hide" : "Show more"}
        </button>
      )}
    </SectionCard>
  );
}
