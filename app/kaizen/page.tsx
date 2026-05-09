"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Brain,
  Zap,
  Target,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Bot,
  Shield,
  Clock,
  BarChart3,
  Activity,
  Search,
  Filter,
  BrainCircuit,
  LayoutDashboard,
  FolderKanban,
  Bell,
  User,
  AlertTriangle,
  Users,
} from "lucide-react";
import { staggerContainer, fadeInUp, scaleIn, slideInRight, defaultViewport } from "@/lib/motionVariants";
import { cn } from "@/lib/utils";
import { NeuralNoise } from "@/components/ui/neural-noise";

// ─── MOCKUP 1: Kaizen Discovery (hero) ───────────────────────────────────────

function KaizenDiscoveryMockup() {
  return (
    <div
      className="w-full overflow-hidden rounded-2xl border border-white/8 shadow-2xl"
      style={{ background: "#050d0d" }}
    >
      <div
        className="flex items-center gap-3 border-b border-white/6 px-4 py-3"
        style={{ background: "#080f0f" }}
      >
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-500/80" />
          <div className="h-3 w-3 rounded-full bg-yellow-400/80" />
          <div className="h-3 w-3 rounded-full bg-green-500/80" />
        </div>
        <div
          className="flex flex-1 items-center justify-center rounded-md px-3 py-1 font-mono text-xs text-white/30"
          style={{ background: "#0d1a1a" }}
        >
          zenit.io/brief
        </div>
      </div>

      <div className="flex items-center justify-between border-b border-white/6 px-5 py-3">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-cyan/20 bg-cyan/10">
            <Bot size={14} className="text-cyan" />
          </div>
          <span className="font-sans text-sm font-semibold text-white">Kaizen Discovery</span>
        </div>
        <div className="flex items-center gap-1.5 rounded-full border border-cyan/25 bg-cyan/8 px-2.5 py-0.5">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan" />
          <span className="font-mono text-xs font-semibold text-cyan">LIVE</span>
        </div>
      </div>

      <div className="flex flex-col gap-4 p-5">
        <div className="flex items-start gap-2.5">
          <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-cyan/20 bg-cyan/15">
            <Bot size={12} className="text-cyan" />
          </div>
          <div
            className="max-w-[82%] rounded-2xl rounded-tl-sm border border-cyan/12 px-4 py-3"
            style={{ background: "rgba(0,180,216,0.06)" }}
          >
            <p className="font-sans text-xs leading-relaxed text-white/75">
              Hi. Tell me what you&apos;re building. Don&apos;t overthink the format — I&apos;ll extract the technical requirements.
            </p>
          </div>
        </div>

        <div className="flex justify-end">
          <div
            className="max-w-[80%] rounded-2xl rounded-tr-sm border border-white/8 px-4 py-3"
            style={{ background: "rgba(255,255,255,0.05)" }}
          >
            <p className="font-sans text-xs leading-relaxed text-white/60">
              We need a SaaS dashboard for our logistics company. React frontend, probably Node backend, real-time tracking...
            </p>
          </div>
        </div>

        <div className="flex items-start gap-2.5">
          <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-cyan/20 bg-cyan/15">
            <Bot size={12} className="text-cyan" />
          </div>
          <div
            className="max-w-[82%] rounded-2xl rounded-tl-sm border border-cyan/12 px-4 py-3"
            style={{ background: "rgba(0,180,216,0.06)" }}
          >
            <p className="font-sans text-xs leading-relaxed text-white/75">
              Got it. Three quick questions: Do you have an existing API or starting fresh? Hard deadline or flexible? Full squad-led or you have devs on your side?
            </p>
          </div>
        </div>

        <div className="flex justify-end">
          <div
            className="max-w-[80%] rounded-2xl rounded-tr-sm border border-white/8 px-4 py-3"
            style={{ background: "rgba(255,255,255,0.05)" }}
          >
            <p className="font-sans text-xs leading-relaxed text-white/60">
              Fresh API. 12 weeks hard deadline. Fully squad-led.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/6 px-5 py-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-white/40">Brief Intelligence</span>
          <span className="font-mono text-xs font-bold text-cyan">78%</span>
        </div>
        <div className="mb-3 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
          <div className="h-full rounded-full bg-cyan" style={{ width: "78%" }} />
        </div>
        <div className="flex flex-wrap gap-1.5">
          {["React", "Node.js", "WebSockets", "12 weeks", "Full-stack"].map((tag) => (
            <span key={tag} className="rounded-md border border-cyan/15 bg-cyan/8 px-2 py-0.5 font-mono text-[10px] text-cyan">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── MOCKUP 2: Product Brain (Feature 1 — unique) ────────────────────────────

function ProductBrainMockup() {
  const risks = [
    { text: "Real-time complexity", level: "medium" as const },
    { text: "Tight 12-week deadline", level: "high" as const },
    { text: "No existing codebase", level: "low" as const },
  ];

  return (
    <div
      className="w-full overflow-hidden rounded-2xl border border-white/8 shadow-2xl"
      style={{ background: "#050d0d" }}
    >
      <div
        className="flex items-center justify-between border-b border-white/6 px-5 py-3"
        style={{ background: "#080f0f" }}
      >
        <div className="flex items-center gap-2">
          <BrainCircuit size={15} className="text-teal" />
          <span className="font-sans text-sm font-semibold text-white">Product Brain</span>
        </div>
        <span className="rounded-full border border-teal/20 bg-teal/8 px-2.5 py-0.5 font-mono text-[9px] font-bold text-teal">
          12 insights extracted
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2.5 p-4">
        <div className="rounded-xl border border-teal/15 bg-teal/5 p-3">
          <p className="mb-2 font-mono text-[8px] font-bold uppercase tracking-widest text-teal">Product</p>
          <ul className="space-y-1.5">
            {["SaaS logistics dashboard", "Real-time fleet tracking", "B2B · SME segment"].map((item) => (
              <li key={item} className="flex items-start gap-1.5">
                <div className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-teal" />
                <span className="font-mono text-[10px] leading-relaxed text-white/60">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-cyan/15 bg-cyan/5 p-3">
          <p className="mb-2 font-mono text-[8px] font-bold uppercase tracking-widest text-cyan">Technical</p>
          <ul className="space-y-1.5">
            {["React · Node.js", "WebSockets required", "Greenfield · No existing"].map((item) => (
              <li key={item} className="flex items-start gap-1.5">
                <div className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan" />
                <span className="font-mono text-[10px] leading-relaxed text-white/60">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-gold/15 bg-gold/5 p-3">
          <p className="mb-2 font-mono text-[8px] font-bold uppercase tracking-widest text-gold">Business</p>
          <ul className="space-y-1.5">
            {["12-week hard deadline", "Full squad model", "$80–120K budget"].map((item) => (
              <li key={item} className="flex items-start gap-1.5">
                <div className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                <span className="font-mono text-[10px] leading-relaxed text-white/60">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/3 p-3">
          <p className="mb-2 font-mono text-[8px] font-bold uppercase tracking-widest text-white/30">Risk signals</p>
          <ul className="space-y-2">
            {risks.map((r) => (
              <li key={r.text} className="flex items-center justify-between gap-1.5">
                <span className="font-mono text-[9px] text-white/45">{r.text}</span>
                <span className={cn(
                  "font-mono text-[8px] font-bold shrink-0",
                  r.level === "high" && "text-red-400",
                  r.level === "medium" && "text-amber-400",
                  r.level === "low" && "text-teal",
                )}>{r.level}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/6 px-5 py-3.5">
        <div className="mb-1.5 flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-widest text-white/30">Brief Intelligence</span>
          <span className="font-mono text-xs font-bold text-teal">94%</span>
        </div>
        <div className="mb-2.5 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
          <div className="h-full rounded-full bg-gradient-to-r from-teal to-cyan" style={{ width: "94%" }} />
        </div>
        <div className="flex items-center gap-2">
          <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal" />
          <span className="font-mono text-[9px] text-teal">Ready to match · Scanning 500+ squads</span>
        </div>
      </div>
    </div>
  );
}

// ─── MOCKUP 3: Precision Match Cards ─────────────────────────────────────────

const squadMatches = [
  {
    name: "Velocity Squad", flag: "🇦🇷", score: "98% match",
    reason: "Delivered 4 React+Node SaaS dashboards with real-time features in the last 12 months.",
    stack: ["React", "Node.js", "Socket.io", "PostgreSQL"], rate: "$85/h",
  },
  {
    name: "CoreStack Labs", flag: "🇨🇴", score: "91% match",
    reason: "Specialized in logistics tech — built 2 fleet-tracking platforms with live WebSocket feeds.",
    stack: ["React", "Express", "Redis", "Docker"], rate: "$79/h",
  },
  {
    name: "ByteForge", flag: "🇲🇽", score: "84% match",
    reason: "Full-stack team with strong SaaS architecture experience across 3 similar verticals.",
    stack: ["Next.js", "Node.js", "Prisma", "AWS"], rate: "$72/h",
  },
];

function PrecisionMatchMockup() {
  return (
    <div
      className="w-full overflow-hidden rounded-2xl border border-white/8 shadow-2xl"
      style={{ background: "#050d0d" }}
    >
      <div
        className="flex items-center justify-between border-b border-white/6 px-5 py-3"
        style={{ background: "#080f0f" }}
      >
        <div className="flex items-center gap-2">
          <Filter size={14} className="text-teal" />
          <span className="font-sans text-sm font-semibold text-white">Squad Matches</span>
        </div>
        <span className="font-mono text-xs text-white/35">3 recommendations</span>
      </div>

      <div className="flex flex-col divide-y divide-white/4">
        {squadMatches.map((squad, i) => (
          <div key={squad.name} className="px-5 py-4">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="text-base">{squad.flag}</span>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-sans text-sm font-semibold text-white">{squad.name}</span>
                    <span className="flex items-center gap-1">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
                      <span className="font-mono text-[10px] text-green-400">Available</span>
                    </span>
                  </div>
                  <span className="font-mono text-xs text-white/35">{squad.rate}</span>
                </div>
              </div>
              <span className={cn(
                "shrink-0 rounded-full px-2.5 py-0.5 font-mono text-xs font-bold",
                i === 0
                  ? "border border-teal/30 bg-teal/10 text-teal"
                  : "border border-teal/20 bg-teal/6 text-teal/80"
              )}>
                {squad.score}
              </span>
            </div>
            <p className="mt-2 font-sans text-xs leading-relaxed text-white/45">{squad.reason}</p>
            <div className="mt-2.5 flex flex-wrap gap-1">
              {squad.stack.map((t) => (
                <span key={t} className="rounded border border-white/8 bg-white/4 px-1.5 py-0.5 font-mono text-[10px] text-white/40">
                  {t}
                </span>
              ))}
            </div>
            <button className="mt-2.5 font-sans text-xs font-medium text-cyan transition-colors hover:text-cyan/80">
              Why this match ↓
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── MOCKUP 4: Delivery Intelligence Dashboard ────────────────────────────────

const milestones = [
  { name: "Discovery & Architecture", status: "Done", progress: 100 },
  { name: "Backend API + Auth", status: "Active", progress: 62 },
  { name: "Frontend Dashboard", status: "Pending", progress: 0 },
  { name: "QA & Deployment", status: "Pending", progress: 0 },
];

function DeliveryDashboardMockup() {
  return (
    <div
      className="w-full overflow-hidden rounded-2xl border border-white/8 shadow-2xl"
      style={{ background: "#050d0d" }}
    >
      <div
        className="flex items-center justify-between border-b border-white/6 px-5 py-3"
        style={{ background: "#080f0f" }}
      >
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
          <span className="font-sans text-sm font-semibold text-white">Active · React &amp; Node Squad · 🇦🇷</span>
        </div>
        <Activity size={14} className="text-white/30" />
      </div>

      <div className="px-5 pb-3 pt-4">
        <div className="mb-1.5 flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-widest text-white/40">Overall Progress</span>
          <span className="font-mono text-xs font-bold text-white">65%</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-white/5">
          <div
            className="h-full rounded-full"
            style={{ width: "65%", background: "linear-gradient(90deg, #0f766e, #00b4d8)" }}
          />
        </div>
      </div>

      <div className="flex flex-col gap-0.5 px-5 pb-4">
        {milestones.map((m) => (
          <div key={m.name} className="flex items-center gap-3 py-2">
            <div className="flex h-5 w-5 shrink-0 items-center justify-center">
              {m.status === "Done" ? (
                <CheckCircle2 size={14} className="text-teal" />
              ) : m.status === "Active" ? (
                <div className="h-3 w-3 rounded-full border-2 border-cyan" style={{ borderStyle: "dashed" }} />
              ) : (
                <div className="h-3 w-3 rounded-full border border-white/15" />
              )}
            </div>
            <span className={cn(
              "flex-1 font-sans text-xs",
              m.status === "Done" ? "text-white/50 line-through" :
              m.status === "Active" ? "text-white" : "text-white/30"
            )}>
              {m.name}
            </span>
            <span className={cn(
              "font-mono text-[10px] font-semibold",
              m.status === "Done" ? "text-teal" :
              m.status === "Active" ? "text-cyan" : "text-white/25"
            )}>
              {m.status}
            </span>
          </div>
        ))}
      </div>

      <div
        className="mx-4 mb-4 overflow-hidden rounded-xl border border-gold/20"
        style={{ background: "rgba(245,158,11,0.06)" }}
      >
        <div className="flex items-center gap-2 border-b border-gold/10 px-4 py-2">
          <Zap size={12} className="text-gold" />
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-gold">Kaizen AI Alert</span>
        </div>
        <div className="px-4 py-3">
          <p className="font-sans text-xs leading-relaxed text-white/60">
            Scope creep detected in milestone 2. Backend auth scope expanded by ~18%. Recommend brief clarification before proceeding.
          </p>
          <button className="mt-2 font-sans text-xs font-semibold text-gold transition-colors hover:text-gold/80">
            Resolve →
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── MOCKUP 5: Proactive Dashboard (center-screen) ────────────────────────────

function KaizenDashboardMockup() {
  const projects = [
    { name: "Logistics SaaS Dashboard", squad: "Velocity Squad · 🇦🇷", progress: 65, status: "M3 in review", statusColor: "cyan" as const, budget: "$80K" },
    { name: "Fintech Lending Platform", squad: "CoreStack Labs · 🇨🇴", progress: 28, status: "On track", statusColor: "teal" as const, budget: "$120K" },
  ];

  const kaizenAlerts = [
    { Icon: AlertTriangle, color: "gold" as const, text: "M2 scope +18%. Review recommended.", action: "Review →" },
    { Icon: Zap, color: "cyan" as const, text: "CoreStack Labs available — matches your SaaS brief.", action: "View match →" },
    { Icon: Shield, color: "teal" as const, text: "$24K ready to release · M1 approved.", action: "Release →" },
    { Icon: Target, color: "teal" as const, text: "3 new squads matched for Fintech brief.", action: "View 3 →" },
  ];

  const sidebarItems = [
    { Icon: LayoutDashboard, active: true },
    { Icon: FolderKanban, active: false },
    { Icon: Users, active: false },
    { Icon: Shield, active: false },
    { Icon: BarChart3, active: false },
  ];

  return (
    <div
      className="w-full overflow-hidden rounded-2xl border border-teal/25 shadow-[0_0_80px_rgba(13,148,136,0.12)] shadow-2xl"
      style={{ background: "#040c0c" }}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-3 border-b border-white/6 px-4 py-3" style={{ background: "#060e0e" }}>
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
          <div className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
        </div>
        <div className="mx-auto flex items-center gap-2 rounded-md border border-white/8 bg-white/4 px-4 py-1">
          <span className="font-mono text-[10px] text-white/30">app.zenit.io/dashboard</span>
        </div>
        <div className="flex items-center gap-1.5 rounded-full border border-teal/20 bg-teal/8 px-2.5 py-0.5">
          <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal" />
          <span className="font-mono text-[10px] font-bold text-teal">3 alerts</span>
        </div>
      </div>

      {/* App layout */}
      <div className="flex" style={{ minHeight: 420 }}>
        {/* Sidebar */}
        <div className="flex w-12 shrink-0 flex-col items-center gap-1.5 border-r border-white/5 py-4">
          <div className="mb-3 flex h-7 w-7 items-center justify-center rounded-lg border border-teal/30 bg-teal/20">
            <BrainCircuit size={13} className="text-teal" />
          </div>
          {sidebarItems.map(({ Icon, active }, i) => (
            <div
              key={i}
              className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                active ? "bg-teal/15 text-teal" : "text-white/20"
              }`}
            >
              <Icon size={14} />
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="flex flex-1 flex-col min-w-0">
          {/* Top bar */}
          <div className="flex items-center gap-3 border-b border-white/5 px-4 py-2.5">
            <div>
              <span className="font-sans text-sm font-semibold text-white">Dashboard</span>
              <span className="ml-2 font-mono text-[9px] text-white/25">Velocity Corp · 2 active projects</span>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <div className="relative flex h-7 w-7 items-center justify-center">
                <Bell size={14} className="text-white/30" />
                <span className="absolute right-0.5 top-0.5 h-2 w-2 rounded-full border border-background bg-gold" />
              </div>
              <div className="flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-white/10">
                <User size={10} className="text-white/60" />
              </div>
            </div>
          </div>

          {/* Content grid: projects + Kaizen panel */}
          <div className="flex flex-1 min-w-0">
            {/* Projects area */}
            <div className="flex-1 p-4 min-w-0">
              {/* KPI tiles */}
              <div className="mb-4 grid grid-cols-3 gap-2.5">
                {[
                  { label: "Active Projects", value: "2", sub: "1 needs attention", color: "teal" as const },
                  { label: "SafePay Locked", value: "$48K", sub: "5 milestones pending", color: "cyan" as const },
                  { label: "New Matches", value: "3", sub: "1 urgent today", color: "gold" as const },
                ].map((kpi) => (
                  <div
                    key={kpi.label}
                    className={`rounded-xl border p-3 ${
                      kpi.color === "teal" ? "border-teal/15 bg-teal/5" :
                      kpi.color === "cyan" ? "border-cyan/15 bg-cyan/5" :
                      "border-gold/15 bg-gold/5"
                    }`}
                  >
                    <p className={`mb-0.5 font-mono text-xl font-bold ${
                      kpi.color === "teal" ? "text-teal" :
                      kpi.color === "cyan" ? "text-cyan" : "text-gold"
                    }`}>{kpi.value}</p>
                    <p className="mb-0.5 font-sans text-[10px] font-semibold text-white/70">{kpi.label}</p>
                    <p className="font-mono text-[8px] text-white/30">{kpi.sub}</p>
                  </div>
                ))}
              </div>

              {/* Project cards */}
              <p className="mb-2 font-mono text-[8px] uppercase tracking-widest text-white/25">Active projects</p>
              <div className="space-y-2">
                {projects.map((p) => (
                  <div key={p.name} className="rounded-xl border border-white/6 bg-white/3 p-3">
                    <div className="mb-2 flex items-start justify-between gap-2">
                      <span className="font-sans text-xs font-semibold text-white">{p.name}</span>
                      <span className={`shrink-0 font-mono text-[9px] font-bold ${
                        p.statusColor === "cyan" ? "text-cyan" : "text-teal"
                      }`}>{p.status}</span>
                    </div>
                    <div className="mb-2 flex items-center gap-2">
                      <div className="flex-1 h-1 overflow-hidden rounded-full bg-white/8">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-teal to-cyan"
                          style={{ width: `${p.progress}%` }}
                        />
                      </div>
                      <span className="shrink-0 font-mono text-[9px] text-white/35">{p.progress}%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[9px] text-white/30">{p.squad}</span>
                      <span className="font-mono text-[9px] text-white/25">{p.budget}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Kaizen AI panel */}
            <div
              className="flex w-52 shrink-0 flex-col border-l border-white/5"
              style={{ background: "rgba(13,148,136,0.03)" }}
            >
              <div className="flex items-center gap-2 border-b border-white/5 px-3 py-2.5">
                <BrainCircuit size={12} className="text-teal" />
                <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-teal">Kaizen</span>
                <div className="ml-auto h-1.5 w-1.5 animate-pulse rounded-full bg-teal" />
              </div>

              <div className="flex flex-col gap-2 p-3">
                {kaizenAlerts.map(({ Icon, color, text, action }, i) => (
                  <div
                    key={i}
                    className={`rounded-lg border p-2.5 ${
                      color === "gold" ? "border-gold/15 bg-gold/5" :
                      color === "cyan" ? "border-cyan/15 bg-cyan/5" :
                      "border-teal/15 bg-teal/5"
                    }`}
                  >
                    <div className="flex items-start gap-1.5">
                      <Icon
                        size={10}
                        className={cn(
                          "mt-0.5 shrink-0",
                          color === "gold" && "text-gold",
                          color === "cyan" && "text-cyan",
                          color === "teal" && "text-teal",
                        )}
                      />
                      <p className="font-mono text-[8px] leading-relaxed text-white/55">{text}</p>
                    </div>
                    <button className={cn(
                      "mt-1.5 font-mono text-[8px] font-bold",
                      color === "gold" && "text-gold",
                      color === "cyan" && "text-cyan",
                      color === "teal" && "text-teal",
                    )}>{action}</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function KaizenPage() {
  return (
    <main className="bg-background">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <NeuralNoise
          color={[13, 148, 136]}
          opacity={0.38}
          speed={0.0008}
          intensity={1.1}
          className="absolute inset-0 h-full w-full"
          style={{ mixBlendMode: "screen" }}
        />
        <div className="pointer-events-none absolute inset-0 bg-background/55" aria-hidden />
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute -top-40 left-1/2 h-[700px] w-[1000px] -translate-x-1/2 rounded-full bg-teal/5 blur-[140px]" />
          <div className="absolute top-1/2 right-0 h-[400px] w-[500px] -translate-y-1/2 rounded-full bg-teal/4 blur-[100px]" />
          <div className="dot-grid absolute inset-0 opacity-30" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
            <motion.div variants={staggerContainer} initial="hidden" animate="visible">
              <motion.div variants={fadeInUp} className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal/20 bg-teal/8 px-4 py-1.5">
                <Brain size={14} className="text-teal" />
                <span className="font-sans text-sm font-semibold text-teal">Kaizen AI</span>
                <span className="h-px w-3 bg-teal/30" />
                <span className="font-sans text-xs text-teal/70">AI discovery. Human delivery.</span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="font-display font-bold leading-[1.05] text-white"
                style={{ fontSize: "clamp(28px, 3.8vw, 54px)" }}
              >
                Kaizen mapea tu
                <br />
                <span className="text-shimmer">madurez técnica.</span>
              </motion.h1>

              <motion.p variants={fadeInUp} className="mt-6 max-w-lg font-sans text-lg leading-relaxed text-white/55">
                IA que entiende qué puede resolver sola y cuándo necesita traer el squad correcto.
              </motion.p>

              <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="/get-started"
                  className="group inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-sans text-base font-semibold text-background transition-all duration-200 hover:bg-white/90 hover:shadow-[0_0_28px_rgba(255,255,255,0.18)]"
                >
                  Start your brief
                  <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="#how-it-works"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/12 px-8 py-4 font-sans text-base font-medium text-white/70 transition-all duration-200 hover:border-white/25 hover:text-white"
                >
                  See how it works
                </Link>
              </motion.div>

              <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap gap-5">
                {[
                  { icon: Shield, label: "No intake forms" },
                  { icon: Clock, label: "48h to first match" },
                  { icon: Target, label: "2–3 curated squads" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-1.5">
                    <Icon size={13} className="text-cyan/60" />
                    <span className="font-sans text-sm text-white/40">{label}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div variants={slideInRight} initial="hidden" animate="visible">
              <KaizenDiscoveryMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FEATURE 1: Brief Intelligence + Product Brain ── */}
      <section id="how-it-works" className="relative overflow-hidden py-28">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute top-1/2 right-0 h-[500px] w-[600px] -translate-y-1/2 rounded-full bg-cyan/4 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
            >
              <motion.p variants={fadeInUp} className="mb-4 font-sans text-sm font-semibold uppercase tracking-widest text-cyan">
                Brief Intelligence
              </motion.p>
              <motion.h2
                variants={fadeInUp}
                className="font-display font-bold leading-[1.1] text-white"
                style={{ fontSize: "clamp(26px, 3vw, 42px)" }}
              >
                You describe the problem.
                <br />
                Kaizen <span className="text-shimmer">understands</span> the solution.
              </motion.h2>
              <motion.p variants={fadeInUp} className="mt-5 font-sans text-base leading-relaxed text-white/50">
                Kaizen reads your brief and builds a structured Product Brain — a persistent memory of your business context, technical constraints, and risk signals. No intake forms. No scoping calls. Just a conversation.
              </motion.p>
              <motion.ul variants={staggerContainer} className="mt-7 flex flex-col gap-3">
                {[
                  "Extracts product, technical, and business context automatically",
                  "Detects risk signals before work begins",
                  "The Product Brain grows with every project — Kaizen gets smarter about your business",
                ].map((item) => (
                  <motion.li key={item} variants={fadeInUp} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-cyan" />
                    <span className="font-sans text-sm leading-relaxed text-white/60">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
            >
              <ProductBrainMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CENTER-SCREEN: Proactive Dashboard ── */}
      <section className="relative overflow-hidden py-20 border-y border-border">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute top-1/2 left-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal/4 blur-[150px]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="mb-12 text-center"
          >
            <motion.p variants={fadeInUp} className="mb-3 font-sans text-sm font-semibold uppercase tracking-widest text-teal">
              Kaizen Dashboard
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="font-display font-bold text-white"
              style={{ fontSize: "clamp(26px, 3vw, 42px)" }}
            >
              Todo tu ecosistema.
              <br />
              <span className="text-shimmer">Kaizen lo monitorea, vos decidís.</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="mx-auto mt-4 max-w-xl font-sans text-base leading-relaxed text-muted-foreground">
              Kaizen no espera que algo salga mal. Detecta scope creep, libera pagos, sugiere squads disponibles — en tiempo real, sin que tengas que pedirlo.
            </motion.p>
          </motion.div>

          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            <KaizenDashboardMockup />
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="mt-8 flex flex-wrap justify-center gap-8 text-center"
          >
            {[
              { label: "Proactive alerts", sub: "Kaizen avisa antes, no después" },
              { label: "Gen UI integrado", sub: "El workspace se adapta a tu proyecto" },
              { label: "Human-in-the-loop", sub: "Vos aprobás pagos y decisiones clave" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col gap-1">
                <span className="font-sans text-sm font-semibold text-white">{item.label}</span>
                <span className="font-mono text-[10px] text-muted-foreground">{item.sub}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FEATURE 2: Precision Matching (reverse) ── */}
      <section className="relative overflow-hidden py-28">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute top-1/2 left-0 h-[500px] w-[600px] -translate-y-1/2 rounded-full bg-teal/4 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              className="order-2 lg:order-1"
            >
              <PrecisionMatchMockup />
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              className="order-1 lg:order-2"
            >
              <motion.p variants={fadeInUp} className="mb-4 font-sans text-sm font-semibold uppercase tracking-widest text-teal">
                Precision Matching
              </motion.p>
              <motion.h2
                variants={fadeInUp}
                className="font-display font-bold leading-[1.1] text-white"
                style={{ fontSize: "clamp(26px, 3vw, 42px)" }}
              >
                Not a shortlist.
                <br />
                <span className="text-shimmer">A recommendation.</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="mt-5 font-sans text-base leading-relaxed text-white/50">
                Three squads. All vetted. All available. All with a track record on exactly your stack. Not a hundred options to scroll through.
              </motion.p>
              <motion.ul variants={staggerContainer} className="mt-7 flex flex-col gap-3">
                {[
                  "94% of Kaizen-matched squads deliver on time",
                  "Every recommendation includes AI reasoning",
                  "Re-match at zero cost if your first choice doesn't start",
                ].map((item) => (
                  <motion.li key={item} variants={fadeInUp} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-cyan" />
                    <span className="font-sans text-sm leading-relaxed text-white/60">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FEATURE 3: Delivery Intelligence ── */}
      <section className="relative overflow-hidden py-28">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute top-1/2 right-0 h-[500px] w-[600px] -translate-y-1/2 rounded-full bg-gold/4 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
            >
              <motion.p variants={fadeInUp} className="mb-4 font-sans text-sm font-semibold uppercase tracking-widest text-gold">
                Delivery Intelligence
              </motion.p>
              <motion.h2
                variants={fadeInUp}
                className="font-display font-bold leading-[1.1] text-white"
                style={{ fontSize: "clamp(26px, 3vw, 42px)" }}
              >
                Kaizen doesn&apos;t disappear
                <br />
                <span className="text-shimmer-gold">after the match.</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="mt-5 font-sans text-base leading-relaxed text-white/50">
                Once a project starts, Kaizen monitors milestone progress, flags blockers, and detects scope creep — before they become problems.
              </motion.p>
              <motion.ul variants={staggerContainer} className="mt-7 flex flex-col gap-3">
                {[
                  "Automatic scope creep detection",
                  "Milestone risk scoring updated daily",
                  "Alerts both sides before disputes happen",
                ].map((item) => (
                  <motion.li key={item} variants={fadeInUp} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-cyan" />
                    <span className="font-sans text-sm leading-relaxed text-white/60">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
            >
              <DeliveryDashboardMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── AI FLYWHEEL CALLOUT ── */}
      <section className="relative overflow-hidden py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="relative overflow-hidden rounded-3xl border border-white/8 px-8 py-16 text-center md:px-16 md:py-20"
            style={{ background: "#0d1313" }}
          >
            <div className="pointer-events-none absolute inset-0" aria-hidden>
              <div className="absolute -top-32 left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-cyan/5 blur-[100px]" />
              <div className="absolute top-0 left-0 h-px w-24 bg-gradient-to-r from-cyan/40 to-transparent" />
              <div className="absolute top-0 left-0 h-24 w-px bg-gradient-to-b from-cyan/40 to-transparent" />
              <div className="absolute bottom-0 right-0 h-px w-24 bg-gradient-to-l from-teal/40 to-transparent" />
              <div className="absolute bottom-0 right-0 h-24 w-px bg-gradient-to-t from-teal/40 to-transparent" />
            </div>

            <div className="relative">
              <motion.div variants={fadeInUp} className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan/20 bg-cyan/8 px-4 py-1.5">
                <Sparkles size={13} className="text-cyan" />
                <span className="font-sans text-sm font-semibold text-cyan">Continuous Learning</span>
              </motion.div>

              <motion.h2
                variants={fadeInUp}
                className="mx-auto max-w-2xl font-display font-bold leading-tight text-white"
                style={{ fontSize: "clamp(26px, 3vw, 42px)" }}
              >
                Every project makes the
                <br />
                <span className="text-shimmer">next match smarter.</span>
              </motion.h2>

              <motion.p variants={fadeInUp} className="mx-auto mt-5 max-w-lg font-sans text-base leading-relaxed text-white/50">
                Kaizen tracks delivery outcomes across 500+ squads. Each project trains the model. The more Zenit ships, the better Kaizen gets.
              </motion.p>

              <motion.div variants={staggerContainer} className="mt-10 flex flex-wrap justify-center gap-4">
                {[
                  { label: "94% on-time delivery", icon: BarChart3, color: "teal" },
                  { label: "500+ squads in model", icon: Search, color: "cyan" },
                  { label: "48h avg match time", icon: Clock, color: "gold" },
                ].map(({ label, icon: Icon, color }) => (
                  <motion.div
                    key={label}
                    variants={scaleIn}
                    className={cn(
                      "flex items-center gap-2.5 rounded-xl border px-5 py-3",
                      color === "teal" && "border-teal/20 bg-teal/8",
                      color === "cyan" && "border-cyan/20 bg-cyan/8",
                      color === "gold" && "border-gold/20 bg-gold/8"
                    )}
                  >
                    <Icon size={15} className={cn(
                      color === "teal" && "text-teal",
                      color === "cyan" && "text-cyan",
                      color === "gold" && "text-gold"
                    )} />
                    <span className={cn(
                      "font-sans text-sm font-semibold",
                      color === "teal" && "text-teal",
                      color === "cyan" && "text-cyan",
                      color === "gold" && "text-gold"
                    )}>
                      {label}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden py-28">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute -bottom-40 left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-cyan/5 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="flex flex-col items-center gap-6 text-center"
          >
            <motion.p variants={fadeInUp} className="font-sans text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Get started
            </motion.p>

            <motion.h2
              variants={fadeInUp}
              className="font-display font-bold leading-tight text-white"
              style={{ fontSize: "clamp(26px, 3vw, 42px)" }}
            >
              Your brief.{" "}
              <span className="text-shimmer-gold">48 hours.</span>
              <br />
              A squad.
            </motion.h2>

            <motion.p variants={fadeInUp} className="max-w-md font-sans text-lg leading-relaxed text-white/50">
              Post your project brief. Kaizen starts working immediately.
            </motion.p>

            <motion.div variants={fadeInUp}>
              <Link
                href="/get-started"
                className="group inline-flex items-center gap-2 rounded-xl bg-white px-10 py-4 font-sans text-base font-semibold text-background transition-all duration-200 hover:bg-white/90 hover:shadow-[0_0_32px_rgba(255,255,255,0.2)]"
              >
                Start with Kaizen
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
