"use client";

import { useRef, type CSSProperties, type ReactNode } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";

type Tag = "h1" | "h2" | "h3" | "p";

type Props = {
  /** The full sentence to reveal, word by word. */
  text: string;
  /** Classes for the wrapper element (typography, sizing, alignment). */
  className?: string;
  /** Inline styles for the wrapper (e.g. fluid font-size tokens). */
  style?: CSSProperties;
  /** Tailwind colour for the resting (un-revealed) words. */
  baseClassName?: string;
  /** Tailwind colour for the revealed words. */
  revealClassName?: string;
  /** Semantic element to render. */
  as?: Tag;
  /**
   * Scroll window over which the whole sentence reveals, expressed as
   * Framer Motion `useScroll` offsets. Defaults feel natural for a heading
   * entering from the bottom of the viewport.
   */
  offset?: [string, string];
};

/**
 * Scroll-linked text reveal: each word transitions from a muted resting
 * colour to its full colour as the element scrolls through the viewport,
 * sweeping left-to-right in reading order.
 *
 * The readable text lives in a base layer; an absolutely-positioned colour
 * layer fades in on top, so the markup stays accessible and copy-pasteable.
 */
export default function ScrollRevealText({
  text,
  className,
  style,
  baseClassName = "text-ink/15",
  revealClassName = "text-ink",
  as = "p",
  offset = ["start 0.85", "end 0.5"],
}: Props) {
  const containerRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // `as` keeps the typed offset compatible with Framer's looser type.
    offset: offset as never,
  });

  const words = text.split(" ");
  const Tag = motion[as];

  // With reduced motion we skip the scroll choreography and show the final,
  // fully-revealed state so the content is never stuck looking greyed-out.
  if (prefersReducedMotion) {
    return (
      <Tag className={`${className ?? ""} ${revealClassName}`} style={style}>
        {text}
      </Tag>
    );
  }

  return (
    <Tag ref={containerRef as never} className={className} style={style}>
      {words.map((word, i) => (
        <Word
          key={`${word}-${i}`}
          progress={scrollYProgress}
          // Each word owns a slice of the scroll progress, so they light up
          // in sequence rather than all at once.
          range={[i / words.length, (i + 1) / words.length]}
          baseClassName={baseClassName}
          revealClassName={revealClassName}
        >
          {word}
        </Word>
      ))}
    </Tag>
  );
}

function Word({
  children,
  progress,
  range,
  baseClassName,
  revealClassName,
}: {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
  baseClassName: string;
  revealClassName: string;
}) {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="relative mr-[0.22em] inline-block">
      {/* Resting layer — readable text, muted colour */}
      <span className={baseClassName}>{children}</span>
      {/* Reveal layer — full colour, fades in over the resting word */}
      <motion.span
        aria-hidden="true"
        style={{ opacity }}
        className={`absolute left-0 top-0 ${revealClassName}`}
      >
        {children}
      </motion.span>
    </span>
  );
}
