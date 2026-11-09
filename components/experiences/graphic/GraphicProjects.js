import { projects } from "../../../data/projects";
import GraphicProjectCard from "../../projects/GraphicProjectCard";
import ArrowLink from "../../shared/ArrowLink";
import { FadeIn } from "../../animations/Motion";

export default function GraphicProjects({ limit, showHeader = true }) {
  const isPreview = typeof limit === "number";
  const list = isPreview ? projects.slice(0, limit) : projects;
  // Full list: lead with one wide card, then rows of three (1 + 6 fills the grid).
  const [lead, ...rest] = list;

  return (
    <section className="mx-auto max-w-shell px-5 py-10 md:px-8 md:py-16">
      {showHeader && (
        <div className="mb-7 flex items-end justify-between gap-4">
          <FadeIn>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-muted">
              Selected work
            </p>
          </FadeIn>
          <FadeIn delay={0.05}>
            <ArrowLink href="/projects" className="!text-[11px] !uppercase !tracking-[0.14em]">
              View all work
            </ArrowLink>
          </FadeIn>
        </div>
      )}

      {isPreview ? (
        <div className="grid gap-4 md:grid-cols-3 md:gap-5">
          {list.map((project, index) => (
            <FadeIn key={project.slug} delay={index * 0.05}>
              <GraphicProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      ) : (
        <div className="space-y-4 md:space-y-5">
          <FadeIn>
            <GraphicProjectCard project={lead} featured priority />
          </FadeIn>
          <div className="grid gap-4 md:grid-cols-3 md:gap-5">
            {rest.map((project, index) => (
              <FadeIn key={project.slug} delay={(index % 3) * 0.05}>
                <GraphicProjectCard project={project} />
              </FadeIn>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
