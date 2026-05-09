"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, EyeOff, ShieldX } from "lucide-react";
import gsap from "gsap";
import { staggerContainer, fadeInUp, scaleIn, defaultViewport } from "@/lib/motionVariants";

const problems = [
  {
    icon: AlertTriangle,
    stat: "60+ days",
    title: "Hiring takes forever",
    body: "Traditional hiring averages 60–90 days — job posts, agencies, interviews, onboarding. By the time you have a team, the window is gone.",
    accent: { icon: "text-amber-400", stat: "text-amber-400", border: "rgba(245,158,11,0.5)" },
  },
  {
    icon: EyeOff,
    stat: "$200K+",
    title: "Agencies drain budgets",
    body: "Legacy agencies quote $200K and four months for an MVP. Hidden fees, project managers, sales overhead — none of it ships product.",
    accent: { icon: "text-red-400", stat: "text-red-400", border: "rgba(239,68,68,0.5)" },
  },
  {
    icon: ShieldX,
    stat: "70% fail",
    title: "No quality control",
    body: "Most outsourced projects fail to deliver. Zero vetting, zero accountability, zero recourse when things go wrong.",
    accent: { icon: "text-rose-400", stat: "text-rose-400", border: "rgba(251,113,133,0.5)" },
  },
] as const;

export function WhyZenitSection() {
  const bgRef   = useRef<HTMLDivElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (bgRef.current) {
      gsap.to(bgRef.current, {
        opacity: 0.75,
        duration: 6,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    }
    if (orb1Ref.current) {
      gsap.to(orb1Ref.current, {
        opacity: 0.6,
        scale: 1.1,
        duration: 8,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 2,
      });
    }
    if (orb2Ref.current) {
      gsap.to(orb2Ref.current, {
        opacity: 0.5,
        duration: 5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 1,
      });
    }

    return () => {
      [bgRef, orb1Ref, orb2Ref].forEach((r) => { if (r.current) gsap.killTweensOf(r.current); });
    };
  }, []);

  return (
    <section className="relative overflow-hidden py-28 bg-background">
      {/* Animated background gradient */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          ref={bgRef}
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 70% 50% at 30% 60%, rgba(239,68,68,0.10) 0%, rgba(245,158,11,0.06) 50%, transparent 80%)",
            opacity: 0.4,
          }}
        />
        <div
          ref={orb1Ref}
          className="absolute -top-32 right-1/4 h-[600px] w-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(245,158,11,0.18) 0%, transparent 65%)",
            filter: "blur(80px)",
            opacity: 0.35,
          }}
        />
        <div
          ref={orb2Ref}
          className="absolute bottom-0 -left-24 h-[500px] w-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(239,68,68,0.14) 0%, transparent 65%)",
            filter: "blur(100px)",
            opacity: 0.3,
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mb-20 max-w-3xl"
        >
          <motion.p variants={fadeInUp} className="mb-4 font-sans text-sm font-semibold uppercase tracking-widest text-amber-400/90">
            The problem
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="font-display font-bold leading-tight"
            style={{ fontSize: "clamp(36px, 4.5vw, 60px)" }}
          >
            <span className="text-white">Hiring tech talent </span>
            <span className="text-red-400/70">is fundamentally broken.</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-5 max-w-xl font-sans text-lg leading-relaxed text-muted-foreground">
            Every path — agencies, freelancers, in-house hiring — is either too slow, too expensive, or too risky. Usually all three.
          </motion.p>
        </motion.div>

        {/* Problem cards with gradient borders */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid gap-5 md:grid-cols-3"
        >
          {problems.map((p) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                variants={scaleIn}
                className="group relative"
              >
                {/* Gradient border wrapper */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-60 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: `linear-gradient(135deg, ${p.accent.border}, rgba(15,118,110,0.3), transparent 60%)`, padding: "1px", borderRadius: "1rem" }}
                />
                <div className="relative overflow-hidden rounded-[15px] m-px bg-[#0d1313] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                  {/* Corner glow */}
                  <div
                    className="pointer-events-none absolute -top-20 -right-20 h-52 w-52 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                    style={{ background: p.accent.border }}
                  />
                  <div className="relative flex flex-col gap-5">
                    <div className={`inline-flex w-fit items-center justify-center rounded-xl border border-white/10 bg-white/5 p-3 ${p.accent.icon}`}>
                      <Icon size={22} />
                    </div>
                    <div>
                      <div className={`mb-2 font-mono text-4xl font-bold ${p.accent.stat} drop-shadow-[0_0_8px_currentColor]`}>
                        {p.stat}
                      </div>
                      <h3 className="mb-2 font-display text-lg font-bold text-white">{p.title}</h3>
                      <p className="font-sans text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bridge */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mt-20 flex items-center gap-5"
        >
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/12 to-transparent" />
          <div className="flex items-center gap-3 rounded-full border border-teal/25 bg-teal/10 px-5 py-2.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan" />
            <span className="font-sans text-sm font-semibold text-cyan">Enter Zenit</span>
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/12 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
