import { useState } from "react";
import { articles, articleLinkLabel } from "../../../data/writing";
import { scatterCards } from "../../../lib/scatter";
import { FadeIn } from "../../animations/Motion";
import DotField from "../../fx/DotField";
import Draggable from "../../fx/Draggable";
import Playfield from "../../fx/Playfield";
import TextPressure from "../../fx/TextPressure";
import Magnet from "../../fx/Magnet";
import { cn } from "../../../lib/cn";

export default function InteractiveWriting() {
  const [resetKey, setResetKey] = useState(0);
  const positions = scatterCards(articles.length, {
    cols: 2,
    maxRotate: 5,
    jitter: 0.88,
    stagger: 0.4,
    footprint: 0.8,
  });

  return (
    <div className="relative overflow-hidden bg-interactive-glow">
      <DotField />

      <section className="relative z-[1] mx-auto max-w-shell px-5 pb-6 pt-12 md:px-8 md:pt-20">
        <FadeIn>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">
            Writing · Playground
          </p>
        </FadeIn>
        <TextPressure
          text="Notes you can rearrange."
          className="max-w-4xl font-display text-4xl font-extrabold tracking-tight text-ink md:text-6xl"
        />
        <FadeIn delay={0.1}>
          <div className="mt-5 flex flex-wrap items-center gap-4">
            <p className="max-w-xl text-base leading-relaxed text-ink-muted">
              {articles.length === 1
                ? "One piece so far, open it or drag the card around."
                : `${articles.length} pieces, lightly scattered so every card stays fully visible.`}
            </p>
            <Magnet>
              <button
                type="button"
                onClick={() => setResetKey((n) => n + 1)}
                className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold transition hover:bg-ash"
              >
                Reset board
              </button>
            </Magnet>
          </div>
        </FadeIn>
      </section>

      <section className="relative z-[1] mx-auto max-w-shell px-5 pb-20 md:px-8 md:pb-28">
        <Playfield
          key={resetKey}
          className="min-h-[980px] overflow-hidden rounded-[2rem] border border-black/5 bg-white/65 p-4 md:min-h-[1100px] md:p-8"
          hint="Drag articles around"
        >
          {(constraints) =>
            articles.map((article, index) => {
              const pos = positions[index];
              const external = article.href?.startsWith("http");
              const linkClass =
                "mt-4 inline-block text-xs font-semibold text-ink underline-offset-2 hover:underline";
              return (
                <Draggable
                  key={article.slug}
                  dragConstraints={constraints}
                  className={cn(
                    "absolute rounded-[1.75rem] border border-black/10 bg-white p-5 shadow-card md:p-6",
                    article.featured && "ring-2 ring-lime"
                  )}
                  style={{
                    left: pos.left,
                    top: pos.top,
                    width: pos.width,
                    maxWidth: 440,
                    rotate: pos.rotate,
                  }}
                >
                  <div className="flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
                    <span>{article.category}</span>
                    <span>·</span>
                    <span>{article.readingTime}</span>
                    <span>·</span>
                    <span>{article.date}</span>
                    {article.featured && (
                      <span className="rounded-full bg-lime/70 px-2 py-0.5 text-ink normal-case tracking-normal">
                        Featured
                      </span>
                    )}
                    {article.credit && (
                      <span className="rounded-full bg-ash px-2 py-0.5 text-ink normal-case tracking-normal">
                        {article.credit}
                      </span>
                    )}
                  </div>
                  <h2 className="mt-3 font-display text-xl font-bold tracking-tight md:text-2xl">
                    {article.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">{article.intro}</p>
                  {article.href === "#" ? (
                    <span className="mt-4 inline-block text-xs font-semibold text-ink-soft">
                      Coming soon
                    </span>
                  ) : external ? (
                    <a
                      href={article.href}
                      target="_blank"
                      rel="noreferrer"
                      draggable={false}
                      className={linkClass}
                      onClick={(event) => event.stopPropagation()}
                    >
                      {articleLinkLabel(article)}
                    </a>
                  ) : (
                    <a
                      href={article.href}
                      draggable={false}
                      className={linkClass}
                      onClick={(event) => event.stopPropagation()}
                    >
                      {articleLinkLabel(article)}
                    </a>
                  )}
                </Draggable>
              );
            })
          }
        </Playfield>
      </section>
    </div>
  );
}
