"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Filter, Search, Star } from "lucide-react";
import { cn } from "@/lib/utils";

/* ═══════════════════════════════════════════════════════════
   MOCKUP COMPONENTS — Real-looking platform UI
   ═══════════════════════════════════════════════════════════ */

/* ─── Marketplace mockup ────────────────────────────────── */

function MarketplaceMockup() {
  const squads = [
    { name: "React & Node Squad", flag: "🇦🇷", stars: 4.9, reviews: 47, rate: "$85/h", tags: ["React", "Node.js", "PostgreSQL"], avail: true,  match: 98 },
    { name: "ML / AI Specialists",flag: "🇧🇷", stars: 4.8, reviews: 31, rate: "$95/h", tags: ["Python", "TensorFlow", "AWS"],    avail: true,  match: 91 },
    { name: "DevOps & Platform",  flag: "🇲🇽", stars: 4.9, reviews: 22, rate: "$80/h", tags: ["K8s", "Terraform", "GCP"],       avail: false, match: 87 },
    { name: "Full-Stack SaaS",    flag: "🇨🇴", stars: 4.7, reviews: 38, rate: "$90/h", tags: ["Next.js", "Prisma", "Stripe"],   avail: true,  match: 84 },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-cyan/15 shadow-[0_32px_80px_rgba(0,0,0,0.65),0_0_80px_rgba(0,180,216,0.12)]" style={{ background: "#050f0f" }}>
      {/* Browser bar */}
      <div className="flex items-center gap-3 border-b border-cyan/8 px-4 py-3" style={{ background: "#020c10" }}>
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full" style={{ background: "#ff5f57" }} />
          <div className="h-2.5 w-2.5 rounded-full" style={{ background: "#febc2e" }} />
          <div className="h-2.5 w-2.5 rounded-full" style={{ background: "#28c840" }} />
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="flex items-center gap-2 rounded-md border border-cyan/12 bg-cyan/4 px-4 py-1 font-mono text-[10px] text-white/40">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan/60" />
            zenit.io/marketplace
          </div>
        </div>
      </div>

      {/* Nav */}
      <div className="flex items-center gap-1 overflow-x-auto border-b border-white/5 px-4 py-2.5">
        {["Marketplace", "My Briefs", "SafePay", "Analytics", "Messages"].map((item, i) => (
          <span key={item} className={cn("shrink-0 rounded-lg px-3 py-1 font-sans text-[11px] font-medium transition-colors", i === 0 ? "bg-cyan/12 text-cyan border border-cyan/20" : "text-muted-foreground hover:text-white")}>
            {item}
          </span>
        ))}
      </div>

      {/* Search + filters */}
      <div className="flex gap-2 border-b border-white/5 px-4 py-3">
        <div className="flex flex-1 items-center gap-2 rounded-lg border border-white/8 bg-white/4 px-3 py-2">
          <Search size={12} className="shrink-0 text-muted-foreground" />
          <span className="font-sans text-[11px] text-muted-foreground">Search by skill, location, tech stack…</span>
        </div>
        <div className="flex items-center gap-1.5 rounded-lg border border-white/8 bg-white/4 px-3 py-2">
          <Filter size={11} className="text-muted-foreground" />
          <span className="font-sans text-[10px] text-muted-foreground">Filters</span>
        </div>
      </div>

      {/* Results header */}
      <div className="flex items-center justify-between px-4 py-2.5">
        <span className="font-sans text-[11px] text-muted-foreground">
          <span className="font-semibold text-white">312 squads</span> available now
        </span>
        <span className="font-sans text-[10px] text-muted-foreground">Sort: Best match ▾</span>
      </div>

      {/* Squad cards */}
      <div className="grid grid-cols-2 gap-2 px-4 pb-4">
        {squads.map((s) => (
          <div key={s.name} className="rounded-xl border border-white/6 bg-white/3 p-3 transition-colors hover:border-cyan/25 hover:bg-teal/5">
            <div className="mb-2 flex items-start justify-between gap-1">
              <div className="min-w-0">
                <p className="truncate font-display text-[11px] font-bold text-white">
                  {s.flag} {s.name}
                </p>
                <div className="flex items-center gap-1 text-[9px]">
                  <Star size={8} className="fill-gold text-gold" />
                  <span className="text-gold">{s.stars}</span>
                  <span className="text-muted-foreground">({s.reviews})</span>
                </div>
              </div>
              <span className={cn("shrink-0 rounded-full px-1.5 py-0.5 text-[8px] font-bold", s.avail ? "border border-teal/30 bg-teal/10 text-cyan" : "border border-white/8 text-muted-foreground")}>
                {s.avail ? "● Live" : "Matched"}
              </span>
            </div>
            <div className="mb-2 flex flex-wrap gap-1">
              {s.tags.map((t) => (
                <span key={t} className="rounded border border-white/8 bg-white/5 px-1 py-px font-mono text-[8px] text-muted-foreground">{t}</span>
              ))}
            </div>
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] font-bold text-white">{s.rate}</span>
              <span className="font-mono text-[9px] text-teal">{s.match}% match</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── SafePay mockup ─────────────────────────────────────── */

function SafePayMockup() {
  const milestones = [
    { name: "Discovery & Design",   amount: "$15,000", pct: 100, status: "released"    as const },
    { name: "Backend API & Auth",   amount: "$25,000", pct: 65,  status: "in-progress" as const },
    { name: "Frontend & Dashboard", amount: "$25,000", pct: 0,   status: "pending"     as const },
    { name: "Testing & Launch",     amount: "$15,000", pct: 0,   status: "pending"     as const },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-gold/15 shadow-[0_32px_80px_rgba(0,0,0,0.65),0_0_80px_rgba(245,158,11,0.10)]" style={{ background: "#050f0f" }}>
      {/* Header */}
      <div className="border-b border-gold/10 px-5 py-4" style={{ background: "#0c0a02" }}>
        <div className="flex items-start justify-between">
          <div>
            <p className="mb-0.5 font-mono text-[9px] uppercase tracking-wider text-muted-foreground">Active Project</p>
            <p className="font-display text-sm font-bold text-white">SaaS MVP — React + Node.js</p>
            <p className="font-sans text-[10px] text-muted-foreground">React & Node Squad · 🇦🇷 Buenos Aires</p>
          </div>
          <div className="text-right">
            <p className="mb-0.5 font-mono text-[9px] uppercase tracking-wider text-muted-foreground">Total Budget</p>
            <p className="font-mono text-lg font-bold text-gold">$80,000</p>
            <p className="font-mono text-[9px] text-teal">SafePay Protected</p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-4">
          <div className="mb-1.5 flex justify-between">
            <span className="font-sans text-[10px] text-muted-foreground">Overall progress</span>
            <span className="font-mono text-[10px] font-bold text-white">28%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-white/8">
            <div className="h-full rounded-full bg-gradient-to-r from-teal to-cyan" style={{ width: "28%" }} />
          </div>
        </div>
      </div>

      {/* Milestones */}
      <div className="divide-y divide-white/5">
        {milestones.map((m) => (
          <div key={m.name} className="flex items-center gap-4 px-5 py-3.5">
            <div className={cn(
              "h-2.5 w-2.5 shrink-0 rounded-full",
              m.status === "released"    ? "bg-teal" :
              m.status === "in-progress" ? "bg-gold animate-pulse" :
                                           "bg-white/20"
            )} />
            <div className="min-w-0 flex-1">
              <div className="mb-1 flex items-center justify-between">
                <span className="truncate font-sans text-[11px] font-medium text-white">{m.name}</span>
                <span className="shrink-0 font-mono text-[10px] font-bold text-gold ml-2">{m.amount}</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-white/8">
                <div
                  className={cn("h-full rounded-full", m.status === "released" ? "bg-teal" : "bg-gradient-to-r from-gold/70 to-gold")}
                  style={{ width: `${m.pct}%` }}
                />
              </div>
            </div>
            <span className={cn(
              "shrink-0 rounded-full border px-2 py-0.5 font-mono text-[9px] font-bold",
              m.status === "released"    ? "border-teal/30 bg-teal/10 text-teal" :
              m.status === "in-progress" ? "border-gold/30 bg-gold/10 text-gold" :
                                           "border-white/8 bg-white/4 text-muted-foreground"
            )}>
              {m.status === "released" ? "✓ Done" : m.status === "in-progress" ? "Active" : "Locked"}
            </span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-white/5 px-5 py-4">
        <div>
          <p className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">In Escrow</p>
          <p className="font-mono text-sm font-bold text-gold">$65,000</p>
        </div>
        <div className="text-center">
          <p className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">Released</p>
          <p className="font-mono text-sm font-bold text-teal">$15,000</p>
        </div>
        <div className="text-right">
          <p className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">Next Milestone</p>
          <button className="mt-0.5 rounded-lg border border-cyan/30 bg-cyan/10 px-3 py-1.5 font-mono text-[10px] font-bold text-cyan hover:bg-cyan/20 transition-colors">
            Approve & Release
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Analytics mockup ───────────────────────────────────── */

function AnalyticsMockup() {
  const stats = [
    { label: "Match Quality",    value: "94%",  sub: "+6% vs avg",     up: true  },
    { label: "On-time Rate",     value: "97%",  sub: "Industry: 71%",  up: true  },
    { label: "Avg Time to Ship", value: "41d",  sub: "Target: 45d",    up: true  },
    { label: "Client NPS",       value: "78",   sub: "+12 this month",  up: true  },
  ];

  const bars = [62, 75, 58, 80, 71, 88, 94];

  return (
    <div className="overflow-hidden rounded-2xl border border-teal/15 shadow-[0_32px_80px_rgba(0,0,0,0.65),0_0_80px_rgba(15,118,110,0.12)]" style={{ background: "#050f0f" }}>
      {/* Header */}
      <div className="flex items-center justify-between border-b border-teal/10 px-5 py-4" style={{ background: "#020c0b" }}>
        <div>
          <p className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">Kaizen · Match Intelligence</p>
          <p className="font-display text-sm font-bold text-white">Platform Analytics</p>
        </div>
        <div className="flex items-center gap-2">
          {["7d", "30d", "90d"].map((p, i) => (
            <span key={p} className={cn("rounded px-2 py-1 font-mono text-[9px] font-bold", i === 1 ? "bg-cyan/15 text-cyan border border-cyan/25" : "text-muted-foreground")}>
              {p}
            </span>
          ))}
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 gap-3 p-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl border border-white/6 bg-white/3 p-3.5">
            <p className="mb-1 font-sans text-[10px] text-muted-foreground">{s.label}</p>
            <p className="font-mono text-2xl font-bold text-white">{s.value}</p>
            <p className={cn("mt-0.5 font-mono text-[9px] font-semibold", s.up ? "text-teal" : "text-red-400")}>
              {s.up ? "↑" : "↓"} {s.sub}
            </p>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="border-t border-white/5 px-5 pb-5 pt-4">
        <div className="mb-3 flex items-center justify-between">
          <span className="font-sans text-[11px] font-semibold text-white/70">Match Quality Score — Last 7 matches</span>
          <span className="font-mono text-[9px] text-teal">↑ Improving</span>
        </div>
        <div className="flex h-20 items-end gap-1.5">
          {bars.map((h, i) => (
            <div key={i} className="flex flex-1 flex-col items-center gap-1">
              <div
                className="w-full rounded-t-md border-x border-t border-teal/20 bg-gradient-to-t from-teal/50 to-cyan/30"
                style={{ height: `${h}%` }}
              />
              <span className="font-mono text-[8px] text-muted-foreground">M{i + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   FEATURE SECTION — one feature with text + mockup
   ═══════════════════════════════════════════════════════════ */

interface FeatureItem { title: string; desc: string; }

interface FeatureSectionProps {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  features: FeatureItem[];
  cta: string;
  ctaHref: string;
  mockup: React.ReactNode;
  reverse?: boolean;
  centerRise?: boolean;
  accent: "teal" | "gold" | "cyan";
}

const accentMap = {
  teal: {
    eyebrow: "text-teal",
    badge: "border-teal/30 bg-teal/8",
    check: "text-teal",
    cta: "text-cyan",
    bg: "rgba(15,118,110,0.1)",
  },
  cyan: {
    eyebrow: "text-cyan",
    badge: "border-cyan/30 bg-cyan/8",
    check: "text-cyan",
    cta: "text-cyan",
    bg: "rgba(0,180,216,0.08)",
  },
  gold: {
    eyebrow: "text-gold",
    badge: "border-gold/30 bg-gold/8",
    check: "text-gold",
    cta: "text-gold",
    bg: "rgba(245,158,11,0.06)",
  },
};

function FeatureSection({ eyebrow, title, description, features, cta, ctaHref, mockup, reverse, centerRise, accent }: FeatureSectionProps) {
  const a = accentMap[accent];

  const textContent = (
    <motion.div
      initial={centerRise ? { opacity: 0, y: 50, scale: 0.95 } : { opacity: 0, x: reverse ? 60 : -60 }}
      whileInView={centerRise ? { opacity: 1, y: 0, scale: 1 } : { opacity: 1, x: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col justify-center gap-7"
    >
      <span className={cn("inline-flex w-fit items-center gap-2 rounded-full border px-3.5 py-1.5 font-mono text-[11px] font-bold uppercase tracking-widest", a.badge, a.eyebrow)}>
        {eyebrow}
      </span>

      <div>
        <h3 className="mb-4 font-display font-bold leading-tight text-white" style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}>
          {title}
        </h3>
        <p className="font-sans text-[17px] leading-relaxed text-muted-foreground max-w-lg">{description}</p>
      </div>

      <ul className="flex flex-col gap-3">
        {features.map((f) => (
          <li key={f.title} className="flex gap-3">
            <CheckCircle2 size={18} className={cn("mt-0.5 shrink-0", a.check)} />
            <div>
              <span className="font-sans text-[14px] font-semibold text-white">{f.title}</span>
              {f.desc && <p className="mt-0.5 font-sans text-sm text-muted-foreground">{f.desc}</p>}
            </div>
          </li>
        ))}
      </ul>

      <a href={ctaHref} className={cn("inline-flex items-center gap-2 font-sans text-sm font-semibold transition-all hover:gap-3", a.cta)}>
        {cta} <ArrowRight size={14} />
      </a>
    </motion.div>
  );

  const mockupContent = (
    <motion.div
      initial={centerRise ? { opacity: 0, y: 60, scale: 0.92 } : { opacity: 0, x: reverse ? -60 : 60 }}
      whileInView={centerRise ? { opacity: 1, y: 0, scale: 1 } : { opacity: 1, x: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
    >
      {mockup}
    </motion.div>
  );

  return (
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {reverse ? <>{mockupContent}{textContent}</> : <>{textContent}{mockupContent}</>}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   PLATFORM FEATURES SECTION
   ═══════════════════════════════════════════════════════════ */

export function PlatformFeatures() {
  return (
    <div className="relative">
      {/* ── Section 1: Marketplace ── */}
      <section className="relative overflow-hidden py-28">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 60% at 20% 50%, rgba(0,180,216,0.1) 0%, transparent 70%)" }} />
          <div className="absolute -right-32 top-1/4 h-[600px] w-[600px] rounded-full" style={{ background: "radial-gradient(circle, rgba(0,180,216,0.15) 0%, transparent 65%)", filter: "blur(80px)", opacity: 0.5 }} />
        </div>

        <FeatureSection
          eyebrow="Squad Marketplace"
          title={<>Browse <span className="text-shimmer-gold">500+ elite squads</span>,<br />find yours in minutes.</>}
          description="Every squad is technically vetted. Real reviews, real delivery history, real availability. Filter by tech stack, budget, or let Kaizen match automatically."
          features={[
            { title: "Advanced tech stack filtering", desc: "React, Node, Python, DevOps — find exactly what your project needs." },
            { title: "Verified reviews & delivery track record", desc: "See exactly what each squad has shipped, not just their pitch." },
            { title: "Real-time availability indicators", desc: "Know before you reach out whether a squad can start this week." },
          ]}
          cta="Browse the marketplace"
          ctaHref="/squads"
          mockup={<MarketplaceMockup />}
          accent="cyan"
        />
      </section>

      {/* Separator */}
      <div className="section-fade h-px" />

      {/* ── Section 2: SafePay ── */}
      <section className="relative overflow-hidden py-28">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 60% at 80% 50%, rgba(245,158,11,0.08) 0%, transparent 70%)" }} />
          <div className="absolute -left-32 top-1/3 h-[500px] w-[500px] rounded-full" style={{ background: "radial-gradient(circle, rgba(245,158,11,0.15) 0%, transparent 65%)", filter: "blur(90px)", opacity: 0.45 }} />
        </div>

        <FeatureSection
          reverse
          eyebrow="SafePay Protection"
          title={<>Your money is safe<br />until work is <span className="text-shimmer">approved.</span></>}
          description="Funds go into escrow before any work begins. Released only when you approve each milestone. If a squad underdelivers, you get your money back. No exceptions."
          features={[
            { title: "Milestone-based escrow", desc: "Break projects into deliverables. Pay only when each is complete." },
            { title: "Automatic dispute resolution", desc: "Kaizen monitors delivery and steps in if something goes wrong." },
            { title: "$0 financial risk, guaranteed", desc: "100% of projects on Zenit are covered by SafePay." },
          ]}
          cta="Learn about SafePay"
          ctaHref="/safepay"
          mockup={<SafePayMockup />}
          accent="gold"
        />
      </section>

      {/* Separator */}
      <div className="section-fade h-px" />

      {/* ── Section 3: Analytics ── */}
      <section className="relative overflow-hidden py-28">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 60% at 30% 60%, rgba(15,118,110,0.1) 0%, transparent 70%)" }} />
          <div className="absolute -right-20 bottom-0 h-[500px] w-[500px] rounded-full" style={{ background: "radial-gradient(circle, rgba(15,118,110,0.18) 0%, transparent 65%)", filter: "blur(80px)", opacity: 0.4 }} />
        </div>

        <FeatureSection
          centerRise
          eyebrow="Match Intelligence"
          title={<>Kaizen learns.<br />Every match gets <span className="text-shimmer-gold">smarter.</span></>}
          description="Kaizen doesn't just run a search. It tracks delivery outcomes, client satisfaction, and team performance — improving its matching accuracy with every project."
          features={[
            { title: "94% match quality score", desc: "Squads recommended by Kaizen deliver on time 94% of the time." },
            { title: "Continuous learning loop", desc: "Every project outcome trains the model to improve future matches." },
            { title: "Transparent reasoning", desc: "See exactly why Kaizen recommended each squad for your project." },
          ]}
          cta="See the full platform"
          ctaHref="/how-it-works"
          mockup={<AnalyticsMockup />}
          accent="teal"
        />
      </section>
    </div>
  );
}
