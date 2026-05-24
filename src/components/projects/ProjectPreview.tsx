"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cardHoverTransition } from "@/lib/carousel-motion";

interface ProjectPreviewProps {
  image: string;
  title: string;
  priority?: boolean;
}

export function ProjectPreview({
  image,
  title,
  priority = false,
}: ProjectPreviewProps) {
  return (
    <div className="project-preview">
      <motion.div
        className="project-preview-image-wrap"
        whileHover={{ scale: 1.04 }}
        transition={cardHoverTransition}
      >
        <Image
          src={image}
          alt={title}
          fill
          draggable={false}
          className="object-cover"
          sizes="(max-width: 767px) 100vw, 50vw"
          priority={priority}
        />
      </motion.div>
    </div>
  );
}
