import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SafePay — Escrow Payment Protection",
  description:
    "SafePay locks project funds before work begins and releases them only after Kaizen validates delivery criteria. Zero financial risk for companies, guaranteed payment for squads.",
  keywords: [
    "SafePay", "escrow payment", "payment protection", "milestone payments",
    "software project escrow", "freelance payment safety", "tech squad payment",
  ],
  openGraph: {
    title: "SafePay — Escrow Payment Protection | Zenit",
    description:
      "Funds locked before work starts. Released only when Kaizen confirms delivery. Zero risk for both sides.",
    images: [{ url: "/og-safepay.png", width: 1200, height: 630, alt: "SafePay — Escrow Payment Protection" }],
  },
  twitter: {
    title: "SafePay — Escrow Payment Protection | Zenit",
    description: "Funds locked before work starts. Released only when delivery is confirmed.",
  },
  alternates: { canonical: "https://www.zenit.work/safepay" },
};

export default function SafePayLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
