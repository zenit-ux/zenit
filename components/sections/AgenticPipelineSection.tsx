"use client";

import { motion } from "framer-motion";
import { staggerContainer, defaultViewport } from "@/lib/motionVariants";
import { Search, BarChart2, FileText, Users, Shield, Activity } from "lucide-react";

const steps = [
  {
    n: "01",
    icon: Search,
    title: "Discover",
    sub: "Agentic conversation",
    desc: "Kaizen opens a natural dialogue — no forms. It asks about your team, systems, and current capabilities, building full context autonomously.",
    detail: "~4 min avg",
    iconColor: "text-cyan",
    iconBg: "border-cyan/25 bg-cyan/8",
    numColor: "text-cyan/8",
    accentLine: "bg-cyan/40",
  },
  {
    n: "02",
    icon: BarChart2,
    title: "Assess Maturity",
    sub: "AI-native analysis",
    desc: "Kaizen maps your AI maturity stage — from zero tech team to AI-native — and identifies what autonomous AI can solve vs. what requires human coordination.",
    detail: "Instant",
    iconColor: "text-teal",
    iconBg: "border-teal/25 bg-teal/8",
    numColor: "text-teal/8",
    accentLine: "bg-teal/40",
  },
  {
    n: "03",
    icon: FileText,
    title: "Generate Brief",
    sub: "Gen UI · no forms",
    desc: "The project brief writes itself. Tech stack inferred from conversation. Milestones, budget range, and SafePay structure generated before you fill a single field.",
    detail: "Real-time",
    iconColor: "text-cyan",
    iconBg: "border-cyan/25 bg-cyan/8",
    numColor: "text-cyan/8",
    accentLine: "bg-cyan/40",
  },
  {
    n: "04",
    icon: Users,
    title: "Match Squads",
    sub: "Precision matching",
    desc: "Only if human coordination is required. Kaizen surfaces squads scored by exact skill fit, timezone alignment, and delivery track record — never broad generalists.",
    detail: "< 48h",
    iconColor: "text-teal",
    iconBg: "border-teal/25 bg-teal/8",
    numColor: "text-teal/8",
    accentLine: "bg-teal/40",
  },
  {
    n: "05",
    icon: Shield,
    title: "Setup SafePay",
    sub: "Escrow by milestone",
    desc: "Payment is structured into milestone escrow automatically from the AI-generated brief. You pay only when the milestone is verified complete.",
    detail: "Auto-structured",
    iconColor: "text-gold",
    iconBg: "border-gold/25 bg-gold/8",
    numColor: "text-gold/8",
    accentLine: "bg-gold/40",
  },
  {
    n: "06",
    icon: Activity,
    title: "Monitor Delivery",
    sub: "Agentic oversight",
    desc: "Kaizen holds the full project context and monitors delivery in real time. It flags scope creep, velocity drops, and escalates when human decisions are needed.",
    detail: "Continuous",
    iconColor: "text-cyan",
    iconBg: "border-cyan/25 bg-cyan/8",
    numColor: "text-cyan/8",
    accentLine: "bg-cyan/40",
  },
];

/* ─── Live terminal trace ────────────────────────────────── */

function AgentTrace() {
  const lines = [
    { t: "00:00", text: "Kaizen agent initialized → discovery mode", color: "text-cyan/80" },
    { t: "00:12", text: "Context built: legacy PHP monolith, 2 devs, no AI", color: "text-white/60" },
    { t: "00:13", text: "Maturity assessment: Stage 02 — Legacy systems", color: "text-amber-400/80" },
    { t: "00:13", text: "AI triage: migration complexity exceeds autonomous AI capacity", color: "text-red-400/70" },
    { t: "00:14", text: "Routing decision: human squad required → generating brief", color: "text-white/60" },
    { t: "00:15", text: "Brief generated: stack inferred, 4 milestones, $72k estimate", color: "text-teal/80" },
    { t: "00:16", text: "SafePay structure: 4 escrow milestones auto-configured", color: "text-gold/80" },
    { t: "00:17", text: "Squad match: 2 candidates scored >90% · deploying in 48h", color: "text-cyan/80" },
    { t: "01:42", text: "Delivery monitoring active · milestone 1 in progress", color: "text-white/40" },
    { t: "03:18", text: "⚠ Scope signal detected → alerting client for decision", color: "text-amber-400/80" },
  ];

  return (
    <div
      role="img"
      aria-label="Live agent trace: Kaizen discovery session for a logistics SaaS company, showing automated analysis, squad matching, and SafePay configuration in under 2 minutes"
      className="overflow-hidden rounded-2xl border border-white/8 shadow-[0_24px_60px_rgba(0,0,0,0.5)]"
      style={{ background: "#030c0c" }}
    >
      <div className="flex items-center gap-3 border-b border-white/5 px-4 py-2.5" style={{ background: "#020808" }}>
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full" style={{ background: "#ff5f57" }} />
          <div className="h-2.5 w-2.5 rounded-full" style={{ background: "#febc2e" }} />
          <div className="h-2.5 w-2.5 rounded-full" style={{ background: "#28c840" }} />
        </div>
        <span className="flex-1 text-center font-mono text-[10px] text-white/30">kaizen-agent · live trace</span>
        <span className="flex items-center gap-1.5 font-mono text-[9px] text-green-400/70">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
          RUNNING
        </span>
      </div>
      <div className="p-4">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -6 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.3 }}
            className="flex gap-3 border-b border-white/3 py-1.5 last:border-0"
          >
            <span className="shrink-0 font-mono text-[9px] text-muted-foreground/40">{line.t}</span>
            <span className={`font-mono text-[10px] leading-relaxed ${line.color}`}>{line.text}</span>
          </motion.div>
        ))}
        <div className="flex gap-3 pt-1.5">
          <span className="shrink-0 font-mono text-[9px] text-muted-foreground/40">now</span>
          <span className="font-mono text-[10px] text-cyan/60">
            kaizen@zenit:~${" "}
            <span className="inline-block h-2.5 w-1.5 animate-pulse bg-cyan/60 align-middle" />
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─── AgenticPipelineSection ─────────────────────────────── */

export function AgenticPipelineSection() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(0,180,216,0.06) 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mb-20 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-end"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={defaultViewport}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/8 px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-widest text-cyan">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan" />
              Agentic Pipeline
            </div>
            <h2
              className="font-display font-bold leading-tight text-white"
              style={{ fontSize: "clamp(26px, 3vw, 44px)" }}
            >
              Six steps.<br />
              Zero manual input.<br />
              <span className="text-shimmer-gold">Kaizen runs it all.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={defaultViewport}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-sans text-base leading-relaxed text-muted-foreground lg:text-lg"
          >
            From first message to monitored delivery, Kaizen operates as a fully autonomous agent.
            No intake forms, no back-and-forth emails, no PM overhead.
            Human squads enter only when the work genuinely requires coordination AI cannot replace.
          </motion.p>
        </motion.div>

        {/* Timeline rows */}
        <div className="mb-20">
          <div className="flex flex-col">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.n}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative flex gap-6 border-b border-white/4 py-7 last:border-0 lg:gap-10 lg:py-8"
                >
                  <div className="shrink-0">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl border ${step.iconBg} transition-all duration-300 group-hover:scale-110`}>
                      <Icon size={16} className={step.iconColor} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex min-w-0 flex-1 flex-col gap-1 sm:flex-row sm:items-start sm:gap-8">

                    {/* Step number + title block */}
                    <div className="shrink-0 sm:w-52">
                      <div className="flex items-baseline gap-2.5">
                        <span className={`font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground`}>
                          {step.n}
                        </span>
                        <span className={`font-mono text-[9px] uppercase tracking-wider text-muted-foreground`}>
                          {step.sub}
                        </span>
                      </div>
                      <p className={`mt-0.5 font-display text-[18px] font-bold lg:text-[20px] ${step.iconColor}`}>
                        {step.title}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="flex-1 font-sans text-sm leading-relaxed text-muted-foreground lg:text-[15px]">
                      {step.desc}
                    </p>

                    {/* Timing badge */}
                    <div className="shrink-0 sm:text-right">
                      <span className={`inline-block rounded-full border border-white/8 bg-white/3 px-3 py-1 font-mono text-[10px] ${step.iconColor} opacity-70`}>
                        {step.detail}
                      </span>
                    </div>
                  </div>

                  {/* Large decorative number */}
                  <span
                    className={`pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 select-none font-display font-bold leading-none ${step.numColor} transition-all duration-500 group-hover:opacity-[0.12]`}
                    style={{ fontSize: "clamp(60px, 8vw, 110px)" }}
                  >
                    {step.n}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom: terminal + stat strip */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">

          {/* Terminal — wider */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={defaultViewport}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3"
          >
            <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Real agent trace · logistics SaaS example
            </p>
            <AgentTrace />
          </motion.div>

          {/* Stat strip — stacked vertically */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={defaultViewport}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-3 lg:col-span-2"
          >
            {[
              { value: "< 20 min", label: "Discover to brief", accent: "text-cyan" },
              { value: "< 48h",    label: "Brief to squad match", accent: "text-teal" },
              { value: "0",        label: "Forms filled by client", accent: "text-gold" },
              { value: "100%",     label: "AI-monitored delivery", accent: "text-cyan" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center justify-between rounded-xl border border-white/6 bg-white/2 px-5 py-4">
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">{stat.label}</p>
                <p className={`font-display text-2xl font-bold ${stat.accent}`}>{stat.value}</p>
              </div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
