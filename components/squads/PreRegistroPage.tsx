"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, fadeInUp, scaleIn, defaultViewport } from "@/lib/motionVariants";
import { ArrowRight, CheckCircle2, Clock, Shield, Star, TrendingUp, Users } from "lucide-react";
import { RegistroModal } from "./RegistroModal";
import { NeuralNoise } from "@/components/ui/neural-noise";
import type { Locale } from "@/lib/i18n/preregistro";
import { t } from "@/lib/i18n/preregistro";

interface Props { locale: Locale; }

export function PreRegistroPage({ locale }: Props) {
  const i18n = t(locale);
  const [modalOpen, setModalOpen] = useState(false);

  const STEP_ICONS = [Users, Clock, Shield];
  const STEP_ACCENTS = [
    { text: "text-cyan", glow: "rgba(0,180,216,0.15)", border: "border-cyan/20" },
    { text: "text-teal", glow: "rgba(13,148,136,0.15)", border: "border-teal/20" },
    { text: "text-gold", glow: "rgba(245,158,11,0.15)", border: "border-gold/20" },
  ];
  const BADGE_COLORS = ["#94a3b8", "#0d9488", "#f59e0b", "#00b4d8"];
  const BADGE_GLOWS = [
    "rgba(148,163,184,0.12)", "rgba(13,148,136,0.18)", "rgba(245,158,11,0.18)", "rgba(0,180,216,0.18)",
  ];
  const BADGE_BORDERS = ["border-white/15", "border-teal/25", "border-gold/25", "border-cyan/25"];

  return (
    <main className="min-h-screen bg-background">

      {/* ━━━ HERO + CHAT — centrado ━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative flex flex-col items-center overflow-hidden pt-32 pb-14 lg:pt-28 lg:pb-20">

        {/* Neural canvas — teal */}
        <NeuralNoise
          color={[13, 148, 136]}
          opacity={0.28}
          speed={0.0007}
          intensity={0.95}
          className="pointer-events-none absolute inset-0 h-full w-full"
          style={{ mixBlendMode: "screen" }}
        />
        {/* Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-background/65" aria-hidden />
        {/* Ambient orbs */}
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute -top-32 left-1/2 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-cyan/5 blur-[100px] animate-orb-1" />
          <div className="absolute top-20 left-1/4 h-[200px] w-[300px] rounded-full bg-teal/4 blur-[80px] animate-orb-2" />
        </div>

        {/* ── Hero text ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative mx-auto mb-10 max-w-2xl px-4 text-center"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} className="mb-5">
            <span
              className="inline-flex items-center rounded-full border border-teal/30 bg-teal/8 px-3.5 py-1 font-mono font-bold uppercase tracking-widest text-teal"
              style={{ fontSize: "11px" }}
            >
              {i18n.heroEyebrow}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeInUp}
            className="mb-4 font-display font-bold leading-[1.1] text-white"
            style={{ fontSize: "clamp(28px, 3.8vw, 54px)" }}
          >
            {i18n.heroH1[0]}
            <br />
            <span style={{ color: "#00b4d8" }}>{i18n.heroH1[1]}</span>
          </motion.h1>

          {/* Bajada */}
          <motion.p
            variants={fadeInUp}
            className="font-sans leading-relaxed text-muted-foreground"
            style={{ fontSize: "16px" }}
          >
            {i18n.heroProblem}
          </motion.p>
        </motion.div>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.55, ease: [0.22, 1, 0.36, 1] as const }}
          className="relative flex flex-col items-center gap-4"
        >
          <motion.button
            type="button"
            onClick={() => setModalOpen(true)}
            whileHover={{ scale: 1.03, filter: "drop-shadow(0 0 32px rgba(0,180,216,0.45))" }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl px-8 py-4 font-mono text-base font-bold text-white"
            style={{
              background: "linear-gradient(135deg, #0f766e 0%, #0891b2 100%)",
              boxShadow: "0 0 40px rgba(0,180,216,0.2), 0 8px 32px rgba(0,0,0,0.4)",
            }}
          >
            <span className="relative z-10">{i18n.heroCta}</span>
            <ArrowRight size={16} className="relative z-10 transition-transform group-hover:translate-x-1" aria-hidden />
            {/* Shimmer */}
            <span
              className="absolute inset-0 -translate-x-full bg-white/10 skew-x-12 transition-transform duration-700 group-hover:translate-x-full"
              aria-hidden
            />
          </motion.button>

          <p className="flex items-center gap-1.5 font-mono text-muted-foreground" style={{ fontSize: "11px" }}>
            <Shield size={10} className="text-teal" aria-hidden /> {i18n.heroTrust}
          </p>
        </motion.div>

      </section>

      {/* ── Modal ── */}
      <AnimatePresence>
        {modalOpen && (
          <RegistroModal locale={locale} i18n={i18n} onClose={() => setModalOpen(false)} />
        )}
      </AnimatePresence>

      {/* ━━━ STATS STRIP — tres características ━━━━━━━━━━━━━ */}
      <div className="border-y border-white/5">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={defaultViewport}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-3 divide-x divide-white/5"
          >
            {i18n.stats.map(({ label, value, sub }, i) => {
              const Icon = [TrendingUp, Shield, Users][i];
              return (
                <div key={label} className="flex flex-col items-center gap-1 py-7 text-center">
                  <Icon size={15} className="mb-1 text-muted-foreground" aria-hidden />
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{label}</p>
                  <p className="font-mono text-sm font-bold text-white">{value}</p>
                  <p className="hidden font-mono text-[10px] text-muted-foreground sm:block">{sub}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* ━━━ CÓMO FUNCIONA — tres pasos ━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="mb-14 text-center"
          >
            <motion.p variants={fadeInUp} className="mb-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {i18n.stepsEyebrow}
            </motion.p>
            <motion.h2 variants={fadeInUp} className="font-display font-bold text-white" style={{ fontSize: "clamp(26px, 3vw, 42px)" }}>
              {i18n.stepsH2}
            </motion.h2>
          </motion.div>

          <div className="relative grid gap-5 md:grid-cols-3">
            {i18n.steps.map((step, i) => {
              const Icon = STEP_ICONS[i];
              const a = STEP_ACCENTS[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={defaultViewport}
                  transition={{ delay: i * 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] as const }}
                  className="relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-white/8 bg-white/3 p-6"
                >
                  <div
                    className="pointer-events-none absolute inset-0 rounded-2xl"
                    style={{ background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${a.glow} 0%, transparent 70%)` }}
                    aria-hidden
                  />
                  <div className="relative flex items-center justify-between">
                    <span className={`font-mono text-4xl font-bold ${a.text}`} style={{ opacity: 0.22 }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className={`flex h-9 w-9 items-center justify-center rounded-xl border ${a.border} bg-white/3`}>
                      <Icon size={16} className={a.text} aria-hidden />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-1.5 font-display text-base font-bold text-white">{step.title}</h3>
                    <p className="font-sans text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ━━━ CRITERIOS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="criterios" className="py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={defaultViewport}>
              <motion.p variants={fadeInUp} className="mb-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {i18n.criteriaEyebrow}
              </motion.p>
              <motion.h2 variants={fadeInUp} className="mb-8 font-display font-bold text-white" style={{ fontSize: "clamp(26px, 3vw, 42px)" }}>
                {i18n.criteriaH2}
              </motion.h2>
              <motion.ul variants={staggerContainer} className="space-y-3">
                {i18n.criteria.map((c, i) => (
                  <motion.li key={i} variants={fadeInUp} className="flex items-start gap-3">
                    <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${c.ok ? "border border-teal/30 bg-teal/10" : "border border-red-500/20 bg-red-500/8"}`}>
                      {c.ok
                        ? <CheckCircle2 size={11} className="text-teal" />
                        : <span className="font-mono text-[9px] font-bold text-red-400" aria-hidden>✕</span>
                      }
                    </span>
                    <span className={`font-sans text-sm leading-relaxed ${c.ok ? "text-white/80" : "text-muted-foreground line-through decoration-red-500/40"}`}>
                      {c.text}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <div className="flex flex-col gap-5">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={defaultViewport}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as const }}
                className="relative overflow-hidden rounded-2xl border border-gold/20 p-7"
                style={{ background: "linear-gradient(135deg, rgba(245,158,11,0.05) 0%, rgba(245,158,11,0.02) 100%)" }}
              >
                <div
                  className="pointer-events-none absolute right-0 top-0 h-36 w-36 -translate-y-1/4 translate-x-1/4 rounded-full"
                  style={{ background: "radial-gradient(circle, rgba(245,158,11,0.12) 0%, transparent 70%)", filter: "blur(36px)" }}
                  aria-hidden
                />
                <div className="relative">
                  <div className="mb-3 flex items-center gap-2">
                    <Star size={13} className="text-gold" aria-hidden />
                    <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-gold">{i18n.talentpathLabel}</span>
                  </div>
                  <h3 className="mb-2 font-display text-xl font-bold text-white">{i18n.talentpathH3}</h3>
                  <p className="mb-5 font-sans text-sm leading-relaxed text-muted-foreground">{i18n.talentpathBody}</p>
                  <a href="/talentpath" className="inline-flex items-center gap-2 font-mono text-sm font-bold text-gold transition-opacity hover:opacity-80">
                    {i18n.talentpathCta} <ArrowRight size={13} aria-hidden />
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={defaultViewport}
                transition={{ delay: 0.15, duration: 0.5 }}
                className="rounded-xl border border-white/8 bg-white/3 px-5 py-4"
              >
                <p className="font-mono text-xs leading-relaxed text-muted-foreground">
                  <span className="text-white">{i18n.whySeniorTitle}</span>{" "}{i18n.whySeniorBody}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ ZENITRANK ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative overflow-hidden py-24">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(13,148,136,0.06) 0%, transparent 70%)" }}
          />
        </div>
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={defaultViewport} className="mb-14 text-center">
            <motion.p variants={fadeInUp} className="mb-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {i18n.rankEyebrow}
            </motion.p>
            <motion.h2 variants={fadeInUp} className="mb-3 font-display font-bold text-white" style={{ fontSize: "clamp(26px, 3vw, 42px)" }}>
              {i18n.rankH2[0]}<br /><span style={{ color: "#00b4d8" }}>{i18n.rankH2[1]}</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="mx-auto max-w-lg font-sans text-sm text-muted-foreground">
              {i18n.rankBody}
            </motion.p>
          </motion.div>

          <div className="relative">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {i18n.rankBadges.map((badge, i) => (
                <motion.div
                  key={badge.name}
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={defaultViewport}
                  transition={{ delay: i * 0.09 }}
                  className={`relative flex flex-col gap-4 overflow-hidden rounded-2xl border ${BADGE_BORDERS[i]} p-5`}
                  style={{ background: badge.current ? "rgba(13,148,136,0.07)" : "rgba(255,255,255,0.02)" }}
                >
                  <div
                    className="pointer-events-none absolute inset-0 rounded-2xl"
                    style={{ background: `radial-gradient(ellipse 80% 50% at 50% 0%, ${BADGE_GLOWS[i]} 0%, transparent 70%)` }}
                    aria-hidden
                  />
                  {badge.current && (
                    <div className="absolute right-3 top-3 rounded-full border border-teal/30 bg-teal/10 px-2 py-0.5">
                      <span className="font-mono text-[8px] font-bold uppercase tracking-wider text-teal">{i18n.rankCurrentTag}</span>
                    </div>
                  )}
                  <span className="relative font-mono text-3xl font-bold" style={{ color: BADGE_COLORS[i] }} aria-hidden>
                    {badge.symbol}
                  </span>
                  <div>
                    <p className="mb-1 font-mono text-sm font-bold" style={{ color: BADGE_COLORS[i] }}>{badge.name}</p>
                    <p className="font-mono text-[11px] leading-relaxed text-muted-foreground">{badge.req}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={defaultViewport}
            transition={{ delay: 0.4 }}
            className="mt-10 flex justify-center"
          >
            <blockquote className="max-w-xl border-l-2 border-teal/40 pl-6">
              <p className="font-sans text-sm italic leading-relaxed text-white/60">&ldquo;{i18n.rankQuote}&rdquo;</p>
              <cite className="mt-2 block font-mono text-[11px] text-muted-foreground not-italic">{i18n.rankCite}</cite>
            </blockquote>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
