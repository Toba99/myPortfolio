import { projects } from "../../../data/projects";
import InteractiveProjectCard from "../../projects/InteractiveProjectCard";
import ArrowLink from "../../shared/ArrowLink";
import { FadeIn } from "../../animations/Motion";
import TextPressure from "../../fx/TextPressure";

export default function InteractiveProjects({ limit, showHeader = true }) {
  const isPreview = typeof limit === "number";
  const list = isPreview ? projects.slice(0, limit) : projects;

  return (
    <section
      className={
        isPreview
          ? "relative mx-auto max-w-shell px-5 py-12 md:px-8 md:py-16"
          : "relative mx-auto max-w-shell px-5 pb-16 pt-12 md:px-8 md:pb-24 md:pt-20"
      }
    >
      {showHeader && (
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <FadeIn>
            {!isPreview && (
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">
                Projects
              </p>
            )}
            <TextPressure
              text={isPreview ? "Featured projects" : "Selected work"}
              className="font-display text-3xl font-bold tracking-tight md:text-5xl"
            />
            {!isPreview && (
              <p className="mt-3 max-w-xl text-base text-ink-muted">
                Products I have helped build across fintech, events, AI, personal brand and
                healthcare.
              </p>
            )}
          </FadeIn>
          {isPreview && (
            <FadeIn delay={0.05}>
              <ArrowLink href="/projects">View all projects</ArrowLink>
            </FadeIn>
          )}
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-6 md:gap-5">
        {list.map((project, index) => {
          // Preview (4 items): 4+2 / 3+3.  Full list (7 items): 6 / 3+3 / 3+3 / 3+3.
          // Every row is full  -  no orphan cards.
          const span = isPreview
            ? index === 0
              ? "md:col-span-4"
              : index === 1
              ? "md:col-span-2"
              : "md:col-span-3"
            : index === 0
            ? "md:col-span-6"
            : "md:col-span-3";

          return (
            <FadeIn key={project.slug} delay={(index % 2) * 0.05} className={span}>
              <InteractiveProjectCard project={project} featured={index === 0} priority={index === 0} />
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
