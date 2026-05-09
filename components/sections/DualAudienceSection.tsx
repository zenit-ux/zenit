"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { staggerContainer, fadeInUp, defaultViewport } from "@/lib/motionVariants";

const squadsPoints = [
  { text: "Get verified and stand out from thousands of generic freelancers." },
  { text: "Receive matched project briefs — no cold outreach, no bidding wars." },
  { text: "SafePay ensures every payment reaches you, milestone by milestone." },
  { text: "4× revenue increase reported by squads in their first 6 months." },
  { text: "Work with companies from the US, EU, and LATAM — in your timezone." },
];

const companiesPoints = [
  { text: "Post a brief in 10 minutes. Receive 2–3 squad matches in 48 hours." },
  { text: "Every squad is technically vetted — not random freelancer profiles." },
  { text: "SafePay escrow means your funds are protected from day one." },
  { text: "Traditional agencies quote $200K — Zenit squads deliver for $22K." },
  { text: "Build an MVP in 30–45 days. Not 90. Not 'depends on the scope'." },
];

export function DualAudienceSection() {
  return (
    <section className="relative overflow-hidden bg-background py-28">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-[#091010] to-background" />
        <div className="animate-orb-1 absolute left-0 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-teal/6 blur-[130px]" />
        <div className="animate-orb-2 absolute right-0 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-gold/5 blur-[130px]" />
        {/* Subtle vertical divider glow */}
        <div className="absolute inset-y-0 left-1/2 hidden w-px bg-gradient-to-b from-transparent via-white/8 to-transparent lg:block" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-0 lg:grid-cols-2">

          {/* ── For Squads ── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="flex flex-col gap-8 border-b border-white/6 pb-16 pr-0 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-16"
          >
            <div>
              <motion.p variants={fadeInUp} className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal/20 bg-teal/8 px-4 py-1.5 font-sans text-sm font-semibold text-cyan">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan" />
                For Squads
              </motion.p>
              <motion.h2
                variants={fadeInUp}
                className="font-display font-bold leading-tight text-white"
                style={{ fontSize: "clamp(30px, 3.5vw, 48px)" }}
              >
                Stop being
                <br />
                <span className="text-shimmer">invisible.</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="mt-4 font-sans text-base leading-relaxed text-muted-foreground">
                The best tech squads in LATAM don&apos;t need to compete on Upwork. They need a platform that matches their quality with the companies that can afford it.
              </motion.p>
            </div>

            <motion.ul variants={staggerContainer} className="flex flex-col gap-3">
              {squadsPoints.map((p) => (
                <motion.li key={p.text} variants={fadeInUp} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-cyan" />
                  <span className="font-sans text-sm text-white/75">{p.text}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={fadeInUp}>
              <Link
                href="/squads"
                className="group inline-flex items-center gap-2 rounded-xl border border-teal/20 bg-teal/8 px-6 py-3 font-sans text-sm font-semibold text-cyan transition-all duration-200 hover:border-teal/40 hover:bg-teal/14"
              >
                Learn more for squads
                <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          </motion.div>

          {/* ── For Companies ── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="flex flex-col gap-8 pt-16 pl-0 lg:pl-16 lg:pt-0"
          >
            <div>
              <motion.p variants={fadeInUp} className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/8 px-4 py-1.5 font-sans text-sm font-semibold text-gold">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
                For Companies
              </motion.p>
              <motion.h2
                variants={fadeInUp}
                className="font-display font-bold leading-tight text-white"
                style={{ fontSize: "clamp(30px, 3.5vw, 48px)" }}
              >
                Stop hiring
                <br />
                <span className="text-shimmer-gold">blind.</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="mt-4 font-sans text-base leading-relaxed text-muted-foreground">
                Every company needs to build software. Not every company can afford to get it wrong. Zenit gives you the speed of a startup and the quality assurance of an enterprise.
              </motion.p>
            </div>

            <motion.ul variants={staggerContainer} className="flex flex-col gap-3">
              {companiesPoints.map((p) => (
                <motion.li key={p.text} variants={fadeInUp} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-gold" />
                  <span className="font-sans text-sm text-white/75">{p.text}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={fadeInUp}>
              <Link
                href="/companies"
                className="group inline-flex items-center gap-2 rounded-xl border border-gold/20 bg-gold/8 px-6 py-3 font-sans text-sm font-semibold text-gold transition-all duration-200 hover:border-gold/40 hover:bg-gold/14"
              >
                Learn more for companies
                <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
