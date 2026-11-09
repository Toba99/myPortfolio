import Image from "next/image";
import { site } from "../../data/site";
import { useExperience } from "../../contexts/ExperienceContext";
import { FadeIn } from "../animations/Motion";
import Button from "../shared/Button";
import Magnet from "../fx/Magnet";
import { LimeBlob, RedSphere } from "../experiences/graphic/GraphicShapes";
import { cn } from "../../lib/cn";

const stats = site.highlights.slice(0, 3);

export default function HomeAboutTeaser() {
  const { isGraphic } = useExperience();

  if (isGraphic) {
    return (
      <section className="relative mx-auto max-w-shell overflow-hidden px-5 py-12 md:px-8 md:py-20">
        <FadeIn>
          <div className="relative grid items-center gap-8 overflow-hidden rounded-[2rem] bg-white p-6 shadow-soft md:grid-cols-[0.8fr_1.2fr] md:p-10">
            <RedSphere className="pointer-events-none absolute -left-8 -top-8 h-24 w-24 opacity-80" />
            <LimeBlob className="pointer-events-none absolute -right-6 top-8 h-20 w-20 opacity-80" />

            <div className="relative z-10 mx-auto w-full max-w-xs">
              <div
                aria-hidden
                className="absolute -left-2 top-3 h-full w-full rotate-[-3deg] rounded-[2rem] bg-coral/80"
              />
              <div className="relative aspect-square overflow-hidden rounded-[2rem] rotate-[-2deg] shadow-lift">
                <Image
                  src="/tobs.png"
                  alt={`${site.name} portrait`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>

            <div className="relative z-10">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-muted">
                About
              </p>
              <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">
                Working at the intersection of engineering and product
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted">
                {site.aboutIntro[0]}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {site.focusAreas.slice(0, 4).map((area, index) => (
                  <span
                    key={area}
                    className={cn(
                      "rounded-full px-3 py-1.5 text-xs font-semibold text-ink",
                      index % 2 === 0 ? "bg-cream-deep" : "bg-lime/50"
                    )}
                  >
                    {area}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Magnet>
                  <Button href="/about" className="!uppercase !tracking-[0.08em]">
                    More about me
                  </Button>
                </Magnet>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-shell px-5 py-12 md:px-8 md:py-16">
      <FadeIn>
        <div className="grid items-center gap-8 rounded-[2rem] border border-black/5 bg-white/80 p-6 shadow-card md:grid-cols-[220px_1fr] md:gap-10 md:p-8">
          <div className="relative mx-auto aspect-square w-full max-w-[220px] overflow-hidden rounded-[1.5rem] border border-black/10 bg-ash shadow-lift">
            <Image
              src="/tobs.png"
              alt={`${site.name} portrait`}
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">
              About
            </p>
            <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
              Engineering and product, in one pair of hands
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-muted">
              {site.aboutIntro[0]}
            </p>

            <div className="mt-5 flex flex-wrap gap-6">
              {stats.map((item) => (
                <div key={item.label}>
                  <p className="font-display text-2xl font-bold">{item.value}</p>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-soft">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Magnet>
                <Button href="/about">More about me</Button>
              </Magnet>
              <Magnet strength={16}>
                <Button href={site.resume} external variant="pill">
                  CV
                </Button>
              </Magnet>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
