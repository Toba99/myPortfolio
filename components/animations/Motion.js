import { motion, useReducedMotion } from "framer-motion";

/**
 * Motion helpers that never leave content stuck invisible.
 * Production was hanging Framer enter animations at opacity 0, which made
 * personal details look missing even though they were in the DOM.
 */
export function FadeIn({
  children,
  className,
  delay = 0,
  y = 16,
  as: Component = motion.div,
  ...props
}) {
  const reduce = useReducedMotion();

  return (
    <Component
      className={className}
      initial={false}
      animate={reduce ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay }}
      style={{ opacity: 1 }}
      {...props}
    >
      {children}
    </Component>
  );
}

export function Stagger({ children, className, delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={false}
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: 0.06, delayChildren: delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }) {
  return (
    <motion.div
      className={className}
      initial={false}
      variants={{
        hidden: { opacity: 1, y: 0 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      style={{ opacity: 1 }}
    >
      {children}
    </motion.div>
  );
}

export function PageTransition({ children, className }) {
  return (
    <motion.div className={className} initial={false} style={{ opacity: 1 }}>
      {children}
    </motion.div>
  );
}
