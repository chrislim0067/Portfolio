"use client";

import {
  Briefcase,
  LayoutGrid,
  ChevronDown,
  Home,
  MessageSquare,
  UserPlus,
} from "lucide-react";
import Image from "next/image";
import { useMessaging } from "@/components/MessagingProvider";
import { profile, navItems } from "@/data";

const iconMap = {
  Home,
  Connect: UserPlus,
  Projects: LayoutGrid,
  Messaging: MessageSquare,
  Experience: Briefcase,
};

export function Navbar() {
  const { toggleCompose } = useMessaging();

  return (
    <header className="li-nav">
      <nav className="li-nav-inner">
        <div className="li-nav-lead-spacer" aria-hidden />
        <div className="li-nav-search-spacer" aria-hidden />

        <div className="ml-auto flex items-center">
          <ul className="li-nav-items">
            {navItems.map((item) => {
              const Icon = iconMap[item.label as keyof typeof iconMap] ?? Home;
              const content = (
                <>
                  <span className="relative inline-flex">
                    <Icon className="h-6 w-6" strokeWidth={1.25} />
                  </span>
                  <span className="mt-0.5 hidden lg:inline">{item.label}</span>
                </>
              );

              return (
                <li key={item.label} className="li-nav-item">
                  {item.label === "Messaging" ? (
                    <button type="button" onClick={toggleCompose}>
                      {content}
                    </button>
                  ) : item.label === "Connect" ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {content}
                    </a>
                  ) : (
                    <a href={item.href}>{content}</a>
                  )}
                </li>
              );
            })}

            <li className="li-nav-item">
              <button type="button">
                <span className="relative inline-block h-6 w-6 overflow-hidden rounded-full">
                  <Image
                    src={profile.avatar}
                    alt="Me"
                    fill
                    className="object-cover"
                    sizes="24px"
                  />
                </span>
                <span className="mt-0.5 hidden items-center gap-0.5 lg:inline-flex">
                  Me
                  <ChevronDown className="h-3 w-3" />
                </span>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
