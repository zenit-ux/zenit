"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Star, MapPin, Users, ArrowRight, CheckCircle2 } from "lucide-react";
import { staggerContainer, fadeInUp, scaleIn, defaultViewport } from "@/lib/motionVariants";
import { cn } from "@/lib/utils";

const squads = [
  {
    initials: "RC",
    color: "cyan",
    name: "React & Cloud Squad",
    flag: "🇦🇷",
    country: "Buenos Aires",
    rating: 4.9,
    reviews: 47,
    members: 3,
    skills: ["React", "Next.js", "Node.js", "PostgreSQL", "AWS"],
    rate: "$85/h",
    delivery: "38d avg",
    available: true,
    highlight: "Delivered 6 fintech MVPs in 2025",
  },
  {
    initials: "ML",
    color: "teal",
    name: "ML / AI Specialists",
    flag: "🇧🇷",
    country: "São Paulo",
    rating: 4.8,
    reviews: 31,
    members: 4,
    skills: ["Python", "PyTorch", "FastAPI", "GCP", "Vertex AI"],
    rate: "$95/h",
    delivery: "42d avg",
    available: true,
    highlight: "4× revenue growth for DevCraft in 6 months",
  },
  {
    initials: "DO",
    color: "gold",
    name: "DevOps & Platform",
    flag: "🇲🇽",
    country: "Mexico City",
    rating: 4.9,
    reviews: 22,
    members: 2,
    skills: ["Kubernetes", "Terraform", "GCP", "CI/CD", "Observability"],
    rate: "$80/h",
    delivery: "29d avg",
    available: false,
    highlight: "Zero-downtime migrations for 3 scale-ups",
  },
  {
    initials: "FS",
    color: "cyan",
    name: "Full-Stack SaaS Squad",
    flag: "🇨🇴",
    country: "Bogotá",
    rating: 4.8,
    reviews: 18,
    members: 4,
    skills: ["TypeScript", "React", "Rails", "Stripe", "Supabase"],
    rate: "$78/h",
    delivery: "44d avg",
    available: true,
    highlight: "3 B2B SaaS platforms shipped in 2025",
  },
] as const;

const colorStyles = {
  cyan: { avatar: "bg-cyan/15 text-cyan border-cyan/20", badge: "bg-teal/10 text-cyan border-teal/20", glow: "group-hover:shadow-[0_16px_40px_rgba(0,180,216,0.12)]" },
  teal: { avatar: "bg-teal/15 text-teal border-teal/20", badge: "bg-teal/10 text-teal border-teal/20", glow: "group-hover:shadow-[0_16px_40px_rgba(15,118,110,0.12)]" },
  gold: { avatar: "bg-gold/15 text-gold border-gold/20", badge: "bg-gold/10 text-gold border-gold/20", glow: "group-hover:shadow-[0_16px_40px_rgba(245,158,11,0.12)]" },
} as const;

export function FeaturedSquadsSection() {
  return (
    <section className="relative overflow-hidden py-28 bg-background">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="animate-orb-1 absolute -top-24 left-0 h-[500px] w-[500px] rounded-full bg-cyan/5 blur-[120px]" />
        <div className="animate-orb-3 absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-teal/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mb-16 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <motion.p variants={fadeInUp} className="mb-3 font-sans text-sm font-semibold uppercase tracking-widest text-cyan">
              Featured squads
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="font-display font-bold leading-tight text-white"
              style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
            >
              Meet the teams
              <br />
              <span className="text-shimmer">ready to deliver.</span>
            </motion.h2>
          </div>
          <motion.div variants={fadeInUp}>
            <Link
              href="/squads"
              className="group inline-flex items-center gap-2 rounded-xl border border-white/12 px-5 py-2.5 font-sans text-sm font-medium text-white/70 transition-all duration-200 hover:border-white/25 hover:text-white"
            >
              View all squads
              <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid gap-5 sm:grid-cols-2"
        >
          {squads.map((squad) => {
            const c = colorStyles[squad.color];
            return (
              <motion.div
                key={squad.name}
                variants={scaleIn}
                className={cn(
                  "group relative overflow-hidden rounded-2xl border border-white/6 bg-card p-6 transition-all duration-300 hover:border-white/12 hover:-translate-y-1",
                  c.glow
                )}
              >
                <div className="flex flex-col gap-5">
                  {/* Top: avatar + name + location + availability */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className={cn("flex h-12 w-12 items-center justify-center rounded-2xl border font-display text-base font-bold", c.avatar)}>
                        {squad.initials}
                      </div>
                      <div>
                        <p className="font-display text-base font-bold text-white">{squad.name}</p>
                        <p className="flex items-center gap-1 font-sans text-[12px] text-muted-foreground">
                          <span>{squad.flag}</span>
                          {squad.country}
                          <span className="text-border">·</span>
                          <Users size={10} />
                          {squad.members} members
                        </p>
                      </div>
                    </div>
                    <span className={cn(
                      "shrink-0 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-sans text-[10px] font-semibold",
                      squad.available
                        ? "border-teal/20 bg-teal/10 text-cyan"
                        : "border-white/8 bg-white/4 text-muted-foreground"
                    )}>
                      {squad.available && <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan" />}
                      {squad.available ? "Available" : "Matched"}
                    </span>
                  </div>

                  {/* Rating + delivery */}
                  <div className="flex items-center gap-4">
                    <span className="inline-flex items-center gap-1 font-sans text-[13px] font-semibold text-gold">
                      <Star size={12} className="fill-gold text-gold" />
                      {squad.rating}
                      <span className="font-normal text-muted-foreground">({squad.reviews} reviews)</span>
                    </span>
                    <span className="h-4 w-px bg-border" />
                    <span className="font-sans text-[13px] text-muted-foreground">{squad.delivery}</span>
                    <span className="h-4 w-px bg-border" />
                    <span className="font-mono text-[13px] font-semibold text-white/80">{squad.rate} avg</span>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1.5">
                    {squad.skills.map((skill) => (
                      <span key={skill} className="rounded-md border border-white/6 bg-white/3 px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Highlight */}
                  <div className="flex items-start gap-2 rounded-xl border border-white/6 bg-white/2 px-3.5 py-3">
                    <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-teal" />
                    <p className="font-sans text-xs text-white/60">{squad.highlight}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mt-12 text-center"
        >
          <p className="mb-4 font-sans text-sm text-muted-foreground">
            500+ verified squads waiting to work with you.
          </p>
          <Link
            href="/get-started"
            className="group inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-sans text-sm font-semibold text-background transition-all duration-200 hover:bg-white/90 hover:shadow-[0_0_28px_rgba(255,255,255,0.18)]"
          >
            Find your squad in 48h
            <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
