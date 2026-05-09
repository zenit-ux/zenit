import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TalentPath — Grow Into Your First Tech Role",
  description:
    "TalentPath connects aspiring developers with structured learning paths, mentorship from verified squads, and a clear route into professional tech work.",
  keywords: [
    "TalentPath", "junior developers", "tech career path", "coding bootcamp",
    "learn to code", "software development career", "mentorship program", "LATAM tech jobs",
  ],
  openGraph: {
    title: "TalentPath — Grow Into Your First Tech Role | Zenit",
    description:
      "Structured learning paths + squad mentorship. Your fastest route into professional tech work.",
    images: [{ url: "/og-talentpath.png", width: 1200, height: 630, alt: "TalentPath" }],
  },
  twitter: {
    title: "TalentPath — Grow Into Your First Tech Role | Zenit",
    description: "Structured paths + squad mentorship. Your fastest route into professional tech.",
  },
  alternates: { canonical: "https://www.zenit.work/talentpath" },
};

export default function TalentPathLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
