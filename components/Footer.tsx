import Link from "next/link";
import Image from "next/image";

const nav = [
  {
    heading: "Product",
    links: [
      { label: "For Squads",    href: "/squads"       },
      { label: "For Companies", href: "/companies"    },
      { label: "How It Works",  href: "/how-it-works" },
      { label: "Pricing",       href: "/pricing"      },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Blog",     href: "/blog"    },
      { label: "About",    href: "/about"   },
      { label: "Careers",  href: "/careers" },
      { label: "Contact",  href: "/contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy",  href: "/privacy" },
      { label: "Terms",    href: "/terms"   },
      { label: "SafePay",  href: "/safepay" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Main */}
        <div className="grid grid-cols-2 gap-10 py-14 md:grid-cols-4">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
            <Link href="/">
              <Image
                src="/logos/zenit-horizontal-dark-color.svg"
                alt="Zenit"
                width={100}
                height={28}
                unoptimized
                priority
                className="h-7 w-auto"
              />
            </Link>
            <p className="font-sans text-sm leading-relaxed text-muted-foreground max-w-[200px]">
              The marketplace for elite tech squads.
            </p>
            {/* Live badge */}
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-teal/20 bg-teal/8 px-3 py-1 font-sans text-[11px] font-semibold text-cyan">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan" />
              500+ squads active
            </span>
          </div>

          {/* Link columns */}
          {nav.map((col) => (
            <div key={col.heading} className="flex flex-col gap-3">
              <h4 className="font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-white/50">
                {col.heading}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="font-sans text-sm text-muted-foreground transition-colors duration-200 hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-border py-6 sm:flex-row">
          <p className="font-sans text-xs text-muted-foreground">
            © {new Date().getFullYear()} Zenit Technologies, Inc. All rights reserved.
          </p>
          <p className="font-sans text-xs text-muted-foreground">
            Built for the future of work.
          </p>
        </div>
      </div>
    </footer>
  );
}
