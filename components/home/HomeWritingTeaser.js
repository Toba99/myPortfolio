import { articles, articleLinkLabel } from "../../data/writing";
import { useExperience } from "../../contexts/ExperienceContext";
import { FadeIn } from "../animations/Motion";
import ArrowLink from "../shared/ArrowLink";

const [featured, ...rest] = articles;

function articleHref(article) {
  if (!article?.href || article.href === "#") return "/writing";
  return article.href;
}

function externalProps(href) {
  return href.startsWith("http")
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
}

function Header({ graphic }) {
  return (
    <div className="mb-6 flex items-end justify-between gap-4">
      <FadeIn>
        {graphic && (
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-muted">
            Writing
          </p>
        )}
        <h2
          className={
            graphic
              ? "mt-2 font-display text-3xl font-extrabold tracking-tight md:text-4xl"
              : "font-display text-3xl font-bold tracking-tight md:text-4xl"
          }
        >
          {graphic ? "Notes & thinking" : "Writing"}
        </h2>
      </FadeIn>
      <FadeIn delay={0.05}>
        <ArrowLink
          href="/writing"
          className={graphic ? "!text-[11px] !uppercase !tracking-[0.14em]" : undefined}
        >
          All writing
        </ArrowLink>
      </FadeIn>
    </div>
  );
}

export default function HomeWritingTeaser() {
  const { isGraphic } = useExperience();
  if (!featured) return null;

  const featuredHref = articleHref(featured);

  if (isGraphic) {
    return (
      <section className="mx-auto max-w-shell px-5 pb-12 md:px-8 md:pb-16">
        <Header graphic />
        <FadeIn>
          <a
            href={featuredHref}
            {...externalProps(featuredHref)}
            className="group relative block overflow-hidden rounded-[2rem] bg-ink p-6 text-white shadow-lift md:p-10"
          >
            <span className="pointer-events-none absolute -right-8 -top-8 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(255,90,60,0.45),transparent_70%)]" />
            <p className="relative text-[11px] font-semibold uppercase tracking-[0.16em] text-lime">
              Featured · {featured.category}
            </p>
            <h3 className="relative mt-4 font-display text-3xl font-extrabold tracking-tight md:text-4xl">
              {featured.title}
            </h3>
            <p className="relative mt-4 max-w-2xl text-base leading-relaxed text-white/70">
              {featured.intro}
            </p>
            <p className="relative mt-6 text-sm font-bold uppercase tracking-[0.12em] text-white/80 transition group-hover:text-lime">
              {articleLinkLabel(featured)}
            </p>
          </a>
        </FadeIn>

        {rest.length > 0 && (
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {rest.slice(0, 2).map((article, index) => {
              const href = articleHref(article);
              return (
                <FadeIn key={article.slug} delay={0.05 + index * 0.04}>
                  <a
                    href={href}
                    {...externalProps(href)}
                    className="block h-full rounded-[1.5rem] border border-black/10 bg-white p-5 shadow-card transition hover:-translate-y-1 hover:shadow-lift"
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
                      {article.credit ? `${article.credit} · ` : ""}
                      {article.category} · {article.readingTime}
                    </p>
                    <h3 className="mt-3 font-display text-xl font-bold tracking-tight">
                      {article.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">{article.intro}</p>
                  </a>
                </FadeIn>
              );
            })}
          </div>
        )}
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-shell px-5 pb-12 md:px-8 md:pb-16">
      <Header />
      <div className="grid gap-4 md:grid-cols-2">
        {articles.slice(0, 2).map((article, index) => {
          const href = articleHref(article);
          return (
            <FadeIn key={article.slug} delay={index * 0.05}>
              <a
                href={href}
                {...externalProps(href)}
                className="block h-full rounded-[1.5rem] border border-black/10 bg-white p-5 shadow-card transition hover:-translate-y-1 hover:shadow-lift md:p-6"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
                  {article.credit ? `${article.credit} · ` : ""}
                  {article.category} · {article.readingTime}
                </p>
                <h3 className="mt-3 font-display text-lg font-bold tracking-tight md:text-xl">
                  {article.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{article.intro}</p>
                <p className="mt-4 text-sm font-semibold text-ink">{articleLinkLabel(article)}</p>
              </a>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
