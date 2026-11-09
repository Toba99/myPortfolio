import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "../../lib/cn";

// Soft gradients don't need pixels: cap the backing store and let CSS upscale it.
const PIXEL_BUDGET = 260000;
const FRAME_MS = 1000 / 30;

/**
 * Graphic experience living wash  -  soft blobs that chase the pointer.
 *
 * Performance notes:
 *  - Renders into a small (~0.26MP) backing store regardless of page height.
 *  - Capped at 30fps; pauses when off-screen or the tab is hidden.
 *  - Stops entirely under prefers-reduced-motion (draws one static frame).
 */
export default function ColorWash({ className }) {
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
    let visible = true;
    let lastFrame = 0;
    const target = { x: 0.65, y: 0.28 };
    const current = { x: 0.65, y: 0.28 };
    let t = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      width = parent?.clientWidth || window.innerWidth;
      height = parent?.clientHeight || window.innerHeight;
      const scale = Math.min(1, Math.sqrt(PIXEL_BUDGET / Math.max(1, width * height)));
      canvas.width = Math.max(1, Math.floor(width * scale));
      canvas.height = Math.max(1, Math.floor(height * scale));
      ctx.setTransform(scale, 0, 0, scale, 0, 0);
      kick(true);
    };

    const paint = () => {
      ctx.clearRect(0, 0, width, height);

      const blobs = [
        {
          x: current.x * width,
          y: current.y * height,
          r: Math.min(width, height) * 0.42,
          color: "rgba(255,90,60,0.28)",
        },
        {
          x: (0.82 + Math.sin(t) * 0.03) * width,
          y: (0.18 + Math.cos(t * 0.8) * 0.04) * height,
          r: Math.min(width, height) * 0.28,
          color: "rgba(200,240,0,0.26)",
        },
        {
          x: (0.72 + Math.cos(t * 0.7) * 0.04) * width,
          y: (0.72 + Math.sin(t * 0.9) * 0.03) * height,
          r: Math.min(width, height) * 0.3,
          color: "rgba(79,124,255,0.18)",
        },
      ];

      blobs.forEach((blob) => {
        const g = ctx.createRadialGradient(blob.x, blob.y, 0, blob.x, blob.y, blob.r);
        g.addColorStop(0, blob.color);
        g.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(blob.x, blob.y, blob.r, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const loop = (now) => {
      raf = 0;
      if (!visible || document.hidden) return;

      if (now - lastFrame >= FRAME_MS) {
        lastFrame = now;
        t += 0.016;
        current.x += (target.x - current.x) * 0.1;
        current.y += (target.y - current.y) * 0.1;
        paint();
      }
      raf = requestAnimationFrame(loop);
    };

    const kick = (force = false) => {
      if (reduce) {
        if (force) paint();
        return;
      }
      if (!visible || document.hidden || raf) return;
      raf = requestAnimationFrame(loop);
    };

    const onMove = (event) => {
      if (reduce) return;
      const rect = canvas.getBoundingClientRect();
      target.x = (event.clientX - rect.left) / rect.width;
      target.y = (event.clientY - rect.top) / rect.height;
    };

    const stop = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };

    const onVisibility = () => (document.hidden ? stop() : kick());

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) kick();
        else stop();
      },
      { rootMargin: "80px", threshold: 0 }
    );
    io.observe(canvas);

    resize();
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);
    const parent = canvas.parentElement;
    parent?.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      stop();
      io.disconnect();
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
      parent?.removeEventListener("pointermove", onMove);
    };
  }, [reduce]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
    />
  );
}
