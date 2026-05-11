# ZENIT 2.0 — Master Build Guide (12-Week MVP)

> **Owner:** All | **Status:** Active  
> Foundation → Pages → Matching → Protection → Ship

---

## Phase Overview

| Phase | Weeks | Focus | Owner |
|-------|-------|-------|-------|
| Foundation | 1–2 | Schema + Kaizen prompt + Homepage | David + Rik |
| Pages | 3–4 | Landing pages + Dialogue modals | David |
| Matching | 5–7 | Squad matching engine | Rik |
| Protection | 8–10 | SafePay + GitHub integration | Rik |
| Ship | 11–12 | ZenitRank + QA + Launch | All |

---

## Weeks 1–2 — Foundation

**David:**
- [ ] Homepage implementation (9 sections from `01_HOMEPAGE_CONTENT_FINAL.md`)
- [ ] Route: `/` with full metadata + JSON-LD

**Rik:**
- [ ] PostgreSQL schema (squads, companies, projects, `ai_native` flag)
- [ ] Kaizen basic prompt (Flow 1: Squad pre-register)

**Success criteria:** Homepage live, schema deployed to staging, Kaizen responds to step 1

---

## Weeks 3–4 — Pages

**David:**
- [ ] Landing pages: `/companies`, `/squads`, `/pricing`, `/how-it-works`
- [ ] Dialogue modals for Squad pre-register + Company discovery

**Success criteria:** 4 landing pages deployed, both dialogue flows functional

---

## Weeks 5–7 — Matching

**Rik:**
- [ ] Matching algorithm (company needs ↔ squad capabilities)
- [ ] Squad ranking (ZenitRank v1)
- [ ] Match result UI (David)

**Success criteria:** End-to-end: company posts → gets ranked squad options

---

## Weeks 8–10 — Protection

**Rik:**
- [ ] SafePay escrow logic + milestone triggers
- [ ] GitHub integration (proof of work per milestone)
- [ ] Squad B backup assignment logic

**David:**
- [ ] SafePay UI flow
- [ ] Project dashboard (company view)

**Success criteria:** Full payment flow in staging, GitHub proof attached to milestone

---

## Weeks 11–12 — Ship

- [ ] ZenitRank v2 (post-project ratings)
- [ ] QA pass (all routes, a11y, mobile)
- [ ] Analytics / monitoring
- [ ] Public launch

**Success criteria:** 1 real project contracted through Zenit, SafePay settlement complete

---

## Responsibilities Matrix

| System | David | Rik |
|--------|-------|-----|
| Frontend / UI | ✅ | — |
| Routes / Pages | ✅ | — |
| Kaizen prompts | — | ✅ |
| PostgreSQL schema | — | ✅ |
| Matching engine | — | ✅ |
| SafePay logic | — | ✅ |
| GitHub integration | — | ✅ |
| SafePay UI | ✅ | — |
| ZenitRank UI | ✅ | — |

---

*Critical path: Rik's schema (Week 1) gates David's matching UI (Week 7)*
