import { type ReactNode } from "react";
import { GlassCard } from "@/components/GlassCard";
import { cn } from "@/lib/utils";

interface SectionCardProps {
  children: ReactNode;
  className?: string;
  id?: string;
  title?: string;
  action?: ReactNode;
}

export function SectionCard({
  children,
  className,
  id,
  title,
  action,
}: SectionCardProps) {
  return (
    <GlassCard as="section" id={id} className={className}>
      {title && (
        <div className="flex items-center justify-between li-card-header">
          <h2 className="font-semibold li-text">{title}</h2>
          {action}
        </div>
      )}
      <div className="li-card-body">{children}</div>
    </GlassCard>
  );
}
