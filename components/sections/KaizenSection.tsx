"use client";

import { motion } from "framer-motion";
import { Brain, Zap, GitBranch, Activity, ArrowRight } from "lucide-react";

/* ─── Kaizen discovery mockup ────────────────────────────── */

function KaizenDiscoveryMockup() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 shadow-[0_32px_80px_rgba(0,0,0,0.6)]" style={{ background: "#050f0f" }}>
      {/* macOS chrome */}
      <div className="flex items-center gap-3 border-b border-white/5 px-4 py-3" style={{ background: "#030b0b" }}>
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full" style={{ background: "#ff5f57" }} />
          <div className="h-3 w-3 rounded-full" style={{ background: "#febc2e" }} />
          <div className="h-3 w-3 rounded-full" style={{ background: "#28c840" }} />
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="flex items-center gap-2 rounded-lg border border-white/8 bg-white/4 px-4 py-1.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan" />
            <span className="font-mono text-[10px] text-white/40">kaizen.zenit.io — AI Discovery Agent</span>
          </div>
        </div>
        <span className="rounded-full border border-cyan/30 bg-cyan/10 px-2.5 py-0.5 font-mono text-[9px] font-bold text-cyan">AGENTIC</span>
      </div>

      {/* Chat body */}
      <div className="space-y-4 p-5">

        {/* Kaizen opening — asks about current state */}
        <div className="flex gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-cyan/40 bg-gradient-to-br from-cyan/20 to-teal/20">
            <span className="font-mono text-[10px] font-bold text-cyan">K</span>
          </div>
          <div className="max-w-[280px]">
            <p className="mb-1.5 font-mono text-[9px] text-muted-foreground">Kaizen · Agentic AI</p>
            <div className="rounded-2xl rounded-tl-sm border border-teal/15 bg-teal/8 px-3.5 py-2.5">
              <p className="text-[12px] leading-relaxed text-white/80">
                Before I recommend anything — tell me about your current setup. Do you have an internal dev team? What systems are you running today?
              </p>
            </div>
          </div>
        </div>

        {/* User reply — reveals their maturity stage */}
        <div className="flex justify-end gap-3">
          <div className="max-w-[260px]">
            <p className="mb-1.5 text-right font-mono text-[9px] text-muted-foreground">You</p>
            <div className="rounded-2xl rounded-tr-sm border border-white/8 bg-white/6 px-3.5 py-2.5">
              <p className="text-[12px] leading-relaxed text-white/70">
                5-year-old PHP monolith. Team of 2 devs. No AI capabilities, everything is manual.
              </p>
            </div>
          </div>
        </div>

        {/* Kaizen analyzing maturity */}
        <div className="flex gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-cyan/40 bg-gradient-to-br from-cyan/20 to-teal/20">
            <span className="font-mono text-[10px] font-bold text-cyan">K</span>
          </div>
          <div className="flex-1">
            <p className="mb-1.5 font-mono text-[9px] text-muted-foreground">Kaizen · Agentic AI</p>

            {/* Maturity assessment panel */}
            <div className="mb-3 rounded-xl border border-cyan/15 bg-cyan/5 p-3">
              <p className="mb-2 font-mono text-[9px] uppercase tracking-widest text-cyan/70">Assessing tech maturity</p>
              <div className="space-y-1.5">
                {[
                  { label: "Legacy complexity", value: "High — coupled monolith", color: "text-red-400" },
                  { label: "Team capacity",      value: "Limited — 2 devs",       color: "text-amber-400" },
                  { label: "AI readiness",       value: "Zero — starting from scratch", color: "text-amber-400" },
                  { label: "Migration risk",     value: "Requires human judgment", color: "text-red-400" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[9px] text-muted-foreground">{item.label}</span>
                    <span className={`font-mono text-[9px] font-semibold ${item.color}`}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Routing decision */}
            <div className="mb-3 rounded-xl border border-amber-500/20 bg-amber-500/6 px-3.5 py-2.5">
              <div className="mb-1.5 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-amber-400">Routing decision</span>
              </div>
              <p className="text-[11px] leading-relaxed text-white/75">
                This migration requires architectural judgment that AI alone can&apos;t safely handle. Legacy dependencies and business logic need human experts. Deploying specialized squad.
              </p>
            </div>

            {/* Matched squads */}
            <div className="space-y-2">
              {[
                { name: "Legacy → Modern Stack Specialists", match: 97, flag: "🇦🇷", spec: "PHP migration" },
                { name: "Platform Engineering Co",           match: 91, flag: "🇧🇷", spec: "Monolith decomp" },
              ].map((r) => (
                <div key={r.name} className="flex items-center gap-3 rounded-xl border border-cyan/12 bg-white/3 px-3 py-2.5">
                  <span className="text-base">{r.flag}</span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[11px] font-semibold text-white">{r.name}</p>
                    <p className="font-mono text-[9px] text-muted-foreground">{r.spec}</p>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full border border-teal/25 bg-teal/10 px-2 py-0.5">
                    <span className="font-mono text-[10px] font-bold text-cyan">{r.match}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Input bar */}
      <div className="border-t border-white/5 px-4 py-3.5">
        <div className="flex items-center gap-2.5">
          <div className="flex-1 rounded-xl border border-white/8 bg-white/4 px-3.5 py-2.5">
            <p className="font-sans text-[11px] text-muted-foreground">Ask Kaizen anything about your situation...</p>
          </div>
          <button className="rounded-xl border border-cyan/30 bg-cyan/12 px-4 py-2.5 font-mono text-[11px] font-bold text-cyan transition-colors hover:bg-cyan/20">
            Send →
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Feature bullet ─────────────────────────────────────── */

function Feature({ icon: Icon, title, desc }: { icon: React.ElementType; title: string; desc: string }) {
  return (
    <div className="flex gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan/20 bg-cyan/8">
        <Icon size={18} className="text-cyan" />
      </div>
      <div>
        <p className="mb-0.5 font-display text-[15px] font-bold text-white">{title}</p>
        <p className="font-sans text-sm leading-relaxed text-muted-foreground">{desc}</p>
      </div>
    </div>
  );
}

/* ─── KaizenSection ──────────────────────────────────────── */

export function KaizenSection() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 70% 60% at 60% 40%, rgba(0,180,216,0.12) 0%, rgba(15,118,110,0.08) 50%, transparent 85%)" }}
        />
        <div
          className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,180,216,0.18) 0%, transparent 65%)", filter: "blur(80px)", opacity: 0.5 }}
        />
        <div
          className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(15,118,110,0.22) 0%, transparent 65%)", filter: "blur(100px)", opacity: 0.4 }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* LEFT — Text */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-120px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-8"
          >
            {/* Eyebrow */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/8 px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-widest text-cyan">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan" />
                Agentic AI
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/4 px-3 py-1.5 font-mono text-xs text-muted-foreground">
                Gen UI
              </span>
            </div>

            {/* Title */}
            <div>
              <h2 className="mb-4 font-display font-bold leading-tight text-white" style={{ fontSize: "clamp(26px, 3vw, 42px)" }}>
                Kaizen: the AI that<br />
                knows when <span className="text-shimmer">humans</span><br />
                are irreplaceable.
              </h2>
              <p className="font-sans text-lg leading-relaxed text-muted-foreground max-w-lg">
                Kaizen doesn&apos;t start by searching for squads. It starts by understanding your company —
                your tech maturity, your existing systems, your actual capacity.
                <span className="text-white/80"> General project or AI transformation: same platform, same quality, the exact expertise for your situation.</span>
              </p>
            </div>

            {/* Features */}
            <div className="flex flex-col gap-5">
              <Feature
                icon={Brain}
                title="Scale on demand — general or AI"
                desc="Expand technical capacity when you need it. General projects: any tech stack. AI transformation: specialized AI-native squads. Never locked into fixed headcount."
              />
              <Feature
                icon={GitBranch}
                title="Same quality across every project type"
                desc="Every squad is technically vetted to the same 4.8★ standard. AI squads: proven in your specific domain — fintech, healthcare, e-commerce. General squads: full-stack expertise matched to your stack."
              />
              <Feature
                icon={Zap}
                title="Right expertise in 48 hours — not 9 months"
                desc="Legacy migrations, zero-to-one builds, AI implementation — when human judgment is irreplaceable, Kaizen surfaces the right squad. No 9-month search for AI specialists."
              />
              <Feature
                icon={Activity}
                title="Zero operational burden — any delivery type"
                desc="No hiring, no onboarding, no equity dilution. Kaizen monitors delivery in full context — code quality for general projects, model performance and knowledge transfer for AI projects."
              />
            </div>

            {/* CTA */}
            <div>
              <a
                href="/kaizen"
                className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-cyan transition-all hover:gap-3"
              >
                See how Kaizen thinks <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>

          {/* RIGHT — Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-120px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <KaizenDiscoveryMockup />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
