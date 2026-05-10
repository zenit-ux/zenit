"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { staggerContainer, scaleIn, fadeInUp, defaultViewport } from "@/lib/motionVariants";

/* ─── Benefit row ─────────────────────────────────────────── */

function Benefit({
  capability,
  result,
  accent = "teal",
}: {
  capability: string;
  result: string;
  accent?: "teal" | "gold";
}) {
  return (
    <li className="flex gap-3">
      <Check
        size={16}
        strokeWidth={2.5}
        className={`mt-0.5 shrink-0 ${accent === "gold" ? "text-gold" : "text-teal"}`}
      />
      <div>
        <p className="font-sans text-[13px] font-medium leading-snug text-white/90">{capability}</p>
        <p className="mt-0.5 font-mono text-[11px] text-muted-foreground">
          <span className={`font-semibold ${accent === "gold" ? "text-gold/80" : "text-teal/80"}`}>
            Result:
          </span>{" "}
          {result}
        </p>
      </div>
    </li>
  );
}

/* ─── Section ────────────────────────────────────────────── */

export function ValuePropSection() {
  const companies = [
    {
      capability: "Kaizen maps your actual needs — not what you think you need.",
      result: "Clear specification. No surprises mid-project.",
    },
    {
      capability: "Zenit matches from 500+ vetted squads down to 3–5 perfect fits.",
      result: "You interview candidates you'd actually hire.",
    },
    {
      capability: "SafePay escrow + GitHub proof on every milestone.",
      result: "Zero payment risk. Work is proven.",
    },
    {
      capability: "Squad B backup replaces underperforming teams in 24 hours.",
      result: "Your timeline is protected.",
    },
    {
      capability: "15% commission. No equity. No long-term commitment.",
      result: "Flexibility to scale up or down as needed.",
    },
  ];

  const squads = [
    {
      capability: "Pre-vetted clients come to you with clear, Kaizen-generated briefs.",
      result: "No vetting, no guessing, just work.",
    },
    {
      capability: "You set your rate. We guarantee it.",
      result: "No race to the bottom.",
    },
    {
      capability: "ZenitRank shows your reputation based on real project outcomes.",
      result: "Better clients find you. Better projects follow.",
    },
    {
      capability: "Seña model means clients are as committed as you are.",
      result: "No ghosting. Real partnerships.",
    },
    {
      capability: "Elite tier unlocks higher rates, mentorship, and premium projects.",
      result: "Clear path to growth.",
    },
  ];

  return (
    <section className="relative overflow-hidden py-20">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 90% 60% at 50% 50%, rgba(15,118,110,0.07) 0%, rgba(0,180,216,0.04) 50%, transparent 80%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid gap-6 lg:grid-cols-2"
        >
          {/* ── Companies ── */}
          <motion.div
            variants={scaleIn}
            className="rounded-2xl border border-gold/20 p-8"
            style={{ background: "rgba(13,19,19,0.85)" }}
          >
            <div className="mb-6">
              <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/8 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-gold">
                For Companies
              </span>
              <h2
                className="font-display font-bold leading-tight text-white"
                style={{ fontSize: "clamp(22px, 2.5vw, 32px)" }}
              >
                Get Capacity<br />Without Hiring
              </h2>
            </div>

            <ul className="flex flex-col gap-5">
              {companies.map((b) => (
                <Benefit key={b.capability} {...b} accent="gold" />
              ))}
            </ul>

            <div className="mt-8 border-t border-white/8 pt-6">
              <a
                href="/companies"
                className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-gold transition-all hover:gap-3"
              >
                Start Discovery — free, no commitment →
              </a>
            </div>
          </motion.div>

          {/* ── Squads ── */}
          <motion.div
            variants={scaleIn}
            className="rounded-2xl border border-teal/20 p-8"
            style={{ background: "rgba(13,19,19,0.85)" }}
          >
            <div className="mb-6">
              <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-teal/25 bg-teal/8 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-teal">
                For Squads
              </span>
              <h2
                className="font-display font-bold leading-tight text-white"
                style={{ fontSize: "clamp(22px, 2.5vw, 32px)" }}
              >
                Stop Competing<br />On Price
              </h2>
            </div>

            <ul className="flex flex-col gap-5">
              {squads.map((b) => (
                <Benefit key={b.capability} {...b} accent="teal" />
              ))}
            </ul>

            <div className="mt-8 border-t border-white/8 pt-6">
              <a
                href="/get-started?type=squad"
                className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-teal transition-all hover:gap-3"
              >
                Pre-register — see your first opportunities →
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
