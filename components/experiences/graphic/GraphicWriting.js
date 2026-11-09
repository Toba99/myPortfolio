import { articles, articleLinkLabel } from "../../../data/writing";
import { FadeIn, Stagger, StaggerItem } from "../../animations/Motion";
import ColorWash from "../../fx/ColorWash";
import SplitText from "../../SplitText";
import { LimeBlob, RedSphere, SquiggleUnderline } from "./GraphicShapes";
import { cn } from "../../../lib/cn";

// Renders a link only when the article actually exists; otherwise a plain block.
function LinkOrBlock({ href, children, ...props }) {
  if (!href || href === "#") return <div {...props}>{children}</div>;
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      {...props}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
const FeaturedTag = LinkOrBlock;
const CardTag = LinkOrBlock;

export default function GraphicWriting() {
  const [featured, ...rest] = articles;

  return (
    <div className="relative overflow-hidden">
      <ColorWash />
      <RedSphere className="pointer-events-none absolute -left-10 top-20 h-36 w-36 opacity-85 md:h-48 md:w-48" />
      <LimeBlob className="pointer-events-none absolute right-6 top-16 h-24 w-24 opacity-90 md:h-36 md:w-36" />

      <section className="relative z-[1] mx-auto max-w-shell px-5 pb-8 pt-12 md:px-8 md:pt-20">
        <FadeIn>
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-muted">
            Writing · Issue 01
          </p>
        </FadeIn>
        <div className="relative max-w-4xl">
          <SplitText
            text="Notes on engineering, product thinking and technology."
            tag="h1"
            className="font-display text-4xl font-extrabold leading-[1.02] tracking-[-0.03em] text-ink md:text-6xl lg:text-[4.2rem]"
            splitType="chars"
            effect="skew"
            delay={16}
            duration={0.65}
            accentColor="#FF5A3C"
            textAlign="left"
          />
          <SquiggleUnderline color="#FF5A3C" className="relative mt-2 h-4 w-40" />
        </div>
        <FadeIn delay={0.12}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
            Short pieces on decisions, AI, software craft and the relationship between technology and
            society.
          </p>
        </FadeIn>
      </section>

      <section className="relative z-[1] mx-auto max-w-shell px-5 pb-10 md:px-8">
        <FadeIn>
          <FeaturedTag
            href={featured.href}
            className="group relative block overflow-hidden rounded-[2rem] bg-ink p-7 text-white shadow-lift md:p-12"
          >
            <span className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(255,90,60,0.45),transparent_70%)]" />
            <span className="pointer-events-none absolute -bottom-16 left-10 h-60 w-60 rounded-full bg-[radial-gradient(circle,rgba(200,240,0,0.35),transparent_70%)]" />
            <div className="relative flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-lime">
              <span>Featured</span>
              <span>·</span>
              <span>{featured.category}</span>
              <span>·</span>
              <span>{featured.readingTime}</span>
            </div>
            <h2 className="relative mt-5 max-w-3xl font-display text-3xl font-extrabold tracking-tight md:text-5xl">
              {featured.title}
            </h2>
            <p className="relative mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
              {featured.intro}
            </p>
            <p className="relative mt-8 text-sm font-bold uppercase tracking-[0.12em] text-white transition group-hover:text-lime">
              {articleLinkLabel(featured)}
            </p>
          </FeaturedTag>
        </FadeIn>
      </section>

      {rest.length > 0 && (
      <section className="relative z-[1] mx-auto max-w-shell px-5 pb-20 md:px-8 md:pb-28">
        <FadeIn>
          <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-muted">
            More notes
          </p>
        </FadeIn>
        <Stagger className="grid gap-5 md:grid-cols-2" delay={0.05}>
          {rest.map((article, index) => (
            <StaggerItem key={article.slug}>
              <CardTag
                href={article.href}
                className={cn(
                  "group relative block min-h-[220px] overflow-hidden rounded-[1.75rem] border border-black/10 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-lift md:p-8",
                  index % 2 === 0 ? "md:rotate-[-0.6deg]" : "md:rotate-[0.6deg]"
                )}
              >
                <span
                  className="absolute right-5 top-5 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em]"
                  style={{
                    backgroundColor: index % 2 === 0 ? "#FF5A3C" : "#C8F000",
                    color: index % 2 === 0 ? "#fff" : "#0C0C0C",
                  }}
                >
                  {article.credit || article.category}
                </span>
                <p className="font-display text-6xl font-extrabold leading-none text-ink/[0.06]">
                  {String(index + 2).padStart(2, "0")}
                </p>
                <h3 className="relative mt-2 font-display text-2xl font-bold tracking-tight">
                  {article.title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-ink-muted">{article.intro}</p>
                <p className="relative mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">
                  {article.category} · {article.readingTime}
                </p>
              </CardTag>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
      )}
    </div>
  );
}
