import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { AOSProvider } from "@/components/providers/AOSProvider";

const plusJakartaSans = localFont({
  src: [
    {
      path: "../public/fonts/PlusJakartaSans-variable.woff2",
      weight: "200 800",
      style: "normal",
    },
    {
      path: "../public/fonts/PlusJakartaSans-Italic-variable.woff2",
      weight: "200 800",
      style: "italic",
    },
  ],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.zenit.work"),
  title: {
    template: "%s | Zenit",
    default: "Zenit — On-Demand Expert Tech Squads",
  },
  description:
    "Zenit connects companies with verified Latin American tech squads. AI-powered matching via Kaizen in 48 hours. SafePay escrow protects every project.",
  keywords: [
    "tech squads", "on-demand development", "remote tech team", "LATAM developers",
    "software outsourcing", "SafePay escrow", "squad marketplace", "Kaizen AI",
    "product discovery", "hire developers",
  ],
  authors: [{ name: "Zenit" }],
  creator: "Zenit",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: "Zenit — On-Demand Expert Tech Squads",
    description: "AI-matched verified squads in 48 hours. SafePay protects every project.",
    type: "website",
    url: "https://www.zenit.work",
    siteName: "Zenit",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Zenit — On-Demand Expert Tech Squads" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zenit — On-Demand Expert Tech Squads",
    description: "AI-matched verified squads in 48 hours. SafePay protects every project.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://www.zenit.work" },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Zenit",
  url: "https://www.zenit.work",
  logo: "https://www.zenit.work/icon.svg",
  description: "Zenit connects companies with verified Latin American tech squads via AI-powered matching and SafePay escrow protection.",
  sameAs: [],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Zenit",
  url: "https://www.zenit.work",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.zenit.work/squads?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${plusJakartaSans.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
      style={{ colorScheme: "dark" }}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <SmoothScrollProvider>
          <AOSProvider />
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
