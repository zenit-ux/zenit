"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { NeuralNoise } from "@/components/ui/neural-noise";

/* ─── Static background glows (no GSAP needed) ───────────── */

function BackgroundGlows() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {/* Teal — top left */}
      <div className="absolute rounded-full" style={{ top: "-20%", left: "-8%", width: 860, height: 860, background: "radial-gradient(circle, rgba(15,118,110,0.55) 0%, rgba(15,118,110,0.15) 45%, transparent 70%)", filter: "blur(80px)", opacity: 0.75 }} />
      {/* Cyan — top right */}
      <div className="absolute rounded-full" style={{ top: "-15%", right: "-8%", width: 720, height: 720, background: "radial-gradient(circle, rgba(0,180,216,0.50) 0%, rgba(0,180,216,0.12) 45%, transparent 70%)", filter: "blur(90px)", opacity: 0.65 }} />
      {/* Gold accent — bottom center, echoes NeuralNoise */}
      <div className="absolute rounded-full" style={{ bottom: "-15%", left: "35%", width: 600, height: 600, background: "radial-gradient(circle, rgba(245,158,11,0.22) 0%, transparent 65%)", filter: "blur(110px)", opacity: 0.55 }} />
      {/* Vignette — keeps text readable */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 65% 55% at 50% 50%, rgba(0,0,0,0.65) 0%, transparent 80%)" }} />
      {/* Bottom fade into next section */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0F0F0F] to-transparent" />
    </div>
  );
}

/* ─── Grid + scan line ───────────────────────────────────── */

function GridOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <svg className="absolute inset-0 h-full w-full" style={{ opacity: 0.06 }}>
        <defs>
          <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#00b4d8" strokeWidth="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" />
      </svg>
    </div>
  );
}

/* ─── Hero ───────────────────────────────────────────────── */

export function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden pt-[120px] pb-24"
      style={{ background: "#0F0F0F" }}
    >
      {/* Gold WebGL neural glow — reacts to mouse movement */}
      <NeuralNoise
        color={[0.96, 0.62, 0.04]}
        opacity={0.80}
        speed={0.0008}
        className="absolute inset-0 h-full w-full"
        style={{ mixBlendMode: "screen" }}
      />

      <BackgroundGlows />
      <GridOverlay />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-4 text-center sm:px-6">

        {/* Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          className="mb-6 flex flex-wrap items-center justify-center gap-2"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/8 px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-cyan">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan" />
            Kaizen AI · Matching Inteligente
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/6 px-4 py-1.5 font-mono text-[11px] font-bold text-gold">
            SafePay Protegido
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.75, ease: [0.22, 1, 0.36, 1] as const }}
          className="mb-6 font-display font-bold text-white"
          style={{ fontSize: "clamp(28px, 3.8vw, 48px)", lineHeight: "1.3" }}
        >
          ¿Cómo acelerar manteniendo calidad<br />
          <span className="text-shimmer-gold">si necesitás reducir costos?</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.65, ease: [0.22, 1, 0.36, 1] as const }}
          className="mb-8 max-w-lg font-sans text-muted-foreground"
          style={{ fontSize: "16px", lineHeight: "1.6" }}
        >
          <span className="font-semibold text-white/90">Zenit.</span>
          <br /><br />
          Equipos especializados bajo demanda.<br />
          Expande capacidad. Reduce costos.<br />
          <span className="text-white/70">Sin fricciones. Sin sobreexigir a tu equipo.</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.42, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          className="flex flex-col items-center gap-4"
        >
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/companies"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3 font-sans text-sm font-bold text-[#0F0F0F] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_48px_rgba(255,255,255,0.28)]"
            >
              Scale Your Next Project →
            </Link>
            <Link
              href="/squads/pre-registro"
              className="inline-flex items-center gap-2 rounded-xl border border-cyan/35 px-7 py-3 font-sans text-sm font-medium text-cyan/90 backdrop-blur-sm transition-all duration-300 hover:border-cyan/60 hover:bg-cyan/6 hover:shadow-[0_0_32px_rgba(0,180,216,0.18)]"
            >
              Pre-register Your Squad →
            </Link>
          </div>
          <a
            href="#how-it-works"
            className="font-sans text-sm font-medium text-teal/80 transition-colors hover:text-teal"
          >
            See how it works ↓
          </a>
          {/* Trust signals inline */}
          <p className="mt-2 font-sans text-[13px] text-muted-foreground">
            15+ squads · $500k+ projects · 95% success rate
          </p>
        </motion.div>

      </div>
    </section>
  );
}
