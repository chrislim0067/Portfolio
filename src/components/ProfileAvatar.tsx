"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { PhotoViewerModal } from "@/components/PhotoViewerModal";
import { profile } from "@/data";

export function ProfileAvatar() {
  const [photoOpen, setPhotoOpen] = useState(false);

  const openPhoto = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setPhotoOpen(true);
  }, []);

  return (
    <>
      <div className="hero-avatar-wrap">
        <button
          type="button"
          className="hero-avatar hero-avatar-clickable"
          onClick={openPhoto}
          aria-label={`View profile photo of ${profile.name}`}
          aria-haspopup="dialog"
          aria-expanded={photoOpen}
        >
          <Image
            src={profile.avatar}
            alt=""
            fill
            className="pointer-events-none object-cover"
            priority
            sizes="152px"
          />
        </button>
      </div>

      <PhotoViewerModal open={photoOpen} onClose={() => setPhotoOpen(false)} />
    </>
  );
}
