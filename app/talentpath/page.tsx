"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Clock,
  Users,
  Star,
  Video,
  ChevronRight,
} from "lucide-react";
import {
  staggerContainer,
  fadeInUp,
  scaleIn,
  slideInRight,
  defaultViewport,
} from "@/lib/motionVariants";
import { NeuralNoise } from "@/components/ui/neural-noise";
import { cn } from "@/lib/utils";

// ─── MOCKUP 1: Junior Application & Challenge Interface ───────────────────────

function ChallengeInterfaceMockup() {
  return (
    <div
      className="w-full overflow-hidden rounded-2xl border border-white/8 shadow-2xl"
      style={{ background: "#050f0f" }}
    >
      {/* Browser chrome */}
      <div
        className="flex items-center gap-2 border-b border-white/6 px-4 py-2.5"
        style={{ background: "#080f0f" }}
      >
        <div className="flex items-center gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
          <div className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
          <div className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
        </div>
        <div className="mx-auto flex items-center gap-2 rounded-md border border-white/6 bg-white/4 px-3 py-1">
          <span className="font-mono text-[10px] text-white/35">zenit.io/talentpath/apply</span>
        </div>
      </div>

      {/* Step indicator */}
      <div
        className="flex items-center justify-center gap-0 border-b border-white/6 px-5 py-3"
        style={{ background: "#080f0f" }}
      >
        {[
          { label: "1 Apply", active: false, done: true },
          { label: "2 Challenge", active: true, done: false },
          { label: "3 Match", active: false, done: false },
          { label: "4 Ship", active: false, done: false },
        ].map((step, i) => (
          <div key={step.label} className="flex items-center">
            <span
              className={cn(
                "rounded-full px-3 py-1 font-mono text-[10px] font-semibold",
                step.active
                  ? "bg-cyan/15 text-cyan ring-1 ring-cyan/30"
                  : step.done
                  ? "text-white/35"
                  : "text-white/20"
              )}
            >
              {step.label}
            </span>
            {i < 3 && (
              <ChevronRight size={12} className="mx-0.5 text-white/15" />
            )}
          </div>
        ))}
      </div>

      {/* Challenge content */}
      <div className="p-5">
        <div className="mb-3">
          <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-cyan">
            Technical Challenge · React Component
          </span>
        </div>
        <p className="mb-4 font-sans text-xs leading-relaxed text-white/55">
          Build a real-time data table component with sorting, pagination, and async data loading.
          No libraries other than React.
        </p>

        {/* Fake code editor */}
        <div className="mb-4 overflow-hidden rounded-xl border border-white/6">
          <div
            className="flex items-center gap-1.5 border-b border-white/5 px-3 py-2"
            style={{ background: "#020808" }}
          >
            <span className="font-mono text-[9px] text-white/20">DataTable.jsx</span>
          </div>
          <div className="px-4 py-3" style={{ background: "#020808" }}>
            <pre className="font-mono text-[10px] leading-relaxed text-white/45 overflow-x-auto whitespace-pre-wrap">{`const DataTable = ({ endpoint, pageSize = 20 }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  // Your implementation...
}`}</pre>
          </div>
        </div>

        {/* Side info + timer row */}
        <div className="mb-4 flex items-start gap-3">
          <div
            className="flex-1 overflow-hidden rounded-xl border border-white/6 p-3"
            style={{ background: "rgba(0,180,216,0.04)" }}
          >
            <p className="mb-2 font-mono text-[9px] font-bold uppercase tracking-widest text-cyan/60">
              Challenge status
            </p>
            <div className="mb-2 flex items-baseline gap-1">
              <span className="font-mono text-2xl font-bold text-cyan">47:23</span>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <span className="font-sans text-[10px] text-white/35">Difficulty</span>
                <span className="font-mono text-[10px] text-amber-400">Intermediate</span>
              </div>
              <div className="flex items-start justify-between gap-2">
                <span className="font-sans text-[10px] text-white/35">Evaluates</span>
                <span className="text-right font-mono text-[10px] text-white/50">
                  State management · Async patterns · UX
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom actions */}
        <div className="flex items-center gap-3">
          <button className="flex-1 rounded-lg border border-gold/30 bg-gold/10 py-2 font-sans text-xs font-semibold text-gold transition-colors hover:bg-gold/15">
            Submit challenge
          </button>
        </div>
        <p className="mt-3 text-center font-sans text-[10px] text-white/25">
          3,847 juniors have applied this month
        </p>
      </div>
    </div>
  );
}

// ─── MOCKUP 2: Junior Dashboard ───────────────────────────────────────────────

const weekTasks = [
  {
    status: "done",
    icon: "✅",
    title: "Build sidebar navigation component",
    note: "Feedback: Great accessibility work 👍",
    due: "Done",
    dueColor: "teal" as const,
  },
  {
    status: "progress",
    icon: "🔄",
    title: "Integrate /api/shipments endpoint",
    note: "In progress",
    due: "Due: Tomorrow",
    dueColor: "amber" as const,
  },
  {
    status: "pending",
    icon: "⏳",
    title: "Write unit tests for DataTable",
    note: "Not started",
    due: "Due: Friday",
    dueColor: "white" as const,
  },
];

function JuniorDashboardMockup() {
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
        <div>
          <p className="font-sans text-sm font-semibold text-white">Welcome back, Martín</p>
          <p className="font-mono text-[10px] text-white/35">Week 3 of 12</p>
        </div>
        <span className="rounded-full border border-cyan/20 bg-cyan/8 px-2.5 py-0.5 font-mono text-[10px] text-cyan">
          On track
        </span>
      </div>

      <div className="p-5">
        {/* Mentor squad card */}
        <div
          className="mb-4 overflow-hidden rounded-xl border border-white/6 px-4 py-3"
          style={{ background: "rgba(15,118,110,0.06)" }}
        >
          <p className="mb-2 font-mono text-[9px] font-bold uppercase tracking-widest text-teal/60">
            Mentor Squad
          </p>
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <span className="font-sans text-xs font-semibold text-white">
                React &amp; Node Squad 🇦🇷
              </span>
            </div>
            <p className="font-sans text-[10px] text-white/40">Lead mentor: Diego R.</p>
            <p className="font-sans text-[10px] text-white/40">
              Project: <span className="text-white/60">SaaS Logistics Dashboard</span>
            </p>
            <p className="font-sans text-[10px] text-white/40">
              Your role: <span className="text-cyan">Frontend — dashboard components</span>
            </p>
          </div>
        </div>

        {/* Tasks */}
        <p className="mb-2 font-mono text-[9px] font-bold uppercase tracking-widest text-white/30">
          This week&apos;s tasks
        </p>
        <div className="mb-4 flex flex-col gap-2">
          {weekTasks.map((task) => (
            <div
              key={task.title}
              className="flex items-start gap-2.5 rounded-lg border border-white/5 px-3 py-2.5"
              style={{ background: "rgba(255,255,255,0.02)" }}
            >
              <span className="mt-0.5 text-sm leading-none">{task.icon}</span>
              <div className="flex-1 min-w-0">
                <p
                  className={cn(
                    "font-sans text-[11px] font-medium",
                    task.status === "done" ? "text-white/40 line-through" : "text-white/80"
                  )}
                >
                  {task.title}
                </p>
                <p className="mt-0.5 font-sans text-[10px] text-white/30">{task.note}</p>
              </div>
              <span
                className={cn(
                  "shrink-0 font-mono text-[9px]",
                  task.dueColor === "teal" && "text-teal",
                  task.dueColor === "amber" && "text-amber-400",
                  task.dueColor === "white" && "text-white/30"
                )}
              >
                {task.due}
              </span>
            </div>
          ))}
        </div>

        {/* Mentor session */}
        <div
          className="flex items-center justify-between rounded-xl border border-cyan/15 px-4 py-3"
          style={{ background: "rgba(0,180,216,0.05)" }}
        >
          <div className="flex items-center gap-2">
            <Video size={13} className="text-cyan" />
            <div>
              <p className="font-sans text-xs font-semibold text-white">
                Mentor session: Thursday 3pm
              </p>
              <p className="font-mono text-[10px] text-white/35">Diego R.</p>
            </div>
          </div>
          <button className="rounded-lg border border-cyan/25 bg-cyan/10 px-3 py-1.5 font-sans text-[10px] font-semibold text-cyan hover:bg-cyan/15">
            Join call
          </button>
        </div>

        {/* Progress footer */}
        <p className="mt-3 text-center font-mono text-[10px] text-white/25">
          12 tasks completed · 3 weeks in · On track
        </p>
      </div>
    </div>
  );
}

// ─── MOCKUP 3: Squad Mentor Dashboard ────────────────────────────────────────

function SquadMentorDashboardMockup() {
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
        <div>
          <p className="font-sans text-sm font-semibold text-white">
            Mentor Hub · React &amp; Node Squad
          </p>
          <p className="font-mono text-[10px] text-white/35">Mentoring 2 juniors</p>
        </div>
        <span className="rounded-full border border-gold/25 bg-gold/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-gold">
          Top Mentor Squad ⭐
        </span>
      </div>

      <div className="p-5">
        {/* Junior cards */}
        <div className="mb-4 flex flex-col gap-3">
          {/* Junior 1 */}
          <div
            className="overflow-hidden rounded-xl border border-white/6 px-4 py-3"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            <div className="mb-2 flex items-center justify-between">
              <div>
                <span className="font-sans text-xs font-semibold text-white">
                  Martín G. · 🇦🇷 · Week 3
                </span>
                <p className="font-mono text-[10px] text-white/35">SaaS Dashboard</p>
              </div>
              <div className="text-right">
                <p className="font-mono text-xs font-bold text-gold">+$340</p>
                <p className="font-mono text-[9px] text-white/25">this month</p>
              </div>
            </div>
            {/* Progress bar */}
            <div className="mb-2">
              <div className="mb-1 flex items-center justify-between">
                <span className="font-mono text-[10px] text-white/30">Progress</span>
                <span className="font-mono text-[10px] text-cyan">78%</span>
              </div>
              <div className="h-1 w-full overflow-hidden rounded-full bg-white/5">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: "78%",
                    background: "linear-gradient(90deg, #0f766e, #00b4d8)",
                  }}
                />
              </div>
            </div>
            <p className="font-sans text-[10px] italic text-white/30">
              &ldquo;Strong frontend instincts. Needs work on testing.&rdquo;
            </p>
          </div>

          {/* Junior 2 */}
          <div
            className="overflow-hidden rounded-xl border border-white/6 px-4 py-3"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            <div className="mb-2 flex items-center justify-between">
              <div>
                <span className="font-sans text-xs font-semibold text-white">
                  Sofia L. · 🇨🇱 · Week 1
                </span>
                <p className="font-mono text-[10px] text-white/35">E-commerce API</p>
              </div>
              <div className="text-right">
                <p className="font-mono text-xs font-bold text-gold">+$120</p>
                <p className="font-mono text-[9px] text-white/25">so far</p>
              </div>
            </div>
            {/* Progress bar */}
            <div className="mb-2">
              <div className="mb-1 flex items-center justify-between">
                <span className="font-mono text-[10px] text-white/30">Progress</span>
                <span className="font-mono text-[10px] text-cyan">22%</span>
              </div>
              <div className="h-1 w-full overflow-hidden rounded-full bg-white/5">
                <div
                  className="h-full rounded-full"
                  style={{ width: "22%", background: "#00b4d8" }}
                />
              </div>
            </div>
            <p className="font-sans text-[10px] italic text-white/30">
              &ldquo;Early days. Good fundamentals.&rdquo;
            </p>
          </div>
        </div>

        {/* Stats */}
        <div
          className="mb-4 rounded-xl border border-gold/15 px-4 py-3"
          style={{ background: "rgba(245,158,11,0.04)" }}
        >
          <div className="flex flex-wrap gap-3">
            <div>
              <p className="font-mono text-sm font-bold text-gold">$1,840</p>
              <p className="font-mono text-[9px] text-white/25">Total mentoring earnings</p>
            </div>
            <div>
              <p className="font-mono text-sm font-bold text-white/70">4</p>
              <p className="font-mono text-[9px] text-white/25">Juniors mentored</p>
            </div>
            <div>
              <p className="font-mono text-sm font-bold text-teal">3</p>
              <p className="font-mono text-[9px] text-white/25">Hired after program</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <button className="w-full rounded-lg border border-cyan/20 bg-cyan/8 py-2.5 font-sans text-xs font-semibold text-cyan transition-colors hover:bg-cyan/12">
          Accept new junior →
        </button>
      </div>
    </div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function TalentPathPage() {
  return (
    <main className="bg-background">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden pt-32 pb-20">
        {/* Neural canvas — gold */}
        <NeuralNoise
          color={[245, 158, 11]}
          opacity={0.30}
          speed={0.0007}
          intensity={1.0}
          className="absolute inset-0 h-full w-full"
          style={{ mixBlendMode: "screen" }}
        />
        <div className="pointer-events-none absolute inset-0 bg-background/62" aria-hidden />
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute -top-40 left-1/2 h-[700px] w-[1000px] -translate-x-1/2 rounded-full bg-gold/5 blur-[140px] animate-orb-1" />
          <div className="absolute top-1/2 right-0 h-[400px] w-[500px] -translate-y-1/2 rounded-full bg-gold/4 blur-[100px] animate-orb-2" />
          <div className="dot-grid absolute inset-0 opacity-30" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
            {/* Left — copy */}
            <motion.div variants={staggerContainer} initial="hidden" animate="visible">
              {/* Eyebrow */}
              <motion.div
                variants={fadeInUp}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/8 px-4 py-1.5"
              >
                <span className="font-sans text-sm font-semibold text-gold">TalentPath</span>
                <span className="h-px w-3 bg-gold/30" />
                <span className="font-sans text-xs text-gold/70">For Juniors</span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                variants={fadeInUp}
                className="font-display font-bold leading-[1.05] text-white"
                style={{ fontSize: "clamp(28px, 3.8vw, 54px)" }}
              >
                Crecé como
                <br />
                <span className="text-shimmer-gold">profesional.</span>
              </motion.h1>

              {/* Sub */}
              <motion.p
                variants={fadeInUp}
                className="mt-6 max-w-lg font-sans text-lg leading-relaxed text-white/55"
              >
                Trabajá en proyectos reales. Ganancia escalable. Feedback constante de seniors.
              </motion.p>

              {/* CTAs */}
              <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/get-started"
                  className="group inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-sans text-base font-semibold text-background transition-all duration-200 hover:bg-white/90 hover:shadow-[0_0_28px_rgba(255,255,255,0.18)]"
                >
                  Apply to TalentPath →
                  <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="#for-squads"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/12 px-8 py-4 font-sans text-base font-medium text-white/60 transition-all duration-200 hover:border-white/25 hover:text-white"
                >
                  For squads: become a mentor
                </Link>
              </motion.div>

              {/* Trust note */}
              <motion.p
                variants={fadeInUp}
                className="mt-5 font-mono text-xs text-white/30"
              >
                $49/mo · 3-month program · Real projects from day one
              </motion.p>
            </motion.div>

            {/* Right — Challenge Mockup */}
            <motion.div variants={slideInRight} initial="hidden" animate="visible">
              <ChallengeInterfaceMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 1: For Juniors ── */}
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
                For Juniors
              </motion.p>
              <motion.h3
                variants={fadeInUp}
                className="font-display font-bold leading-[1.1] text-white"
                style={{ fontSize: "clamp(26px, 3vw, 42px)" }}
              >
                Real projects.{" "}
                <span className="text-shimmer">Real career.</span> Not another bootcamp.
              </motion.h3>
              <motion.p
                variants={fadeInUp}
                className="mt-5 font-sans text-base leading-relaxed text-white/50"
              >
                TalentPath doesn&apos;t give you exercises. It places you in a working senior squad
                delivering real client work. You ship code that goes to production. You get feedback
                from engineers who do it for a living.
              </motion.p>
              <motion.ul variants={staggerContainer} className="mt-7 flex flex-col gap-3">
                {[
                  "$49/month — less than a Udemy course",
                  "Work on real projects, not sandbox exercises",
                  "Graduate with a verifiable track record, not a certificate",
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
              <ChallengeInterfaceMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: The Journey (Timeline) ── */}
      <section className="relative overflow-hidden py-28">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute top-1/2 left-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/3 blur-[140px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="mb-14 text-center"
          >
            <motion.p
              variants={fadeInUp}
              className="mb-3 font-sans text-sm font-semibold uppercase tracking-widest text-cyan"
            >
              The TalentPath Journey
            </motion.p>
            <motion.h3
              variants={fadeInUp}
              className="font-display font-bold leading-tight text-white"
              style={{ fontSize: "clamp(26px, 3vw, 42px)" }}
            >
              From applicant to{" "}
              <span className="text-shimmer-gold">working engineer.</span>
            </motion.h3>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {[
              {
                step: "01",
                title: "Apply & Challenge",
                body: "Submit your application and complete a real technical challenge. 34% pass rate keeps quality high.",
                accent: "cyan",
              },
              {
                step: "02",
                title: "Get Matched",
                body: "Kaizen matches you to a senior squad working on a project that fits your skills and goals.",
                accent: "teal",
              },
              {
                step: "03",
                title: "Ship Real Work",
                body: "Join the squad. Work on actual client code. Get daily feedback from your mentor.",
                accent: "gold",
              },
              {
                step: "04",
                title: "Graduate Ready",
                body: "After 3 months, you have real shipped projects, references, and a SkillBase profile with verified work.",
                accent: "cyan",
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                variants={fadeInUp}
                className="relative overflow-hidden rounded-2xl border border-white/6 p-6"
                style={{ background: "#0d1313" }}
              >
                {/* Connector line (desktop only) */}
                {i < 3 && (
                  <div className="absolute top-9 right-0 hidden h-px w-6 translate-x-full bg-white/8 lg:block" />
                )}
                <div
                  className={cn(
                    "mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl font-mono text-sm font-bold",
                    item.accent === "cyan" && "border border-cyan/20 bg-cyan/8 text-cyan",
                    item.accent === "teal" && "border border-teal/20 bg-teal/8 text-teal",
                    item.accent === "gold" && "border border-gold/20 bg-gold/8 text-gold"
                  )}
                >
                  {item.step}
                </div>
                <h4 className="mb-2 font-sans text-base font-semibold text-white">
                  {item.title}
                </h4>
                <p className="font-sans text-sm leading-relaxed text-white/70">{item.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 3: For Squads (reversed) ── */}
      <section id="for-squads" className="relative overflow-hidden py-28">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute top-1/2 left-0 h-[500px] w-[600px] -translate-y-1/2 rounded-full bg-gold/4 blur-[120px]" />
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
              <SquadMentorDashboardMockup />
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
                className="mb-4 font-sans text-sm font-semibold uppercase tracking-widest text-gold"
              >
                For Senior Squads
              </motion.p>
              <motion.h3
                variants={fadeInUp}
                className="font-display font-bold leading-[1.1] text-white"
                style={{ fontSize: "clamp(26px, 3vw, 42px)" }}
              >
                Earn more.{" "}
                <span className="text-shimmer-gold">Grow the ecosystem.</span>{" "}
                Shape the next generation.
              </motion.h3>
              <motion.p
                variants={fadeInUp}
                className="mt-5 font-sans text-base leading-relaxed text-white/50"
              >
                Squads that mentor in TalentPath receive a monthly fee per junior — plus a junior
                who genuinely helps on real project work. Many squads hire their best juniors
                full-time after the program.
              </motion.p>
              <motion.ul variants={staggerContainer} className="mt-7 flex flex-col gap-3">
                {[
                  "Earn $340–600/month per junior mentored",
                  "Juniors work on real tasks — actual project help",
                  "First pick to hire your best graduates",
                ].map((item) => (
                  <motion.li key={item} variants={fadeInUp} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-gold" />
                    <span className="font-sans text-sm leading-relaxed text-white/60">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: For Companies ── */}
      <section className="relative overflow-hidden py-28">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute top-1/2 right-0 h-[500px] w-[600px] -translate-y-1/2 rounded-full bg-teal/4 blur-[120px]" />
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
                className="mb-4 font-sans text-sm font-semibold uppercase tracking-widest text-teal"
              >
                For Companies · Talent Pipeline
              </motion.p>
              <motion.h3
                variants={fadeInUp}
                className="font-display font-bold leading-[1.1] text-white"
                style={{ fontSize: "clamp(26px, 3vw, 42px)" }}
              >
                A talent pipeline that{" "}
                <span className="text-shimmer">builds itself.</span>
              </motion.h3>
              <motion.p
                variants={fadeInUp}
                className="mt-5 font-sans text-base leading-relaxed text-white/50"
              >
                TalentPath graduates are different from bootcamp grads — they&apos;ve shipped real code
                in real projects. Companies that host projects get first access to TalentPath
                graduates.
              </motion.p>
              <motion.ul variants={staggerContainer} className="mt-7 flex flex-col gap-3">
                {[
                  "Graduates trained on real projects, not exercises",
                  "First-access hiring for companies on Zenit",
                  "Kaizen flags top TalentPath graduates for your open briefs",
                ].map((item) => (
                  <motion.li key={item} variants={fadeInUp} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-teal" />
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
              <JuniorDashboardMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="relative overflow-hidden py-28">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute top-1/2 left-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/4 blur-[150px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="mb-14 text-center"
          >
            <motion.p
              variants={fadeInUp}
              className="mb-3 font-sans text-sm font-semibold uppercase tracking-widest text-muted-foreground"
            >
              Three sides. One ecosystem.
            </motion.p>
            <motion.h3
              variants={fadeInUp}
              className="font-display font-bold leading-tight text-white"
              style={{ fontSize: "clamp(26px, 3vw, 42px)" }}
            >
              How TalentPath works{" "}
              <span className="text-shimmer">for everyone.</span>
            </motion.h3>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            {/* Juniors card — cyan */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col overflow-hidden rounded-2xl border border-cyan/20"
              style={{ background: "#0d1313" }}
            >
              <div className="border-b border-cyan/10 px-6 py-5">
                <p className="mb-1 font-sans text-sm font-semibold uppercase tracking-widest text-cyan">
                  Juniors
                </p>
                <p className="font-display text-4xl font-bold text-white">$49</p>
                <p className="font-mono text-xs text-white/30">/month</p>
              </div>
              <div className="flex flex-1 flex-col gap-2 px-6 py-5">
                {[
                  "3-month program",
                  "Real project work",
                  "Mentor feedback",
                  "SkillBase profile",
                ].map((f) => (
                  <div key={f} className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="shrink-0 text-cyan" />
                    <span className="font-sans text-sm text-white/60">{f}</span>
                  </div>
                ))}
              </div>
              <div className="px-6 pb-6">
                <Link
                  href="/get-started"
                  className="block w-full rounded-xl border border-cyan/25 bg-cyan/10 py-3 text-center font-sans text-sm font-semibold text-cyan transition-colors hover:bg-cyan/15"
                >
                  Apply now →
                </Link>
              </div>
            </motion.div>

            {/* Senior Squads card — gold */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col overflow-hidden rounded-2xl border border-gold/20"
              style={{ background: "#0d1313" }}
            >
              <div className="border-b border-gold/10 px-6 py-5">
                <p className="mb-1 font-sans text-sm font-semibold uppercase tracking-widest text-gold">
                  Senior Squads
                </p>
                <p className="font-display text-4xl font-bold text-white">Free</p>
                <p className="font-mono text-xs text-white/30">to mentor</p>
              </div>
              <div className="flex flex-1 flex-col gap-2 px-6 py-5">
                {[
                  "Earn $340–600/month per junior",
                  "Build your team",
                  "Top Mentor badge",
                ].map((f) => (
                  <div key={f} className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="shrink-0 text-gold" />
                    <span className="font-sans text-sm text-white/60">{f}</span>
                  </div>
                ))}
              </div>
              <div className="px-6 pb-6">
                <Link
                  href="/squads/pre-registro"
                  className="block w-full rounded-xl border border-gold/25 bg-gold/10 py-3 text-center font-sans text-sm font-semibold text-gold transition-colors hover:bg-gold/15"
                >
                  Become a mentor →
                </Link>
              </div>
            </motion.div>

            {/* Companies card — teal */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col overflow-hidden rounded-2xl border border-teal/20"
              style={{ background: "#0d1313" }}
            >
              <div className="border-b border-teal/10 px-6 py-5">
                <p className="mb-1 font-sans text-sm font-semibold uppercase tracking-widest text-teal">
                  Companies
                </p>
                <p className="font-display text-4xl font-bold text-white">Via</p>
                <p className="font-mono text-xs text-white/30">Zenit plan</p>
              </div>
              <div className="flex flex-1 flex-col gap-2 px-6 py-5">
                {[
                  "Access TalentPath graduates",
                  "First-hire access",
                  "Pipeline of vetted junior talent",
                ].map((f) => (
                  <div key={f} className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="shrink-0 text-teal" />
                    <span className="font-sans text-sm text-white/60">{f}</span>
                  </div>
                ))}
              </div>
              <div className="px-6 pb-6">
                <Link
                  href="/get-started"
                  className="block w-full rounded-xl border border-teal/25 bg-teal/10 py-3 text-center font-sans text-sm font-semibold text-teal transition-colors hover:bg-teal/15"
                >
                  Learn more →
                </Link>
              </div>
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
              <div className="absolute bottom-0 right-0 h-px w-24 bg-gradient-to-l from-gold/30 to-transparent" />
              <div className="absolute bottom-0 right-0 h-24 w-px bg-gradient-to-t from-gold/30 to-transparent" />
            </div>

            <div className="relative">
              <motion.div
                variants={fadeInUp}
                className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan/20 bg-cyan/8 px-4 py-1.5"
              >
                <Sparkles size={13} className="text-cyan" />
                <span className="font-sans text-sm font-semibold text-cyan">
                  TalentPath + Kaizen
                </span>
              </motion.div>

              <motion.h2
                variants={fadeInUp}
                className="mx-auto max-w-2xl font-display font-bold leading-tight text-white"
                style={{ fontSize: "clamp(26px, 3vw, 42px)" }}
              >
                Kaizen matches juniors to squads{" "}
                <span className="text-shimmer">the same way it matches projects.</span>
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="mx-auto mt-5 max-w-lg font-sans text-base leading-relaxed text-white/50"
              >
                We don&apos;t randomly assign juniors. Kaizen reads the junior&apos;s challenge results,
                their skills, their goals — and matches them to the squad and project where
                they&apos;ll grow fastest.
              </motion.p>

              {/* Stats */}
              <motion.div
                variants={staggerContainer}
                className="mt-10 flex flex-wrap justify-center gap-4"
              >
                {[
                  { stat: "34%", label: "challenge pass rate", color: "cyan" },
                  { stat: "$49/mo", label: "for juniors", color: "gold" },
                  { stat: "3×", label: "more hires vs. bootcamp grads", color: "teal" },
                ].map(({ stat, label, color }) => (
                  <motion.div
                    key={stat}
                    variants={scaleIn}
                    className={cn(
                      "flex flex-col items-center gap-1 rounded-2xl border px-6 py-5 text-center",
                      color === "cyan" && "border-cyan/20 bg-cyan/8",
                      color === "teal" && "border-teal/20 bg-teal/8",
                      color === "gold" && "border-gold/20 bg-gold/8"
                    )}
                  >
                    <span
                      className={cn(
                        "font-display text-3xl font-bold",
                        color === "cyan" && "text-cyan",
                        color === "teal" && "text-teal",
                        color === "gold" && "text-gold"
                      )}
                    >
                      {stat}
                    </span>
                    <span className="max-w-[140px] font-sans text-xs leading-snug text-white/40">
                      {label}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
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
            <motion.p
              variants={fadeInUp}
              className="font-sans text-sm font-semibold uppercase tracking-widest text-white/30"
            >
              Ready to ship
            </motion.p>

            <motion.h2
              variants={fadeInUp}
              className="font-display font-bold leading-tight text-white"
              style={{ fontSize: "clamp(26px, 3vw, 42px)" }}
            >
              Your career starts{" "}
              <span className="text-shimmer-gold">with real work.</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="max-w-md font-sans text-lg leading-relaxed text-white/50"
            >
              Apply to TalentPath. The next cohort starts soon.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col items-center gap-4">
              <Link
                href="/get-started"
                className="group inline-flex items-center gap-2 rounded-xl bg-white px-10 py-4 font-sans text-base font-semibold text-background transition-all duration-200 hover:bg-white/90 hover:shadow-[0_0_32px_rgba(255,255,255,0.2)]"
              >
                Apply now — $49/month →
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>

              <Link
                href="/get-started"
                className="flex items-center gap-1 font-sans text-sm text-white/30 transition-colors hover:text-white/60"
              >
                <Users size={14} />
                For squads: interested in mentoring? Contact us →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
