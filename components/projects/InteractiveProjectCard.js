import Link from "next/link";
import { useRef, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import Tag from "../shared/Tag";
import { cn } from "../../lib/cn";
import { ProjectVisual } from "../experiences/graphic/ProjectVisual";

export default function InteractiveProjectCard({ project, featured = false, priority = false }) {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 180, damping: 18 });
  const y = useSpring(rawY, { stiffness: 180, damping: 18 });
  const rotateX = useTransform(y, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-6, 6]);
  const glareX = useTransform(x, [-0.5, 0.5], [0, 100]);
  const glareY = useTransform(y, [-0.5, 0.5], [0, 100]);
  const glare = useMotionTemplate`radial-gradient(360px circle at ${glareX}% ${glareY}%, rgba(200,240,0,0.22), transparent 45%)`;

  const onMove = (event) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    rawX.set((event.clientX - rect.left) / rect.width - 0.5);
    rawY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <Link href={`/projects/${project.slug}`} passHref>
      <motion.a
        ref={ref}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => {
          setHovered(false);
          rawX.set(0);
          rawY.set(0);
        }}
        onMouseMove={onMove}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
        style={
          reduce
            ? undefined
            : {
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
                transformPerspective: 1000,
              }
        }
        animate={{ scale: hovered ? 1.015 : 1 }}
        transition={{ type: "spring", stiffness: 280, damping: 22 }}
        className={cn(
          "group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-black/5 bg-white p-3 text-ink shadow-card md:p-4",
          featured && "md:flex-row md:gap-6 md:p-5"
        )}
      >
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10"
          style={{ background: glare, opacity: hovered ? 1 : 0 }}
        />

        <div
          className={cn(
            "relative aspect-[16/10] w-full overflow-hidden rounded-[1.25rem] border border-black/5",
            featured && "md:aspect-auto md:min-h-[280px] md:w-[56%] md:shrink-0"
          )}
        >
          <ProjectVisual
            slug={project.slug}
            priority={priority}
            sizes={featured ? "(min-width: 768px) 560px, 100vw" : "(min-width: 768px) 420px, 100vw"}
          />
        </div>

        <div className={cn("relative flex flex-1 flex-col px-2 pb-2 pt-4", featured && "md:justify-center md:py-3")}>
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
                {project.category[0]}
              </p>
              <h3
                className={cn(
                  "mt-1 font-display font-bold tracking-tight",
                  featured ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"
                )}
              >
                {project.title}
              </h3>
            </div>
            <span
              className={cn(
                "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink text-white transition",
                hovered && "translate-x-0.5 -translate-y-0.5 scale-110"
              )}
            >
              ↗
            </span>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            {featured ? project.summary : project.cardSummary}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Tag key={tag} tone="light">
                {tag}
              </Tag>
            ))}
          </div>
        </div>
      </motion.a>
    </Link>
  );
}
