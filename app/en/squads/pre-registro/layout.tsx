import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Squad Pre-Registration — Early Access",
  description:
    "Pre-register your squad for early access to Zenit's marketplace. Verified squads start building their ZenitRank history from the first project at launch.",
  keywords: ["squad pre-registration", "early access", "ZenitRank", "SafePay", "squad marketplace", "Zenit squad"],
  openGraph: {
    title: "Squad Pre-Registration — Early Access | Zenit",
    description: "First squads to register get priority access and start with ZenitRank history from day one.",
    images: [{ url: "/og-squads.png", width: 1200, height: 630, alt: "Squad Pre-Registration" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Squad Pre-Registration — Early Access | Zenit",
    description: "Early access to the marketplace. ZenitRank from the first project.",
  },
  alternates: { canonical: "https://www.zenit.work/en/squads/pre-registro" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
