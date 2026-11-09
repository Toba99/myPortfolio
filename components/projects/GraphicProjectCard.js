import Link from "next/link";
import Tag from "../shared/Tag";
import { cn } from "../../lib/cn";
import { ProjectVisual } from "../experiences/graphic/ProjectVisual";

export default function GraphicProjectCard({ project, featured = false, priority = false }) {
  return (
    <Link href={`/projects/${project.slug}`} passHref>
      <a
        className={cn(
          "group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-black/5 bg-white p-4 text-ink shadow-card transition duration-300 ease-out hover:-translate-y-2 hover:shadow-lift md:p-5",
          featured && "md:flex-row md:items-stretch md:gap-8 md:p-6"
        )}
      >
        <span className="absolute right-6 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-ink text-sm text-white transition group-hover:rotate-12 group-hover:scale-110">
          ↗
        </span>

        <div
          className={cn(
            "relative aspect-[16/10] w-full overflow-hidden rounded-[1.25rem] border border-black/5",
            featured && "md:aspect-auto md:min-h-[320px] md:w-[58%] md:shrink-0"
          )}
        >
          <div className="absolute inset-0 transition duration-500 ease-out group-hover:scale-105">
            <ProjectVisual
              slug={project.slug}
              priority={priority}
              sizes={featured ? "(min-width: 768px) 700px, 100vw" : "(min-width: 768px) 33vw, 100vw"}
            />
          </div>
        </div>

        <div className={cn("flex flex-1 flex-col px-1 pb-1 pt-4", featured && "md:justify-center md:py-4")}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
            {project.category[0]}
          </p>
          <h3
            className={cn(
              "mt-1.5 font-display font-bold tracking-tight",
              featured ? "text-2xl md:text-4xl" : "text-xl md:text-2xl"
            )}
          >
            {project.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted md:text-base">
            {featured ? project.summary : project.cardSummary}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Tag key={tag} tone="light">
                {tag}
              </Tag>
            ))}
          </div>
        </div>
      </a>
    </Link>
  );
}
