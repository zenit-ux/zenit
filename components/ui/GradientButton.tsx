"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "accent" | "ghost";

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: ReactNode;
  className?: string;
  href?: string;
}

const styles: Record<Variant, string> = {
  primary:
    "bg-teal text-white hover:shadow-[0_0_20px_rgba(27,94,94,0.5)] border border-teal/30",
  secondary:
    "bg-cyan text-[#0f0f0f] hover:shadow-[0_0_20px_rgba(0,180,216,0.5)] border border-cyan/30",
  accent:
    "bg-gold text-[#0f0f0f] hover:shadow-[0_0_20px_rgba(255,215,0,0.5)] border border-gold/30",
  ghost:
    "bg-transparent text-white border border-white/20 hover:border-white/40 hover:bg-white/5",
};

export function GradientButton({
  variant = "primary",
  children,
  className,
  ...props
}: GradientButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] as const }}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg font-sans font-semibold",
        "py-2 px-4 text-sm md:py-3 md:px-6 md:text-base",
        "transition-all duration-300 cursor-pointer select-none",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        "disabled:opacity-50 disabled:pointer-events-none",
        styles[variant],
        className
      )}
      {...(props as React.ComponentPropsWithoutRef<typeof motion.button>)}
    >
      {children}
    </motion.button>
  );
}
