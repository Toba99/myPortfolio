import Image from "next/image";
import { useState } from "react";
import { site } from "../../../data/site";
import { timeline } from "../../../data/experience";
import { FadeIn } from "../../animations/Motion";
import Timeline from "../../about/Timeline";
import DotField from "../../fx/DotField";
import Draggable from "../../fx/Draggable";
import Playfield from "../../fx/Playfield";
import Magnet from "../../fx/Magnet";
import Button from "../../shared/Button";
import TextPressure from "../../fx/TextPressure";

const statTilt = [-2.6, 2.2, -1.8, 2.8];

function Portrait({ className }) {
  return (
    <div
      className={`relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-black/10 bg-white shadow-lift ${className || ""}`}
    >
      <Image
        src="/tobs.png"
        alt={`${site.name} portrait`}
        layout="fill"
        objectFit="cover"
        priority
      />
    </div>
  );
}

function SectionTitle({ eyebrow, title }) {
  return (
    <FadeIn>
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
    </FadeIn>
  );
}

export default function InteractiveAbout() {
  const [resetKey, setResetKey] = useState(0);
  const notes = site.aboutIntro.slice(1);

  return (
    <div className="relative overflow-hidden bg-interactive-glow">
      <DotField />

      {/* Intro */}
      <section className="relative z-[1] mx-auto max-w-shell px-5 pb-8 pt-12 md:px-8 md:pt-20">
        <FadeIn>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">
            About
          </p>
        </FadeIn>
        <TextPressure
          text={site.aboutHeadline}
          className="max-w-4xl font-display text-4xl font-extrabold tracking-tight text-ink md:text-6xl lg:text-[4rem]"
        />
        <FadeIn delay={0.08}>
          <p className="mt-3 max-w-2xl text-sm font-medium text-ink-soft md:text-base">
            {site.aboutNameNote}
          </p>
        </FadeIn>
        <FadeIn delay={0.12}>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
            {site.aboutIntro[0]}
          </p>
        </FadeIn>
        <FadeIn delay={0.15}>
          <div className="mt-8 flex flex-wrap gap-3">
            <Magnet>
              <Button href="/contact">Get in touch ↗</Button>
            </Magnet>
            <Magnet strength={16}>
              <Button href={site.resume} external variant="pill">
                Download CV
              </Button>
            </Magnet>
          </div>
        </FadeIn>
      </section>

      {/* The one playful board: portrait, two notes, four stats */}
      <section className="relative z-[1] mx-auto max-w-shell px-5 pb-12 md:px-8">
        <div className="mb-3 hidden justify-end md:flex">
          <button
            type="button"
            onClick={() => setResetKey((n) => n + 1)}
            className="rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold transition hover:bg-ash"
          >
            Reset layout
          </button>
        </div>

        {/* Desktop: draggable board */}
        <Playfield
          key={resetKey}
          className="hidden min-h-[560px] overflow-hidden rounded-[2rem] border border-black/5 bg-white/70 p-6 md:block"
          hint="Drag the pieces"
        >
          {(constraints) => (
            <>
              <Draggable
                dragConstraints={constraints}
                className="absolute left-[3%] top-[5%] w-[26%] max-w-[240px]"
                style={{ rotate: -2.2 }}
              >
                <Portrait />
              </Draggable>

              {notes.map((paragraph, index) => (
                <Draggable
                  key={paragraph.slice(0, 20)}
                  dragConstraints={constraints}
                  className="absolute max-w-[420px] rounded-3xl border border-black/10 bg-white p-5 shadow-card"
                  style={{
                    left: index === 0 ? "36%" : "46%",
                    top: index === 0 ? "5%" : "34%",
                    width: index === 0 ? "56%" : "48%",
                    rotate: index === 0 ? 1.6 : -1.8,
                  }}
                >
                  <p className="text-sm leading-relaxed text-ink-muted">{paragraph}</p>
                </Draggable>
              ))}

              {site.highlights.map((item, index) => (
                <Draggable
                  key={item.label}
                  dragConstraints={constraints}
                  className="absolute rounded-2xl bg-ink px-4 py-3 text-white shadow-card"
                  style={{
                    left: `${5 + index * 22}%`,
                    top: `${index % 2 === 0 ? 76 : 82}%`,
                    rotate: statTilt[index],
                  }}
                >
                  <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-white/55">
                    {item.label}
                  </p>
                  <p className="font-display text-lg font-bold">{item.value}</p>
                </Draggable>
              ))}
            </>
          )}
        </Playfield>

        {/* Mobile: same content, plain stack */}
        <div className="space-y-4 md:hidden">
          <Portrait className="mx-auto max-w-[260px]" />
          {notes.map((paragraph) => (
            <p
              key={paragraph.slice(0, 20)}
              className="rounded-3xl border border-black/10 bg-white p-5 text-sm leading-relaxed text-ink-muted shadow-card"
            >
              {paragraph}
            </p>
          ))}
          <div className="grid grid-cols-2 gap-3">
            {site.highlights.map((item) => (
              <div key={item.label} className="rounded-2xl bg-ink px-4 py-3 text-white">
                <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-white/55">
                  {item.label}
                </p>
                <p className="font-display text-lg font-bold">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="relative z-[1] mx-auto max-w-shell px-5 py-10 md:px-8 md:py-14">
        <SectionTitle eyebrow="Live by" title="Two things I live by" />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {site.aboutPrinciples.map((principle, index) => (
            <FadeIn key={principle.slice(0, 28)} delay={index * 0.06}>
              <blockquote className="rounded-[1.75rem] border border-black/10 bg-white p-6 shadow-card md:p-7">
                <p className="font-display text-xl font-bold leading-snug tracking-tight text-ink md:text-2xl">
                  {principle}
                </p>
              </blockquote>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Focus + stack */}
      <section className="relative z-[1] mx-auto max-w-shell px-5 py-10 md:px-8 md:py-14">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <SectionTitle eyebrow="Focus" title="What I do" />
            <FadeIn delay={0.05}>
              <ul className="mt-6 flex flex-wrap gap-2">
                {site.focusAreas.map((area) => (
                  <li
                    key={area}
                    className="rounded-full border border-black/10 bg-white px-3.5 py-2 text-sm font-medium text-ink"
                  >
                    {area}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
          <div>
            <SectionTitle eyebrow="Stack" title="Tools I reach for" />
            <FadeIn delay={0.05}>
              <ul className="mt-6 flex flex-wrap gap-2">
                {site.stack.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-ink px-3.5 py-2 text-sm font-medium text-white"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="relative z-[1] mx-auto max-w-shell px-5 py-10 md:px-8 md:py-14">
        <SectionTitle eyebrow="Experience" title="Roles & contributions" />
        <div className="mt-8">
          <Timeline items={timeline} />
        </div>
      </section>

      {/* Education + learning */}
      <section className="relative z-[1] mx-auto max-w-shell px-5 pb-20 pt-6 md:px-8 md:pb-28">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-card md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">
              Education
            </p>
            {site.education.map((item) => (
              <div key={item.credential} className="mt-4">
                <h3 className="font-display text-xl font-bold tracking-tight">{item.credential}</h3>
                <p className="mt-1 text-sm text-ink-muted">
                  {item.school} · {item.period}
                </p>
              </div>
            ))}
          </div>
          <div className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-card md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">
              Currently learning
            </p>
            <ul className="mt-4 space-y-2.5">
              {site.certifications.map((item) => (
                <li key={item} className="text-sm leading-relaxed text-ink">
                  · {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
