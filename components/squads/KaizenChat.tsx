"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Shield, Plus, Trash2 } from "lucide-react";
import type { Locale, PreregistroTranslations } from "@/lib/i18n/preregistro";
import { detectInjection, detectOutOfScope, sanitizeInput, sanitizeOutput, isSafeUrl } from "@/lib/securityUtils";

/* ─── Types ───────────────────────────────────────────────── */

interface Member { nombre: string; rol: string; linkedin: string; }

interface FormData {
  squadName: string;
  members: Member[];
  stacks: string[];
  email: string;
  acceptedTerms: boolean;
}

type MessageFrom = "kaizen" | "user" | "warning";
interface Message { id: string; from: MessageFrom; text: string; }

type Step =
  | "greeting"
  | "memberCount"
  | `member_${number}`
  | "stack"
  | "email"
  | "terms"
  | "review";

const STACKS = ["React / Next.js", "Vue / Nuxt", "Node.js", "Python", "Go", "Java", "React Native", "Flutter", "PostgreSQL", "MongoDB", "Docker / K8s", "AWS", "GCP", "Machine Learning"];
const MAX_MEMBERS = 20;
const MIN_MEMBERS = 2;

/* ─── Helpers ─────────────────────────────────────────────── */

const uid = () => Math.random().toString(36).slice(2);
const interpolate = (t: string, v: Record<string, string>) =>
  t.replace(/\{\{(\w+)\}\}/g, (_, k) => v[k] ?? "");
const kMsg = (text: string): Message => ({ id: uid(), from: "kaizen", text: sanitizeOutput(text) });
const uMsg = (text: string): Message => ({ id: uid(), from: "user",   text: sanitizeOutput(text) });
const wMsg = (text: string): Message => ({ id: uid(), from: "warning", text });

/* ─── Component ───────────────────────────────────────────── */

export function KaizenChat({
  locale,
  i18n,
  outerClassName,
}: {
  locale: Locale;
  i18n: PreregistroTranslations;
  outerClassName?: string;
}) {
  const k = i18n.kaizen;
  const p = i18n.placeholders;
  const e = i18n.errors;

  const [messages, setMessages] = useState<Message[]>([kMsg(k.greeting)]);
  const [step, setStep]         = useState<Step>("greeting");
  const [data, setData]         = useState<Partial<FormData>>({ members: [] });
  const [totalMembers, setTotalMembers] = useState(0);
  const [currentMemberIdx, setCurrentMemberIdx] = useState(0);

  // Simple text input
  const [text, setText]           = useState("");
  const [textError, setTextError] = useState("");

  // Member draft (used in member_N step)
  const [draft, setDraft]         = useState<Member>({ nombre: "", rol: "", linkedin: "" });
  const [draftErrors, setDraftErrors] = useState<Partial<Member>>({});

  // Stack selection
  const [stacks, setStacks]       = useState<string[]>([]);
  const [stackError, setStackError] = useState("");

  // Textarea (project desc)
  const [textarea, setTextarea]   = useState("");
  const [taError, setTaError]     = useState("");

  // Terms
  const [terms, setTerms]         = useState(false);
  const [termsError, setTermsError] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted]   = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef  = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, step]);

  useEffect(() => {
    if (["greeting", "memberCount", "email"].includes(step)) {
      inputRef.current?.focus();
    }
  }, [step]);

  /* ─── Security ─── */

  function checkSecurity(input: string): boolean {
    if (detectInjection(input)) {
      push(wMsg(""), kMsg(k.injectionResponse));
      return false;
    }
    const scope = detectOutOfScope(input);
    if (scope) {
      push(kMsg(
        scope === "matching" ? k.outOfScopeMatching :
        ["other_squads","other_companies","other_tenant"].includes(scope) ? k.outOfScopeOthers :
        k.outOfScopeDefault
      ));
      return false;
    }
    return true;
  }

  /* ─── State helpers ─── */

  function push(...msgs: Message[]) {
    setMessages(prev => [...prev, ...msgs]);
  }

  function next(nextStep: Step, kaizenMessage: string) {
    push(kMsg(kaizenMessage));
    setStep(nextStep);
    setText(""); setTextError("");
    setDraft({ nombre: "", rol: "", linkedin: "" }); setDraftErrors({});
    setTextarea(""); setTaError("");
    setStackError("");
  }

  /* ─── Handlers ─── */

  function handleSquadName() {
    const raw = sanitizeInput(text);
    if (!raw) { setTextError(e.required); return; }
    if (!checkSecurity(raw)) { setText(""); return; }
    push(uMsg(raw));
    setData(d => ({ ...d, squadName: raw }));
    next("memberCount", interpolate(k.memberCount, { squadName: raw }));
  }

  function handleMemberCount() {
    const raw = sanitizeInput(text);
    const n = parseInt(raw, 10);
    if (!raw || isNaN(n)) { setTextError(e.required); return; }
    if (n < MIN_MEMBERS) { setTextError(`Mínimo ${MIN_MEMBERS} integrantes.`); return; }
    if (n > MAX_MEMBERS) { setTextError(`Máximo ${MAX_MEMBERS} integrantes.`); return; }
    push(uMsg(String(n)));
    setTotalMembers(n);
    setData(d => ({ ...d, members: [] }));
    setCurrentMemberIdx(0);
    next(`member_0`, k.memberIntro);
  }

  function handleMemberDraft() {
    const errs: Partial<Member> = {};
    if (!draft.nombre.trim()) errs.nombre = e.required;
    if (!draft.rol.trim())    errs.rol    = e.required;
    if (!draft.linkedin.trim()) errs.linkedin = e.required;
    if (Object.keys(errs).length) { setDraftErrors(errs); return; }
    if (!checkSecurity(draft.nombre) || !checkSecurity(draft.rol)) return;

    const confirmed: Member = {
      nombre:   sanitizeInput(draft.nombre),
      rol:      sanitizeInput(draft.rol),
      linkedin: sanitizeInput(draft.linkedin),
    };
    push(uMsg(`${confirmed.nombre} · ${confirmed.rol}`));
    const newMembers = [...(data.members ?? []), confirmed];
    setData(d => ({ ...d, members: newMembers }));

    const nextIdx = currentMemberIdx + 1;
    if (nextIdx < totalMembers) {
      setCurrentMemberIdx(nextIdx);
      const ordinal = i18n.ordinals[nextIdx - 1] ?? `${nextIdx + 1}`;
      next(`member_${nextIdx}`, interpolate(k.memberNext, { ordinal }));
    } else {
      next("stack", k.stack);
    }
  }

  function handleStack() {
    if (stacks.length === 0) { setStackError(e.required); return; }
    push(uMsg(stacks.join(", ")));
    setData(d => ({ ...d, stacks }));
    setStacks([]);
    next("email", k.email);
  }

  function handleEmail() {
    const raw = sanitizeInput(text);
    if (!raw) { setTextError(e.required); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(raw)) { setTextError(e.emailInvalid); return; }
    push(uMsg(raw));
    setData(d => ({ ...d, email: raw }));
    next("terms", k.terms);
  }

  function handleTerms() {
    if (!terms) { setTermsError(e.termsRequired); return; }
    push(uMsg("✓"));
    setData(d => ({ ...d, acceptedTerms: true }));
    next("review", interpolate(k.review, { squadName: data.squadName ?? "" }));
  }

  async function handleSubmit() {
    setSubmitting(true);
    await new Promise(r => setTimeout(r, 900));
    setSubmitting(false);
    setSubmitted(true);
  }

  function onKeyDown(ev: React.KeyboardEvent) {
    if (ev.key === "Enter" && !ev.shiftKey) {
      ev.preventDefault();
      if (step === "greeting")         handleSquadName();
      else if (step === "memberCount") handleMemberCount();
      else if (step === "email")       handleEmail();
    }
  }

  /* ─── Derived ─── */

  const isMemberStep = typeof step === "string" && step.startsWith("member_");
  const isTextStep   = ["greeting","memberCount","email"].includes(step);

  if (submitted) return <SuccessView i18n={i18n} data={data as FormData} />;

  return (
    <div
      className={outerClassName ?? "flex flex-col overflow-hidden rounded-2xl border border-teal/20"}
      style={{ background: "#0d1313" }}
    >
      {/* ── Header ── */}
      <div className="flex items-center gap-3 border-b border-white/5 px-5 py-3.5" style={{ background: "#020c0b" }}>
        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-teal/30 bg-teal/10">
          <span className="font-mono text-[10px] font-bold text-teal">K</span>
        </div>
        <div>
          <p className="font-mono text-sm font-bold text-white">Kaizen</p>
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal" />
            <p className="font-mono text-[9px] text-muted-foreground">modo registro</p>
          </div>
        </div>
        <div className="ml-auto flex items-center gap-1.5 rounded-full border border-teal/20 bg-teal/5 px-2 py-0.5">
          <Shield size={8} className="text-teal" />
          <span className="font-mono text-[8px] font-bold uppercase tracking-widest text-teal">Secure</span>
        </div>
      </div>

      {/* ── Messages — no scroll, page scrolls ── */}
      <div className="space-y-3 p-5">
        <AnimatePresence initial={false}>
          {messages.map(msg => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] as const }}
              className={
                msg.from === "kaizen" ? "flex gap-2.5" :
                msg.from === "warning" ? "flex justify-center" :
                "flex justify-end"
              }
            >
              {msg.from === "kaizen" && (
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-teal/30 bg-teal/10">
                  <span className="font-mono text-[8px] font-bold text-teal">K</span>
                </div>
              )}
              {msg.from === "warning" ? (
                <span className="rounded-full border border-red-500/20 bg-red-500/8 px-3 py-1 font-mono text-[9px] text-red-400">
                  Input bloqueado — política de seguridad
                </span>
              ) : (
                <div className={
                  msg.from === "kaizen"
                    ? "max-w-[85%] rounded-2xl rounded-tl-sm border border-teal/15 bg-teal/8 px-4 py-2.5"
                    : "max-w-[85%] rounded-2xl rounded-tr-sm border border-white/8 bg-white/5 px-4 py-2.5"
                }>
                  <p className="font-sans text-sm leading-relaxed text-white/80">{msg.text}</p>
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {/* ── Active inputs ── */}
        <AnimatePresence mode="wait">

          {/* Member count — number input */}
          {step === "memberCount" && (
            <motion.div key="memberCount" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }}
              className="flex gap-2 pl-8"
            >
              {[2, 3, 4, 5].map(n => (
                <button key={n} type="button"
                  onClick={() => { setText(String(n)); setTextError(""); }}
                  className={`rounded-xl border px-4 py-2 font-mono text-sm font-bold transition-colors ${
                    text === String(n) ? "border-teal/50 bg-teal/15 text-teal" : "border-white/10 bg-white/3 text-muted-foreground hover:border-white/20 hover:text-white"
                  }`}
                >
                  {n}
                </button>
              ))}
            </motion.div>
          )}

          {/* Member card */}
          {isMemberStep && (
            <motion.div key={step} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }}
              className="ml-8 space-y-3 rounded-2xl border border-teal/15 bg-teal/5 p-4"
            >
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Integrante {currentMemberIdx + 1}
              </p>
              <div className="grid gap-2 sm:grid-cols-3">
                {/* Nombre */}
                <div className="space-y-1">
                  <label htmlFor="draft-nombre" className="block font-mono text-[10px] text-muted-foreground">
                    Nombre <span aria-hidden className="text-teal">*</span>
                  </label>
                  <input id="draft-nombre" type="text"
                    value={draft.nombre}
                    onChange={ev => { setDraft(d => ({ ...d, nombre: ev.target.value })); setDraftErrors(d => ({ ...d, nombre: undefined })); }}
                    placeholder={p.memberNombre}
                    aria-required="true"
                    aria-invalid={!!draftErrors.nombre}
                    className="w-full rounded-lg border border-white/8 bg-white/5 px-3 py-2 font-sans text-sm text-white placeholder:text-muted-foreground focus:border-teal/50 focus:outline-none"
                  />
                  {draftErrors.nombre && <p role="alert" className="font-mono text-[10px] text-red-400">{draftErrors.nombre}</p>}
                </div>
                {/* Rol */}
                <div className="space-y-1">
                  <label htmlFor="draft-rol" className="block font-mono text-[10px] text-muted-foreground">
                    Rol <span aria-hidden className="text-teal">*</span>
                  </label>
                  <input id="draft-rol" type="text"
                    value={draft.rol}
                    onChange={ev => { setDraft(d => ({ ...d, rol: ev.target.value })); setDraftErrors(d => ({ ...d, rol: undefined })); }}
                    placeholder={p.memberRol}
                    aria-required="true"
                    aria-invalid={!!draftErrors.rol}
                    className="w-full rounded-lg border border-white/8 bg-white/5 px-3 py-2 font-sans text-sm text-white placeholder:text-muted-foreground focus:border-teal/50 focus:outline-none"
                  />
                  {draftErrors.rol && <p role="alert" className="font-mono text-[10px] text-red-400">{draftErrors.rol}</p>}
                </div>
                {/* LinkedIn */}
                <div className="space-y-1">
                  <label htmlFor="draft-linkedin" className="block font-mono text-[10px] text-muted-foreground">
                    LinkedIn <span aria-hidden className="text-teal">*</span>
                  </label>
                  <input id="draft-linkedin" type="url"
                    value={draft.linkedin}
                    onChange={ev => { setDraft(d => ({ ...d, linkedin: ev.target.value })); setDraftErrors(d => ({ ...d, linkedin: undefined })); }}
                    placeholder={p.memberLinkedIn}
                    aria-required="true"
                    aria-invalid={!!draftErrors.linkedin}
                    className="w-full rounded-lg border border-white/8 bg-white/5 px-3 py-2 font-sans text-sm text-white placeholder:text-muted-foreground focus:border-teal/50 focus:outline-none"
                  />
                  {draftErrors.linkedin && <p role="alert" className="font-mono text-[10px] text-red-400">{draftErrors.linkedin}</p>}
                </div>
              </div>
              <button type="button" onClick={handleMemberDraft}
                className="flex items-center gap-2 rounded-xl bg-teal px-4 py-2 font-mono text-xs font-bold text-white transition-opacity hover:opacity-90"
              >
                {i18n.btnConfirm} <ArrowRight size={12} />
              </button>
            </motion.div>
          )}

          {/* Stack chips */}
          {step === "stack" && (
            <motion.div key="stack" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }}
              className="space-y-3 pl-8"
            >
              <div className="flex flex-wrap gap-2" role="group" aria-label="Stack">
                {STACKS.map(s => {
                  const sel = stacks.includes(s);
                  return (
                    <button key={s} type="button" onClick={() => setStacks(prev => sel ? prev.filter(x => x !== s) : [...prev, s])}
                      aria-pressed={sel}
                      className={`rounded-full border px-3 py-1.5 font-mono text-xs font-bold transition-all ${
                        sel ? "border-teal/50 bg-teal/15 text-teal" : "border-white/10 bg-white/3 text-muted-foreground hover:border-white/20 hover:text-white"
                      }`}
                    >
                      {s}
                    </button>
                  );
                })}
              </div>
              {stackError && <p role="alert" className="font-mono text-xs text-red-400">{stackError}</p>}
              <button type="button" onClick={handleStack}
                className="flex items-center gap-2 rounded-xl bg-teal px-4 py-2 font-mono text-xs font-bold text-white transition-opacity hover:opacity-90"
              >
                {i18n.btnConfirm} <ArrowRight size={12} />
              </button>
            </motion.div>
          )}

          {/* Terms */}
          {step === "terms" && (
            <motion.div key="terms" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }}
              className="space-y-3 pl-8"
            >
              <div className="flex items-start gap-3">
                <div className="relative mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center">
                  <input id="kt-terms" type="checkbox" checked={terms}
                    onChange={ev => { setTerms(ev.target.checked); setTermsError(""); }}
                    className="h-5 w-5 cursor-pointer appearance-none rounded border border-white/20 bg-white/5 checked:border-teal/50 checked:bg-teal/20 focus:outline-none"
                    aria-required="true"
                  />
                  {terms && <CheckCircle2 size={11} className="pointer-events-none absolute text-teal" />}
                </div>
                <label htmlFor="kt-terms" className="cursor-pointer font-sans text-sm leading-relaxed text-muted-foreground">
                  {i18n.termsText.replace("{{terms}}", i18n.termsLink1).replace("{{privacy}}", i18n.termsLink2)}
                </label>
              </div>
              {termsError && <p role="alert" className="font-mono text-xs text-red-400">{termsError}</p>}
              <button type="button" onClick={handleTerms}
                className="flex items-center gap-2 rounded-xl bg-teal px-4 py-2 font-mono text-xs font-bold text-white transition-opacity hover:opacity-90"
              >
                {i18n.btnConfirm} <ArrowRight size={12} />
              </button>
            </motion.div>
          )}

          {/* Review */}
          {step === "review" && (
            <motion.div key="review" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }}
              className="space-y-3 pl-8"
            >
              <ReviewSummary data={data} i18n={i18n} />
              <button type="button" onClick={handleSubmit} disabled={submitting}
                className="flex items-center gap-2 rounded-xl bg-teal px-5 py-2.5 font-mono text-sm font-bold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
              >
                {submitting
                  ? <><span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/30 border-t-white" />{i18n.btnSubmitting}</>
                  : <>{i18n.btnSubmit}<ArrowRight size={13} /></>
                }
              </button>
            </motion.div>
          )}

        </AnimatePresence>

        {/* Scroll anchor */}
        <div ref={bottomRef} />
      </div>

      {/* ── Text input bar (only for text steps) ── */}
      {isTextStep && (
        <div className="border-t border-white/5 px-4 py-3">
          <div className="flex items-center gap-2">
            <input ref={inputRef}
              type={step === "email" ? "email" : step === "memberCount" ? "number" : "text"}
              value={text}
              onChange={ev => { setText(ev.target.value); setTextError(""); }}
              onKeyDown={onKeyDown}
              min={step === "memberCount" ? 2 : undefined}
              max={step === "memberCount" ? 20 : undefined}
              placeholder={
                step === "greeting"    ? p.squadName :
                step === "memberCount" ? p.memberCount :
                step === "email"       ? p.email : ""
              }
              aria-label="Respuesta"
              className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 font-sans text-sm text-white placeholder:text-muted-foreground focus:border-teal/50 focus:outline-none"
            />
            <button type="button" aria-label={i18n.btnSend}
              onClick={() => {
                if (step === "greeting")    handleSquadName();
                if (step === "memberCount") handleMemberCount();
                if (step === "email")       handleEmail();
              }}
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal text-white transition-opacity hover:opacity-90"
            >
              <ArrowRight size={14} />
            </button>
          </div>
          {textError && <p role="alert" className="mt-1.5 pl-1 font-mono text-xs text-red-400">{textError}</p>}
        </div>
      )}
    </div>
  );
}

/* ─── ReviewSummary ───────────────────────────────────────── */

function ReviewSummary({ data, i18n }: { data: Partial<FormData>; i18n: PreregistroTranslations }) {
  return (
    <div className="rounded-xl border border-white/8 bg-white/3 p-4">
      <p className="mb-3 font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
        {i18n.successSummaryTitle}
      </p>
      <dl className="space-y-2">
        {[
          [i18n.reviewSquadName, data.squadName],
          [i18n.reviewStack,     data.stacks?.join(", ")],
          [i18n.reviewEmail,     data.email],
          ...(data.members ?? []).map((m, i) => [`${i18n.reviewMembers} ${i + 1}`, `${m.nombre} · ${m.rol}`]),
        ].map(([label, value]) =>
          value ? (
            <div key={label as string} className="flex gap-2">
              <dt className="w-24 shrink-0 font-mono text-[10px] text-muted-foreground">{label}</dt>
              <dd className="font-sans text-[11px] text-white/80">{value}</dd>
            </div>
          ) : null
        )}
      </dl>
    </div>
  );
}

/* ─── SuccessView ─────────────────────────────────────────── */

function SuccessView({ i18n, data }: { i18n: PreregistroTranslations; data: FormData }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
      className="flex flex-col items-center gap-8 p-8 text-center"
    >
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 -z-10 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(13,148,136,0.3) 0%, transparent 70%)", filter: "blur(20px)" }}
          aria-hidden
        />
        <div className="flex h-20 w-20 items-center justify-center rounded-full border border-teal/30 bg-teal/10">
          <CheckCircle2 size={36} className="text-teal" />
        </div>
      </div>
      <div>
        <h2 className="mb-2 font-display text-3xl font-bold text-white">{i18n.successH2}</h2>
        <p className="font-sans text-lg text-muted-foreground">{i18n.successBody}</p>
      </div>
      <div className="w-full max-w-sm rounded-2xl border border-white/8 bg-white/3 p-5 text-left">
        <p className="mb-4 font-mono text-xs text-muted-foreground">{i18n.successNote}</p>
        <ReviewSummary data={data} i18n={i18n} />
      </div>
    </motion.div>
  );
}
