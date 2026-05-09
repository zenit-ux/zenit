"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Clock, TrendingUp, Users, BarChart3 } from "lucide-react";
import { staggerContainer, fadeInUp, defaultViewport } from "@/lib/motionVariants";
import { cn } from "@/lib/utils";

/* ─── Data ─────────────────────────────────────────────────── */

const items = [
  {
    icon: Zap,
    color: "cyan",
    label: "48h",
    title: "Matching in 48 hours",
    body: "Post your brief on Monday. Meet your squad on Tuesday. No recruiters, no back-and-forth, no wasted weeks.",
    span: "col-span-1 md:col-span-2",
  },
  {
    icon: Shield,
    color: "gold",
    label: "$0 risk",
    title: "SafePay escrow",
    body: "Funds are held until you approve each milestone. Zero financial exposure from day one.",
    span: "col-span-1",
  },
  {
    icon: Clock,
    color: "teal",
    label: "45d avg",
    title: "Ship in 45 days",
    body: "Our squads move fast. The average engagement delivers in 45 days, not quarters.",
    span: "col-span-1",
  },
  {
    icon: Users,
    color: "cyan",
    label: "500+",
    title: "Verified squads",
    body: "Every squad is vetted: past work, client ratings, response time, skills — all visible before you commit.",
    span: "col-span-1",
  },
  {
    icon: TrendingUp,
    color: "gold",
    label: "60d saved",
    title: "Cut hiring time by 60 days",
    body: "Traditional hiring averages 60 days. Zenit averages 36 hours. The difference compounds.",
    span: "col-span-1 md:col-span-2",
  },
  {
    icon: BarChart3,
    color: "teal",
    label: "4.9★",
    title: "Results you can verify",
    body: "Every delivery is rated. Every squad has a public track record. Accountability is built into the model.",
    span: "col-span-1",
  },
] as const;

const accent = {
  cyan: { badge: "text-cyan bg-cyan/10 border-cyan/20", icon: "text-cyan", stat: "text-cyan" },
  teal: { badge: "text-teal  bg-teal/10  border-teal/20",  icon: "text-teal",  stat: "text-teal"  },
  gold: { badge: "text-gold  bg-gold/10  border-gold/20",  icon: "text-gold",  stat: "text-gold"  },
} as const;

/* ─── Cell ─────────────────────────────────────────────────── */

function Cell({ item }: { item: (typeof items)[number] }) {
  const c = accent[item.color];
  const Icon = item.icon;
  return (
    <motion.div
      variants={fadeInUp}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/6 bg-card p-7",
        "transition-all duration-300 hover:border-white/12 hover:-translate-y-1",
        item.span
      )}
    >
      {/* Subtle corner glow on hover */}
      <div className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-current opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-[0.06]"
           style={{ color: item.color === "cyan" ? "#00b4d8" : item.color === "teal" ? "#0f766e" : "#f59e0b" }} />

      <div className="relative flex flex-col gap-5 h-full">
        {/* Top row */}
        <div className="flex items-start justify-between">
          <div className={cn("flex h-10 w-10 items-center justify-center rounded-xl border bg-current/5", c.badge)}>
            <Icon size={18} className={c.icon} />
          </div>
          <span className={cn("rounded-full border px-2.5 py-0.5 font-mono text-[11px] font-bold", c.badge)}>
            {item.label}
          </span>
        </div>

        {/* Text */}
        <div className="flex flex-col gap-2 flex-1">
          <h3 className="font-display text-[18px] font-bold leading-snug text-white">
            {item.title}
          </h3>
          <p className="font-sans text-sm leading-relaxed text-muted-foreground">
            {item.body}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Section ──────────────────────────────────────────────── */

export function BenefitsSection() {
  return (
    <section className="py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 font-sans text-sm font-semibold uppercase tracking-widest text-cyan">
            Why Zenit
          </p>
          <h2 className="font-display text-4xl font-bold leading-tight text-white md:text-5xl">
            Built for how the
            <br />
            best teams work today.
          </h2>
          <p className="mt-4 font-sans text-lg text-muted-foreground">
            No fluff. No middlemen. Just squads that deliver.
          </p>
        </div>

        {/* Bento grid — 3 cols desktop, 1 col mobile */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-1 gap-4 md:grid-cols-3"
        >
          {items.map((item) => (
            <Cell key={item.title} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
