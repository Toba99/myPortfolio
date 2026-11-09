import { motion, useReducedMotion } from "framer-motion";

export function FadeIn({
  children,
  className,
  delay = 0,
  y = 24,
  as: Component = motion.div,
  once = true,
  ...props
}) {
  const reduce = useReducedMotion();

  // Use mount animation (animate), not whileInView. On this site content often
  // mounts after the experience choice, and whileInView was leaving whole
  // sections stuck at opacity 0 so personal details looked "missing".
  return (
    <Component
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
      {...props}
    >
      {children}
    </Component>
  );
}

export function Stagger({ children, className, delay = 0 }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : "hidden"}
      animate={reduce ? undefined : "show"}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: 0.08, delayChildren: delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className, y = 20 }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={
        reduce
          ? undefined
          : {
              hidden: { opacity: 0, y },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
              },
            }
      }
    >
      {children}
    </motion.div>
  );
}

export function PageTransition({ children, className }) {
  return (
    <motion.div
      className={className}
      initial={false}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
