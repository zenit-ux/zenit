"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  staggerContainer,
  fadeInUp,
  scaleIn,
  slideInRight,
  defaultViewport,
} from "@/lib/motionVariants";
import {
  ArrowRight,
  CheckCircle2,
  Plus,
  Trash2,
  Shield,
  Star,
  Zap,
  Clock,
  Users,
  TrendingUp,
} from "lucide-react";

/* ─── Types ───────────────────────────────────────────────── */

interface Member {
  id: string;
  nombre: string;
  rol: string;
  linkedin: string;
}

interface FormErrors {
  squadName?: string;
  members?: Record<string, { nombre?: string; rol?: string; linkedin?: string }>;
  stacks?: string;
  proyectoNombre?: string;
  proyectoDesc?: string;
  email?: string;
  terms?: string;
}

/* ─── Constants ───────────────────────────────────────────── */

const STACKS = ["React / Next.js", "Node.js", "Python", "React Native", "Flutter", "Otro"];

const STEPS = [
  {
    n: "01",
    icon: Users,
    title: "Kaizen revisa tu squad",
    body: "Verificamos perfil, stack y proyecto destacado contra criterios objetivos. No es una entrevista — es una revisión de señales reales.",
    accent: "text-cyan",
    glow: "rgba(0,180,216,0.15)",
    border: "border-cyan/20",
  },
  {
    n: "02",
    icon: Clock,
    title: "Te notificamos cuando abramos",
    body: "Los primeros squads registrados tienen prioridad de acceso. Te avisamos por email cuando el marketplace esté activo.",
    accent: "text-teal",
    glow: "rgba(13,148,136,0.15)",
    border: "border-teal/20",
  },
  {
    n: "03",
    icon: Shield,
    title: "Primeros proyectos con SafePay",
    body: "Cada milestone tiene criterios definidos antes de arrancar. SafePay retiene el pago hasta que Kaizen valida la entrega.",
    accent: "text-gold",
    glow: "rgba(245,158,11,0.15)",
    border: "border-gold/20",
  },
];

const CRITERIA = [
  { ok: true,  text: "Equipos de 2 a 4 personas que ya trabajaron juntos" },
  { ok: true,  text: "Nivel demostrable — Kaizen calibra la madurez promedio del equipo" },
  { ok: true,  text: "Al menos un proyecto entregado documentable" },
  { ok: true,  text: "Stack en React/Next.js, Node, Python o mobile" },
  { ok: true,  text: "Disponibilidad para proyectos de 4 a 12 semanas" },
  { ok: false, text: "Perfiles sueltos sin historial de entrega como equipo" },
  { ok: false, text: "Equipos sin ningún entregable documentable en producción" },
];

const BADGES = [
  {
    symbol: "◆",
    name: "Validado",
    color: "#94a3b8",
    glow: "rgba(148,163,184,0.12)",
    border: "border-white/15",
    req: "Perfil completo · LinkedIn verificado",
    current: true,
  },
  {
    symbol: "★",
    name: "Confiable",
    color: "#0d9488",
    glow: "rgba(13,148,136,0.18)",
    border: "border-teal/25",
    req: "1+ milestone · >80% on-time · Score >7",
    current: false,
  },
  {
    symbol: "✓",
    name: "Verificado",
    color: "#f59e0b",
    glow: "rgba(245,158,11,0.18)",
    border: "border-gold/25",
    req: "5+ milestones · >90% on-time · 2+ clientes",
    current: false,
  },
  {
    symbol: "★★",
    name: "Elite",
    color: "#00b4d8",
    glow: "rgba(0,180,216,0.18)",
    border: "border-cyan/25",
    req: "15+ milestones · >95% on-time · 5+ clientes",
    current: false,
  },
];

/* ─── Squad Profile Mockup ────────────────────────────────── */

function SquadProfileMockup() {
  return (
    <div
      role="img"
      aria-label="Vista previa de perfil de squad en Zenit con ZenitRank Validado y SafePay activo"
      className="relative"
    >
      {/* Glow behind card */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 rounded-3xl"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(13,148,136,0.18) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
        aria-hidden
      />

      <div
        className="overflow-hidden rounded-2xl border border-teal/20"
        style={{ background: "linear-gradient(135deg, #040e0e 0%, #061212 100%)" }}
      >
        {/* Card header */}
        <div className="flex items-center justify-between border-b border-white/6 px-5 py-4" style={{ background: "#020c0b" }}>
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-teal/30 bg-teal/10">
              <span className="font-mono text-[10px] font-bold text-teal">CS</span>
            </div>
            <div>
              <p className="font-mono text-sm font-bold text-white">Código Sur</p>
              <p className="font-mono text-[10px] text-muted-foreground">3 integrantes</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 rounded-full border border-teal/30 bg-teal/10 px-2.5 py-1">
            <span className="font-mono text-[10px] font-bold text-teal">◆ Validado</span>
          </div>
        </div>

        {/* Stack */}
        <div className="border-b border-white/5 px-5 py-4">
          <p className="mb-2 font-mono text-[9px] uppercase tracking-widest text-muted-foreground">Stack</p>
          <div className="flex flex-wrap gap-1.5">
            {["React", "Next.js", "Node.js", "AWS"].map((t) => (
              <span key={t} className="rounded border border-cyan/20 bg-cyan/6 px-2 py-0.5 font-mono text-[10px] text-cyan">{t}</span>
            ))}
          </div>
        </div>

        {/* ZenitRank progress */}
        <div className="border-b border-white/5 px-5 py-4">
          <div className="mb-3 flex items-center justify-between">
            <p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">ZenitRank</p>
            <span className="font-mono text-[9px] text-teal">En progreso</span>
          </div>
          <div className="flex items-center gap-1">
            {["◆", "★", "✓", "★★"].map((b, i) => (
              <div key={b} className="flex items-center gap-1">
                <div className={`flex h-7 w-7 items-center justify-center rounded-lg font-mono text-xs font-bold ${i === 0 ? "border border-teal/30 bg-teal/15 text-teal" : "border border-white/8 bg-white/3 text-white/20"}`}>
                  {b}
                </div>
                {i < 3 && <div className="h-px w-3 bg-white/10" />}
              </div>
            ))}
          </div>
        </div>

        {/* SafePay status */}
        <div className="px-5 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Shield size={12} className="text-gold" />
              <p className="font-mono text-[10px] font-bold text-white">SafePay</p>
            </div>
            <span className="rounded-full bg-gold/10 px-2 py-0.5 font-mono text-[9px] font-bold text-gold">Activo</span>
          </div>
          <p className="mt-2 font-mono text-[9px] leading-relaxed text-muted-foreground">
            Primer milestone pendiente de asignación. El pago queda en escrow hasta que Kaizen valida la entrega.
          </p>
        </div>
      </div>

      {/* Floating milestone card */}
      <motion.div
        initial={{ opacity: 0, y: 12, x: 12 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ delay: 0.8, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        className="absolute -bottom-4 -right-4 w-44 overflow-hidden rounded-xl border border-gold/25 shadow-[0_16px_40px_rgba(0,0,0,0.5)]"
        style={{ background: "#040e0e" }}
      >
        <div className="flex items-center gap-2 border-b border-white/5 px-3 py-2">
          <Zap size={10} className="text-gold" />
          <span className="font-mono text-[9px] font-bold text-gold">Milestone entrante</span>
        </div>
        <div className="px-3 py-2.5">
          <p className="font-mono text-[11px] font-bold text-white">M1 — Backend API</p>
          <p className="font-mono text-[9px] text-muted-foreground">12 días · $8,400</p>
          <div className="mt-2 flex items-center gap-1">
            <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/8">
              <div className="h-full w-0 rounded-full bg-gold" />
            </div>
            <span className="font-mono text-[8px] text-muted-foreground">Pendiente</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ─── SuccessView ─────────────────────────────────────────── */

function SuccessView() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
      className="flex flex-col items-center gap-8 py-20 text-center"
    >
      <div className="relative">
        <div
          className="pointer-events-none absolute inset-0 -z-10 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(13,148,136,0.3) 0%, transparent 70%)", filter: "blur(20px)" }}
          aria-hidden
        />
        <div className="flex h-20 w-20 items-center justify-center rounded-full border border-teal/30 bg-teal/10">
          <CheckCircle2 size={36} className="text-teal" />
        </div>
      </div>
      <div>
        <h2 className="mb-3 font-display font-bold text-white" style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>
          Squad registrado.
        </h2>
        <p className="font-sans text-lg text-muted-foreground">
          Entrás a la lista de acceso anticipado.
        </p>
      </div>
      <div className="max-w-sm rounded-2xl border border-white/8 bg-white/3 p-6">
        <p className="font-mono text-sm leading-relaxed text-muted-foreground">
          Te notificamos cuando abramos el marketplace. Sin spam — solo el aviso cuando estemos listos para los primeros proyectos.
        </p>
      </div>
    </motion.div>
  );
}

/* ─── Page ────────────────────────────────────────────────── */

export default function PreRegistroPage() {
  const [squadName, setSquadName] = useState("");
  const [members, setMembers] = useState<Member[]>([
    { id: "1", nombre: "", rol: "", linkedin: "" },
    { id: "2", nombre: "", rol: "", linkedin: "" },
  ]);
  const [selectedStacks, setSelectedStacks] = useState<string[]>([]);
  const [proyectoNombre, setProyectoNombre] = useState("");
  const [proyectoDesc, setProyectoDesc] = useState("");
  const [proyectoLink, setProyectoLink] = useState("");
  const [email, setEmail] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const nextIdRef = useRef(3);

  function addMember() {
    if (members.length >= 4) return;
    setMembers((prev) => [
      ...prev,
      { id: String(nextIdRef.current++), nombre: "", rol: "", linkedin: "" },
    ]);
  }

  function removeMember(id: string) {
    if (members.length <= 2) return;
    setMembers((prev) => prev.filter((m) => m.id !== id));
  }

  function updateMember(id: string, field: keyof Omit<Member, "id">, value: string) {
    setMembers((prev) => prev.map((m) => (m.id === id ? { ...m, [field]: value } : m)));
  }

  function toggleStack(stack: string) {
    setSelectedStacks((prev) =>
      prev.includes(stack) ? prev.filter((s) => s !== stack) : [...prev, stack]
    );
  }

  function validate(): FormErrors {
    const errs: FormErrors = {};

    if (!squadName.trim()) errs.squadName = "El nombre del squad es obligatorio.";

    const memberErrs: FormErrors["members"] = {};
    members.forEach((m) => {
      const me: { nombre?: string; rol?: string; linkedin?: string } = {};
      if (!m.nombre.trim()) me.nombre = "Obligatorio.";
      if (!m.rol.trim()) me.rol = "Obligatorio.";
      if (!m.linkedin.trim()) me.linkedin = "Obligatorio.";
      if (Object.keys(me).length) memberErrs![m.id] = me;
    });
    if (Object.keys(memberErrs).length) errs.members = memberErrs;

    if (selectedStacks.length === 0) errs.stacks = "Seleccioná al menos un stack.";

    if (!proyectoNombre.trim()) errs.proyectoNombre = "El nombre del proyecto es obligatorio.";
    if (!proyectoDesc.trim()) errs.proyectoDesc = "La descripción es obligatoria.";
    if (proyectoDesc.length > 280) errs.proyectoDesc = "Máximo 280 caracteres.";

    if (!email.trim()) {
      errs.email = "El email es obligatorio.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = "Email inválido.";
    }

    if (!acceptedTerms) errs.terms = "Debés aceptar los términos para continuar.";

    return errs;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setSubmitted(true);
  }

  /* ─── Render ──────────────────────────────────────────────── */

  return (
    <main className="min-h-screen bg-background pt-20">

      {/* ━━━━━ HERO ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative overflow-hidden pb-24 pt-20 lg:pb-32 lg:pt-28">

        {/* Atmospheric background */}
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse 100% 70% at 50% -10%, rgba(13,148,136,0.13) 0%, transparent 65%)" }}
          />
          <div
            className="absolute right-0 top-0 h-[600px] w-[600px] -translate-y-1/4 translate-x-1/4 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(0,180,216,0.07) 0%, transparent 65%)", filter: "blur(80px)" }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-12">

            {/* ── Left: Copy ── */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-6"
            >
              {/* Eyebrow */}
              <motion.div variants={fadeInUp}>
                <span className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/8 px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-widest text-teal">
                  Para squads de desarrollo · Acceso anticipado
                </span>
              </motion.div>

              {/* H1 */}
              <motion.h1
                variants={fadeInUp}
                className="font-display font-bold leading-[1.05] text-white"
                style={{ fontSize: "clamp(28px, 3.8vw, 52px)" }}
              >
                ¿No encontrás trabajo?
                <br />
                <span className="text-shimmer">Zenit vino a solucionar eso.</span>
              </motion.h1>

              {/* Subheadline */}
              <motion.div variants={fadeInUp} className="max-w-lg space-y-4">
                <p className="font-sans text-lg leading-relaxed text-muted-foreground">
                  No es que la IA te reemplazó. Es que las empresas ampliaron demasiado
                  y ahora no pueden sostenerlo. Zenit resuelve eso para todos.
                </p>
                <p className="font-sans text-base leading-relaxed text-white/80">
                  Las empresas contratan equipos por proyecto — sin carga de nómina fija.
                  Vos cobrás más por milestone, trabajás con múltiples clientes en paralelo,
                  y SafePay garantiza que cobrás lo que acordamos.
                </p>
                <p className="font-display text-lg font-bold text-white">
                  No es freelance.{" "}
                  <span className="text-shimmer-gold">Es tu squad como un activo productivo.</span>
                </p>
              </motion.div>

              {/* CTAs */}
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <a
                  href="#form"
                  className="inline-flex items-center gap-2 rounded-xl bg-teal px-7 py-3.5 font-mono text-sm font-bold text-white transition-opacity hover:opacity-90"
                >
                  Pre-registrar mi squad
                  <ArrowRight size={15} />
                </a>
                <a
                  href="#criterios"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/4 px-7 py-3.5 font-mono text-sm font-bold text-white/80 transition-colors hover:border-white/20 hover:text-white"
                >
                  Ver criterios
                </a>
              </motion.div>

              {/* Trust note */}
              <motion.p variants={fadeInUp} className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                <Shield size={11} className="text-teal" />
                Sin spam · Solo el aviso de apertura
              </motion.p>
            </motion.div>

            {/* ── Right: Squad profile mockup ── */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              animate="visible"
              className="relative hidden lg:block"
            >
              <SquadProfileMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ━━━━━ STATS STRIP ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="border-y border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={defaultViewport}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-3 divide-x divide-white/5"
          >
            {[
              { icon: TrendingUp, label: "ZenitRank", value: "100% objetivo", sub: "Basado en resultados reales" },
              { icon: Shield,     label: "SafePay",   value: "Por milestone",  sub: "Escrow hasta validación" },
              { icon: Users,      label: "Squads",    value: "Todo nivel",     sub: "Kaizen calibra la madurez" },
            ].map(({ icon: Icon, label, value, sub }) => (
              <div key={label} className="flex flex-col items-center gap-1 py-6 text-center">
                <Icon size={14} className="mb-1 text-muted-foreground" />
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{label}</p>
                <p className="font-mono text-sm font-bold text-white">{value}</p>
                <p className="hidden font-mono text-[10px] text-muted-foreground sm:block">{sub}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ━━━━━ CÓMO FUNCIONA ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="mb-16 text-center"
          >
            <motion.p variants={fadeInUp} className="mb-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Qué pasa después
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="font-display font-bold text-white"
              style={{ fontSize: "clamp(26px, 3.5vw, 46px)" }}
            >
              Tres pasos. Sin fricción.
            </motion.h2>
          </motion.div>

          <div className="relative grid gap-6 md:grid-cols-3">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={defaultViewport}
                transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
                className="relative flex flex-col gap-5 rounded-2xl border border-white/8 bg-white/3 p-6"
              >
                {/* Glow */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl"
                  style={{ background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${step.glow} 0%, transparent 70%)` }}
                  aria-hidden
                />

                {/* Number + icon */}
                <div className="relative flex items-center justify-between">
                  <span className={`font-mono text-4xl font-bold ${step.accent}`} style={{ opacity: 0.25 }}>
                    {step.n}
                  </span>
                  <div className={`flex h-9 w-9 items-center justify-center rounded-xl border ${step.border} bg-white/3`}>
                    <step.icon size={16} className={step.accent} />
                  </div>
                </div>

                <div>
                  <h3 className="mb-2 font-display text-lg font-bold text-white">{step.title}</h3>
                  <p className="font-sans text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━ A QUIÉN BUSCAMOS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="criterios" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">

            {/* Left: Criteria */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
            >
              <motion.p variants={fadeInUp} className="mb-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Criterios de selección
              </motion.p>
              <motion.h2
                variants={fadeInUp}
                className="mb-8 font-display font-bold text-white"
                style={{ fontSize: "clamp(26px, 3.5vw, 44px)" }}
              >
                A quién buscamos
              </motion.h2>

              <motion.ul variants={staggerContainer} className="space-y-3">
                {CRITERIA.map((c, i) => (
                  <motion.li
                    key={i}
                    variants={fadeInUp}
                    className="flex items-start gap-3"
                  >
                    <span
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                        c.ok
                          ? "border border-teal/30 bg-teal/10"
                          : "border border-red-500/20 bg-red-500/8"
                      }`}
                    >
                      {c.ok
                        ? <CheckCircle2 size={11} className="text-teal" />
                        : <span className="font-mono text-[9px] font-bold text-red-400">✕</span>
                      }
                    </span>
                    <span className={`font-sans text-sm leading-relaxed ${c.ok ? "text-white/80" : "text-muted-foreground line-through decoration-red-500/40"}`}>
                      {c.text}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Right: TalentPath callout */}
            <div className="flex flex-col gap-6">
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={defaultViewport}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
                className="relative overflow-hidden rounded-2xl border border-gold/20 p-8"
                style={{ background: "linear-gradient(135deg, rgba(245,158,11,0.05) 0%, rgba(245,158,11,0.02) 100%)" }}
              >
                <div
                  className="pointer-events-none absolute right-0 top-0 h-40 w-40 -translate-y-1/4 translate-x-1/4 rounded-full"
                  style={{ background: "radial-gradient(circle, rgba(245,158,11,0.12) 0%, transparent 70%)", filter: "blur(40px)" }}
                  aria-hidden
                />
                <div className="relative">
                  <div className="mb-4 flex items-center gap-2">
                    <Star size={14} className="text-gold" />
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-gold">
                      Desarrollador junior
                    </span>
                  </div>
                  <h3 className="mb-3 font-display text-2xl font-bold text-white">
                    TalentPath es para vos.
                  </h3>
                  <p className="mb-6 font-sans text-sm leading-relaxed text-muted-foreground">
                    Esta fase del marketplace requiere senioridad comprobable. Pero TalentPath es
                    el programa donde squads senior te incorporan, supervisan y certifican mientras
                    trabajás en proyectos reales. Cuando acumulás historial, calificás para el marketplace.
                  </p>
                  <a
                    href="/talentpath"
                    className="inline-flex items-center gap-2 font-mono text-sm font-bold text-gold transition-opacity hover:opacity-80"
                  >
                    Conocer TalentPath
                    <ArrowRight size={14} />
                  </a>
                </div>
              </motion.div>

              {/* Quick note */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={defaultViewport}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="rounded-2xl border border-white/8 bg-white/3 p-5"
              >
                <p className="font-mono text-xs leading-relaxed text-muted-foreground">
                  <span className="text-white">¿Y si mi equipo tiene juniors?</span>
                  {" "}Kaizen evalúa el promedio del equipo, no a cada integrante. Juniors que entran con un equipo senior se incorporan en TalentPath — trabajan en proyectos reales, el squad gana ingresos extra, y el estándar de entrega se mantiene para todos.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━ ZENITRANK ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative overflow-hidden py-24">

        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(13,148,136,0.07) 0%, transparent 70%)" }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="mb-16 text-center"
          >
            <motion.p variants={fadeInUp} className="mb-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Sistema de reputación
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="mb-4 font-display font-bold text-white"
              style={{ fontSize: "clamp(26px, 3.5vw, 46px)" }}
            >
              ZenitRank — tu historial
              <br />
              <span className="text-shimmer">empieza hoy.</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="mx-auto max-w-lg font-sans text-muted-foreground">
              No hay rating subjetivo. ZenitRank mide on-time rate, response time y criterios
              cumplidos — calculado automáticamente por Kaizen después de cada milestone.
              Los badges no se compran. Se ganan con resultados.
            </motion.p>
          </motion.div>

          {/* Badge progression */}
          <div className="relative">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {BADGES.map((badge, i) => (
                <motion.div
                  key={badge.name}
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={defaultViewport}
                  transition={{ delay: i * 0.1 }}
                  className={`relative flex flex-col gap-4 overflow-hidden rounded-2xl border ${badge.border} p-6`}
                  style={{ background: badge.current ? "rgba(13,148,136,0.07)" : "rgba(255,255,255,0.02)" }}
                >
                  {/* Glow */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-2xl"
                    style={{ background: `radial-gradient(ellipse 80% 50% at 50% 0%, ${badge.glow} 0%, transparent 70%)` }}
                    aria-hidden
                  />

                  {/* "Entrás aquí" tag */}
                  {badge.current && (
                    <div className="absolute right-3 top-3 rounded-full border border-teal/30 bg-teal/10 px-2 py-0.5">
                      <span className="font-mono text-[8px] font-bold uppercase tracking-wider text-teal">
                        Entrás aquí
                      </span>
                    </div>
                  )}

                  <div className="relative">
                    <span className="font-mono text-3xl font-bold" style={{ color: badge.color }}>
                      {badge.symbol}
                    </span>
                  </div>

                  <div>
                    <p className="mb-1.5 font-mono text-sm font-bold" style={{ color: badge.color }}>
                      {badge.name}
                    </p>
                    <p className="font-mono text-[11px] leading-relaxed text-muted-foreground">
                      {badge.req}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={defaultViewport}
            transition={{ delay: 0.5 }}
            className="mt-12 flex justify-center"
          >
            <blockquote className="max-w-xl border-l-2 border-teal/40 pl-6">
              <p className="font-sans text-base italic leading-relaxed text-white/70">
                &ldquo;Los squads que entran en esta fase arrancan con historial desde el primer proyecto. No empezás de cero — empezás con ventaja.&rdquo;
              </p>
              <cite className="mt-2 block font-mono text-xs text-muted-foreground not-italic">
                — Kaizen, agente de producto de Zenit
              </cite>
            </blockquote>
          </motion.div>

        </div>
      </section>

      {/* ━━━━━ FORM ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="form" className="py-24">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="mb-10 text-center"
          >
            <motion.div variants={fadeInUp} className="mb-3 flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/8 px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-widest text-teal">
                <Shield size={11} />
                Acceso anticipado
              </span>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="mb-2 font-display font-bold text-white"
              style={{ fontSize: "clamp(26px, 3.5vw, 44px)" }}
            >
              Registrá tu squad
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-sans text-muted-foreground">
              Los primeros squads verificados arrancan con historial desde el día uno.
            </motion.p>
          </motion.div>

          {submitted ? (
            <SuccessView />
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={defaultViewport}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
              onSubmit={handleSubmit}
              noValidate
              className="space-y-8 rounded-2xl border border-white/8 bg-white/3 p-6 sm:p-8"
              aria-label="Formulario de pre-registro de squad"
            >

              {/* Squad name */}
              <div className="space-y-1.5">
                <label htmlFor="squad-name" className="block font-mono text-sm font-bold text-white">
                  Nombre del squad <span aria-hidden="true" className="text-teal">*</span>
                </label>
                <input
                  id="squad-name"
                  type="text"
                  value={squadName}
                  onChange={(e) => setSquadName(e.target.value)}
                  placeholder="Ej. Código Sur"
                  autoComplete="organization"
                  aria-required="true"
                  aria-invalid={!!errors.squadName}
                  aria-describedby={errors.squadName ? "squad-name-error" : undefined}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-sans text-sm text-white placeholder:text-muted-foreground focus:border-teal/50 focus:outline-none"
                />
                {errors.squadName && (
                  <p id="squad-name-error" role="alert" className="font-mono text-xs text-red-400">
                    {errors.squadName}
                  </p>
                )}
              </div>

              {/* Members */}
              <fieldset>
                <legend className="mb-4 font-mono text-sm font-bold text-white">
                  Integrantes{" "}
                  <span className="font-normal text-muted-foreground">(mínimo 2, máximo 4)</span>
                </legend>

                <div className="space-y-4">
                  <AnimatePresence initial={false}>
                    {members.map((member, idx) => (
                      <motion.div
                        key={member.id}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] as const }}
                        className="overflow-hidden rounded-xl border border-white/8 bg-white/3 p-4"
                      >
                        <div className="mb-3 flex items-center justify-between">
                          <span className="font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground">
                            Integrante {idx + 1}
                          </span>
                          {members.length > 2 && (
                            <button
                              type="button"
                              onClick={() => removeMember(member.id)}
                              aria-label={`Eliminar integrante ${idx + 1}`}
                              className="flex items-center gap-1.5 rounded-lg border border-white/8 px-2.5 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:border-red-400/30 hover:text-red-400"
                            >
                              <Trash2 size={11} />
                              Quitar
                            </button>
                          )}
                        </div>

                        <div className="grid gap-3 sm:grid-cols-3">
                          {/* Nombre */}
                          <div className="space-y-1">
                            <label htmlFor={`member-${member.id}-nombre`} className="block font-mono text-xs text-muted-foreground">
                              Nombre <span aria-hidden="true" className="text-teal">*</span>
                            </label>
                            <input
                              id={`member-${member.id}-nombre`}
                              type="text"
                              value={member.nombre}
                              onChange={(e) => updateMember(member.id, "nombre", e.target.value)}
                              placeholder="Juan García"
                              autoComplete="name"
                              aria-required="true"
                              aria-invalid={!!errors.members?.[member.id]?.nombre}
                              aria-describedby={errors.members?.[member.id]?.nombre ? `member-${member.id}-nombre-error` : undefined}
                              className="w-full rounded-lg border border-white/8 bg-white/5 px-3 py-2 font-sans text-sm text-white placeholder:text-muted-foreground focus:border-teal/50 focus:outline-none"
                            />
                            {errors.members?.[member.id]?.nombre && (
                              <p id={`member-${member.id}-nombre-error`} role="alert" className="font-mono text-[10px] text-red-400">
                                {errors.members[member.id].nombre}
                              </p>
                            )}
                          </div>

                          {/* Rol */}
                          <div className="space-y-1">
                            <label htmlFor={`member-${member.id}-rol`} className="block font-mono text-xs text-muted-foreground">
                              Rol <span aria-hidden="true" className="text-teal">*</span>
                            </label>
                            <input
                              id={`member-${member.id}-rol`}
                              type="text"
                              value={member.rol}
                              onChange={(e) => updateMember(member.id, "rol", e.target.value)}
                              placeholder="Backend Sr."
                              aria-required="true"
                              aria-invalid={!!errors.members?.[member.id]?.rol}
                              aria-describedby={errors.members?.[member.id]?.rol ? `member-${member.id}-rol-error` : undefined}
                              className="w-full rounded-lg border border-white/8 bg-white/5 px-3 py-2 font-sans text-sm text-white placeholder:text-muted-foreground focus:border-teal/50 focus:outline-none"
                            />
                            {errors.members?.[member.id]?.rol && (
                              <p id={`member-${member.id}-rol-error`} role="alert" className="font-mono text-[10px] text-red-400">
                                {errors.members[member.id].rol}
                              </p>
                            )}
                          </div>

                          {/* LinkedIn */}
                          <div className="space-y-1">
                            <label htmlFor={`member-${member.id}-linkedin`} className="block font-mono text-xs text-muted-foreground">
                              LinkedIn <span aria-hidden="true" className="text-teal">*</span>
                            </label>
                            <input
                              id={`member-${member.id}-linkedin`}
                              type="url"
                              value={member.linkedin}
                              onChange={(e) => updateMember(member.id, "linkedin", e.target.value)}
                              placeholder="linkedin.com/in/..."
                              aria-required="true"
                              aria-invalid={!!errors.members?.[member.id]?.linkedin}
                              aria-describedby={errors.members?.[member.id]?.linkedin ? `member-${member.id}-linkedin-error` : undefined}
                              className="w-full rounded-lg border border-white/8 bg-white/5 px-3 py-2 font-sans text-sm text-white placeholder:text-muted-foreground focus:border-teal/50 focus:outline-none"
                            />
                            {errors.members?.[member.id]?.linkedin && (
                              <p id={`member-${member.id}-linkedin-error`} role="alert" className="font-mono text-[10px] text-red-400">
                                {errors.members[member.id].linkedin}
                              </p>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {members.length < 4 && (
                  <button
                    type="button"
                    onClick={addMember}
                    className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-white/12 px-4 py-3 font-mono text-sm text-muted-foreground transition-colors hover:border-teal/40 hover:text-teal"
                  >
                    <Plus size={14} />
                    Agregar integrante
                  </button>
                )}
              </fieldset>

              {/* Stack */}
              <div className="space-y-3">
                <p id="stack-label" className="font-mono text-sm font-bold text-white">
                  Stack principal <span aria-hidden="true" className="text-teal">*</span>
                </p>
                <div
                  role="group"
                  aria-labelledby="stack-label"
                  aria-describedby={errors.stacks ? "stack-error" : undefined}
                  className="flex flex-wrap gap-2"
                >
                  {STACKS.map((stack) => {
                    const selected = selectedStacks.includes(stack);
                    return (
                      <button
                        key={stack}
                        type="button"
                        onClick={() => toggleStack(stack)}
                        aria-pressed={selected}
                        className={`rounded-full border px-4 py-2 font-mono text-xs font-bold transition-all ${
                          selected
                            ? "border-teal/50 bg-teal/15 text-teal"
                            : "border-white/10 bg-white/3 text-muted-foreground hover:border-white/20 hover:text-white"
                        }`}
                      >
                        {stack}
                      </button>
                    );
                  })}
                </div>
                {errors.stacks && (
                  <p id="stack-error" role="alert" className="font-mono text-xs text-red-400">
                    {errors.stacks}
                  </p>
                )}
              </div>

              {/* Proyecto destacado */}
              <fieldset className="space-y-4">
                <legend className="font-mono text-sm font-bold text-white">
                  Proyecto destacado
                </legend>

                <div className="space-y-1.5">
                  <label htmlFor="proyecto-nombre" className="block font-mono text-xs text-muted-foreground">
                    Nombre del proyecto <span aria-hidden="true" className="text-teal">*</span>
                  </label>
                  <input
                    id="proyecto-nombre"
                    type="text"
                    value={proyectoNombre}
                    onChange={(e) => setProyectoNombre(e.target.value)}
                    placeholder="Ej. Panel logístico en tiempo real"
                    aria-required="true"
                    aria-invalid={!!errors.proyectoNombre}
                    aria-describedby={errors.proyectoNombre ? "proyecto-nombre-error" : undefined}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-sans text-sm text-white placeholder:text-muted-foreground focus:border-teal/50 focus:outline-none"
                  />
                  {errors.proyectoNombre && (
                    <p id="proyecto-nombre-error" role="alert" className="font-mono text-xs text-red-400">
                      {errors.proyectoNombre}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label htmlFor="proyecto-desc" className="block font-mono text-xs text-muted-foreground">
                      Descripción breve <span aria-hidden="true" className="text-teal">*</span>
                    </label>
                    <span
                      className={`font-mono text-[10px] tabular-nums ${
                        proyectoDesc.length > 280 ? "text-red-400" : proyectoDesc.length > 250 ? "text-gold" : "text-muted-foreground"
                      }`}
                      aria-live="polite"
                      aria-atomic="true"
                    >
                      {proyectoDesc.length}/280
                    </span>
                  </div>
                  <textarea
                    id="proyecto-desc"
                    value={proyectoDesc}
                    onChange={(e) => setProyectoDesc(e.target.value)}
                    placeholder="¿Qué construyeron? ¿Cuál fue el desafío técnico? ¿Qué resultó?"
                    rows={4}
                    maxLength={300}
                    aria-required="true"
                    aria-invalid={!!errors.proyectoDesc}
                    aria-describedby={errors.proyectoDesc ? "proyecto-desc-error" : "proyecto-desc-hint"}
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-sans text-sm text-white placeholder:text-muted-foreground focus:border-teal/50 focus:outline-none"
                  />
                  <p id="proyecto-desc-hint" className="font-mono text-[10px] text-muted-foreground">
                    Qué construyeron, el desafío técnico principal y el resultado.
                  </p>
                  {errors.proyectoDesc && (
                    <p id="proyecto-desc-error" role="alert" className="font-mono text-xs text-red-400">
                      {errors.proyectoDesc}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="proyecto-link" className="block font-mono text-xs text-muted-foreground">
                    Link del proyecto{" "}
                    <span className="text-muted-foreground">(opcional)</span>
                  </label>
                  <input
                    id="proyecto-link"
                    type="url"
                    value={proyectoLink}
                    onChange={(e) => setProyectoLink(e.target.value)}
                    placeholder="https://github.com/... o https://..."
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-sans text-sm text-white placeholder:text-muted-foreground focus:border-teal/50 focus:outline-none"
                  />
                </div>
              </fieldset>

              {/* Email */}
              <div className="space-y-1.5">
                <label htmlFor="squad-email" className="block font-mono text-sm font-bold text-white">
                  Email de contacto <span aria-hidden="true" className="text-teal">*</span>
                </label>
                <input
                  id="squad-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="squad@ejemplo.com"
                  autoComplete="email"
                  aria-required="true"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "squad-email-error" : undefined}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-sans text-sm text-white placeholder:text-muted-foreground focus:border-teal/50 focus:outline-none"
                />
                {errors.email && (
                  <p id="squad-email-error" role="alert" className="font-mono text-xs text-red-400">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Terms */}
              <div className="space-y-1.5">
                <div className="flex items-start gap-3">
                  <div className="relative mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center">
                    <input
                      id="accept-terms"
                      type="checkbox"
                      checked={acceptedTerms}
                      onChange={(e) => setAcceptedTerms(e.target.checked)}
                      aria-required="true"
                      aria-invalid={!!errors.terms}
                      aria-describedby={errors.terms ? "terms-error" : undefined}
                      className="h-5 w-5 cursor-pointer appearance-none rounded border border-white/20 bg-white/5 checked:border-teal/50 checked:bg-teal/20 focus:outline-none"
                    />
                    {acceptedTerms && (
                      <CheckCircle2 size={12} className="pointer-events-none absolute text-teal" />
                    )}
                  </div>
                  <label htmlFor="accept-terms" className="cursor-pointer font-sans text-sm leading-relaxed text-muted-foreground">
                    He leído y acepto los{" "}
                    <a href="/terminos" className="text-teal underline-offset-2 hover:underline">
                      términos de uso
                    </a>{" "}
                    y la{" "}
                    <a href="/privacidad" className="text-teal underline-offset-2 hover:underline">
                      política de privacidad
                    </a>{" "}
                    de Zenit.
                  </label>
                </div>
                {errors.terms && (
                  <p id="terms-error" role="alert" className="ml-8 font-mono text-xs text-red-400">
                    {errors.terms}
                  </p>
                )}
              </div>

              {/* Submit */}
              <div className="space-y-3 pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-teal px-6 py-4 font-mono text-sm font-bold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Registrando...
                    </>
                  ) : (
                    <>
                      Pre-registrar mi squad
                      <ArrowRight size={15} />
                    </>
                  )}
                </button>
                <p className="text-center font-mono text-xs text-muted-foreground">
                  Te contactamos cuando abramos el acceso. Sin spam.
                </p>
              </div>

            </motion.form>
          )}
        </div>
      </section>

    </main>
  );
}
