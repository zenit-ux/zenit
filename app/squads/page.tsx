"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Shield,
  Zap,
  Globe,
  TrendingUp,
  BrainCircuit,
  GraduationCap,
} from "lucide-react";
import { staggerContainer, fadeInUp, scaleIn, slideInRight, defaultViewport } from "@/lib/motionVariants";
import { NeuralNoise } from "@/components/ui/neural-noise";

const stats = [
  { value: "50+",  label: "Squads pre-registrados" },
  { value: "48h",  label: "De aplicación a primer match" },
  { value: "100%", label: "Equipos calibrados por Kaizen" },
  { value: "$0",   label: "Costo de entrada" },
];

const benefits = [
  {
    icon: TrendingUp,
    color: "cyan",
    title: "ZenitRank: reputación que se acumula",
    body: "Tu badge sube con cada milestone a tiempo y cada criterio cumplido. Squads con badge más alto aparecen primero en Kaizen, acceden a proyectos de mayor valor y construyen un track record imposible de falsificar.",
  },
  {
    icon: Shield,
    color: "teal",
    title: "SafePay: el pago está antes de que escribas una línea",
    body: "Los fondos quedan bloqueados en escrow desde que ambas partes firman. Kaizen valida la entrega antes de liberar el pago. Nunca más perseguís una factura.",
  },
  {
    icon: BrainCircuit,
    color: "gold",
    title: "Kaizen trae el cliente correcto",
    body: "Kaizen analiza el brief, cruza con tu historial y solo te muestra oportunidades donde sos fit real. Sin calls desperdiciadas, sin briefings vagos, sin clientes que no saben lo que quieren.",
  },
  {
    icon: Globe,
    color: "cyan",
    title: "Acceso a proyectos globales sin salir de LATAM",
    body: "Tu squad trabaja desde donde está. Kaizen coordina el proyecto y TalkFlow elimina la barrera de idioma si la hay. Accedés a clientes de US, EU y LATAM con el mismo proceso.",
  },
  {
    icon: Zap,
    color: "teal",
    title: "Sin ops, sin chasing, sin invoicing",
    body: "Contratos, scope, pagos y disputas — Zenit gestiona todo. Vos te focalizás en construir. Si hay un conflicto, Kaizen media con los criterios firmados y el historial completo.",
  },
  {
    icon: GraduationCap,
    color: "gold",
    title: "TalentPath: tu pipeline de talento propio",
    body: "Mentoreá juniors en proyectos reales y generás $340–600/mes por junior. Los mejores se convierten en tus próximos engineers, ya entrenados en tu stack y cultura de trabajo.",
  },
];

const badges = [
  {
    symbol: "◆",
    name: "Squad Validado",
    color: "cyan",
    requirements: [
      "Perfil completo en la plataforma",
      "LinkedIn verificado por Kaizen",
      "Skills declarados con portfolio",
    ],
    certifies: "Identidad verificada. Punto de partida.",
  },
  {
    symbol: "★",
    name: "Squad Confiable",
    color: "teal",
    requirements: [
      "1+ milestone completado",
      "Tasa de entrega en fecha >80%",
      "Score promedio >7/10",
    ],
    certifies: "Primera señal de confianza basada en resultado real.",
  },
  {
    symbol: "✓",
    name: "Squad Verificado",
    color: "gold",
    requirements: [
      "5+ milestones completados",
      "Tasa de entrega >90%",
      "2+ clientes distintos • Score >8.5/10",
    ],
    certifies: "Track record sólido en múltiples proyectos y clientes.",
  },
  {
    symbol: "★★",
    name: "Squad Elite",
    color: "cyan",
    requirements: [
      "15+ milestones completados",
      "Tasa de entrega >95%",
      "5+ clientes • 0 disputas perdidas en 12 meses",
    ],
    certifies: "Top tier de la plataforma. El estándar más alto.",
  },
];

const steps = [
  {
    n: "01",
    color: "cyan",
    title: "Aplicá y pasá el review técnico",
    body: "Compartí tu perfil de squad: integrantes, stack, proyectos pasados y GitHub. Revisamos en menos de 48 horas. Sin test genérico — revisamos evidencia real.",
  },
  {
    n: "02",
    color: "teal",
    title: "Obtenés tu badge inicial (◆ Squad Validado)",
    body: "Kaizen verifica tu LinkedIn, tus skills y tu portfolio. Tu perfil queda visible en la plataforma y en el algoritmo de matching.",
  },
  {
    n: "03",
    color: "cyan",
    title: "Kaizen te matchea con el proyecto correcto",
    body: "Revisás el brief generado por Kaizen. Una call de 30 minutos con la empresa. Si es fit, SafePay bloquea los fondos antes de que empieces.",
  },
  {
    n: "04",
    color: "teal",
    title: "Entregás, Kaizen valida, cobrás",
    body: "Kaizen evalúa la entrega contra los criterios firmados. Validación positiva → SafePay libera los fondos al squad en 48 horas. Sin invoicing, sin chasing.",
  },
];

const colorMap: Record<string, string> = {
  cyan: "text-cyan border-cyan/20 bg-cyan/8",
  teal: "text-teal border-teal/20 bg-teal/8",
  gold: "text-gold border-gold/20 bg-gold/8",
};

const stepAccent: Record<string, string> = {
  cyan: "text-cyan",
  teal: "text-teal",
};

const badgeSymbolColor: Record<string, string> = {
  cyan: "text-cyan",
  teal: "text-teal",
  gold: "text-gold",
};

function SquadDashboardMockup() {
  const squads = [
    { name: "Velocity Squad", flag: "🇦🇷", badge: "★★ Elite", score: "98%", color: "text-cyan border-cyan/25 bg-cyan/6" },
    { name: "CoreStack Labs", flag: "🇨🇴", badge: "✓ Verificado", score: "91%", color: "text-gold border-gold/25 bg-gold/6" },
    { name: "ByteForge",     flag: "🇲🇽", badge: "★ Confiable", score: "84%", color: "text-teal border-teal/25 bg-teal/6" },
  ];
  return (
    <div
      className="w-full overflow-hidden rounded-2xl border border-teal/20 shadow-2xl"
      style={{ background: "#040d0c" }}
    >
      <div className="flex items-center justify-between border-b border-white/6 px-4 py-3" style={{ background: "#020b09" }}>
        <span className="font-mono text-xs font-bold text-teal">Zenit · Squad Marketplace</span>
        <span className="flex items-center gap-1.5 font-mono text-[10px] text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse" />
          3 matches disponibles
        </span>
      </div>
      <div className="flex flex-col divide-y divide-white/5">
        {squads.map((s) => (
          <div key={s.name} className="flex items-center justify-between gap-4 px-4 py-3.5">
            <div className="flex items-center gap-2.5">
              <span className="text-base">{s.flag}</span>
              <div>
                <p className="font-sans text-sm font-semibold text-white">{s.name}</p>
                <span className={`inline-flex rounded-full border px-2 py-0.5 font-mono text-[9px] font-bold ${s.color}`}>
                  {s.badge}
                </span>
              </div>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="font-mono text-xs font-bold text-white">{s.score}</span>
              <div className="h-1 w-16 overflow-hidden rounded-full bg-white/8">
                <div className="h-full rounded-full bg-teal" style={{ width: s.score }} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-white/5 px-4 py-3 text-right">
        <span className="font-mono text-[10px] text-muted-foreground">SafePay protegido · Pago por milestone</span>
      </div>
    </div>
  );
}

export default function SquadsPage() {
  return (
    <main className="bg-background">

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-24">
        {/* Neural canvas — teal */}
        <NeuralNoise
          color={[15, 118, 110]}
          opacity={0.40}
          speed={0.0007}
          intensity={1.1}
          className="absolute inset-0 h-full w-full"
          style={{ mixBlendMode: "screen" }}
        />
        {/* Overlay for readability */}
        <div className="pointer-events-none absolute inset-0 bg-background/55" aria-hidden />
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-teal/6 blur-[120px] animate-orb-1" />
          <div className="absolute top-1/3 right-0 h-[400px] w-[500px] rounded-full bg-teal/5 blur-[100px] animate-orb-2" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl lg:max-w-none"
          >
            <motion.p variants={fadeInUp} className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal/20 bg-teal/8 px-4 py-1.5 font-sans text-sm font-semibold text-teal">
              <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse" />
              Para Squads
            </motion.p>

            <motion.h1
              variants={fadeInUp}
              className="font-display font-bold leading-[1.05] text-white"
              style={{ fontSize: "clamp(28px, 3.8vw, 54px)" }}
            >
              Equipos técnicos
              <br />
              <span className="text-shimmer">bajo demanda.</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="mt-6 max-w-xl font-sans text-lg leading-relaxed text-muted-foreground">
              Sin nómina fija. Paga por milestone. SafePay garantiza el resultado.
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/get-started"
                className="group inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-sans text-base font-semibold text-background transition-all duration-200 hover:bg-white/90 hover:shadow-[0_0_28px_rgba(255,255,255,0.2)]"
              >
                Registrar mi squad
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center gap-2 rounded-xl border border-white/12 px-8 py-4 font-sans text-base font-medium text-white/70 transition-all duration-200 hover:border-white/25 hover:text-white"
              >
                Cómo funciona
              </Link>
            </motion.div>
          </motion.div>

          {/* Right — Squad Dashboard Mockup */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            className="relative hidden lg:block"
          >
            <SquadDashboardMockup />
          </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="grid grid-cols-2 divide-x divide-border md:grid-cols-4"
          >
            {stats.map((s) => (
              <motion.div key={s.label} variants={fadeInUp} className="flex flex-col items-center gap-1 py-10 px-6 text-center">
                <span className="font-display text-4xl font-bold text-white md:text-5xl">{s.value}</span>
                <span className="font-sans text-sm text-muted-foreground">{s.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits grid */}
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="mb-16 text-center"
          >
            <motion.p variants={fadeInUp} className="mb-3 font-sans text-sm font-semibold uppercase tracking-widest text-cyan">
              Por qué Zenit
            </motion.p>
            <motion.h2 variants={fadeInUp} className="font-display font-bold text-white" style={{ fontSize: "clamp(26px, 3vw, 42px)" }}>
              Todo lo que tu squad necesita.
              <br />
              <span className="text-shimmer">Sin lo que te distrae.</span>
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
                  whileHover={{ y: -4, transition: { type: "spring", stiffness: 400, damping: 25 } }}
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

      {/* ZenitRank */}
      <section className="py-28 bg-card/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="mb-16 text-center"
          >
            <motion.p variants={fadeInUp} className="mb-3 font-sans text-sm font-semibold uppercase tracking-widest text-teal">
              ZenitRank
            </motion.p>
            <motion.h2 variants={fadeInUp} className="font-display font-bold text-white" style={{ fontSize: "clamp(26px, 3vw, 42px)" }}>
              Cuatro badges.
              <br />
              <span className="text-shimmer">Todos ganados, ninguno comprado.</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-4 font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
              ZenitRank es 100% objetivo — on-time rate, response time, criterios cumplidos, disputas y diversidad de clientes. Nada subjetivo. Nada declarado. Todo medido en tiempo real.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {badges.map((badge) => (
              <motion.div
                key={badge.name}
                variants={scaleIn}
                className="flex flex-col gap-4 rounded-2xl border border-white/6 bg-card p-6"
              >
                <div className="flex items-center gap-3">
                  <span className={`font-display text-3xl font-bold ${badgeSymbolColor[badge.color]}`}>
                    {badge.symbol}
                  </span>
                  <span className={`font-sans text-sm font-semibold ${badgeSymbolColor[badge.color]}`}>
                    {badge.name}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  {badge.requirements.map((req) => (
                    <div key={req} className="flex items-start gap-2">
                      <CheckCircle2 size={14} className={`shrink-0 mt-0.5 ${badgeSymbolColor[badge.color]}`} />
                      <span className="font-sans text-xs text-muted-foreground">{req}</span>
                    </div>
                  ))}
                </div>
                <p className={`font-sans text-xs font-semibold border-t border-white/6 pt-3 ${badgeSymbolColor[badge.color]}`}>
                  {badge.certifies}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="mt-8 text-center font-sans text-sm text-muted-foreground"
          >
            Los squads con badge más alto aparecen primero en el matching de Kaizen y acceden a proyectos de mayor valor.
          </motion.p>
        </div>
      </section>

      {/* How it works for squads */}
      <section className="py-28">
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
              De aplicación a proyecto pago<br />
              en cuatro pasos.
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="flex flex-col gap-6"
          >
            {steps.map((step) => (
              <motion.div
                key={step.n}
                variants={fadeInUp}
                className="flex gap-6 rounded-2xl border border-white/6 bg-card p-6 md:p-8"
              >
                <div className={`shrink-0 font-display text-2xl font-bold opacity-40 ${stepAccent[step.color]}`}>
                  {step.n}
                </div>
                <div>
                  <h3 className="mb-2 font-sans text-lg font-semibold text-white">{step.title}</h3>
                  <p className="font-sans text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What we look for */}
      <section className="py-28 bg-card/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
            >
              <motion.p variants={fadeInUp} className="mb-3 font-sans text-sm font-semibold uppercase tracking-widest text-cyan">
                Criterios de selección
              </motion.p>
              <motion.h2 variants={fadeInUp} className="font-display font-bold leading-tight text-white" style={{ fontSize: "clamp(26px, 3vw, 42px)" }}>
                ¿Qué hace a un
                <br />
                <span className="text-shimmer">squad de Zenit?</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="mt-4 font-sans text-lg leading-relaxed text-muted-foreground">
                Kaizen evalúa el equipo completo, no a cada integrante. El nivel de madurez del squad determina los proyectos a los que accede — no si entra o no a la plataforma.
              </motion.p>
              <motion.p variants={fadeInUp} className="mt-4 font-sans text-sm leading-relaxed text-muted-foreground">
                ¿Tu squad tiene juniors? <Link href="/talentpath" className="text-cyan hover:text-cyan/80 underline underline-offset-2">TalentPath</Link> los incorpora automáticamente a proyectos reales junto al equipo senior. Crecen, generan ingresos para el squad, y cuando están listos — son parte plena.
              </motion.p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              className="flex flex-col gap-3"
            >
              {[
                "3+ engineers con skills complementarios",
                "Portfolio público o GitHub con productos entregados",
                "Comunicación en inglés (B2+ o superior)",
                "Track record de entregas en fecha",
                "Async-ready y remote-native",
                "Mínimo una especialidad full-stack o vertical",
              ].map((req) => (
                <motion.div
                  key={req}
                  variants={fadeInUp}
                  className="flex items-start gap-3 rounded-xl border border-white/6 bg-card px-5 py-4"
                >
                  <CheckCircle2 size={18} className="shrink-0 text-cyan mt-0.5" />
                  <span className="font-sans text-sm font-medium text-white/80">{req}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-card border border-white/6">
            <div className="pointer-events-none absolute inset-0" aria-hidden>
              <div className="absolute -top-32 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-teal/8 blur-[100px] animate-orb-2" />
              <div className="absolute top-0 left-0 h-px w-32 bg-gradient-to-r from-cyan/50 to-transparent" />
              <div className="absolute top-0 left-0 h-32 w-px bg-gradient-to-b from-cyan/50 to-transparent" />
              <div className="absolute bottom-0 right-0 h-px w-32 bg-gradient-to-l from-teal/50 to-transparent" />
              <div className="absolute bottom-0 right-0 h-32 w-px bg-gradient-to-t from-teal/50 to-transparent" />
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              className="relative flex flex-col items-center gap-6 px-8 py-20 text-center md:px-16 md:py-24"
            >
              <motion.p variants={fadeInUp} className="font-sans text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                Registrate ahora
              </motion.p>
              <motion.h2
                variants={fadeInUp}
                className="font-display font-bold leading-tight text-white"
                style={{ fontSize: "clamp(26px, 3vw, 42px)" }}
              >
                Tu ZenitRank empieza
                <br />
                <span className="text-shimmer">desde el primer milestone.</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="max-w-md font-sans text-lg text-muted-foreground">
                La aplicación toma 10 minutos. Aprobación en 48 horas. Primer match la misma semana.
              </motion.p>
              <motion.div variants={fadeInUp}>
                <Link
                  href="/get-started"
                  className="group inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-sans text-base font-semibold text-background transition-all duration-200 hover:bg-white/90 hover:shadow-[0_0_28px_rgba(255,255,255,0.2)]"
                >
                  Registrar mi squad
                  <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
