import { useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "../../lib/cn";

export default function Magnet({ children, className, strength = 28 }) {
  const reduce = useReducedMotion();
  const ref = useRef(null);

  const onMove = (event) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = event.clientX - rect.left - rect.width / 2;
    const relY = event.clientY - rect.top - rect.height / 2;
    const x = (relX / (rect.width / 2)) * strength;
    const y = (relY / (rect.height / 2)) * strength;
    ref.current.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0)`;
  };

  const reset = () => {
    if (!ref.current) return;
    ref.current.style.transform = "translate3d(0, 0, 0)";
  };

  return (
    <div
      ref={ref}
      data-magnetic
      onPointerMove={onMove}
      onPointerLeave={reset}
      className={cn(
        "inline-flex will-change-transform transition-transform duration-200 ease-out",
        className
      )}
    >
      {children}
    </div>
  );
}
