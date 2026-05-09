import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type BorderVariant = "teal" | "cyan" | "gold" | "default";

interface GBCardProps {
  children: ReactNode;
  variant?: BorderVariant;
  className?: string;
  innerClassName?: string;
}

const borderGradients: Record<BorderVariant, string> = {
  teal: "bg-gradient-to-br from-teal/60 via-teal/10 to-transparent",
  cyan: "bg-gradient-to-br from-cyan/60 via-cyan/10 to-transparent",
  gold: "bg-gradient-to-br from-gold/60 via-gold/10 to-transparent",
  default: "bg-gradient-to-br from-white/15 via-white/5 to-transparent",
};

export function GBCard({
  children,
  variant = "default",
  className,
  innerClassName,
}: GBCardProps) {
  return (
    <div
      className={cn(
        "group relative rounded-2xl p-px",
        "transition-all duration-300",
        "hover:[&>div]:bg-[#1f1f1f]",
        borderGradients[variant],
        className
      )}
    >
      <div
        className={cn(
          "relative rounded-[calc(1rem-1px)] bg-[#1a1a1a] h-full p-6",
          "transition-colors duration-300",
          innerClassName
        )}
      >
        {children}
      </div>
    </div>
  );
}
