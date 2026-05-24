"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { profile } from "@/data";

interface PhotoViewerModalProps {
  open: boolean;
  onClose: () => void;
}

export function PhotoViewerModal({ open, onClose }: PhotoViewerModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open || !mounted) return null;

  return createPortal(
    <div
      className="li-photo-viewer-backdrop"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="li-photo-viewer-card"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="photo-viewer-title"
        aria-describedby="photo-viewer-desc"
      >
        <header className="li-photo-viewer-header">
          <p id="photo-viewer-title" className="li-photo-viewer-kicker">
            Profile photo
          </p>
        </header>

        <div className="li-photo-viewer-body">
          <div className="li-photo-viewer-frame">
            <div className="li-photo-viewer-circle">
              <Image
                src={profile.avatar}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 240px, 280px"
                priority
              />
            </div>
          </div>

          <div className="li-photo-viewer-info">
            <h2 className="li-photo-viewer-name">{profile.name}</h2>
            <p id="photo-viewer-desc" className="li-photo-viewer-headline">
              {profile.headline}
            </p>
            <p className="li-photo-viewer-meta">{profile.location}</p>
          </div>
        </div>

        <footer className="li-photo-viewer-footer">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="li-btn-connect li-photo-viewer-link"
          >
            View LinkedIn
          </a>
        </footer>
      </div>
    </div>,
    document.body
  );
}
