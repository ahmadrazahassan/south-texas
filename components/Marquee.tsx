"use client";

import { motion } from "framer-motion";

type MarqueeProps = {
  word: string;
  /** "solid" fills with the given color, "outline" uses a text stroke. */
  variant?: "solid" | "outline";
  /** Tailwind/text color class applied for the solid variant. */
  colorClass?: string;
  /** Seconds for one full loop. */
  duration?: number;
  className?: string;
};

/**
 * Giant horizontally-scrolling display word used behind the hero and along the
 * footer edge. Two copies of the row are chained so the loop is seamless.
 */
export default function Marquee({
  word,
  variant = "solid",
  colorClass = "text-ink",
  duration = 26,
  className = "",
}: MarqueeProps) {
  const items = Array.from({ length: 4 }, (_, i) => `${word}`);

  return (
    <div className={`relative ${className}`} aria-hidden="true">
      <div className="marquee-mask overflow-hidden">
        <motion.div
          className="marquee-track flex w-max whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration, ease: "linear", repeat: Infinity }}
        >
          {[...items, ...items].map((w, i) => (
            <span
              key={i}
              className={`px-6 font-bold uppercase leading-[0.8] tracking-tight ${
                variant === "outline" ? "marquee-outline" : colorClass
              }`}
              style={{ fontSize: "var(--text-display)" }}
            >
              {w}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Soft blur fade on both ends so the word melts cutely into the scene */}
      <div className="marquee-edge marquee-edge--left" />
      <div className="marquee-edge marquee-edge--right" />
    </div>
  );
}
