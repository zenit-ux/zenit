"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu, X, ArrowRight, Brain, ShieldCheck, Users, BarChart3,
  Zap, Star, ChevronDown, BookOpen, MessageSquare, HelpCircle,
  Award, TrendingUp, Route, Globe,
} from "lucide-react";
import { cn } from "@/lib/utils";

/* ─── Locale switcher ────────────────────────────────────── */

const LOCALE_META: Record<string, { label: string }> = {
  es: { label: "Español"   },
  pt: { label: "Português" },
  en: { label: "English"   },
};

function LocaleSwitcher() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const match = pathname.match(/^\/(es|pt|en)(\/|$)/);
  const currentLocale = match?.[1] ?? "en";

  useEffect(() => {
    if (!open) return;
    function onOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onOutside);
    return () => document.removeEventListener("mousedown", onOutside);
  }, [open]);

  useEffect(() => { setOpen(false); }, [pathname]);

  const current = LOCALE_META[currentLocale];

  function switchPath(locale: string) {
    if (match) {
      return pathname.replace(/^\/(es|pt|en)/, `/${locale}`);
    }
    return `/${locale}${pathname}`;
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 rounded-md border border-teal/40 px-2.5 py-1.5 font-sans text-sm text-muted-foreground transition-colors hover:border-teal/60 hover:text-white"
        aria-expanded={open}
        aria-haspopup="true"
        aria-label="Cambiar idioma"
      >
        <Globe size={13} className="text-teal" />
        <span className="hidden text-xs lg:inline">{current.label}</span>
        <ChevronDown size={11} className={cn("transition-transform duration-200", open && "rotate-180")} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.97 }}
            transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] as const }}
            className="absolute right-0 top-full mt-1.5 min-w-[150px] overflow-hidden rounded-xl border border-white/8 shadow-[0_16px_40px_rgba(0,0,0,0.6)]"
            style={{ background: "#0a1010" }}
          >
            {Object.entries(LOCALE_META).map(([code, { label }]) => (
              <a
                key={code}
                href={switchPath(code)}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center px-4 py-2.5 font-sans text-sm transition-colors",
                  code === currentLocale
                    ? "bg-teal/10 text-teal"
                    : "text-muted-foreground hover:bg-white/4 hover:text-white"
                )}
              >
                {label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Megamenu types & data ──────────────────────────────── */

interface FeaturedItem {
  icon: React.ElementType;
  label: string;
  desc: string;
  href: string;
  accent: "cyan" | "gold" | "teal";
}
interface LinkItem { label: string; href: string; icon: React.ElementType; }
interface MenuData {
  featured: FeaturedItem[];
  products: LinkItem[];
  resources: LinkItem[];
  cta: { label: string; href: string };
}

const companiesMenu: MenuData = {
  featured: [
    {
      icon: Brain,
      label: "Kaizen AI",
      desc: "AI that finds & deploys the right squad for your project in 48h.",
      href: "/kaizen",
      accent: "cyan" as const,
    },
    {
      icon: ShieldCheck,
      label: "SafePay",
      desc: "Milestone-based escrow. Pay only when deliverables are approved.",
      href: "/safepay",
      accent: "gold" as const,
    },
  ],
  products: [
    { label: "Browse Squads",   href: "/squads",       icon: Users },
    { label: "Post a Project",  href: "/companies",    icon: Zap },
    { label: "Pricing",         href: "/pricing",      icon: BarChart3 },
  ],
  resources: [
    { label: "How It Works",    href: "/how-it-works", icon: BookOpen },
    { label: "Case Studies",    href: "/blog",         icon: Star },
  ],
  cta: { label: "Find a Squad →", href: "/companies" },
};

const squadsMenu: MenuData = {
  featured: [
    {
      icon: Award,
      label: "SkillBase",
      desc: "Free community for squads & devs. Get visible to global companies.",
      href: "/skillbase",
      accent: "teal" as const,
    },
    {
      icon: Route,
      label: "TalentPath",
      desc: "Junior? Train on real projects alongside senior squads. $49/mo.",
      href: "/talentpath",
      accent: "cyan" as const,
    },
  ],
  products: [
    { label: "Register Your Squad", href: "/squads",        icon: ArrowRight },
    { label: "TalkFlow — Live Translation", href: "/talkflow", icon: MessageSquare },
    { label: "TalentPath",          href: "/talentpath",   icon: TrendingUp },
  ],
  resources: [
    { label: "Earnings & Payouts",  href: "/pricing",      icon: BarChart3 },
    { label: "Squad Handbook",      href: "/how-it-works", icon: BookOpen },
  ],
  cta: { label: "Register Your Squad →", href: "/squads" },
};

/* ─── FeaturedCard ───────────────────────────────────────── */

function FeaturedCard({
  icon: Icon, label, desc, href, accent,
}: {
  icon: React.ElementType;
  label: string;
  desc: string;
  href: string;
  accent: "cyan" | "gold" | "teal";
}) {
  const colors = {
    cyan: { border: "border-cyan/20", bg: "bg-cyan/8", text: "text-cyan", icon: "border-cyan/30 bg-cyan/10" },
    gold: { border: "border-gold/20", bg: "bg-gold/6",  text: "text-gold", icon: "border-gold/30 bg-gold/10" },
    teal: { border: "border-teal/25", bg: "bg-teal/8",  text: "text-teal", icon: "border-teal/30 bg-teal/10" },
  }[accent];

  return (
    <Link
      href={href}
      className={cn(
        "group flex flex-col gap-3 rounded-xl border p-4 transition-all duration-200 hover:scale-[1.02]",
        colors.border, colors.bg
      )}
    >
      <div className={cn("flex h-9 w-9 items-center justify-center rounded-lg border", colors.icon)}>
        <Icon size={16} className={colors.text} />
      </div>
      <div>
        <p className={cn("mb-1 font-display text-[14px] font-bold", colors.text)}>{label}</p>
        <p className="font-sans text-[12px] leading-relaxed text-muted-foreground">{desc}</p>
      </div>
    </Link>
  );
}

/* ─── MegaMenu panel ─────────────────────────────────────── */

function MegaPanel({ menu }: { menu: MenuData }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 6, scale: 0.98 }}
      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
      className="absolute left-1/2 top-full mt-2 w-[680px] -translate-x-1/2 overflow-hidden rounded-2xl border border-white/8 shadow-[0_32px_80px_rgba(0,0,0,0.7)]"
      style={{ background: "#0a1010" }}
    >
      {/* Top: featured cards + link columns */}
      <div className="grid grid-cols-[1fr_1fr_1fr_1fr] gap-0">
        {/* Featured cards — 2 cols */}
        <div className="col-span-2 flex flex-col gap-3 border-r border-white/6 p-5">
          <p className="mb-1 font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">Featured</p>
          {menu.featured.map((f) => (
            <FeaturedCard key={f.href} {...f} />
          ))}
        </div>

        {/* Products column */}
        <div className="flex flex-col gap-1 border-r border-white/6 p-5">
          <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">Platform</p>
          {menu.products.map(({ label, href, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="group flex items-center gap-2.5 rounded-lg px-2 py-2 transition-colors hover:bg-white/4"
            >
              <Icon size={13} className="shrink-0 text-muted-foreground group-hover:text-white" />
              <span className="font-sans text-[13px] text-muted-foreground group-hover:text-white">{label}</span>
            </Link>
          ))}
        </div>

        {/* Resources column */}
        <div className="flex flex-col gap-1 p-5">
          <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">Resources</p>
          {menu.resources.map(({ label, href, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="group flex items-center gap-2.5 rounded-lg px-2 py-2 transition-colors hover:bg-white/4"
            >
              <Icon size={13} className="shrink-0 text-muted-foreground group-hover:text-white" />
              <span className="font-sans text-[13px] text-muted-foreground group-hover:text-white">{label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom CTA bar */}
      <div className="flex items-center justify-between border-t border-white/6 bg-white/2 px-5 py-3">
        <p className="font-sans text-[12px] text-muted-foreground">Ready to get started?</p>
        <Link
          href={menu.cta.href}
          className="inline-flex items-center gap-1.5 rounded-lg border border-cyan/30 bg-cyan/8 px-4 py-1.5 font-mono text-[11px] font-bold text-cyan transition-all hover:bg-cyan/15"
        >
          {menu.cta.label}
        </Link>
      </div>
    </motion.div>
  );
}

/* ─── NavItem with megamenu ──────────────────────────────── */

function NavDropdown({ label, menu }: { label: string; menu: MenuData }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className={cn(
          "flex items-center gap-1 rounded-md px-3.5 py-2 font-sans text-sm font-medium transition-colors duration-200",
          open ? "text-white" : "text-muted-foreground hover:text-white"
        )}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {label}
        <ChevronDown
          size={13}
          className={cn("transition-transform duration-200", open && "rotate-180")}
        />
      </button>

      <AnimatePresence>
        {open && <MegaPanel menu={menu} />}
      </AnimatePresence>
    </div>
  );
}

/* ─── Mobile accordion item ──────────────────────────────── */

function MobileAccordion({ label, menu, cta }: { label: string; menu: MenuData; cta: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/6">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between px-3 py-3.5 font-sans text-sm font-medium text-white"
        aria-expanded={open}
        aria-haspopup="true"
      >
        {label}
        <ChevronDown
          size={14}
          className={cn("text-muted-foreground transition-transform duration-200", open && "rotate-180")}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-1 px-3 pb-3">
              {menu.featured.map((f) => (
                <Link
                  key={f.href}
                  href={f.href}
                  className="flex items-center gap-2.5 rounded-lg px-2 py-2.5 transition-colors hover:bg-white/4"
                >
                  <f.icon size={14} className="shrink-0 text-cyan" />
                  <span className="font-sans text-sm font-medium text-white">{f.label}</span>
                </Link>
              ))}
              <div className="my-1 h-px bg-white/6" />
              {[...menu.products, ...menu.resources].map(({ label: l, href, icon: Icon }) => (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center gap-2.5 rounded-lg px-2 py-2 transition-colors hover:bg-white/4"
                >
                  <Icon size={13} className="shrink-0 text-muted-foreground" />
                  <span className="font-sans text-sm text-muted-foreground">{l}</span>
                </Link>
              ))}
              <Link
                href={menu.cta.href}
                className="mt-2 flex items-center justify-center rounded-lg border border-cyan/30 bg-cyan/8 py-2.5 font-sans text-sm font-semibold text-cyan"
              >
                {cta}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Navbar ─────────────────────────────────────────────── */

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-white/6 bg-[#080c0c]/85 backdrop-blur-2xl"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/logos/zenit-horizontal-dark-color.svg"
            alt="Zenit"
            width={110}
            height={30}
            priority
            unoptimized
            className="h-7 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-0.5 md:flex">
          <NavDropdown label="For Companies" menu={companiesMenu} />
          <NavDropdown label="For Squads"    menu={squadsMenu}    />

          {[
            { href: "/how-it-works", label: "How It Works" },
            { href: "/pricing",      label: "Pricing"      },
            { href: "/blog",         label: "Blog"         },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "rounded-md px-3.5 py-2 font-sans text-sm font-medium transition-colors duration-200",
                pathname === href ? "text-white" : "text-muted-foreground hover:text-white"
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-2 md:flex">
          <LocaleSwitcher />
          <Link
            href="/login"
            className="rounded-md px-3.5 py-2 font-sans text-sm font-medium text-muted-foreground transition-colors hover:text-white"
          >
            Log in
          </Link>
          <Link
            href="/get-started"
            className="group inline-flex items-center gap-1.5 rounded-lg bg-white px-4 py-2 font-sans text-sm font-semibold text-[#080c0c] transition-all duration-200 hover:bg-white/90 hover:shadow-[0_0_24px_rgba(255,255,255,0.18)]"
          >
            Get started
            <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="rounded-md p-2 text-muted-foreground transition-colors hover:text-white md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] as const }}
            className="overflow-hidden border-b border-white/6 bg-[#080c0c]/95 backdrop-blur-2xl md:hidden"
          >
            {/* Mobile locale switcher */}
            {(() => {
              const m = pathname.match(/^\/(es|pt|en)(\/|$)/);
              const loc = m?.[1] ?? "en";
              return (
                <div className="flex gap-2 border-b border-white/6 px-4 py-3">
                  {Object.entries(LOCALE_META).map(([code, { label }]) => {
                    const href = m
                      ? pathname.replace(/^\/(es|pt|en)/, `/${code}`)
                      : `/${code}${pathname}`;
                    return (
                      <a
                        key={code}
                        href={href}
                        aria-current={code === loc ? "page" : undefined}
                        className={cn(
                          "flex flex-1 items-center justify-center rounded-lg border py-2 font-mono text-xs font-medium transition-colors",
                          code === loc
                            ? "border-teal/40 bg-teal/10 text-teal"
                            : "border-white/8 text-muted-foreground hover:text-white"
                        )}
                      >
                        {label}
                      </a>
                    );
                  })}
                </div>
              );
            })()}

            <MobileAccordion label="For Companies" menu={companiesMenu} cta="Find a Squad →" />
            <MobileAccordion label="For Squads"    menu={squadsMenu}    cta="Register Your Squad →" />

            <nav className="flex flex-col gap-1 px-4 py-2">
              {[
                { href: "/how-it-works", label: "How It Works" },
                { href: "/pricing",      label: "Pricing"      },
                { href: "/blog",         label: "Blog"         },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "rounded-md px-3 py-3 font-sans text-sm font-medium transition-colors",
                    pathname === href ? "bg-white/5 text-white" : "text-muted-foreground hover:text-white"
                  )}
                >
                  {label}
                </Link>
              ))}
            </nav>

            <div className="grid grid-cols-2 gap-2 px-4 pb-4 pt-1">
              <Link
                href="/login"
                className="flex items-center justify-center rounded-lg border border-white/8 py-2.5 font-sans text-sm font-medium text-white transition-colors hover:bg-white/5"
              >
                Log in
              </Link>
              <Link
                href="/get-started"
                className="flex items-center justify-center gap-1 rounded-lg bg-white py-2.5 font-sans text-sm font-semibold text-[#080c0c] transition-all hover:bg-white/90"
              >
                Get started <ArrowRight size={13} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
