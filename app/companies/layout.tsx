import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Companies — Hire Verified Tech Squads in 48 Hours",
  description:
    "Stop hiring blind. Kaizen runs a deep discovery of your project, then matches you with 2–3 verified tech squads in 48 hours. SafePay escrow protects every dollar. Free to post.",
  keywords: [
    "hire tech squad", "on-demand development team", "software outsourcing",
    "LATAM tech teams", "verified developers", "hire remote team",
    "software project outsourcing", "tech talent marketplace",
  ],
  openGraph: {
    title: "For Companies — Hire Verified Tech Squads in 48 Hours | Zenit",
    description:
      "Kaizen does the discovery. You pick from 2–3 matched squads. SafePay protects every milestone.",
    images: [{ url: "/og-companies.png", width: 1200, height: 630, alt: "Hire Verified Tech Squads" }],
  },
  twitter: {
    title: "For Companies — Hire Verified Tech Squads in 48 Hours | Zenit",
    description: "AI-matched squads in 48 hours. SafePay protects every dollar.",
  },
  alternates: { canonical: "https://www.zenit.work/companies" },
};

export default function CompaniesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
