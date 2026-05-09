"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeInUp, defaultViewport } from "@/lib/motionVariants";

/* ─── Matching Dashboard mockup ─────────────────────────── */

function MatchingDashboardMockup() {
  const squads = [
    { name: "Código Sur",      flag: "🇦🇷", rank: "★★ Elite",     match: 97, tags: ["React", "Node.js"] },
    { name: "DevCraft BR",     flag: "🇧🇷", rank: "★ Verificado", match: 93, tags: ["Python", "AWS"] },
    { name: "ML Specialists",  flag: "🇲🇽", rank: "✓ Confiable",  match: 89, tags: ["ML/AI", "FastAPI"] },
  ];

  return (
    <div
      className="overflow-hidden rounded-2xl border border-cyan/20 shadow-[0_24px_60px_rgba(0,0,0,0.65),0_0_50px_rgba(0,180,216,0.08)]"
      style={{ background: "#050f0f" }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between border-b border-white/5 px-4 py-3"
        style={{ background: "#020c0b" }}
      >
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan" />
          <span className="font-mono text-[10px] text-white/50">Kaizen Match · 3 squads encontrados</span>
        </div>
        <span className="rounded-full border border-cyan/25 bg-cyan/10 px-2 py-0.5 font-mono text-[9px] font-bold text-cyan">
          LIVE
        </span>
      </div>

      {/* Squad list */}
      <div className="flex flex-col divide-y divide-white/5">
        {squads.map((s) => (
          <div key={s.name} className="flex items-center gap-3 px-4 py-4 transition-colors hover:bg-white/[0.02]">
            {/* Flag avatar */}
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cyan/20 bg-gradient-to-br from-teal/20 to-cyan/10 text-xl">
              {s.flag}
            </div>
            {/* Info */}
            <div className="min-w-0 flex-1">
              <div className="mb-1 flex items-center gap-2">
                <p className="font-display text-[13px] font-bold text-white">{s.name}</p>
                <span className="rounded-full border border-gold/20 bg-gold/8 px-1.5 py-px font-mono text-[8px] text-gold">
                  {s.rank}
                </span>
              </div>
              <div className="flex gap-1">
                {s.tags.map((t) => (
                  <span key={t} className="rounded border border-white/8 bg-white/4 px-1.5 py-px font-mono text-[9px] text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            {/* Match */}
            <div className="text-right">
              <p className="font-mono text-xl font-bold text-cyan">{s.match}%</p>
              <p className="font-mono text-[9px] text-muted-foreground">match</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="border-t border-white/5 px-4 py-3">
        <p className="text-center font-mono text-[9px] text-muted-foreground">
          Kaizen recomienda · vos elegís
        </p>
      </div>
    </div>
  );
}

/* ─── Section ────────────────────────────────────────────── */

export function ProblemSolutionSection() {
  return (
    <section id="how-it-works" className="relative overflow-hidden py-20">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 70% 60% at 20% 50%, rgba(0,180,216,0.08) 0%, transparent 70%)" }}
        />
        <div
          className="absolute -right-24 top-1/3 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,180,216,0.12) 0%, transparent 65%)", filter: "blur(80px)", opacity: 0.5 }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* ── Text ── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={defaultViewport}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] as const }}
            className="flex flex-col gap-6"
          >
            <h2
              className="font-display font-bold leading-tight text-white"
              style={{ fontSize: "clamp(26px, 3vw, 36px)" }}
            >
              Necesitás crecer.<br />
              <span className="text-shimmer">No querés contratar.</span>
            </h2>

            <div className="font-sans text-base leading-relaxed text-muted-foreground space-y-3">
              <p>Tu equipo está al máximo. Tenés proyectos nuevos. Contratar toma 6 meses y equity.</p>
              <p className="text-white/80 font-medium">
                Zenit: equipos vetados en 2 semanas.<br />
                Sin headcount. Sin equity. Sin riesgo.
              </p>
            </div>

            <a
              href="/companies"
              className="inline-flex w-fit items-center gap-2 font-sans text-sm font-semibold text-cyan transition-all hover:gap-3"
            >
              Explore for Companies <ArrowRight size={14} />
            </a>
          </motion.div>

          {/* ── Mockup ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={defaultViewport}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <MatchingDashboardMockup />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
