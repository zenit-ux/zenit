import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Squads — Join Zenit & Get Paid Your Worth",
  description:
    "Join 500+ verified tech squads on Zenit. Get matched with qualified project briefs — no cold outreach, no bidding wars. Build your ZenitRank reputation and earn 4× more with SafePay guaranteed payments.",
  keywords: [
    "join tech squad", "squad marketplace", "freelance tech team", "LATAM developers",
    "ZenitRank", "verified squad", "remote software team", "get tech projects",
  ],
  openGraph: {
    title: "For Squads — Join Zenit & Get Paid Your Worth | Zenit",
    description:
      "No bidding wars. No cold outreach. Qualified briefs, guaranteed payments, ZenitRank reputation that actually means something.",
    images: [{ url: "/og-squads.png", width: 1200, height: 630, alt: "Join Zenit as a Squad" }],
  },
  twitter: {
    title: "For Squads — Join Zenit & Get Paid Your Worth | Zenit",
    description: "Qualified briefs, guaranteed payments, ZenitRank reputation that matters.",
  },
  alternates: { canonical: "https://www.zenit.work/squads" },
};

export default function SquadsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
