"use client";

import { MessagingProvider } from "@/components/MessagingProvider";
import { MessagingBar } from "@/components/MessagingBar";
import type { ReactNode } from "react";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <MessagingProvider>
      <div className="relative z-10">
        {children}
        <MessagingBar />
      </div>
    </MessagingProvider>
  );
}
