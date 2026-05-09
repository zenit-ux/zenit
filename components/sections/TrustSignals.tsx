"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/motionVariants";

const signals = [
  { value: "15+",   label: "squads activos"         },
  { value: "5+",    label: "empresas en discovery"  },
  { value: "$500k+",label: "en proyectos"           },
  { value: "95%",   label: "completion rate"        },
  { value: "4.6★",  label: "rating promedio"        },
];

export function TrustSignals() {
  return (
    <section
      className="border-y border-teal/10 py-8"
      style={{
        background:
          "linear-gradient(135deg, rgba(13,148,136,0.06) 0%, rgba(8,12,12,1) 40%, rgba(0,180,216,0.04) 100%)",
      }}
    >
      {/* Subtle glow lines */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal/20 to-transparent" aria-hidden />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan/12 to-transparent" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="flex flex-col items-center gap-6"
        >
          {/* Metrics row */}
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 sm:gap-x-16">
            {signals.map((s, i) => (
              <motion.div
                key={s.label}
                variants={fadeInUp}
                className="flex flex-col items-center gap-1"
              >
                <span className="font-display text-2xl font-bold text-white sm:text-3xl">
                  {s.value}
                </span>
                <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                  {s.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Founder quote */}
          <motion.p
            variants={fadeInUp}
            className="font-sans text-sm italic text-teal/80"
          >
            &ldquo;We&rsquo;re not Upwork&rdquo;&nbsp;—&nbsp;
            <span className="not-italic font-semibold text-white/60">David, Founder</span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
