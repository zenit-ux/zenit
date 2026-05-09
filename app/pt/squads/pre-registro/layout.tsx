import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pré-registro de Squads — Acesso Antecipado",
  description:
    "Pré-registre seu squad para acesso antecipado ao marketplace da Zenit. Os squads verificados começam com seu histórico ZenitRank desde o primeiro projeto do lançamento.",
  keywords: ["pré-registro squad", "acesso antecipado", "ZenitRank", "SafePay", "marketplace squads", "Zenit squad"],
  openGraph: {
    title: "Pré-registro de Squads — Acesso Antecipado | Zenit",
    description: "Os primeiros squads a se registrarem acessam primeiro os projetos e começam com seu histórico ZenitRank desde o dia um.",
    images: [{ url: "/og-squads.png", width: 1200, height: 630, alt: "Pré-registro de Squads" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pré-registro de Squads — Acesso Antecipado | Zenit",
    description: "Acesso antecipado ao marketplace. ZenitRank desde o primeiro projeto.",
  },
  alternates: { canonical: "https://www.zenit.work/pt/squads/pre-registro" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
