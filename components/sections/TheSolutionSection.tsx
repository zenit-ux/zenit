"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Zap, Shield, Star } from "lucide-react";
import gsap from "gsap";
import { staggerContainer, fadeInUp, defaultViewport } from "@/lib/motionVariants";

const solutions = [
  {
    icon: Zap,
    badge: "48h",
    title: "Match in 48 hours",
    body: "Post your brief. Our algorithm surfaces 2–3 vetted squads by tomorrow. No recruiters, no LinkedIn, no wasted weeks.",
    subtext: "Avg. 36 hours to first match",
    color: "cyan",
    borderGradient: "linear-gradient(135deg, rgba(0,180,216,0.7), rgba(15,118,110,0.4), rgba(0,180,216,0.2))",
    glowColor: "rgba(0,180,216,0.25)",
    iconColor: "text-cyan",
    badgeColor: "text-cyan bg-cyan/12 border-cyan/30",
    subtextColor: "text-cyan/70",
    cornerTop: "from-cyan/30",
  },
  {
    icon: Shield,
    badge: "$0 risk",
    title: "SafePay protection",
    body: "Funds locked in escrow before work begins. Released per milestone, only when you approve. Your money is never at risk.",
    subtext: "100% of projects protected",
    color: "gold",
    borderGradient: "linear-gradient(135deg, rgba(245,158,11,0.7), rgba(253,230,138,0.3), rgba(245,158,11,0.2))",
    glowColor: "rgba(245,158,11,0.25)",
    iconColor: "text-gold",
    badgeColor: "text-gold bg-gold/12 border-gold/30",
    subtextColor: "text-gold/70",
    cornerTop: "from-gold/30",
  },
  {
    icon: Star,
    badge: "Top 8%",
    title: "Elite squads only",
    body: "Every squad passes technical review — code, architecture, delivery track record. Companies see quality signals upfront.",
    subtext: "Top 8% of applicants accepted",
    color: "teal",
    borderGradient: "linear-gradient(135deg, rgba(15,118,110,0.7), rgba(0,180,216,0.4), rgba(15,118,110,0.2))",
    glowColor: "rgba(15,118,110,0.30)",
    iconColor: "text-teal",
    badgeColor: "text-teal bg-teal/12 border-teal/30",
    subtextColor: "text-teal/70",
    cornerTop: "from-teal/30",
  },
] as const;

export function TheSolutionSection() {
  const bgRef   = useRef<HTMLDivElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (bgRef.current) {
      gsap.to(bgRef.current, {
        opacity: 0.85,
        x: "2%",
        duration: 7,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    }
    if (orb1Ref.current) {
      gsap.to(orb1Ref.current, {
        opacity: 0.7,
        scale: 1.12,
        duration: 9,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 2,
      });
    }
    if (orb2Ref.current) {
      gsap.to(orb2Ref.current, {
        opacity: 0.55,
        scale: 1.08,
        duration: 6,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 1,
      });
    }

    return () => {
      [bgRef, orb1Ref, orb2Ref].forEach((r) => { if (r.current) gsap.killTweensOf(r.current); });
    };
  }, []);

  return (
    <section className="relative overflow-hidden py-28 bg-background">
      {/* Animated gradient — different direction than problem section */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          ref={bgRef}
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 70% 40%, rgba(0,180,216,0.14) 0%, rgba(15,118,110,0.10) 50%, transparent 80%)",
            opacity: 0.45,
          }}
        />
        <div
          ref={orb1Ref}
          className="absolute -top-24 left-1/4 h-[700px] w-[700px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(15,118,110,0.30) 0%, transparent 65%)",
            filter: "blur(80px)",
            opacity: 0.35,
          }}
        />
        <div
          ref={orb2Ref}
          className="absolute bottom-0 right-0 h-[550px] w-[550px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(0,180,216,0.22) 0%, transparent 65%)",
            filter: "blur(90px)",
            opacity: 0.28,
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mb-20 text-center"
        >
          <motion.p variants={fadeInUp} className="mb-4 font-sans text-sm font-semibold uppercase tracking-widest text-cyan">
            The solution
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="font-display font-bold leading-tight text-white"
            style={{ fontSize: "clamp(36px, 4.5vw, 60px)" }}
          >
            Everything you need
            <br />
            to ship <span className="text-shimmer">faster.</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-5 mx-auto max-w-xl font-sans text-lg leading-relaxed text-muted-foreground">
            Three pillars that make Zenit the only platform where speed, quality, and protection exist together.
          </motion.p>
        </motion.div>

        {/* Glassmorphism solution cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid gap-6 md:grid-cols-3"
        >
          {solutions.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                variants={fadeInUp}
                className="group relative"
              >
                {/* Gradient border */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-70 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: s.borderGradient, padding: "1px", borderRadius: "1rem" }}
                />

                {/* Glassmorphism card */}
                <div
                  className="relative overflow-hidden rounded-[15px] m-px p-8 transition-all duration-500 group-hover:-translate-y-2"
                  style={{
                    background: "rgba(13,19,19,0.85)",
                    backdropFilter: "blur(20px) saturate(160%)",
                    WebkitBackdropFilter: "blur(20px) saturate(160%)",
                    boxShadow: `0 0 0 transparent`,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 24px 60px ${s.glowColor}`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 transparent`;
                  }}
                >
                  {/* Top gradient fill */}
                  <div className={`pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b ${s.cornerTop} to-transparent opacity-30`} />

                  {/* Large background icon */}
                  <div className="pointer-events-none absolute -bottom-4 -right-4 opacity-[0.05]">
                    <Icon size={140} className={s.iconColor} />
                  </div>

                  <div className="relative flex flex-col gap-6">
                    <div className="flex items-start justify-between">
                      <div className={`flex h-14 w-14 items-center justify-center rounded-2xl border ${s.badgeColor}`}>
                        <Icon size={26} />
                      </div>
                      <span className={`rounded-full border px-3 py-1 font-mono text-xs font-bold ${s.badgeColor}`}>
                        {s.badge}
                      </span>
                    </div>
                    <div>
                      <h3 className="mb-3 font-display text-2xl font-bold text-white">{s.title}</h3>
                      <p className="font-sans text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                    </div>
                    <div className={`flex items-center gap-2 border-t border-white/8 pt-4 font-sans text-xs font-semibold ${s.subtextColor}`}>
                      <div className="h-1 w-5 rounded-full opacity-50" style={{ background: "currentColor" }} />
                      {s.subtext}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
