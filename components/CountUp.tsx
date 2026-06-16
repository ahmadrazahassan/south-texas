"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

type CountUpProps = {
  /** Final value to count to. */
  target: number;
  /** Appended after the number, e.g. "+". */
  suffix?: string;
  /** Animation length in ms. */
  duration?: number;
  className?: string;
};

/**
 * Counts up from 0 → target once the element scrolls into view. Uses a
 * requestAnimationFrame loop with an eased curve so the number decelerates
 * into place. Respects prefers-reduced-motion by snapping to the final value.
 */
export default function CountUp({
  target,
  suffix = "",
  duration = 1800,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setValue(target);
      return;
    }

    let raf = 0;
    let start: number | null = null;
    // easeOutExpo — fast start, gentle landing.
    const ease = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

    const tick = (now: number) => {
      if (start === null) start = now;
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.round(ease(progress) * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);

  return (
    <span ref={ref} className={className}>
      {value.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}
