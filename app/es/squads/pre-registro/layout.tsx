import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pre-registro de Squads — Acceso Anticipado",
  description:
    "Pre-registrá tu squad para acceso anticipado al marketplace de Zenit. Los squads verificados arrancan con su historial de ZenitRank desde el primer proyecto del lanzamiento.",
  keywords: ["pre-registro squad", "acceso anticipado", "ZenitRank", "SafePay", "marketplace squads", "Zenit squad"],
  openGraph: {
    title: "Pre-registro de Squads — Acceso Anticipado | Zenit",
    description: "Los primeros squads en registrarse acceden primero a los proyectos y arrancan con su historial de ZenitRank desde el día uno.",
    images: [{ url: "/og-squads.png", width: 1200, height: 630, alt: "Pre-registro de Squads" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pre-registro de Squads — Acceso Anticipado | Zenit",
    description: "Acceso anticipado al marketplace. ZenitRank desde el primer proyecto.",
  },
  alternates: { canonical: "https://www.zenit.work/es/squads/pre-registro" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
