import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { site } from "../../../data/site";
import Button from "../../shared/Button";
import { FadeIn } from "../../animations/Motion";
import SplitText from "../../SplitText";
import DotField from "../../fx/DotField";
import Magnet from "../../fx/Magnet";
import Draggable from "../../fx/Draggable";
import Playfield from "../../fx/Playfield";

const modes = [
  {
    label: "Build",
    copy: "Ship the core path first. Everything else waits.",
    detail: "Scope tightly. Prove value early.",
  },
  {
    label: "Improve",
    copy: "Tighten the loops users already rely on.",
    detail: "Remove friction. Raise reliability.",
  },
  {
    label: "Scale",
    copy: "Make the system hold as demand grows.",
    detail: "Architecture that stays calm under load.",
  },
];

export default function InteractiveHero() {
  const reduce = useReducedMotion();
  const cardRef = useRef(null);
  const [mode, setMode] = useState(0);
  const [hovering, setHovering] = useState(false);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springX = useSpring(rawX, { stiffness: 160, damping: 18, mass: 0.4 });
  const springY = useSpring(rawY, { stiffness: 160, damping: 18, mass: 0.4 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [14, -14]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-16, 16]);
  const glareX = useTransform(springX, [-0.5, 0.5], [0, 100]);
  const glareY = useTransform(springY, [-0.5, 0.5], [0, 100]);
  const glare = useMotionTemplate`radial-gradient(420px circle at ${glareX}% ${glareY}%, rgba(200,240,0,0.35), transparent 45%)`;

  const onMove = (event) => {
    if (reduce || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    rawX.set((event.clientX - rect.left) / rect.width - 0.5);
    rawY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const reset = () => {
    setHovering(false);
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <section className="relative overflow-hidden bg-interactive-glow">
      <DotField />
      <div className="relative mx-auto grid max-w-shell gap-12 px-5 pb-16 pt-12 md:grid-cols-[1.15fr_0.85fr] md:items-center md:px-8 md:pb-24 md:pt-20">
        <div>
          <FadeIn>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/90 px-3 py-1.5 text-xs font-semibold tracking-wide text-ink">
              <span className="h-2 w-2 rounded-full bg-lime" />
              {site.eyebrow}
            </div>
          </FadeIn>

          <div className="relative max-w-3xl">
            <SplitText
              text={site.headline}
              tag="h1"
              className="font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl md:text-6xl"
              splitType="chars"
              effect="wave"
              trigger="load"
              delay={22}
              duration={0.75}
              hoverEffect="wave"
              accentColor="#C8F000"
              textAlign="left"
            />
            <motion.span
              aria-hidden
              className="mt-3 block h-1.5 w-40 origin-left rounded-full bg-lime md:w-56"
              initial={reduce ? false : { scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.55, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          <FadeIn delay={0.35}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted md:text-lg">
              {site.supporting}
            </p>
          </FadeIn>

          <FadeIn delay={0.45}>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Magnet>
                <Button href="/projects">Explore my work ↗</Button>
              </Magnet>
              <Magnet strength={16}>
                <Button href="/about" variant="secondary">
                  About me
                </Button>
              </Magnet>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} className="relative mx-auto w-full max-w-md">
          <Playfield
            className="relative w-full"
            hint="Drag the chips"
          >
            {(constraints) => (
              <div className="relative min-h-[420px]">
                <Draggable
                  dragConstraints={constraints}
                  className="absolute left-[2%] top-0 z-20 rounded-full bg-lime px-3 py-1.5 text-[11px] font-bold shadow-card"
                  style={{ rotate: -4 }}
                >
                  Live system
                </Draggable>
                <Draggable
                  dragConstraints={constraints}
                  className="absolute right-[2%] top-[4%] z-20 rounded-full bg-ink px-3 py-1.5 text-[11px] font-bold text-white shadow-card"
                  style={{ rotate: 3.5 }}
                >
                  Product-minded
                </Draggable>
                <motion.div
                  ref={cardRef}
                  onMouseEnter={() => setHovering(true)}
                  onMouseMove={onMove}
                  onMouseLeave={reset}
                  style={
                    reduce
                      ? undefined
                      : {
                          rotateX,
                          rotateY,
                          transformStyle: "preserve-3d",
                          transformPerspective: 900,
                        }
                  }
                  animate={{ scale: hovering ? 1.02 : 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                  className="absolute left-[6%] top-[14%] z-10 w-[88%] overflow-hidden rounded-[2rem] border border-black/10 bg-white p-6 shadow-lift"
                >
                  <motion.div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200"
                    style={{ background: glare, opacity: hovering ? 1 : 0 }}
                  />

                  <div className="relative mb-6 flex items-center justify-between">
                    <div className="h-3 w-20 rounded-full bg-black/10" />
                    <div className="h-8 w-8 rounded-full bg-lime" />
                  </div>

                  <p className="relative mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-ink-soft">
                    Focus mode
                  </p>

                  <div className="relative flex flex-wrap gap-2">
                    {modes.map((item, index) => {
                      const active = mode === index;
                      return (
                        <button
                          key={item.label}
                          type="button"
                          onClick={() => setMode(index)}
                          className={`relative rounded-full px-4 py-2 text-xs font-semibold transition ${
                            active ? "text-white" : "bg-ash text-ink hover:bg-black/10"
                          }`}
                        >
                          {active && (
                            <motion.span
                              layoutId="focus-pill"
                              className="absolute inset-0 rounded-full bg-ink"
                              transition={{ type: "spring", stiffness: 380, damping: 28 }}
                            />
                          )}
                          <span className="relative z-10">{item.label}</span>
                        </button>
                      );
                    })}
                  </div>

                  <div className="relative mt-4 min-h-[7.5rem] overflow-hidden rounded-3xl bg-gradient-to-br from-lime/40 via-white to-ash p-4">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={modes[mode].label}
                        initial={{ opacity: 0, y: 14, filter: "blur(4px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                        transition={{ duration: 0.28 }}
                      >
                        <p className="text-sm font-semibold text-ink">{modes[mode].copy}</p>
                        <p className="mt-2 text-xs text-ink-muted">{modes[mode].detail}</p>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  <div className="relative mt-4 flex gap-1.5">
                    {modes.map((item, index) => (
                      <button
                        key={item.label}
                        type="button"
                        aria-label={`Show ${item.label}`}
                        onClick={() => setMode(index)}
                        className={`h-1.5 rounded-full transition-all ${
                          mode === index ? "w-6 bg-ink" : "w-1.5 bg-black/15 hover:bg-black/30"
                        }`}
                      />
                    ))}
                  </div>
                </motion.div>
              </div>
            )}
          </Playfield>
        </FadeIn>
      </div>
    </section>
  );
}
