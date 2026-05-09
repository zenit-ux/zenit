"use client";

import { useRef, useState } from "react";
import type { MouseEvent, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  /** CSS color for the spotlight radial, e.g. "rgba(0,180,216,0.15)" */
  spotlightColor?: string;
  /** Show an animated gradient border on hover (Pomelo/21st.dev style) */
  animatedBorder?: boolean;
}

export function SpotlightCard({
  children,
  className,
  innerClassName,
  spotlightColor = "rgba(27, 94, 94, 0.18)",
  animatedBorder = false,
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [spot, setSpot] = useState({ x: 0, y: 0, visible: false });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const { left, top } = el.getBoundingClientRect();
    setSpot({ x: e.clientX - left, y: e.clientY - top, visible: true });
  };

  const handleMouseLeave = () =>
    setSpot((s) => ({ ...s, visible: false }));

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "group relative overflow-hidden rounded-2xl",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-1.5 hover:shadow-xl",
        animatedBorder
          ? "border-0 p-px gb-animated bg-transparent"
          : "border border-border",
        className
      )}
    >
      {/* Mouse-tracking radial spotlight — Aceternity signature */}
      <div
        className="pointer-events-none absolute inset-0 z-0 rounded-2xl transition-opacity duration-300"
        style={{
          opacity: spot.visible ? 1 : 0,
          background: `radial-gradient(480px circle at ${spot.x}px ${spot.y}px, ${spotlightColor}, transparent 60%)`,
        }}
      />

      {/* Card content */}
      <div
        className={cn(
          "relative z-10 h-full bg-[#141414] rounded-[calc(1rem-1px)]",
          innerClassName
        )}
      >
        {children}
      </div>
    </div>
  );
}
