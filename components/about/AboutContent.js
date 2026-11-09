import { useExperience } from "../../contexts/ExperienceContext";
import GraphicAbout from "../experiences/graphic/GraphicAbout";
import InteractiveAbout from "../experiences/interactive/InteractiveAbout";

export default function AboutContent() {
  const { isGraphic } = useExperience();
  return isGraphic ? <GraphicAbout /> : <InteractiveAbout />;
}
