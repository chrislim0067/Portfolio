"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { carouselSpring } from "@/lib/carousel-motion";
import { cn } from "@/lib/utils";
import { ProjectPreview } from "./ProjectPreview";

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  url: string;
  tags?: string[];
}

interface ProjectCardProps {
  project: ProjectItem;
  onBrowseNext: () => void;
  priority?: boolean;
  className?: string;
  suppressBrowseClick?: boolean;
}

/**
 * Two zones:
 * - Browse (image + details): advances carousel
 * - Actions (CTAs): opens project links — never moves carousel
 */
export function ProjectCard({
  project,
  onBrowseNext,
  priority = false,
  className,
  suppressBrowseClick = false,
}: ProjectCardProps) {
  const handleBrowse = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (suppressBrowseClick) return;
    onBrowseNext();
  };

  const preventBrowseTextSelect = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    if (e.button === 0) e.preventDefault();
  };

  const stopNav = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <motion.article
      className={cn("project-card", className)}
      whileHover={{ y: -3 }}
      transition={carouselSpring}
    >
      <button
        type="button"
        className="project-card-browse"
        onMouseDown={preventBrowseTextSelect}
        onClick={handleBrowse}
        disabled={suppressBrowseClick}
        aria-label={`Browse projects, show next after ${project.title}`}
      >
        <ProjectPreview
          image={project.image}
          title={project.title}
          priority={priority}
        />
        <div className="project-card-content">
          <p className="project-card-title">{project.title}</p>
          <p className="project-card-subtitle">{project.subtitle}</p>
          {project.tags && project.tags.length > 0 && (
            <div className="project-card-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="project-card-tag">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </button>

      <div
        className="project-card-actions"
        role="group"
        aria-label={`${project.title} links`}
        onPointerDown={stopNav}
        onClick={stopNav}
      >
        <a
          href={project.url}
          className="project-card-cta project-card-cta-primary"
          target={project.url.startsWith("#") ? undefined : "_blank"}
          rel={project.url.startsWith("#") ? undefined : "noopener noreferrer"}
          onClick={stopNav}
        >
          View Project
          <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
        </a>
      </div>
    </motion.article>
  );
}
