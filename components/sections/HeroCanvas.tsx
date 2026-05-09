"use client";

import { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  alpha: number;
  hue: number;
  saturation: number;
}

const PARTICLE_COUNT = 80;
const CONNECTION_DIST = 160;

export function HeroCanvas({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ptsRef    = useRef<Particle[]>([]);

  const init = useCallback((w: number, h: number) => {
    ptsRef.current = Array.from({ length: PARTICLE_COUNT }, () => {
      const rng = Math.random();
      // 60% cyan (195°), 25% teal (175°), 15% gold (45°)
      const hue = rng > 0.4 ? 195 : rng > 0.15 ? 175 : 45;
      return {
        x:          Math.random() * w,
        y:          Math.random() * h,
        vx:         (Math.random() - 0.5) * 0.5,
        vy:         (Math.random() - 0.5) * 0.5,
        r:          Math.random() * 2.8 + 0.8,
        alpha:      Math.random() * 0.6 + 0.35,
        hue,
        saturation: hue === 45 ? 90 : 100,
      };
    });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width  = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
      init(canvas.width, canvas.height);
    };

    resize();
    const ro = new ResizeObserver(resize);
    if (canvas.parentElement) ro.observe(canvas.parentElement);

    const tick = () => {
      const { width: W, height: H } = canvas;
      ctx.clearRect(0, 0, W, H);
      const pts = ptsRef.current;

      // Move
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
      }

      // Connections
      for (let i = 0; i < pts.length - 1; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx     = pts[i].x - pts[j].x;
          const dy     = pts[i].y - pts[j].y;
          const distSq = dx * dx + dy * dy;
          if (distSq < CONNECTION_DIST * CONNECTION_DIST) {
            const dist    = Math.sqrt(distSq);
            const opacity = (1 - dist / CONNECTION_DIST) * 0.35;
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `hsla(${pts[i].hue}, 100%, 60%, ${opacity})`;
            ctx.lineWidth   = 0.6;
            ctx.stroke();
          }
        }
      }

      // Dots with glow
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        // Outer glow
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 4);
        grd.addColorStop(0, `hsla(${p.hue}, ${p.saturation}%, 65%, ${p.alpha * 0.6})`);
        grd.addColorStop(1, `hsla(${p.hue}, ${p.saturation}%, 65%, 0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();
        // Core dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, ${p.saturation}%, 70%, ${p.alpha})`;
        ctx.fill();
      }
    };

    gsap.ticker.add(tick);
    return () => {
      gsap.ticker.remove(tick);
      ro.disconnect();
    };
  }, [init]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={className}
      style={{ willChange: "transform" }}
    />
  );
}
