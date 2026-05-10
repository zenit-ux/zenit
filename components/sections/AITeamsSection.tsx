"use client";

import { motion } from "framer-motion";
import { ArrowRight, Search, Code2, Rocket, Users } from "lucide-react";
import { defaultViewport } from "@/lib/motionVariants";

/* ─── AI Migration Timeline mockup ───────────────────────── */

function AITimelineMockup() {
  const months = [
    { label: "Month 1", name: "Assessment",  icon: Search,  color: "cyan",  desc: "Current stack audit + AI opportunity map" },
    { label: "Month 2", name: "Build",      icon: Code2,   color: "teal",  desc: "Incremental AI implementation on your stack" },
    { label: "Month 3", name: "Rollout",    icon: Rocket,  color: "gold",  desc: "Deploy + validation in real production" },
    { label: "Month 4", name: "Handoff",    icon: Users,   color: "cyan",  desc: "Your team takes control with full AI capability" },
  ];

  const colorMap = {
    cyan: {
      border: "border-cyan/30",
      bg: "bg-cyan/10",
      text: "text-cyan",
      glow: "shadow-[0_0_20px_rgba(0,180,216,0.2)]",
      bar: "bg-gradient-to-r from-cyan/60 to-cyan/30",
    },
    teal: {
      border: "border-teal/30",
      bg: "bg-teal/10",
      text: "text-teal",
      glow: "shadow-[0_0_20px_rgba(15,118,110,0.2)]",
      bar: "bg-gradient-to-r from-teal/60 to-teal/30",
    },
    gold: {
      border: "border-gold/30",
      bg: "bg-gold/8",
      text: "text-gold",
      glow: "shadow-[0_0_20px_rgba(245,158,11,0.15)]",
      bar: "bg-gradient-to-r from-gold/60 to-gold/30",
    },
  };

  return (
    <div
      className="overflow-hidden rounded-2xl border border-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.65)]"
      style={{ background: "#050f0f" }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between border-b border-white/5 px-5 py-3"
        style={{ background: "#020c0b" }}
      >
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
          <span className="font-mono text-[10px] text-white/50">AI Migration Roadmap · Zenit</span>
        </div>
        <span className="font-mono text-[9px] text-muted-foreground">4 meses · equipo incluido</span>
      </div>

      {/* Timeline grid */}
      <div className="grid grid-cols-4 gap-0 divide-x divide-white/5 p-5">
        {months.map((m) => {
          const c = colorMap[m.color as keyof typeof colorMap];
          const Icon = m.icon;
          return (
            <div key={m.label} className="flex flex-col gap-3 px-3 first:pl-0 last:pr-0">
              <span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground/60">{m.label}</span>
              <div className={`flex h-9 w-9 items-center justify-center rounded-xl border ${c.border} ${c.bg} ${c.glow}`}>
                <Icon size={14} className={c.text} />
              </div>
              <p className={`font-display text-[13px] font-bold ${c.text}`}>{m.name}</p>
              <p className="font-sans text-[11px] leading-relaxed text-muted-foreground">{m.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Progress bar */}
      <div className="border-t border-white/5 px-5 py-4">
        <div className="mb-2 flex justify-between">
          <span className="font-mono text-[9px] text-muted-foreground">Progreso típico</span>
          <span className="font-mono text-[9px] font-bold text-teal">Producto + capacidad propia</span>
        </div>
        <div className="relative h-1.5 overflow-hidden rounded-full bg-white/6">
          <div className="h-full w-full rounded-full bg-gradient-to-r from-cyan via-teal to-gold opacity-70" />
        </div>
      </div>
    </div>
  );
}

/* ─── Section ────────────────────────────────────────────── */

export function AITeamsSection() {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,180,216,0.07) 0%, rgba(15,118,110,0.05) 50%, transparent 80%)" }}
        />
        <div
          className="absolute left-1/4 -bottom-24 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(245,158,11,0.10) 0%, transparent 65%)", filter: "blur(100px)", opacity: 0.45 }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Text — centered top */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
          className="mb-10 text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/8 px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-widest text-gold">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
            For AI Teams
          </span>

          <h2
            className="mt-4 mb-6 font-display font-bold leading-tight text-white"
            style={{ fontSize: "clamp(24px, 2.8vw, 36px)" }}
          >
            Ship AI Features Fast.<br />
            <span className="text-shimmer">Not 9 Months Later.</span>
          </h2>

          {/* Alternatives grid */}
          <div className="mx-auto mb-8 grid max-w-2xl gap-3 sm:grid-cols-3">
            {[
              { label: "Hiring AI engineers", cost: "$300k+ salary", time: "9 months", risk: "Unproven fit. Equity commitment." },
              { label: "Consulting firm",      cost: "$200k delivery", time: "3 months", risk: "They leave. You still don't know AI." },
              { label: "DIY with your team",   cost: "Lost time",      time: "Slow",    risk: "Wrong architecture. High risk." },
            ].map((a) => (
              <div key={a.label} className="rounded-xl border border-red-500/15 bg-red-500/5 px-4 py-3 text-left">
                <p className="font-sans text-[11px] font-semibold text-white/70 mb-2">{a.label}</p>
                <p className="font-mono text-[10px] text-red-400">{a.time} · {a.cost}</p>
                <p className="font-sans text-[10px] text-white/40 mt-1">{a.risk}</p>
              </div>
            ))}
          </div>

          {/* Zenit AI path summary */}
          <div className="mx-auto mb-6 max-w-lg rounded-xl border border-gold/20 bg-gold/5 px-5 py-4 text-left">
            <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-gold mb-3">Zenit AI-native path</p>
            <div className="space-y-1 font-sans text-[12px] text-white/70">
              <p><span className="text-white/90 font-medium">Timeline:</span> 3–4 months to live feature. Your team learns it.</p>
              <p><span className="text-white/90 font-medium">Cost:</span> $80–150k (15–18% on project cost)</p>
              <p><span className="text-white/90 font-medium">ROI:</span> Breaks even month 2–3. Capability stays with you.</p>
            </div>
          </div>

          <a
            href="/ai-migration"
            className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-gold transition-all hover:gap-3"
          >
            Explore AI Transformation <ArrowRight size={14} />
          </a>
        </motion.div>

        {/* Mockup — full width below */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <AITimelineMockup />
        </motion.div>
      </div>
    </section>
  );
}
