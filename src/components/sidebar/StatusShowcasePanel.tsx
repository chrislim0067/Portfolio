import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data";
import { recentWork } from "@/data/sidebar";
import { cn } from "@/lib/utils";

export function StatusShowcasePanel() {
  return (
    <article className={cn("project-card", "cine-showcase")}>
      <div className="cine-showcase-body">
        <div className="cine-showcase-live" aria-label="Available for freelance work">
          <span className="cine-showcase-live-dot" aria-hidden>
            <span className="cine-showcase-live-ring cine-showcase-live-ring--b" />
            <span className="cine-showcase-live-ring cine-showcase-live-ring--a" />
            <span className="cine-showcase-live-glow" />
            <span className="cine-showcase-live-core" />
          </span>
          <span className="cine-showcase-live-label">{recentWork.status}</span>
        </div>

        <p className="cine-showcase-intro">{recentWork.intro}</p>

        <h3 className="cine-showcase-title">{recentWork.title}</h3>

        <p className="cine-showcase-desc">{recentWork.description}</p>

        <div className="cine-showcase-focus">
          <p className="cine-showcase-focus-label">{recentWork.focusLabel}</p>
          <ul className="cine-showcase-focus-list">
            {recentWork.focusAreas.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="cine-showcase-cta-wrap">
          <a
            href={profile.linkedin}
            className="cine-showcase-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            {recentWork.ctaLabel}
            <ArrowUpRight className="h-3 w-3" strokeWidth={2} aria-hidden />
          </a>
        </div>
      </div>
    </article>
  );
}
