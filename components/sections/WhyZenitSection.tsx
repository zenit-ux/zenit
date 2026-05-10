"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, X, Minus } from "lucide-react";
import { defaultViewport } from "@/lib/motionVariants";
import { cn } from "@/lib/utils";

/* ─── Comparison Matrix mockup ───────────────────────────── */

type CellVal = true | false | "half";

function Cell({ val, highlight }: { val: CellVal; highlight?: boolean }) {
  if (val === true) {
    return (
      <div className={cn("flex items-center justify-center py-0.5", highlight && "rounded-lg bg-teal/10")}>
        <Check size={15} className="text-teal" strokeWidth={2.5} />
      </div>
    );
  }
  if (val === "half") {
    return (
      <div className="flex items-center justify-center py-0.5">
        <Minus size={15} className="text-amber-400/70" strokeWidth={2.5} />
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center py-0.5">
      <X size={13} className="text-white/25" strokeWidth={2} />
    </div>
  );
}

function ComparisonMatrix() {
  const cols = ["Hiring", "Upwork", "Zenit"];
  const rows: { label: string; vals: [CellVal, CellVal, CellVal] }[] = [
    { label: "Velocidad",    vals: [false, "half", true] },
    { label: "Calidad",      vals: [true,  "half", true] },
    { label: "Costo",        vals: [false, "half", true] },
    { label: "Flexibilidad", vals: [false, "half", true] },
  ];

  return (
    <div
      className="overflow-hidden rounded-2xl border border-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.65)]"
      style={{ background: "#050f0f" }}
    >
      {/* Header row */}
      <div className="grid grid-cols-4 border-b border-white/8 px-5 py-3" style={{ background: "#020c0b" }}>
        <div />
        {cols.map((col, i) => (
          <div key={col} className="flex items-center justify-center">
            <span className={cn(
              "font-mono text-[11px] font-bold",
              i === 2 ? "text-cyan" : "text-muted-foreground/70"
            )}>
              {i === 2 && <span className="mr-1 text-teal">✦</span>}{col}
            </span>
          </div>
        ))}
      </div>

      {/* Data rows */}
      {rows.map((row, ri) => (
        <div
          key={row.label}
          className={cn("grid grid-cols-4 items-center px-5 py-3.5", ri < rows.length - 1 && "border-b border-white/5")}
        >
          <span className="font-sans text-[12px] font-medium text-white/70">{row.label}</span>
          {row.vals.map((val, i) => (
            <Cell key={i} val={val} highlight={i === 2} />
          ))}
        </div>
      ))}

      {/* Footer */}
      <div className="border-t border-white/5 px-5 py-3">
        <p className="text-center font-mono text-[9px] text-muted-foreground">
          Basado en tiempo promedio de contratación en LATAM · 2025
        </p>
      </div>
    </div>
  );
}

/* ─── Section ────────────────────────────────────────────── */

export function WhyZenitSection() {
  const alternatives = [
    {
      label: "Hiring in-house",
      pro: "Quality ✓",
      con: "6 months + $300k+ equity. Headcount forever.",
    },
    {
      label: "Upwork",
      pro: "Speed ✓",
      con: "Quality is a gamble. You vet 50 candidates yourself.",
    },
    {
      label: "Toptal",
      pro: "Quality + Speed ✓",
      con: "30% commission. Matching takes 2–3 weeks.",
    },
  ];

  const zenitBenefits = [
    { label: "Quality",      desc: "4.8★ vetted squads, production-ready" },
    { label: "Speed",        desc: "2 weeks, not 6 months" },
    { label: "Cost",         desc: "15% commission, no equity, no long-term" },
    { label: "Safety",       desc: "SafePay escrow, GitHub proof, Squad B backup" },
    { label: "Control",      desc: "You interview 3–5 pre-filtered candidates" },
  ];

  return (
    <section className="relative overflow-hidden py-20">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 70% 60% at 20% 60%, rgba(245,158,11,0.05) 0%, transparent 70%)" }}
        />
        <div
          className="absolute -right-24 bottom-0 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(245,158,11,0.10) 0%, transparent 65%)", filter: "blur(90px)", opacity: 0.45 }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* ── Text (left) ── */}
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
              Not just faster.<br />
              <span className="text-shimmer-gold">Better in every way.</span>
            </h2>

            {/* Alternatives */}
            <div className="space-y-3">
              {alternatives.map((a) => (
                <div key={a.label} className="rounded-xl border border-white/6 bg-white/[0.03] px-4 py-3">
                  <div className="flex items-start justify-between gap-3">
                    <span className="font-sans text-[12px] font-semibold text-white/60">{a.label}</span>
                    <span className="font-mono text-[10px] text-teal/70 shrink-0">{a.pro}</span>
                  </div>
                  <p className="mt-1 font-sans text-[11px] text-red-400/70">{a.con}</p>
                </div>
              ))}
            </div>

            {/* Zenit advantages */}
            <div className="rounded-xl border border-teal/20 bg-teal/[0.04] px-4 py-4">
              <p className="mb-3 font-mono text-[10px] font-bold uppercase tracking-widest text-teal">Zenit gives you all five:</p>
              <ul className="space-y-2">
                {zenitBenefits.map((b) => (
                  <li key={b.label} className="flex items-start gap-2.5">
                    <Check size={13} className="mt-0.5 shrink-0 text-teal" strokeWidth={2.5} />
                    <p className="font-sans text-[12px] text-white/80">
                      <span className="font-semibold">{b.label}:</span>{" "}{b.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="/how-it-works"
              className="inline-flex w-fit items-center gap-2 font-sans text-sm font-semibold text-cyan transition-all hover:gap-3"
            >
              See Full Comparison <ArrowRight size={14} />
            </a>
          </motion.div>

          {/* ── Mockup (right) ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={defaultViewport}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <ComparisonMatrix />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
