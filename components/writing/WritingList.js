import { useExperience } from "../../contexts/ExperienceContext";
import GraphicWriting from "../experiences/graphic/GraphicWriting";
import InteractiveWriting from "../experiences/interactive/InteractiveWriting";

export default function WritingList() {
  const { isGraphic } = useExperience();
  return isGraphic ? <GraphicWriting /> : <InteractiveWriting />;
}
