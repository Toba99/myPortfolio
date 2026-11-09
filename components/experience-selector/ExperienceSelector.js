import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useExperience } from "../../contexts/ExperienceContext";
import { cn } from "../../lib/cn";
import Magnet from "../fx/Magnet";

const options = [
  {
    id: "graphic",
    title: "Graphic Experience",
    description:
      "A colourful, bold look at the things I've built and the ideas behind them.",
    points: [
      "Bold typography",
      "Vibrant colours",
      "Creative compositions",
      "Large project imagery",
      "Playful transitions",
    ],
    previewClass: "bg-graphic-glow from-cream to-cream-deep",
    accent: "bg-coral",
  },
  {
    id: "interactive",
    title: "Interactive Experience",
    description:
      "A calmer, more minimal way to explore my projects, thinking and how I build products.",
    points: [
      "Generous whitespace",
      "Clean typography",
      "Neutral backgrounds",
      "Subtle green accents",
      "Smooth animations",
    ],
    previewClass: "bg-interactive-glow from-ash to-white",
    accent: "bg-lime",
  },
];

export default function ExperienceSelector() {
  const { selectorOpen, setExperience, hasChoice, closeSelector, hydrated } = useExperience();
  const reduce = useReducedMotion();

  if (!hydrated) return null;

  return (
    <AnimatePresence>
      {selectorOpen && (
        <motion.div
          key="experience-selector"
          className="fixed inset-0 z-50 overflow-y-auto bg-cream"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="experience-selector-title"
        >
          <div className="mx-auto flex min-h-full max-w-shell flex-col justify-center px-5 py-16 md:px-8">
            <div className="mb-10 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">
                Welcome
              </p>
              <h1
                id="experience-selector-title"
                className="font-display text-4xl font-extrabold tracking-tight text-ink md:text-6xl"
              >
                Two ways to explore. One perspective.
              </h1>
              <p className="mt-4 max-w-xl text-base text-ink-muted md:text-lg">
                Choose how you&apos;d like to experience my work.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {options.map((option, index) => (
                <Magnet key={option.id} strength={14} className="block w-full !inline-block">
                  <motion.button
                    type="button"
                    onClick={() => setExperience(option.id)}
                    initial={reduce ? false : { opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={reduce ? undefined : { y: -8, scale: 1.015 }}
                    transition={{ delay: 0.1 + index * 0.08, duration: 0.5 }}
                    className={cn(
                      "group relative w-full overflow-hidden rounded-[2rem] border border-black/10 p-6 text-left shadow-soft md:p-8",
                      option.previewClass
                    )}
                  >
                    <div className="relative mb-8 flex h-40 items-end justify-between overflow-hidden rounded-3xl border border-black/5 bg-white/40 p-4">
                      {/* Static CSS preview: no canvas or animation loop on first load */}
                      <div
                        aria-hidden
                        className="absolute inset-0"
                        style={{
                          backgroundImage:
                            option.id === "graphic"
                              ? "radial-gradient(circle at 78% 24%, rgba(255,90,60,0.32), transparent 45%), radial-gradient(circle at 22% 80%, rgba(200,240,0,0.3), transparent 42%)"
                              : "radial-gradient(rgba(12,12,12,0.16) 1px, transparent 1.4px)",
                          backgroundSize: option.id === "graphic" ? undefined : "18px 18px",
                        }}
                      />
                      <div className="relative z-10 space-y-2">
                        <div className={cn("h-3 w-20 rounded-full", option.accent)} />
                        <div className="h-3 w-28 rounded-full bg-black/10" />
                        <div className="h-3 w-16 rounded-full bg-black/10" />
                      </div>
                      <div className="relative z-10 h-24 w-24">
                        <span className={cn("absolute right-2 top-2 h-12 w-12 rounded-full opacity-80", option.accent)} />
                        <span className="absolute bottom-1 left-1 h-16 w-16 rounded-[1.4rem] border border-black/10 bg-white shadow-card" />
                      </div>
                    </div>

                    <h2 className="font-display text-2xl font-bold text-ink md:text-3xl">
                      {option.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-ink-muted md:text-base">
                      {option.description}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {option.points.map((point) => (
                        <li
                          key={point}
                          className="rounded-full bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-ink"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold">
                      Enter experience
                      <span className="transition group-hover:translate-x-1">→</span>
                    </div>
                  </motion.button>
                </Magnet>
              ))}
            </div>

            {hasChoice && (
              <button
                type="button"
                onClick={closeSelector}
                className="mt-8 self-start text-sm font-medium text-ink-muted underline-offset-4 hover:underline"
              >
                Keep current experience
              </button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
