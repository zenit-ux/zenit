"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { defaultViewport } from "@/lib/motionVariants";

/* ─── 3-Step Timeline mockup ─────────────────────────────── */

function TimelineMockup() {
  const steps = [
    {
      num: "01",
      label: "Discovery",
      sub: "Kaizen interviews your CEO, CTO, PM. Reviews your codebase. Understands architecture, constraints, and timeline.",
      time: "1–2 weeks",
      colorBorder: "border-cyan/40",
      colorText: "text-cyan",
      colorBg: "bg-cyan/10",
      lineColor: "from-cyan/30",
      outcome: "You have a clear brief. No vague specifications.",
    },
    {
      num: "02",
      label: "Matching",
      sub: "Zenit searches 500+ vetted squads. Filters by stack, complexity, ZenitRank, cultural fit. Returns 3–5 teams you'd actually hire.",
      time: "24–48 hours",
      colorBorder: "border-teal/40",
      colorText: "text-teal",
      colorBg: "bg-teal/10",
      lineColor: "from-teal/30",
      outcome: "You interview people who can actually do the job.",
    },
    {
      num: "03",
      label: "Deployment",
      sub: "Squad integrates with your workflow. GitHub proves work in real-time. SafePay releases on milestones. Squad B covers in 24h if needed.",
      time: "2 weeks onboarding",
      colorBorder: "border-gold/40",
      colorText: "text-gold",
      colorBg: "bg-gold/8",
      lineColor: "from-gold/30",
      outcome: "Project ships on time. Your risk is zero.",
    },
  ];

  return (
    <div
      className="overflow-hidden rounded-2xl border border-white/10 p-6 shadow-[0_24px_60px_rgba(0,0,0,0.65)]"
      style={{ background: "#050f0f" }}
    >
      <p className="mb-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60">
        Standard process · Zenit
      </p>

      <div className="flex flex-col">
        {steps.map((step, i) => (
          <div key={step.num} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border ${step.colorBorder} ${step.colorBg} font-mono text-[11px] font-bold ${step.colorText}`}
              >
                {step.num}
              </div>
              {i < steps.length - 1 && (
                <div className={`mt-1 w-px flex-1 min-h-[40px] bg-gradient-to-b ${step.lineColor} to-transparent`} />
              )}
            </div>

            <div className={i < steps.length - 1 ? "pb-7" : ""}>
              <div className="flex items-center gap-3 mb-1">
                <p className="font-display text-[15px] font-bold text-white">{step.label}</p>
                <span className={`font-mono text-[9px] font-semibold ${step.colorText}`}>{step.time}</span>
              </div>
              <p className="font-sans text-[11px] leading-relaxed text-muted-foreground mb-1">{step.sub}</p>
              <p className="font-mono text-[10px] text-white/50">
                <span className={`font-semibold ${step.colorText}`}>Outcome:</span> {step.outcome}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 border-t border-white/5 pt-4 flex items-center justify-between">
        <span className="font-mono text-[9px] text-muted-foreground">Time to first team</span>
        <span className="font-mono text-sm font-bold text-cyan">2 weeks</span>
      </div>
    </div>
  );
}

/* ─── Section ────────────────────────────────────────────── */

export function FlowSection() {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 70% 60% at 80% 50%, rgba(15,118,110,0.08) 0%, transparent 70%)" }}
        />
        <div
          className="absolute -left-24 top-1/3 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(15,118,110,0.12) 0%, transparent 65%)", filter: "blur(80px)", opacity: 0.45 }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* ── Mockup (left) ── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={defaultViewport}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] as const }}
            className="order-2 lg:order-1"
          >
            <TimelineMockup />
          </motion.div>

          {/* ── Text (right) ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={defaultViewport}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }}
            className="order-1 flex flex-col gap-6 lg:order-2"
          >
            <h2
              className="font-display font-bold leading-tight text-white"
              style={{ fontSize: "clamp(26px, 3vw, 36px)" }}
            >
              From zero to production<br />
              <span className="text-shimmer-gold">in 3 steps.</span>
            </h2>

            <div className="font-sans text-base leading-relaxed text-muted-foreground space-y-2">
              <p>Kaizen discovers. Zenit matches. SafePay protects.</p>
              <p className="text-white/80 font-medium">No guessing. No surprises.</p>
            </div>

            <a
              href="/how-it-works"
              className="inline-flex w-fit items-center gap-2 font-sans text-sm font-semibold text-cyan transition-all hover:gap-3"
            >
              See Full Process <ArrowRight size={14} />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
