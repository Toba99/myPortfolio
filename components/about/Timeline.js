import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../lib/cn";
import { useExperience } from "../../contexts/ExperienceContext";

export default function Timeline({ items }) {
  const { isGraphic } = useExperience();
  const [openId, setOpenId] = useState(items[0]?.id || null);

  return (
    <div
      className={cn(
        "relative space-y-3 before:absolute before:bottom-4 before:left-[1.15rem] before:top-4 before:w-px md:before:left-[1.35rem]",
        isGraphic ? "before:bg-coral/40" : "before:bg-black/10"
      )}
    >
      {items.map((item) => {
        const open = openId === item.id;
        return (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-[1.5rem] border border-black/10 bg-white shadow-card"
          >
            <span
              className={cn(
                "absolute left-3 top-7 z-10 h-3.5 w-3.5 rounded-full border-2 border-white shadow md:left-4",
                isGraphic ? "bg-coral" : "bg-ink"
              )}
            />
            <button
              type="button"
              className="flex w-full items-start justify-between gap-4 py-5 pl-10 pr-5 text-left md:pl-12 md:pr-6"
              onClick={() => setOpenId(open ? null : item.id)}
              aria-expanded={open}
            >
              <div>
                <p
                  className={cn(
                    "text-[11px] font-semibold uppercase tracking-[0.14em]",
                    isGraphic ? "text-coral" : "text-ink-soft"
                  )}
                >
                  {item.start} - {item.end}
                </p>
                <h3 className="mt-2 font-display text-xl font-bold text-ink">{item.org}</h3>
                <p className="mt-1 text-sm font-medium text-ink-muted">{item.role}</p>
              </div>
              <span
                className={cn(
                  "mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-lg transition",
                  open
                    ? isGraphic
                      ? "bg-coral text-white"
                      : "bg-ink text-white"
                    : "bg-ash text-ink"
                )}
              >
                {open ? "−" : "+"}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-black/5 px-5 pb-6 pl-10 pt-4 md:px-6 md:pl-12">
                    <p className="text-sm leading-relaxed text-ink-muted">{item.summary}</p>
                    <ul className="mt-4 space-y-2">
                      {item.responsibilities.map((responsibility) => (
                        <li key={responsibility} className="text-sm text-ink">
                          · {responsibility}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-ash px-3 py-1 text-xs font-semibold text-ink"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
