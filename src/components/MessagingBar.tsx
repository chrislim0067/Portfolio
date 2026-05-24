"use client";

import { ChevronDown, Edit, Maximize2, Minimize2, Send } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useMessaging } from "@/components/MessagingProvider";
import { profile } from "@/data";
import { cn } from "@/lib/utils";

export function MessagingBar() {
  const {
    isVisible,
    isExpanded,
    isFullscreen,
    openCompose,
    openFullscreen,
    exitFullscreen,
    collapse,
  } = useMessaging();
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!isFullscreen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") exitFullscreen();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isFullscreen, exitFullscreen]);

  if (!isVisible) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = message.trim();
    if (!text) return;

    const subject = encodeURIComponent(
      `Portfolio message — ${profile.name}`
    );
    const body = encodeURIComponent(text);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setMessage("");
  };

  const handleCollapse = () => {
    setSent(false);
    collapse();
  };

  const handleNewMessage = () => {
    setSent(false);
    setMessage("");
    openCompose();
  };

  const showBody = isExpanded || isFullscreen;

  const handleMaximizeClick = () => {
    if (isFullscreen) {
      exitFullscreen();
      return;
    }
    openFullscreen();
  };

  return (
    <>
      {isFullscreen && (
        <button
          type="button"
          className="messaging-bar-backdrop"
          onClick={exitFullscreen}
          aria-label="Close fullscreen messaging"
        />
      )}

      <div
        className={cn(
          "messaging-bar",
          "messaging-bar--open",
          isExpanded && !isFullscreen && "messaging-bar--expanded",
          isFullscreen && "messaging-bar--fullscreen"
        )}
        role="dialog"
        aria-label="Messaging"
        aria-modal={isFullscreen}
      >
        <div className="messaging-bar-header li-border-b">
          <button
            type="button"
            className="flex min-w-0 flex-1 items-center gap-2 text-left"
            onClick={showBody ? handleCollapse : openCompose}
            aria-expanded={showBody}
          >
            <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full">
              <Image
                src={profile.avatar}
                alt=""
                fill
                className="object-cover"
                sizes="32px"
              />
            </div>
            <span className="truncate text-sm font-semibold li-text">
              Messaging
            </span>
          </button>
          <div className="flex items-center gap-1 li-text-muted">
            <button
              type="button"
              className="rounded p-1 hover:bg-[var(--li-bg-hover)]"
              aria-label="New message"
              onClick={handleNewMessage}
            >
              <Edit className="h-4 w-4" />
            </button>
            <button
              type="button"
              className="rounded p-1 hover:bg-[var(--li-bg-hover)]"
              aria-label={isFullscreen ? "Exit fullscreen" : "Fullscreen"}
              onClick={handleMaximizeClick}
            >
              {isFullscreen ? (
                <Minimize2 className="h-4 w-4" />
              ) : (
                <Maximize2 className="h-4 w-4" />
              )}
            </button>
            <button
              type="button"
              className="rounded p-1 hover:bg-[var(--li-bg-hover)]"
              aria-label="Minimize"
              onClick={handleCollapse}
            >
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
        </div>

        {showBody && (
          <div className="messaging-bar-body">
            {sent ? (
              <div className="messaging-bar-compose">
                <p className="text-sm leading-relaxed li-text">
                  Your email app should open with your message ready to send. If
                  it did not, email{" "}
                  <a href={`mailto:${profile.email}`} className="li-link">
                    {profile.email}
                  </a>
                  .
                </p>
                <button
                  type="button"
                  onClick={handleNewMessage}
                  className="li-link mt-3 text-sm font-semibold"
                >
                  Write another message
                </button>
              </div>
            ) : (
              <form className="messaging-bar-compose" onSubmit={handleSubmit}>
                <p className="mb-2 text-xs font-semibold li-text-muted">
                  To: {profile.name}
                </p>
                <label htmlFor="messaging-input" className="sr-only">
                  Message
                </label>
                <textarea
                  id="messaging-input"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={`Write a message to ${profile.name}…`}
                  className="messaging-bar-input"
                  rows={isFullscreen ? 12 : 5}
                  autoFocus
                  required
                />
                <div className="messaging-bar-footer">
                  <button
                    type="submit"
                    className="li-btn-connect messaging-bar-send"
                    disabled={!message.trim()}
                  >
                    <Send className="h-4 w-4" strokeWidth={2} />
                    Send
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </>
  );
}
