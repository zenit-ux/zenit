import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kaizen — AI Product Agent",
  description:
    "Kaizen is your AI product partner. It runs deep discovery, builds a persistent Product Brain of your business, and matches your company with the exact squad to build what you need — in 48 hours.",
  keywords: [
    "AI product agent", "product discovery", "product management AI",
    "squad matching", "Product Brain", "Kaizen", "software discovery",
  ],
  openGraph: {
    title: "Kaizen — AI Product Agent | Zenit",
    description:
      "Your AI product partner that runs discovery, builds context, and matches you with the right squad. Not a chatbot — a strategic partner.",
    images: [{ url: "/og-kaizen.png", width: 1200, height: 630, alt: "Kaizen — AI Product Agent" }],
  },
  twitter: {
    title: "Kaizen — AI Product Agent | Zenit",
    description: "Your AI product partner that runs discovery and matches you with the right squad.",
  },
  alternates: { canonical: "https://www.zenit.work/kaizen" },
};

export default function KaizenLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
