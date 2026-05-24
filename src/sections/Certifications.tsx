"use client";

import { Award } from "lucide-react";
import { useState } from "react";
import { SectionCard } from "@/components/SectionCard";
import { certifications } from "@/data";

const VISIBLE_COUNT = 2;

export function Certifications() {
  const [expanded, setExpanded] = useState(false);

  if (certifications.length === 0) return null;

  const hasMore = certifications.length > VISIBLE_COUNT;
  const visibleCerts = expanded
    ? certifications
    : certifications.slice(0, VISIBLE_COUNT);

  return (
    <SectionCard id="certifications" title="Licenses & certifications">
      <ul>
        {visibleCerts.map((cert) => (
          <li key={cert} className="li-list-item">
            <div className="flex gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded border border-[var(--li-border-strong)] bg-[var(--li-bg-hover)] li-text-muted">
                <Award className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <div className="flex min-w-0 flex-1 items-center">
                <p className="text-base font-semibold li-text">{cert}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {hasMore && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="li-link mt-4 text-sm font-semibold"
        >
          {expanded
            ? "Hide"
            : `Show all ${certifications.length} licenses & certifications`}
        </button>
      )}
    </SectionCard>
  );
}
