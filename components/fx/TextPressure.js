import { useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "../../lib/cn";

/**
 * Lightweight pressure text  -  letters scale toward the cursor.
 * Caches character centers so pointer moves don't thrash layout.
 */
export default function TextPressure({
  text,
  className,
  as: Tag = "h2",
  maxScale = 1.1,
}) {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const centersRef = useRef([]);
  const words = text.split(" ");
  const chars = Array.from(text.replace(/ /g, ""));
  const [scales, setScales] = useState(() => chars.map(() => 1));

  const cacheCenters = () => {
    if (!ref.current) return;
    const nodes = ref.current.querySelectorAll("[data-char]");
    centersRef.current = Array.from(nodes).map((node) => {
      const rect = node.getBoundingClientRect();
      return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
    });
  };

  const onMove = (event) => {
    if (reduce || !centersRef.current.length) return;
    const next = centersRef.current.map((center) => {
      const dx = event.clientX - center.x;
      const dy = event.clientY - center.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const force = Math.max(0, 1 - dist / 140);
      return 1 + force * (maxScale - 1);
    });
    setScales(next);
  };

  const reset = () => setScales(chars.map(() => 1));

  return (
    <Tag
      ref={ref}
      onPointerEnter={cacheCenters}
      onPointerMove={onMove}
      onPointerLeave={reset}
      data-cursor="hover"
      className={cn("inline-block", className)}
      aria-label={text}
    >
      {words.map((word, wordIndex) => {
        // Words stay whole (no mid-word line breaks); only the gaps can wrap.
        const offset = words.slice(0, wordIndex).join("").length;
        return (
          <span key={`${word}-${wordIndex}`}>
            <span className="inline-block whitespace-nowrap">
              {Array.from(word).map((char, charIndex) => (
                <span
                  key={`${char}-${charIndex}`}
                  data-char
                  className="inline-block origin-bottom"
                  style={{
                    transform: `scale(${scales[offset + charIndex] || 1})`,
                    transition: "transform 80ms linear",
                  }}
                >
                  {char}
                </span>
              ))}
            </span>
            {wordIndex < words.length - 1 ? " " : null}
          </span>
        );
      })}
    </Tag>
  );
}
