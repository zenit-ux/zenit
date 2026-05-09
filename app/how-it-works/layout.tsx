import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works — Post, Match, Build in 48 Hours",
  description:
    "Post a project brief in minutes. Kaizen runs discovery and matches you with 2–3 verified squads within 48 hours. SafePay escrow protects every milestone from day one.",
  keywords: [
    "how Zenit works", "squad matching process", "hire tech team", "project brief",
    "48 hour matching", "SafePay milestone", "software development process",
  ],
  openGraph: {
    title: "How Zenit Works — Post, Match, Build in 48 Hours",
    description:
      "Post → Kaizen discovery → 2–3 matched squads in 48h → SafePay-protected milestones. Simple.",
    images: [{ url: "/og-how-it-works.png", width: 1200, height: 630, alt: "How Zenit Works" }],
  },
  twitter: {
    title: "How Zenit Works — Post, Match, Build in 48 Hours",
    description: "Post → discovery → matched squads in 48h → SafePay-protected milestones.",
  },
  alternates: { canonical: "https://www.zenit.work/how-it-works" },
};

export default function HowItWorksLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
