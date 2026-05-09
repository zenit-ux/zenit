"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  ShieldCheck,
  BadgeCheck,
  ScanSearch,
  UserCheck,
  Layers3,
  CheckCircle2,
} from "lucide-react";
import { staggerContainer, fadeInUp, scaleIn, defaultViewport } from "@/lib/motionVariants";
import { NeuralNoise } from "@/components/ui/neural-noise";

const stats = [
  { value: "48h",  label: "De conversación a primer match" },
  { value: "6",    label: "Pasos del pipeline de Kaizen" },
  { value: "7–12%", label: "Comisión SafePay (sin costo fijo)" },
  { value: "100%", label: "Criterios validados antes del pago" },
];

const benefits = [
  {
    icon: ScanSearch,
    color: "gold",
    title: "Discovery antes del match",
    body: "Kaizen entrevista a tu equipo, mapea tu producto y detecta las brechas reales. La mayoría de las plataformas te mandan un squad sin entender lo que necesitás. Kaizen no.",
  },
  {
    icon: ShieldCheck,
    color: "cyan",
    title: "SafePay valida resultados, no solo el pago",
    body: "Los fondos solo se liberan cuando Kaizen confirma que la entrega cumple los criterios acordados antes de empezar. No hay 'yo creo que cumplí' — hay criterios y evidencia.",
  },
  {
    icon: BadgeCheck,
    color: "teal",
    title: "ZenitRank: badges que significan algo",
    body: "Cada badge refleja entregas reales, porcentaje de cumplimiento de plazos y scores de clientes reales. No declaraciones. No certificaciones pagas. Resultados.",
  },
  {
    icon: BrainCircuit,
    color: "gold",
    title: "Product Brain — memoria de tu producto",
    body: "Kaizen acumula contexto en cada interacción. Cuanto más lo usás, más entiende tu producto. Ese contexto es tuyo — exportable siempre.",
  },
  {
    icon: UserCheck,
    color: "cyan",
    title: "Vos elegís. Kaizen recomienda.",
    body: "Kaizen propone el squad con mayor fit. Vos decidís. Sin asignaciones directas, sin cajas negras. El control siempre está del lado de la empresa.",
  },
  {
    icon: Layers3,
    color: "teal",
    title: "Humano en el loop en cada decisión crítica",
    body: "Pagos, deploys a producción, decisiones irreversibles. Kaizen escala cuando corresponde. La autonomía está calibrada para que nada importante pase sin tu aprobación.",
  },
];

const comparisons = [
  {
    label: "Discovery del producto",
    others: "No existe",
    zenit: "Incluido — 6 fases con Kaizen",
  },
  {
    label: "Validación de la entrega",
    others: "El cliente aprueba (subjetivo)",
    zenit: "Kaizen valida criterios objetivos",
  },
  {
    label: "Protección del pago",
    others: "Escrow o nada",
    zenit: "SafePay — libera por resultado",
  },
  {
    label: "Reputación del squad",
    others: "Reviews o auditoría pagada",
    zenit: "ZenitRank — 100% por resultados reales",
  },
  {
    label: "Disputas",
    others: "Sin contexto previo, 7–15 días",
    zenit: "Con historial completo, resolución en 7 días",
  },
  {
    label: "Tiempo al primer match",
    others: "3–4 semanas",
    zenit: "48 horas",
  },
];

const pipeline = [
  {
    n: "01",
    color: "gold",
    title: "Discover",
    body: "Conversación natural con Kaizen — sin formularios. Kaizen construye el contexto de tu producto, equipo y necesidades en ~4 minutos.",
  },
  {
    n: "02",
    color: "cyan",
    title: "Assess Maturity",
    body: "Kaizen evalúa en qué estadio tecnológico está tu empresa. El routing del squad depende de esto: no es lo mismo un MVP desde cero que integrar IA en un sistema legacy.",
  },
  {
    n: "03",
    color: "teal",
    title: "Generate Brief",
    body: "Kaizen genera el brief completo: stack recomendado, milestones, rango de presupuesto y perfil del squad. Sin negociación manual.",
  },
  {
    n: "04",
    color: "gold",
    title: "Match Squads",
    body: "Kaizen recomienda los squads con mayor fit. Vos revisás sus perfiles, track record real (ZenitRank) y elegís. Una llamada de 30 minutos. Sin compromiso.",
  },
  {
    n: "05",
    color: "cyan",
    title: "Setup SafePay",
    body: "Se definen los criterios de aceptación antes de empezar. Ambas partes firman digitalmente. Los fondos quedan en escrow. El squad no puede tocarlos hasta que Kaizen valide.",
  },
  {
    n: "06",
    color: "teal",
    title: "Monitor Delivery",
    body: "Kaizen supervisa el avance, detecta scope creep y escala cuando se necesita una decisión humana. Vos recibís actualizaciones sin tener que perseguir al squad.",
  },
];

const colorMap: Record<string, string> = {
  cyan: "text-cyan border-cyan/20 bg-cyan/8",
  teal: "text-teal border-teal/20 bg-teal/8",
  gold: "text-gold border-gold/20 bg-gold/8",
};

const pipelineAccent: Record<string, string> = {
  gold: "text-gold",
  cyan: "text-cyan",
  teal: "text-teal",
};

export default function CompaniesPage() {
  return (
    <main className="bg-background">

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-24">
        {/* Neural canvas — gold */}
        <NeuralNoise
          color={[245, 158, 11]}
          opacity={0.32}
          speed={0.0007}
          intensity={1.0}
          className="absolute inset-0 h-full w-full"
          style={{ mixBlendMode: "screen" }}
        />
        {/* Overlay for readability */}
        <div className="pointer-events-none absolute inset-0 bg-background/58" aria-hidden />
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gold/5 blur-[120px] animate-orb-1" />
          <div className="absolute top-1/3 left-0 h-[400px] w-[500px] rounded-full bg-gold/4 blur-[100px] animate-orb-2" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            <motion.p variants={fadeInUp} className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/8 px-4 py-1.5 font-sans text-sm font-semibold text-gold">
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
              Para Empresas
            </motion.p>

            <motion.h1
              variants={fadeInUp}
              className="font-display font-bold leading-[1.05] text-white"
              style={{ fontSize: "clamp(28px, 3.8vw, 54px)" }}
            >
              Kaizen entiende
              <br />
              tu producto primero.
              <br />
              <span className="text-shimmer-gold">Después trae el&nbsp;squad.</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="mt-6 max-w-xl font-sans text-lg leading-relaxed text-muted-foreground">
              La mayoría de las plataformas te muestran una lista. Kaizen hace un discovery de tu negocio, detecta qué expertise necesitás y conecta con el squad exacto. SafePay valida que lo que se entregó cumple lo que se acordó — antes de liberar un peso.
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/get-started"
                className="group inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-sans text-base font-semibold text-background transition-all duration-200 hover:bg-white/90 hover:shadow-[0_0_28px_rgba(255,255,255,0.2)]"
              >
                Iniciar discovery
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/kaizen"
                className="inline-flex items-center gap-2 rounded-xl border border-white/12 px-8 py-4 font-sans text-base font-medium text-white/70 transition-all duration-200 hover:border-white/25 hover:text-white"
              >
                Cómo funciona Kaizen
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 divide-x divide-border md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-1 py-10 px-6 text-center">
                <span className="font-display text-4xl font-bold text-white md:text-5xl">{s.value}</span>
                <span className="font-sans text-sm text-muted-foreground">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="mb-16 text-center"
          >
            <motion.p variants={fadeInUp} className="mb-3 font-sans text-sm font-semibold uppercase tracking-widest text-gold">
              Por qué Zenit
            </motion.p>
            <motion.h2 variants={fadeInUp} className="font-display font-bold text-white" style={{ fontSize: "clamp(26px, 3vw, 42px)" }}>
              La diferencia que no ves<br />
              <span className="text-shimmer-gold">en ninguna otra plataforma.</span>
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={b.title}
                  variants={scaleIn}
                  className="group rounded-2xl border border-white/6 bg-card p-6 transition-all duration-300 hover:border-white/12"
                >
                  <div className={`mb-4 inline-flex rounded-xl border p-3 ${colorMap[b.color]}`}>
                    <Icon size={20} />
                  </div>
                  <h3 className="mb-2 font-sans text-base font-semibold text-white">{b.title}</h3>
                  <p className="font-sans text-sm leading-relaxed text-muted-foreground">{b.body}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Pipeline */}
      <section className="py-28 bg-card/20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="mb-16 text-center"
          >
            <motion.p variants={fadeInUp} className="mb-3 font-sans text-sm font-semibold uppercase tracking-widest text-teal">
              El proceso
            </motion.p>
            <motion.h2 variants={fadeInUp} className="font-display font-bold text-white" style={{ fontSize: "clamp(26px, 3vw, 42px)" }}>
              De conversación a producto entregado<br />
              <span className="text-shimmer">en seis pasos.</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-4 font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
              Kaizen orquesta cada etapa. Vos aprobás las decisiones que importan. El squad construye. SafePay protege el resultado.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="grid gap-4 md:grid-cols-2"
          >
            {pipeline.map((step) => (
              <motion.div
                key={step.n}
                variants={scaleIn}
                className="flex gap-5 rounded-2xl border border-white/6 bg-card p-6"
              >
                <div className={`shrink-0 font-display text-2xl font-bold opacity-40 ${pipelineAccent[step.color]}`}>
                  {step.n}
                </div>
                <div>
                  <h3 className="mb-2 font-sans text-base font-semibold text-white">{step.title}</h3>
                  <p className="font-sans text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="mb-16 text-center"
          >
            <motion.p variants={fadeInUp} className="mb-3 font-sans text-sm font-semibold uppercase tracking-widest text-cyan">
              La diferencia
            </motion.p>
            <motion.h2 variants={fadeInUp} className="font-display font-bold text-white" style={{ fontSize: "clamp(26px, 3vw, 42px)" }}>
              Zenit vs. el resto.
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="overflow-hidden rounded-2xl border border-white/6"
          >
            <div className="grid grid-cols-3 border-b border-white/6 bg-card/60">
              <div className="px-6 py-4 font-sans text-xs font-semibold uppercase tracking-widest text-muted-foreground" />
              <div className="px-6 py-4 text-center font-sans text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Upwork / Agencias
              </div>
              <div className="px-6 py-4 text-center font-sans text-xs font-semibold uppercase tracking-widest text-cyan">
                Zenit
              </div>
            </div>

            {comparisons.map((row, i) => (
              <motion.div
                key={row.label}
                variants={fadeInUp}
                className={`grid grid-cols-3 border-b border-white/4 last:border-0 ${i % 2 === 0 ? "bg-card/20" : ""}`}
              >
                <div className="px-6 py-4 font-sans text-sm font-medium text-white/70">{row.label}</div>
                <div className="px-6 py-4 text-center font-sans text-sm text-muted-foreground">{row.others}</div>
                <div className="px-6 py-4 text-center font-sans text-sm font-semibold text-cyan">{row.zenit}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SafePay callout */}
      <section className="py-20 bg-card/20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="grid gap-8 md:grid-cols-2 items-center"
          >
            <motion.div variants={fadeInUp}>
              <p className="mb-3 font-sans text-sm font-semibold uppercase tracking-widest text-gold">SafePay</p>
              <h2 className="font-display font-bold leading-tight text-white" style={{ fontSize: "clamp(26px, 3vw, 42px)" }}>
                El pago no se mueve
                <br />
                <span className="text-shimmer-gold">hasta que el resultado existe.</span>
              </h2>
              <p className="mt-4 font-sans text-base leading-relaxed text-muted-foreground">
                SafePay no es escrow tradicional. Los fondos se retienen hasta que Kaizen valida que los criterios de aceptación — definidos y firmados digitalmente antes de empezar — se cumplieron. Si hay ambigüedad, escala a revisión humana de Zenit. Si hay disputa, Zenit media con acceso al historial completo de la conversación y la evidencia de entrega.
              </p>
              <Link
                href="/safepay"
                className="mt-6 inline-flex items-center gap-2 font-sans text-sm font-semibold text-gold transition-colors hover:text-gold/80"
              >
                Ver cómo funciona SafePay
                <ArrowRight size={14} />
              </Link>
            </motion.div>

            <motion.div variants={staggerContainer} className="flex flex-col gap-3">
              {[
                { label: "Criterios definidos antes de empezar", detail: "Kaizen los genera desde el brief. Ambas partes firman." },
                { label: "Fondos en escrow desde el inicio", detail: "El squad sabe que el pago existe. La empresa sabe que nadie lo toca sin entrega." },
                { label: "Validación automática de la entrega", detail: "Kaizen evalúa la entrega contra los criterios del contrato." },
                { label: "Protocolo de disputas de 3 niveles", detail: "Negociación directa → mediación Zenit → decisión final. 15 días max." },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  variants={fadeInUp}
                  className="flex items-start gap-3 rounded-xl border border-white/6 bg-card px-5 py-4"
                >
                  <CheckCircle2 size={18} className="shrink-0 text-gold mt-0.5" />
                  <div>
                    <p className="font-sans text-sm font-semibold text-white">{item.label}</p>
                    <p className="font-sans text-xs text-muted-foreground mt-0.5">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-card border border-white/6">
            <div className="pointer-events-none absolute inset-0" aria-hidden>
              <div className="absolute -top-32 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gold/6 blur-[100px]" />
              <div className="absolute top-0 left-0 h-px w-32 bg-gradient-to-r from-gold/50 to-transparent" />
              <div className="absolute top-0 left-0 h-32 w-px bg-gradient-to-b from-gold/50 to-transparent" />
              <div className="absolute bottom-0 right-0 h-px w-32 bg-gradient-to-l from-cyan/50 to-transparent" />
              <div className="absolute bottom-0 right-0 h-32 w-px bg-gradient-to-t from-cyan/50 to-transparent" />
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              className="relative flex flex-col items-center gap-6 px-8 py-20 text-center md:px-16 md:py-24"
            >
              <motion.p variants={fadeInUp} className="font-sans text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                Empezá hoy
              </motion.p>
              <motion.h2
                variants={fadeInUp}
                className="font-display font-bold leading-tight text-white"
                style={{ fontSize: "clamp(26px, 3vw, 42px)" }}
              >
                Kaizen empieza con
                <br />
                <span className="text-shimmer-gold">una conversación de 4 minutos.</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="max-w-md font-sans text-lg text-muted-foreground">
                Sin formularios. Sin procurement. Primer match en 48 horas. Solo pagás cuando contratás — y SafePay protege cada peso.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-3">
                <Link
                  href="/get-started"
                  className="group inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-sans text-base font-semibold text-background transition-all duration-200 hover:bg-white/90 hover:shadow-[0_0_28px_rgba(255,255,255,0.2)]"
                >
                  Iniciar discovery
                  <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/12 px-8 py-4 font-sans text-base font-medium text-white/70 transition-all duration-200 hover:border-white/25 hover:text-white"
                >
                  Ver precios
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
