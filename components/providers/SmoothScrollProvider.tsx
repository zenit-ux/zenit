"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { useEffect, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/* Connects Lenis scroll events → GSAP ScrollTrigger */
function GSAPConnector() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;
    gsap.registerPlugin(ScrollTrigger);
    lenis.on("scroll", ScrollTrigger.update);

    // Recalculate scroll limit when page height changes (lazy content, animations expanding)
    const observer = new ResizeObserver(() => lenis.resize());
    observer.observe(document.body);

    // Also recalculate after all resources (fonts, images) are loaded
    const onLoad = () => lenis.resize();
    window.addEventListener("load", onLoad);

    return () => {
      lenis.off("scroll", ScrollTrigger.update);
      observer.disconnect();
      window.removeEventListener("load", onLoad);
    };
  }, [lenis]);

  return null;
}

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 2,
      }}
    >
      <GSAPConnector />
      {children}
    </ReactLenis>
  );
}
