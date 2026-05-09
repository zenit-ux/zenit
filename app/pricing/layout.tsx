import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — 12% Success Fee, Always Free for Squads",
  description:
    "Squads join Zenit for free — forever. Companies pay a 12% success fee only when they hire. Enterprise custom rates from 6% for volume projects. No surprises.",
  keywords: [
    "Zenit pricing", "success fee", "free squad platform", "enterprise pricing",
    "no upfront cost", "hire developers pricing", "tech marketplace pricing",
  ],
  openGraph: {
    title: "Pricing — Simple, No Surprises | Zenit",
    description:
      "Free for squads. 12% success fee for companies — only when you hire. Enterprise rates from 6%.",
    images: [{ url: "/og-pricing.png", width: 1200, height: 630, alt: "Zenit Pricing" }],
  },
  twitter: {
    title: "Pricing — Simple, No Surprises | Zenit",
    description: "Free for squads. 12% success fee — only when you hire.",
  },
  alternates: { canonical: "https://www.zenit.work/pricing" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "When does the 12% fee apply?",
      acceptedAnswer: { "@type": "Answer", text: "Only when you hire a squad and a project is started. Browsing, posting, and matching are all free." },
    },
    {
      "@type": "Question",
      name: "Is the 12% charged upfront?",
      acceptedAnswer: { "@type": "Answer", text: "No. It's added to the total project value at contract signing. You pay as milestones complete — proportionally." },
    },
    {
      "@type": "Question",
      name: "Do squads pay any fees?",
      acceptedAnswer: { "@type": "Answer", text: "No. Squads join and receive payments with zero fees. We're paid by the company side only." },
    },
    {
      "@type": "Question",
      name: "What counts as a 'project' for billing?",
      acceptedAnswer: { "@type": "Answer", text: "Any engagement where a squad is hired for a defined scope. Ongoing retainer-style work is billed monthly at the agreed rate × 12%." },
    },
    {
      "@type": "Question",
      name: "Can I negotiate the fee for large projects?",
      acceptedAnswer: { "@type": "Answer", text: "Yes — projects over $100K are eligible for reduced rates. Contact our enterprise team for custom pricing." },
    },
  ],
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
