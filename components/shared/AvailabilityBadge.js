import { site } from "../../data/site";
import { cn } from "../../lib/cn";

export default function AvailabilityBadge({ className, compact = false }) {
  if (!site.availability.open) return null;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-3 py-1.5 text-xs font-medium tracking-wide text-ink",
        className
      )}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
      </span>
      {compact ? site.availability.shortLabel : site.availability.label}
    </span>
  );
}
