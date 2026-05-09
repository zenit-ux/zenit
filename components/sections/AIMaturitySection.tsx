"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp, defaultViewport } from "@/lib/motionVariants";
import { Bot, Users, Layers, Cpu, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

const stages = [
  {
    number: "01",
    icon: Layers,
    label: "No tech team",
    company: "You have a business problem and no engineers to solve it.",
    ai: "Kaizen scopes the full build and selects a squad to deliver from zero.",
    route: "Full squad deployment",
    accent: "cyan",
    border: "border-cyan/20",
    bg: "bg-cyan/5",
    iconColor: "text-cyan",
    iconBorder: "border-cyan/25 bg-cyan/8",
    badge: "border-cyan/25 bg-cyan/8 text-cyan",
  },
  {
    number: "02",
    icon: Cpu,
    label: "Legacy systems",
    company: "Aging infrastructure, tech debt, a monolith that's slowing everything down.",
    ai: "Migration architecture requires human judgment AI can't safely automate. Kaizen deploys migration specialists.",
    route: "Migration squad",
    accent: "amber",
    border: "border-amber-500/20",
    bg: "bg-amber-500/5",
    iconColor: "text-amber-400",
    iconBorder: "border-amber-500/25 bg-amber-500/8",
    badge: "border-amber-500/25 bg-amber-500/8 text-amber-400",
  },
  {
    number: "03",
    icon: Bot,
    label: "Has team, needs AI",
    company: "Internal devs, but no AI capabilities. Everything is still manual.",
    ai: "Kaizen identifies which workflows AI can own, which need human oversight, and matches an AI implementation squad.",
    route: "AI implementation squad",
    accent: "teal",
    border: "border-teal/20",
    bg: "bg-teal/5",
    iconColor: "text-teal",
    iconBorder: "border-teal/25 bg-teal/8",
    badge: "border-teal/25 bg-teal/8 text-teal",
  },
  {
    number: "04",
    icon: Rocket,
    label: "Building AI",
    company: "Actively building AI capabilities but missing specific expertise — LLMs, MLOps, data pipelines.",
    ai: "Kaizen identifies the precise gap and deploys targeted expertise. No generalists — only the exact skill missing.",
    route: "Targeted expertise",
    accent: "cyan",
    border: "border-cyan/20",
    bg: "bg-cyan/5",
    iconColor: "text-cyan",
    iconBorder: "border-cyan/25 bg-cyan/8",
    badge: "border-cyan/25 bg-cyan/8 text-cyan",
  },
  {
    number: "05",
    icon: Users,
    label: "AI-native",
    company: "Strong AI team. Needs high-complexity delivery that requires human coordination at scale.",
    ai: "Kaizen handles orchestration. Squads deploy only for work that genuinely exceeds autonomous AI capacity.",
    route: "Senior squads on demand",
    accent: "gold",
    border: "border-gold/20",
    bg: "bg-gold/5",
    iconColor: "text-gold",
    iconBorder: "border-gold/25 bg-gold/8",
    badge: "border-gold/25 bg-gold/8 text-gold",
  },
];

export function AIMaturitySection() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(15,118,110,0.07) 0%, transparent 80%)" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mb-16 max-w-2xl"
        >
          <motion.div variants={fadeInUp} className="mb-4 flex items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/8 px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-widest text-cyan">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan" />
              AI-native routing
            </span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="mb-4 font-display font-bold leading-tight text-white"
            style={{ fontSize: "clamp(24px, 2.8vw, 40px)" }}
          >
            Kaizen meets you<br />
            <span className="text-shimmer">where you actually are.</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="font-sans text-lg leading-relaxed text-muted-foreground">
            Every company is at a different stage of AI maturity. Before recommending anything,
            Kaizen maps your real situation — then routes AI or human squads based on what
            your problem actually requires.
          </motion.p>
        </motion.div>

        {/* Stages grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5"
        >
          {stages.map((stage) => {
            const Icon = stage.icon;
            return (
              <motion.div
                key={stage.number}
                variants={fadeInUp}
                className={cn(
                  "group relative flex flex-col gap-4 rounded-2xl border p-5 transition-all duration-300 hover:scale-[1.02]",
                  stage.border,
                  stage.bg
                )}
              >
                {/* Stage number */}
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  Stage {stage.number}
                </span>

                {/* Icon + label */}
                <div className="flex flex-col gap-2.5">
                  <div className={cn("flex h-9 w-9 items-center justify-center rounded-xl border", stage.iconBorder)}>
                    <Icon size={16} className={stage.iconColor} />
                  </div>
                  <p className={cn("font-display text-[14px] font-bold", stage.iconColor)}>
                    {stage.label}
                  </p>
                </div>

                {/* Company description — flex-1 keeps divider at same Y across all cards */}
                <p className="flex-1 font-sans text-[12px] leading-relaxed text-muted-foreground">
                  {stage.company}
                </p>

                {/* Divider */}
                <div className="h-px bg-white/6" />

                {/* Kaizen label */}
                <p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                  Kaizen routes →
                </p>

                {/* AI description — flex-1 pushes badge to absolute bottom */}
                <p className="flex-1 font-sans text-[11px] leading-relaxed text-white/70">
                  {stage.ai}
                </p>

                {/* Badge — always at card bottom */}
                <span className={cn("inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-wider", stage.badge)}>
                  {stage.route}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={defaultViewport}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center font-sans text-sm text-muted-foreground"
        >
          Kaizen never mobilizes a squad for work AI can handle autonomously.
          <span className="text-white/60"> Human coordination is a last resort — and the right one when it&apos;s needed.</span>
        </motion.p>

      </div>
    </section>
  );
}
