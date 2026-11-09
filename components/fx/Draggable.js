import { useRef, useState } from "react";
import { useReducedMotion, motion } from "framer-motion";
import { cn } from "../../lib/cn";

const DRAG_THRESHOLD = 6;

/**
 * Free-drag wrapper for the Interactive experience.
 * Real drags never fire nested clicks/links  -  a light tap still does.
 */
export default function Draggable({
  children,
  className,
  style,
  dragConstraints,
  dragElastic = 0.18,
  dragMomentum = false,
  onDragStart,
  onDragEnd,
}) {
  const reduce = useReducedMotion();
  const moved = useRef(false);
  const blockClick = useRef(false);
  const [dragging, setDragging] = useState(false);

  const markIfDragged = (_event, info) => {
    if (Math.hypot(info.offset.x, info.offset.y) >= DRAG_THRESHOLD) {
      moved.current = true;
      blockClick.current = true;
    }
  };

  const suppressIfDragged = (event) => {
    if (!blockClick.current) return;
    event.preventDefault();
    event.stopPropagation();
    if (typeof event.stopImmediatePropagation === "function") {
      event.stopImmediatePropagation();
    }
  };

  return (
    <motion.div
      drag={!reduce}
      dragConstraints={dragConstraints}
      dragElastic={dragElastic}
      dragMomentum={dragMomentum}
      dragPropagation={false}
      // Kill native HTML DnD (links/images) so Framer drag can take over.
      draggable={false}
      onDragStart={(event, info) => {
        moved.current = false;
        blockClick.current = false;
        setDragging(true);
        onDragStart?.(event, info);
      }}
      onDrag={markIfDragged}
      onDragEnd={(event, info) => {
        markIfDragged(event, info);
        setDragging(false);
        if (moved.current) {
          blockClick.current = true;
          // Swallow the click browsers synthesize right after pointerup.
          window.setTimeout(() => {
            blockClick.current = false;
            moved.current = false;
          }, 120);
        }
        onDragEnd?.(event, info);
      }}
      onPointerDownCapture={(event) => {
        const target = event.target;
        if (target instanceof HTMLElement) {
          const link = target.closest("a");
          if (link) link.setAttribute("draggable", "false");
        }
      }}
      onClickCapture={suppressIfDragged}
      onAuxClickCapture={suppressIfDragged}
      whileDrag={
        reduce
          ? undefined
          : { scale: 1.05, zIndex: 50, cursor: "grabbing", boxShadow: "0 24px 50px rgba(12,12,12,0.16)" }
      }
      whileHover={reduce || dragging ? undefined : { scale: 1.02 }}
      transition={{ type: "spring", stiffness: 420, damping: 28 }}
      className={cn(
        "touch-none select-none will-change-transform [&_a]:[-webkit-user-drag:none]",
        !reduce && "cursor-grab active:cursor-grabbing",
        className
      )}
      style={style}
    >
      <div className={cn(dragging && "pointer-events-none")}>{children}</div>
    </motion.div>
  );
}
