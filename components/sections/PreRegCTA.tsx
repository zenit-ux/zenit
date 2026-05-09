"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { staggerContainer, fadeInUp, defaultViewport } from "@/lib/motionVariants";

export function PreRegCTA() {
  return (
    <section className="py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-card border border-white/6">

          {/* Ambient background */}
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute -top-32 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-teal/8 blur-[100px]" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/30 to-transparent" />
          </div>

          {/* Corner lines */}
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute top-0 left-0 h-px w-32 bg-gradient-to-r from-cyan/50 to-transparent" />
            <div className="absolute top-0 left-0 h-32 w-px bg-gradient-to-b from-cyan/50 to-transparent" />
            <div className="absolute bottom-0 right-0 h-px w-32 bg-gradient-to-l from-teal/50 to-transparent" />
            <div className="absolute bottom-0 right-0 h-32 w-px bg-gradient-to-t from-teal/50 to-transparent" />
          </div>

          <div className="relative px-8 py-20 text-center md:px-16 md:py-24">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              className="flex flex-col items-center gap-6"
            >
              <motion.p variants={fadeInUp} className="font-sans text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                Early Access
              </motion.p>

              <motion.h2
                variants={fadeInUp}
                className="font-display font-bold leading-tight text-white"
                style={{ fontSize: "clamp(40px, 5vw, 72px)" }}
              >
                200+ companies
                <br />
                <span className="text-shimmer-gold">are already waiting.</span>
              </motion.h2>

              <motion.p variants={fadeInUp} className="max-w-md font-sans text-lg text-muted-foreground">
                Get first access before public launch.
                No credit card. No commitment.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/get-started"
                  className="group inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-sans text-base font-semibold text-background transition-all duration-200 hover:bg-white/90 hover:shadow-[0_0_28px_rgba(255,255,255,0.2)]"
                >
                  Start Pre-Registration
                  <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/12 px-8 py-4 font-sans text-base font-medium text-white/70 transition-all duration-200 hover:border-white/25 hover:text-white"
                >
                  Learn more
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
