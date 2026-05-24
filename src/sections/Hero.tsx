"use client";

import { Plus, Send } from "lucide-react";
import { useState } from "react";
import { ContactModal } from "@/components/ContactModal";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useMessaging } from "@/components/MessagingProvider";
import { GlassCard } from "@/components/GlassCard";
import { ProfileAvatar } from "@/components/ProfileAvatar";
import { profile } from "@/data";

export function Hero() {
  const [contactOpen, setContactOpen] = useState(false);
  const { toggleCompose } = useMessaging();

  return (
    <>
      <GlassCard as="article" className="w-full">
        <div
          className="hero-banner"
          role="img"
          aria-label="Abstract AI network background"
        />

        <div className="hero-body">
          <div className="hero-avatar-row">
            <ProfileAvatar />
          </div>

          <div className="hero-info">
            <h1 className="hero-name">
              {profile.name}{" "}
              <span className="text-base font-normal li-text-muted">
                {profile.pronouns}
              </span>
            </h1>
            <p className="hero-headline">{profile.headline}</p>
            <p className="hero-meta">
              {profile.location}
              <span className="mx-1">·</span>
              <button
                type="button"
                onClick={() => setContactOpen(true)}
                className="li-link text-sm"
              >
                Contact info
              </button>
            </p>
            <p className="hero-connections">
              {profile.connections} connections
            </p>
          </div>

          <div className="hero-actions">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="li-btn-connect"
            >
              <Plus className="h-4 w-4" strokeWidth={2.5} />
              Connect
            </a>
            <button
              type="button"
              className="li-btn-message"
              onClick={toggleCompose}
            >
              <Send className="h-4 w-4" />
              Message
            </button>
            <ThemeToggle />
          </div>
        </div>
      </GlassCard>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
