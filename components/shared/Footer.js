import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { site } from "../../data/site";
import { useExperience } from "../../contexts/ExperienceContext";
import { cn } from "../../lib/cn";
import Button from "./Button";
import Magnet from "../fx/Magnet";

/** The one closing call to action for every page, then a quiet link row. */
export default function Footer() {
  const { isGraphic } = useExperience();
  const reduce = useReducedMotion();
  const ctaRef = useRef(null);
  const inView = useInView(ctaRef, { once: true, amount: 0.35, margin: "0px 0px -8% 0px" });

  return (
    <footer className={cn("relative overflow-hidden", isGraphic ? "bg-cream" : "bg-ash")}>
      <div className="mx-auto max-w-shell px-5 pb-10 pt-8 md:px-8 md:pt-12">
        <motion.div
          ref={ctaRef}
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "relative mb-10 overflow-hidden rounded-[2rem] px-6 py-10 md:px-10 md:py-14",
            isGraphic ? "bg-ink text-white" : "border border-black/5 bg-white text-ink"
          )}
        >
          <h2 className="max-w-2xl font-display text-3xl font-extrabold tracking-tight md:text-5xl">
            {site.contactHeadline}
          </h2>
          <p
            className={cn(
              "mt-4 max-w-xl text-base",
              isGraphic ? "text-white/70" : "text-ink-muted"
            )}
          >
            {site.availability.label}.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Magnet>
              <Button href={`mailto:${site.email}`} external>
                Email me ↗
              </Button>
            </Magnet>
            <Magnet strength={16}>
              <Button href={site.resume} external variant="pill">
                Download CV
              </Button>
            </Magnet>
          </div>
        </motion.div>

        <div
          className={cn(
            "flex flex-col gap-4 border-t pt-8 md:flex-row md:items-center md:justify-between",
            "border-black/10"
          )}
        >
          <p className="text-sm text-ink-muted">
            © {new Date().getFullYear()} {site.name}
          </p>
          <div className="flex flex-wrap items-center gap-5 text-sm font-medium">
            <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={site.social.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={site.social.x} target="_blank" rel="noopener noreferrer">
              X
            </a>
            <a href={`mailto:${site.email}`}>Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
