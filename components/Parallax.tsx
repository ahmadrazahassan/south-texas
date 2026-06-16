"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type ParallaxProps = {
  children: ReactNode;
  /** Vertical travel in px across the scroll range. Negative moves up. */
  amount?: number;
  className?: string;
};

/**
 * Wraps content and gives it a gentle vertical parallax as it passes through
 * the viewport — the kind of depth modern marketing sites use. Cheap: a single
 * transform driven by scroll progress, no layout thrash.
 */
export default function Parallax({
  children,
  amount = 40,
  className,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [amount, -amount]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
