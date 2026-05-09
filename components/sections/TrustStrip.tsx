"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const brands = [
  "Stripe","Vercel","Notion","Figma","Linear","Loom",
  "Retool","Clerk","Supabase","Prisma","Pomelo","Wise",
];

export function TrustStrip() {
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const half = track.scrollWidth / 2;

    tweenRef.current = gsap.to(track, {
      x: -half,
      duration: 28,
      ease: "none",
      repeat: -1,
      modifiers: { x: gsap.utils.unitize((x) => parseFloat(x) % half) },
    });

    return () => { tweenRef.current?.kill(); };
  }, []);

  const handleMouseEnter = () => {
    tweenRef.current?.pause();
    setPaused(true);
  };
  const handleMouseLeave = () => {
    tweenRef.current?.resume();
    setPaused(false);
  };

  const items = [...brands, ...brands];

  return (
    <div
      className="relative overflow-hidden border-y border-teal/10 py-5"
      style={{
        background: "linear-gradient(135deg, rgba(15,118,110,0.06) 0%, rgba(8,12,12,1) 40%, rgba(0,180,216,0.04) 100%)",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Left + right fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#080c0c] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#080c0c] to-transparent" />

      {/* Top/bottom inner glows */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal/25 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan/15 to-transparent" />

      {/* Label */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
        {paused && (
          <span className="rounded-full border border-white/10 bg-background/80 px-3 py-1 font-sans text-[10px] font-semibold text-muted-foreground backdrop-blur-sm">
            Paused
          </span>
        )}
      </div>

      <div ref={trackRef} className="flex items-center whitespace-nowrap">
        {items.map((b, i) => (
          <span key={`${b}-${i}`} className="inline-flex items-center">
            <span className="font-sans text-[13px] font-semibold tracking-wide text-white/50 select-none transition-colors duration-200 hover:text-white/80 px-8">
              {b}
            </span>
            <span className="h-1 w-1 rounded-full bg-teal/30 shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}
