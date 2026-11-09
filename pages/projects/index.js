import { useExperience } from "../../contexts/ExperienceContext";
import GraphicProjects from "../../components/experiences/graphic/GraphicProjects";
import InteractiveProjects from "../../components/experiences/interactive/InteractiveProjects";
import ColorWash from "../../components/fx/ColorWash";
import Magnet from "../../components/fx/Magnet";
import Button from "../../components/shared/Button";
import SplitText from "../../components/SplitText";
import { FadeIn } from "../../components/animations/Motion";
import { LimeBlob, RedSphere, SquiggleUnderline } from "../../components/experiences/graphic/GraphicShapes";

export default function ProjectsPage() {
  const { isGraphic } = useExperience();

  if (isGraphic) {
    return (
      <div className="relative overflow-hidden">
        <ColorWash />
        <RedSphere className="pointer-events-none absolute -left-10 top-16 h-36 w-36 opacity-85 md:h-48 md:w-48" />
        <LimeBlob className="pointer-events-none absolute right-8 top-12 h-24 w-24 opacity-90 md:h-36 md:w-36" />

        <section className="relative z-[1] mx-auto max-w-shell px-5 pb-4 pt-12 md:px-8 md:pt-20">
          <FadeIn>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-muted">
              Projects · Selected work
            </p>
          </FadeIn>
          <div className="relative max-w-4xl">
            <SplitText
              text="Selected work across fintech, events, AI and healthcare."
              tag="h1"
              className="font-display text-4xl font-extrabold leading-[1.02] tracking-[-0.03em] text-ink md:text-6xl"
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
              Koplio, PiggyVest Business, Carrot, Group Therapy, Salad.ink, Odunayo Eweniyi and
              BesaCare: products I have helped build, each with a live site to visit.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="mt-8">
              <Magnet>
                <Button href="/contact" className="!uppercase !tracking-[0.08em]">
                  Talk about a project ↓
                </Button>
              </Magnet>
            </div>
          </FadeIn>
        </section>

        <div className="relative z-[1]">
          <GraphicProjects showHeader={false} />
        </div>
      </div>
    );
  }

  return <InteractiveProjects showHeader />;
}

export async function getStaticProps() {
  return {
    props: {
      title: "Projects",
      description:
        "Selected work by Toba Martins across fintech, events, AI, personal brand and healthcare.",
    },
  };
}
