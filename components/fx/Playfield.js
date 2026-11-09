import { useRef } from "react";
import { cn } from "../../lib/cn";

/**
 * Constrains child Draggable elements. Use absolute scatter children for an
 * organic start layout; drag still moves them freely inside this box.
 */
export default function Playfield({
  children,
  className,
  style,
  hint = "Drag things around",
  showHint = true,
}) {
  const constraintsRef = useRef(null);

  return (
    <div ref={constraintsRef} className={cn("relative", className)} style={style}>
      {typeof children === "function" ? children(constraintsRef) : children}
      {showHint && (
        <p className="pointer-events-none absolute bottom-3 right-4 z-20 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-soft">
          {hint}
        </p>
      )}
    </div>
  );
}
