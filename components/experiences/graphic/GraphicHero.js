import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { site } from "../../../data/site";
import { projects } from "../../../data/projects";
import Button from "../../shared/Button";
import { FadeIn } from "../../animations/Motion";
import SplitText from "../../SplitText";
import ColorWash from "../../fx/ColorWash";
import Magnet from "../../fx/Magnet";
import { LimeBlob, RedSphere, SquiggleUnderline, YellowRays } from "./GraphicShapes";
import { ProjectVisual } from "./ProjectVisual";
import { cn } from "../../../lib/cn";

const previewProjects = projects.slice(0, 3);

const stacked = [
  { top: "8%", left: "8%", rotate: -8, z: 3 },
  { top: "24%", left: "22%", rotate: 4, z: 2 },
  { top: "42%", left: "12%", rotate: -3, z: 1 },
];

const fannedPoses = [
  { top: "2%", left: "-2%", rotate: -16, z: 3 },
  { top: "18%", left: "26%", rotate: 5, z: 2 },
  { top: "38%", left: "4%", rotate: 12, z: 1 },
];

function ParallaxLayer({ className, x = 0, y = 0, children }) {
  return (
    <div
      className={cn("pointer-events-none will-change-transform", className)}
      style={{ transform: `translate3d(${x}px, ${y}px, 0)` }}
    >
      {children}
    </div>
  );
}

export default function GraphicHero() {
  const reduce = useReducedMotion();
  const stageRef = useRef(null);
  const [active, setActive] = useState(0);
  const [fanned, setFanned] = useState(false);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (reduce) return undefined;
    let raf = 0;
    const tick = () => {
      current.current.x += (target.current.x - current.current.x) * 0.12;
      current.current.y += (target.current.y - current.current.y) * 0.12;
      setParallax({ ...current.current });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduce]);

  const onMove = (event) => {
    if (reduce || !stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const nx = (event.clientX - rect.left) / rect.width - 0.5;
    const ny = (event.clientY - rect.top) / rect.height - 0.5;
    target.current = { x: nx * 28, y: ny * 18 };
  };

  const poses = fanned ? fannedPoses : stacked;

  return (
    <section
      ref={stageRef}
      onMouseMove={onMove}
      onMouseLeave={() => {
        target.current = { x: 0, y: 0 };
      }}
      className="relative z-0 overflow-hidden"
    >
      <ColorWash />

      <ParallaxLayer className="absolute -left-16 top-20 z-[1]" x={parallax.x} y={parallax.y}>
        <RedSphere className="h-48 w-48 md:h-64 md:w-64" />
      </ParallaxLayer>
      <ParallaxLayer className="absolute right-[36%] top-6 z-[1]" x={-parallax.x * 0.65} y={parallax.y}>
        <LimeBlob className="h-32 w-32 md:h-44 md:w-44" />
      </ParallaxLayer>
      <ParallaxLayer className="absolute bottom-28 left-[44%] z-[1] hidden md:block" x={parallax.x}>
        <YellowRays className="h-28 w-28" />
      </ParallaxLayer>

      <div className="relative z-[1] mx-auto grid max-w-shell gap-10 px-5 pb-16 pt-8 md:grid-cols-[0.95fr_1.05fr] md:items-center md:gap-8 md:px-8 md:pb-24 md:pt-12 lg:gap-10">
        <div className="relative">
          <FadeIn>
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-muted">
              {site.eyebrow}
            </p>
          </FadeIn>

          <div className="relative max-w-[16ch]">
            <SplitText
              text={site.headline}
              tag="h1"
              className="font-display text-[2.75rem] font-extrabold leading-[0.98] tracking-[-0.03em] text-ink sm:text-5xl md:text-6xl lg:text-[4.6rem]"
              splitType="chars"
              effect="pop"
              trigger="load"
              delay={24}
              duration={0.7}
              accentColor="#FF5A3C"
              hoverEffect="wave"
              textAlign="left"
            />
            <span className="relative mt-2 block h-4 w-28 md:h-5 md:w-36">
              <SquiggleUnderline color="#FF5A3C" className="!relative !bottom-0 h-full w-full" />
            </span>
          </div>

          <FadeIn delay={0.35}>
            <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-ink-muted md:text-base">
              {site.supporting}
            </p>
          </FadeIn>

          <FadeIn delay={0.45}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Magnet>
                <Button href="/projects" className="!px-6 !uppercase !tracking-[0.08em]">
                  Explore selected work ↓
                </Button>
              </Magnet>
              <Magnet strength={18}>
                <Link href="/contact">
                  <a className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.08em] text-ink">
                    Let&apos;s talk
                    <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      ↗
                    </span>
                  </a>
                </Link>
              </Magnet>
            </div>
          </FadeIn>
        </div>

        <div
          className="relative isolate mx-auto h-[460px] w-full max-w-xl lg:h-[560px] lg:max-w-none"
          onMouseEnter={() => setFanned(true)}
          onMouseLeave={() => {
            setFanned(false);
            setActive(0);
          }}
        >
          <ParallaxLayer className="absolute -left-1 top-8 -z-10" x={-parallax.x * 0.65} y={parallax.y}>
            <RedSphere className="h-32 w-32 md:h-44 md:w-44" />
          </ParallaxLayer>
          <ParallaxLayer className="absolute right-0 top-2 -z-10" x={parallax.x}>
            <LimeBlob className="h-36 w-36 md:h-48 md:w-48" />
          </ParallaxLayer>
          <YellowRays className="pointer-events-none absolute bottom-16 right-2 -z-10 h-28 w-28 md:h-32 md:w-32" />

          {previewProjects.map((project, index) => {
            const pose = poses[index];
            const isActive = active === index;
            const lift = !reduce && isActive ? -10 : 0;
            const scale = isActive ? 1.06 : fanned ? 1.02 : 1;

            return (
              <div
                key={project.slug}
                className="absolute w-[82%] cursor-pointer overflow-hidden rounded-[1.75rem] border border-black/10 bg-white p-4 shadow-lift transition-[top,left,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:w-[78%] md:p-5"
                style={{
                  top: pose.top,
                  left: pose.left,
                  zIndex: isActive ? 5 : pose.z,
                  transform: `translate3d(0, ${lift}px, 0) rotate(${pose.rotate}deg) scale(${scale})`,
                }}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
              >
                <Link href={`/projects/${project.slug}`}>
                  <a className="block">
                    <div className="mb-3 flex items-center justify-between px-1">
                      <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-ink/70">
                        {project.shortTitle}
                      </p>
                      <span
                        className="h-2.5 w-2.5 rounded-full"
                        style={{ backgroundColor: project.accent }}
                      />
                    </div>
                    <div className="h-44 overflow-hidden rounded-[1.25rem] md:h-52 lg:h-56">
                      <ProjectVisual slug={project.slug} />
                    </div>
                  </a>
                </Link>
              </div>
            );
          })}

          <p className="absolute bottom-1 left-0 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-soft">
            {fanned ? "Cards unlocked" : "Hover the stack"}
          </p>
        </div>
      </div>
    </section>
  );
}
