"use client";

import { motion } from "framer-motion";
import { staggerContainer, scaleIn, defaultViewport } from "@/lib/motionVariants";

const quotes = [
  {
    situation: "We were running 3 parallel projects with no capacity to add engineers.",
    action: "Zenit matched 3 vetted squads in under 2 weeks. Each one fit our stack exactly.",
    result: "$450k in dev costs saved. 4.7★ quality across all three projects.",
    name: "Matías Rodríguez",
    role: "CEO, Series B SaaS",
    flag: "🇦🇷",
    color: "cyan" as const,
  },
  {
    situation: "We promised an AI feature for Q3. Our team had zero AI experience.",
    action: "Kaizen scoped it in a week. The squad shipped to production in 3 months.",
    result: "Feature live in Q3 — not 9 months later. Team owns it. No dependency.",
    name: "Diego Fuentes",
    role: "CTO, FinTech MX",
    flag: "🇲🇽",
    color: "gold" as const,
  },
  {
    situation: "We were winning 3% of proposals. Clients didn't trust us — no proof, no ranking.",
    action: "Kaizen pre-qualified clients. ZenitRank surfaced our track record automatically.",
    result: "Win rate jumped to 65%. Rates doubled. Zero time wasted on bad-fit clients.",
    name: "Carlos Mendes",
    role: "Squad Lead, DevCraft",
    flag: "🇧🇷",
    color: "teal" as const,
  },
];

const borderMap = {
  cyan: "border-cyan/20",
  gold: "border-gold/20",
  teal: "border-teal/20",
};

const accentMap = {
  cyan: "text-cyan",
  gold: "text-gold",
  teal: "text-teal",
};

const labelMap = {
  cyan: "bg-cyan/10 text-cyan",
  gold: "bg-gold/10 text-gold",
  teal: "bg-teal/10 text-teal",
};

export function TestimonialsSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          className="mb-10 text-center"
        >
          <p className="mb-2 font-mono text-[11px] font-bold uppercase tracking-widest text-cyan">
            Testimonials
          </p>
          <h2
            className="font-display font-bold text-white"
            style={{ fontSize: "clamp(24px, 2.8vw, 36px)" }}
          >
            Real teams.{" "}
            <span className="text-shimmer">Measurable results.</span>
          </h2>
        </motion.div>

        {/* 3-card grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid gap-5 md:grid-cols-3"
        >
          {quotes.map((q) => (
            <motion.div
              key={q.name}
              variants={scaleIn}
              className={`flex flex-col gap-4 rounded-2xl border p-6 ${borderMap[q.color]}`}
              style={{ background: "#0F1419" }}
            >
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="mt-0.5 shrink-0 rounded px-1.5 py-0.5 font-mono text-[8px] font-bold uppercase tracking-wider text-white/40 bg-white/5">Situation</span>
                  <p className="font-sans text-[12px] leading-relaxed text-white/60">{q.situation}</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className={`mt-0.5 shrink-0 rounded px-1.5 py-0.5 font-mono text-[8px] font-bold uppercase tracking-wider ${labelMap[q.color]}`}>Action</span>
                  <p className="font-sans text-[12px] leading-relaxed text-white/80">{q.action}</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-0.5 shrink-0 rounded px-1.5 py-0.5 font-mono text-[8px] font-bold uppercase tracking-wider bg-white/8 text-white/60">Result</span>
                  <p className={`font-sans text-[12px] font-semibold leading-relaxed ${accentMap[q.color]}`}>{q.result}</p>
                </div>
              </div>

              <div className="mt-auto flex items-center gap-2.5 border-t border-white/5 pt-4">
                <div className={`flex h-8 w-8 items-center justify-center rounded-full border ${borderMap[q.color]} bg-white/5 font-display text-xs font-bold text-white`}>
                  {q.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </div>
                <div>
                  <p className="font-sans text-[12px] font-semibold text-white">
                    {q.name} <span className="ml-0.5">{q.flag}</span>
                  </p>
                  <p className={`font-mono text-[10px] ${accentMap[q.color]}`}>{q.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
