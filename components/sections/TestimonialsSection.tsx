"use client";

import { motion } from "framer-motion";
import { staggerContainer, scaleIn, defaultViewport } from "@/lib/motionVariants";

const quotes = [
  {
    text: "Escalamos a 3 proyectos sin contratar un solo full-time. Misma calidad, más velocidad, cero equity.",
    name: "Matías Rodríguez",
    role: "CEO, Pagos Now",
    flag: "🇦🇷",
    color: "cyan" as const,
  },
  {
    text: "Necesitábamos IA pero no podíamos esperar 9 meses. El squad entregó en producción en 3 meses. La inversión se pagó sola 5 veces.",
    name: "Diego Fuentes",
    role: "CTO, FinTech MX",
    flag: "🇲🇽",
    color: "gold" as const,
  },
  {
    text: "Kaizen califica a los clientes antes de que hablemos. Pasamos de 100 propuestas a ganar el 60% de los proyectos.",
    name: "Carlos Mendes",
    role: "Squad Lead, DevCraft",
    flag: "🇧🇷",
    color: "teal" as const,
  },
];

const borderMap = {
  cyan: "border-cyan/20",
  gold: "border-gold/20",
  teal: "border-teal/20",
};

const accentMap = {
  cyan: "text-cyan",
  gold: "text-gold",
  teal: "text-teal",
};

export function TestimonialsSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          className="mb-10 text-center"
        >
          <p className="mb-2 font-mono text-[11px] font-bold uppercase tracking-widest text-cyan">
            Testimonials
          </p>
          <h2
            className="font-display font-bold text-white"
            style={{ fontSize: "clamp(24px, 2.8vw, 36px)" }}
          >
            Squads y empresas{" "}
            <span className="text-shimmer">confían en Zenit.</span>
          </h2>
        </motion.div>

        {/* 3-card grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid gap-5 md:grid-cols-3"
        >
          {quotes.map((q) => (
            <motion.div
              key={q.name}
              variants={scaleIn}
              className={`flex flex-col justify-between rounded-2xl border p-6 ${borderMap[q.color]}`}
              style={{ background: "#0F1419" }}
            >
              <blockquote className="font-sans text-[14px] italic leading-relaxed text-white/80">
                &ldquo;{q.text}&rdquo;
              </blockquote>

              <div className="mt-5 flex items-center gap-2.5">
                <div className={`flex h-8 w-8 items-center justify-center rounded-full border ${borderMap[q.color]} bg-white/5 font-display text-xs font-bold text-white`}>
                  {q.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </div>
                <div>
                  <p className="font-sans text-[12px] font-semibold text-white">
                    {q.name} <span className="ml-0.5">{q.flag}</span>
                  </p>
                  <p className={`font-mono text-[10px] ${accentMap[q.color]}`}>{q.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
