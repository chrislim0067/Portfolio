import { type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  id?: string;
}

/**
 * Theme-aware glass surface — pairs with .li-card CSS variables.
 * Light: mostly solid with soft blur; Dark: translucent so background shows through.
 */
export function GlassCard({
  children,
  className,
  as: Component = "div",
  id,
}: GlassCardProps) {
  return (
    <Component id={id} className={cn("li-card glass-card", className)}>
      {children}
    </Component>
  );
}
