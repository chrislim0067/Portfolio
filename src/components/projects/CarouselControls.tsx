"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CarouselControlsProps {
  currentIndex: number;
  maxIndex: number;
  total: number;
  visible: number;
  positionCount: number;
  onPrev: () => void;
  onNext: () => void;
  onGoTo: (index: number) => void;
  className?: string;
}

export function CarouselControls({
  currentIndex,
  maxIndex,
  total,
  visible,
  positionCount,
  onPrev,
  onNext,
  onGoTo,
  className,
}: CarouselControlsProps) {
  const atStart = currentIndex === 0;
  const atEnd = currentIndex >= maxIndex;

  return (
    <div className={cn("projects-controls", className)}>
      <div className="projects-controls-row">
        <button
          type="button"
          onClick={onPrev}
          disabled={atStart}
          className="projects-control-btn"
          aria-label="Previous project"
        >
          <ChevronLeft className="h-4 w-4" strokeWidth={2} />
        </button>

        <div className="projects-controls-center">
          <div
            className="projects-controls-dots"
            role="tablist"
            aria-label="Slide positions"
          >
            {Array.from({ length: positionCount }, (_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === currentIndex}
                aria-label={`Show projects ${i + 1}–${Math.min(i + visible, total)}`}
                onClick={() => onGoTo(i)}
                className={cn(
                  "projects-control-dot",
                  i === currentIndex && "projects-control-dot-active"
                )}
              />
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={onNext}
          disabled={atEnd}
          className="projects-control-btn"
          aria-label="Next project"
        >
          <ChevronRight className="h-4 w-4" strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}
