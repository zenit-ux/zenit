"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { staggerContainer, fadeInUp, scaleIn, defaultViewport } from "@/lib/motionVariants";
import { NeuralNoise } from "@/components/ui/neural-noise";

const posts = [
  {
    slug: "por-que-el-matching-automatico-falla",
    category: "Engineering",
    categoryColor: "cyan",
    title: "Por qué el matching automático falla (y cómo Kaizen lo resuelve)",
    excerpt: "La mayoría de las plataformas matchean por stack. Kaizen matchea por madurez técnica, contexto del proyecto y historial de entrega. La diferencia es enorme.",
    readTime: "7 min read",
    date: "Abr 28, 2026",
    featured: true,
  },
  {
    slug: "ssr-vs-sr-cuando-cada-uno",
    category: "Engineering",
    categoryColor: "cyan",
    title: "SSR vs SR: cuándo cada uno",
    excerpt: "No es solo una cuestión de años. Es de contexto, tipo de proyecto y qué tipo de ownership necesitás en tu equipo. Acá la guía definitiva.",
    readTime: "5 min read",
    date: "Abr 21, 2026",
    featured: false,
  },
  {
    slug: "la-verdad-sobre-equipos-remotos-latam",
    category: "Culture",
    categoryColor: "teal",
    title: "La verdad sobre equipos 100% remotos en LATAM",
    excerpt: "Dos años de datos de squads distribuidos. Lo que funciona, lo que no, y por qué la zona horaria es el menor de los problemas.",
    readTime: "8 min read",
    date: "Abr 14, 2026",
    featured: false,
  },
  {
    slug: "safepay-como-construimos-escrow-para-software",
    category: "Product",
    categoryColor: "teal",
    title: "SafePay: cómo construimos escrow para proyectos de software",
    excerpt: "Las disputas de pago matan el momentum. Construimos SafePay para eliminarlas. Así funciona el modelo de escrow por milestone bajo el capó.",
    readTime: "5 min read",
    date: "Abr 7, 2026",
    featured: false,
  },
  {
    slug: "kaizen-caso-real-backend-bancario",
    category: "Case Study",
    categoryColor: "gold",
    title: "Caso real: cómo Kaizen matcheó un backend bancario en 48h",
    excerpt: "Una fintech necesitaba SSR con experiencia en core bancario. Kaizen analizó el brief, cruzó con historial de 47 squads y propuso 2. El cliente eligió en 6 horas.",
    readTime: "6 min read",
    date: "Mar 31, 2026",
    featured: false,
  },
  {
    slug: "zenitrank-reputacion-objetiva",
    category: "Product",
    categoryColor: "teal",
    title: "ZenitRank: por qué la reputación objetiva cambia todo",
    excerpt: "Sin ratings subjetivos. Sin estrellas compradas. ZenitRank mide on-time rate, criterios cumplidos y response time — calculado automáticamente después de cada milestone.",
    readTime: "4 min read",
    date: "Mar 24, 2026",
    featured: false,
  },
];

const categoryColor: Record<string, string> = {
  cyan: "border-cyan/20 bg-cyan/8 text-cyan",
  teal: "border-teal/20 bg-teal/8 text-teal",
  gold: "border-gold/20 bg-gold/8 text-gold",
};

export default function BlogPage() {
  const featured = posts.find((p) => p.featured)!;
  const rest = posts.filter((p) => !p.featured);

  return (
    <main className="bg-background">

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16">
        {/* Neural canvas — gold */}
        <NeuralNoise
          color={[245, 158, 11]}
          opacity={0.30}
          speed={0.0006}
          intensity={0.95}
          className="absolute inset-0 h-full w-full"
          style={{ mixBlendMode: "screen" }}
        />
        {/* Overlay for readability */}
        <div className="pointer-events-none absolute inset-0 bg-background/60" aria-hidden />
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gold/5 blur-[120px] animate-orb-1" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-4"
          >
            <motion.p variants={fadeInUp} className="font-sans text-sm font-semibold uppercase tracking-widest text-gold">
              Blog
            </motion.p>
            <motion.h1
              variants={fadeInUp}
              className="font-display font-bold text-shimmer-gold"
              style={{ fontSize: "clamp(28px, 3.8vw, 54px)" }}
            >
              Ideas on the future
              <br />
              of work.
            </motion.h1>
            <motion.p variants={fadeInUp} className="max-w-xl font-sans text-lg leading-relaxed text-muted-foreground">
              Engineering, product, and culture from the team building Zenit.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Featured post */}
      <section className="pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            <Link href={`/blog/${featured.slug}`} className="group block">
              <div className="relative overflow-hidden rounded-2xl border border-white/6 bg-card p-8 transition-all duration-300 hover:border-white/12 md:p-12">
                <div className="pointer-events-none absolute inset-0" aria-hidden>
                  <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-cyan/6 blur-[80px]" />
                </div>
                <div className="relative">
                  <div className="mb-4 flex items-center gap-3">
                    <span className={`rounded-full border px-2.5 py-1 font-sans text-xs font-semibold ${categoryColor[featured.categoryColor]}`}>
                      {featured.category}
                    </span>
                    <span className="flex items-center gap-1 font-sans text-xs text-muted-foreground">
                      <Clock size={12} />
                      {featured.readTime}
                    </span>
                    <span className="font-sans text-xs text-muted-foreground">{featured.date}</span>
                  </div>
                  <h2 className="mb-3 font-display font-bold text-white transition-colors duration-200 group-hover:text-white/80" style={{ fontSize: "clamp(26px, 3vw, 42px)" }}>
                    {featured.title}
                  </h2>
                  <p className="mb-6 max-w-2xl font-sans text-base leading-relaxed text-muted-foreground">
                    {featured.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-white transition-all duration-200 group-hover:gap-3">
                    Read more
                    <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Post grid */}
      <section className="py-8 pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {rest.map((post) => (
              <motion.div
                key={post.slug}
                variants={scaleIn}
                whileHover={{ y: -4, transition: { type: "spring", stiffness: 400, damping: 25 } }}
              >
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <div className="flex h-full flex-col rounded-2xl border border-white/6 bg-card p-6 transition-all duration-300 hover:border-white/12">
                    <div className="mb-4 flex items-center gap-3">
                      <span className={`rounded-full border px-2.5 py-1 font-sans text-xs font-semibold ${categoryColor[post.categoryColor]}`}>
                        {post.category}
                      </span>
                    </div>
                    <h2 className="mb-3 flex-1 font-sans text-base font-semibold leading-snug text-white transition-colors duration-200 group-hover:text-white/80">
                      {post.title}
                    </h2>
                    <p className="mb-5 font-sans text-sm leading-relaxed text-muted-foreground line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between border-t border-white/6 pt-4">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1 font-sans text-xs text-muted-foreground">
                          <Clock size={11} />
                          {post.readTime}
                        </span>
                        <span className="font-sans text-xs text-muted-foreground">{post.date}</span>
                      </div>
                      <ArrowRight
                        size={14}
                        className="text-muted-foreground transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-white"
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 border-t border-border">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="flex flex-col items-center gap-5"
          >
            <motion.h2 variants={fadeInUp} className="font-display font-bold text-white" style={{ fontSize: "clamp(26px, 3vw, 42px)" }}>
              Get new posts in your inbox.
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-sans text-base text-muted-foreground">
              No spam. Just the best thinking on remote squads, software delivery, and the future of work.
            </motion.p>
            <motion.form
              variants={fadeInUp}
              className="flex w-full max-w-sm gap-2"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Newsletter signup"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="you@company.com"
                autoComplete="email"
                className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-sans text-sm text-white placeholder:text-muted-foreground focus:border-white/25 focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-xl bg-white px-5 py-3 font-sans text-sm font-semibold text-background transition-all duration-200 hover:bg-white/90"
              >
                Subscribe
              </button>
            </motion.form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
