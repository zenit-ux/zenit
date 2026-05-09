"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeInUp, staggerContainer, defaultViewport } from "@/lib/motionVariants";

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
        {/* Corner accents */}
        <div className="absolute top-0 left-0 h-px w-40 bg-gradient-to-r from-teal/50 to-transparent" />
        <div className="absolute top-0 left-0 h-40 w-px bg-gradient-to-b from-teal/50 to-transparent" />
        <div className="absolute bottom-0 right-0 h-px w-40 bg-gradient-to-l from-gold/50 to-transparent" />
        <div className="absolute bottom-0 right-0 h-40 w-px bg-gradient-to-t from-gold/50 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
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
            Proyectos generales · Transformación IA
          </motion.span>

          {/* Headline */}
          <motion.h2
            variants={fadeInUp}
            className="font-display font-bold leading-tight text-white"
            style={{ fontSize: "clamp(28px, 3.5vw, 48px)" }}
          >
            ¿Listo para escalar?
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            className="max-w-lg font-sans text-base leading-relaxed text-muted-foreground"
          >
            Tanto para proyectos generales como para transformación con IA.{" "}
            <span className="text-white/80">Equipos vetados en 48h. SafePay protege cada peso.</span>
          </motion.p>

          {/* Primary buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/companies"
              className="inline-flex items-center gap-2 rounded-xl px-8 py-3.5 font-sans text-sm font-bold text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(0,160,159,0.35)]"
              style={{ background: "#00A89F" }}
            >
              Explore Zenit <ArrowRight size={14} />
            </Link>
            <Link
              href="/get-started?type=squad"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-teal px-8 py-[13px] font-sans text-sm font-bold text-teal transition-all duration-300 hover:bg-teal/8 hover:scale-[1.03]"
            >
              Pre-register Your Squad <ArrowRight size={14} />
            </Link>
          </motion.div>

          {/* Secondary links */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 font-sans text-[13px]"
          >
            <span className="text-muted-foreground">O explorá:</span>
            {[
              { label: "For Companies",   href: "/companies" },
              { label: "For Squads",      href: "/squads" },
              { label: "Pricing",         href: "/pricing" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-teal/80 transition-colors hover:text-teal"
              >
                {link.label}
              </a>
            ))}
          </motion.div>

          {/* Social proof strip */}
          <motion.div
            variants={fadeInUp}
            className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-white/8 pt-8"
          >
            {[
              { value: "500+", label: "squads verificados" },
              { value: "200+", label: "empresas activas" },
              { value: "98%",  label: "satisfaction rate" },
              { value: "$0",   label: "sin compromiso inicial" },
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
