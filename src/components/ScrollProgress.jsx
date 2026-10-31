import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const prefersReducedMotion = useReducedMotion();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX: progress }}
      aria-hidden="true"
    />
  );
}
