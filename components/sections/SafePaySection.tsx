"use client";

import { motion } from "framer-motion";
import { Lock, Code2, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { staggerContainer, fadeInUp, scaleIn, defaultViewport } from "@/lib/motionVariants";

const steps = [
  {
    n: "01",
    icon: Lock,
    color: "gold",
    title: "Client locks funds",
    body: "Before any work begins, the full project value is locked in SafePay escrow. The squad sees the funds are secured — and starts with confidence.",
    tag: "Zero upfront risk",
  },
  {
    n: "02",
    icon: Code2,
    color: "teal",
    title: "Squad delivers milestones",
    body: "The squad ships each milestone. Client reviews the work against the agreed scope. Clear criteria — no ambiguity, no disputes.",
    tag: "Scope-locked delivery",
  },
  {
    n: "03",
    icon: CheckCircle2,
    color: "cyan",
    title: "Approve & release",
    body: "Client approves. Funds release instantly to the squad. Milestone by milestone — you control every payment until the final delivery.",
    tag: "Instant settlement",
  },
] as const;

const colorStyles = {
  gold: { icon: "text-gold bg-gold/10 border-gold/25", n: "text-gold/40", connector: "#f59e0b" },
  teal: { icon: "text-teal bg-teal/10 border-teal/25", n: "text-teal/40", connector: "#0f766e" },
  cyan: { icon: "text-cyan bg-cyan/10 border-cyan/25", n: "text-cyan/40", connector: "#00b4d8" },
} as const;

export function SafePaySection() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Animated gradient background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-[#091212] to-background" />
        <div className="animate-orb-1 absolute top-0 left-1/2 h-[700px] w-[900px] -translate-x-1/2 rounded-full bg-teal/7 blur-[130px]" />
        <div className="animate-orb-3 absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-cyan/5 blur-[100px]" />
        {/* Grid pattern overlay */}
        <div className="grid-pattern absolute inset-0 opacity-40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mb-20 text-center"
        >
          <motion.div variants={scaleIn} className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-teal/20 bg-teal/8 px-5 py-2">
            <Lock size={14} className="text-teal" />
            <span className="font-sans text-sm font-semibold text-teal">SafePay</span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="font-display font-bold leading-tight text-white"
            style={{ fontSize: "clamp(36px, 4.5vw, 60px)" }}
          >
            Payment protection
            <br />
            <span className="text-shimmer">built for software.</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-5 mx-auto max-w-xl font-sans text-lg leading-relaxed text-muted-foreground">
            SafePay is our escrow system designed specifically for software delivery. Funds locked before work starts, released per milestone. Both sides protected, always.
          </motion.p>
        </motion.div>

        {/* 3-step visual */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="relative"
        >
          {/* Connector line — desktop */}
          <div className="pointer-events-none absolute top-[52px] left-[calc(16.67%+28px)] right-[calc(16.67%+28px)] hidden h-px md:block">
            <div className="h-full bg-gradient-to-r from-gold/30 via-teal/30 to-cyan/30" />
            {/* Arrow dots */}
            <div className="absolute left-1/3 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-teal/50" />
            <div className="absolute left-2/3 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-cyan/50" />
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step) => {
              const Icon = step.icon;
              const c = colorStyles[step.color];
              return (
                <motion.div
                  key={step.n}
                  variants={scaleIn}
                  className="relative flex flex-col items-center gap-5 text-center"
                >
                  {/* Icon circle */}
                  <div className="relative">
                    <div className={`flex h-[104px] w-[104px] items-center justify-center rounded-full border-2 ${c.icon} transition-transform duration-300 hover:scale-105`}>
                      <Icon size={36} />
                    </div>
                    <div className={`absolute -top-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-background font-mono text-[11px] font-bold ${c.n}`}>
                      {step.n}
                    </div>
                  </div>

                  {/* Tag */}
                  <div className={`rounded-full border px-3 py-1 font-sans text-[11px] font-semibold ${c.icon}`}>
                    {step.tag}
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="mb-2 font-display text-xl font-bold text-white">{step.title}</h3>
                    <p className="font-sans text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom callout */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mt-20 flex flex-col items-center gap-6 rounded-2xl border border-teal/15 bg-teal/5 px-8 py-10 text-center"
        >
          <p className="max-w-lg font-sans text-base leading-relaxed text-white/70">
            <span className="font-semibold text-white">Every project on Zenit</span> is covered by SafePay — automatically. No opt-in required.
            Funds are never held by Zenit; they sit in a regulated escrow account.
          </p>
          <Link
            href="/safepay"
            className="group inline-flex items-center gap-2 font-sans text-sm font-semibold text-teal transition-colors hover:text-white"
          >
            Read the SafePay docs
            <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
