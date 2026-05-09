"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { staggerContainer, fadeInUp, defaultViewport } from "@/lib/motionVariants";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "How does matching work?",
    a: "When you post a project, our algorithm analyzes your stack, vertical, timeline, and budget. It cross-references against 500+ squad profiles — factoring in past delivery speed, client ratings, timezone overlap, and domain expertise. You receive 2–3 curated matches within 48 hours. Not a list of 50. Just the right three.",
  },
  {
    q: "What does SafePay actually protect me from?",
    a: "SafePay is an escrow-backed payment system. As a company, your funds are locked before work begins — but you never release them without approving each milestone. As a squad, you're guaranteed payment for every approved milestone. Neither side can pull funds unilaterally. If a milestone is disputed, Zenit mediates with evidence from both parties.",
  },
  {
    q: "How do you vet squads?",
    a: "We review public GitHub repositories, past project portfolios, and conduct a structured technical conversation with the squad lead. We look for evidence of delivery — shipped products, client outcomes, architecture decisions — not just code quality. Only the top 8% of applicants receive the Verified badge.",
  },
  {
    q: "What if a squad doesn't deliver?",
    a: "SafePay ensures undelivered milestones are never paid. If a squad misses a milestone, the corresponding funds remain locked. Zenit's dispute team reviews deliverables against the agreed scope. Unresolved disputes default to evidence-based arbitration. Funds are returned to the company if the squad cannot prove delivery.",
  },
  {
    q: "How much does it cost?",
    a: "Free to post for companies — no subscription, no sign-up fee. We charge a 12% success fee on the total project value at project start. Squads pay zero fees. Enterprise clients (projects over $100K or multiple concurrent engagements) can negotiate custom rates as low as 6%.",
  },
  {
    q: "Can I keep working with the same squad?",
    a: "Yes — and we encourage it. After a successful project, the squad is added to your 'Trusted Squads' list. Re-engaging them bypasses the matching process entirely. Many companies use the same squad for 3–5 consecutive projects, building a long-term partnership without the overhead of in-house hiring.",
  },
];

function FAQItem({ faq, idx, isOpen, onToggle }: {
  faq: typeof faqs[number];
  idx: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className={cn(
      "border-b border-white/6 last:border-0 transition-colors duration-200",
      isOpen && "border-white/10"
    )}>
      <button
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-4 py-6 text-left"
        aria-expanded={isOpen}
      >
        <span className={cn(
          "font-display text-base font-semibold transition-colors duration-200 md:text-lg",
          isOpen ? "text-white" : "text-white/80"
        )}>
          {faq.q}
        </span>
        <div className={cn(
          "mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-200",
          isOpen
            ? "border-cyan/30 bg-cyan/10 text-cyan"
            : "border-white/10 bg-white/4 text-muted-foreground"
        )}>
          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
            style={{ overflow: "hidden" }}
          >
            <p className="pb-6 font-sans text-sm leading-relaxed text-muted-foreground md:text-base">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="relative overflow-hidden bg-background py-28">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="animate-orb-3 absolute top-1/2 right-0 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-cyan/4 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mb-16 text-center"
        >
          <motion.p variants={fadeInUp} className="mb-4 font-sans text-sm font-semibold uppercase tracking-widest text-cyan">
            FAQ
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="font-display font-bold leading-tight text-white"
            style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
          >
            Questions we always
            <br />
            <span className="text-shimmer-gold">get asked.</span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="rounded-2xl border border-white/6 bg-card px-6 md:px-8"
        >
          {faqs.map((faq, idx) => (
            <motion.div key={faq.q} variants={fadeInUp}>
              <FAQItem
                faq={faq}
                idx={idx}
                isOpen={openIdx === idx}
                onToggle={() => toggle(idx)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
