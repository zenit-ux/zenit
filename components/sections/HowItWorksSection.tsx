"use client";

import { useEffect, useRef } from "react";
import { Search, UserCheck, FileText, Rocket, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeader } from "@/components/SectionHeader";
import { cn } from "@/lib/utils";

const steps = [
  { number: "01", icon: FileText,    title: "Post your brief",       description: "Describe your project, timeline, and budget. Takes 5 minutes.", color: "teal" as const },
  { number: "02", icon: Search,      title: "We find your squad",    description: "Our matching engine surfaces the top 3 squads within 48 hours.", color: "cyan" as const },
  { number: "03", icon: UserCheck,   title: "Meet & select",         description: "Review profiles, past work, ratings. Pick the one you trust.", color: "teal" as const },
  { number: "04", icon: Rocket,      title: "Kick off with SafePay", description: "Funds held in escrow. Squad starts. You only pay for approved work.", color: "cyan" as const },
  { number: "05", icon: CheckCircle, title: "Approve & deliver",     description: "Milestone complete? Approve and release. No surprises, no overruns.", color: "gold" as const },
];

type StepColor = "teal" | "cyan" | "gold";

const colorMap: Record<StepColor, { dot: string; icon: string; number: string; line: string; glow: string }> = {
  teal: { dot: "bg-teal   border-teal/50",   icon: "bg-teal/15   text-teal",  number: "text-teal",  line: "#0f766e", glow: "rgba(15,118,110,0.5)"  },
  cyan: { dot: "bg-cyan   border-cyan/50",   icon: "bg-cyan/15   text-cyan",  number: "text-cyan",  line: "#00b4d8", glow: "rgba(0,180,216,0.5)"   },
  gold: { dot: "bg-gold   border-gold/50",   icon: "bg-gold/15   text-gold",  number: "text-gold",  line: "#f59e0b", glow: "rgba(245,158,11,0.5)"  },
};

export function HowItWorksSection() {
  const bgRef       = useRef<HTMLDivElement>(null);
  const circlesRef  = useRef<(HTMLDivElement | null)[]>([]);
  const linesRef    = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    if (bgRef.current) {
      gsap.to(bgRef.current, {
        opacity: 0.7,
        duration: 6,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    }

    const circles = circlesRef.current.filter(Boolean) as HTMLDivElement[];
    circles.forEach((circle, i) => {
      gsap.fromTo(circle,
        { scale: 0.6, opacity: 0 },
        {
          scale: 1, opacity: 1,
          duration: 0.5,
          ease: "back.out(1.7)",
          scrollTrigger: { trigger: circle, start: "top 85%", toggleActions: "play none none none" },
          delay: i * 0.12,
        }
      );
    });

    const lines = linesRef.current.filter(Boolean) as HTMLDivElement[];
    lines.forEach((line, i) => {
      gsap.fromTo(line,
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          duration: 0.6,
          ease: "power2.inOut",
          scrollTrigger: { trigger: line, start: "top 85%", toggleActions: "play none none none" },
          delay: i * 0.12 + 0.25,
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      if (bgRef.current) gsap.killTweensOf(bgRef.current);
    };
  }, []);

  return (
    <section className="relative overflow-hidden py-24 bg-background">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          ref={bgRef}
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 60% 50% at 80% 50%, rgba(15,118,110,0.14) 0%, transparent 70%)",
            opacity: 0.35,
          }}
        />
        <div
          className="absolute left-0 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full animate-breathe-slow"
          style={{
            background: "radial-gradient(circle, rgba(0,180,216,0.12) 0%, transparent 65%)",
            filter: "blur(90px)",
            opacity: 0.3,
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="The Process"
          title="How It Works"
          subtitle="From brief to delivery in five clear steps. No black boxes, no surprises."
          centered
          className="mb-16"
        />

        {/* ── Desktop: horizontal row ── */}
        <div className="hidden md:block">
          <div className="relative flex items-start justify-between gap-0">
            {steps.map((step, i) => {
              const colors = colorMap[step.color];
              const Icon = step.icon;
              const isLast = i === steps.length - 1;

              return (
                <div key={step.number} className="relative flex flex-1 flex-col items-center group">
                  {/* Top row: circle + connector line */}
                  <div className="relative flex w-full items-center">
                    {/* Circle */}
                    <div className="relative z-10 shrink-0 mx-auto">
                      <div
                        ref={(el) => { circlesRef.current[i] = el; }}
                        className={cn(
                          "relative flex h-16 w-16 items-center justify-center rounded-full border-2 shadow-lg transition-all duration-300 group-hover:scale-110",
                          colors.dot
                        )}
                        style={{ opacity: 0 }}
                      >
                        <Icon size={22} className="text-background" />
                        <div
                          className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 blur-sm"
                          style={{ background: colors.glow }}
                        />
                      </div>
                    </div>

                    {/* Connector line (after circle, before next) */}
                    {!isLast && (
                      <div
                        ref={(el) => { linesRef.current[i] = el; }}
                        className="absolute left-[calc(50%+2rem)] right-0 top-1/2 h-px -translate-y-1/2"
                        style={{ background: `linear-gradient(90deg, ${colors.line}, ${colorMap[steps[i + 1].color].line})` }}
                      />
                    )}
                  </div>

                  {/* Content below circle */}
                  <div className="mt-5 px-3 text-center max-w-[180px]">
                    <span className={cn("font-mono text-xs font-bold uppercase tracking-widest", colors.number)}>
                      {step.number}
                    </span>
                    <h3 className="mt-1 font-display text-base font-bold text-white leading-snug transition-colors duration-200 group-hover:text-cyan">
                      {step.title}
                    </h3>
                    <p className="mt-2 font-sans text-xs leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Mobile: vertical list ── */}
        <div className="md:hidden relative mx-auto max-w-md">
          {steps.map((step, i) => {
            const colors = colorMap[step.color];
            const Icon = step.icon;
            const isLast = i === steps.length - 1;

            return (
              <div key={step.number} className="relative flex gap-5 group">
                <div className="flex flex-col items-center shrink-0">
                  <div
                    ref={(el) => { /* mobile shares same refs — skip double-ref */ }}
                    className={cn(
                      "relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 shadow-lg shrink-0",
                      colors.dot
                    )}
                  >
                    <Icon size={18} className="text-background" />
                  </div>
                  {!isLast && (
                    <svg className="mt-1" width="2" height="64" viewBox="0 0 2 64" fill="none" aria-hidden>
                      <path d="M1 0 L1 64" stroke={colors.line} strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  )}
                </div>
                <div className={cn("flex-1 pb-10", isLast && "pb-0")}>
                  <span className={cn("font-mono text-xs font-bold uppercase tracking-widest", colors.number)}>
                    {step.number}
                  </span>
                  <h3 className="mt-1 font-display text-lg font-bold text-white transition-colors duration-200 group-hover:text-cyan">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 font-sans text-sm leading-relaxed text-muted-foreground max-w-xs">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Timeline callout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto mt-14 max-w-xl"
        >
          <div className="flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-teal/20 bg-teal/8 px-6 py-4">
            <span className="font-mono text-sm font-bold text-cyan drop-shadow-[0_0_8px_rgba(0,180,216,0.5)]">48h</span>
            <span className="text-muted-foreground">→</span>
            <span className="font-sans text-sm text-muted-foreground">matching</span>
            <span className="mx-2 h-px w-6 bg-border hidden sm:block" />
            <span className="font-mono text-sm font-bold text-cyan drop-shadow-[0_0_8px_rgba(0,180,216,0.5)]">45d</span>
            <span className="text-muted-foreground">→</span>
            <span className="font-sans text-sm text-muted-foreground">avg delivery</span>
            <span className="mx-2 h-px w-6 bg-border hidden sm:block" />
            <span className="font-sans text-sm font-semibold text-white">$0 risk</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
