"use client";

import { useEffect } from "react";
import AOS from "aos";

export function PlatformWireframes() {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-teal-950/20 via-transparent to-transparent">
      <div className="mx-auto max-w-5xl">

        {/* Section header */}
        <div className="mb-20 text-center">
          <p className="mb-3 font-sans text-sm font-bold uppercase tracking-wider text-cyan">
            The Platform in Action
          </p>
          <h2
            className="mb-4 font-display font-bold text-white"
            style={{ fontSize: "clamp(32px, 4.5vw, 52px)" }}
          >
            Built to ship.{" "}
            <span className="text-shimmer">Built to trust.</span>
          </h2>
          <p className="mx-auto max-w-2xl font-sans text-lg text-muted-foreground">
            See how Zenit connects squads with opportunities. Scroll to explore.
          </p>
        </div>

        {/* ─── Wireframe 1: Squad Dashboard ─── */}
        <div data-aos="fade-up" className="mb-16">
          <div className="rounded-xl border-2 border-teal/50 bg-gradient-to-br from-teal/10 to-transparent p-6 md:p-8 backdrop-blur-sm">

            <div className="mb-6">
              <h3 className="font-display text-xl font-bold text-white">Squad Dashboard</h3>
              <p className="mt-1 font-sans text-sm text-muted-foreground">
                Browse available projects and opportunities
              </p>
            </div>

            {/* Wireframe rows */}
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex gap-4 rounded-lg border border-dashed border-teal/35 p-4"
                >
                  <div className="h-12 w-12 shrink-0 rounded-lg border border-teal/30" />
                  <div className="flex flex-1 flex-col justify-center gap-2">
                    <div className="h-3 w-1/3 rounded bg-teal/20" />
                    <div className="h-2 w-2/3 rounded bg-teal/10" />
                  </div>
                  <span className="shrink-0 self-center font-sans text-sm font-bold text-teal">
                    Available
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── Wireframe 2: Brief Matching ─── */}
        <div data-aos="fade-up" className="mb-16">
          <div className="rounded-xl border-2 border-cyan/50 bg-gradient-to-br from-cyan/10 to-transparent p-6 md:p-8 backdrop-blur-sm">

            <div className="mb-6">
              <h3 className="font-display text-xl font-bold text-white">Brief Matching Engine</h3>
              <p className="mt-1 font-sans text-sm text-muted-foreground">
                AI-powered squad matching in 48 hours
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Left: brief */}
              <div>
                <p className="mb-3 font-sans text-sm font-bold text-cyan">Your Brief</p>
                <div className="min-h-32 rounded-lg border border-dashed border-cyan/35 p-4 space-y-2">
                  <div className="h-3 w-3/4 rounded bg-cyan/20" />
                  <div className="h-2 w-full rounded bg-cyan/10" />
                  <div className="h-2 w-5/6 rounded bg-cyan/10" />
                  <div className="h-2 w-4/5 rounded bg-cyan/10" />
                </div>
              </div>
              {/* Right: matched squads */}
              <div>
                <p className="mb-3 font-sans text-sm font-bold text-cyan">Matched Squads (Top 3)</p>
                <div className="space-y-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="flex gap-3 rounded border border-dashed border-cyan/35 p-3"
                    >
                      <div className="h-8 w-8 shrink-0 rounded-full border border-cyan/30" />
                      <div className="flex flex-1 flex-col justify-center gap-1">
                        <div className="h-2 w-1/2 rounded bg-cyan/20" />
                        <div className="h-2 w-3/4 rounded bg-cyan/10" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Wireframe 3: SafePay Flow ─── */}
        <div data-aos="fade-up" className="mb-16">
          <div className="rounded-xl border-2 border-gold/50 bg-gradient-to-br from-gold/10 to-transparent p-6 md:p-8 backdrop-blur-sm">

            <div className="mb-8">
              <h3 className="font-display text-xl font-bold text-white">SafePay Protection</h3>
              <p className="mt-1 font-sans text-sm text-muted-foreground">
                Zero risk. You only pay when work is delivered.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {[
                { num: 1, title: "Post Brief",      desc: "Submit your project details" },
                { num: 2, title: "Squad Executes",  desc: "Team delivers the work" },
                { num: 3, title: "Approve & Pay",   desc: "Release payment when done" },
              ].map((step) => (
                <div key={step.num} className="flex flex-col items-center text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold/60">
                    <span className="font-display text-2xl font-bold text-gold">{step.num}</span>
                  </div>
                  <h4 className="mb-1 font-display font-bold text-white">{step.title}</h4>
                  <p className="font-sans text-sm text-muted-foreground">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── Wireframe 4: Platform Features ─── */}
        <div data-aos="fade-up">
          <div className="rounded-xl border-2 border-teal/50 bg-gradient-to-br from-teal/10 to-transparent p-6 md:p-8 backdrop-blur-sm">

            <div className="mb-6">
              <h3 className="font-display text-xl font-bold text-white">Platform Features</h3>
              <p className="mt-1 font-sans text-sm text-muted-foreground">
                Everything squads and companies need to succeed
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {[
                "Smart Matching",
                "Real-time Chat",
                "Time Tracking",
                "Payment Gateway",
                "Performance Metrics",
                "Contract Mgmt",
                "Review System",
                "24/7 Support",
              ].map((feature) => (
                <div
                  key={feature}
                  className="flex min-h-20 flex-col items-center justify-center rounded-lg border border-dashed border-teal/35 p-4 text-center"
                >
                  <div className="mb-2 h-2 w-3/4 rounded bg-teal/20" />
                  <p className="font-sans text-xs text-muted-foreground">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
