import Image from "next/image";
import { site } from "../../../data/site";
import { timeline } from "../../../data/experience";
import { FadeIn, Stagger, StaggerItem } from "../../animations/Motion";
import Timeline from "../../about/Timeline";
import ColorWash from "../../fx/ColorWash";
import Magnet from "../../fx/Magnet";
import Button from "../../shared/Button";
import SplitText from "../../SplitText";
import { LimeBlob, RedSphere, SquiggleUnderline } from "./GraphicShapes";
import { cn } from "../../../lib/cn";

const focusColors = ["#FF5A3C", "#C8F000", "#4F7CFF", "#F5C542", "#7B5CFF", "#2F9E5B"];

export default function GraphicAbout() {
  return (
    <div className="relative overflow-hidden">
      <ColorWash />

      <section className="relative mx-auto max-w-shell px-5 pb-10 pt-10 md:px-8 md:pb-14 md:pt-16">
        <RedSphere className="pointer-events-none absolute -left-12 top-24 h-40 w-40 opacity-90 md:h-56 md:w-56" />
        <LimeBlob className="pointer-events-none absolute right-4 top-8 h-28 w-28 opacity-90 md:right-16 md:h-40 md:w-40" />
        <div className="relative z-[1] grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <FadeIn>
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-muted">
                About · Profile 01
              </p>
            </FadeIn>
            <SplitText
              text={site.aboutHeadline}
              tag="h1"
              className="max-w-[12ch] font-display text-5xl font-extrabold leading-[0.95] tracking-[-0.04em] text-ink md:text-7xl lg:text-[5.5rem]"
              splitType="chars"
              effect="pop"
              delay={18}
              duration={0.65}
              accentColor="#FF5A3C"
              textAlign="left"
            />
            <div className="relative mt-3 inline-block">
              <p className="font-display text-2xl font-bold tracking-tight text-coral md:text-3xl">
                Engineer · TPM · Product Owner
              </p>
              <SquiggleUnderline color="#FF5A3C" className="-bottom-1 h-4" />
            </div>
            <FadeIn delay={0.08}>
              <p className="mt-4 text-sm font-medium text-ink-soft md:text-base">
                {site.aboutNameNote}
              </p>
            </FadeIn>
            <FadeIn delay={0.12}>
              <p className="mt-3 text-sm font-semibold text-ink-muted">
                {site.location} · {site.email}
              </p>
            </FadeIn>
            <FadeIn delay={0.18}>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-ink-muted md:text-lg">
                {site.aboutIntro[0]}
              </p>
            </FadeIn>
            <FadeIn delay={0.25}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Magnet>
                  <Button href="/contact" className="!uppercase !tracking-[0.08em]">
                    Get in touch ↗
                  </Button>
                </Magnet>
                <Magnet strength={16}>
                  <Button href={site.resume} external variant="pill" className="!uppercase !tracking-[0.08em]">
                    Download CV
                  </Button>
                </Magnet>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.1} className="relative mx-auto w-full max-w-md lg:mx-0 lg:justify-self-end">
            <div className="absolute -left-4 top-6 h-full w-full rotate-[-4deg] rounded-[2rem] bg-coral/90" />
            <div className="absolute -right-3 top-10 h-full w-full rotate-[3deg] rounded-[2rem] bg-lime/80" />
            <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-cream-deep shadow-lift rotate-[-1.5deg]">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/tobs.png"
                  alt={`${site.name} portrait`}
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-ink/85 px-4 py-3 text-white">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-lime">
                  Available
                </p>
                <p className="mt-1 text-sm font-semibold">{site.availability.label}</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="relative z-[1] mx-auto max-w-shell px-5 py-12 md:px-8 md:py-16">
        <div className="grid gap-6 md:grid-cols-[0.35fr_1fr]">
          <FadeIn>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-muted">
              02 · Narrative
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight md:text-4xl">
              More than shipping code
            </h2>
          </FadeIn>
          <div className="space-y-5 text-base leading-relaxed text-ink-muted md:text-lg">
            {site.aboutIntro.slice(1).map((paragraph, index) => (
              <FadeIn key={paragraph.slice(0, 24)} delay={index * 0.08}>
                <p className="border-l-4 border-coral/70 pl-5">{paragraph}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-[1] mx-auto max-w-shell px-5 py-10 md:px-8 md:py-14">
        <FadeIn>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-muted">
            03 · Live by
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight md:text-4xl">
            Two things I live by
          </h2>
        </FadeIn>
        <div className="mt-8 grid gap-6 md:grid-cols-2 md:gap-8">
          {site.aboutPrinciples.map((principle, index) => (
            <FadeIn key={principle.slice(0, 28)} delay={index * 0.08}>
              <blockquote className="relative border-t-4 border-coral pt-5">
                <p className="font-display text-xl font-bold leading-snug tracking-tight text-ink md:text-2xl">
                  {principle}
                </p>
              </blockquote>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="relative z-[1] mx-auto max-w-shell px-5 py-10 md:px-8 md:py-14">
        <FadeIn>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-muted">
            04 · Focus
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight md:text-4xl">
            Areas of focus
          </h2>
        </FadeIn>

        <Stagger className="mt-8 flex flex-wrap gap-3" delay={0.03}>
          {site.focusAreas.map((area, index) => (
            <StaggerItem key={area}>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-black/10 bg-white px-4 py-2.5 text-sm font-semibold text-ink shadow-card">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: focusColors[index % focusColors.length] }}
                />
                {area}
              </span>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="relative z-[1] mx-auto max-w-shell px-5 py-10 md:px-8 md:py-14">
        <div className="overflow-hidden rounded-[2rem] bg-ink px-6 py-8 text-white shadow-lift md:px-10 md:py-12">
          <FadeIn>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-lime">
              05 · Stack
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight md:text-4xl">
              Tools I reach for
            </h2>
          </FadeIn>
          <Stagger className="mt-8 flex flex-wrap gap-3" delay={0.03}>
            {site.stack.map((item) => (
              <StaggerItem key={item}>
                <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold transition hover:bg-lime hover:text-ink">
                  {item}
                </span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="relative z-[1] mx-auto max-w-shell px-5 pb-10 pt-10 md:px-8 md:pb-14 md:pt-14">
        <FadeIn>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-muted">
            06 · Experience
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight md:text-4xl">
            Roles & contributions
          </h2>
          <p className="mt-3 max-w-2xl text-ink-muted">
            Expand each role for responsibilities, contributions and technologies.
          </p>
        </FadeIn>
        <div className="mt-8">
          <Timeline items={timeline} />
        </div>
      </section>

      <section className="relative z-[1] mx-auto max-w-shell px-5 pb-20 md:px-8 md:pb-28">
        <div className="grid gap-6 lg:grid-cols-2">
          <FadeIn>
            <div className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-card md:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-muted">
                07 · Education
              </p>
              {site.education.map((item) => (
                <div key={item.credential} className="mt-4">
                  <h3 className="font-display text-2xl font-bold tracking-tight">{item.credential}</h3>
                  <p className="mt-2 text-sm font-semibold text-ink-muted">
                    {item.school} · {item.period}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="rounded-[2rem] border border-black/10 bg-cream-deep p-6 md:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-muted">
                08 · Learning
              </p>
              <ul className="mt-4 space-y-3">
                {site.certifications.map((item) => (
                  <li key={item} className={cn("text-sm leading-relaxed text-ink")}>
                    · {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
