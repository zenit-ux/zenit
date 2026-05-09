"use client";

import { Users, Briefcase, Clock, Zap, Star, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { useCountUp } from "@/lib/animations/useCountUp";
import { staggerContainer, scaleIn, fadeInUp, defaultViewport } from "@/lib/motionVariants";

const stats = [
  {
    target: 500,
    suffix: "+",
    label: "Verified squads",
    sublabel: "across 15 countries",
    icon: Users,
    color: "cyan",
  },
  {
    target: 200,
    suffix: "+",
    label: "Companies onboarded",
    sublabel: "from US, EU & LATAM",
    icon: Briefcase,
    color: "gold",
  },
  {
    target: 45,
    suffix: "d",
    label: "Avg. delivery",
    sublabel: "from kickoff to shipped",
    icon: Clock,
    color: "teal",
  },
  {
    target: 48,
    suffix: "h",
    label: "Time to match",
    sublabel: "fastest in the market",
    icon: Zap,
    color: "cyan",
  },
  {
    target: 98,
    suffix: "%",
    label: "Client satisfaction",
    sublabel: "based on 312 projects",
    icon: Star,
    color: "gold",
  },
  {
    target: 15,
    suffix: "+",
    label: "Countries",
    sublabel: "LATAM, EU & beyond",
    icon: Globe,
    color: "teal",
  },
] as const;

const colorStyles = {
  cyan: {
    icon: "text-cyan bg-cyan/10 border-cyan/20",
    number: "text-cyan",
    glow: "bg-cyan/6",
  },
  gold: {
    icon: "text-gold bg-gold/10 border-gold/20",
    number: "text-gold",
    glow: "bg-gold/6",
  },
  teal: {
    icon: "text-teal bg-teal/10 border-teal/20",
    number: "text-teal",
    glow: "bg-teal/6",
  },
} as const;

function StatCard({ stat }: { stat: (typeof stats)[number] }) {
  const ref = useCountUp({ target: stat.target, suffix: stat.suffix, duration: 2.2 });
  const Icon = stat.icon;
  const c = colorStyles[stat.color];

  return (
    <motion.div
      variants={scaleIn}
      className="group relative overflow-hidden rounded-2xl border border-white/6 bg-card p-6 transition-all duration-300 hover:border-white/12 hover:-translate-y-1"
    >
      {/* Ambient glow */}
      <div className={`pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${c.glow}`} />

      <div className="relative flex items-start gap-4">
        {/* Icon */}
        <div className={`mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${c.icon}`}>
          <Icon size={19} />
        </div>

        {/* Numbers + label */}
        <div>
          <div className={`font-display text-4xl font-bold leading-none ${c.number} md:text-5xl`}>
            <span ref={ref}>0{stat.suffix}</span>
          </div>
          <div className="mt-1.5 font-sans text-sm font-semibold text-white">{stat.label}</div>
          <div className="mt-0.5 font-sans text-xs text-muted-foreground">{stat.sublabel}</div>
        </div>
      </div>
    </motion.div>
  );
}

export function StatsSection() {
  return (
    <section className="relative overflow-hidden py-28 bg-background">
      {/* Animated background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-[#0a1414] to-background" />
        <div className="animate-orb-2 absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal/5 blur-[150px]" />
        <div className="animate-orb-1 absolute -top-20 right-0 h-[400px] w-[400px] rounded-full bg-cyan/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mb-16 text-center"
        >
          <motion.p variants={fadeInUp} className="mb-4 font-sans text-sm font-semibold uppercase tracking-widest text-teal">
            By the numbers
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="font-display font-bold leading-tight text-white"
            style={{ fontSize: "clamp(36px, 4.5vw, 60px)" }}
          >
            Zenit in numbers.
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
