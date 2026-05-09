"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
  Search,
  Filter,
  Star,
  Brain,
  Users,
} from "lucide-react";
import { staggerContainer, fadeInUp, scaleIn, defaultViewport } from "@/lib/motionVariants";
import { NeuralNoise } from "@/components/ui/neural-noise";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────────────────────
   MOCKUP 1 — Community Browse Interface
   ───────────────────────────────────────────────────────────── */
function CommunityBrowseMockup() {
  const filterChips = ["All", "Squads", "Individuals", "React", "Node.js", "Python", "DevOps"];

  const profiles = [
    {
      name: "React & Node Squad",
      flag: "🇦🇷",
      type: "Squad",
      rate: "$85/h",
      tags: ["React", "Node", "PostgreSQL"],
      rating: "4.9",
      projects: 47,
      status: "AVAILABLE",
      available: true,
    },
    {
      name: "Ana Costa",
      flag: "🇧🇷",
      type: "Individual",
      rate: "$65/h",
      tags: ["Python", "ML", "FastAPI"],
      rating: "4.8",
      projects: 23,
      status: "AVAILABLE",
      available: true,
    },
    {
      name: "DevOps Latam",
      flag: "🇲🇽",
      type: "Squad",
      rate: "$90/h",
      tags: ["K8s", "Terraform", "AWS"],
      rating: "4.9",
      projects: 31,
      status: "ON PROJECT",
      available: false,
    },
    {
      name: "Carlos Mendez",
      flag: "🇨🇴",
      type: "Individual",
      rate: "$70/h",
      tags: ["React", "TypeScript", "Next.js"],
      rating: "4.7",
      projects: 18,
      status: "AVAILABLE",
      available: true,
    },
  ];

  return (
    <div
      className="w-full overflow-hidden rounded-2xl border border-teal/20 font-sans shadow-[0_0_48px_rgba(15,118,110,0.12)]"
      style={{ background: "#050f0f" }}
    >
      {/* Browser chrome */}
      <div
        className="flex items-center gap-3 border-b border-white/6 px-4 py-3"
        style={{ background: "#080f0f" }}
      >
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-500/80" />
          <div className="h-3 w-3 rounded-full bg-yellow-400/80" />
          <div className="h-3 w-3 rounded-full bg-green-500/80" />
        </div>
        <div
          className="flex flex-1 items-center justify-center rounded-md px-3 py-1 font-mono text-xs text-white/30"
          style={{ background: "#0d1a1a" }}
        >
          zenit.io/skillbase
        </div>
      </div>

      <div className="p-4">
        {/* Search bar */}
        <div className="mb-3 flex gap-2">
          <div className="flex flex-1 items-center gap-2 rounded-lg border border-white/10 bg-white/4 px-3 py-2">
            <Search size={12} className="shrink-0 text-white/30" />
            <span className="text-xs text-white/30">Search by skill, location, stack...</span>
          </div>
          <button className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/4 px-3 py-2">
            <Filter size={12} className="text-white/40" />
            <span className="text-xs text-white/40">Filter</span>
          </button>
        </div>

        {/* Filter chips */}
        <div className="mb-4 flex flex-wrap gap-1.5">
          {filterChips.map((chip, i) => (
            <span
              key={chip}
              className={cn(
                "rounded-full px-2.5 py-1 text-[11px] font-medium",
                i === 0
                  ? "bg-teal/20 text-teal border border-teal/30"
                  : "border border-white/8 bg-white/4 text-white/40"
              )}
            >
              {chip}
            </span>
          ))}
        </div>

        {/* Profile cards 2x2 grid */}
        <div className="grid grid-cols-2 gap-2">
          {profiles.map((p) => (
            <div
              key={p.name}
              className="flex flex-col gap-2 rounded-xl border border-white/6 bg-white/3 p-3"
            >
              <div className="flex items-start justify-between gap-1">
                <div>
                  <p className="text-[11px] font-semibold leading-tight text-white">{p.name} {p.flag}</p>
                  <p className="text-[10px] text-white/40">{p.type} · {p.rate}</p>
                </div>
                <span
                  className={cn(
                    "shrink-0 rounded-full px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide",
                    p.available
                      ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/25"
                      : "bg-white/6 text-white/30 border border-white/10"
                  )}
                >
                  {p.status}
                </span>
              </div>
              <div className="flex flex-wrap gap-1">
                {p.tags.map((tag) => (
                  <span key={tag} className="rounded-md border border-white/8 bg-white/4 px-1.5 py-0.5 text-[10px] text-white/50">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-1">
                <Star size={10} className="fill-amber-400 text-amber-400" />
                <span className="text-[10px] font-semibold text-white/70">{p.rating}</span>
                <span className="text-[10px] text-white/30">({p.projects} projects)</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-3 text-center">
          <span className="text-[10px] text-white/30">312 profiles · 89 available now</span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   MOCKUP 2 — Individual / Squad Profile Page
   ───────────────────────────────────────────────────────────── */
function ProfilePageMockup() {
  const portfolioProjects = [
    { name: "E-commerce Recommender", company: "RetailCo", delivered: true },
    { name: "Data Pipeline — Fintech", company: "FinanceHub", delivered: true },
  ];

  return (
    <div
      className="w-full overflow-hidden rounded-2xl border border-teal/20 font-sans shadow-[0_0_48px_rgba(15,118,110,0.12)]"
      style={{ background: "#050f0f" }}
    >
      {/* Browser chrome */}
      <div
        className="flex items-center gap-3 border-b border-white/6 px-4 py-3"
        style={{ background: "#080f0f" }}
      >
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-500/80" />
          <div className="h-3 w-3 rounded-full bg-yellow-400/80" />
          <div className="h-3 w-3 rounded-full bg-green-500/80" />
        </div>
        <div
          className="flex flex-1 items-center justify-center rounded-md px-3 py-1 font-mono text-xs text-white/30"
          style={{ background: "#0d1a1a" }}
        >
          zenit.io/skillbase/ana-costa
        </div>
      </div>

      <div className="p-5">
        {/* Profile header */}
        <div className="mb-4 flex items-start gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-teal/30 bg-teal/15 font-display text-base font-bold text-teal">
            AN
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Ana Costa</h4>
            <p className="text-xs text-white/50">🇧🇷 São Paulo · Individual Dev</p>
            <div className="mt-1.5 inline-flex items-center gap-1.5 rounded-full border border-teal/25 bg-teal/8 px-2.5 py-0.5">
              <span className="h-1.5 w-1.5 rounded-full bg-teal" />
              <span className="text-[11px] font-semibold text-teal">Verified · 94 projects shipped</span>
            </div>
          </div>
        </div>

        {/* Bio */}
        <p className="mb-4 text-[11px] leading-relaxed text-white/50">
          Python &amp; ML specialist. 5 years building recommendation engines and data pipelines for e-commerce.
        </p>

        {/* Skills */}
        <div className="mb-4 flex flex-wrap gap-1.5">
          {["Python", "FastAPI", "TensorFlow", "PostgreSQL", "Docker"].map((skill) => (
            <span key={skill} className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-white/70">
              {skill}
            </span>
          ))}
        </div>

        {/* Stats row */}
        <div className="mb-4 grid grid-cols-4 gap-2">
          {[
            { value: "$65/h", label: "Rate" },
            { value: "23", label: "Projects" },
            { value: "4.8★", label: "Rating" },
            { value: "38d", label: "Avg. time" },
          ].map((s) => (
            <div key={s.label} className="rounded-lg border border-white/6 bg-white/3 p-2 text-center">
              <span className="block text-xs font-bold text-teal leading-none">{s.value}</span>
              <span className="mt-0.5 block text-[9px] text-white/35">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Portfolio */}
        <div className="mb-4">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-white/30">Portfolio</p>
          <div className="flex flex-col gap-1.5">
            {portfolioProjects.map((proj) => (
              <div key={proj.name} className="flex items-center justify-between rounded-lg border border-white/6 bg-white/3 px-3 py-2">
                <div>
                  <p className="text-[11px] font-semibold text-white">{proj.name}</p>
                  <p className="text-[10px] text-white/35">{proj.company}</p>
                </div>
                {proj.delivered && (
                  <span className="text-[10px] font-medium text-emerald-400">Delivered on time ✓</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Availability + CTA */}
        <div className="flex items-center justify-between gap-3 rounded-xl border border-teal/15 bg-teal/5 px-4 py-3">
          <div>
            <p className="text-[11px] font-semibold text-white">Available for projects</p>
            <p className="text-[10px] text-teal">Starts within 1 week</p>
          </div>
          <button className="rounded-lg bg-teal px-3 py-1.5 text-[11px] font-semibold text-white">
            Contact via Zenit →
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   MOCKUP 3 — Company Seats Dashboard
   ───────────────────────────────────────────────────────────── */
function SeatsDashboardMockup() {
  const seats = [
    {
      slot: 1,
      name: "React & Node Squad 🇦🇷",
      status: "ACTIVE",
      project: "Project: SaaS MVP",
      detail: "Renews in 18 days",
      empty: false,
    },
    {
      slot: 2,
      name: "Ana Costa 🇧🇷",
      status: "ACTIVE",
      project: "Project: ML Pipeline",
      detail: "Renews in 12 days",
      empty: false,
    },
    {
      slot: 3,
      name: "DevOps Latam 🇲🇽",
      status: "ON HOLD",
      project: "Available to assign",
      detail: "",
      empty: false,
    },
    { slot: 4, empty: true },
    { slot: 5, empty: true },
  ];

  return (
    <div
      className="w-full overflow-hidden rounded-2xl border border-teal/20 font-sans shadow-[0_0_48px_rgba(15,118,110,0.12)]"
      style={{ background: "#050f0f" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/6 px-5 py-3">
        <div>
          <p className="text-xs font-semibold text-white">SkillBase Seats · Acme Corp</p>
        </div>
        <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-2.5 py-0.5 text-[11px] font-semibold text-amber-400">
          Growth · 5 seats
        </span>
      </div>

      {/* Seat list */}
      <div className="flex flex-col gap-2 p-4">
        {seats.map((seat) =>
          seat.empty ? (
            <div
              key={seat.slot}
              className="flex items-center justify-center rounded-xl border border-dashed border-cyan/25 bg-cyan/4 px-4 py-3"
            >
              <span className="text-xs font-medium text-cyan/60">Add talent →</span>
            </div>
          ) : (
            <div
              key={seat.slot}
              className="flex items-center justify-between gap-3 rounded-xl border border-white/6 bg-white/3 px-4 py-3"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-teal/20 bg-teal/10 font-mono text-[10px] font-bold text-teal">
                  {seat.slot}
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-white">{seat.name}</p>
                  <p className="text-[10px] text-white/40">
                    {seat.project}
                    {seat.detail ? ` · ${seat.detail}` : ""}
                  </p>
                </div>
              </div>
              <span
                className={cn(
                  "shrink-0 rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide",
                  seat.status === "ACTIVE"
                    ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/25"
                    : "bg-white/6 text-white/35 border border-white/10"
                )}
              >
                {seat.status}
              </span>
            </div>
          )
        )}
      </div>

      {/* Footer */}
      <div className="border-t border-white/6 px-5 py-3 text-center">
        <span className="text-[11px] text-white/40">$299/mo · 5 seats · Save vs. per-project rates</span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   PAGE
   ───────────────────────────────────────────────────────────── */
export default function SkillBasePage() {
  return (
    <main className="bg-background">

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-28 pt-36">
        {/* Neural canvas — teal */}
        <NeuralNoise
          color={[13, 148, 136]}
          opacity={0.32}
          speed={0.0007}
          intensity={1.0}
          className="absolute inset-0 h-full w-full"
          style={{ mixBlendMode: "screen" }}
        />
        <div className="pointer-events-none absolute inset-0 bg-background/60" aria-hidden />
        {/* Ambient glows */}
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute -top-48 left-1/4 h-[700px] w-[900px] rounded-full bg-teal/8 blur-[140px] animate-orb-1" />
          <div className="absolute top-1/2 right-0 h-[500px] w-[600px] -translate-y-1/2 rounded-full bg-cyan/5 blur-[120px] animate-orb-2" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

            {/* Left — copy */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-6"
            >
              <motion.p
                variants={fadeInUp}
                className="inline-flex w-fit items-center gap-2 rounded-full border border-teal/20 bg-teal/8 px-4 py-1.5 font-sans text-sm font-semibold text-teal"
              >
                <Users size={14} />
                SkillBase · Free to join
              </motion.p>

              <motion.h1
                variants={fadeInUp}
                className="font-display font-bold leading-[1.05] text-white"
                style={{ fontSize: "clamp(28px, 3.8vw, 54px)" }}
              >
                Your squad.
                <br />
                <span className="text-shimmer">Visible to the world.</span>
              </motion.h1>

              <motion.p variants={fadeInUp} className="max-w-xl font-sans text-lg leading-relaxed text-muted-foreground">
                SkillBase is the free community where squads and individual devs showcase their work and get
                found by companies — without competing on price.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
                <Link
                  href="/get-started"
                  className="group inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-sans text-base font-semibold text-background transition-all duration-200 hover:bg-white/90 hover:shadow-[0_0_28px_rgba(255,255,255,0.2)]"
                >
                  Create your free profile →
                  <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="#community"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/12 px-8 py-4 font-sans text-base font-medium text-white/70 transition-all duration-200 hover:border-white/25 hover:text-white"
                >
                  Browse the community
                </Link>
              </motion.div>

              <motion.p variants={fadeInUp} className="font-sans text-sm text-white/35">
                Free forever for squads and devs. Companies pay for seats.
              </motion.p>
            </motion.div>

            {/* Right — community browse mockup */}
            <motion.div
              variants={scaleIn}
              initial="hidden"
              animate="visible"
              className="w-full max-w-md mx-auto lg:mx-0 lg:ml-auto"
            >
              <CommunityBrowseMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 1: The Community ──────────────────────────── */}
      <section id="community" className="relative overflow-hidden py-28">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute top-0 right-0 h-[500px] w-[600px] rounded-full bg-teal/6 blur-[120px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

            {/* Left — copy */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              className="flex flex-col gap-5"
            >
              <motion.p variants={fadeInUp} className="font-sans text-sm font-semibold uppercase tracking-widest text-teal">
                The Community
              </motion.p>
              <motion.h3
                variants={fadeInUp}
                className="font-display font-bold leading-tight text-white"
                style={{ fontSize: "clamp(26px, 3vw, 42px)" }}
              >
                Not Upwork.{" "}
                <strong className="text-teal">A curated community</strong> of real builders.
              </motion.h3>
              <motion.p variants={fadeInUp} className="font-sans text-base leading-relaxed text-muted-foreground">
                SkillBase is invite-and-vet, not open registration. Every squad and dev on the platform has
                been reviewed by Zenit. You&apos;re browsing quality, not scrolling through noise.
              </motion.p>
              <motion.ul variants={staggerContainer} className="flex flex-col gap-3">
                {[
                  "Squads and individual devs — both welcome",
                  "Free to join, free to be found",
                  "Kaizen uses SkillBase profiles to power AI matching",
                ].map((item) => (
                  <motion.li key={item} variants={fadeInUp} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-teal" />
                    <span className="font-sans text-sm leading-relaxed text-white/70">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Right — community browse mockup */}
            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              className="w-full"
            >
              <CommunityBrowseMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: Your Profile ───────────────────────────── */}
      <section className="relative overflow-hidden py-28 bg-card/20">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute top-0 left-0 h-[500px] w-[600px] rounded-full bg-teal/5 blur-[120px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

            {/* Left — profile mockup (reversed) */}
            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              className="order-2 w-full max-w-md lg:order-1"
            >
              <ProfilePageMockup />
            </motion.div>

            {/* Right — copy */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              className="order-1 flex flex-col gap-5 lg:order-2"
            >
              <motion.p variants={fadeInUp} className="font-sans text-sm font-semibold uppercase tracking-widest text-teal">
                Your Profile
              </motion.p>
              <motion.h3
                variants={fadeInUp}
                className="font-display font-bold leading-tight text-white"
                style={{ fontSize: "clamp(26px, 3vw, 42px)" }}
              >
                One link.{" "}
                <strong className="text-teal">Your entire track record.</strong>
              </motion.h3>
              <motion.p variants={fadeInUp} className="font-sans text-base leading-relaxed text-muted-foreground">
                SkillBase profiles are your portfolio, resume, and referral in one place. Real projects, real
                ratings, real availability — visible to every company on Zenit.
              </motion.p>
              <motion.ul variants={staggerContainer} className="flex flex-col gap-3">
                {[
                  "Showcase completed projects and client ratings",
                  "Individual devs and full squads — same profile system",
                  "Your profile updates automatically as you ship",
                ].map((item) => (
                  <motion.li key={item} variants={fadeInUp} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-teal" />
                    <span className="font-sans text-sm leading-relaxed text-white/70">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PRICING STRIP ─────────────────────────────────────── */}
      <section className="relative overflow-hidden py-20 border-y border-border">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute top-1/2 left-1/2 h-[400px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal/5 blur-[100px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

            {/* Left — devs */}
            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              className="flex flex-col gap-5 rounded-2xl border border-teal/25 p-8"
              style={{ background: "#050f0f" }}
            >
              <p className="font-sans text-sm font-semibold uppercase tracking-widest text-teal">
                For Squads &amp; Devs
              </p>
              <div>
                <span className="font-display text-5xl font-bold text-white">Free</span>
              </div>
              <p className="font-sans text-base leading-relaxed text-muted-foreground">
                Create your profile, get discovered, receive project matches. Always free.
              </p>
              <Link
                href="/get-started"
                className="inline-flex w-fit items-center gap-2 rounded-xl border border-teal/30 bg-teal/10 px-6 py-3 font-sans text-sm font-semibold text-teal transition-all duration-200 hover:bg-teal/20"
              >
                Join free →
              </Link>
            </motion.div>

            {/* Right — companies */}
            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              className="flex flex-col gap-5 rounded-2xl border border-amber-400/25 p-8"
              style={{ background: "#050f0f" }}
            >
              <p className="font-sans text-sm font-semibold uppercase tracking-widest text-gold">
                For Companies
              </p>
              <div>
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-white/40 mb-1">Seats model</p>
                <span className="font-display text-5xl font-bold text-white">From{" "}</span>
                <span className="font-display text-5xl font-bold text-gold">$99</span>
                <span className="font-sans text-base text-white/40">/seat/mo</span>
              </div>
              <p className="font-sans text-base leading-relaxed text-muted-foreground">
                Reserve your preferred talent. Cancel anytime.
              </p>
              <Link
                href="/pricing"
                className="inline-flex w-fit items-center gap-2 rounded-xl border border-amber-400/30 bg-amber-400/10 px-6 py-3 font-sans text-sm font-semibold text-gold transition-all duration-200 hover:bg-amber-400/20"
              >
                View seat plans →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: Seats / Company ───────────────────────── */}
      <section className="relative overflow-hidden py-28">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute top-0 right-0 h-[500px] w-[600px] rounded-full bg-amber-400/4 blur-[120px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

            {/* Left — copy */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              className="flex flex-col gap-5"
            >
              <motion.p variants={fadeInUp} className="font-sans text-sm font-semibold uppercase tracking-widest text-gold">
                For Companies · Seats Model
              </motion.p>
              <motion.h3
                variants={fadeInUp}
                className="font-display font-bold leading-tight text-white"
                style={{ fontSize: "clamp(26px, 3vw, 42px)" }}
              >
                The talent you need,{" "}
                <strong className="text-gold">always available.</strong>
              </motion.h3>
              <motion.p variants={fadeInUp} className="font-sans text-base leading-relaxed text-muted-foreground">
                Instead of searching every time, companies buy &ldquo;seats&rdquo; — reserved access to specific squads
                or devs for ongoing projects. Predictable cost, guaranteed availability.
              </motion.p>
              <motion.ul variants={staggerContainer} className="flex flex-col gap-3">
                {[
                  "Lock in your preferred talent before they're taken",
                  "Pay monthly, not per-project",
                  "Mix squads and individual devs in your seat plan",
                ].map((item) => (
                  <motion.li key={item} variants={fadeInUp} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-gold" />
                    <span className="font-sans text-sm leading-relaxed text-white/70">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Right — seats dashboard mockup */}
            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              className="w-full"
            >
              <SeatsDashboardMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── AI CALLOUT ────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-28 bg-card/30">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute inset-0 grid-pattern opacity-40" />
          <div className="absolute top-1/2 left-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal/7 blur-[130px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-teal/20" style={{ background: "#050f0f" }}>
            {/* Corner accents */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl" aria-hidden>
              <div className="absolute top-0 left-0 h-px w-40 bg-gradient-to-r from-teal/60 to-transparent" />
              <div className="absolute top-0 left-0 h-40 w-px bg-gradient-to-b from-teal/60 to-transparent" />
              <div className="absolute bottom-0 right-0 h-px w-40 bg-gradient-to-l from-cyan/40 to-transparent" />
              <div className="absolute bottom-0 right-0 h-40 w-px bg-gradient-to-t from-cyan/40 to-transparent" />
            </div>

            <div className="relative px-8 py-16 md:px-16 md:py-20">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={defaultViewport}
                className="flex flex-col items-center gap-6 text-center"
              >
                <motion.p
                  variants={fadeInUp}
                  className="inline-flex items-center gap-2 rounded-full border border-teal/20 bg-teal/8 px-4 py-1.5 font-sans text-sm font-semibold text-teal"
                >
                  <Brain size={14} />
                  SkillBase + Kaizen
                </motion.p>

                <motion.h2
                  variants={fadeInUp}
                  className="font-display font-bold leading-tight text-white"
                  style={{ fontSize: "clamp(26px, 3vw, 42px)" }}
                >
                  Your profile is{" "}
                  <strong className="text-shimmer">Kaizen&apos;s training data.</strong>
                </motion.h2>

                <motion.p variants={fadeInUp} className="max-w-2xl font-sans text-lg leading-relaxed text-muted-foreground">
                  Every project you ship on Zenit, every rating you earn, every skill you add — Kaizen reads it
                  all. The better your SkillBase profile, the more precisely Kaizen surfaces you to the right briefs.
                </motion.p>

                {/* Stats row */}
                <motion.div variants={staggerContainer} className="mt-4 flex flex-wrap justify-center gap-4">
                  {[
                    { value: "500+", label: "Squads & devs in the community" },
                    { value: "Free", label: "To join forever" },
                    { value: "3x", label: "More project matches with complete profiles" },
                  ].map((s) => (
                    <motion.div
                      key={s.label}
                      variants={scaleIn}
                      className="rounded-2xl border border-teal/15 bg-teal/6 px-6 py-4 text-center"
                    >
                      <span className="block font-display text-3xl font-bold text-teal leading-none">{s.value}</span>
                      <span className="block mt-1 font-sans text-xs text-white/40">{s.label}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-28">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute top-0 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-teal/8 blur-[120px]" />
          <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-teal/20 to-transparent" />
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
              style={{ fontSize: "clamp(28px, 3.8vw, 54px)" }}
            >
              Join the community.{" "}
              <span className="text-shimmer">Get found.</span>
            </motion.h2>

            <motion.p variants={fadeInUp} className="max-w-md font-sans text-lg text-muted-foreground">
              Free for squads and individual devs. Always.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-3">
              <Link
                href="/get-started"
                className="group inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-sans text-base font-semibold text-background transition-all duration-200 hover:bg-white/90 hover:shadow-[0_0_28px_rgba(255,255,255,0.2)]"
              >
                Create your free profile →
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </motion.div>

            <motion.p variants={fadeInUp} className="font-sans text-sm text-white/35">
              Already have an account?{" "}
              <Link href="/login" className="text-white/60 underline underline-offset-4 hover:text-white">
                Sign in
              </Link>
            </motion.p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
