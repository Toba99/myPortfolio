import { cn } from "../../lib/cn";

export default function Tag({ children, className, tone = "light" }) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.08em]",
        tone === "light" && "bg-black/5 text-ink",
        tone === "dark" && "bg-white/15 text-white",
        tone === "solid" && "bg-ink text-white",
        className
      )}
    >
      {children}
    </span>
  );
}
