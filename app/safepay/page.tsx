"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  CheckCircle2,
  ArrowRight,
  AlertTriangle,
  DollarSign,
  Globe,
  Zap,
  Clock,
  BarChart3,
  TrendingUp,
  RefreshCw,
  Bot,
  Brain,
} from "lucide-react";
import { staggerContainer, fadeInUp, scaleIn, defaultViewport } from "@/lib/motionVariants";
import { cn } from "@/lib/utils";
import { NeuralNoise } from "@/components/ui/neural-noise";

/* ─── Mockup 1 — Escrow Flow Visualization ─────────────────── */
function EscrowFlowMockup() {
  const milestones = [
    { label: "Discovery & Design", status: "released", amount: "$20,000" },
    { label: "Backend API", status: "released", amount: "$25,000" },
    { label: "Frontend & UI", status: "progress", amount: "$20,000" },
    { label: "QA & Launch", status: "locked", amount: "$15,000" },
  ];

  return (
    <motion.div
      variants={scaleIn}
      className="w-full overflow-hidden rounded-2xl border border-gold/20"
      style={{ background: "#050f0f" }}
    >
      {/* Header bar */}
      <div className="flex items-center justify-between border-b border-white/6 px-5 py-3">
        <div className="flex items-center gap-2">
          <Lock size={14} className="text-gold" />
          <span className="font-mono text-xs font-semibold text-gold">SafePay Escrow</span>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 font-mono text-xs font-semibold text-gold">
          <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
          ACTIVE
        </span>
      </div>

      {/* Steps */}
      <div className="space-y-0 px-5 pt-5">
        {[
          {
            icon: DollarSign,
            label: "Company deposits funds",
            result: "Funds secured in escrow",
            color: "gold",
          },
          {
            icon: CheckCircle2,
            label: "Squad delivers milestone",
            result: "Company reviews & approves",
            color: "cyan",
          },
          {
            icon: Zap,
            label: "SafePay releases funds",
            result: "Squad paid instantly",
            color: "teal",
          },
        ].map((step, i) => {
          const Icon = step.icon;
          return (
            <div key={i} className="flex items-start gap-3 pb-4">
              <div className="flex flex-col items-center gap-0">
                <div
                  className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border",
                    step.color === "gold" && "border-gold/30 bg-gold/10 text-gold",
                    step.color === "cyan" && "border-cyan/30 bg-cyan/10 text-cyan",
                    step.color === "teal" && "border-teal/30 bg-teal/10 text-teal",
                  )}
                >
                  <Icon size={14} />
                </div>
                {i < 2 && <div className="my-1 h-6 w-px bg-white/8" />}
              </div>
              <div className="pt-1">
                <p className="font-sans text-xs font-medium text-white/70">{step.label}</p>
                <p
                  className={cn(
                    "font-sans text-xs font-semibold",
                    step.color === "gold" && "text-gold",
                    step.color === "cyan" && "text-cyan",
                    step.color === "teal" && "text-teal",
                  )}
                >
                  → {step.result}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Active project card */}
      <div className="mx-5 mb-5 rounded-xl border border-white/8 bg-white/4 p-4">
        <div className="mb-3 flex items-center justify-between">
          <div>
            <p className="font-sans text-sm font-semibold text-white">SaaS MVP</p>
            <p className="font-mono text-xs text-muted-foreground">$80,000 total · 28% released</p>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full border border-gold/25 bg-gold/10 px-2.5 py-1 font-mono text-xs text-gold">
            <Lock size={10} />
            SafePay Active
          </span>
        </div>

        {/* Progress bar */}
        <div className="mb-4 h-1.5 overflow-hidden rounded-full bg-white/8">
          <div
            className="h-full rounded-full bg-gradient-to-r from-gold to-gold/60"
            style={{ width: "28%" }}
          />
        </div>

        {/* Milestone list */}
        <div className="space-y-2">
          {milestones.map((m) => (
            <div key={m.label} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {m.status === "released" && (
                  <CheckCircle2 size={12} className="text-teal shrink-0" />
                )}
                {m.status === "progress" && (
                  <RefreshCw size={12} className="text-gold shrink-0 animate-spin" />
                )}
                {m.status === "locked" && (
                  <Lock size={12} className="text-white/30 shrink-0" />
                )}
                <span
                  className={cn(
                    "font-sans text-xs",
                    m.status === "released" && "text-white/60 line-through",
                    m.status === "progress" && "text-white",
                    m.status === "locked" && "text-white/30",
                  )}
                >
                  {m.label}
                </span>
              </div>
              <span
                className={cn(
                  "font-mono text-xs",
                  m.status === "released" && "text-teal",
                  m.status === "progress" && "text-gold",
                  m.status === "locked" && "text-white/25",
                )}
              >
                {m.amount}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Mockup 2 — AI Risk Detection Panel ────────────────────── */
function RiskDetectionMockup() {
  const risks = [
    {
      milestone: "Milestone 1 — Discovery & Design",
      badge: "LOW RISK",
      detail: "Delivered on time",
      level: "low",
    },
    {
      milestone: "Milestone 2 — Backend API",
      badge: "MEDIUM",
      detail: "4 days behind schedule",
      level: "medium",
    },
    {
      milestone: "Milestone 3 — Frontend",
      badge: "UPCOMING",
      detail: "Starts in 6 days",
      level: "upcoming",
    },
  ];

  return (
    <motion.div
      variants={scaleIn}
      className="w-full overflow-hidden rounded-2xl border border-gold/20"
      style={{ background: "#050f0f" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/6 px-5 py-3">
        <div className="flex items-center gap-2">
          <Brain size={14} className="text-cyan" />
          <span className="font-mono text-xs font-semibold text-white">Kaizen</span>
          <span className="font-mono text-xs text-muted-foreground">·</span>
          <span className="font-mono text-xs text-muted-foreground">Risk Intelligence</span>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 font-mono text-xs font-semibold text-cyan">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
          MONITORING
        </span>
      </div>

      {/* Risk rows */}
      <div className="divide-y divide-white/4 px-5">
        {risks.map((r) => (
          <div key={r.milestone} className="flex items-center justify-between gap-4 py-3.5">
            <div className="min-w-0">
              <p className="truncate font-sans text-xs font-medium text-white/80">{r.milestone}</p>
              <p
                className={cn(
                  "font-sans text-xs",
                  r.level === "low" && "text-muted-foreground",
                  r.level === "medium" && "text-muted-foreground",
                  r.level === "upcoming" && "text-muted-foreground",
                )}
              >
                {r.level === "medium" && (
                  <AlertTriangle size={10} className="mr-1 inline text-gold" />
                )}
                {r.detail}
              </p>
            </div>
            <span
              className={cn(
                "shrink-0 rounded-full border px-2.5 py-1 font-mono text-xs font-bold",
                r.level === "low" && "border-teal/30 bg-teal/10 text-teal",
                r.level === "medium" && "border-gold/30 bg-gold/10 text-gold",
                r.level === "upcoming" && "border-white/12 bg-white/5 text-white/40",
              )}
            >
              {r.badge}
            </span>
          </div>
        ))}
      </div>

      {/* AI Recommendation card */}
      <div className="m-5 rounded-xl border border-gold/15 bg-gold/6 p-4">
        <div className="mb-2 flex items-center gap-2">
          <Bot size={13} className="text-gold" />
          <span className="font-mono text-xs font-semibold text-gold">AI Recommendation</span>
        </div>
        <p className="mb-3 font-sans text-xs leading-relaxed text-white/70">
          Trigger check-in with squad re: milestone 2 timeline. No funds at risk yet.
        </p>
        <button className="inline-flex items-center gap-1.5 rounded-lg border border-gold/25 bg-gold/10 px-3 py-1.5 font-sans text-xs font-semibold text-gold transition-all duration-200 hover:bg-gold/15 hover:border-gold/40">
          Initiate Check-in
          <ArrowRight size={11} />
        </button>
      </div>
    </motion.div>
  );
}

/* ─── Mockup 3 — Multi-Currency Payout Panel ────────────────── */
function MultiCurrencyMockup() {
  const stages = [
    { label: "Funds released", done: true },
    { label: "Processing", done: true },
    { label: "Received", done: false },
  ];

  const currencies = ["🇺🇸", "🇧🇷", "🇦🇷", "🇲🇽", "🇨🇴", "🇪🇸"];

  return (
    <motion.div
      variants={scaleIn}
      className="w-full overflow-hidden rounded-2xl border border-teal/20"
      style={{ background: "#050f0f" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/6 px-5 py-3">
        <div className="flex items-center gap-2">
          <Globe size={14} className="text-teal" />
          <span className="font-mono text-xs font-semibold text-teal">Payout processed</span>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-teal/30 bg-teal/10 px-3 py-1 font-mono text-xs font-semibold text-teal">
          <CheckCircle2 size={10} />
          COMPLETE
        </span>
      </div>

      <div className="p-5 space-y-5">
        {/* Conversion breakdown */}
        <div className="rounded-xl border border-white/6 bg-white/3 p-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-sans text-xs text-muted-foreground">Company paid</span>
            <span className="font-mono text-base font-bold text-white">$25,000 USD</span>
          </div>
          <div className="h-px bg-white/6" />
          <div className="flex items-center justify-between">
            <span className="font-sans text-xs text-muted-foreground">Mid-market rate</span>
            <span className="font-mono text-sm font-semibold text-teal">$23,847.50 USD</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-sans text-xs text-muted-foreground">Squad receives</span>
            <span className="font-mono text-sm font-bold text-gold">R$119,237 BRL</span>
          </div>
        </div>

        {/* Progress timeline */}
        <div>
          <div className="relative flex items-center justify-between">
            {stages.map((s, i) => (
              <div key={s.label} className="flex flex-1 flex-col items-center gap-1">
                <div
                  className={cn(
                    "flex h-6 w-6 items-center justify-center rounded-full border",
                    s.done
                      ? "border-teal/50 bg-teal/20 text-teal"
                      : "border-white/15 bg-white/5 text-white/30",
                  )}
                >
                  {s.done ? (
                    <CheckCircle2 size={12} />
                  ) : (
                    <Clock size={11} />
                  )}
                </div>
                <span
                  className={cn(
                    "font-sans text-xs text-center",
                    s.done ? "text-white/70" : "text-white/25",
                  )}
                >
                  {s.label}
                </span>
                {i < stages.length - 1 && (
                  <div
                    className="absolute top-3 h-px"
                    style={{
                      left: `${(i + 0.5) * (100 / stages.length)}%`,
                      width: `${100 / stages.length}%`,
                      background: s.done ? "rgba(15,118,110,0.4)" : "rgba(255,255,255,0.08)",
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* No fees note */}
        <p className="text-center font-sans text-xs text-muted-foreground">
          No FX markup. No hidden fees.
        </p>

        {/* Currency flags */}
        <div className="flex items-center justify-center gap-2">
          {currencies.map((flag) => (
            <span key={flag} className="text-lg leading-none">
              {flag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Feature Section ────────────────────────────────────────── */
interface FeatureSectionProps {
  eyebrow: string;
  heading: React.ReactNode;
  body: string;
  bullets: string[];
  mockup: React.ReactNode;
  reverse?: boolean;
  eyebrowColor?: "gold" | "cyan" | "teal";
}

function FeatureSection({
  eyebrow,
  heading,
  body,
  bullets,
  mockup,
  reverse = false,
  eyebrowColor = "gold",
}: FeatureSectionProps) {
  return (
    <section className="relative overflow-hidden py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16",
            reverse && "lg:[&>*:first-child]:order-2",
          )}
        >
          {/* Text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            <motion.p
              variants={fadeInUp}
              className={cn(
                "mb-4 font-sans text-sm font-semibold uppercase tracking-widest",
                eyebrowColor === "gold" && "text-gold",
                eyebrowColor === "cyan" && "text-cyan",
                eyebrowColor === "teal" && "text-teal",
              )}
            >
              {eyebrow}
            </motion.p>
            <motion.h3
              variants={fadeInUp}
              className="mb-5 font-display font-bold leading-tight text-white" style={{ fontSize: "clamp(26px, 3vw, 42px)" }}
            >
              {heading}
            </motion.h3>
            <motion.p
              variants={fadeInUp}
              className="mb-8 font-sans text-base leading-relaxed text-muted-foreground"
            >
              {body}
            </motion.p>
            <motion.ul variants={staggerContainer} className="space-y-3">
              {bullets.map((b) => (
                <motion.li
                  key={b}
                  variants={fadeInUp}
                  className="flex items-start gap-3 font-sans text-sm text-white/80"
                >
                  <CheckCircle2
                    size={16}
                    className={cn(
                      "mt-0.5 shrink-0",
                      eyebrowColor === "gold" && "text-gold",
                      eyebrowColor === "cyan" && "text-cyan",
                      eyebrowColor === "teal" && "text-teal",
                    )}
                  />
                  {b}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Mockup */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            {mockup}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── Page ────────────────────────────────────────────────────── */
export default function SafePayPage() {
  return (
    <main className="bg-background">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-32 pb-24">
        {/* Neural canvas — gold */}
        <NeuralNoise
          color={[245, 158, 11]}
          opacity={0.38}
          speed={0.0009}
          intensity={1.1}
          className="absolute inset-0 h-full w-full"
          style={{ mixBlendMode: "screen" }}
        />
        {/* Overlay for readability */}
        <div className="pointer-events-none absolute inset-0 bg-background/55" aria-hidden />
        {/* Ambient glows */}
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute -top-40 left-1/2 h-[700px] w-[1000px] -translate-x-1/2 rounded-full bg-gold/6 blur-[130px]" />
          <div className="absolute top-1/2 right-0 h-[500px] w-[600px] rounded-full bg-teal/4 blur-[110px]" />
          <div className="absolute bottom-0 left-0 h-[400px] w-[500px] rounded-full bg-gold/4 blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            {/* Left: copy */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.p
                variants={fadeInUp}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/8 px-4 py-1.5 font-sans text-sm font-semibold text-gold"
              >
                <ShieldCheck size={14} />
                Milestone Escrow · AI-Protected
              </motion.p>

              <motion.h1
                variants={fadeInUp}
                className="font-display font-bold leading-[1.06] text-white"
                style={{ fontSize: "clamp(28px, 3.8vw, 54px)" }}
              >
                SafePay —
                <br />
                <span className="text-shimmer-gold">el dinero está seguro.</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="mt-6 max-w-lg font-sans text-lg leading-relaxed text-muted-foreground"
              >
                Escrow que libera fondos solo cuando Kaizen valida que los criterios de entrega se cumplieron.
              </motion.p>

              <motion.div variants={fadeInUp} className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <Link
                  href="#how-it-works"
                  className="group inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-sans text-base font-semibold text-background transition-all duration-200 hover:bg-white/90 hover:shadow-[0_0_28px_rgba(255,255,255,0.18)]"
                >
                  See how SafePay works
                  <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
                <p className="font-sans text-sm text-muted-foreground">
                  Every project covered. No exceptions.
                </p>
              </motion.div>
            </motion.div>

            {/* Right: escrow mockup */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="w-full"
            >
              <EscrowFlowMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Feature 1: Pre-work Escrow ───────────────────────── */}
      <div id="how-it-works">
        <FeatureSection
          eyebrow="Pre-work Escrow"
          heading={
            <>
              Funds move before work starts.{" "}
              <span className="text-gold">So does accountability.</span>
            </>
          }
          body="The moment a project is agreed, funds lock in SafePay escrow. Neither side can touch them until a milestone is approved — creating a clean incentive for delivery."
          bullets={[
            "Zero risk of non-payment for squads",
            "Zero risk of non-delivery for companies",
            "Both sides protected from day one",
          ]}
          mockup={<EscrowFlowMockup />}
          eyebrowColor="gold"
        />
      </div>

      {/* ── Feature 2: AI Risk Detection ─────────────────────── */}
      <section className="relative overflow-hidden py-28 bg-card/20">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute top-1/2 left-0 h-[500px] w-[600px] -translate-y-1/2 rounded-full bg-cyan/4 blur-[110px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Mockup — left */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
            >
              <RiskDetectionMockup />
            </motion.div>

            {/* Text — right */}
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
                Kaizen Risk Intelligence
              </motion.p>
              <motion.h3
                variants={fadeInUp}
                className="mb-5 font-display font-bold leading-tight text-white" style={{ fontSize: "clamp(26px, 3vw, 42px)" }}
              >
                AI monitors every milestone{" "}
                <span className="text-cyan">before it&apos;s late.</span>
              </motion.h3>
              <motion.p
                variants={fadeInUp}
                className="mb-8 font-sans text-base leading-relaxed text-muted-foreground"
              >
                SafePay is connected to Kaizen&apos;s delivery intelligence. If a
                milestone falls behind, Kaizen flags it — before it becomes a
                dispute. Most issues resolve themselves once surfaced early.
              </motion.p>
              <motion.ul variants={staggerContainer} className="space-y-3">
                {[
                  "Daily milestone risk scoring",
                  "Automated squad check-ins on delay signals",
                  "95% of flagged issues resolved without formal dispute",
                ].map((b) => (
                  <motion.li
                    key={b}
                    variants={fadeInUp}
                    className="flex items-start gap-3 font-sans text-sm text-white/80"
                  >
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-cyan" />
                    {b}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Feature 3: Multi-Currency ────────────────────────── */}
      <FeatureSection
        eyebrow="Multi-Currency Payouts"
        heading={
          <>
            Companies pay in USD.{" "}
            <span className="text-teal">Squads receive in theirs.</span>
          </>
        }
        body="We handle FX at mid-market rates. No conversion markup. Squads in Buenos Aires, Bogotá, or Barcelona get paid accurately and fast."
        bullets={[
          "Mid-market FX, zero markup",
          "Payouts in 10+ currencies",
          "Same-day processing on milestone release",
        ]}
        mockup={<MultiCurrencyMockup />}
        eyebrowColor="teal"
      />

      {/* ── AI Callout ───────────────────────────────────────── */}
      <section className="relative overflow-hidden py-28 bg-card/30">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gold/6 blur-[120px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-gold/15" style={{ background: "#050f0f" }}>
            {/* Corner accents */}
            <div className="pointer-events-none absolute inset-0" aria-hidden>
              <div className="absolute top-0 left-0 h-px w-48 bg-gradient-to-r from-gold/50 to-transparent" />
              <div className="absolute top-0 left-0 h-48 w-px bg-gradient-to-b from-gold/50 to-transparent" />
              <div className="absolute bottom-0 right-0 h-px w-48 bg-gradient-to-l from-teal/50 to-transparent" />
              <div className="absolute bottom-0 right-0 h-48 w-px bg-gradient-to-t from-teal/50 to-transparent" />
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              className="relative grid gap-12 px-8 py-16 md:px-16 md:py-20 lg:grid-cols-2 lg:items-center"
            >
              {/* Left */}
              <div>
                <motion.p
                  variants={fadeInUp}
                  className="mb-4 inline-flex items-center gap-2 font-sans text-sm font-semibold uppercase tracking-widest text-gold"
                >
                  <BarChart3 size={14} />
                  SafePay + Kaizen
                </motion.p>
                <motion.h2
                  variants={fadeInUp}
                  className="mb-6 font-display font-bold leading-tight text-white"
                  style={{ fontSize: "clamp(26px, 3vw, 42px)" }}
                >
                  The first escrow that{" "}
                  <span className="text-shimmer-gold">watches the work</span>,
                  not just the money.
                </motion.h2>
                <motion.p
                  variants={fadeInUp}
                  className="font-sans text-base leading-relaxed text-muted-foreground"
                >
                  Traditional escrow holds funds. SafePay holds funds AND monitors
                  delivery. Kaizen tracks milestone health in real time — so disputes
                  rarely happen.
                </motion.p>
              </div>

              {/* Right: stats */}
              <motion.div
                variants={staggerContainer}
                className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1"
              >
                {[
                  {
                    value: "$0",
                    label: "funds lost to non-delivery disputes",
                    icon: ShieldCheck,
                    color: "teal",
                  },
                  {
                    value: "95%",
                    label: "issues resolved pre-dispute",
                    icon: TrendingUp,
                    color: "gold",
                  },
                  {
                    value: "100%",
                    label: "projects SafePay covered",
                    icon: CheckCircle2,
                    color: "cyan",
                  },
                ].map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={stat.value}
                      variants={fadeInUp}
                      className={cn(
                        "flex items-center gap-4 rounded-2xl border p-5",
                        stat.color === "teal" && "border-teal/20 bg-teal/6",
                        stat.color === "gold" && "border-gold/20 bg-gold/6",
                        stat.color === "cyan" && "border-cyan/20 bg-cyan/6",
                      )}
                    >
                      <div
                        className={cn(
                          "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border",
                          stat.color === "teal" && "border-teal/30 bg-teal/10 text-teal",
                          stat.color === "gold" && "border-gold/30 bg-gold/10 text-gold",
                          stat.color === "cyan" && "border-cyan/30 bg-cyan/10 text-cyan",
                        )}
                      >
                        <Icon size={18} />
                      </div>
                      <div>
                        <p
                          className={cn(
                            "font-display text-2xl font-bold",
                            stat.color === "teal" && "text-teal",
                            stat.color === "gold" && "text-gold",
                            stat.color === "cyan" && "text-cyan",
                          )}
                        >
                          {stat.value}
                        </p>
                        <p className="font-sans text-xs text-muted-foreground">{stat.label}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-28">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute top-0 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gold/5 blur-[100px]" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="flex flex-col items-center gap-6 text-center"
          >
            <motion.p
              variants={fadeInUp}
              className="font-sans text-sm font-semibold uppercase tracking-widest text-muted-foreground"
            >
              Get started
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="font-display font-bold leading-tight text-white"
              style={{ fontSize: "clamp(26px, 3vw, 42px)" }}
            >
              Every project.{" "}
              <span className="text-shimmer-gold">Every dollar.</span> Protected.
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="max-w-md font-sans text-lg text-muted-foreground"
            >
              SafePay is automatic on every Zenit project. No opt-in. No extra cost.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-3">
              <Link
                href="/get-started"
                className="group inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-sans text-base font-semibold text-background transition-all duration-200 hover:bg-white/90 hover:shadow-[0_0_28px_rgba(255,255,255,0.18)]"
              >
                Start a project
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
