import { useExperience } from "../../contexts/ExperienceContext";
import GraphicContact from "../experiences/graphic/GraphicContact";
import InteractiveContact from "../experiences/interactive/InteractiveContact";

export default function ContactContent() {
  const { isGraphic } = useExperience();
  return isGraphic ? <GraphicContact /> : <InteractiveContact />;
}
