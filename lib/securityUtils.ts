// Client-side security utilities for Kaizen registro mode.
// Server-side enforcement is required in production — these are the first validation layer.

/* ─── Injection detection ────────────────────────────────── */

const INJECTION_PATTERNS = [
  /ignore.*previous|forget.*instruction/i,
  /system.*prompt|override.*prompt|bypass.*prompt/i,
  /reveal.*code|show.*source|debug.*mode/i,
  /switch.*mode|become.*admin|admin.*mode/i,
  /jailbreak|DAN\b|do.*anything.*now/i,
  /pretend.*you.*are|act.*as.*if|you.*are.*now/i,
  /ignore.*restrict|remove.*restrict/i,
  /show.*prompt|reveal.*system|dump.*prompt/i,
];

const OUT_OF_SCOPE_PATTERNS: { pattern: RegExp; key: string }[] = [
  { pattern: /algoritmo.*match|c[oó]mo.*match|matching.*algorithm/i, key: "matching" },
  { pattern: /c[oó]digo.*fuente|source.*code|ver.*c[oó]digo/i,      key: "source" },
  { pattern: /otros.*squads|other.*squads|squads.*registrados/i,     key: "other_squads" },
  { pattern: /otras.*empresas|other.*companies|empresas.*registradas/i, key: "other_companies" },
  { pattern: /product.*brain|brain.*producto/i,                      key: "product_brain" },
  { pattern: /comisi[oó]n.*exacta|porcentaje.*exacto|exact.*fee/i,   key: "pricing" },
  { pattern: /credenciales|api.*key|password|secret.*key/i,          key: "credentials" },
  { pattern: /informaci[oó]n.*de.*XYZ|datos.*de.*(empresa|squad)\s+\w+/i, key: "other_tenant" },
];

export function detectInjection(input: string): boolean {
  return INJECTION_PATTERNS.some((p) => p.test(input));
}

export function detectOutOfScope(input: string): string | null {
  const match = OUT_OF_SCOPE_PATTERNS.find((p) => p.pattern.test(input));
  return match ? match.key : null;
}

/* ─── Input sanitization ─────────────────────────────────── */

export function sanitizeInput(input: string): string {
  return input.trim().slice(0, 1000);
}

/* ─── Output sanitization ────────────────────────────────── */

export function sanitizeOutput(output: string): string {
  // React escapes JSX text nodes automatically — no HTML encoding needed here.
  // Only strip angle brackets to prevent accidental tag injection in edge cases.
  return output.replace(/</g, "‹").replace(/>/g, "›");
}

export function redactPII(output: string): string {
  return output
    .replace(/\b\d{3}-\d{2}-\d{4}\b/g, "[REDACTED]")
    .replace(/API[_\s]?KEY|SECRET|PASSWORD/gi, "[CREDENTIAL]");
}

/* ─── URL validation ─────────────────────────────────────── */

const ALLOWED_PROTOCOLS = ["https:", "http:"];

export function isSafeUrl(url: string): boolean {
  if (!url) return true;
  try {
    const parsed = new URL(url.startsWith("http") ? url : `https://${url}`);
    return ALLOWED_PROTOCOLS.includes(parsed.protocol);
  } catch {
    return false;
  }
}
