"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";
  const label = isDark ? "Switch to light mode" : "Switch to dark mode";

  if (!mounted) {
    return <div className="li-btn-more" aria-hidden />;
  }

  return (
    <button
      type="button"
      className={cn("li-btn-more")}
      aria-label={label}
      title={isDark ? "Light mode" : "Dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? (
        <Sun className="h-4 w-4" strokeWidth={1.25} aria-hidden />
      ) : (
        <Moon className="h-4 w-4" strokeWidth={1.25} aria-hidden />
      )}
    </button>
  );
}
