"use client";

import { useState } from "react";
import { EntityLogo } from "@/components/EntityLogo";
import { SectionCard } from "@/components/SectionCard";
import { companyLogos, experience } from "@/data";

const VISIBLE_JOB_COUNT = 3;
const PREVIEW_HIGHLIGHT_COUNT = 2;

type ExperienceJob = (typeof experience)[number];

function ExperienceItem({ job }: { job: ExperienceJob }) {
  const [detailsExpanded, setDetailsExpanded] = useState(false);
  const hasMoreDetails = job.highlights.length > PREVIEW_HIGHLIGHT_COUNT;
  const visibleHighlights = detailsExpanded
    ? job.highlights
    : job.highlights.slice(0, PREVIEW_HIGHLIGHT_COUNT);

  return (
    <li className="li-list-item">
      <div className="flex gap-3">
        <EntityLogo name={job.company} logos={companyLogos} />
        <div className="min-w-0 flex-1">
          <h3 className="text-base font-semibold li-text">{job.role}</h3>
          <p className="text-sm li-text">
            {[job.company, job.type].filter(Boolean).join(" · ")}
          </p>
          <p className="text-sm li-text-muted">
            {[job.duration, job.durationDetail].filter(Boolean).join(" · ")}
          </p>
          <p className="text-sm li-text-muted">{job.location}</p>

          {job.technologies && (
            <p className="mt-3 text-sm leading-[1.43] li-text">
              <span className="font-semibold">Technologies: </span>
              {job.technologies}
            </p>
          )}

          {visibleHighlights.length > 0 && (
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-[1.43] li-text">
              {visibleHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}

          {hasMoreDetails && (
            <button
              type="button"
              onClick={() => setDetailsExpanded((v) => !v)}
              className="li-link mt-3 text-sm font-semibold"
            >
              {detailsExpanded ? "Hide" : "Show more"}
            </button>
          )}
        </div>
      </div>
    </li>
  );
}

export function Experience() {
  const [listExpanded, setListExpanded] = useState(false);
  const hasMoreJobs = experience.length > VISIBLE_JOB_COUNT;
  const visibleJobs = listExpanded
    ? experience
    : experience.slice(0, VISIBLE_JOB_COUNT);

  return (
    <SectionCard id="experience" title="Experience">
      <ul>
        {visibleJobs.map((job) => (
          <ExperienceItem key={job.id} job={job} />
        ))}
      </ul>

      {hasMoreJobs && (
        <button
          type="button"
          onClick={() => setListExpanded((v) => !v)}
          className="li-link mt-4 text-sm font-semibold"
        >
          {listExpanded
            ? "Hide"
            : `Show all ${experience.length} experiences`}
        </button>
      )}
    </SectionCard>
  );
}
