import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TalkFlow — AI Communication Layer for Squads",
  description:
    "TalkFlow streamlines client-squad communication with AI-powered project updates, async collaboration tools, and automatic status summaries that keep everyone aligned.",
  keywords: [
    "TalkFlow", "project communication", "async collaboration", "AI project updates",
    "client squad communication", "remote team communication", "project status AI",
  ],
  openGraph: {
    title: "TalkFlow — AI Communication Layer for Squads | Zenit",
    description:
      "AI-powered project updates and async tools that keep clients and squads aligned without meetings.",
    images: [{ url: "/og-talkflow.png", width: 1200, height: 630, alt: "TalkFlow" }],
  },
  twitter: {
    title: "TalkFlow — AI Communication Layer for Squads | Zenit",
    description: "AI-powered project updates that keep clients and squads aligned.",
  },
  alternates: { canonical: "https://www.zenit.work/talkflow" },
};

export default function TalkFlowLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
