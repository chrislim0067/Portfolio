"use client";

import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  type PanInfo,
} from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { projects } from "@/data";
import { useCarouselViewport } from "@/hooks/useCarouselViewport";
import { carouselSpring } from "@/lib/carousel-motion";
import {
  clampIndex,
  getCarouselWindow,
  getSlideOffsetPx,
  resolveIndexAfterSwipe,
  resolveSwipeStep,
} from "@/lib/carousel-utils";
import { CarouselControls } from "./CarouselControls";
import { ProjectCard } from "./ProjectCard";

const GAP = 12;

interface CarouselMetrics {
  cardWidth: number;
  stepPx: number;
  viewportWidth: number;
}

export function ProjectsCarousel() {
  const visible = useCarouselViewport();
  const reduceMotion = useReducedMotion();
  const viewportRef = useRef<HTMLDivElement>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [metrics, setMetrics] = useState<CarouselMetrics>({
    cardWidth: 0,
    stepPx: 0,
    viewportWidth: 0,
  });

  const x = useMotionValue(0);
  const isAnimatingRef = useRef(false);
  const isDraggingRef = useRef(false);
  const currentIndexRef = useRef(0);
  const indexAtDragStartRef = useRef(0);
  const [suppressCardClick, setSuppressCardClick] = useState(false);

  const { cardWidth, stepPx } = metrics;
  const total = projects.length;
  const { maxIndex, positionCount } = getCarouselWindow(total, visible);

  currentIndexRef.current = currentIndex;

  const measure = useCallback(() => {
    const el = viewportRef.current;
    if (!el) return;

    const viewportWidth = el.clientWidth;
    const gapsBetween = GAP * (visible - 1);
    const cardWidth = (viewportWidth - gapsBetween) / visible;
    const stepPx = cardWidth + GAP;

    setMetrics({ cardWidth, stepPx, viewportWidth });
    x.set(getSlideOffsetPx(currentIndexRef.current, stepPx));
  }, [visible, x]);

  useEffect(() => {
    measure();
    const el = viewportRef.current;
    if (!el) return;
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [measure]);

  useEffect(() => {
    setCurrentIndex((i) => clampIndex(i, maxIndex));
  }, [maxIndex]);

  const goToIndex = useCallback(
    (target: number) => {
      if (isAnimatingRef.current) return;

      const clamped = clampIndex(target, maxIndex);
      currentIndexRef.current = clamped;
      setCurrentIndex(clamped);

      const offset = getSlideOffsetPx(clamped, stepPx);
      if (reduceMotion || stepPx === 0) {
        x.set(offset);
        return;
      }

      isAnimatingRef.current = true;
      setIsAnimating(true);
      void animate(x, offset, carouselSpring).then(() => {
        isAnimatingRef.current = false;
        setIsAnimating(false);
      });
    },
    [maxIndex, reduceMotion, stepPx, x]
  );

  const next = useCallback(() => {
    const nextIndex = currentIndexRef.current + 1;
    if (nextIndex > maxIndex) return;
    goToIndex(nextIndex);
  }, [goToIndex, maxIndex]);

  const prev = useCallback(() => {
    const nextIndex = currentIndexRef.current - 1;
    if (nextIndex < 0) return;
    goToIndex(nextIndex);
  }, [goToIndex]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable
      ) {
        return;
      }
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [next, prev]);

  const onDragStart = useCallback(() => {
    if (isAnimatingRef.current) return;
    isDraggingRef.current = true;
    setIsDragging(true);
    indexAtDragStartRef.current = currentIndexRef.current;
    setSuppressCardClick(false);
  }, []);

  const onDragEnd = useCallback(
    (_: unknown, info: PanInfo) => {
      isDraggingRef.current = false;
      setIsDragging(false);

      const startIndex = indexAtDragStartRef.current;
      const moved =
        Math.abs(info.offset.x) > 8 || Math.abs(info.offset.y) > 8;

      if (moved) {
        setSuppressCardClick(true);
        window.setTimeout(() => setSuppressCardClick(false), 350);
      }

      if (isAnimatingRef.current || stepPx === 0) {
        goToIndex(startIndex);
        return;
      }

      const swipeStep = resolveSwipeStep(
        info.offset.x,
        info.velocity.x,
        stepPx
      );
      const target = resolveIndexAfterSwipe(startIndex, swipeStep, maxIndex);

      goToIndex(target);
    },
    [goToIndex, maxIndex, stepPx]
  );

  const dragConstraints = {
    left: getSlideOffsetPx(maxIndex, stepPx),
    right: 0,
  };

  const trackWidth =
    cardWidth > 0 ? total * cardWidth + (total - 1) * GAP : undefined;

  return (
    <div
      className="projects-showcase"
      aria-roledescription="carousel"
      aria-label="Projects showcase"
    >
      <div
        ref={viewportRef}
        className={`projects-showcase-viewport${cardWidth === 0 ? " projects-showcase-viewport--empty" : ""}${isDragging ? " projects-showcase-viewport--dragging" : ""}`}
      >
        {cardWidth > 0 && (
          <motion.div
            className={`projects-showcase-track${isAnimating ? " projects-showcase-track--animating" : ""}`}
            style={{
              x,
              gap: GAP,
              width: trackWidth,
              maxWidth: "none",
            }}
            drag={reduceMotion || isAnimating ? false : "x"}
            dragConstraints={dragConstraints}
            dragElastic={0}
            dragMomentum={false}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
          >
            {projects.map((project, i) => (
              <div
                key={project.id}
                className="projects-showcase-slide"
                style={{
                  width: cardWidth,
                  minWidth: cardWidth,
                  maxWidth: cardWidth,
                  flex: `0 0 ${cardWidth}px`,
                }}
              >
                <ProjectCard
                  project={project}
                  priority={i < visible}
                  suppressBrowseClick={suppressCardClick || isDragging}
                  onBrowseNext={() => {
                    if (!isAnimatingRef.current) next();
                  }}
                />
              </div>
            ))}
          </motion.div>
        )}
      </div>

      <CarouselControls
        currentIndex={currentIndex}
        maxIndex={maxIndex}
        total={total}
        visible={visible}
        positionCount={positionCount}
        onPrev={prev}
        onNext={next}
        onGoTo={goToIndex}
      />
    </div>
  );
}
