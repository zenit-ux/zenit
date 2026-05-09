"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { staggerContainer, fadeInUp, scaleIn, defaultViewport } from "@/lib/motionVariants";

export function FinalCTASection() {
  const bg1Ref = useRef<HTMLDivElement>(null);
  const bg2Ref = useRef<HTMLDivElement>(null);
  const bg3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Three overlapping orbs breathing at different speeds
    if (bg1Ref.current) {
      gsap.to(bg1Ref.current, {
        opacity: 0.85,
        scale: 1.15,
        duration: 5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    }
    if (bg2Ref.current) {
      gsap.to(bg2Ref.current, {
        opacity: 0.65,
        x: "-5%",
        scale: 1.10,
        duration: 7,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 2,
      });
    }
    if (bg3Ref.current) {
      gsap.to(bg3Ref.current, {
        opacity: 0.55,
        x: "5%",
        scale: 1.08,
        duration: 9,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 4,
      });
    }

    return () => {
      [bg1Ref, bg2Ref, bg3Ref].forEach((r) => { if (r.current) gsap.killTweensOf(r.current); });
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#070b0b] py-32">
      {/* ── Bold animated gradient background ── */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {/* Central teal pulse */}
        <div
          ref={bg1Ref}
          className="absolute top-1/2 left-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(15,118,110,0.35) 0%, rgba(0,180,216,0.15) 45%, transparent 70%)",
            filter: "blur(70px)",
            opacity: 0.45,
          }}
        />
        {/* Left gold sweep */}
        <div
          ref={bg2Ref}
          className="absolute -top-20 -left-20 h-[700px] w-[700px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(245,158,11,0.22) 0%, transparent 65%)",
            filter: "blur(80px)",
            opacity: 0.4,
          }}
        />
        {/* Right cyan sweep */}
        <div
          ref={bg3Ref}
          className="absolute -bottom-20 -right-20 h-[700px] w-[700px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(0,180,216,0.28) 0%, transparent 65%)",
            filter: "blur(80px)",
            opacity: 0.35,
          }}
        />
        {/* Grid pattern */}
        <div className="grid-pattern absolute inset-0 opacity-40" />
        {/* Corner accents */}
        <div className="absolute top-0 left-0 h-px w-48 bg-gradient-to-r from-teal/60 to-transparent" />
        <div className="absolute top-0 left-0 h-48 w-px bg-gradient-to-b from-teal/60 to-transparent" />
        <div className="absolute bottom-0 right-0 h-px w-48 bg-gradient-to-l from-gold/60 to-transparent" />
        <div className="absolute bottom-0 right-0 h-48 w-px bg-gradient-to-t from-gold/60 to-transparent" />
        <div className="absolute top-0 right-0 h-px w-32 bg-gradient-to-l from-cyan/40 to-transparent" />
        <div className="absolute bottom-0 left-0 h-px w-32 bg-gradient-to-r from-teal/30 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Top label */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mb-16 text-center"
        >
          <span className="font-sans text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Get started — choose your path
          </span>
        </motion.div>

        {/* Two-track CTA */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid gap-5 md:grid-cols-2"
        >
          {/* Companies track */}
          <motion.div variants={scaleIn} className="group relative">
            {/* Gradient border */}
            <div className="absolute inset-0 rounded-3xl opacity-60 transition-opacity duration-300 group-hover:opacity-100"
                 style={{ background: "linear-gradient(135deg, rgba(245,158,11,0.6), rgba(253,230,138,0.3), rgba(245,158,11,0.2))", padding: "1px", borderRadius: "1.5rem" }} />

            <motion.div
              className="relative overflow-hidden rounded-[23px] m-px p-10"
              style={{ background: "rgba(13,19,19,0.90)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }}
              whileHover={{ y: -5, boxShadow: "0 32px 80px rgba(245,158,11,0.18)" }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
            >
              <div className="pointer-events-none absolute inset-0" aria-hidden>
                <div className="absolute top-0 left-0 h-px w-24 bg-gradient-to-r from-gold/70 to-transparent" />
                <div className="absolute top-0 left-0 h-24 w-px bg-gradient-to-b from-gold/70 to-transparent" />
                <div className="animate-breathe-slow absolute -bottom-10 -right-10 h-40 w-40 rounded-full"
                     style={{ background: "radial-gradient(circle, rgba(245,158,11,0.15) 0%, transparent 70%)", filter: "blur(30px)" }} />
              </div>

              <div className="relative flex flex-col gap-7">
                <div>
                  <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/10 px-4 py-1.5 font-sans text-sm font-semibold text-gold">
                    For Companies
                  </p>
                  <h3
                    className="font-display font-bold leading-tight text-white"
                    style={{ fontSize: "clamp(28px, 3vw, 44px)" }}
                  >
                    Your squad.
                    <br />
                    <span className="text-shimmer">48 hours.</span>
                  </h3>
                  <p className="mt-4 font-sans text-base leading-relaxed text-muted-foreground">
                    Post your project, receive vetted matches, build with SafePay protection. Free to start.
                  </p>
                </div>

                <ul className="flex flex-col gap-2.5">
                  {["2–3 matched squads in 48h", "SafePay protects every dollar", "Free to post, 12% on hire"].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 font-sans text-sm text-white/75">
                      <div className="h-1.5 w-1.5 rounded-full bg-gold/70 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/get-started?type=company"
                  className="group/btn inline-flex items-center gap-2 self-start rounded-xl bg-gold px-7 py-3.5 font-sans text-sm font-semibold text-black transition-all duration-300 hover:bg-gold/90 hover:shadow-[0_0_36px_rgba(245,158,11,0.35)] hover:scale-[1.03]"
                >
                  Post your project
                  <ArrowRight size={14} className="transition-transform duration-200 group-hover/btn:translate-x-0.5" />
                </Link>
              </div>
            </motion.div>
          </motion.div>

          {/* Squads track */}
          <motion.div variants={scaleIn} className="group relative">
            {/* Gradient border */}
            <div className="absolute inset-0 rounded-3xl opacity-60 transition-opacity duration-300 group-hover:opacity-100"
                 style={{ background: "linear-gradient(135deg, rgba(0,180,216,0.6), rgba(15,118,110,0.4), rgba(0,180,216,0.2))", padding: "1px", borderRadius: "1.5rem" }} />

            <motion.div
              className="relative overflow-hidden rounded-[23px] m-px p-10"
              style={{ background: "rgba(13,19,19,0.90)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }}
              whileHover={{ y: -5, boxShadow: "0 32px 80px rgba(0,180,216,0.18)" }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
            >
              <div className="pointer-events-none absolute inset-0" aria-hidden>
                <div className="absolute top-0 left-0 h-px w-24 bg-gradient-to-r from-cyan/70 to-transparent" />
                <div className="absolute top-0 left-0 h-24 w-px bg-gradient-to-b from-cyan/70 to-transparent" />
                <div className="animate-breathe-slow absolute -bottom-10 -right-10 h-40 w-40 rounded-full"
                     style={{ background: "radial-gradient(circle, rgba(0,180,216,0.15) 0%, transparent 70%)", filter: "blur(30px)" }} />
              </div>

              <div className="relative flex flex-col gap-7">
                <div>
                  <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal/25 bg-teal/10 px-4 py-1.5 font-sans text-sm font-semibold text-cyan">
                    For Squads
                  </p>
                  <h3
                    className="font-display font-bold leading-tight text-white"
                    style={{ fontSize: "clamp(28px, 3vw, 44px)" }}
                  >
                    Your clients.
                    <br />
                    <span className="text-shimmer-gold">Your terms.</span>
                  </h3>
                  <p className="mt-4 font-sans text-base leading-relaxed text-muted-foreground">
                    Get verified, receive qualified matches, earn 4× more. Zero fees for squads, always.
                  </p>
                </div>

                <ul className="flex flex-col gap-2.5">
                  {["Verified badge after review", "SafePay guarantees every payment", "Always free for squads"].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 font-sans text-sm text-white/75">
                      <div className="h-1.5 w-1.5 rounded-full bg-cyan/70 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/get-started?type=squad"
                  className="group/btn inline-flex items-center gap-2 self-start rounded-xl bg-white px-7 py-3.5 font-sans text-sm font-semibold text-background transition-all duration-300 hover:bg-white/92 hover:shadow-[0_0_36px_rgba(255,255,255,0.22)] hover:scale-[1.03]"
                >
                  Apply as a squad
                  <ArrowRight size={14} className="transition-transform duration-200 group-hover/btn:translate-x-0.5" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Social proof strip */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-3"
        >
          {[
            { value: "500+", label: "verified squads" },
            { value: "200+", label: "companies onboarded" },
            { value: "98%",  label: "satisfaction rate" },
            { value: "$0",   label: "upfront commitment" },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-2">
              <span className="font-mono text-sm font-bold text-cyan drop-shadow-[0_0_8px_rgba(0,180,216,0.5)]">{s.value}</span>
              <span className="font-sans text-xs text-muted-foreground">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
