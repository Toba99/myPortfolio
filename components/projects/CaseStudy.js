import Link from "next/link";
import { useExperience } from "../../contexts/ExperienceContext";
import { FadeIn } from "../animations/Motion";
import Button from "../shared/Button";
import Tag from "../shared/Tag";
import Magnet from "../fx/Magnet";
import DotField from "../fx/DotField";
import ColorWash from "../fx/ColorWash";
import TextPressure from "../fx/TextPressure";
import SplitText from "../SplitText";
import Image from "next/image";
import { ProjectShot } from "../experiences/graphic/ProjectVisual";
import { LimeBlob, RedSphere } from "../experiences/graphic/GraphicShapes";
import { cn } from "../../lib/cn";
import { projects } from "../../data/projects";

function Section({ title, children, graphic }) {
  return (
    <FadeIn
      className={cn(
        "py-10",
        graphic ? "border-t-4 border-coral/30" : "border-t border-black/10"
      )}
    >
      {title && (
        <h2
          className={cn(
            "font-display font-bold tracking-tight",
            graphic ? "text-2xl uppercase tracking-[0.06em] md:text-3xl" : "text-2xl md:text-3xl"
          )}
        >
          {title}
        </h2>
      )}
      <div className={cn("space-y-5 text-base leading-relaxed text-ink-muted md:text-lg", title && "mt-5")}>
        {children}
      </div>
    </FadeIn>
  );
}

function Meta({ project, graphic }) {
  const items = [
    { label: "Type", value: project.type },
    { label: "My role", value: project.roleLabel },
    { label: "Period", value: project.period },
  ];

  return (
    <FadeIn className="mt-8 grid gap-5 border-y border-black/10 py-6 sm:grid-cols-3">
      {items.map((item) => (
        <div key={item.label}>
          <p
            className={cn(
              "text-[11px] font-semibold uppercase tracking-[0.16em]",
              graphic ? "text-coral" : "text-ink-soft"
            )}
          >
            {item.label}
          </p>
          <p className="mt-2 text-sm font-semibold text-ink md:text-base">{item.value}</p>
        </div>
      ))}
    </FadeIn>
  );
}

function NextProject({ project, graphic }) {
  const index = projects.findIndex((item) => item.slug === project.slug);
  const next = projects[(index + 1) % projects.length];
  if (!next || next.slug === project.slug) return null;

  return (
    <FadeIn className="mt-14">
      <Link href={`/projects/${next.slug}`} passHref>
        <a
          className={cn(
            "group flex items-center justify-between gap-4 rounded-[1.75rem] p-6 transition md:p-8",
            graphic
              ? "bg-ink text-white hover:-translate-y-1"
              : "border border-black/10 bg-white shadow-card hover:-translate-y-1 hover:shadow-lift"
          )}
        >
          <div>
            <p
              className={cn(
                "text-[11px] font-semibold uppercase tracking-[0.16em]",
                graphic ? "text-lime" : "text-ink-soft"
              )}
            >
              Next project
            </p>
            <p className="mt-2 font-display text-2xl font-bold tracking-tight md:text-3xl">
              {next.title}
            </p>
            <p className={cn("mt-1 text-sm", graphic ? "text-white/65" : "text-ink-muted")}>
              {next.cardSummary}
            </p>
          </div>
          <span
            className={cn(
              "flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-lg transition group-hover:translate-x-1",
              graphic ? "bg-white text-ink" : "bg-ink text-white"
            )}
          >
            →
          </span>
        </a>
      </Link>
    </FadeIn>
  );
}

function Skills({ project, graphic }) {
  if (!project.tags?.length) return null;
  return (
    <FadeIn className="mt-6">
      <p
        className={cn(
          "text-[11px] font-semibold uppercase tracking-[0.16em]",
          graphic ? "text-coral" : "text-ink-soft"
        )}
      >
        Skills
      </p>
      <p className="mt-2 text-sm font-medium text-ink md:text-base">
        {project.tags.join(" / ")}
      </p>
    </FadeIn>
  );
}

function CreditName({ person }) {
  const entry = typeof person === "string" ? { name: person } : person;
  if (!entry?.name) return null;

  if (entry.href) {
    return (
      <a
        href={entry.href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-ink underline decoration-black/15 underline-offset-4 transition hover:decoration-black/50"
      >
        {entry.name}
      </a>
    );
  }

  return <span className="font-semibold text-ink">{entry.name}</span>;
}

function Credits({ project, graphic }) {
  if (!project.collaborators?.length) return null;

  return (
    <Section title="Credits" graphic={graphic}>
      <p className="text-ink-muted">
        Thanks to this team. The work was better because of them.
      </p>
      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        {project.collaborators.map((group) => (
          <div key={group.role}>
            <p
              className={cn(
                "text-[11px] font-semibold uppercase tracking-[0.16em]",
                graphic ? "text-coral" : "text-ink-soft"
              )}
            >
              {group.role}
            </p>
            <ul className="mt-3 space-y-1.5">
              {group.people.map((person) => {
                const key = typeof person === "string" ? person : person.name;
                return (
                  <li key={key} className="text-base">
                    <CreditName person={person} />
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

/**
 * Build a Kem-style story rhythm: copy, then an image, more copy, then another image.
 * Images never sit directly on top of each other.
 */
function buildStory(project) {
  if (project.story?.length) return project.story;

  const paragraphs = project.narrative || [];
  const figures = [...(project.figures || [])];
  const blocks = [];
  const introCount = Math.min(2, Math.max(1, Math.ceil(paragraphs.length / 2)));

  paragraphs.slice(0, introCount).forEach((text) => {
    blocks.push({ type: "p", text });
  });

  if (project.image) blocks.push({ type: "shot" });

  paragraphs.slice(introCount).forEach((text) => {
    blocks.push({ type: "p", text });
    if (figures.length) {
      blocks.push({ type: "figure", ...figures.shift() });
    }
  });

  // Any leftover figures still need copy between them if two remain.
  figures.forEach((figure, index) => {
    if (blocks.length && ["shot", "figure"].includes(blocks[blocks.length - 1]?.type)) {
      blocks.push({
        type: "p",
        text:
          figure.caption ||
          `Another look at ${project.title}.`,
      });
    }
    blocks.push({ type: "figure", ...figure, key: `extra-${index}` });
  });

  return blocks;
}

function StoryFigure({ figure, project }) {
  return (
    <FadeIn className="md:-mx-10">
      <figure className="overflow-hidden rounded-[1.5rem] border border-black/10 bg-white shadow-card">
        <div className="relative aspect-[16/10] w-full bg-ash">
          <Image
            src={figure.src}
            alt={figure.alt || `${project.title} figure`}
            layout="fill"
            objectFit="contain"
            sizes="(min-width: 1024px) 900px, 100vw"
          />
        </div>
        {figure.caption && (
          <figcaption className="border-t border-black/5 px-5 py-4 text-sm leading-relaxed text-ink-muted md:px-6">
            {figure.caption}
          </figcaption>
        )}
      </figure>
    </FadeIn>
  );
}

function CaseBody({ project, graphic }) {
  const story = buildStory(project);

  return (
    <>
      <Meta project={project} graphic={graphic} />
      <Skills project={project} graphic={graphic} />

      <Section title="Responsibilities" graphic={graphic}>
        <ul className="space-y-3">
          {project.responsibilities.map((item) => (
            <li key={item} className="flex gap-3 text-ink">
              <span className={cn("mt-2 h-1.5 w-1.5 shrink-0 rounded-full", graphic ? "bg-coral" : "bg-ink")} />
              <span className="text-ink-muted">{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      <div className="space-y-8 py-8 md:space-y-10">
        {story.map((block, index) => {
          if (block.type === "p") {
            return (
              <FadeIn key={`p-${index}`}>
                <p className="text-base leading-relaxed text-ink-muted md:text-lg">{block.text}</p>
              </FadeIn>
            );
          }

          if (block.type === "shot") {
            return (
              <FadeIn key={`shot-${index}`} className="md:-mx-10">
                <ProjectShot project={project} priority={index < 3} />
              </FadeIn>
            );
          }

          if (block.type === "figure") {
            return <StoryFigure key={block.src || `figure-${index}`} figure={block} project={project} />;
          }

          return null;
        })}
      </div>

      <Section title="What I delivered" graphic={graphic}>
        <ul className="space-y-3">
          {project.delivered.map((item) => (
            <li key={item} className="flex gap-3">
              <span className={cn("mt-2 h-1.5 w-1.5 shrink-0 rounded-full", graphic ? "bg-coral" : "bg-ink")} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Reflection" graphic={graphic}>
        <p className="font-medium text-ink md:text-xl md:leading-relaxed">{project.closing}</p>
      </Section>

      <Section title="Technologies" graphic={graphic}>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className={cn(
                "rounded-full px-3 py-1.5 text-sm font-medium text-ink",
                graphic ? "border border-black/10 bg-cream-deep" : "border border-black/10 bg-white"
              )}
            >
              {tech}
            </span>
          ))}
        </div>
      </Section>

      <Credits project={project} graphic={graphic} />
      <NextProject project={project} graphic={graphic} />
    </>
  );
}

export default function CaseStudy({ project }) {
  const { isGraphic } = useExperience();
  const darkHero = isGraphic && project.surface === "#1A1A1A";

  if (isGraphic) {
    return (
      <div className="relative overflow-hidden">
        <ColorWash />
        <RedSphere className="pointer-events-none absolute -left-8 top-20 h-32 w-32 opacity-80" />
        <LimeBlob className="pointer-events-none absolute right-6 top-28 h-24 w-24 opacity-80" />

        <article className="relative z-[1] mx-auto max-w-3xl px-5 py-14 md:px-8 md:py-20">
          <FadeIn>
            <Link href="/projects">
              <a className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-muted hover:text-ink">
                ← All projects
              </a>
            </Link>
          </FadeIn>

          <FadeIn delay={0.05}>
            <div
              className="mt-6 overflow-hidden rounded-[2rem] p-6 shadow-lift md:p-8"
              style={{ background: project.surface }}
            >
              <div className="flex flex-wrap gap-2">
                {project.category.map((item) => (
                  <Tag key={item} tone={darkHero ? "dark" : "light"}>
                    {item}
                  </Tag>
                ))}
              </div>
              <SplitText
                text={project.title}
                tag="h1"
                className={cn(
                  "mt-5 font-display text-4xl font-extrabold tracking-tight md:text-5xl",
                  darkHero && "text-white"
                )}
                splitType="chars"
                effect="pop"
                delay={14}
                duration={0.6}
                accentColor="#FF5A3C"
                textAlign="left"
              />
              <p className={cn("mt-5 max-w-2xl text-base leading-relaxed md:text-lg", darkHero ? "text-white/75" : "text-ink-muted")}>
                {project.summary}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                {project.website && (
                  <Magnet>
                    <Button href={project.website} external>
                      Visit website ↗
                    </Button>
                  </Magnet>
                )}
                <Magnet strength={16}>
                  <Button href="/contact" variant="secondary">
                    Talk about this work
                  </Button>
                </Magnet>
              </div>
            </div>
          </FadeIn>

          <CaseBody project={project} graphic />
        </article>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden bg-interactive-glow">
      <DotField />
      <article className="relative z-[1] mx-auto max-w-3xl px-5 py-14 md:px-8 md:py-20">
        <FadeIn>
          <Link href="/projects">
            <a className="text-sm font-semibold text-ink-muted hover:text-ink">← All projects</a>
          </Link>
        </FadeIn>

        <FadeIn delay={0.05}>
          <div className="mt-6 overflow-hidden rounded-[2rem] border border-black/5 bg-white/90 p-6 shadow-lift md:p-8">
            <div className="flex flex-wrap gap-2">
              {project.category.map((item) => (
                <Tag key={item} tone="light">
                  {item}
                </Tag>
              ))}
            </div>
            <div className="mt-5">
              <TextPressure
                text={project.title}
                className="font-display text-4xl font-extrabold tracking-tight text-ink md:text-5xl"
              />
            </div>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
              {project.summary}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {project.website && (
                <Magnet>
                  <Button href={project.website} external>
                    Visit website ↗
                  </Button>
                </Magnet>
              )}
              <Magnet strength={16}>
                <Button href="/contact" variant="secondary">
                  Talk about this work
                </Button>
              </Magnet>
            </div>
          </div>
        </FadeIn>

        <CaseBody project={project} />
      </article>
    </div>
  );
}
