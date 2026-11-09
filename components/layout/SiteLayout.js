import Head from "next/head";
import { useEffect } from "react";
import { site } from "../../data/site";
import { useExperience } from "../../contexts/ExperienceContext";
import ExperienceSelector from "../experience-selector/ExperienceSelector";
import Navigation from "../navigation/Navigation";
import Footer from "../shared/Footer";
import { PageTransition } from "../animations/Motion";
import { cn } from "../../lib/cn";

export default function SiteLayout({ children, title, description }) {
  const { experience, hydrated, hasChoice, isGraphic } = useExperience();
  const pageTitle = title ? `${title} · ${site.name}` : site.title;

  useEffect(() => {
    if (!hydrated) return;
    document.body.dataset.experience = experience;
  }, [experience, hydrated]);

  // The page only mounts once we know which experience to show. Before that the
  // tree would be built for the wrong experience (or hidden behind the selector),
  // running canvases and text animations that are immediately thrown away.
  const ready = hydrated && hasChoice;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description || site.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <ExperienceSelector />

      {/* `isolate` keeps fixed -z-10 backgrounds (DotField) above this surface colour */}
      <div
        className={cn(
          "relative isolate min-h-screen transition-colors duration-500",
          isGraphic ? "bg-cream text-ink" : "bg-ash text-ink"
        )}
      >
        {ready && <Navigation />}
        {ready && (
          <PageTransition key={experience}>
            <main>{children}</main>
            <Footer />
          </PageTransition>
        )}
      </div>
    </>
  );
}
