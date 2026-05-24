"use client";

import { X } from "lucide-react";
import { profile } from "@/data";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

export function ContactModal({ open, onClose }: ContactModalProps) {
  if (!open) return null;

  return (
    <div
      className="li-modal-backdrop fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="li-modal w-full max-w-md rounded-lg border border-[var(--li-border)] bg-[var(--li-bg-card)] p-0 shadow-lg"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-labelledby="contact-title"
      >
        <div className="li-border-b flex items-center justify-between px-6 py-4">
          <h2 id="contact-title" className="text-xl font-semibold li-text">
            Contact info
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full li-text-muted hover:bg-[var(--li-bg-hover)]"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="space-y-4 px-6 py-5 text-sm">
          <div>
            <p className="font-semibold li-text">Email</p>
            <a href={`mailto:${profile.email}`} className="li-link">
              {profile.email}
            </a>
          </div>
          <div>
            <p className="font-semibold li-text">LinkedIn</p>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="li-link"
            >
              {profile.linkedin}
            </a>
          </div>
          <div>
            <p className="font-semibold li-text">GitHub</p>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="li-link"
            >
              {profile.github}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
