import { useExperience } from "../../contexts/ExperienceContext";
import GraphicHero from "../experiences/graphic/GraphicHero";
import GraphicProjects from "../experiences/graphic/GraphicProjects";
import InteractiveHero from "../experiences/interactive/InteractiveHero";
import InteractiveProjects from "../experiences/interactive/InteractiveProjects";
import HomeAboutTeaser from "./HomeAboutTeaser";
import HomeWritingTeaser from "./HomeWritingTeaser";

/**
 * Home = hero → selected work → short about → writing → footer CTA.
 * The footer is the single closing call to action.
 */
export default function HomePage() {
  const { isGraphic } = useExperience();

  if (isGraphic) {
    return (
      <>
        <GraphicHero />
        <GraphicProjects limit={3} />
        <HomeAboutTeaser />
        <HomeWritingTeaser />
      </>
    );
  }

  return (
    <>
      <InteractiveHero />
      <InteractiveProjects limit={4} />
      <HomeAboutTeaser />
      <HomeWritingTeaser />
    </>
  );
}
