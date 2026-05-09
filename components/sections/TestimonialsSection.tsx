"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const quotes = [
  {
    text: "We expanded to 3 concurrent projects without hiring a single full-time engineer. Same quality, faster delivery, zero equity dilution. Best decision we made in the last two years.",
    name: "Matías Rodríguez",
    role: "CEO, Pagos Now",
    flag: "🇦🇷",
    color: "cyan",
  },
  {
    text: "We needed AI capabilities but couldn't wait 9 months to hire. Zenit matched us with an AI-native squad. Three months later: live in production and our team actually understands AI. The investment paid for itself 5× over.",
    name: "Diego Fuentes",
    role: "CTO, FinTech MX",
    flag: "🇲🇽",
    color: "gold",
  },
  {
    text: "We went from bidding on 100 projects to winning 60% of pitches. Because clients come pre-discovered by Kaizen, we're picked for fit — not for being the cheapest.",
    name: "Carlos Mendes",
    role: "Squad Lead, DevCraft",
    flag: "🇧🇷",
    color: "teal",
  },
  {
    text: "SafePay is the game-changer. Funds locked before we start. Complete protection for our squad. We've never had a payment dispute since joining.",
    name: "Valentina Torres",
    role: "Engineering Lead, Pixel Squad",
    flag: "🇨🇴",
    color: "cyan",
  },
  {
    text: "The matching accuracy is unreal. They found a squad with AI experience in our exact vertical — B2B SaaS for logistics. First call, we knew they'd been there before.",
    name: "Ignacia Pérez",
    role: "Head of Product, LogiFlow",
    flag: "🇨🇱",
    color: "teal",
  },
] as const;

const colors = {
  cyan: "border-cyan/20",
  teal: "border-teal/20",
  gold: "border-gold/20",
};

export function TestimonialsSection() {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback((next: number, d: 1 | -1) => {
    setDir(d);
    setIdx((next + quotes.length) % quotes.length);
  }, []);

  const start = useCallback(() => {
    timerRef.current = setInterval(() => {
      setDir(1);
      setIdx((i) => (i + 1) % quotes.length);
    }, 6000);
  }, []);

  const stop = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  useEffect(() => { start(); return stop; }, [start, stop]);

  const q = quotes[idx];

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 40 : -40, opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const } },
    exit:   (d: number) => ({ x: d > 0 ? -40 : 40, opacity: 0, transition: { duration: 0.25 } }),
  };

  return (
    <section className="py-28 bg-background">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

        {/* Header — minimal */}
        <div className="mb-16 text-center">
          <p className="mb-3 font-sans text-sm font-semibold uppercase tracking-widest text-cyan">
            Testimonials
          </p>
          <h2 className="font-display text-4xl font-bold text-white md:text-5xl">
            Squads and companies <span className="text-shimmer">love Zenit.</span>
          </h2>
        </div>

        {/* Quote block */}
        <div className={cn("relative rounded-2xl border bg-card p-10 md:p-14 overflow-hidden", colors[q.color])}>
          {/* Large quotation mark */}
          <span className="pointer-events-none absolute -top-6 -right-2 font-display text-[200px] font-bold leading-none text-white/[0.025] select-none">
            &ldquo;
          </span>

          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={idx}
              custom={dir}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="flex flex-col gap-8"
            >
              {/* Quote */}
              <blockquote className="font-sans text-xl leading-relaxed text-white/85 md:text-2xl md:leading-relaxed">
                &ldquo;{q.text}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 font-display text-sm font-bold text-white">
                  {q.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </div>
                <div>
                  <p className="font-sans text-sm font-semibold text-white">
                    {q.name} <span className="ml-1">{q.flag}</span>
                  </p>
                  <p className="font-sans text-xs text-muted-foreground">{q.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="mt-8 flex items-center justify-between">
          <div className="flex gap-1.5">
            {quotes.map((_, i) => (
              <button
                key={i}
                onClick={() => { stop(); go(i, i > idx ? 1 : -1); start(); }}
                className={cn(
                  "h-1 rounded-full transition-all duration-300",
                  i === idx ? "w-8 bg-white" : "w-4 bg-white/20 hover:bg-white/40"
                )}
                aria-label={`Quote ${i + 1}`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            {([
              { fn: () => { stop(); go(idx - 1, -1); start(); }, label: "Previous", Icon: ChevronLeft },
              { fn: () => { stop(); go(idx + 1,  1); start(); }, label: "Next",     Icon: ChevronRight },
            ] as const).map(({ fn, label, Icon }) => (
              <button
                key={label}
                onClick={fn}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-muted-foreground transition-colors hover:border-white/25 hover:text-white"
              >
                <Icon size={15} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
