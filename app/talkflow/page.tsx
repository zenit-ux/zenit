"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ArrowLeftRight,
  Mic,
  Globe,
  Zap,
  BarChart3,
} from "lucide-react";
import {
  staggerContainer,
  fadeInUp,
  scaleIn,
  slideInRight,
  defaultViewport,
} from "@/lib/motionVariants";
import { cn } from "@/lib/utils";
import { NeuralNoise } from "@/components/ui/neural-noise";

// ─── MOCKUP 1: Live Call Interface ───────────────────────────────────────────

function LiveCallMockup() {
  return (
    <div
      className="w-full overflow-hidden rounded-2xl border border-white/8 shadow-2xl"
      style={{ background: "#050f0f" }}
    >
      {/* Top bar */}
      <div
        className="flex items-center justify-between border-b border-white/6 px-4 py-3"
        style={{ background: "#080f0f" }}
      >
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-cyan animate-pulse" />
          <span className="font-mono text-xs font-semibold text-cyan">TalkFlow Active</span>
          <span className="mx-2 h-3 w-px bg-white/10" />
          <span className="font-mono text-[10px] text-white/35">
            🔴 Recording disabled
          </span>
        </div>
        <div className="flex items-center gap-1.5 rounded-full border border-teal/25 bg-teal/10 px-2.5 py-0.5">
          <Zap size={9} className="text-teal" />
          <span className="font-mono text-[10px] font-semibold text-teal">Latency: 0.4s</span>
        </div>
      </div>

      {/* Participant panels */}
      <div className="flex gap-0 divide-x divide-white/6">
        {/* Left — Squad */}
        <div className="flex flex-1 flex-col items-center gap-3 px-4 py-5">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-teal/30 bg-teal/15 font-display text-base font-bold text-teal">
            RN
          </div>
          <div className="text-center">
            <p className="font-sans text-sm font-semibold text-white">
              React &amp; Node Squad 🇦🇷
            </p>
          </div>
          <span className="rounded-full border border-cyan/30 bg-cyan/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-cyan">
            Speaking: Spanish
          </span>
        </div>

        {/* Center icon */}
        <div className="flex items-center justify-center px-3">
          <ArrowLeftRight size={14} className="text-white/20" />
        </div>

        {/* Right — Company */}
        <div className="flex flex-1 flex-col items-center gap-3 px-4 py-5">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/8 font-display text-base font-bold text-white/60">
            AC
          </div>
          <div className="text-center">
            <p className="font-sans text-sm font-semibold text-white">
              Acme Corp 🇺🇸
            </p>
          </div>
          <span className="rounded-full border border-teal/30 bg-teal/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-teal">
            Hearing: English
          </span>
        </div>
      </div>

      {/* Translation stream */}
      <div
        className="mx-4 mb-4 flex flex-col gap-2 rounded-xl border border-white/6 px-4 py-3"
        style={{ background: "rgba(0,180,216,0.04)" }}
      >
        <div className="flex items-start gap-2">
          <span className="mt-0.5 font-mono text-[9px] font-semibold uppercase tracking-widest text-white/30">
            Original
          </span>
          <p className="font-sans text-xs leading-relaxed text-white/55">
            Necesitamos hablar sobre el timeline del milestone 2...
          </p>
        </div>
        <div className="h-px bg-white/5" />
        <div className="flex items-start gap-2">
          <span className="mt-0.5 font-mono text-[9px] font-semibold uppercase tracking-widest text-cyan/60">
            Translated
          </span>
          <p className="font-sans text-xs leading-relaxed text-white/80">
            We need to talk about the timeline for milestone 2...
          </p>
        </div>
        <div className="mt-1 flex items-center gap-1.5">
          <span className="flex h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
          <span className="font-mono text-[10px] text-cyan/70">Translating...</span>
        </div>
      </div>

      {/* Subtitle bar */}
      <div
        className="relative border-t border-white/6 px-6 py-3"
        style={{ background: "rgba(255,255,255,0.02)" }}
      >
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-8"
          style={{
            background:
              "linear-gradient(to right, #050f0f, transparent)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-8"
          style={{
            background:
              "linear-gradient(to left, #050f0f, transparent)",
          }}
        />
        <p className="truncate text-center font-sans text-xs text-white/70">
          We need to talk about the timeline for milestone 2 — can we push it by 3 days?
        </p>
      </div>

      {/* Bottom bar */}
      <div className="flex items-center justify-between border-t border-white/6 px-4 py-3">
        <div className="flex items-center gap-2 rounded-full border border-cyan/20 bg-cyan/8 px-3 py-1">
          <ArrowLeftRight size={10} className="text-cyan" />
          <span className="font-mono text-[10px] font-semibold text-cyan">ES → EN</span>
        </div>
        <span className="font-mono text-[10px] text-teal">0.4s avg · Excellent</span>
      </div>
    </div>
  );
}

// ─── MOCKUP 2: Language Support Grid ─────────────────────────────────────────

const languagePairs = [
  {
    pair: "🇪🇸 Spanish ↔ 🇺🇸 English",
    status: "LIVE",
    calls: "12,847 calls",
    color: "teal" as const,
  },
  {
    pair: "🇧🇷 Portuguese ↔ 🇺🇸 English",
    status: "LIVE",
    calls: "8,341 calls",
    color: "teal" as const,
  },
  {
    pair: "🇲🇽 Spanish ↔ 🇬🇧 English",
    status: "LIVE",
    calls: "3,211 calls",
    color: "teal" as const,
  },
  {
    pair: "🇦🇷 Spanish ↔ 🇩🇪 German",
    status: "BETA",
    calls: "441 calls",
    color: "amber" as const,
  },
  {
    pair: "🇨🇴 Spanish ↔ 🇫🇷 French",
    status: "BETA",
    calls: "289 calls",
    color: "amber" as const,
  },
  {
    pair: "🇧🇷 Portuguese ↔ 🇯🇵 Japanese",
    status: "COMING SOON",
    calls: null,
    color: "muted" as const,
  },
];

function LanguageGridMockup() {
  return (
    <div
      className="w-full overflow-hidden rounded-2xl border border-white/8 shadow-2xl"
      style={{ background: "#050f0f" }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between border-b border-white/6 px-5 py-3"
        style={{ background: "#080f0f" }}
      >
        <div className="flex items-center gap-2">
          <Globe size={14} className="text-cyan" />
          <span className="font-sans text-sm font-semibold text-white">
            Translation pairs · Live
          </span>
        </div>
      </div>

      {/* Grid */}
      <div className="flex flex-col divide-y divide-white/4">
        {languagePairs.map((item) => (
          <div key={item.pair} className="flex items-center justify-between px-5 py-3">
            <span className="font-sans text-xs text-white/65">{item.pair}</span>
            <div className="flex items-center gap-2">
              {item.calls && (
                <span className="font-mono text-[10px] text-white/30">{item.calls}</span>
              )}
              <span
                className={cn(
                  "rounded border px-2 py-0.5 font-mono text-[10px] font-bold",
                  item.color === "teal" &&
                    "border-teal/30 bg-teal/10 text-teal",
                  item.color === "amber" &&
                    "border-amber-400/30 bg-amber-400/10 text-amber-400",
                  item.color === "muted" &&
                    "border-white/10 bg-white/5 text-white/30"
                )}
              >
                {item.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <div className="border-t border-white/6 px-5 py-3">
        <p className="font-sans text-[11px] text-white/30">
          More language pairs added monthly based on community demand
        </p>
      </div>
    </div>
  );
}

// ─── MOCKUP 3: Latency & Quality Dashboard ───────────────────────────────────

const latencyBars = [
  { label: "0.2s", height: 30, active: false },
  { label: "0.3s", height: 55, active: true },
  { label: "0.4s", height: 90, active: true },
  { label: "0.5s", height: 72, active: true },
  { label: "0.6s", height: 38, active: false },
  { label: "0.8s", height: 20, active: false },
  { label: "1.0s", height: 10, active: false },
  { label: "1.5s", height: 6, active: false },
  { label: "2.0s", height: 4, active: false },
];

function QualityDashboardMockup() {
  return (
    <div
      className="w-full overflow-hidden rounded-2xl border border-white/8 shadow-2xl"
      style={{ background: "#050f0f" }}
    >
      {/* Header */}
      <div
        className="flex items-center gap-2 border-b border-white/6 px-5 py-3"
        style={{ background: "#080f0f" }}
      >
        <BarChart3 size={14} className="text-cyan" />
        <span className="font-sans text-sm font-semibold text-white">
          TalkFlow Quality · Last 30 days
        </span>
      </div>

      {/* Metric cards */}
      <div className="grid grid-cols-2 gap-3 p-5">
        {[
          {
            value: "0.41s",
            label: "Avg Latency",
            sub: "Industry avg: 2.1s",
            color: "teal",
          },
          {
            value: "97.3%",
            label: "Translation Accuracy",
            sub: "Human-reviewed sample",
            color: "cyan",
          },
          {
            value: "24,389",
            label: "Calls Processed",
            sub: "This month",
            color: "white",
          },
          {
            value: "99.98%",
            label: "Uptime",
            sub: "30-day rolling",
            color: "white",
          },
        ].map((metric) => (
          <div
            key={metric.label}
            className={cn(
              "flex flex-col gap-1 rounded-xl border p-3",
              metric.color === "teal" && "border-teal/20 bg-teal/8",
              metric.color === "cyan" && "border-cyan/20 bg-cyan/8",
              metric.color === "white" && "border-white/8"
            )}
            style={
              metric.color === "white"
                ? { background: "rgba(255,255,255,0.03)" }
                : undefined
            }
          >
            <span
              className={cn(
                "font-display text-2xl font-bold",
                metric.color === "teal" && "text-teal",
                metric.color === "cyan" && "text-cyan",
                metric.color === "white" && "text-white"
              )}
            >
              {metric.value}
            </span>
            <span className="font-sans text-[11px] font-semibold text-white/60">
              {metric.label}
            </span>
            <span className="font-mono text-[10px] text-white/30">{metric.sub}</span>
          </div>
        ))}
      </div>

      {/* Bar chart */}
      <div className="border-t border-white/6 px-5 pb-5 pt-4">
        <p className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-widest text-white/30">
          Latency distribution
        </p>
        <div className="flex h-20 items-end gap-1.5">
          {latencyBars.map((bar) => (
            <div key={bar.label} className="flex flex-1 flex-col items-center gap-1">
              <div
                className={cn(
                  "w-full rounded-sm transition-all",
                  bar.active ? "bg-teal/70" : "bg-white/10"
                )}
                style={{ height: `${bar.height}%` }}
              />
              <span className="font-mono text-[8px] text-white/20">{bar.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Fine-tune note */}
      <div
        className="border-t border-cyan/10 px-5 py-3"
        style={{ background: "rgba(0,180,216,0.04)" }}
      >
        <p className="font-mono text-[10px] leading-relaxed text-white/40">
          Powered by a custom fine-tuned model for technical vocabulary (AWS, API,
          Kubernetes, React...)
        </p>
      </div>
    </div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function TalkFlowPage() {
  return (
    <main className="bg-background">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden pt-32 pb-20">
        {/* Neural canvas — cyan */}
        <NeuralNoise
          color={[0, 180, 216]}
          opacity={0.30}
          speed={0.0007}
          intensity={0.95}
          className="absolute inset-0 h-full w-full"
          style={{ mixBlendMode: "screen" }}
        />
        {/* Overlay for readability */}
        <div className="pointer-events-none absolute inset-0 bg-background/58" aria-hidden />
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute -top-40 left-1/2 h-[700px] w-[1000px] -translate-x-1/2 rounded-full bg-cyan/5 blur-[140px] animate-orb-1" />
          <div className="absolute top-1/2 right-0 h-[400px] w-[500px] -translate-y-1/2 rounded-full bg-cyan/4 blur-[100px] animate-orb-2" />
          <div className="dot-grid absolute inset-0 opacity-30" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
            {/* Left — copy */}
            <motion.div variants={staggerContainer} initial="hidden" animate="visible">
              {/* Eyebrow pill */}
              <motion.div
                variants={fadeInUp}
                className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-cyan/20 bg-cyan/8 px-4 py-1.5"
              >
                <span className="flex h-2 w-2 rounded-full bg-cyan animate-pulse" />
                <span className="font-sans text-sm font-semibold text-cyan">
                  TalkFlow · Real-time Translation
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                variants={fadeInUp}
                className="font-display font-bold leading-[1.05] text-white"
                style={{ fontSize: "clamp(28px, 3.8vw, 54px)" }}
              >
                Habla tu idioma.
                <br />
                <span className="text-shimmer">Trabajá con cualquiera.</span>
              </motion.h1>

              {/* Sub */}
              <motion.p
                variants={fadeInUp}
                className="mt-6 max-w-lg font-sans text-lg leading-relaxed text-white/55"
              >
                Traducción de voz en tiempo real para llamadas técnicas. Tu squad en Buenos Aires, tu cliente en Berlín — sin barrera de idioma, con 0.4s de latencia promedio.
              </motion.p>

              {/* CTAs */}
              <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap items-center gap-5">
                <Link
                  href="/get-started"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-sans text-base font-semibold text-background transition-all duration-200 hover:bg-white/90 hover:shadow-[0_0_28px_rgba(255,255,255,0.18)]"
                >
                  Try TalkFlow →
                </Link>
                <p className="font-sans text-base text-muted-foreground">Add-on for $29/month</p>
              </motion.div>

              {/* Note */}
              <motion.p
                variants={fadeInUp}
                className="mt-4 font-sans text-sm text-white/25"
              >
                Works inside Zenit calls. No separate app needed.
              </motion.p>
            </motion.div>

            {/* Right — Live Call Mockup */}
            <motion.div variants={slideInRight} initial="hidden" animate="visible">
              <LiveCallMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FEATURE 1: Real-time Translation ── */}
      <section className="relative overflow-hidden py-28">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute top-1/2 right-0 h-[500px] w-[600px] -translate-y-1/2 rounded-full bg-cyan/4 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Text — left */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
            >
              <motion.p
                variants={fadeInUp}
                className="mb-4 font-sans text-sm font-semibold uppercase tracking-widest text-cyan"
              >
                Real-time Translation
              </motion.p>
              <motion.h3
                variants={fadeInUp}
                className="font-display font-bold leading-[1.1] text-white"
                style={{ fontSize: "clamp(26px, 3vw, 42px)" }}
              >
                Both sides speak{" "}
                <span className="text-shimmer">their native language.</span>{" "}
                Naturally.
              </motion.h3>
              <motion.p
                variants={fadeInUp}
                className="mt-5 font-sans text-base leading-relaxed text-white/50"
              >
                TalkFlow doesn&apos;t pause the conversation to translate. Both parties speak at
                normal pace, in their native language, and hear the other side in theirs — with
                less than half a second of lag.
              </motion.p>
              <motion.ul variants={staggerContainer} className="mt-7 flex flex-col gap-3">
                {[
                  "0.4s average latency — faster than human interpretation",
                  "Subtitles + translated audio simultaneously",
                  "Both-direction: squad to company and back",
                ].map((item) => (
                  <motion.li key={item} variants={fadeInUp} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-cyan" />
                    <span className="font-sans text-sm leading-relaxed text-white/60">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Mockup — right */}
            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
            >
              <LiveCallMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FEATURE 2: Language Support (reversed) ── */}
      <section className="relative overflow-hidden py-28">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute top-1/2 left-0 h-[500px] w-[600px] -translate-y-1/2 rounded-full bg-teal/4 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Mockup — left */}
            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              className="order-2 lg:order-1"
            >
              <LanguageGridMockup />
            </motion.div>

            {/* Text — right */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              className="order-1 lg:order-2"
            >
              <motion.p
                variants={fadeInUp}
                className="mb-4 font-sans text-sm font-semibold uppercase tracking-widest text-cyan"
              >
                Language Coverage
              </motion.p>
              <motion.h3
                variants={fadeInUp}
                className="font-display font-bold leading-[1.1] text-white"
                style={{ fontSize: "clamp(26px, 3vw, 42px)" }}
              >
                Spanish. Portuguese. English.{" "}
                <span className="text-shimmer">And growing.</span>
              </motion.h3>
              <motion.p
                variants={fadeInUp}
                className="mt-5 font-sans text-base leading-relaxed text-white/50"
              >
                TalkFlow is built for the LatAm-to-global workflow — Spanish and Portuguese into
                English. New language pairs are added based on community demand. BETA pairs are
                available for early adopters.
              </motion.p>
              <motion.ul variants={staggerContainer} className="mt-7 flex flex-col gap-3">
                {[
                  "Spanish ↔ English: live and production-ready",
                  "Portuguese ↔ English: live and production-ready",
                  "6+ language pairs in active development",
                ].map((item) => (
                  <motion.li key={item} variants={fadeInUp} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-cyan" />
                    <span className="font-sans text-sm leading-relaxed text-white/60">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FEATURE 3: Quality (right) ── */}
      <section className="relative overflow-hidden py-28">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute top-1/2 right-0 h-[500px] w-[600px] -translate-y-1/2 rounded-full bg-cyan/4 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Text — left */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
            >
              <motion.p
                variants={fadeInUp}
                className="mb-4 font-sans text-sm font-semibold uppercase tracking-widest text-cyan"
              >
                Built for Technical Calls
              </motion.p>
              <motion.h3
                variants={fadeInUp}
                className="font-display font-bold leading-[1.1] text-white"
                style={{ fontSize: "clamp(26px, 3vw, 42px)" }}
              >
                It knows what{" "}
                <span className="text-shimmer">Kubernetes</span> means. And{" "}
                <span className="text-shimmer">API rate limiting.</span>
              </motion.h3>
              <motion.p
                variants={fadeInUp}
                className="mt-5 font-sans text-base leading-relaxed text-white/50"
              >
                General translation AI fails on technical vocabulary. TalkFlow&apos;s model is
                fine-tuned on thousands of hours of tech project calls — it handles jargon,
                acronyms, and stack names without stumbling.
              </motion.p>
              <motion.ul variants={staggerContainer} className="mt-7 flex flex-col gap-3">
                {[
                  "Fine-tuned on software project conversations",
                  "Handles tech stack names, acronyms, and code references",
                  "97.3% accuracy on human-reviewed samples",
                ].map((item) => (
                  <motion.li key={item} variants={fadeInUp} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-cyan" />
                    <span className="font-sans text-sm leading-relaxed text-white/60">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Mockup — right */}
            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
            >
              <QualityDashboardMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── IMPACT SECTION ── */}
      <section className="relative overflow-hidden py-28">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan/3 to-transparent" />
          <div className="absolute top-1/2 left-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/4 blur-[160px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="flex flex-col items-center gap-8 text-center"
          >
            {/* Big quote */}
            <motion.p
              variants={fadeInUp}
              className="mx-auto max-w-3xl font-display font-bold leading-tight text-white"
              style={{ fontSize: "clamp(26px, 3vw, 42px)" }}
            >
              &ldquo;A squad in Buenos Aires can now close a deal with a company in Berlin.{" "}
              <span className="text-shimmer">In Spanish.</span>&rdquo;
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="max-w-xl font-sans text-lg leading-relaxed text-white/70"
            >
              TalkFlow doesn&apos;t just remove a barrier. It opens the entire global market to
              every squad in LatAm.
            </motion.p>

            {/* Stats strip */}
            <motion.div
              variants={fadeInUp}
              className="mt-2 flex flex-wrap justify-center gap-x-8 gap-y-3"
            >
              {[
                "24,389 calls translated",
                "0.41s avg latency",
                "47 countries reached",
                "$0 language learning required",
              ].map((stat) => (
                <span key={stat} className="font-mono text-sm font-semibold text-white/35">
                  {stat}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── AI CALLOUT ── */}
      <section className="relative overflow-hidden py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="relative overflow-hidden rounded-3xl border border-white/8 px-8 py-16 text-center md:px-16 md:py-20"
            style={{ background: "#0d1313" }}
          >
            {/* Ambient */}
            <div className="pointer-events-none absolute inset-0" aria-hidden>
              <div className="absolute -top-32 left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-cyan/5 blur-[100px]" />
              <div className="absolute top-0 left-0 h-px w-24 bg-gradient-to-r from-cyan/40 to-transparent" />
              <div className="absolute top-0 left-0 h-24 w-px bg-gradient-to-b from-cyan/40 to-transparent" />
              <div className="absolute bottom-0 right-0 h-px w-24 bg-gradient-to-l from-teal/40 to-transparent" />
              <div className="absolute bottom-0 right-0 h-24 w-px bg-gradient-to-t from-teal/40 to-transparent" />
            </div>

            <div className="relative">
              {/* Eyebrow */}
              <motion.div
                variants={fadeInUp}
                className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan/20 bg-cyan/8 px-4 py-1.5"
              >
                <Mic size={13} className="text-cyan" />
                <span className="font-sans text-sm font-semibold text-cyan">TalkFlow AI</span>
              </motion.div>

              <motion.h2
                variants={fadeInUp}
                className="mx-auto max-w-2xl font-display font-bold leading-tight text-white"
                style={{ fontSize: "clamp(26px, 3vw, 42px)" }}
              >
                Not just translation.{" "}
                <span className="text-shimmer">Technical comprehension.</span>
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="mx-auto mt-5 max-w-lg font-sans text-base leading-relaxed text-white/50"
              >
                TalkFlow&apos;s model doesn&apos;t just translate words — it understands context.
                When someone says &ldquo;we need to refactor the auth layer before the next
                sprint&rdquo;, it translates the meaning, not just the syllables.
              </motion.p>

              {/* Stats */}
              <motion.div
                variants={staggerContainer}
                className="mt-10 flex flex-wrap justify-center gap-4"
              >
                {[
                  { stat: "97.3%", label: "accuracy", color: "cyan" },
                  { stat: "0.4s", label: "avg latency", color: "teal" },
                  { stat: "Fine-tuned", label: "on tech vocabulary", color: "white" },
                ].map(({ stat, label, color }) => (
                  <motion.div
                    key={stat}
                    variants={scaleIn}
                    className={cn(
                      "flex flex-col items-center gap-1 rounded-2xl border px-8 py-5 text-center",
                      color === "cyan" && "border-cyan/20 bg-cyan/8",
                      color === "teal" && "border-teal/20 bg-teal/8",
                      color === "white" && "border-white/10"
                    )}
                    style={
                      color === "white"
                        ? { background: "rgba(255,255,255,0.03)" }
                        : undefined
                    }
                  >
                    <span
                      className={cn(
                        "font-display text-3xl font-bold",
                        color === "cyan" && "text-cyan",
                        color === "teal" && "text-teal",
                        color === "white" && "text-white"
                      )}
                    >
                      {stat}
                    </span>
                    <span className="font-sans text-xs leading-snug text-white/40">{label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="relative overflow-hidden py-28">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute top-1/2 left-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal/4 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="mx-auto max-w-2xl"
          >
            <motion.div
              variants={scaleIn}
              className="overflow-hidden rounded-3xl border border-white/10"
              style={{ background: "#0d1313" }}
            >
              {/* Card header */}
              <div className="flex items-center justify-between border-b border-white/6 px-8 py-5">
                <div>
                  <p className="font-mono text-xs font-semibold uppercase tracking-widest text-white/35">
                    Add-on
                  </p>
                  <p className="mt-1 font-display text-xl font-bold text-white">
                    TalkFlow
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-display text-4xl font-bold text-white">$29</p>
                  <p className="font-sans text-sm text-white/35">/month per account</p>
                </div>
              </div>

              {/* Features */}
              <div className="flex flex-col gap-3 px-8 py-6">
                {[
                  "Unlimited call minutes",
                  "All supported language pairs",
                  "Subtitles + audio translation",
                  "Works inside Zenit calls",
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="shrink-0 text-teal" />
                    <span className="font-sans text-sm text-white/65">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="px-8 pb-8">
                <Link
                  href="/get-started"
                  className="block w-full rounded-xl bg-white py-4 text-center font-sans text-base font-semibold text-background transition-all duration-200 hover:bg-white/90 hover:shadow-[0_0_28px_rgba(255,255,255,0.18)]"
                >
                  Add TalkFlow →
                </Link>
                <p className="mt-3 text-center font-sans text-xs text-white/25">
                  Available for squad and company accounts. Cancel anytime.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden py-28">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute -bottom-40 left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-cyan/5 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="flex flex-col items-center gap-6 text-center"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-display font-bold leading-tight text-white"
              style={{ fontSize: "clamp(26px, 3vw, 42px)" }}
            >
              Speak your language.{" "}
              <span className="text-shimmer">Work with anyone.</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="max-w-md font-sans text-lg leading-relaxed text-white/50"
            >
              TalkFlow is live. Add it to your Zenit account in one click.
            </motion.p>

            <motion.div variants={fadeInUp}>
              <Link
                href="/get-started"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-10 py-4 font-sans text-base font-semibold text-background transition-all duration-200 hover:bg-white/90 hover:shadow-[0_0_32px_rgba(255,255,255,0.2)]"
              >
                Try TalkFlow →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
