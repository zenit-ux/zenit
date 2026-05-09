"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp, defaultViewport } from "@/lib/motionVariants";
import { Sparkles, FileText, Cpu } from "lucide-react";

/* ─── Animated "section appearing" indicator ─────────────── */

function AppearingTag({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Generated Brief panel ──────────────────────────────── */

function GeneratedBriefPanel() {
  return (
    <div
      role="img"
      aria-label="Kaizen AI-generated project brief showing extracted project name, inferred tech stack, AI-generated milestones, SafePay budget structure, and matched squad profile"
      className="flex flex-col overflow-hidden rounded-2xl border border-teal/20 shadow-[0_32px_80px_rgba(0,0,0,0.6),0_0_60px_rgba(15,118,110,0.08)]"
      style={{ background: "#040e0e" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/6 px-4 py-3" style={{ background: "#020c0b" }}>
        <div className="flex items-center gap-2">
          <FileText size={13} className="text-teal" />
          <span className="font-mono text-[11px] font-bold text-white/60">Generated Brief</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal" />
          <span className="font-mono text-[9px] uppercase tracking-wider text-teal">AI building...</span>
        </div>
      </div>

      {/* Brief content — sections appear progressively */}
      <div className="flex-1 space-y-0 divide-y divide-white/5 overflow-y-auto">

        {/* Project name — first to appear */}
        <AppearingTag delay={0.1}>
          <div className="px-4 py-3">
            <p className="mb-0.5 font-mono text-[9px] uppercase tracking-widest text-muted-foreground/50">Project</p>
            <p className="font-display text-[15px] font-bold text-white">Logistics SaaS MVP</p>
            <p className="font-mono text-[10px] text-teal">Extracted from conversation ✓</p>
          </div>
        </AppearingTag>

        {/* Tech stack */}
        <AppearingTag delay={0.4}>
          <div className="px-4 py-3">
            <p className="mb-2 font-mono text-[9px] uppercase tracking-widest text-muted-foreground/50">Tech Stack · AI-inferred</p>
            <div className="flex flex-wrap gap-1.5">
              {["Node.js", "React", "PostgreSQL", "WebSockets", "AWS"].map((t) => (
                <span key={t} className="rounded border border-cyan/20 bg-cyan/6 px-2 py-0.5 font-mono text-[10px] text-cyan">{t}</span>
              ))}
            </div>
            <p className="mt-1.5 font-mono text-[9px] text-muted-foreground/60">Inferred from: &quot;real-time tracking, PHP monolith migration&quot;</p>
          </div>
        </AppearingTag>

        {/* Timeline */}
        <AppearingTag delay={0.7}>
          <div className="px-4 py-3">
            <p className="mb-2 font-mono text-[9px] uppercase tracking-widest text-muted-foreground/50">Milestones · AI-generated</p>
            <div className="space-y-1.5">
              {[
                { m: "M1", label: "Discovery & Architecture", weeks: "Wk 1–2" },
                { m: "M2", label: "Core API + Auth",          weeks: "Wk 3–6" },
                { m: "M3", label: "Dashboard & Real-time",    weeks: "Wk 7–10" },
                { m: "M4", label: "QA, Staging & Launch",     weeks: "Wk 11–12" },
              ].map((ms) => (
                <div key={ms.m} className="flex items-center gap-2.5">
                  <span className="w-6 shrink-0 font-mono text-[9px] font-bold text-teal">{ms.m}</span>
                  <span className="flex-1 font-sans text-[11px] text-white/70">{ms.label}</span>
                  <span className="font-mono text-[9px] text-muted-foreground">{ms.weeks}</span>
                </div>
              ))}
            </div>
          </div>
        </AppearingTag>

        {/* Budget */}
        <AppearingTag delay={1.0}>
          <div className="px-4 py-3">
            <p className="mb-2 font-mono text-[9px] uppercase tracking-widest text-muted-foreground/50">Budget · SafePay Structure</p>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-mono text-xl font-bold text-gold">$72,000</p>
                <p className="font-mono text-[9px] text-muted-foreground">AI midpoint estimate</p>
              </div>
              <div className="text-right">
                <p className="font-mono text-[10px] text-teal">4 escrow milestones</p>
                <p className="font-mono text-[9px] text-muted-foreground">SafePay protected</p>
              </div>
            </div>
          </div>
        </AppearingTag>

        {/* Squad profile */}
        <AppearingTag delay={1.3}>
          <div className="px-4 py-3">
            <p className="mb-2 font-mono text-[9px] uppercase tracking-widest text-muted-foreground/50">Squad Profile · AI-matched</p>
            <div className="space-y-1">
              {[
                "Full-stack (React + Node) — 2 senior devs",
                "Backend API specialist — 1 senior",
                "DevOps / AWS — part-time",
              ].map((r) => (
                <div key={r} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-cyan/60" />
                  <span className="font-sans text-[11px] text-white/60">{r}</span>
                </div>
              ))}
            </div>
          </div>
        </AppearingTag>

        {/* Routing decision */}
        <AppearingTag delay={1.6}>
          <div className="bg-amber-500/5 px-4 py-3">
            <div className="mb-1 flex items-center gap-2">
              <Cpu size={11} className="text-amber-400" />
              <p className="font-mono text-[9px] font-bold uppercase tracking-wider text-amber-400">Kaizen routing decision</p>
            </div>
            <p className="font-sans text-[11px] leading-relaxed text-white/60">
              Migration complexity requires human architectural judgment. AI will orchestrate — squad will execute.
            </p>
          </div>
        </AppearingTag>

      </div>
    </div>
  );
}

/* ─── Kaizen chat panel ───────────────────────────────────── */

function KaizenChatPanel() {
  const messages = [
    { from: "ai",   text: "What are you building? Describe the problem — not the solution." },
    { from: "user", text: "A logistics SaaS. We track shipments in real time but our system is a PHP monolith from 2019." },
    { from: "ai",   text: "Got it. Do you have an internal dev team today?" },
    { from: "user", text: "2 devs. They built the monolith but we need to modernize and add a proper dashboard." },
    { from: "ai",   text: "Timeline — hard deadline or flexible?" },
    { from: "user", text: "12 weeks. We have a client onboarding in Q3." },
    { from: "ai",   text: "Budget range?" },
    { from: "user", text: "Somewhere between $60–80k." },
  ];

  return (
    <div
      className="flex flex-col overflow-hidden rounded-2xl border border-cyan/15 shadow-[0_32px_80px_rgba(0,0,0,0.6)]"
      style={{ background: "#040e0e" }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-white/5 px-4 py-3" style={{ background: "#020c0b" }}>
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full" style={{ background: "#ff5f57" }} />
          <div className="h-2.5 w-2.5 rounded-full" style={{ background: "#febc2e" }} />
          <div className="h-2.5 w-2.5 rounded-full" style={{ background: "#28c840" }} />
        </div>
        <div className="flex flex-1 items-center justify-center gap-2">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan" />
          <span className="font-mono text-[10px] text-white/35">Kaizen · Discovery Session</span>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 space-y-3 overflow-y-auto p-4">
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.35 }}
            className={msg.from === "ai" ? "flex gap-2.5" : "flex justify-end gap-2.5"}
          >
            {msg.from === "ai" && (
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-cyan/30 bg-cyan/10">
                <span className="font-mono text-[8px] font-bold text-cyan">K</span>
              </div>
            )}
            <div
              className={
                msg.from === "ai"
                  ? "max-w-[200px] rounded-2xl rounded-tl-sm border border-teal/15 bg-teal/8 px-3 py-2"
                  : "max-w-[200px] rounded-2xl rounded-tr-sm border border-white/8 bg-white/5 px-3 py-2"
              }
            >
              <p className="text-[11px] leading-relaxed text-white/75">{msg.text}</p>
            </div>
          </motion.div>
        ))}

        {/* Typing indicator */}
        <div className="flex gap-2.5">
          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-cyan/30 bg-cyan/10">
            <span className="font-mono text-[8px] font-bold text-cyan">K</span>
          </div>
          <div className="flex items-center gap-1.5 rounded-2xl rounded-tl-sm border border-teal/15 bg-teal/8 px-3 py-2.5">
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-cyan/60 [animation-delay:0ms]" />
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-cyan/60 [animation-delay:150ms]" />
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-cyan/60 [animation-delay:300ms]" />
          </div>
        </div>
      </div>

      {/* Input */}
      <div className="border-t border-white/5 px-3 py-2.5">
        <div className="flex items-center gap-2">
          <div className="flex-1 rounded-lg border border-white/8 bg-white/4 px-3 py-2">
            <p className="font-sans text-[10px] text-muted-foreground">Reply to Kaizen...</p>
          </div>
          <button className="rounded-lg border border-cyan/25 bg-cyan/10 px-3 py-2 font-mono text-[10px] font-bold text-cyan">
            →
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── GenUISection ───────────────────────────────────────── */

export function GenUISection() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(15,118,110,0.10) 0%, transparent 75%)" }}
        />
        <div
          className="absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,180,216,0.12) 0%, transparent 65%)", filter: "blur(100px)", opacity: 0.5 }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mb-16 text-center"
        >
          <motion.div variants={fadeInUp} className="mb-4 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/8 px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-widest text-teal">
              <Sparkles size={11} className="text-teal" />
              Gen UI
            </span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="mb-4 font-display font-bold leading-tight text-white"
            style={{ fontSize: "clamp(24px, 2.8vw, 42px)" }}
          >
            The interface doesn&apos;t wait.<br />
            <span className="text-shimmer">Kaizen generates it.</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="mx-auto max-w-xl font-sans text-lg leading-relaxed text-muted-foreground">
            No forms. No intake calls. Kaizen extracts requirements from natural conversation
            and builds a structured brief in real time — including tech stack, milestones,
            budget structure, and squad profile. The UI writes itself.
          </motion.p>
        </motion.div>

        {/* Split mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 gap-4 lg:grid-cols-2"
        >
          <KaizenChatPanel />
          <GeneratedBriefPanel />
        </motion.div>

        {/* Arrow label between panels (desktop) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={defaultViewport}
          transition={{ delay: 0.6 }}
          className="mt-8 flex items-center justify-center gap-3"
        >
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-cyan/20" />
          <span className="flex items-center gap-2 rounded-full border border-cyan/20 bg-cyan/5 px-4 py-1.5 font-mono text-[11px] text-cyan/70">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan" />
            Brief generated autonomously from conversation · No form filled
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-cyan/20" />
        </motion.div>

      </div>
    </section>
  );
}
