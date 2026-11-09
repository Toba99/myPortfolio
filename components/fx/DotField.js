import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "../../lib/cn";

/**
 * Soft interactive dot field.
 *
 * Performance notes:
 *  - One viewport-sized canvas (fixed, behind content) instead of a page-sized one,
 *    so long pages never allocate a multi-megapixel canvas.
 *  - Draws only while the pointer is near the dots; fully idle otherwise.
 *  - Pauses when the tab is hidden.
 */
export default function DotField({
  className,
  color = "12,12,12",
  accent = "200,240,0",
  gap = 44,
}) {
  const reduce = useReducedMotion();
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return undefined;

    let raf = 0;
    let width = 0;
    let height = 0;
    let dots = [];
    let settling = 0;
    const pointer = { x: -9999, y: -9999 };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      dots = [];
      for (let y = gap; y < height; y += gap) {
        for (let x = gap; x < width; x += gap) {
          dots.push({ x, y, ox: x, oy: y });
        }
      }
      kick();
    };

    const drawFrame = () => {
      raf = 0;
      if (document.hidden) return;

      ctx.clearRect(0, 0, width, height);
      const radius = 120;
      const radiusSq = radius * radius;
      let moving = false;

      for (let i = 0; i < dots.length; i += 1) {
        const dot = dots[i];
        const dx = pointer.x - dot.ox;
        const dy = pointer.y - dot.oy;
        const distSq = dx * dx + dy * dy;
        let force = 0;

        if (!reduce && distSq < radiusSq) {
          const dist = Math.sqrt(distSq) || 1;
          force = 1 - dist / radius;
          const push = force * 14;
          dot.x = dot.ox - (dx / dist) * push;
          dot.y = dot.oy - (dy / dist) * push;
          moving = true;
        } else {
          const nx = dot.x + (dot.ox - dot.x) * 0.18;
          const ny = dot.y + (dot.oy - dot.y) * 0.18;
          if (Math.abs(nx - dot.ox) > 0.05 || Math.abs(ny - dot.oy) > 0.05) moving = true;
          dot.x = nx;
          dot.y = ny;
        }

        const size = 1 + force * 2;
        const alpha = 0.1 + force * 0.5;
        ctx.beginPath();
        ctx.fillStyle =
          force > 0.08
            ? `rgba(${accent}, ${Math.min(0.8, alpha)})`
            : `rgba(${color}, ${alpha})`;
        ctx.arc(dot.x, dot.y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      if (moving) settling = 12;
      else if (settling > 0) settling -= 1;

      // Fully idle: stop the loop until the pointer moves again.
      if (moving || settling > 0) raf = requestAnimationFrame(drawFrame);
    };

    const kick = () => {
      if (document.hidden || raf) return;
      raf = requestAnimationFrame(drawFrame);
    };

    const onMove = (event) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      kick();
    };

    const onLeave = () => {
      pointer.x = -9999;
      pointer.y = -9999;
      kick();
    };

    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
        raf = 0;
      } else {
        kick();
      }
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [accent, color, gap, reduce]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={cn("pointer-events-none fixed inset-0 -z-10 h-screen w-screen", className)}
    />
  );
}
