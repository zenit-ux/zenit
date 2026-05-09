import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SkillBase — Team Skill Mapping & Gap Analysis",
  description:
    "SkillBase maps your team's technical skills, identifies critical gaps, and surfaces targeted upskilling paths and squad recommendations to keep your product moving.",
  keywords: [
    "SkillBase", "skill mapping", "tech talent assessment", "team gap analysis",
    "skill gap", "upskilling", "team competency", "technical skills assessment",
  ],
  openGraph: {
    title: "SkillBase — Team Skill Mapping & Gap Analysis | Zenit",
    description:
      "Map your team's skills, find the gaps, fix them — with upskilling paths or the right squad.",
    images: [{ url: "/og-skillbase.png", width: 1200, height: 630, alt: "SkillBase" }],
  },
  twitter: {
    title: "SkillBase — Team Skill Mapping & Gap Analysis | Zenit",
    description: "Map skills, find gaps, fix them with upskilling paths or the right squad.",
  },
  alternates: { canonical: "https://www.zenit.work/skillbase" },
};

export default function SkillBaseLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
