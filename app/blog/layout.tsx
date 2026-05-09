import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Insights on Squads, Product & the Future of Work",
  description:
    "The latest thinking on remote tech squads, software delivery, Latin American tech talent, and the future of how software gets built.",
  keywords: [
    "tech blog", "remote squads", "software delivery", "LATAM tech talent",
    "product management", "software outsourcing insights", "Zenit blog",
  ],
  openGraph: {
    title: "Zenit Blog — Squads, Product & the Future of Work",
    description:
      "The latest thinking on remote squads, software delivery, and the future of tech work.",
    images: [{ url: "/og-blog.png", width: 1200, height: 630, alt: "Zenit Blog" }],
  },
  twitter: {
    title: "Zenit Blog — Squads, Product & the Future of Work",
    description: "Insights on remote squads, software delivery, and the future of tech.",
  },
  alternates: { canonical: "https://www.zenit.work/blog" },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
