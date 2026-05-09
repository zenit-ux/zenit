"use client";

import {
  Users,
  Zap,
  CheckCircle2,
  FileText,
  Shield,
  BarChart2,
  TrendingUp,
  Clock,
  Lock,
  Code2,
} from "lucide-react";

export function PlatformShowcase() {
  return (
    <section className="relative overflow-hidden py-28 bg-background">
      {/* Teal gradient background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(15,118,110,0.12) 0%, rgba(0,180,216,0.06) 60%, transparent 90%)",
          }}
        />
        <div
          className="absolute -top-32 right-1/4 h-[600px] w-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(15,118,110,0.18) 0%, transparent 65%)",
            filter: "blur(80px)",
            opacity: 0.4,
          }}
        />
        <div
          className="absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(0,180,216,0.12) 0%, transparent 65%)",
            filter: "blur(90px)",
            opacity: 0.3,
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div data-aos="fade-up" className="mb-20 flex flex-col items-center gap-3 text-center">
          <span className="font-sans text-sm font-semibold uppercase tracking-widest text-cyan">
            The Platform in Action
          </span>
          <h2
            className="font-display font-bold leading-tight text-white"
            style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}
          >
            Built to ship.{" "}
            <span className="text-shimmer">Built to trust.</span>
          </h2>
          <p className="max-w-2xl font-sans text-lg leading-relaxed text-muted-foreground">
            Every screen purpose-built for speed, clarity, and zero-friction collaboration.
          </p>
        </div>

        <div className="flex flex-col gap-16">

          {/* ─── Wireframe 1: Squad Dashboard ─── */}
          <div data-aos="fade-up" data-aos-delay="100">
            <div className="rounded-2xl border border-teal/25 bg-white/3 p-6 md:p-8">
              <div className="mb-6 flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="mb-1 font-mono text-xs font-semibold uppercase tracking-wider text-teal">
                    Wireframe 01
                  </p>
                  <h3 className="font-display text-xl font-bold text-white md:text-2xl">
                    Squad Dashboard
                  </h3>
                  <p className="mt-1 font-sans text-sm text-muted-foreground">
                    Real-time view of your active squad, milestones, and deliverables.
                  </p>
                </div>
                <div className="flex w-fit items-center gap-2 rounded-full border border-teal/30 bg-teal/10 px-3 py-1.5 mt-3 sm:mt-0">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal" />
                  <span className="font-mono text-[10px] font-semibold text-teal">Live View</span>
                </div>
              </div>

              {/* Metric cards */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {[
                  { icon: Users, label: "Squad Members", value: "4 active", pct: 80 },
                  { icon: Zap, label: "Current Sprint", value: "Week 3/6", pct: 50 },
                  { icon: CheckCircle2, label: "Milestones", value: "3 of 5 done", pct: 60 },
                ].map((card) => (
                  <div
                    key={card.label}
                    className="flex flex-col gap-3 rounded-xl border border-dashed border-teal/30 bg-teal/5 p-5"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-teal/25 bg-teal/10 text-teal">
                      <card.icon size={16} />
                    </div>
                    <div>
                      <div className="font-sans text-[11px] uppercase tracking-wider text-muted-foreground">
                        {card.label}
                      </div>
                      <div className="mt-1 font-display text-lg font-bold text-white">{card.value}</div>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-white/8">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-teal to-cyan"
                        style={{ width: `${card.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Activity list */}
              <div className="mt-4 flex flex-col gap-2">
                {[
                  "Design system delivered — Sprint 2",
                  "API integration reviewed & approved",
                  "Sprint retrospective scheduled — Wed",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/3 px-4 py-2.5"
                  >
                    <CheckCircle2 size={12} className="shrink-0 text-teal" />
                    <span className="font-sans text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ─── Wireframe 2: Brief Matching ─── */}
          <div data-aos="fade-up" data-aos-delay="100">
            <div className="rounded-2xl border border-cyan/25 bg-white/3 p-6 md:p-8">
              <div className="mb-6">
                <p className="mb-1 font-mono text-xs font-semibold uppercase tracking-wider text-cyan">
                  Wireframe 02
                </p>
                <h3 className="font-display text-xl font-bold text-white md:text-2xl">
                  Brief Matching
                </h3>
                <p className="mt-1 font-sans text-sm text-muted-foreground">
                  Post a brief and get matched with the best-fit squads within 48 hours.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Left: Brief summary */}
                <div className="rounded-xl border border-dashed border-cyan/30 bg-cyan/5 p-5">
                  <div className="mb-4 flex items-center gap-2">
                    <FileText size={14} className="text-cyan" />
                    <span className="font-mono text-xs font-semibold text-cyan">Your Brief</span>
                  </div>
                  {[
                    "Project type: SaaS MVP",
                    "Budget: $40K – $80K",
                    "Timeline: 8–12 weeks",
                    "Skills: React, Node.js, PostgreSQL",
                    "Team size: 3–5 devs",
                  ].map((line, i) => (
                    <div
                      key={i}
                      className="mb-2 flex items-center gap-2 rounded-md border border-white/5 bg-white/3 px-3 py-2"
                    >
                      <div className="h-1 w-1 shrink-0 rounded-full bg-cyan/60" />
                      <span className="font-sans text-xs text-muted-foreground">{line}</span>
                    </div>
                  ))}
                  <div className="mt-4 flex items-center gap-2 rounded-lg border border-cyan/20 bg-cyan/8 px-3 py-2">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan" />
                    <span className="font-mono text-[10px] font-semibold text-cyan">
                      Matching in progress...
                    </span>
                  </div>
                </div>

                {/* Right: Matched squads */}
                <div className="flex flex-col gap-3">
                  <p className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Matched Squads
                  </p>
                  {[
                    { name: "React & Node Squad", match: 98, flag: "🇦🇷" },
                    { name: "Full-Stack SaaS Team", match: 91, flag: "🇨🇴" },
                    { name: "Product Engineering Co", match: 85, flag: "🇧🇷" },
                  ].map((squad) => (
                    <div
                      key={squad.name}
                      className="flex items-center gap-4 rounded-xl border border-dashed border-cyan/20 bg-white/3 px-4 py-3"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan/10 text-sm">
                        {squad.flag}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="truncate font-sans text-sm font-semibold text-white">
                          {squad.name}
                        </div>
                        <div className="mt-1 h-1.5 w-full rounded-full bg-white/8">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-cyan to-teal"
                            style={{ width: `${squad.match}%` }}
                          />
                        </div>
                      </div>
                      <span className="shrink-0 font-mono text-xs font-bold text-cyan">
                        {squad.match}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ─── Wireframe 3: SafePay Flow ─── */}
          <div data-aos="fade-up" data-aos-delay="100">
            <div className="rounded-2xl border border-gold/25 bg-white/3 p-6 md:p-8">
              <div className="mb-6">
                <p className="mb-1 font-mono text-xs font-semibold uppercase tracking-wider text-gold">
                  Wireframe 03
                </p>
                <h3 className="font-display text-xl font-bold text-white md:text-2xl">
                  SafePay Escrow Flow
                </h3>
                <p className="mt-1 font-sans text-sm text-muted-foreground">
                  Funds protected at every step. You pay only for approved milestones.
                </p>
              </div>

              <div className="relative grid grid-cols-1 gap-4 md:grid-cols-3">
                {/* Connector line — desktop only */}
                <div className="absolute top-11 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] hidden h-px bg-gradient-to-r from-gold/50 via-gold/25 to-gold/50 md:block" />

                {(
                  [
                    {
                      num: "01",
                      icon: Lock,
                      title: "Lock Funds",
                      desc: "Client deposits budget into SafePay escrow before work begins.",
                      status: "completed" as const,
                    },
                    {
                      num: "02",
                      icon: Code2,
                      title: "Squad Delivers",
                      desc: "Squad completes milestones. Progress tracked in real-time dashboard.",
                      status: "active" as const,
                    },
                    {
                      num: "03",
                      icon: CheckCircle2,
                      title: "Approve & Release",
                      desc: "You approve each milestone. Funds released automatically.",
                      status: "pending" as const,
                    },
                  ] as const
                ).map((step) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={step.num}
                      className="relative flex flex-col items-center gap-4 rounded-xl border border-dashed border-gold/30 bg-gold/5 p-6 text-center"
                    >
                      <div
                        className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border-2 ${
                          step.status === "completed"
                            ? "border-gold bg-gold/15 text-gold"
                            : step.status === "active"
                            ? "border-gold/60 bg-gold/10 text-gold"
                            : "border-white/15 bg-white/5 text-muted-foreground"
                        }`}
                      >
                        <Icon size={22} />
                      </div>
                      <div className="font-mono text-3xl font-bold text-gold/20">{step.num}</div>
                      <div>
                        <h4 className="mb-1 font-display text-base font-bold text-white">{step.title}</h4>
                        <p className="font-sans text-xs leading-relaxed text-muted-foreground">
                          {step.desc}
                        </p>
                      </div>
                      {step.status === "completed" && (
                        <div className="flex items-center gap-1.5 rounded-full border border-teal/25 bg-teal/10 px-3 py-1">
                          <CheckCircle2 size={10} className="text-teal" />
                          <span className="font-mono text-[10px] font-semibold text-teal">Done</span>
                        </div>
                      )}
                      {step.status === "active" && (
                        <div className="flex items-center gap-1.5 rounded-full border border-gold/25 bg-gold/10 px-3 py-1">
                          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
                          <span className="font-mono text-[10px] font-semibold text-gold">In Progress</span>
                        </div>
                      )}
                      {step.status === "pending" && (
                        <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                          <span className="font-mono text-[10px] font-semibold text-muted-foreground">
                            Pending
                          </span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ─── Wireframe 4: Analytics Dashboard ─── */}
          <div data-aos="fade-up" data-aos-delay="100">
            <div className="rounded-2xl border border-teal/25 bg-white/3 p-6 md:p-8">
              <div className="mb-6">
                <p className="mb-1 font-mono text-xs font-semibold uppercase tracking-wider text-teal">
                  Wireframe 04
                </p>
                <h3 className="font-display text-xl font-bold text-white md:text-2xl">
                  Project Analytics
                </h3>
                <p className="mt-1 font-sans text-sm text-muted-foreground">
                  Track delivery speed, budget utilization, and team performance in real time.
                </p>
              </div>

              {/* Stats grid */}
              <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-4">
                {[
                  { label: "On-time Rate", value: "94%", icon: Clock },
                  { label: "Budget Used", value: "$42K", icon: BarChart2 },
                  { label: "Velocity", value: "+12%", icon: TrendingUp },
                  { label: "Milestones", value: "3 / 5", icon: CheckCircle2 },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col gap-2 rounded-xl border border-dashed border-teal/25 bg-teal/5 p-4"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-teal/20 bg-teal/10 text-teal">
                      <stat.icon size={14} />
                    </div>
                    <div>
                      <div className="font-display text-2xl font-bold text-white">{stat.value}</div>
                      <div className="font-sans text-[11px] text-muted-foreground">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bar chart placeholder */}
              <div className="rounded-xl border border-dashed border-teal/20 bg-white/2 p-5">
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-muted-foreground">
                    Sprint Velocity
                  </span>
                  <span className="font-mono text-[10px] text-teal">Last 6 sprints</span>
                </div>
                <div className="flex h-24 items-end gap-2">
                  {[40, 55, 48, 70, 65, 88].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-md border-x border-t border-teal/25 bg-gradient-to-t from-teal/60 to-cyan/40"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
                <div className="mt-2 flex justify-between">
                  {["S1", "S2", "S3", "S4", "S5", "S6"].map((s) => (
                    <span
                      key={s}
                      className="flex-1 text-center font-mono text-[9px] text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
