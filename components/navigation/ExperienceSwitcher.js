import { useExperience } from "../../contexts/ExperienceContext";
import { cn } from "../../lib/cn";

export default function ExperienceSwitcher({ className, compact = false }) {
  const { experience, setExperience, openSelector, isGraphic } = useExperience();

  return (
    <div className={cn("inline-flex items-center gap-2", className)}>
      <div className="inline-flex rounded-full border border-black/10 bg-white/70 p-1">
        <button
          type="button"
          onClick={() => setExperience("graphic")}
          className={cn(
            "rounded-full px-3 py-1.5 text-xs font-semibold tracking-wide transition",
            isGraphic ? "bg-ink text-white" : "text-ink-muted hover:text-ink"
          )}
          aria-pressed={isGraphic}
        >
          {compact ? "Graphic" : "Graphic"}
        </button>
        <button
          type="button"
          onClick={() => setExperience("interactive")}
          className={cn(
            "rounded-full px-3 py-1.5 text-xs font-semibold tracking-wide transition",
            !isGraphic ? "bg-ink text-white" : "text-ink-muted hover:text-ink"
          )}
          aria-pressed={!isGraphic}
        >
          Interactive
        </button>
      </div>
      {!compact && (
        <button
          type="button"
          onClick={openSelector}
          className="hidden text-xs font-medium text-ink-soft underline-offset-2 hover:underline lg:inline"
        >
          Change
        </button>
      )}
      <span className="sr-only">Current experience: {experience}</span>
    </div>
  );
}
