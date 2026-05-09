"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, Shield } from "lucide-react";
import { staggerContainer, fadeInUp, scaleIn, defaultViewport } from "@/lib/motionVariants";
import { NeuralNoise } from "@/components/ui/neural-noise";

const plans = [
  {
    id: "free",
    name: "For Squads",
    price: "$0",
    period: "always free",
    badge: null,
    color: "teal",
    description: "Join the marketplace and start receiving qualified project matches — for free.",
    cta: "Apply as a squad",
    ctaHref: "/get-started",
    features: [
      "Free squad profile and portfolio page",
      "Verified badge after technical review",
      "Unlimited project matches",
      "SafePay payment protection",
      "Multi-currency payouts (USD, BRL, ARS, MXN, COP, CLP)",
      "Direct client communication tools",
      "Project management dashboard",
      "Priority support after 3 delivered projects",
    ],
  },
  {
    id: "company",
    name: "For Companies",
    price: "12%",
    period: "success fee",
    badge: "Most popular",
    color: "cyan",
    description: "Free to post. Pay only when you hire — 12% of the total project value.",
    cta: "Post your project",
    ctaHref: "/get-started",
    features: [
      "Free project posting",
      "2–3 matched squads within 48 hours",
      "30-minute intro calls included",
      "SafePay escrow for every project",
      "Milestone-based payment releases",
      "Dedicated account manager",
      "NDA templates included",
      "Unlimited revision requests",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    period: "negotiated rate",
    badge: null,
    color: "gold",
    description: "For companies running multiple concurrent projects or recurring squad relationships.",
    cta: "Talk to sales",
    ctaHref: "/contact",
    features: [
      "Custom success fee rate (as low as 6%)",
      "Dedicated squad pipeline",
      "Priority matching (24-hour SLA)",
      "Legal and contract review",
      "Custom SLA with uptime guarantee",
      "Volume billing and consolidated invoicing",
      "Dedicated account team",
      "White-glove onboarding",
    ],
  },
];

const colorStyles: Record<string, { badge: string; check: string; border: string; glow: string; cta: string }> = {
  teal: {
    badge: "border-teal/20 bg-teal/8 text-teal",
    check: "text-teal",
    border: "border-teal/20",
    glow: "bg-teal/6",
    cta: "bg-teal/10 border-teal/20 text-teal hover:bg-teal/20 hover:border-teal/40",
  },
  cyan: {
    badge: "border-cyan/20 bg-cyan/8 text-cyan",
    check: "text-cyan",
    border: "border-cyan/30",
    glow: "bg-cyan/8",
    cta: "bg-white text-background hover:bg-white/90 hover:shadow-[0_0_28px_rgba(255,255,255,0.2)]",
  },
  gold: {
    badge: "border-gold/20 bg-gold/8 text-gold",
    check: "text-gold",
    border: "border-gold/20",
    glow: "bg-gold/6",
    cta: "bg-gold/10 border-gold/20 text-gold hover:bg-gold/20 hover:border-gold/40",
  },
};

export default function PricingPage() {
  return (
    <main className="bg-background">

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20">
        {/* Neural canvas — teal */}
        <NeuralNoise
          color={[15, 118, 110]}
          opacity={0.32}
          speed={0.0007}
          intensity={1.0}
          className="absolute inset-0 h-full w-full"
          style={{ mixBlendMode: "screen" }}
        />
        {/* Overlay for readability */}
        <div className="pointer-events-none absolute inset-0 bg-background/58" aria-hidden />
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-teal/5 blur-[120px] animate-orb-1" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center gap-5"
          >
            <motion.p variants={fadeInUp} className="inline-flex items-center gap-2 rounded-full border border-teal/20 bg-teal/8 px-4 py-1.5 font-sans text-sm font-semibold text-teal">
              Pricing
            </motion.p>
            <motion.h1
              variants={fadeInUp}
              className="font-display font-bold leading-[1.05] text-white max-w-3xl"
              style={{ fontSize: "clamp(28px, 3.8vw, 54px)" }}
            >
              Paga solo
              <br />
              <span className="text-shimmer">por resultados.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="max-w-xl font-sans text-lg leading-relaxed text-muted-foreground">
              Sin costo fijo. Sin sorpresas. SafePay asegura que pagás solo por lo que acordamos.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Plans */}
      <section className="pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="grid gap-6 md:grid-cols-3"
          >
            {plans.map((plan) => {
              const s = colorStyles[plan.color];
              const isFeatured = plan.id === "company";

              return (
                <motion.div
                  key={plan.id}
                  variants={scaleIn}
                  whileHover={{ y: -4, transition: { type: "spring", stiffness: 400, damping: 25 } }}
                  className={`relative overflow-hidden rounded-2xl border bg-card p-8 flex flex-col ${s.border} ${isFeatured ? "ring-1 ring-white/10" : ""}`}
                >
                  {/* Ambient glow */}
                  <div className={`pointer-events-none absolute -top-20 left-1/2 h-40 w-56 -translate-x-1/2 rounded-full blur-[60px] ${s.glow}`} />

                  {plan.badge && (
                    <div className="absolute top-5 right-5">
                      <span className={`rounded-full border px-2.5 py-1 font-sans text-[11px] font-semibold ${s.badge}`}>
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  <div className="relative mb-6">
                    <p className="mb-1 font-sans text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      {plan.name}
                    </p>
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-5xl font-bold text-white">{plan.price}</span>
                      <span className="font-sans text-sm text-muted-foreground">/ {plan.period}</span>
                    </div>
                    <p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground">
                      {plan.description}
                    </p>
                  </div>

                  <ul className="relative mb-8 flex flex-col gap-3 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <Check size={14} className={`shrink-0 mt-0.5 ${s.check}`} />
                        <span className="font-sans text-sm text-white/70">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={plan.ctaHref}
                    className={`relative group inline-flex items-center justify-center gap-2 rounded-xl border px-6 py-3 font-sans text-sm font-semibold transition-all duration-200 ${s.cta}`}
                  >
                    {plan.cta}
                    <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* SafePay callout */}
      <section className="py-20 border-t border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="flex flex-col items-center gap-6 text-center"
          >
            <motion.div variants={scaleIn} className="flex h-14 w-14 items-center justify-center rounded-2xl border border-teal/20 bg-teal/8">
              <Shield size={24} className="text-teal" />
            </motion.div>
            <motion.h2 variants={fadeInUp} className="font-display font-bold text-white" style={{ fontSize: "clamp(26px, 3vw, 42px)" }}>
              Every project protected by SafePay
            </motion.h2>
            <motion.p variants={fadeInUp} className="max-w-xl font-sans text-base leading-relaxed text-muted-foreground">
              Regardless of plan, all projects on Zenit are covered by SafePay — our escrow-backed payment system.
              Funds are locked before work begins and released per milestone. Zero risk for both sides.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link
                href="/safepay"
                className="group inline-flex items-center gap-2 font-sans text-sm font-semibold text-teal transition-colors hover:text-white"
              >
                Learn how SafePay works
                <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="mb-12 text-center"
          >
            <motion.h2 variants={fadeInUp} className="font-display font-bold text-white" style={{ fontSize: "clamp(26px, 3vw, 42px)" }}>
              Pricing questions answered.
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="flex flex-col divide-y divide-white/6"
          >
            {[
              {
                q: "When does the 12% fee apply?",
                a: "Only when you hire a squad and a project is started. Browsing, posting, and matching are all free.",
              },
              {
                q: "Is the 12% charged upfront?",
                a: "No. It's added to the total project value at contract signing. You pay as milestones complete — proportionally.",
              },
              {
                q: "Do squads pay any fees?",
                a: "No. Squads join and receive payments with zero fees. We're paid by the company side only.",
              },
              {
                q: "What counts as a 'project' for billing?",
                a: "Any engagement where a squad is hired for a defined scope. Ongoing retainer-style work is billed monthly at the agreed rate × 12%.",
              },
              {
                q: "Can I negotiate the fee for large projects?",
                a: "Yes — projects over $100K are eligible for reduced rates. Contact our enterprise team for custom pricing.",
              },
            ].map((faq) => (
              <motion.div key={faq.q} variants={fadeInUp} className="py-6">
                <h3 className="mb-3 font-sans text-base font-semibold text-white">{faq.q}</h3>
                <p className="font-sans text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-card/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="flex flex-col items-center gap-6 text-center"
          >
            <motion.h2 variants={fadeInUp} className="font-display font-bold text-white" style={{ fontSize: "clamp(26px, 3vw, 42px)" }}>
              Start for free. Scale when you&apos;re ready.
            </motion.h2>
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-3">
              <Link
                href="/get-started"
                className="group inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-sans text-base font-semibold text-background transition-all duration-200 hover:bg-white/90 hover:shadow-[0_0_28px_rgba(255,255,255,0.2)]"
              >
                Get started free
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/get-started"
                className="inline-flex items-center gap-2 rounded-xl border border-white/12 px-8 py-4 font-sans text-base font-medium text-white/70 transition-all duration-200 hover:border-white/25 hover:text-white"
              >
                Contact sales
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
