"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight, Lock, CheckCircle2, Zap, Users, FileText, Handshake,
  Shield, BrainCircuit, AlertCircle, MapPin, Sparkles, Check, Clock,
  User, Star,
} from "lucide-react";
import { staggerContainer, fadeInUp, scaleIn, defaultViewport } from "@/lib/motionVariants";
import { NeuralNoise } from "@/components/ui/neural-noise";

// ─── Mockup Components ─────────────────────────────────────────────────────────

function KaizenBriefMockup() {
  return (
    <div className="rounded-2xl border border-white/8 bg-card overflow-hidden shadow-2xl">
      <div className="flex items-center gap-2 border-b border-white/6 px-4 py-3">
        <div className="h-2.5 w-2.5 rounded-full bg-red-500/50" />
        <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/50" />
        <div className="h-2.5 w-2.5 rounded-full bg-green-500/50" />
        <span className="ml-3 font-mono text-[10px] text-white/30">kaizen · discovery</span>
        <div className="ml-auto flex items-center gap-1.5">
          <div className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse" />
          <span className="font-mono text-[10px] text-teal">ACTIVE</span>
        </div>
      </div>

      <div className="p-4 space-y-3">
        <div className="flex gap-2.5">
          <div className="h-6 w-6 shrink-0 rounded-full bg-white/10 flex items-center justify-center">
            <User size={11} className="text-white/60" />
          </div>
          <div className="rounded-xl rounded-tl-sm bg-white/5 border border-white/8 px-3 py-2 max-w-[82%]">
            <p className="font-mono text-[11px] text-white/70 leading-relaxed">
              We&apos;re building a lending platform for Mexican SMBs. Need a full-stack team that knows fintech compliance and can ship in 90 days...
            </p>
          </div>
        </div>

        <div className="flex gap-2.5">
          <div className="h-6 w-6 shrink-0 rounded-full bg-teal/20 border border-teal/30 flex items-center justify-center">
            <BrainCircuit size={11} className="text-teal" />
          </div>
          <div className="rounded-xl rounded-tl-sm bg-teal/6 border border-teal/15 px-3 py-2.5 max-w-[82%]">
            <p className="font-mono text-[11px] text-white/80 leading-relaxed mb-2">
              Got it. Three quick questions before I start matching:
            </p>
            <ol className="space-y-1.5">
              {[
                "Target go-live? MVP vs full build changes the squad profile.",
                "CNBV licensed or building toward it?",
                "Existing codebase or greenfield?",
              ].map((q, i) => (
                <li key={i} className="flex gap-2 font-mono text-[10px] text-white/55">
                  <span className="text-teal shrink-0">{i + 1}.</span>
                  <span>{q}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="flex gap-2.5">
          <div className="h-6 w-6 shrink-0 rounded-full bg-white/10 flex items-center justify-center">
            <User size={11} className="text-white/60" />
          </div>
          <div className="rounded-xl rounded-tl-sm bg-white/5 border border-white/8 px-3 py-2 max-w-[82%]">
            <p className="font-mono text-[11px] text-white/70 leading-relaxed">
              90-day MVP, not licensed yet, greenfield React + Node
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-teal/25 bg-teal/5 p-3.5">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse" />
            <span className="font-mono text-[9px] font-bold text-teal uppercase tracking-widest">Brief generated</span>
          </div>
          <p className="font-sans text-sm font-semibold text-white mb-2">Fintech Lending Platform · Mexico SMB</p>
          <div className="flex flex-wrap gap-1.5 mb-3">
            {["React", "Node.js", "Fintech", "90-day MVP", "LATAM", "Greenfield"].map((tag) => (
              <span key={tag} className="rounded bg-white/8 border border-white/10 px-2 py-0.5 font-mono text-[9px] text-white/55">
                {tag}
              </span>
            ))}
          </div>
          <div className="space-y-1.5">
            <div className="flex justify-between">
              <span className="font-mono text-[9px] text-white/30">Brief quality</span>
              <span className="font-mono text-[9px] font-bold text-teal">94%</span>
            </div>
            <div className="h-1 rounded-full bg-white/8 overflow-hidden">
              <div className="h-full rounded-full bg-gradient-to-r from-teal to-cyan" style={{ width: "94%" }} />
            </div>
          </div>
          <div className="flex items-center gap-2 mt-3 pt-2.5 border-t border-white/6">
            <div className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
            <span className="font-mono text-[9px] text-cyan">Matching against 500+ squads · ETA 48h</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function AgentNetworkMockup() {
  const agents: Array<{ label: string; status: "DONE" | "ACTIVE" | "STANDBY"; detail: string }> = [
    { label: "Discovery Agent", status: "DONE", detail: "3 interviews · 48 data points" },
    { label: "Brief Generator", status: "DONE", detail: "94% quality score" },
    { label: "Squad Matcher", status: "ACTIVE", detail: "Scanning 500+ squads..." },
    { label: "Risk Monitor", status: "STANDBY", detail: "Activates at contract sign" },
    { label: "SafePay Validator", status: "STANDBY", detail: "Activates at first milestone" },
  ];

  return (
    <div className="rounded-2xl border border-white/8 bg-card overflow-hidden shadow-2xl">
      <div className="border-b border-white/6 px-5 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <BrainCircuit size={15} className="text-teal" />
          <span className="font-mono text-xs font-bold text-white">Kaizen Orchestrator</span>
        </div>
        <span className="rounded-full border border-gold/25 bg-gold/8 px-2.5 py-0.5 font-mono text-[9px] font-bold text-gold">
          BETA CONCEPT
        </span>
      </div>

      <div className="px-5 py-4 border-b border-white/6">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-teal/12 border border-teal/25 flex items-center justify-center">
            <BrainCircuit size={18} className="text-teal" />
          </div>
          <div className="flex-1">
            <p className="font-mono text-xs font-bold text-white">Kaizen · Main Thread</p>
            <div className="flex items-center gap-1.5 mt-0.5">
              <div className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse" />
              <span className="font-mono text-[9px] text-teal">Orchestrating 5 sub-agents</span>
            </div>
          </div>
          <div className="text-right">
            <p className="font-mono text-[9px] text-white/25">Session</p>
            <p className="font-mono text-[10px] text-white font-bold">43 min</p>
          </div>
        </div>
      </div>

      <div className="px-5 py-4 space-y-3">
        {agents.map((agent) => {
          const dotCls =
            agent.status === "DONE" ? "bg-teal" :
            agent.status === "ACTIVE" ? "bg-cyan animate-pulse" :
            "bg-white/18";
          const badgeCls =
            agent.status === "DONE" ? "bg-teal/12 text-teal" :
            agent.status === "ACTIVE" ? "bg-cyan/12 text-cyan" :
            "bg-white/6 text-white/25";
          return (
            <div key={agent.label} className="flex items-center gap-3">
              <div className={`h-2 w-2 rounded-full shrink-0 ${dotCls}`} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-mono text-[11px] text-white/80 font-medium">{agent.label}</span>
                  <span className={`rounded px-1.5 py-0.5 font-mono text-[8px] font-bold ${badgeCls}`}>
                    {agent.status}
                  </span>
                </div>
                <p className="font-mono text-[9px] text-white/28 mt-0.5">{agent.detail}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mx-5 mb-5 rounded-xl border border-gold/20 bg-gold/5 p-3 flex items-start gap-2.5">
        <AlertCircle size={12} className="text-gold shrink-0 mt-0.5" />
        <div>
          <p className="font-mono text-[9px] font-bold text-gold mb-0.5">Human-in-the-loop required</p>
          <p className="font-mono text-[9px] text-white/45 leading-relaxed">
            Payment releases, scope changes, and disputes require explicit approval from your team.
          </p>
        </div>
      </div>
    </div>
  );
}

function SafePayTimelineMockup() {
  const milestones: Array<{
    id: string; label: string; amount: string;
    status: "released" | "review" | "locked";
  }> = [
    { id: "M1", label: "Discovery & Architecture", amount: "$18,000", status: "released" },
    { id: "M2", label: "Core API & Auth", amount: "$14,000", status: "released" },
    { id: "M3", label: "Lending Engine", amount: "$18,000", status: "review" },
    { id: "M4", label: "Risk & Compliance Layer", amount: "$16,000", status: "locked" },
    { id: "M5", label: "Launch & Handoff", amount: "$14,000", status: "locked" },
  ];

  return (
    <div className="rounded-2xl border border-white/8 bg-card overflow-hidden shadow-2xl">
      <div className="border-b border-white/6 px-5 py-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Shield size={13} className="text-teal" />
            <span className="font-mono text-xs font-bold text-white">SafePay Escrow</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse" />
            <span className="font-mono text-[9px] font-bold text-teal">PROTECTED</span>
          </div>
        </div>
        <p className="font-sans text-xs text-white/45 mb-3">Fintech Lending Platform · Milestone 3 of 5</p>
        <div className="space-y-1.5">
          <div className="flex justify-between font-mono text-[9px]">
            <span className="text-white/30">Total locked</span>
            <span className="font-bold text-white">$80,000</span>
          </div>
          <div className="h-1.5 rounded-full bg-white/8 overflow-hidden">
            <div className="h-full rounded-full bg-gradient-to-r from-teal to-cyan" style={{ width: "40%" }} />
          </div>
          <div className="flex justify-between font-mono text-[9px]">
            <span className="text-teal">$32,000 released</span>
            <span className="text-white/30">$48,000 remaining</span>
          </div>
        </div>
      </div>

      <div className="px-5 py-4 space-y-3">
        {milestones.map((m) => {
          const iconCls =
            m.status === "released" ? "bg-teal/18 border-teal/30" :
            m.status === "review" ? "bg-cyan/12 border-cyan/25" :
            "bg-white/5 border-white/10";
          const amountCls =
            m.status === "released" ? "text-teal" :
            m.status === "review" ? "text-cyan" :
            "text-white/25";
          return (
            <div key={m.id} className="flex items-center gap-3">
              <div className={`h-7 w-7 shrink-0 rounded-lg flex items-center justify-center border ${iconCls}`}>
                {m.status === "released" ? <Check size={12} className="text-teal" /> :
                 m.status === "review" ? <Clock size={12} className="text-cyan" /> :
                 <Lock size={11} className="text-white/25" />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1">
                  <span className="font-mono text-[9px] text-white/35">{m.id}</span>
                  <span className={`font-mono text-[10px] font-bold ${amountCls}`}>{m.amount}</span>
                </div>
                <p className="font-sans text-xs text-white/65 truncate">{m.label}</p>
                {m.status === "review" && (
                  <div className="flex items-center gap-1.5 mt-1">
                    <div className="h-0.5 flex-1 rounded-full bg-white/8 overflow-hidden">
                      <div className="h-full rounded-full bg-cyan/60" style={{ width: "70%" }} />
                    </div>
                    <span className="font-mono text-[8px] text-cyan">In review</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function GenUIMockup() {
  return (
    <div className="rounded-2xl border border-white/8 bg-card overflow-hidden shadow-2xl">
      <div className="flex items-center gap-2 border-b border-white/6 px-4 py-3">
        <div className="h-2.5 w-2.5 rounded-full bg-red-500/50" />
        <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/50" />
        <div className="h-2.5 w-2.5 rounded-full bg-green-500/50" />
        <span className="ml-3 font-mono text-[10px] text-white/30">kaizen · workspace generator</span>
        <span className="ml-auto rounded-full border border-gold/25 bg-gold/8 px-2 py-0.5 font-mono text-[9px] font-bold text-gold">
          BETA CONCEPT
        </span>
      </div>

      <div className="grid grid-cols-5 min-h-[260px]">
        <div className="col-span-2 border-r border-white/6 p-4 flex flex-col">
          <p className="font-mono text-[9px] text-white/25 uppercase tracking-widest mb-3">Brief detected</p>
          <div className="rounded-lg border border-gold/20 bg-gold/6 p-3 mb-4">
            <div className="flex items-center gap-1.5 mb-1">
              <MapPin size={10} className="text-gold" />
              <span className="font-mono text-[9px] font-bold text-gold">Fleet Management App</span>
            </div>
            <p className="font-mono text-[8px] text-white/35 leading-relaxed">
              Real-time GPS · Driver routing · Performance analytics
            </p>
          </div>

          <p className="font-mono text-[9px] text-white/25 uppercase tracking-widest mb-2">Kaizen suggests</p>
          <div className="space-y-1.5 flex-1">
            {[
              "Map-first dashboard layout",
              "Driver card components",
              "Route timeline views",
              "Alert system for delays",
            ].map((s) => (
              <div key={s} className="flex items-start gap-1.5">
                <Sparkles size={8} className="text-teal mt-0.5 shrink-0" />
                <span className="font-mono text-[8px] text-white/45 leading-relaxed">{s}</span>
              </div>
            ))}
          </div>

          <button className="mt-3 w-full rounded-lg border border-teal/25 bg-teal/12 py-1.5 font-mono text-[9px] font-bold text-teal cursor-default">
            Generate workspace →
          </button>
        </div>

        <div className="col-span-3 p-3 flex flex-col">
          <p className="font-mono text-[9px] text-white/25 uppercase tracking-widest mb-2.5">Generated interface</p>

          <div className="flex gap-1 mb-2.5 pb-2 border-b border-white/6">
            {["Map", "Drivers", "Routes", "Analytics"].map((tab, i) => (
              <button
                key={tab}
                className={`rounded px-2.5 py-1 font-mono text-[8px] font-bold cursor-default ${
                  i === 0 ? "bg-teal/15 text-teal" : "text-white/25"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="rounded-xl bg-white/3 border border-white/6 overflow-hidden flex-1 relative flex items-center justify-center mb-2" style={{ minHeight: 100 }}>
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(13,148,136,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(13,148,136,0.5) 1px, transparent 1px)",
                backgroundSize: "18px 18px",
              }}
            />
            <div className="absolute top-4 left-6 h-2.5 w-2.5 rounded-full bg-cyan shadow-[0_0_10px_rgba(0,180,216,0.8)]" />
            <div className="absolute top-7 left-14 h-2 w-2 rounded-full bg-teal" />
            <div className="absolute top-10 left-20 h-2 w-2 rounded-full bg-teal" />
            <div className="absolute bottom-5 right-8 h-2.5 w-2.5 rounded-full bg-gold shadow-[0_0_10px_rgba(245,158,11,0.8)]" />
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 100" preserveAspectRatio="none">
              <polyline
                points="30,24 60,34 86,46 162,72"
                stroke="rgba(0,180,216,0.5)"
                strokeWidth="1.5"
                fill="none"
                strokeDasharray="4,3"
              />
            </svg>
            <p className="relative font-mono text-[9px] text-white/25">12 active routes · 3 alerts</p>
          </div>

          <div className="grid grid-cols-2 gap-1.5">
            {[
              { name: "Carlos M.", status: "On route", color: "teal" as const },
              { name: "Ana R.", status: "3 min late", color: "gold" as const },
            ].map((d) => (
              <div key={d.name} className="rounded-lg bg-white/4 border border-white/6 p-2 flex items-center gap-2">
                <div className={`h-5 w-5 shrink-0 rounded-full flex items-center justify-center ${d.color === "teal" ? "bg-teal/22" : "bg-gold/22"}`}>
                  <User size={9} className={d.color === "teal" ? "text-teal" : "text-gold"} />
                </div>
                <div>
                  <p className="font-mono text-[8px] font-bold text-white/75">{d.name}</p>
                  <p className={`font-mono text-[8px] ${d.color === "teal" ? "text-teal" : "text-gold"}`}>{d.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/6 px-4 py-2.5 flex items-center gap-2">
        <BrainCircuit size={11} className="text-teal shrink-0" />
        <p className="font-mono text-[9px] text-white/35 leading-relaxed">
          Kaizen generates this workspace from your brief — no templates, no manual configuration.
        </p>
      </div>
    </div>
  );
}

// ─── Step Data ─────────────────────────────────────────────────────────────────

const companySteps = [
  {
    n: "01", icon: FileText, color: "gold",
    title: "Post your project",
    body: "Describe your product, tech stack, timeline, and budget. No sign-up required to browse. Takes 10 minutes.",
    detail: "We accept projects from MVPs to full platform rebuilds. Minimum scope: 2-week engagement.",
  },
  {
    n: "02", icon: Zap, color: "cyan",
    title: "Get matched in 48h",
    body: "Kaizen finds 2–3 squads that have shipped something exactly like what you need — stack, vertical, and budget aligned.",
    detail: "Matching considers: stack, vertical, past delivery speed, timezone, and budget fit.",
  },
  {
    n: "03", icon: Users, color: "teal",
    title: "Meet the team",
    body: "One 30-minute call with each proposed squad. Review portfolio, ask technical questions, align on scope.",
    detail: "No commitment until you sign off on the scope document.",
  },
  {
    n: "04", icon: Lock, color: "gold",
    title: "SafePay locks funds",
    body: "Agree on scope and milestone schedule. Funds are locked in escrow before any work begins. Full control stays with you.",
    detail: "Funds only release per milestone — you maintain full control, always.",
  },
  {
    n: "05", icon: CheckCircle2, color: "cyan",
    title: "Ship and review",
    body: "Squad delivers on milestones. You review, request revisions, and approve. Final payment releases on your sign-off.",
    detail: "Avg. delivery: 30–45 days for an MVP. Complex platforms: 60–90 days.",
  },
];

const squadSteps = [
  {
    n: "01", icon: FileText, color: "teal",
    title: "Submit your application",
    body: "Share your squad profile: members, stack, past projects, and GitHub. We review within 48 hours.",
    detail: "Min requirements: 3 engineers, public portfolio, English B2+, at least one shipped product.",
  },
  {
    n: "02", icon: CheckCircle2, color: "cyan",
    title: "Kaizen calibra tu equipo",
    body: "Kaizen evalúa el squad como unidad — mix de seniority, historial de entregas, profundidad de stack. La calibración define a qué proyectos accedés, no si entrás o no.",
    detail: "Squads con juniors no quedan afuera — se matchean a proyectos que encajan con su madurez real.",
  },
  {
    n: "03", icon: Star, color: "teal",
    title: "Get your verified badge",
    body: "Once approved, your profile is visible to all companies. The Verified badge signals quality at a glance.",
    detail: "Verified squads receive 4× more match requests than unverified profiles.",
  },
  {
    n: "04", icon: Handshake, color: "cyan",
    title: "Accept a match",
    body: "Review briefs from matched companies. One intro call per brief. Accept the projects that fit your capacity.",
    detail: "You control availability — set a max of 1–3 concurrent projects.",
  },
  {
    n: "05", icon: Lock, color: "teal",
    title: "Deliver and get paid",
    body: "SafePay releases funds per milestone. Transfer hits your account within 24h of approval. No invoicing, no chasing.",
    detail: "Supports USD, BRL, ARS, MXN, COP, CLP. FX at mid-market rates.",
  },
];

const colorText: Record<string, string> = {
  cyan: "text-cyan", teal: "text-teal", gold: "text-gold",
};
const colorBorder: Record<string, string> = {
  cyan: "border-cyan/20 bg-cyan/6", teal: "border-teal/20 bg-teal/6", gold: "border-gold/20 bg-gold/6",
};

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function HowItWorksPage() {
  return (
    <main className="bg-background">

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <NeuralNoise
          color={[13, 148, 136]}
          opacity={0.30}
          speed={0.0007}
          intensity={0.95}
          className="absolute inset-0 h-full w-full"
          style={{ mixBlendMode: "screen" }}
        />
        <div className="pointer-events-none absolute inset-0 bg-background/58" aria-hidden />
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-teal/6 blur-[120px] animate-orb-1" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="flex flex-col items-center gap-6">
            <motion.p variants={fadeInUp} className="inline-flex items-center gap-2 rounded-full border border-teal/20 bg-teal/8 px-4 py-1.5 font-sans text-sm font-semibold text-teal">
              How it works
            </motion.p>
            <motion.h1
              variants={fadeInUp}
              className="font-display font-bold leading-[1.05] text-white max-w-3xl"
              style={{ fontSize: "clamp(28px, 3.8vw, 54px)" }}
            >
              Brief to first commit.
              <br />
              <span className="text-shimmer">48 hours, guaranteed.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="max-w-2xl font-sans text-lg leading-relaxed text-muted-foreground">
              Companies find vetted squads in 48 hours. Squads get qualified clients — without chasing leads.
              Every payment protected by SafePay. No exceptions, no surprises.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Platform overview — 3 numbers */}
      <section className="py-16 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="grid gap-8 sm:grid-cols-3 text-center"
          >
            {[
              { value: "500+", label: "Vetted squads", sub: "across 15 countries", color: "teal" },
              { value: "48h", label: "Average match time", sub: "from brief to intro call", color: "cyan" },
              { value: "12%", label: "Success fee only", sub: "zero cost to browse or post", color: "gold" },
            ].map((stat) => (
              <motion.div key={stat.value} variants={scaleIn} className="flex flex-col items-center gap-2">
                <span className={`font-display text-5xl font-bold ${
                  stat.color === "teal" ? "text-teal" :
                  stat.color === "cyan" ? "text-cyan" : "text-gold"
                }`}>{stat.value}</span>
                <span className="font-sans text-base font-semibold text-white">{stat.label}</span>
                <span className="font-sans text-sm text-muted-foreground">{stat.sub}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Kaizen Discovery */}
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              className="order-2 lg:order-1"
            >
              <KaizenBriefMockup />
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              className="order-1 lg:order-2"
            >
              <motion.p variants={fadeInUp} className="mb-3 font-sans text-sm font-semibold uppercase tracking-widest text-teal">
                Kaizen
              </motion.p>
              <motion.h2 variants={fadeInUp} className="font-display font-bold leading-tight text-white" style={{ fontSize: "clamp(26px, 3vw, 42px)" }}>
                Kaizen hace el trabajo
                <br />
                <span className="text-shimmer">antes de presentarte al squad.</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="mt-4 font-sans text-lg leading-relaxed text-muted-foreground">
                No completás un formulario y esperás. Kaizen te hace las preguntas correctas — tres, máximo — y genera un brief con el 94% de calidad promedio antes de siquiera buscar un squad.
              </motion.p>
              <motion.div variants={fadeInUp} className="mt-8 flex flex-col gap-3">
                {[
                  "El brief se genera en menos de 5 minutos",
                  "El matching corre contra 500+ squads activos",
                  "Solo te presentamos squads que ya entregaron algo similar",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-teal shrink-0 mt-0.5" />
                    <span className="font-sans text-sm text-white/70">{item}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* For Companies */}
      <section className="py-20 bg-card/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="mb-12"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
              <span className="rounded-full border border-gold/20 bg-gold/8 px-4 py-1.5 font-sans text-sm font-semibold text-gold">
                For Companies
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="font-display font-bold text-white max-w-xl" style={{ fontSize: "clamp(26px, 3vw, 42px)" }}>
              From brief to shipping squad
              <br />
              <span className="text-shimmer-gold">in five steps.</span>
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="grid gap-4 md:grid-cols-5"
          >
            {companySteps.map((step) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.n}
                  variants={scaleIn}
                  whileHover={{ y: -4, transition: { type: "spring", stiffness: 400, damping: 25 } }}
                  className="rounded-2xl border border-white/6 bg-card p-5 flex flex-col gap-3 relative overflow-hidden"
                >
                  <div className={`pointer-events-none absolute -top-8 left-1/2 h-20 w-24 -translate-x-1/2 rounded-full blur-[40px] ${
                    step.color === "gold" ? "bg-gold/8" : step.color === "cyan" ? "bg-cyan/8" : "bg-teal/8"
                  }`} />
                  <div className={`flex h-9 w-9 items-center justify-center rounded-xl border ${colorBorder[step.color]}`}>
                    <Icon size={16} className={colorText[step.color]} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`font-display text-xs font-bold opacity-40 ${colorText[step.color]}`}>{step.n}</span>
                      <h3 className="font-sans text-sm font-semibold text-white">{step.title}</h3>
                    </div>
                    <p className="font-sans text-xs leading-relaxed text-muted-foreground">{step.body}</p>
                  </div>
                  <p className="font-sans text-[11px] text-white/30 leading-relaxed mt-auto">{step.detail}</p>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={defaultViewport} className="mt-8">
            <Link
              href="/get-started"
              className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-sans text-sm font-semibold text-background transition-all duration-200 hover:bg-white/90"
            >
              Post your project
              <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* For Squads */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="mb-12"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
              <span className="rounded-full border border-cyan/20 bg-cyan/8 px-4 py-1.5 font-sans text-sm font-semibold text-cyan">
                For Squads
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="font-display font-bold text-white max-w-xl" style={{ fontSize: "clamp(26px, 3vw, 42px)" }}>
              Apply once. Get matched
              <br />
              <span className="text-shimmer">to the right clients, forever.</span>
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="grid gap-4 md:grid-cols-5"
          >
            {squadSteps.map((step) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.n}
                  variants={scaleIn}
                  whileHover={{ y: -4, transition: { type: "spring", stiffness: 400, damping: 25 } }}
                  className="rounded-2xl border border-white/6 bg-card p-5 flex flex-col gap-3 relative overflow-hidden"
                >
                  <div className={`pointer-events-none absolute -top-8 left-1/2 h-20 w-24 -translate-x-1/2 rounded-full blur-[40px] ${
                    step.color === "cyan" ? "bg-cyan/8" : "bg-teal/8"
                  }`} />
                  <div className={`flex h-9 w-9 items-center justify-center rounded-xl border ${colorBorder[step.color]}`}>
                    <Icon size={16} className={colorText[step.color]} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`font-display text-xs font-bold opacity-40 ${colorText[step.color]}`}>{step.n}</span>
                      <h3 className="font-sans text-sm font-semibold text-white">{step.title}</h3>
                    </div>
                    <p className="font-sans text-xs leading-relaxed text-muted-foreground">{step.body}</p>
                  </div>
                  <p className="font-sans text-[11px] text-white/30 leading-relaxed mt-auto">{step.detail}</p>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={defaultViewport} className="mt-8">
            <Link
              href="/get-started"
              className="group inline-flex items-center gap-2 rounded-xl border border-cyan/20 bg-cyan/8 px-6 py-3 font-sans text-sm font-semibold text-cyan transition-all duration-200 hover:border-cyan/40 hover:bg-cyan/12"
            >
              Apply as a squad
              <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SafePay */}
      <section className="py-28 bg-card/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
            >
              <motion.p variants={fadeInUp} className="mb-3 font-sans text-sm font-semibold uppercase tracking-widest text-teal">
                SafePay
              </motion.p>
              <motion.h2 variants={fadeInUp} className="font-display font-bold leading-tight text-white" style={{ fontSize: "clamp(26px, 3vw, 42px)" }}>
                El dinero no se mueve
                <br />
                <span className="text-shimmer">hasta que vos lo aprobás.</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="mt-4 font-sans text-lg leading-relaxed text-muted-foreground">
                SafePay es nuestro sistema de escrow construido específicamente para entrega de software. Los fondos se bloquean antes de empezar el trabajo y se liberan por milestone — dando a las empresas protección contra no entrega y a los squads protección contra no pago.
              </motion.p>
              <motion.div variants={fadeInUp} className="mt-8 flex flex-col gap-3">
                {[
                  "Fondos bloqueados antes del primer commit",
                  "Kaizen valida los criterios antes de liberar cada pago",
                  "Resolución de disputas incluida en todos los planes",
                  "Multi-currency: USD, BRL, ARS, MXN, COP, CLP",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <Shield size={15} className="text-teal shrink-0 mt-0.5" />
                    <span className="font-sans text-sm text-white/70">{item}</span>
                  </div>
                ))}
              </motion.div>
              <motion.div variants={fadeInUp} className="mt-8">
                <Link
                  href="/safepay"
                  className="group inline-flex items-center gap-2 font-sans text-sm font-semibold text-teal transition-colors hover:text-white"
                >
                  Cómo funciona SafePay
                  <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
            >
              <SafePayTimelineMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Agentic AI + Gen UI — Future Vision */}
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="mb-16 text-center"
          >
            <motion.p variants={fadeInUp} className="mb-3 font-sans text-sm font-semibold uppercase tracking-widest text-gold">
              Product vision
            </motion.p>
            <motion.h2 variants={fadeInUp} className="font-display font-bold text-white" style={{ fontSize: "clamp(26px, 3vw, 42px)" }}>
              Kaizen no es un asistente.
              <br />
              <span className="text-shimmer-gold">Es un orquestador de agentes.</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-4 max-w-2xl mx-auto font-sans text-lg leading-relaxed text-muted-foreground">
              Lo que ves hoy es el comienzo. Kaizen está construido para orquestar agentes de IA especializados que automatizan cada etapa del ciclo de desarrollo — desde el discovery hasta la validación del entregable.
            </motion.p>
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
            >
              <motion.div variants={fadeInUp} className="mb-6">
                <h3 className="font-sans text-xl font-semibold text-white mb-2">Agentic pipeline</h3>
                <p className="font-sans text-sm leading-relaxed text-muted-foreground">
                  Cada proyecto corre sobre un pipeline de sub-agentes coordinados por Kaizen. Discovery, generación de briefs, matching, monitoreo de riesgo y validación de pagos — todo orquestado, con tu aprobación en los momentos clave.
                </p>
              </motion.div>
              <motion.div variants={scaleIn}>
                <AgentNetworkMockup />
              </motion.div>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
            >
              <motion.div variants={fadeInUp} className="mb-6">
                <h3 className="font-sans text-xl font-semibold text-white mb-2">Gen UI — workspace generativo</h3>
                <p className="font-sans text-sm leading-relaxed text-muted-foreground">
                  A futuro, Kaizen no solo va a recomendar squads — va a generar el workspace de proyecto completo a partir del brief. Sin templates, sin configuración manual. La interfaz se adapta al tipo de producto que estás construyendo.
                </p>
              </motion.div>
              <motion.div variants={scaleIn}>
                <GenUIMockup />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 bg-card/20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="mb-16 text-center"
          >
            <motion.h2 variants={fadeInUp} className="font-display font-bold text-white" style={{ fontSize: "clamp(26px, 3vw, 42px)" }}>
              Preguntas frecuentes.
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="flex flex-col divide-y divide-white/6"
          >
            {[
              {
                q: "¿Cómo verifica Zenit a los squads?",
                a: "Revisamos repositorios de GitHub públicos, portfolios de proyectos pasados y hacemos una entrevista técnica corta con el team lead. Buscamos evidencia de entrega real — no solo calidad de código.",
              },
              {
                q: "¿Qué pasa si un squad no entrega?",
                a: "SafePay protege tus fondos. Si un milestone no se entrega, los fondos correspondientes quedan retenidos y Zenit media la disputa. Los casos no resueltos van a arbitraje basado en evidencia.",
              },
              {
                q: "¿Cuánto cuesta?",
                a: "Gratis para postear. Cobramos un 12% de success fee sobre el valor total del proyecto, al momento del contrato. Los squads no pagan ningún fee.",
              },
              {
                q: "¿Puedo trabajar con el mismo squad de nuevo?",
                a: "Sí. Una vez que trabajaste con un squad, aparecen en tu lista de 'Trusted squads'. Podés re-contratarlos directamente sin pasar por el proceso de matching nuevamente.",
              },
              {
                q: "¿Qué monedas están soportadas?",
                a: "Las empresas pagan en USD. Los squads pueden recibir pagos en USD, BRL, ARS, MXN, COP o CLP. Manejamos el FX al tipo de cambio mid-market sin markup.",
              },
              {
                q: "¿Qué pasa si nuestro equipo tiene juniors?",
                a: "Kaizen evalúa el promedio del equipo, no a cada integrante. Si hay juniors, entran automáticamente en TalentPath: trabajan en proyectos reales dentro del squad senior, el squad genera $340–600/mes por cada uno, y cuando están listos — pasan a ser squad completo en el marketplace.",
              },
              {
                q: "¿Qué es Kaizen exactamente?",
                a: "Kaizen es el agente de IA que está detrás de toda la plataforma. Hace el discovery, genera el brief, corre el matching y valida los entregables antes de liberar pagos. No es un chatbot — es el motor de Zenit.",
              },
            ].map((faq) => (
              <motion.div key={faq.q} variants={fadeInUp} className="py-6">
                <h3 className="mb-3 font-sans text-base font-semibold text-white">{faq.q}</h3>
                <p className="font-sans text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="flex flex-col items-center gap-5 text-center"
          >
            <motion.h2 variants={fadeInUp} className="font-display font-bold text-white" style={{ fontSize: "clamp(26px, 3vw, 42px)" }}>
              Post a brief today.
              <br />
              <span className="text-shimmer">Meet your squad in 48h.</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="max-w-md font-sans text-lg text-muted-foreground">
              Free to post. No commitment until you hire. SafePay protects every milestone from day one.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-3">
              <Link
                href="/get-started"
                className="group inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-sans text-base font-semibold text-background transition-all duration-200 hover:bg-white/90 hover:shadow-[0_0_28px_rgba(255,255,255,0.2)]"
              >
                Post a project
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/squads"
                className="inline-flex items-center gap-2 rounded-xl border border-white/12 px-8 py-4 font-sans text-base font-medium text-white/70 transition-all duration-200 hover:border-white/25 hover:text-white"
              >
                Apply as a squad
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
