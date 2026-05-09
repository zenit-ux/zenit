"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface UseCountUpOptions {
  target: number;
  duration?: number;
  /** String appended after the number, e.g. "+" or "d" */
  suffix?: string;
  /** String prepended before the number */
  prefix?: string;
  decimals?: number;
}

/**
 * Animates a number from 0 → target when the element scrolls into view.
 * Returns a ref to attach to the DOM element that will display the number.
 */
export function useCountUp({
  target,
  duration = 1.8,
  suffix = "",
  prefix = "",
  decimals = 0,
}: UseCountUpOptions) {
  const elRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const el = elRef.current;
    if (!el) return;

    const counter = { val: 0 };

    const tween = gsap.to(counter, {
      val: target,
      duration,
      ease: "power2.out",
      onUpdate() {
        const n =
          decimals > 0
            ? counter.val.toFixed(decimals)
            : Math.round(counter.val).toString();
        el.textContent = prefix + n + suffix;
      },
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    return () => {
      tween.kill();
      // Only kill triggers attached to this element
      ScrollTrigger.getAll()
        .filter((t) => t.vars.trigger === el)
        .forEach((t) => t.kill());
    };
  }, [target, duration, suffix, prefix, decimals]);

  return elRef;
}
