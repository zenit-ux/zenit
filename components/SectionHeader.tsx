"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { staggerContainer, fadeInUp, defaultViewport } from "@/lib/motionVariants";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = true,
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      className={cn(
        "flex flex-col gap-3",
        centered ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <motion.span
          variants={fadeInUp}
          className="font-sans text-sm font-semibold uppercase tracking-widest text-cyan"
        >
          {eyebrow}
        </motion.span>
      )}

      <motion.h2
        variants={fadeInUp}
        className="font-display text-4xl font-bold leading-tight text-white md:text-5xl"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          variants={fadeInUp}
          className={cn(
            "font-sans text-lg leading-relaxed text-muted-foreground",
            centered && "max-w-2xl"
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
