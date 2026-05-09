"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X, ArrowRight, CheckCircle2, Shield,
  Users, Layers, FolderOpen, Mail, Circle, TrendingUp,
  ChevronDown, ChevronRight, Pencil, Trash2,
} from "lucide-react";
import type { Locale, PreregistroTranslations } from "@/lib/i18n/preregistro";
import {
  detectInjection, detectOutOfScope,
  sanitizeInput, sanitizeOutput, isSafeUrl,
} from "@/lib/securityUtils";

/* ─── Types ───────────────────────────────────────────────── */

interface Skill {
  name: string;
  level: 1 | 2 | 3 | 4;
}

interface ProjectData {
  nombre: string;
  descripcion: string;
  link: string;
  linkValidated: boolean;
  linkDomain: string;
}

interface Member {
  nombre: string;
  rol: string;
  skills: Skill[];
  linkedin: string;
  industries: string[];
  experienciaAnios: null;
  experienciaDetalle: null;
  proyectos: null;
}

interface FormData {
  squadName: string;
  members: Member[];
  yearsExperience: number;
  stacks: string[];
  project: ProjectData | null;
  email: string;
  acceptedTerms: boolean;
  industriasComunes: null;
  experienciaPromedio: null;
}

type MessageFrom = "kaizen" | "user" | "warning";
interface ChatMessage { id: string; from: MessageFrom; text: string; }

type ChatStep =
  | "greeting" | "memberCount" | `member_${number}`
  | "yearsExperience" | "stack" | "project"
  | "email" | "terms" | "review";

type StepperIdx = 0 | 1 | 2 | 3 | 4 | 5;

/* ─── Role & Skills constants ─────────────────────────────── */

const ROLE_GROUPS = [
  {
    label: "Técnico",
    roles: ["Frontend", "Backend", "Full Stack", "Mobile", "Tech Lead", "DevOps / SRE", "QA / Testing", "Data Engineer", "ML / AI", "Analista de Datos"],
  },
  {
    label: "Diseño",
    roles: ["UX/UI Design", "UX Research", "Product Design", "Motion Design"],
  },
  {
    label: "Producto & Gestión",
    roles: ["Product Manager", "Product Owner", "Business Analyst", "Project Manager", "Scrum Master"],
  },
] as const;

const ROLES = ROLE_GROUPS.flatMap(g => g.roles);

const SKILLS_BY_ROL: Record<string, string[]> = {
  "Frontend":         ["React", "Vue", "Angular", "Svelte", "Next.js", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind", "Sass/SCSS", "Redux", "Zustand", "GraphQL", "REST APIs", "Vite", "Webpack", "Storybook", "Testing (Jest/Vitest)"],
  "Backend":          ["Node.js", "Python", "Go", "Java", "Rust", "PHP", "Ruby", "C#", ".NET", "Django", "FastAPI", "Spring", "PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch", "Docker", "REST APIs", "GraphQL", "gRPC", "Kafka", "RabbitMQ", "AWS"],
  "Full Stack":       ["React", "Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL", "MongoDB", "Redis", "Docker", "REST APIs", "GraphQL", "AWS", "Prisma", "Supabase", "tRPC"],
  "Mobile":           ["React Native", "Flutter", "Swift (iOS)", "Kotlin (Android)", "SwiftUI", "Jetpack Compose", "Expo", "Firebase", "Push Notifications", "App Store / Play Store"],
  "Tech Lead":        ["Architecture Design", "System Design", "Code Review", "Technical Roadmap", "Mentoring", "API Design", "Security", "Performance", "Cloud (AWS/GCP/Azure)", "Microservices", "CI/CD", "Documentation"],
  "DevOps / SRE":     ["Docker", "Kubernetes", "AWS", "GCP", "Azure", "Terraform", "Ansible", "CI/CD", "GitHub Actions", "Jenkins", "Linux", "Nginx", "Bash / Shell", "Prometheus / Grafana", "Datadog"],
  "QA / Testing":     ["Manual Testing", "Automated Testing", "Cypress", "Playwright", "Selenium", "Jest", "Postman", "JMeter", "TestRail", "JIRA", "Performance Testing", "API Testing", "Accessibility Testing"],
  "Data Engineer":    ["Python", "SQL", "Spark", "Kafka", "Airflow", "dbt", "AWS Glue", "Snowflake", "BigQuery", "Redshift", "PostgreSQL", "ETL / ELT", "Data Pipelines", "Hadoop"],
  "ML / AI":          ["Python", "TensorFlow", "PyTorch", "scikit-learn", "LangChain", "OpenAI API", "HuggingFace", "Vector DBs", "RAG", "MLOps", "NLP", "Computer Vision", "Pandas", "NumPy", "Statistics"],
  "Analista de Datos":["SQL", "Python", "R", "Tableau", "Power BI", "Looker", "Excel avanzado", "Google Analytics", "Mixpanel", "Statistics", "A/B Testing", "Data Storytelling"],
  "UX/UI Design":     ["Figma", "Adobe XD", "Sketch", "Prototyping", "Wireframing", "Design Systems", "Interaction Design", "Information Architecture", "Accessibility (a11y)", "Handoff (Zeplin/Inspect)"],
  "UX Research":      ["User Interviews", "Usability Testing", "Survey Design", "Journey Mapping", "Personas", "Competitive Analysis", "A/B Testing", "Tree Testing", "Card Sorting", "Figma", "Dovetail"],
  "Product Design":   ["Figma", "Adobe Illustrator", "Adobe Photoshop", "Brand Identity", "Typography", "Design Systems", "Iconography", "Illustration", "Motion Design"],
  "Motion Design":    ["After Effects", "Figma", "Lottie / LottieFiles", "CSS Animations", "Principle", "ProtoPie", "Blender", "Cinema 4D", "Premiere Pro"],
  "Product Manager":  ["Roadmapping", "User Stories", "OKRs", "A/B Testing", "Analytics (GA, Mixpanel)", "SQL", "Figma", "JIRA", "Stakeholder Management", "Product Strategy", "Competitive Analysis", "Go-to-market"],
  "Product Owner":    ["Backlog Management", "User Stories", "Acceptance Criteria", "Sprint Planning", "Agile / Scrum", "JIRA", "Stakeholder Management", "Roadmapping", "Prioritization", "Definition of Done"],
  "Business Analyst": ["Requirements Gathering", "Process Mapping", "SQL", "Tableau / Power BI", "JIRA", "Confluence", "User Stories", "Wireframing", "Gap Analysis", "BPMN", "Documentation"],
  "Project Manager":  ["Agile", "Scrum", "Kanban", "JIRA", "Trello / Asana", "Risk Management", "Budgeting", "Stakeholder Management", "Resource Planning", "PMP", "Prince2"],
  "Scrum Master":     ["Scrum", "Kanban", "Agile Coaching", "Sprint Ceremonies", "JIRA", "Confluence", "Team Facilitation", "Retrospectives", "Impediment Removal", "Velocity Tracking"],
};

const MIN_SKILLS: Record<string, number> = {
  "Frontend": 2, "Backend": 2, "Full Stack": 2, "Mobile": 2, "Tech Lead": 2,
  "DevOps / SRE": 2, "QA / Testing": 2, "Data Engineer": 2, "ML / AI": 2, "Analista de Datos": 2,
  "UX/UI Design": 1, "UX Research": 1, "Product Design": 1, "Motion Design": 1,
  "Product Manager": 1, "Product Owner": 1, "Business Analyst": 1, "Project Manager": 1, "Scrum Master": 1,
};

/* ─── Other constants ─────────────────────────────────────── */

const STACK_GROUPS = [
  { label: "Frontend",     items: ["React / Next.js", "Vue / Nuxt", "Angular", "Svelte", "TypeScript", "JavaScript", "HTML / CSS"] },
  { label: "Backend",      items: ["Node.js", "Python", "Go", "Java", "Rust", "PHP", "Ruby", ".NET / C#"] },
  { label: "Mobile",       items: ["React Native", "Flutter", "Swift (iOS)", "Kotlin (Android)", "Expo"] },
  { label: "Base de datos",items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Supabase", "Firebase", "Elasticsearch"] },
  { label: "Infra / Cloud",items: ["Docker / K8s", "AWS", "GCP", "Azure", "CI/CD", "Linux / DevOps", "Terraform"] },
  { label: "Data / AI",    items: ["Machine Learning", "Data Engineering", "LangChain / LLMs", "SQL / Analytics", "Spark / Kafka"] },
] as const;
const STACK_ALL = STACK_GROUPS.flatMap(g => g.items);

const INDUSTRIES = [
  "Fintech", "SaaS", "E-commerce", "Healthcare / Medtech", "EdTech",
  "Agro / AgTech", "Logística", "Real Estate", "HRTech", "LegalTech",
  "Gaming", "Media / Contenido", "Retail", "Travel / Turismo",
  "GovTech", "Ciberseguridad", "Insurance / Seguros", "Manufacturing",
] as const;
const MAX_MEMBERS = 20;
const MIN_MEMBERS = 2;
const GENERIC_RE = /\b(test|prueba|ejemplo|sample|lorem|asdf|qwerty|asd|abc|fds|xxx)\b/i;

const NUMBER_WORDS: Record<Locale, Record<string, number>> = {
  es: {
    uno: 1, dos: 2, tres: 3, cuatro: 4, cinco: 5,
    seis: 6, siete: 7, ocho: 8, nueve: 9, diez: 10,
    once: 11, doce: 12, trece: 13, catorce: 14, quince: 15,
    dieciséis: 16, dieciseis: 16, diecisiete: 17, dieciocho: 18, diecinueve: 19, veinte: 20,
  },
  pt: {
    um: 1, uma: 1, dois: 2, duas: 2, três: 3, tres: 3, quatro: 4, cinco: 5,
    seis: 6, sete: 7, oito: 8, nove: 9, dez: 10,
    onze: 11, doze: 12, treze: 13, catorze: 14, quinze: 15,
    dezesseis: 16, dezasseis: 16, dezessete: 17, dezoito: 18, dezenove: 19, vinte: 20,
  },
  en: {
    one: 1, two: 2, three: 3, four: 4, five: 5,
    six: 6, seven: 7, eight: 8, nine: 9, ten: 10,
    eleven: 11, twelve: 12, thirteen: 13, fourteen: 14, fifteen: 15,
    sixteen: 16, seventeen: 17, eighteen: 18, nineteen: 19, twenty: 20,
  },
};

const LINKEDIN_RE = /^https?:\/\/(www\.)?linkedin\.com\/in\/[\w\-]+\/?$/;

const STEP_ICONS = [Users, Users, TrendingUp, Layers, FolderOpen, Mail];
const STEP_LABELS_BY_LOCALE: Record<Locale, string[]> = {
  es: ["Squad", "Integrantes", "Experiencia", "Stack", "Proyecto", "Email"],
  pt: ["Squad", "Integrantes", "Experiência", "Stack", "Projeto", "Email"],
  en: ["Squad", "Members", "Experience", "Stack", "Project", "Email"],
};

/* ─── Helpers ─────────────────────────────────────────────── */

const uid = () => Math.random().toString(36).slice(2);
const interp = (t: string, v: Record<string, string>) =>
  t.replace(/\{\{(\w+)\}\}/g, (_, k) => v[k] ?? "");
const kMsg    = (text: string): ChatMessage => ({ id: uid(), from: "kaizen",  text: sanitizeOutput(text) });
const uMsg    = (text: string): ChatMessage => ({ id: uid(), from: "user",    text: sanitizeOutput(text) });
const warnMsg = ():             ChatMessage => ({ id: uid(), from: "warning", text: "" });

function chatStepToStepper(step: ChatStep): StepperIdx {
  if (step === "greeting") return 0;
  if (step === "memberCount" || step.startsWith("member_")) return 1;
  if (step === "yearsExperience") return 2;
  if (step === "stack") return 3;
  if (step === "project") return 4;
  return 5;
}

function parseMemberCount(input: string, locale: Locale): number | null {
  const trimmed = input.trim();
  const asNum = parseInt(trimmed, 10);
  if (!isNaN(asNum) && String(asNum) === trimmed) return asNum;
  return NUMBER_WORDS[locale][trimmed.toLowerCase()] ?? null;
}

function isValidLinkedIn(url: string): boolean {
  const normalized = url.trim().startsWith("http") ? url.trim() : `https://${url.trim()}`;
  return LINKEDIN_RE.test(normalized);
}

const BLOCKED_LINK_DOMAINS = [
  "bit.ly","tinyurl.com","goo.gl","t.co","short.io","shorturl.at",
  "ow.ly","is.gd","tiny.cc","cutt.ly","rb.gy","v.gd",
  "google.com","youtube.com","facebook.com","twitter.com","instagram.com",
  "tiktok.com","linkedin.com","wikipedia.org",
];

async function validateProjectLink(url: string): Promise<{ valid: boolean; domain?: string; error: string }> {
  let parsed: URL;
  try {
    const normalized = url.trim().startsWith("http") ? url.trim() : `https://${url.trim()}`;
    parsed = new URL(normalized);
  } catch {
    return { valid: false, error: "linkInvalid" };
  }
  if (!["http:","https:"].includes(parsed.protocol)) {
    return { valid: false, error: "linkInvalid" };
  }
  const host = parsed.hostname.toLowerCase().replace(/^www\./, "");
  if (!host.includes(".") || host === "localhost" || /^[\d.]+$/.test(host)) {
    return { valid: false, error: "linkDomainBlocked" };
  }
  if (BLOCKED_LINK_DOMAINS.some(d => host === d || host.endsWith("." + d))) {
    return { valid: false, error: "linkDomainBlocked" };
  }
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);
    await fetch(parsed.href, { method: "HEAD", mode: "no-cors", signal: controller.signal });
    clearTimeout(timeoutId);
    return { valid: true, domain: parsed.hostname, error: "" };
  } catch (err) {
    if (err instanceof Error && err.name === "AbortError") {
      return { valid: false, error: "linkUnreachable" };
    }
    return { valid: false, error: "linkUnreachable" };
  }
}

/* ─── RegistroModal ───────────────────────────────────────── */

export function RegistroModal({
  locale, i18n, onClose,
}: {
  locale: Locale;
  i18n: PreregistroTranslations;
  onClose: () => void;
}) {
  const k = i18n.kaizen;
  const p = i18n.placeholders;
  const e = i18n.errors;
  const stepLabels = STEP_LABELS_BY_LOCALE[locale];

  /* ── State ── */
  const [messages, setMessages] = useState<ChatMessage[]>([kMsg(k.greeting)]);
  const [chatStep, setChatStep] = useState<ChatStep>("greeting");
  const [data, setData]         = useState<Partial<FormData>>({ members: [], project: null, industriasComunes: null, experienciaPromedio: null });
  const [totalMembers, setTotalMembers] = useState(0);
  const [memberIdx, setMemberIdx]       = useState(0);
  const [submitted, setSubmitted]   = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Text input (bottom bar)
  const [text, setText]           = useState("");
  const [textError, setTextError] = useState("");

  // Member draft
  const [draft, setDraft] = useState<Member>({ nombre: "", rol: "", skills: [], linkedin: "", industries: [], experienciaAnios: null, experienciaDetalle: null, proyectos: null });
  const [draftErrors, setDraftErrors] = useState<Partial<Record<keyof Member | "skills", string>>>({});
  // Skills flow: phase 1 = pick, phase 2 = set levels
  const [pendingSkills, setPendingSkills]       = useState<string[]>([]);
  const [skillsAccepted, setSkillsAccepted]     = useState(false);
  const [skillSearch, setSkillSearch]           = useState("");
  const [customSkillInput, setCustomSkillInput] = useState("");

  // Stack selection
  const [stacks, setStacks]         = useState<string[]>([]);
  const [stackError, setStackError] = useState("");
  const [stackSearch, setStackSearch]           = useState("");
  const [customStackInput, setCustomStackInput] = useState("");

  // Project draft
  const [projectDraft, setProjectDraft] = useState({ nombre: "", descripcion: "", link: "" });
  const [projectErrors, setProjectErrors] = useState<{ nombre?: string; descripcion?: string; link?: string }>({});
  const [linkValidating, setLinkValidating] = useState(false);
  const [linkStatus, setLinkStatus] = useState<"idle" | "valid" | "invalid">("idle");

  // Industry selection (per member)
  const [industrySearch, setIndustrySearch]           = useState("");
  const [customIndustryInput, setCustomIndustryInput] = useState("");

  // Textarea
  const [textarea, setTextarea] = useState("");
  const [taError, setTaError]   = useState("");

  // Terms
  const [terms, setTerms]           = useState(false);
  const [termsError, setTermsError] = useState("");

  const chatBottomRef = useRef<HTMLDivElement>(null);
  const inputRef      = useRef<HTMLInputElement>(null);
  const stepperIdx    = chatStepToStepper(chatStep);

  /* ── Body scroll lock ── */
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, []);

  /* ── ESC to close ── */
  useEffect(() => {
    const onKey = (ev: KeyboardEvent) => { if (ev.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  /* ── Chat scroll ── */
  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, chatStep]);

  /* ── Input focus ── */
  useEffect(() => {
    const textSteps = ["greeting","memberCount","email","yearsExperience"];
    if (textSteps.includes(chatStep)) setTimeout(() => inputRef.current?.focus(), 80);
  }, [chatStep]);

  /* ── Security ── */
  function checkSec(input: string): boolean {
    if (detectInjection(input)) { push(warnMsg(), kMsg(k.injectionResponse)); return false; }
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

  function push(...msgs: ChatMessage[]) { setMessages(prev => [...prev, ...msgs]); }

  function advance(nextStep: ChatStep, msg: string) {
    push(kMsg(msg));
    setChatStep(nextStep);
    setText(""); setTextError("");
    setDraft({ nombre: "", rol: "", skills: [], linkedin: "", industries: [], experienciaAnios: null, experienciaDetalle: null, proyectos: null }); setDraftErrors({});
    setPendingSkills([]); setSkillsAccepted(false);
    setSkillSearch(""); setCustomSkillInput("");
    setIndustrySearch(""); setCustomIndustryInput("");
    setTextarea(""); setTaError("");
    setStackSearch(""); setCustomStackInput(""); setStackError("");
    setProjectDraft({ nombre: "", descripcion: "", link: "" });
    setProjectErrors({});
    setLinkStatus("idle");
    setLinkValidating(false);
  }

  function acceptSkills() {
    const skills: Skill[] = pendingSkills.map(name => {
      const existing = draft.skills.find(s => s.name === name);
      return { name, level: existing?.level ?? 2 };
    });
    setDraft(d => ({ ...d, skills }));
    setSkillsAccepted(true);
    setDraftErrors(d => ({ ...d, skills: undefined }));
  }

  function resetSkillsToEdit() {
    setPendingSkills(draft.skills.map(s => s.name));
    setSkillsAccepted(false);
  }

  /* ── Generic validation helpers ── */
  function checkNotGeneric(raw: string, errorSetter: (e: string) => void): boolean {
    if (GENERIC_RE.test(raw)) { errorSetter(e.tooGeneric); return false; }
    return true;
  }
  function checkMinLength(raw: string, min: number, errorSetter: (e: string) => void): boolean {
    if (raw.length < min) { errorSetter(e.tooShort); return false; }
    return true;
  }

  /* ── Handlers ── */

  function handleSquadName() {
    const raw = sanitizeInput(text);
    if (!raw) { setTextError(e.required); return; }
    if (!checkSec(raw) || !checkNotGeneric(raw, setTextError)) { setText(""); return; }
    push(uMsg(raw));
    setData(d => ({ ...d, squadName: raw }));
    advance("memberCount", interp(k.memberCount, { squadName: raw }));
  }

  function handleMemberCount() {
    const raw = sanitizeInput(text);
    const n = parseMemberCount(raw, locale);
    if (n === null || isNaN(n)) { setTextError(e.memberCountInvalid); return; }
    if (n < MIN_MEMBERS || n > MAX_MEMBERS) { setTextError(e.memberCountInvalid); return; }
    push(uMsg(String(n)));
    setTotalMembers(n);
    setData(d => ({ ...d, members: [] }));
    setMemberIdx(0);
    advance("member_0", k.memberIntro);
  }

  function handleMemberDraft() {
    const errs: Partial<Record<keyof Member | "skills", string>> = {};
    if (!draft.nombre.trim()) errs.nombre = e.required;
    if (!draft.rol)           errs.rol    = e.required;
    if (!draft.linkedin.trim()) {
      errs.linkedin = e.required;
    } else if (!isValidLinkedIn(draft.linkedin)) {
      errs.linkedin = e.linkedinInvalid;
    }
    const minS = draft.rol ? (MIN_SKILLS[draft.rol] ?? 1) : 1;
    if (!draft.rol || draft.skills.length < minS) {
      errs.skills = interp(e.skillsRequired, { n: String(minS) });
    }
    if (Object.keys(errs).length) { setDraftErrors(errs); return; }
    if (!checkSec(draft.nombre)) return;

    const confirmed: Member = {
      nombre:     sanitizeInput(draft.nombre),
      rol:        draft.rol,
      skills:     draft.skills,
      linkedin:   sanitizeInput(draft.linkedin),
      industries: draft.industries.map(sanitizeInput),
      experienciaAnios:   null,
      experienciaDetalle: null,
      proyectos:          null,
    };
    push(uMsg(`${confirmed.nombre} · ${confirmed.rol} · ${confirmed.skills.slice(0,3).map(s => s.name).join(", ")}`));
    const newMembers = [...(data.members ?? []), confirmed];
    setData(d => ({ ...d, members: newMembers }));

    const nextIdx = memberIdx + 1;
    if (nextIdx < totalMembers) {
      setMemberIdx(nextIdx);
      const ordinal = i18n.ordinals[nextIdx - 1] ?? `${nextIdx + 1}`;
      advance(`member_${nextIdx}`, interp(k.memberNext, { ordinal }));
    } else {
      advance("yearsExperience", k.yearsExperience);
    }
  }

  function handleYearsExperience() {
    const raw = sanitizeInput(text);
    const n = parseInt(raw, 10);
    if (isNaN(n) || n < 0 || n > 60) { setTextError(e.required); return; }
    push(uMsg(`${n} años`));
    setData(d => ({ ...d, yearsExperience: n }));
    advance("stack", k.stack);
  }

  function handleStack() {
    if (!stacks.length) { setStackError(e.required); return; }
    push(uMsg(stacks.join(", ")));
    setData(d => ({ ...d, stacks }));
    setStacks([]);
    advance("project", k.project);
  }

  async function handleValidateLink() {
    const url = projectDraft.link.trim();
    if (!url) { setProjectErrors(d => ({ ...d, link: e.required })); return; }
    setLinkValidating(true);
    setLinkStatus("idle");
    setProjectErrors(d => ({ ...d, link: undefined }));
    const result = await validateProjectLink(url);
    setLinkValidating(false);
    if (result.valid) {
      setLinkStatus("valid");
    } else {
      setLinkStatus("invalid");
      const msg = result.error === "linkInvalid" ? e.linkInvalid
        : result.error === "linkDomainBlocked" ? e.linkDomainBlocked
        : e.linkUnreachable;
      setProjectErrors(d => ({ ...d, link: msg }));
    }
  }

  function handleProjectDraft() {
    const errs: { nombre?: string; descripcion?: string; link?: string } = {};
    if (!projectDraft.nombre.trim()) errs.nombre = e.required;
    if (projectDraft.descripcion.trim().length < 30) errs.descripcion = e.descTooShort;
    if (projectDraft.descripcion.trim().length > 280) errs.descripcion = e.descTooLong;
    if (!projectDraft.link.trim()) errs.link = e.required;
    else if (linkStatus !== "valid") errs.link = "Validá el link antes de continuar.";
    if (Object.keys(errs).length) { setProjectErrors(errs); return; }

    const project: ProjectData = {
      nombre:        sanitizeInput(projectDraft.nombre),
      descripcion:   sanitizeInput(projectDraft.descripcion),
      link:          sanitizeInput(projectDraft.link),
      linkValidated: true,
      linkDomain:    new URL(projectDraft.link.startsWith("http") ? projectDraft.link : `https://${projectDraft.link}`).hostname,
    };
    push(uMsg(`${project.nombre} · ${project.link}`));
    setData(d => ({ ...d, project }));
    advance("email", k.email);
  }

  function handleEmail() {
    const raw = sanitizeInput(text);
    if (!raw) { setTextError(e.required); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(raw)) { setTextError(e.emailInvalid); return; }
    push(uMsg(raw));
    setData(d => ({ ...d, email: raw }));
    advance("terms", k.terms);
  }

  function handleTerms() {
    if (!terms) { setTermsError(e.termsRequired); return; }
    push(uMsg("✓"));
    setData(d => ({ ...d, acceptedTerms: true }));
    advance("review", interp(k.review, { squadName: data.squadName ?? "" }));
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
      if (chatStep === "greeting")             handleSquadName();
      else if (chatStep === "memberCount")     handleMemberCount();
      else if (chatStep === "yearsExperience") handleYearsExperience();
      else if (chatStep === "email")           handleEmail();
    }
  }

  const isMemberStep = chatStep.startsWith("member_");
  const isTextStep   = ["greeting","memberCount","email","yearsExperience"].includes(chatStep);

  /* ── Render ── */
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5"
      style={{ background: "rgba(0,0,0,0.88)", backdropFilter: "blur(8px)" }}
      onMouseDown={(ev) => { if (ev.target === ev.currentTarget) onClose(); }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      {/* Rising light — teal/cyan glow from bottom */}
      <motion.div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 60 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
        style={{
          width: "140vw",
          height: "90vh",
          background: "radial-gradient(ellipse 90% 70% at 50% 100%, rgba(13,148,136,0.80) 0%, rgba(0,180,216,0.45) 35%, rgba(0,180,216,0.15) 60%, transparent 80%)",
          filter: "blur(20px)",
        }}
        aria-hidden
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.93, y: 56 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 36 }}
        transition={{ type: "spring", stiffness: 380, damping: 32 }}
        className="relative w-full"
        style={{
          maxWidth: "1200px",
          filter: "drop-shadow(0 0 80px rgba(0,180,216,0.18)) drop-shadow(0 32px 80px rgba(0,0,0,0.7))",
        }}
        onClick={ev => ev.stopPropagation()}
        onMouseDown={ev => ev.stopPropagation()}
      >
        <div
          className="relative flex overflow-hidden rounded-2xl"
          style={{
            background: "#080f0e",
            height: "min(84vh, 760px)",
            border: "1px solid rgba(0,180,216,0.22)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
          }}
        >
          {/* Close */}
          <button
            onClick={onClose}
            aria-label={i18n.btnClose}
            className="absolute right-4 top-4 z-20 flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-muted-foreground transition-colors hover:border-white/20 hover:text-white"
          >
            <X size={14} />
          </button>

          {submitted ? (
            <SuccessScreen i18n={i18n} data={data as FormData} onClose={onClose} />
          ) : (
            <>
              {/* ── LEFT: Stepper ── */}
              <div
                className="hidden flex-col gap-0.5 border-r border-white/12 px-4 py-8 lg:flex"
                style={{ width: "18%", minWidth: "160px", background: "#050c0b", flexShrink: 0 }}
              >
                <p className="mb-5 font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-muted-foreground">
                  {i18n.modalTitle}
                </p>
                {stepLabels.map((label, i) => {
                  const Icon = STEP_ICONS[i];
                  const isActive    = stepperIdx === i;
                  const isCompleted = stepperIdx > i;
                  return (
                    <div key={i} className="relative flex items-center gap-3 px-2 py-2.5">
                      {i < stepLabels.length - 1 && (
                        <div
                          className="absolute bottom-0 left-[17px] top-[calc(50%+10px)] w-px"
                          style={{ background: isCompleted ? "rgba(0,180,216,0.35)" : "rgba(255,255,255,0.14)" }}
                        />
                      )}
                      <div
                        className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-all duration-300"
                        style={{
                          borderColor: isActive ? "#00b4d8" : isCompleted ? "#0d9488" : "rgba(255,255,255,0.1)",
                          background:  isActive  ? "rgba(0,180,216,0.12)" : isCompleted ? "rgba(13,148,136,0.12)" : "rgba(255,255,255,0.03)",
                        }}
                      >
                        {isCompleted
                          ? <CheckCircle2 size={11} style={{ color: "#0d9488" }} />
                          : <Icon size={11} style={{ color: isActive ? "#00b4d8" : "rgba(255,255,255,0.45)" }} />
                        }
                      </div>
                      <span
                        className="font-mono text-xs font-bold transition-colors duration-300"
                        style={{ color: isActive ? "#00b4d8" : isCompleted ? "#0d9488" : "rgba(255,255,255,0.50)" }}
                      >
                        {label}
                      </span>
                      {isActive && (
                        <motion.div
                          layoutId="stepper-active"
                          className="absolute inset-0 rounded-lg"
                          style={{ background: "rgba(0,180,216,0.05)", border: "1px solid rgba(0,180,216,0.12)" }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
                        />
                      )}
                    </div>
                  );
                })}
                <div className="mt-auto flex items-center gap-1.5 pt-4">
                  <Shield size={9} className="text-teal" />
                  <span className="font-mono text-[9px] text-muted-foreground">{i18n.heroTrust}</span>
                </div>
              </div>

              {/* ── CENTER: Chat ── */}
              <div className="flex min-h-0 min-w-0 flex-1 flex-col">
                {/* Header */}
                <div
                  className="flex h-14 shrink-0 items-center gap-3 border-b border-white/12 px-5"
                  style={{ background: "#020c0b" }}
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-full border border-teal/30 bg-teal/10">
                    <span className="font-mono text-[10px] font-bold text-teal">K</span>
                  </div>
                  <div>
                    <p className="font-mono text-sm font-bold text-white">Kaizen</p>
                    <div className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal" />
                      <p className="font-mono text-[9px] text-muted-foreground">modo registro</p>
                    </div>
                  </div>
                  <div className="ml-auto flex items-center gap-1.5 rounded-full border border-teal/20 bg-teal/5 px-2.5 py-1 lg:hidden">
                    <span className="font-mono text-[10px] font-bold text-teal">{stepperIdx + 1}/6</span>
                    <span className="font-mono text-[9px] text-muted-foreground">{stepLabels[stepperIdx]}</span>
                  </div>
                </div>

                {/* Messages */}
                <div
                  className="flex-1 space-y-3 overflow-y-auto p-4"
                  style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(255,255,255,0.08) transparent" }}
                  data-lenis-prevent
                >
                  <AnimatePresence initial={false}>
                    {messages.map(msg => (
                      <motion.div
                        key={msg.id}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] as const }}
                        className={
                          msg.from === "kaizen"  ? "flex gap-2.5" :
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
                              ? "max-w-[88%] rounded-2xl rounded-tl-sm border border-teal/30 bg-teal/8 px-4 py-2.5"
                              : "max-w-[88%] rounded-2xl rounded-tr-sm border border-white/18 bg-white/5 px-4 py-2.5"
                          }>
                            <p className="font-sans text-sm leading-relaxed text-white/80">{msg.text}</p>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {/* Active inputs */}
                  <AnimatePresence mode="wait">

                    {/* Member card */}
                    {isMemberStep && (
                      <motion.div key={chatStep}
                        initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }}
                        className="ml-8 space-y-4 rounded-2xl border border-teal/30 bg-teal/5 p-4"
                      >
                        <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                          {i18n.memberLabel} {memberIdx + 1}
                        </p>

                        {/* Nombre */}
                        <div className="space-y-1">
                          <label htmlFor="dn" className="block font-sans text-xs font-semibold text-white/75">
                            Nombre completo <span aria-hidden className="text-teal">*</span>
                          </label>
                          <input id="dn" type="text" value={draft.nombre} autoComplete="name"
                            onChange={ev => { setDraft(d => ({ ...d, nombre: ev.target.value })); setDraftErrors(d => ({ ...d, nombre: undefined })); }}
                            placeholder={p.memberNombre}
                            aria-required="true"
                            aria-invalid={!!draftErrors.nombre}
                            aria-describedby={draftErrors.nombre ? "err-nombre" : undefined}
                            className="w-full rounded-xl border border-white/18 bg-black/20 px-3 py-2.5 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:border-cyan/40 focus:outline-none focus:ring-1 focus:ring-cyan/20"
                          />
                          {draftErrors.nombre && <p id="err-nombre" role="alert" className="font-mono text-[10px] text-red-400">{draftErrors.nombre}</p>}
                        </div>

                        {/* LinkedIn */}
                        <div className="space-y-1">
                          <label htmlFor="dl" className="block font-sans text-xs font-semibold text-white/75">
                            LinkedIn <span aria-hidden className="text-teal">*</span>
                          </label>
                          <input id="dl" type="url" value={draft.linkedin} autoComplete="url"
                            onChange={ev => { setDraft(d => ({ ...d, linkedin: ev.target.value })); setDraftErrors(d => ({ ...d, linkedin: undefined })); }}
                            placeholder={p.memberLinkedIn}
                            aria-required="true"
                            aria-invalid={!!draftErrors.linkedin}
                            aria-describedby={draftErrors.linkedin ? "err-linkedin" : undefined}
                            className="w-full rounded-xl border border-white/18 bg-black/20 px-3 py-2.5 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:border-cyan/40 focus:outline-none focus:ring-1 focus:ring-cyan/20"
                          />
                          {draftErrors.linkedin && <p id="err-linkedin" role="alert" className="font-mono text-[10px] text-red-400">{draftErrors.linkedin}</p>}
                        </div>

                        {/* ── Rol dropdown ── */}
                        <RoleDropdown
                          value={draft.rol}
                          onSelect={r => {
                            setDraft(d => ({ ...d, rol: r, skills: [] }));
                            setPendingSkills([]);
                            setSkillsAccepted(false);
                            setSkillSearch("");
                            setCustomSkillInput("");
                            setDraftErrors(d => ({ ...d, rol: undefined, skills: undefined }));
                          }}
                          error={draftErrors.rol}
                        />

                        {/* ── Skills dropdown — aparece al elegir rol ── */}
                        <AnimatePresence>
                          {draft.rol && !skillsAccepted && (
                            <motion.div key="skills-pick"
                              initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] as const }}
                              className="overflow-hidden space-y-2"
                            >
                              <SkillsMultiSelect
                                rol={draft.rol}
                                selected={pendingSkills}
                                onToggle={s => setPendingSkills(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s])}
                                onAddCustom={name => setPendingSkills(prev => [...prev, name])}
                                search={skillSearch}
                                onSearch={setSkillSearch}
                                customInput={customSkillInput}
                                onCustomInputChange={setCustomSkillInput}
                                minSkills={MIN_SKILLS[draft.rol] ?? 1}
                                error={draftErrors.skills}
                              />
                              <div className="flex items-center justify-between">
                                <span className="font-mono text-[10px] text-muted-foreground">
                                  {pendingSkills.length > 0
                                    ? `${pendingSkills.length} seleccionada${pendingSkills.length !== 1 ? "s" : ""}`
                                    : "Ninguna seleccionada"
                                  }
                                </span>
                                <button type="button"
                                  onClick={acceptSkills}
                                  disabled={pendingSkills.length < (MIN_SKILLS[draft.rol] ?? 1)}
                                  className="flex items-center gap-1.5 rounded-xl border border-cyan/30 bg-cyan/8 px-3.5 py-1.5 font-mono text-xs font-bold text-cyan transition-all hover:bg-cyan/15 disabled:cursor-not-allowed disabled:opacity-35"
                                >
                                  Aceptar <ArrowRight size={11} />
                                </button>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* ── Nivel por skill — aparece tras aceptar ── */}
                        <AnimatePresence>
                          {skillsAccepted && draft.skills.length > 0 && (
                            <motion.div key="skills-levels"
                              initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] as const }}
                              className="overflow-hidden"
                            >
                              <div className="space-y-3 rounded-xl border border-white/18 bg-black/15 p-3">
                                <div className="flex items-center justify-between">
                                  <p className="font-sans text-xs font-semibold text-white/75">Nivel de expertise</p>
                                  <button type="button" onClick={resetSkillsToEdit}
                                    className="font-mono text-[10px] text-cyan/70 transition-colors hover:text-cyan"
                                    aria-label="Volver a la selección de skills"
                                  >
                                    Cambiar selección
                                  </button>
                                </div>
                                <div className="space-y-3" role="list" aria-label="Skills seleccionadas con nivel">
                                  {draft.skills.map(skill => (
                                    <div key={skill.name} role="listitem" className="space-y-1.5">
                                      <p className="font-sans text-sm text-foreground">{skill.name}</p>
                                      <SkillLevelSegmented
                                        level={skill.level}
                                        labels={i18n.skillLevelLabels}
                                        onChange={l => setDraft(d => ({
                                          ...d,
                                          skills: d.skills.map(s => s.name === skill.name ? { ...s, level: l } : s),
                                        }))}
                                      />
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Industrias */}
                        <IndustriesMultiSelect
                          selected={draft.industries}
                          onToggle={s => setDraft(d => ({
                            ...d,
                            industries: d.industries.includes(s)
                              ? d.industries.filter(x => x !== s)
                              : [...d.industries, s],
                          }))}
                          onAddCustom={name => setDraft(d => ({ ...d, industries: [...d.industries, name] }))}
                          search={industrySearch}
                          onSearch={setIndustrySearch}
                          customInput={customIndustryInput}
                          onCustomInputChange={setCustomIndustryInput}
                          placeholder={p.industries}
                          label={i18n.reviewIndustries}
                        />

                        <button type="button" onClick={handleMemberDraft}
                          className="flex items-center gap-2 rounded-xl bg-teal px-4 py-2 font-sans text-sm font-semibold text-white transition-opacity hover:opacity-90"
                        >
                          {i18n.btnConfirm} <ArrowRight size={13} />
                        </button>
                      </motion.div>
                    )}

                    {/* Stack multi-select */}
                    {chatStep === "stack" && (
                      <motion.div key="stack"
                        initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }}
                        className="space-y-3 pl-8"
                      >
                        <StackMultiSelect
                          selected={stacks}
                          onToggle={s => setStacks(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s])}
                          onAddCustom={name => setStacks(prev => [...prev, name])}
                          search={stackSearch}
                          onSearch={setStackSearch}
                          customInput={customStackInput}
                          onCustomInputChange={setCustomStackInput}
                          error={stackError}
                        />
                        <button type="button" onClick={handleStack}
                          className="flex items-center gap-2 rounded-xl bg-teal px-4 py-2 font-mono text-xs font-bold text-white transition-opacity hover:opacity-90"
                        >
                          {i18n.btnConfirm} <ArrowRight size={12} />
                        </button>
                      </motion.div>
                    )}

                    {/* Project card */}
                    {chatStep === "project" && (
                      <motion.div key="project"
                        initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }}
                        className="ml-8 space-y-4 rounded-2xl border border-teal/30 bg-teal/5 p-4"
                      >
                        <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                          Proyecto destacado
                        </p>

                        {/* Nombre */}
                        <div className="space-y-1">
                          <label htmlFor="proj-nombre" className="block font-sans text-xs font-semibold text-white/75">
                            Nombre del proyecto <span aria-hidden className="text-teal">*</span>
                          </label>
                          <input id="proj-nombre" type="text" value={projectDraft.nombre}
                            onChange={ev => { setProjectDraft(d => ({ ...d, nombre: ev.target.value })); setProjectErrors(d => ({ ...d, nombre: undefined })); }}
                            placeholder={p.projectName}
                            aria-required="true"
                            aria-invalid={!!projectErrors.nombre}
                            aria-describedby={projectErrors.nombre ? "err-proj-nombre" : undefined}
                            className="w-full rounded-xl border border-white/18 bg-black/20 px-3 py-2.5 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:border-cyan/40 focus:outline-none focus:ring-1 focus:ring-cyan/20"
                          />
                          {projectErrors.nombre && <p id="err-proj-nombre" role="alert" className="font-mono text-[10px] text-red-400">{projectErrors.nombre}</p>}
                        </div>

                        {/* Descripción */}
                        <div className="space-y-1">
                          <label htmlFor="proj-desc" className="block font-sans text-xs font-semibold text-white/75">
                            Descripción <span aria-hidden className="text-teal">*</span>
                          </label>
                          <p className="font-mono text-[10px] text-white/55">¿Qué construyeron, el desafío técnico y el resultado?</p>
                          <div className="flex justify-end">
                            <span className={`font-mono text-[10px] tabular-nums ${projectDraft.descripcion.length > 280 ? "text-red-400" : projectDraft.descripcion.length > 250 ? "text-gold" : projectDraft.descripcion.length >= 30 ? "text-teal/60" : "text-muted-foreground"}`}>
                              {projectDraft.descripcion.length}/280
                            </span>
                          </div>
                          <textarea id="proj-desc" value={projectDraft.descripcion} rows={3} maxLength={300}
                            onChange={ev => { setProjectDraft(d => ({ ...d, descripcion: ev.target.value })); setProjectErrors(d => ({ ...d, descripcion: undefined })); }}
                            placeholder={p.projectDesc}
                            aria-required="true"
                            aria-invalid={!!projectErrors.descripcion}
                            aria-describedby={projectErrors.descripcion ? "err-proj-desc" : undefined}
                            className="w-full resize-none rounded-xl border border-white/18 bg-black/20 px-3 py-2.5 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:border-cyan/40 focus:outline-none focus:ring-1 focus:ring-cyan/20"
                          />
                          {projectErrors.descripcion && <p id="err-proj-desc" role="alert" className="font-mono text-[10px] text-red-400">{projectErrors.descripcion}</p>}
                        </div>

                        {/* Link */}
                        <div className="space-y-1">
                          <label htmlFor="proj-link" className="block font-sans text-xs font-semibold text-white/75">
                            Link a demostración <span aria-hidden className="text-teal">*</span>
                          </label>
                          <p className="font-mono text-[10px] text-white/55">GitHub, Vercel, Netlify, sitio propio, etc.</p>
                          <div className="flex gap-2">
                            <input id="proj-link" type="url" value={projectDraft.link}
                              onChange={ev => {
                                setProjectDraft(d => ({ ...d, link: ev.target.value }));
                                setProjectErrors(d => ({ ...d, link: undefined }));
                                setLinkStatus("idle");
                              }}
                              placeholder={p.projectLink}
                              aria-required="true"
                              aria-invalid={!!projectErrors.link}
                              aria-describedby={projectErrors.link ? "err-proj-link" : undefined}
                              className="flex-1 rounded-xl border border-white/18 bg-black/20 px-3 py-2.5 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:border-cyan/40 focus:outline-none focus:ring-1 focus:ring-cyan/20"
                            />
                            <button type="button" onClick={handleValidateLink}
                              disabled={!projectDraft.link.trim() || linkValidating}
                              className="flex shrink-0 items-center gap-1.5 rounded-xl border border-white/15 px-3 py-2.5 font-mono text-xs text-muted-foreground transition-all hover:border-cyan/30 hover:text-cyan disabled:cursor-not-allowed disabled:opacity-35"
                            >
                              {linkValidating
                                ? <><span className="h-3 w-3 animate-spin rounded-full border-2 border-white/20 border-t-white/60" />Validando</>
                                : linkStatus === "valid"
                                ? <><span className="h-2 w-2 rounded-full bg-teal" />Válido</>
                                : "Validar link"
                              }
                            </button>
                          </div>
                          {linkStatus === "valid" && !projectErrors.link && (
                            <p className="flex items-center gap-1 font-mono text-[10px] text-teal">
                              <span className="h-1.5 w-1.5 rounded-full bg-teal" /> Link verificado y accesible
                            </p>
                          )}
                          {projectErrors.link && <p id="err-proj-link" role="alert" className="font-mono text-[10px] text-red-400">{projectErrors.link}</p>}
                        </div>

                        <button type="button" onClick={handleProjectDraft}
                          disabled={!projectDraft.nombre.trim() || projectDraft.descripcion.trim().length < 30 || linkStatus !== "valid"}
                          className="flex items-center gap-2 rounded-xl bg-teal px-4 py-2 font-sans text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-35"
                        >
                          Guardar proyecto <ArrowRight size={13} />
                        </button>
                      </motion.div>
                    )}

                    {/* Terms */}
                    {chatStep === "terms" && (
                      <motion.div key="terms"
                        initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }}
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

                    {/* Review / Submit */}
                    {chatStep === "review" && (
                      <motion.div key="review"
                        initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }}
                        className="pl-8"
                      >
                        <button type="button" onClick={handleSubmit} disabled={submitting}
                          className="flex items-center gap-2 rounded-xl bg-teal px-5 py-2.5 font-mono text-sm font-bold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
                        >
                          {submitting
                            ? <><span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/30 border-t-white" />{i18n.btnSubmitting}</>
                            : <>{i18n.btnSubmit} <ArrowRight size={13} /></>
                          }
                        </button>
                      </motion.div>
                    )}

                  </AnimatePresence>

                  <div ref={chatBottomRef} />
                </div>

                {/* Bottom text input bar */}
                {isTextStep && (
                  <div className="shrink-0 border-t border-white/12 px-4 py-3">
                    <div className="flex items-center gap-2">
                      <input ref={inputRef}
                        type={chatStep === "email" ? "email" : "text"}
                        value={text}
                        onChange={ev => { setText(ev.target.value); setTextError(""); }}
                        onKeyDown={onKeyDown}
                        inputMode={chatStep === "memberCount" || chatStep === "yearsExperience" ? "numeric" : undefined}
                        placeholder={
                          chatStep === "greeting"        ? p.squadName :
                          chatStep === "memberCount"     ? p.memberCount :
                          chatStep === "yearsExperience" ? p.yearsExperience :
                          chatStep === "email"           ? p.email : ""
                        }
                        aria-label="Respuesta"
                        autoComplete={chatStep === "email" ? "email" : "off"}
                        className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 font-sans text-sm text-white placeholder:text-muted-foreground focus:border-teal/50 focus:outline-none"
                      />
                      <button type="button" aria-label={i18n.btnSend}
                        onClick={() => {
                          if (chatStep === "greeting")             handleSquadName();
                          if (chatStep === "memberCount")          handleMemberCount();
                          if (chatStep === "yearsExperience")      handleYearsExperience();
                          if (chatStep === "email")                handleEmail();
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

              {/* ── RIGHT: Form preview ── */}
              <div
                className="hidden flex-col border-l border-white/12 lg:flex"
                style={{ width: "37%", flexShrink: 0, background: "#060d0c" }}
              >
                <div className="flex h-14 shrink-0 items-center border-b border-white/12 px-5 pr-14">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                    {i18n.modalPreview}
                  </p>
                </div>
                <div
                  className="flex-1 overflow-y-auto px-4 py-4"
                  style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(255,255,255,0.08) transparent" }}
                  data-lenis-prevent
                >
                  <FormPanel
                    data={data}
                    totalMembers={totalMembers}
                    i18n={i18n}
                    stepperIdx={stepperIdx}
                    locale={locale}
                    onDataUpdate={patch => setData(d => ({ ...d, ...patch }))}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Tiny layout helpers ────────────────────────────────── */

function Field({ id, label, required, children }: { id: string; label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div className="space-y-1">
      <label htmlFor={id} className="block font-mono text-[10px] text-muted-foreground">
        {label} {required && <span aria-hidden className="text-teal">*</span>}
      </label>
      {children}
    </div>
  );
}

function Err({ children }: { children: React.ReactNode }) {
  return <p role="alert" className="font-mono text-[10px] text-red-400">{children}</p>;
}

/* ─── RoleDropdown ───────────────────────────────────────── */

function RoleDropdown({
  value, onSelect, error,
}: {
  value: string;
  onSelect: (r: string) => void;
  error?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-1">
      <label className="block font-sans text-xs font-semibold text-white/75">
        ¿Cuál es tu rol? <span aria-hidden className="text-teal">*</span>
      </label>
      <button type="button"
        onClick={() => setOpen(v => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`flex w-full items-center justify-between rounded-xl border px-3 py-2.5 font-sans text-sm transition-colors ${
          open ? "border-cyan/40 bg-black/30" : "border-white/18 bg-black/20"
        } ${value ? "text-foreground" : "text-muted-foreground"}`}
      >
        <span>{value || "Seleccioná tu rol"}</span>
        <ChevronDown size={14} className={`shrink-0 text-muted-foreground transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] as const }}
            className="overflow-hidden"
          >
            <div
              role="listbox"
              aria-label="Seleccionar rol"
              className="max-h-56 overflow-y-auto rounded-xl border border-white/10 py-1"
              style={{ background: "#0d1313", scrollbarWidth: "thin", scrollbarColor: "rgba(255,255,255,0.08) transparent" }}
            >
              {ROLE_GROUPS.map(group => (
                <div key={group.label}>
                  <p className="px-3 pb-0.5 pt-2 font-mono text-[9px] uppercase tracking-widest text-white/50">{group.label}</p>
                  {group.roles.map(r => {
                    const sel = value === r;
                    return (
                      <button key={r} type="button"
                        role="option"
                        aria-selected={sel}
                        onClick={() => { onSelect(r); setOpen(false); }}
                        className={`flex w-full items-center gap-2.5 px-3 py-2 text-left font-sans text-sm transition-colors hover:bg-white/5 ${
                          sel ? "text-teal" : "text-foreground"
                        }`}
                      >
                        <div className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border transition-colors ${
                          sel ? "border-teal/60 bg-teal/15" : "border-white/18"
                        }`}>
                          {sel && <div className="h-2 w-2 rounded-full bg-teal" />}
                        </div>
                        {r}
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {error && <p role="alert" className="font-mono text-[10px] text-red-400">{error}</p>}
    </div>
  );
}

/* ─── SkillsMultiSelect ──────────────────────────────────── */

function SkillsMultiSelect({
  rol, selected, onToggle, onAddCustom,
  search, onSearch, customInput, onCustomInputChange,
  minSkills, error,
}: {
  rol: string;
  selected: string[];
  onToggle: (s: string) => void;
  onAddCustom: (name: string) => void;
  search: string;
  onSearch: (q: string) => void;
  customInput: string;
  onCustomInputChange: (v: string) => void;
  minSkills: number;
  error?: string;
}) {
  const [open, setOpen] = useState(false);

  const available = (SKILLS_BY_ROL[rol] ?? []).filter(s =>
    !search || s.toLowerCase().includes(search.toLowerCase())
  );

  function addCustom() {
    const name = customInput.trim();
    if (name && !selected.some(s => s.toLowerCase() === name.toLowerCase())) {
      onAddCustom(name);
    }
    onCustomInputChange("");
  }

  const triggerLabel = selected.length > 0
    ? `${selected.length} seleccionada${selected.length !== 1 ? "s" : ""}`
    : `Seleccioná tecnologías (mín. ${minSkills})`;

  return (
    <div className="space-y-1">
      <label className="block font-sans text-xs font-semibold text-white/75">
        ¿Qué tecnologías usás? <span aria-hidden className="text-teal">*</span>
      </label>
      <button type="button"
        onClick={() => setOpen(v => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-multiselectable="true"
        className={`flex w-full items-center justify-between rounded-xl border px-3 py-2.5 font-sans text-sm transition-colors ${
          open ? "border-cyan/40 bg-black/30" : "border-white/18 bg-black/20"
        } ${selected.length > 0 ? "text-foreground" : "text-muted-foreground"}`}
      >
        <span>{triggerLabel}</span>
        <ChevronDown size={14} className={`shrink-0 text-muted-foreground transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] as const }}
            className="overflow-hidden"
          >
            <div
              className="rounded-xl border border-white/10"
              style={{ background: "#0d1313" }}
            >
              {/* Search */}
              <div className="border-b border-white/18 p-2">
                <input type="search" value={search}
                  onChange={e => onSearch(e.target.value)}
                  placeholder="Buscar skill..."
                  aria-label="Buscar skill"
                  className="w-full rounded-lg bg-white/5 px-3 py-1.5 font-sans text-xs text-foreground placeholder:text-muted-foreground focus:outline-none"
                />
              </div>
              {/* Options */}
              <div
                role="listbox"
                aria-multiselectable="true"
                aria-label="Skills disponibles"
                className="max-h-44 overflow-y-auto py-1"
                style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(255,255,255,0.08) transparent" }}
              >
                {available.map(s => {
                  const sel = selected.includes(s);
                  return (
                    <button key={s} type="button"
                      role="option"
                      aria-selected={sel}
                      onClick={() => onToggle(s)}
                      className={`flex w-full items-center gap-2.5 px-3 py-2 text-left font-sans text-sm transition-colors hover:bg-white/5 ${
                        sel ? "text-cyan" : "text-foreground"
                      }`}
                    >
                      <div className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors ${
                        sel ? "border-cyan/50 bg-cyan/15" : "border-white/18"
                      }`}>
                        {sel && <CheckCircle2 size={9} className="text-cyan" />}
                      </div>
                      {s}
                    </button>
                  );
                })}
                {available.length === 0 && (
                  <p className="px-3 py-3 font-sans text-xs text-muted-foreground">
                    Sin resultados{search ? ` para "${search}"` : ""}
                  </p>
                )}
              </div>
              {/* Custom skill */}
              <div className="border-t border-white/18 p-2">
                <div className="flex gap-1.5">
                  <input type="text" value={customInput}
                    onChange={e => onCustomInputChange(e.target.value)}
                    onKeyDown={e => { if (e.key === "Enter") { e.preventDefault(); addCustom(); } }}
                    placeholder="Agregar skill personalizado..."
                    aria-label="Agregar skill personalizado"
                    className="flex-1 rounded-lg bg-white/5 px-3 py-1.5 font-sans text-xs text-foreground placeholder:text-muted-foreground focus:outline-none"
                  />
                  <button type="button" onClick={addCustom}
                    aria-label="Agregar"
                    className="flex h-[30px] w-[30px] items-center justify-center rounded-lg border border-white/18 bg-white/5 font-mono text-sm text-muted-foreground transition-colors hover:border-cyan/40 hover:text-cyan"
                  >+</button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {error && <p role="alert" className="font-mono text-[10px] text-red-400">{error}</p>}
    </div>
  );
}

/* ─── SkillLevelSegmented ────────────────────────────────── */

function SkillLevelSegmented({
  level, labels, onChange,
}: {
  level: 1 | 2 | 3 | 4;
  labels: [string, string, string, string];
  onChange: (l: 1 | 2 | 3 | 4) => void;
}) {
  return (
    <div className="flex gap-1" role="group" aria-label="Nivel de expertise">
      {([1, 2, 3, 4] as const).map(l => (
        <button key={l} type="button"
          aria-pressed={level === l}
          onClick={() => onChange(l)}
          className={`flex-1 rounded-lg border py-2 text-center font-mono text-[9px] font-bold transition-all ${
            l === level
              ? "border-cyan/40 bg-cyan/12 text-cyan"
              : "border-white/18 bg-white/3 text-muted-foreground hover:border-white/18 hover:text-foreground"
          }`}
        >
          {labels[l - 1]}
        </button>
      ))}
    </div>
  );
}

/* ─── StackMultiSelect ───────────────────────────────────────── */

function StackMultiSelect({
  selected, onToggle, onAddCustom,
  search, onSearch, customInput, onCustomInputChange, error,
}: {
  selected: string[];
  onToggle: (s: string) => void;
  onAddCustom: (name: string) => void;
  search: string;
  onSearch: (q: string) => void;
  customInput: string;
  onCustomInputChange: (v: string) => void;
  error?: string;
}) {
  const [open, setOpen] = useState(false);
  const q = search.trim().toLowerCase();
  const filtered = STACK_GROUPS.map(g => ({
    ...g,
    items: g.items.filter(s => !selected.includes(s) && (!q || s.toLowerCase().includes(q))),
  })).filter(g => g.items.length > 0);

  function addCustom() {
    const name = customInput.trim();
    if (!name || selected.includes(name)) { onCustomInputChange(""); return; }
    onAddCustom(name);
    onCustomInputChange("");
    onSearch("");
  }

  return (
    <div className="space-y-1">
      <label className="block font-sans text-xs font-semibold text-white/75">
        Stack / Tecnologías <span aria-hidden className="text-teal">*</span>
      </label>
      <button type="button"
        onClick={() => setOpen(v => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`flex w-full items-center justify-between rounded-xl border px-3 py-2.5 font-sans text-sm transition-colors ${
          open ? "border-cyan/40 bg-black/30" : "border-white/18 bg-black/20"
        } ${selected.length ? "text-foreground" : "text-muted-foreground"}`}
      >
        <span>{selected.length ? `${selected.length} seleccionada${selected.length !== 1 ? "s" : ""}` : "Elegí tecnologías"}</span>
        <ChevronDown size={14} className={`shrink-0 text-muted-foreground transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] as const }}
            className="overflow-hidden"
          >
            <div
              role="listbox"
              aria-label="Seleccionar stack"
              aria-multiselectable="true"
              className="rounded-xl border border-white/10 py-1"
              style={{ background: "#0d1313" }}
            >
              {/* Search + custom */}
              <div className="px-2 pb-1 pt-1.5 flex gap-1.5">
                <input
                  type="text" value={search} onChange={ev => onSearch(ev.target.value)}
                  placeholder="Buscar o escribir tecnología..."
                  className="flex-1 rounded-lg border border-white/18 bg-black/30 px-2.5 py-1.5 font-sans text-xs text-foreground placeholder:text-muted-foreground focus:border-cyan/30 focus:outline-none"
                />
                <button type="button" onClick={addCustom}
                  disabled={!customInput.trim() || selected.includes(customInput.trim())}
                  className="rounded-lg border border-white/10 px-2.5 py-1.5 font-mono text-[10px] text-muted-foreground transition-colors hover:border-cyan/30 hover:text-cyan disabled:opacity-30"
                >
                  + Agregar
                </button>
              </div>
              <div className="max-h-52 overflow-y-auto" style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(255,255,255,0.08) transparent" }}>
                {filtered.map(group => (
                  <div key={group.label}>
                    <p className="px-3 pb-0.5 pt-2 font-mono text-[9px] uppercase tracking-widest text-white/50">{group.label}</p>
                    {group.items.map(s => (
                      <button key={s} type="button" role="option" aria-selected={false}
                        onClick={() => { onToggle(s); }}
                        className="flex w-full items-center gap-2.5 px-3 py-1.5 text-left font-sans text-sm text-foreground transition-colors hover:bg-white/5"
                      >
                        <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded border border-white/18" />
                        {s}
                      </button>
                    ))}
                  </div>
                ))}
                {filtered.length === 0 && q && (
                  <p className="px-3 py-2 font-mono text-[10px] text-muted-foreground">
                    No encontrado — usá &ldquo;+ Agregar&rdquo; para agregarlo.
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Selected chips */}
      {selected.length > 0 && (
        <div className="flex flex-wrap gap-1.5 pt-0.5">
          {selected.map(s => (
            <span key={s} className="flex items-center gap-1 rounded-full border border-teal/30 bg-teal/8 px-2.5 py-0.5">
              <span className="font-mono text-[10px] text-teal">{s}</span>
              <button type="button" onClick={() => onToggle(s)} aria-label={`Quitar ${s}`}
                className="font-mono text-xs text-teal/50 hover:text-teal"
              >×</button>
            </span>
          ))}
        </div>
      )}
      {error && <p role="alert" className="font-mono text-[10px] text-red-400">{error}</p>}
    </div>
  );
}

/* ─── IndustriesMultiSelect ──────────────────────────────────── */

function IndustriesMultiSelect({
  label, selected, onToggle, onAddCustom,
  search, onSearch, customInput, onCustomInputChange, placeholder,
}: {
  label: string;
  selected: string[];
  onToggle: (s: string) => void;
  onAddCustom: (name: string) => void;
  search: string;
  onSearch: (q: string) => void;
  customInput: string;
  onCustomInputChange: (v: string) => void;
  placeholder?: string;
}) {
  const [open, setOpen] = useState(false);
  const q = search.trim().toLowerCase();
  const available = INDUSTRIES.filter(s => !selected.includes(s) && (!q || s.toLowerCase().includes(q)));

  function addCustom() {
    const name = customInput.trim();
    if (!name || selected.includes(name)) { onCustomInputChange(""); return; }
    onAddCustom(name);
    onCustomInputChange("");
    onSearch("");
  }

  return (
    <div className="space-y-1">
      <label className="block font-sans text-xs font-semibold text-white/75">
        {label} <span className="ml-1 font-mono text-[10px] font-normal text-white/55">(opcional)</span>
      </label>
      <button type="button"
        onClick={() => setOpen(v => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`flex w-full items-center justify-between rounded-xl border px-3 py-2.5 font-sans text-sm transition-colors ${
          open ? "border-cyan/40 bg-black/30" : "border-white/18 bg-black/20"
        } ${selected.length ? "text-foreground" : "text-muted-foreground"}`}
      >
        <span>{selected.length ? selected.slice(0, 2).join(", ") + (selected.length > 2 ? ` +${selected.length - 2}` : "") : (placeholder ?? "Ej. Fintech, SaaS")}</span>
        <ChevronDown size={14} className={`shrink-0 text-muted-foreground transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] as const }}
            className="overflow-hidden"
          >
            <div
              role="listbox"
              aria-label={label}
              aria-multiselectable="true"
              className="rounded-xl border border-white/10 py-1"
              style={{ background: "#0d1313" }}
            >
              <div className="px-2 pb-1 pt-1.5 flex gap-1.5">
                <input
                  type="text" value={search} onChange={ev => onSearch(ev.target.value)}
                  placeholder="Buscar o escribir..."
                  className="flex-1 rounded-lg border border-white/18 bg-black/30 px-2.5 py-1.5 font-sans text-xs text-foreground placeholder:text-muted-foreground focus:border-cyan/30 focus:outline-none"
                />
                <button type="button" onClick={addCustom}
                  disabled={!customInput.trim() || selected.includes(customInput.trim())}
                  className="rounded-lg border border-white/10 px-2.5 py-1.5 font-mono text-[10px] text-muted-foreground transition-colors hover:border-cyan/30 hover:text-cyan disabled:opacity-30"
                >
                  + Agregar
                </button>
              </div>
              <div className="max-h-44 overflow-y-auto" style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(255,255,255,0.08) transparent" }}>
                {available.map(s => (
                  <button key={s} type="button" role="option" aria-selected={false}
                    onClick={() => onToggle(s)}
                    className="flex w-full items-center gap-2.5 px-3 py-1.5 text-left font-sans text-sm text-foreground transition-colors hover:bg-white/5"
                  >
                    <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded border border-white/18" />
                    {s}
                  </button>
                ))}
                {available.length === 0 && q && (
                  <p className="px-3 py-2 font-mono text-[10px] text-muted-foreground">Usá &ldquo;+ Agregar&rdquo; para agregar una nueva.</p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {selected.length > 0 && (
        <div className="flex flex-wrap gap-1.5 pt-0.5">
          {selected.map(s => (
            <span key={s} className="flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-2.5 py-0.5">
              <span className="font-mono text-[10px] text-white/70">{s}</span>
              <button type="button" onClick={() => onToggle(s)} aria-label={`Quitar ${s}`}
                className="font-mono text-xs text-white/55 hover:text-white"
              >×</button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── FormPanel ───────────────────────────────────────────── */

type EditSection = "squad" | "member" | "experience" | "stack" | "project" | "email" | null;
type SectionKey  = "squad" | "members" | "experience" | "stack" | "project" | "email";

const SECTION_ORDER: SectionKey[] = ["squad","members","experience","stack","project","email"];

function FormPanel({
  data, totalMembers, i18n, stepperIdx, locale, onDataUpdate,
}: {
  data: Partial<FormData>;
  totalMembers: number;
  i18n: PreregistroTranslations;
  stepperIdx: StepperIdx;
  locale: Locale;
  onDataUpdate: (patch: Partial<FormData>) => void;
}) {
  const e = i18n.errors;

  const [expanded, setExpanded] = useState<Record<SectionKey, boolean>>({
    squad: true, members: true, experience: true, stack: true, project: true, email: true,
  });
  const [editSection, setEditSection]   = useState<EditSection>(null);
  const [editMemberIdx, setEditMemberIdx] = useState<number | null>(null);

  // Edit state per section
  const [editSquadName, setEditSquadName] = useState("");
  const [editMember, setEditMember]       = useState<Member>({ nombre: "", rol: "", skills: [], linkedin: "", industries: [], experienciaAnios: null, experienciaDetalle: null, proyectos: null });
  const [editProjName, setEditProjName]   = useState("");
  const [editProjDesc, setEditProjDesc]   = useState("");
  const [editProjLink, setEditProjLink]   = useState("");
  const [editMemberErrs, setEditMemberErrs] = useState<Partial<Record<keyof Member | "skills", string>>>({});
  const [editYears, setEditYears]           = useState("");
  const [editStacks, setEditStacks]         = useState<string[]>([]);
  const [editEmail, setEditEmail]           = useState("");
  const [editEmailErr, setEditEmailErr]     = useState("");

  function toggle(key: SectionKey) { setExpanded(p => ({ ...p, [key]: !p[key] })); }

  function startEdit(section: EditSection, idx?: number) {
    setEditSection(section);
    if (section === "squad")      { setEditSquadName(data.squadName ?? ""); }
    if (section === "member" && idx !== undefined) {
      setEditMemberIdx(idx);
      setEditMember({ ...(data.members?.[idx] ?? { nombre: "", rol: "", skills: [], linkedin: "", industries: [], experienciaAnios: null, experienciaDetalle: null, proyectos: null }) });
      setEditMemberErrs({});
    }
    if (section === "experience") { setEditYears(String(data.yearsExperience ?? "")); }
    if (section === "stack")      { setEditStacks(data.stacks ?? []); }
    if (section === "project")    { setEditProjName(data.project?.nombre ?? ""); setEditProjDesc(data.project?.descripcion ?? ""); setEditProjLink(data.project?.link ?? ""); }
    if (section === "email")      { setEditEmail(data.email ?? ""); setEditEmailErr(""); }
  }

  function cancelEdit() { setEditSection(null); setEditMemberIdx(null); }

  function saveEdit() {
    if (editSection === "squad") {
      if (!editSquadName.trim()) return;
      onDataUpdate({ squadName: editSquadName.trim() });
    }
    if (editSection === "member" && editMemberIdx !== null) {
      const errs: Partial<Record<keyof Member | "skills", string>> = {};
      if (!editMember.nombre.trim()) errs.nombre = e.required;
      if (!editMember.linkedin.trim()) { errs.linkedin = e.required; }
      else if (!isValidLinkedIn(editMember.linkedin)) { errs.linkedin = e.linkedinInvalid; }
      const minS = editMember.rol ? (MIN_SKILLS[editMember.rol] ?? 1) : 1;
      if (editMember.skills.length < minS) errs.skills = interp(e.skillsRequired, { n: String(minS) });
      if (Object.keys(errs).length) { setEditMemberErrs(errs); return; }
      const nm = [...(data.members ?? [])];
      nm[editMemberIdx] = { ...editMember };
      onDataUpdate({ members: nm });
    }
    if (editSection === "experience") {
      const yrs = parseInt(editYears, 10);
      onDataUpdate({ yearsExperience: isNaN(yrs) ? 0 : yrs });
    }
    if (editSection === "stack") { onDataUpdate({ stacks: editStacks }); }
    if (editSection === "project") {
      if (!editProjName.trim() || !editProjDesc.trim()) return;
      onDataUpdate({ project: { ...(data.project as ProjectData), nombre: editProjName.trim(), descripcion: editProjDesc.trim(), link: editProjLink.trim(), linkValidated: editProjLink === data.project?.link ? (data.project?.linkValidated ?? false) : false, linkDomain: data.project?.linkDomain ?? "" } });
    }
    if (editSection === "email") {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(editEmail)) { setEditEmailErr(e.emailInvalid); return; }
      onDataUpdate({ email: editEmail.trim() });
    }
    cancelEdit();
  }

  function deleteMember(idx: number) {
    onDataUpdate({ members: (data.members ?? []).filter((_, i) => i !== idx) });
    if (editSection === "member" && editMemberIdx === idx) cancelEdit();
  }

  /* ── Helpers ── */
  const sectionStepIdx = (key: SectionKey) => SECTION_ORDER.indexOf(key);

  function SectionHeader({ sectionKey, label, badge }: { sectionKey: SectionKey; label: string; badge?: string }) {
    const sIdx = sectionStepIdx(sectionKey);
    const available = stepperIdx >= sIdx;
    const completed = stepperIdx > sIdx;
    const isOpen = expanded[sectionKey];
    return (
      <button
        type="button"
        onClick={available ? () => toggle(sectionKey) : undefined}
        className={`flex w-full items-center gap-2 px-1 py-2 text-left ${available ? "cursor-pointer" : "cursor-default pointer-events-none"}`}
      >
        {isOpen && available
          ? <ChevronDown size={10} className="shrink-0 text-muted-foreground" />
          : <ChevronRight size={10} className={`shrink-0 ${available ? "text-muted-foreground" : "text-white/20"}`} />
        }
        <span className={`font-mono text-[10px] font-bold uppercase tracking-widest ${
          completed ? "text-teal" : available ? "text-white/75" : "text-white/55"
        }`}>
          {label}
        </span>
        {badge && available && (
          <span className="ml-auto rounded-full bg-white/8 px-1.5 py-0.5 font-mono text-[9px] text-muted-foreground">{badge}</span>
        )}
      </button>
    );
  }

  const ActionBtn = ({ label, onClick, variant = "edit" }: { label: string; onClick: () => void; variant?: "edit" | "delete" }) => (
    <button type="button" onClick={onClick}
      className={`flex items-center gap-1 rounded-md px-2 py-1 font-mono text-[10px] transition-colors ${
        variant === "delete"
          ? "text-red-400/60 hover:bg-red-500/8 hover:text-red-400"
          : "text-muted-foreground hover:bg-white/5 hover:text-white"
      }`}
    >
      {variant === "delete" ? <Trash2 size={9} /> : <Pencil size={9} />}
      {label}
    </button>
  );

  const SaveCancel = () => (
    <div className="flex gap-1.5">
      <button type="button" onClick={saveEdit}
        className="rounded-md bg-teal/15 px-2.5 py-1 font-mono text-[10px] font-bold text-teal hover:bg-teal/25 transition-colors"
      >{i18n.btnSave}</button>
      <button type="button" onClick={cancelEdit}
        className="rounded-md px-2.5 py-1 font-mono text-[10px] text-muted-foreground hover:text-white transition-colors"
      >{i18n.btnCancel}</button>
    </div>
  );

  function CollapsibleSection({ sectionKey, label, badge, hasContent, children }: {
    sectionKey: SectionKey; label: string; badge?: string; hasContent: boolean; children: React.ReactNode;
  }) {
    return (
      <div className="rounded-xl border border-white/14 overflow-hidden">
        <SectionHeader sectionKey={sectionKey} label={label} badge={badge} />
        <AnimatePresence initial={false}>
          {expanded[sectionKey] && hasContent && (
            <motion.div
              initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] as const }}
              className="overflow-hidden"
            >
              <div className="border-t border-white/12 px-3 pb-3 pt-2">
                {children}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  /* ── Render ── */
  return (
    <div className="space-y-1.5">

      {/* SQUAD */}
      <CollapsibleSection sectionKey="squad" label={i18n.reviewSquadName} hasContent={!!data.squadName}>
        {editSection === "squad" ? (
          <div className="space-y-2">
            <input type="text" value={editSquadName} onChange={ev => setEditSquadName(ev.target.value)}
              className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 font-sans text-sm text-white focus:border-teal/50 focus:outline-none"
            />
            <SaveCancel />
          </div>
        ) : (
          <div className="flex items-center justify-between gap-2">
            <p className="font-mono text-sm font-bold text-white">{data.squadName}</p>
            <ActionBtn label={i18n.btnEdit} onClick={() => startEdit("squad")} />
          </div>
        )}
      </CollapsibleSection>

      {/* MEMBERS */}
      <CollapsibleSection
        sectionKey="members" label={i18n.reviewMembers}
        badge={totalMembers > 0 ? `${data.members?.length ?? 0}/${totalMembers}` : undefined}
        hasContent={(data.members?.length ?? 0) > 0}
      >
        <div className="space-y-2">
          {(data.members ?? []).map((m, i) => (
            <div key={i} className="rounded-lg border border-white/14 bg-white/2">
              {editSection === "member" && editMemberIdx === i ? (
                <div className="space-y-2 p-3">
                  {[
                    { key: "nombre" as const, label: "Nombre", type: "text" },
                    { key: "linkedin" as const, label: "LinkedIn", type: "url" },
                  ].map(({ key, label, type }) => (
                    <div key={key}>
                      <label className="block font-mono text-[9px] text-muted-foreground mb-1">{label}</label>
                      <input type={type} value={editMember[key] as string}
                        onChange={ev => { setEditMember(d => ({ ...d, [key]: ev.target.value })); setEditMemberErrs(d => ({ ...d, [key]: undefined })); }}
                        className="w-full rounded-md border border-white/18 bg-white/5 px-2.5 py-1.5 font-sans text-xs text-white focus:border-teal/50 focus:outline-none"
                      />
                      {editMemberErrs[key] && <p className="font-mono text-[9px] text-red-400 mt-0.5">{editMemberErrs[key] as string}</p>}
                    </div>
                  ))}
                  {/* Rol */}
                  <div>
                    <label className="block font-mono text-[9px] text-muted-foreground mb-1">Rol</label>
                    <div className="space-y-1">
                      {ROLE_GROUPS.map(group => (
                        <div key={group.label}>
                          <p className="mb-0.5 font-mono text-[8px] uppercase tracking-widest text-white/20">{group.label}</p>
                          <div className="flex flex-wrap gap-1">
                            {group.roles.map(r => (
                              <button key={r} type="button"
                                onClick={() => setEditMember(d => ({ ...d, rol: r, skills: [] }))}
                                className={`rounded-full border px-2 py-0.5 font-mono text-[9px] font-bold transition-all ${
                                  editMember.rol === r ? "border-teal/50 bg-teal/15 text-teal" : "border-white/10 text-muted-foreground hover:text-white"
                                }`}
                              >
                                {r}
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Skills edit */}
                  {editMember.rol && (
                    <div className="space-y-1.5">
                      <label className="block font-mono text-[9px] text-muted-foreground">
                        Skills ({interp(i18n.minSkillsHint, { n: String(MIN_SKILLS[editMember.rol] ?? 1) })})
                      </label>
                      {/* Available chips */}
                      <div className="flex flex-wrap gap-1">
                        {(SKILLS_BY_ROL[editMember.rol] ?? [])
                          .filter(s => !editMember.skills.some(sk => sk.name === s))
                          .map(s => (
                            <button key={s} type="button"
                              onClick={() => setEditMember(d => ({ ...d, skills: [...d.skills, { name: s, level: 2 }] }))}
                              className="rounded-full border border-white/18 px-2 py-0.5 font-mono text-[9px] text-muted-foreground transition-all hover:text-white"
                            >
                              + {s}
                            </button>
                          ))
                        }
                      </div>
                      {/* Selected with level */}
                      {editMember.skills.length > 0 && (
                        <div className="space-y-1">
                          {editMember.skills.map(skill => (
                            <div key={skill.name} className="flex items-center gap-2 rounded-md border border-white/18 bg-white/3 px-2 py-1">
                              <span className="flex-1 font-mono text-[10px] text-white truncate">{skill.name}</span>
                              <SkillLevelSegmented
                                level={skill.level}
                                labels={i18n.skillLevelLabels}
                                onChange={l => setEditMember(d => ({
                                  ...d, skills: d.skills.map(s => s.name === skill.name ? { ...s, level: l } : s),
                                }))}
                              />
                              <button type="button"
                                onClick={() => setEditMember(d => ({ ...d, skills: d.skills.filter(s => s.name !== skill.name) }))}
                                aria-label={`Quitar ${skill.name}`}
                                className="font-mono text-sm text-white/20 hover:text-red-400"
                              >×</button>
                            </div>
                          ))}
                        </div>
                      )}
                      {editMemberErrs.skills && <p className="font-mono text-[9px] text-red-400 mt-0.5">{editMemberErrs.skills as string}</p>}
                    </div>
                  )}
                  {/* Industries */}
                  <div className="space-y-1">
                    <label className="block font-mono text-[9px] text-muted-foreground">
                      {i18n.reviewIndustries} <span className="text-white/20">(opcional)</span>
                    </label>
                    <div className="flex flex-wrap gap-1">
                      {INDUSTRIES.map(ind => {
                        const sel = editMember.industries.includes(ind);
                        return (
                          <button key={ind} type="button"
                            onClick={() => setEditMember(d => ({
                              ...d,
                              industries: sel
                                ? d.industries.filter(x => x !== ind)
                                : [...d.industries, ind],
                            }))}
                            className={`rounded-full border px-2 py-0.5 font-mono text-[8px] font-bold transition-all ${
                              sel ? "border-teal/40 bg-teal/12 text-teal" : "border-white/18 text-white/40 hover:text-white"
                            }`}
                          >
                            {ind}
                          </button>
                        );
                      })}
                    </div>
                    {editMember.industries.filter(x => !INDUSTRIES.includes(x as (typeof INDUSTRIES)[number])).map(custom => (
                      <span key={custom} className="flex items-center gap-1 rounded-full border border-teal/30 bg-teal/8 px-2 py-0.5 font-mono text-[8px] text-teal">
                        {custom}
                        <button type="button" onClick={() => setEditMember(d => ({ ...d, industries: d.industries.filter(x => x !== custom) }))}
                          aria-label={`Quitar ${custom}`} className="text-teal/50 hover:text-teal"
                        >×</button>
                      </span>
                    ))}
                  </div>
                  <SaveCancel />
                </div>
              ) : (
                <div className="flex items-start gap-2 p-2.5">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/3 mt-0.5">
                    <Circle size={5} className="text-muted-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-mono text-xs font-bold text-white">
                      {m.nombre} <span className="font-normal text-muted-foreground">({m.rol})</span>
                    </p>
                    <p className="font-mono text-[9px] text-cyan/50 truncate">{m.linkedin}</p>
                    {m.skills.length > 0 && (
                      <div className="mt-1 flex flex-wrap gap-1">
                        {m.skills.map(s => (
                          <span key={s.name} className="flex items-center gap-1 rounded-full border border-white/18 bg-white/3 px-2 py-0.5">
                            <span className="font-mono text-[9px] text-white/75">{s.name}</span>
                            <span className="font-mono text-[8px] text-cyan/50">{"●".repeat(s.level)}{"○".repeat(4 - s.level)}</span>
                          </span>
                        ))}
                      </div>
                    )}
                    {m.industries.length > 0 && (
                      <p className="mt-1 font-mono text-[9px] text-white/40 truncate">{m.industries.join(", ")}</p>
                    )}
                    <div className="flex gap-1 mt-1">
                      <ActionBtn label={i18n.btnEdit}   onClick={() => startEdit("member", i)} />
                      <ActionBtn label={i18n.btnDelete} onClick={() => deleteMember(i)} variant="delete" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </CollapsibleSection>

      {/* EXPERIENCE */}
      <CollapsibleSection sectionKey="experience" label={i18n.reviewYearsExp} hasContent={!!data.yearsExperience}>
        {editSection === "experience" ? (
          <div className="space-y-2">
            <div>
              <label className="block font-mono text-[9px] text-muted-foreground mb-1">{i18n.reviewYearsExp}</label>
              <input type="number" value={editYears} onChange={ev => setEditYears(ev.target.value)} min={0} max={60}
                className="w-24 rounded-md border border-white/18 bg-white/5 px-2.5 py-1.5 font-sans text-xs text-white focus:border-teal/50 focus:outline-none"
              />
            </div>
            <SaveCancel />
          </div>
        ) : (
          <div className="space-y-1.5">
            {data.yearsExperience !== undefined && data.yearsExperience > 0 && (
              <p className="font-mono text-[10px] text-muted-foreground">
                {data.yearsExperience} {locale === "en" ? "yrs avg" : "años prom."}
              </p>
            )}
            <ActionBtn label={i18n.btnEdit} onClick={() => startEdit("experience")} />
          </div>
        )}
      </CollapsibleSection>

      {/* STACK */}
      <CollapsibleSection sectionKey="stack" label={i18n.reviewStack} hasContent={(data.stacks?.length ?? 0) > 0}>
        {editSection === "stack" ? (
          <div className="space-y-2">
            <div className="flex flex-wrap gap-1">
              {STACK_GROUPS.map(group => (
                <div key={group.label} className="w-full">
                  <p className="mb-0.5 font-mono text-[8px] uppercase tracking-widest text-white/20">{group.label}</p>
                  <div className="flex flex-wrap gap-1">
                    {group.items.map(s => {
                      const sel = editStacks.includes(s);
                      return (
                        <button key={s} type="button"
                          onClick={() => setEditStacks(p => sel ? p.filter(x => x !== s) : [...p, s])}
                          className={`rounded-full border px-2 py-0.5 font-mono text-[9px] font-bold transition-all ${
                            sel ? "border-teal/50 bg-teal/15 text-teal" : "border-white/10 text-muted-foreground hover:text-white"
                          }`}
                        >
                          {s}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
            <SaveCancel />
          </div>
        ) : (
          <div className="space-y-2">
            <div className="flex flex-wrap gap-1.5">
              {data.stacks?.map(s => (
                <span key={s} className="rounded-full border border-teal/30 bg-teal/8 px-2.5 py-0.5 font-mono text-[10px] text-teal">{s}</span>
              ))}
            </div>
            <ActionBtn label={i18n.btnEdit} onClick={() => startEdit("stack")} />
          </div>
        )}
      </CollapsibleSection>

      {/* PROJECT */}
      <CollapsibleSection sectionKey="project" label={i18n.reviewProject} hasContent={!!data.project?.nombre}>
        {editSection === "project" ? (
          <div className="space-y-2">
            {[
              { label: "Nombre", value: editProjName, set: setEditProjName, type: "text" },
              { label: "Link", value: editProjLink, set: setEditProjLink, type: "url" },
            ].map(({ label, value, set, type }) => (
              <div key={label}>
                <label className="block font-mono text-[9px] text-muted-foreground mb-1">{label}</label>
                <input type={type} value={value}
                  onChange={ev => set(ev.target.value)}
                  className="w-full rounded-md border border-white/18 bg-white/5 px-2.5 py-1.5 font-sans text-xs text-white focus:border-teal/50 focus:outline-none"
                />
              </div>
            ))}
            <div>
              <label className="block font-mono text-[9px] text-muted-foreground mb-1">Descripción</label>
              <textarea value={editProjDesc} onChange={ev => setEditProjDesc(ev.target.value)}
                rows={2} maxLength={300}
                className="w-full resize-none rounded-md border border-white/18 bg-white/5 px-2.5 py-1.5 font-sans text-xs text-white focus:border-teal/50 focus:outline-none"
              />
            </div>
            <SaveCancel />
          </div>
        ) : (
          <div className="space-y-1.5">
            <p className="font-mono text-xs font-bold text-white">{data.project?.nombre}</p>
            {data.project?.descripcion && <p className="font-sans text-[11px] leading-relaxed text-muted-foreground line-clamp-2">{data.project.descripcion}</p>}
            {data.project?.link && (
              <div className="flex items-center gap-1.5">
                <p className="font-mono text-[10px] text-cyan/50 truncate">{data.project.link}</p>
                {data.project.linkValidated && <span className="font-mono text-[8px] text-teal">✓</span>}
              </div>
            )}
            <ActionBtn label={i18n.btnEdit} onClick={() => startEdit("project")} />
          </div>
        )}
      </CollapsibleSection>

      {/* EMAIL */}
      <CollapsibleSection sectionKey="email" label={i18n.reviewEmail} hasContent={!!data.email}>
        {editSection === "email" ? (
          <div className="space-y-2">
            <input type="email" value={editEmail} onChange={ev => { setEditEmail(ev.target.value); setEditEmailErr(""); }}
              autoComplete="email"
              className="w-full rounded-md border border-white/18 bg-white/5 px-2.5 py-1.5 font-sans text-xs text-white focus:border-teal/50 focus:outline-none"
            />
            {editEmailErr && <p className="font-mono text-[9px] text-red-400">{editEmailErr}</p>}
            <SaveCancel />
          </div>
        ) : (
          <div className="flex items-center justify-between gap-2">
            <p className="font-mono text-xs text-white truncate">{data.email}</p>
            <ActionBtn label={i18n.btnEdit} onClick={() => startEdit("email")} />
          </div>
        )}
      </CollapsibleSection>

    </div>
  );
}

/* ─── SuccessScreen ───────────────────────────────────────── */

function SuccessScreen({ i18n, data, onClose }: { i18n: PreregistroTranslations; data: FormData; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
      className="flex flex-1 flex-col items-center justify-center gap-8 p-10 text-center"
    >
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 -z-10 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(13,148,136,0.35) 0%, transparent 70%)", filter: "blur(24px)", transform: "scale(2.5)" }}
          aria-hidden
        />
        <div className="flex h-20 w-20 items-center justify-center rounded-full border border-teal/30 bg-teal/10">
          <CheckCircle2 size={36} className="text-teal" />
        </div>
      </div>
      <div>
        <h2 className="mb-2 font-display text-3xl font-bold text-white">{i18n.successH2}</h2>
        <p className="font-sans text-base text-muted-foreground">{i18n.successBody}</p>
      </div>
      <div className="w-full max-w-sm rounded-2xl border border-white/18 bg-white/3 p-5 text-left">
        <p className="mb-4 font-mono text-xs text-muted-foreground">{i18n.successNote}</p>
        <dl className="space-y-2">
          {([
            [i18n.reviewSquadName, data.squadName],
            [i18n.reviewEmail,     data.email],
            [i18n.reviewStack,     data.stacks?.join(", ")],
            [i18n.reviewProject,   data.project?.nombre],
          ] as [string, string | undefined][]).filter(([, v]) => v).map(([label, value]) => (
            <div key={label} className="flex gap-2">
              <dt className="w-20 shrink-0 font-mono text-[10px] text-muted-foreground">{label}</dt>
              <dd className="font-sans text-[11px] text-white/80 truncate">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
      <button type="button" onClick={onClose}
        className="rounded-xl border border-white/10 px-6 py-2.5 font-mono text-sm text-muted-foreground transition-colors hover:border-white/20 hover:text-white"
      >
        {i18n.btnClose}
      </button>
    </motion.div>
  );
}
