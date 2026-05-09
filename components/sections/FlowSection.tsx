"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { defaultViewport } from "@/lib/motionVariants";

/* ─── 3-Step Timeline mockup ─────────────────────────────── */

function TimelineMockup() {
  const steps = [
    {
      num: "01",
      label: "Discovery",
      sub: "Kaizen entiende tu proyecto, tu stack y tu capacidad real.",
      time: "Semana 1–2",
      colorBorder: "border-cyan/40",
      colorText: "text-cyan",
      colorBg: "bg-cyan/10",
      lineColor: "from-cyan/30",
    },
    {
      num: "02",
      label: "Matching",
      sub: "3 squads curados por Kaizen. Vos elegís con quién trabajar.",
      time: "Día 3",
      colorBorder: "border-teal/40",
      colorText: "text-teal",
      colorBg: "bg-teal/10",
      lineColor: "from-teal/30",
    },
    {
      num: "03",
      label: "Delivery",
      sub: "Entrega garantizada por SafePay. Kaizen monitorea cada milestone.",
      time: "12 semanas",
      colorBorder: "border-gold/40",
      colorText: "text-gold",
      colorBg: "bg-gold/8",
      lineColor: "from-gold/30",
    },
  ];

  return (
    <div
      className="overflow-hidden rounded-2xl border border-white/10 p-6 shadow-[0_24px_60px_rgba(0,0,0,0.65)]"
      style={{ background: "#050f0f" }}
    >
      <p className="mb-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60">
        Proceso estándar · Zenit
      </p>

      <div className="flex flex-col">
        {steps.map((step, i) => (
          <div key={step.num} className="flex gap-4">
            {/* Timeline connector column */}
            <div className="flex flex-col items-center">
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border ${step.colorBorder} ${step.colorBg} font-mono text-[11px] font-bold ${step.colorText}`}
              >
                {step.num}
              </div>
              {i < steps.length - 1 && (
                <div className={`mt-1 w-px flex-1 min-h-[40px] bg-gradient-to-b ${step.lineColor} to-transparent`} />
              )}
            </div>

            {/* Content */}
            <div className={i < steps.length - 1 ? "pb-8" : ""}>
              <div className="flex items-center gap-3 mb-1">
                <p className="font-display text-[15px] font-bold text-white">{step.label}</p>
                <span className={`font-mono text-[9px] font-semibold ${step.colorText}`}>{step.time}</span>
              </div>
              <p className="font-sans text-[12px] leading-relaxed text-muted-foreground">{step.sub}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer metric */}
      <div className="mt-4 border-t border-white/5 pt-4 flex items-center justify-between">
        <span className="font-mono text-[9px] text-muted-foreground">Time to first delivery</span>
        <span className="font-mono text-sm font-bold text-cyan">{"< 3 semanas"}</span>
      </div>
    </div>
  );
}

/* ─── Section ────────────────────────────────────────────── */

export function FlowSection() {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 70% 60% at 80% 50%, rgba(15,118,110,0.08) 0%, transparent 70%)" }}
        />
        <div
          className="absolute -left-24 top-1/3 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(15,118,110,0.12) 0%, transparent 65%)", filter: "blur(80px)", opacity: 0.45 }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* ── Mockup (left) ── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={defaultViewport}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] as const }}
            className="order-2 lg:order-1"
          >
            <TimelineMockup />
          </motion.div>

          {/* ── Text (right) ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={defaultViewport}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }}
            className="order-1 flex flex-col gap-6 lg:order-2"
          >
            <h2
              className="font-display font-bold leading-tight text-white"
              style={{ fontSize: "clamp(26px, 3vw, 36px)" }}
            >
              De cero a producción<br />
              <span className="text-shimmer-gold">en 3 pasos.</span>
            </h2>

            <div className="font-sans text-base leading-relaxed text-muted-foreground space-y-3">
              <p>Kaizen descubre qué necesitás. Zenit matchea squads capaces. Entregas garantizadas con SafePay.</p>
              <p className="text-white/80 font-medium">Sin guessing. Sin sorpresas.</p>
            </div>

            <a
              href="/how-it-works"
              className="inline-flex w-fit items-center gap-2 font-sans text-sm font-semibold text-cyan transition-all hover:gap-3"
            >
              See Full Process <ArrowRight size={14} />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
