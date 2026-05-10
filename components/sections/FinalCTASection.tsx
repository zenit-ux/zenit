"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeInUp, staggerContainer, defaultViewport } from "@/lib/motionVariants";

const audiences = [
  {
    label: "For Companies",
    desc: "Vetted squads in 48h. SafePay on every milestone.",
    cta: "Start Discovery →",
    href: "/companies",
    color: "gold",
    border: "border-gold/25",
    bg: "bg-gold/5",
    text: "text-gold",
  },
  {
    label: "For Squads",
    desc: "Pre-vetted clients. Set your rate. ZenitRank grows it.",
    cta: "Pre-register →",
    href: "/squads/pre-registro",
    color: "teal",
    border: "border-teal/25",
    bg: "bg-teal/5",
    text: "text-teal",
  },
  {
    label: "For AI Teams",
    desc: "Ship AI features in 3 months. Your team owns it after.",
    cta: "Explore AI Path →",
    href: "/ai-migration",
    color: "cyan",
    border: "border-cyan/25",
    bg: "bg-cyan/5",
    text: "text-cyan",
  },
];

export function FinalCTASection() {
  return (
    <section className="relative overflow-hidden py-28" style={{ background: "#070b0b" }}>
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(15,118,110,0.18) 0%, rgba(0,180,216,0.08) 50%, transparent 80%)" }}
        />
        <div
          className="absolute -top-32 -left-32 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(245,158,11,0.12) 0%, transparent 65%)", filter: "blur(80px)", opacity: 0.5 }}
        />
        <div
          className="absolute -bottom-32 -right-32 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,180,216,0.15) 0%, transparent 65%)", filter: "blur(80px)", opacity: 0.4 }}
        />
        <div className="grid-pattern absolute inset-0 opacity-30" />
        <div className="absolute top-0 left-0 h-px w-40 bg-gradient-to-r from-teal/50 to-transparent" />
        <div className="absolute top-0 left-0 h-40 w-px bg-gradient-to-b from-teal/50 to-transparent" />
        <div className="absolute bottom-0 right-0 h-px w-40 bg-gradient-to-l from-gold/50 to-transparent" />
        <div className="absolute bottom-0 right-0 h-40 w-px bg-gradient-to-t from-gold/50 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="flex flex-col items-center gap-8"
        >
          {/* Eyebrow */}
          <motion.span
            variants={fadeInUp}
            className="inline-flex items-center gap-2 rounded-full border border-teal/25 bg-teal/8 px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-widest text-teal"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan" />
            Get Started
          </motion.span>

          {/* Headline */}
          <motion.h2
            variants={fadeInUp}
            className="font-display font-bold leading-tight text-white"
            style={{ fontSize: "clamp(28px, 3.5vw, 48px)" }}
          >
            Ship Your Next Team{" "}
            <span className="text-shimmer-gold">In 2 Weeks.</span>
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            className="max-w-lg font-sans text-base leading-relaxed text-muted-foreground"
          >
            Not 6 months. Not $300k in salaries.{" "}
            <span className="text-white/80">Vetted squads, proven work, SafePay protection — from day one.</span>
          </motion.p>

          {/* 3-audience cards */}
          <motion.div
            variants={fadeInUp}
            className="grid w-full gap-4 sm:grid-cols-3"
          >
            {audiences.map((a) => (
              <Link
                key={a.label}
                href={a.href}
                className={`flex flex-col gap-3 rounded-2xl border p-5 text-left transition-all duration-300 hover:scale-[1.02] ${a.border} ${a.bg}`}
              >
                <p className={`font-mono text-[10px] font-bold uppercase tracking-widest ${a.text}`}>{a.label}</p>
                <p className="font-sans text-[12px] leading-relaxed text-white/60">{a.desc}</p>
                <span className={`inline-flex items-center gap-1 font-sans text-[12px] font-semibold ${a.text}`}>
                  {a.cta} <ArrowRight size={11} />
                </span>
              </Link>
            ))}
          </motion.div>

          {/* Social proof strip */}
          <motion.div
            variants={fadeInUp}
            className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-white/8 pt-8"
          >
            {[
              { value: "500+",  label: "vetted squads" },
              { value: "4.8★",  label: "average quality score" },
              { value: "95%",   label: "project success rate" },
              { value: "2 wks", label: "to first team" },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-2">
                <span className="font-mono text-sm font-bold text-cyan drop-shadow-[0_0_8px_rgba(0,180,216,0.5)]">
                  {s.value}
                </span>
                <span className="font-sans text-xs text-muted-foreground">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
