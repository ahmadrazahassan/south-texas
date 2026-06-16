"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
  }),
};

type RevealProps = {
  children: ReactNode;
  /** Stagger index — multiplies the delay. */
  index?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article";
};

/**
 * Fade-up-on-scroll wrapper used across every section so the entrance rhythm
 * stays consistent. Respects prefers-reduced-motion via Framer Motion defaults.
 */
export default function Reveal({
  children,
  index = 0,
  className,
  as = "div",
}: RevealProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      variants={fadeUp}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </MotionTag>
  );
}
