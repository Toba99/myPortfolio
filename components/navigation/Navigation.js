import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { site } from "../../data/site";
import { useExperience } from "../../contexts/ExperienceContext";
import { cn } from "../../lib/cn";
import AvailabilityBadge from "../shared/AvailabilityBadge";
import ExperienceSwitcher from "./ExperienceSwitcher";
import Button from "../shared/Button";

export default function Navigation() {
  const router = useRouter();
  const { isGraphic } = useExperience();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href) => {
    if (href === "/") return router.pathname === "/";
    return router.pathname === href || router.pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 md:px-5 md:pt-4">
      <div
        className={cn(
          "liquid-glass relative mx-auto max-w-shell overflow-hidden transition-[border-radius,box-shadow,background] duration-500",
          scrolled || open
            ? "rounded-[1.6rem] shadow-[0_10px_40px_rgba(12,12,12,0.08),inset_0_1px_0_rgba(255,255,255,0.65)]"
            : "rounded-none shadow-none"
        )}
      >
        <div
          className={cn(
            "absolute inset-0 transition-opacity duration-500",
            scrolled || open ? "opacity-100" : "opacity-0"
          )}
          style={{
            background: isGraphic
              ? "linear-gradient(135deg, rgba(255,255,255,0.55), rgba(246,241,232,0.28) 45%, rgba(255,255,255,0.4))"
              : "linear-gradient(135deg, rgba(255,255,255,0.58), rgba(244,244,242,0.3) 45%, rgba(255,255,255,0.42))",
            // One modest blur, only while scrolled. Stacked/saturated backdrop filters are
            // very expensive in Safari and Firefox.
            backdropFilter: scrolled || open ? "blur(12px)" : undefined,
            WebkitBackdropFilter: scrolled || open ? "blur(12px)" : undefined,
          }}
          aria-hidden
        />
        <div
          className={cn(
            "pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-500",
            scrolled || open ? "opacity-100" : "opacity-0"
          )}
          style={{
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.7), inset 0 -1px 0 rgba(255,255,255,0.18), inset 1px 0 0 rgba(255,255,255,0.25), inset -1px 0 0 rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.45)",
          }}
          aria-hidden
        />
        <div
          className={cn(
            "pointer-events-none absolute inset-x-6 top-0 h-px transition-opacity duration-500",
            scrolled || open ? "opacity-80" : "opacity-0"
          )}
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.95), transparent)",
          }}
          aria-hidden
        />

        <div
          className={cn(
            "absolute inset-0 transition-opacity duration-500",
            scrolled || open
              ? "opacity-0"
              : isGraphic
              ? "bg-cream/70 opacity-100"
              : "bg-ash/75 opacity-100"
          )}
          aria-hidden
        />

        <div className="relative flex items-center justify-between gap-4 px-4 py-3 md:px-5 md:py-3.5">
          <Link href="/">
            <a
              className={cn(
                "font-display font-extrabold tracking-tight text-ink",
                isGraphic ? "text-base uppercase tracking-[0.04em] md:text-lg" : "text-lg md:text-xl"
              )}
            >
              {site.name}
            </a>
          </Link>

          <nav
            className={cn(
              "hidden items-center gap-1 md:flex",
              scrolled && "rounded-full bg-white/25 p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]"
            )}
            aria-label="Primary"
          >
            {site.nav.map((item) => {
              const active = isActive(item.href);
              return (
                <Link key={item.href} href={item.href}>
                  <a
                    className={cn(
                      "relative rounded-full px-3.5 py-2 text-sm font-medium transition",
                      active ? "text-ink" : "text-ink-muted hover:text-ink"
                    )}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-glass-pill"
                        className="absolute inset-0 rounded-full bg-white/70 shadow-[0_4px_16px_rgba(12,12,12,0.08),inset_0_1px_0_rgba(255,255,255,0.8)]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">
                      {isGraphic && item.label === "Projects" ? "Work" : item.label}
                    </span>
                  </a>
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <ExperienceSwitcher compact />
            <a
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "rounded-full border border-white/50 bg-white/55 px-3.5 py-2 text-sm font-semibold text-ink transition hover:bg-white/80",
                isGraphic && "uppercase tracking-[0.06em]"
              )}
            >
              CV
            </a>
            {isGraphic ? (
              <AvailabilityBadge
                compact
                className="!border-white/50 !bg-white/55 !uppercase !tracking-[0.06em]"
              />
            ) : (
              <div className="hidden lg:block">
                <Button href="/contact" className="!bg-ink/90 !py-2.5 !text-xs !shadow-none">
                  Get in touch ↗
                </Button>
              </div>
            )}
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/50 bg-white/55 md:hidden"
            aria-expanded={open}
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <div className="space-y-1.5">
              <span
                className={cn(
                  "block h-0.5 w-4 origin-center bg-ink transition",
                  open && "translate-y-[8px] rotate-45"
                )}
              />
              <span className={cn("block h-0.5 w-4 bg-ink transition", open && "opacity-0")} />
              <span
                className={cn(
                  "block h-0.5 w-4 origin-center bg-ink transition",
                  open && "-translate-y-[8px] -rotate-45"
                )}
              />
            </div>
          </button>
        </div>

        {open && (
          <div className="relative border-t border-white/30 md:hidden">
            <div className="space-y-4 px-4 py-5">
              <div className="flex flex-col gap-2">
                {site.nav.map((item) => (
                  <Link key={item.href} href={item.href}>
                    <a
                      onClick={() => setOpen(false)}
                      className={cn(
                        "rounded-2xl px-4 py-3 text-base font-medium",
                        isActive(item.href)
                          ? "bg-ink text-white"
                          : "border border-white/40 bg-white/50 text-ink"
                      )}
                    >
                      {item.label}
                    </a>
                  </Link>
                ))}
              </div>
              <ExperienceSwitcher />
              <AvailabilityBadge />
              <a
                href={site.resume}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="block rounded-2xl border border-white/40 bg-white/50 px-4 py-3 text-center text-base font-semibold text-ink"
              >
                Download CV ↗
              </a>
              <Button href="/contact" className="w-full" onClick={() => setOpen(false)}>
                Get in touch ↗
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
