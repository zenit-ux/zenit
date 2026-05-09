"use client";

import { motion } from "framer-motion";
import { staggerContainer, scaleIn } from "@/lib/motionVariants";

/* ─── Kaizen Discovery mini-card ────────────────────────────── */

function KaizenDiscoveryCard() {
  const steps = [
    { role: "CEO Interview", duration: "60 min", done: true },
    { role: "CTO Interview", duration: "90 min", done: true },
    { role: "PM Interview",  duration: "45 min", done: false },
  ];

  return (
    <div className="rounded-2xl border border-teal/15 bg-card/80 backdrop-blur-md p-5 h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
          style={{
            background: "linear-gradient(135deg, #0d9488, #0f766e)",
            boxShadow: "0 0 20px rgba(13,148,136,0.45)",
          }}
        >
          <span className="font-mono text-sm font-bold text-white">K</span>
        </div>
        <div>
          <p className="font-sans text-sm font-semibold text-white">Kaizen Discovery</p>
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            Semana 1 — Discovery
          </p>
        </div>
      </div>

      {/* Steps */}
      <div className="flex flex-col gap-2 flex-1">
        {steps.map((step, i) => (
          <div
            key={step.role}
            className="flex items-center justify-between rounded-lg border border-white/5 bg-background/50 px-3 py-2"
          >
            <div className="flex items-center gap-2">
              <div
                className={`h-1.5 w-1.5 rounded-full ${
                  step.done ? "bg-teal shadow-[0_0_6px_rgba(13,148,136,0.8)]" : "bg-white/20"
                }`}
              />
              <span className="font-sans text-xs font-medium text-white/80">{step.role}</span>
            </div>
            <span className="font-mono text-[10px] text-muted-foreground">{step.duration}</span>
          </div>
        ))}
      </div>

      {/* Product Brain output */}
      <div className="mt-3 rounded-lg border border-gold/20 bg-gold/5 px-3 py-2.5">
        <div className="flex items-center gap-2">
          <div className="h-1 w-1 rounded-full bg-gold animate-pulse" />
          <p className="font-sans text-[11px] font-semibold text-gold">
            Product Brain v1.0 generado
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─── SafePay mini-card ──────────────────────────────────────── */

function SafePayCard() {
  const milestones = [
    { label: "Escrow",  week: "S1",  amount: "$60k",  state: "locked"   },
    { label: "M1",      week: "S4",  amount: "$15k",  state: "released" },
    { label: "M2",      week: "S8",  amount: "$15k",  state: "released" },
    { label: "M3",      week: "S12", amount: "$30k",  state: "pending"  },
  ];

  const stateStyle: Record<string, string> = {
    locked:   "border-gold/25 bg-gold/8 text-gold",
    released: "border-teal/25 bg-teal/8 text-teal",
    pending:  "border-white/8 bg-white/3 text-white/35",
  };

  return (
    <div className="rounded-2xl border border-gold/15 bg-card/80 backdrop-blur-md p-5 h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-gold">
            SafePay
          </p>
          <p className="font-sans text-sm font-semibold text-white mt-0.5">
            Proyecto $60k protegido
          </p>
        </div>
        <span className="rounded-full border border-gold/20 bg-gold/8 px-2.5 py-1 font-mono text-[10px] font-bold text-gold">
          Activo
        </span>
      </div>

      {/* Milestone row */}
      <div className="flex gap-1.5 mb-4">
        {milestones.map((m) => (
          <div
            key={m.label}
            className={`flex flex-1 flex-col items-center rounded-lg border px-1 py-2 ${stateStyle[m.state]}`}
          >
            <span className="font-mono text-[9px] font-bold uppercase">{m.week}</span>
            <span className="font-sans text-[10px] font-semibold mt-0.5">{m.label}</span>
            <span className="font-mono text-[9px] mt-0.5 opacity-80">{m.amount}</span>
          </div>
        ))}
      </div>

      {/* Progress */}
      <div className="mt-auto rounded-lg border border-white/5 bg-background/50 px-3 py-2.5">
        <div className="mb-1.5 flex justify-between">
          <span className="font-sans text-[11px] text-muted-foreground">Progreso</span>
          <span className="font-mono text-[11px] font-bold text-teal">50% liberado</span>
        </div>
        <div className="h-1.5 w-full rounded-full bg-white/6">
          <div className="h-full w-1/2 rounded-full bg-teal shadow-[0_0_8px_rgba(13,148,136,0.5)]" />
        </div>
      </div>
    </div>
  );
}

/* ─── Squad Match mini-card ──────────────────────────────────── */

function SquadMatchCard() {
  const squads = [
    {
      name:   "Código Sur",
      match:  92,
      skills: ["React", "Node", "PG"],
      rating: "4.8",
      badge:  "★★",
    },
    {
      name:   "DevTeam",
      match:  88,
      skills: ["Vue", "Go", "Redis"],
      rating: "4.6",
      badge:  "★",
    },
  ];

  return (
    <div className="rounded-2xl border border-cyan/15 bg-card/80 backdrop-blur-md p-5 h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-cyan">
            Kaizen Match
          </p>
          <p className="font-sans text-sm font-semibold text-white mt-0.5">
            2 squads seleccionados
          </p>
        </div>
        <span className="rounded-full border border-cyan/20 bg-cyan/8 px-2.5 py-1 font-mono text-[10px] font-bold text-cyan">
          48h
        </span>
      </div>

      {/* Squad cards */}
      <div className="flex flex-col gap-2.5 flex-1">
        {squads.map((sq) => (
          <div
            key={sq.name}
            className="rounded-xl border border-white/6 bg-background/50 p-3 transition-colors hover:border-cyan/20"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-teal/20 bg-teal/10">
                  <span className="font-mono text-xs font-bold text-teal">
                    {sq.name[0]}
                  </span>
                </div>
                <span className="font-sans text-sm font-semibold text-white">
                  {sq.name}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="font-mono text-[10px] text-gold">{sq.badge}</span>
                <span className="font-mono text-[11px] text-white/60">{sq.rating}★</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-1">
                {sq.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded bg-white/5 px-1.5 py-0.5 font-mono text-[9px] text-white/45"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <span className="font-mono text-[11px] font-bold text-cyan">
                {sq.match}% fit
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <p className="mt-3 font-sans text-[10px] text-muted-foreground text-center">
        Kaizen recomienda · vos elegís
      </p>
    </div>
  );
}

/* ─── Main export ────────────────────────────────────────────── */

export function HeroVisuals() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="mt-16 w-full max-w-5xl grid grid-cols-1 gap-4 sm:grid-cols-3"
    >
      <motion.div variants={scaleIn} custom={0} className="min-h-[280px]">
        <KaizenDiscoveryCard />
      </motion.div>
      <motion.div variants={scaleIn} custom={1} className="min-h-[280px]">
        <SafePayCard />
      </motion.div>
      <motion.div variants={scaleIn} custom={2} className="min-h-[280px]">
        <SquadMatchCard />
      </motion.div>
    </motion.div>
  );
}
