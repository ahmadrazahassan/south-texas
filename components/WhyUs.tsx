"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useScroll,
  useMotionValueEvent,
  type Variants,
} from "framer-motion";
import { whyUs } from "@/lib/site-config";

const pad = (n: number) => String(n + 1).padStart(2, "0");

const EASE = [0.22, 1, 0.36, 1] as const;

/* Text block: cross-fades as a whole, children stagger in for a refined feel. */
const textGroup: Variants = {
  enter: { opacity: 0 },
  center: {
    opacity: 1,
    transition: { duration: 0.35, ease: EASE, when: "beforeChildren", staggerChildren: 0.08 },
  },
  exit: { opacity: 0, transition: { duration: 0.3, ease: EASE } },
};
const textChild: Variants = {
  enter: { opacity: 0, y: 26 },
  center: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
  exit: { opacity: 0, y: -16, transition: { duration: 0.3, ease: EASE } },
};

/* Photo: slow cross-fade with a gentle settle from a slight zoom. */
const photo: Variants = {
  enter: { opacity: 0, scale: 1.07 },
  center: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: EASE } },
  exit: { opacity: 0, scale: 1.03, transition: { duration: 0.5, ease: EASE } },
};

export default function WhyUs() {
  const trackRef = useRef<HTMLDivElement>(null);
  const total = whyUs.items.length;
  const [active, setActive] = useState(0);

  // Drive the active slide from scroll progress through the tall track.
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(total - 1, Math.max(0, Math.floor(v * total)));
    setActive((prev) => (prev === idx ? prev : idx));
  });

  // Jump to a slide when a dot is clicked.
  const goTo = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const scrollable = el.offsetHeight - window.innerHeight;
    const top = el.offsetTop + ((i + 0.5) / total) * scrollable;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const item = whyUs.items[active];
  const Icon = item.icon;

  return (
    <section id="why-us" className="bg-bg">
      {/* Tall track gives the pinned panel room to advance through each item. */}
      <div ref={trackRef} style={{ height: `${total * 95}vh` }} className="relative">
        {/* Pinned viewport */}
        <div className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden">
          <div className="container-x w-full">
            {/* Header */}
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="eyebrow">{whyUs.eyebrow}</span>
                <h2
                  className="mt-4 max-w-xl font-medium leading-[1.05] text-ink"
                  style={{ fontSize: "var(--text-section)" }}
                >
                  {whyUs.heading}
                </h2>
              </div>
              {/* Slide counter */}
              <div className="text-ink/80">
                <motion.span
                  key={active}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="inline-block text-3xl font-semibold text-ink"
                >
                  {pad(active)}
                </motion.span>
                <span className="text-lg text-muted"> / {pad(total - 1)}</span>
              </div>
            </div>

            {/* The single rectangular card: text column · gap · photo column */}
            <div className="mt-8 grid items-stretch gap-7 rounded-[14px] border border-ink/12 bg-white/60 p-7 shadow-[0_8px_30px_-18px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:gap-10 sm:p-10 lg:grid-cols-2">
              {/* Text column */}
              <div className="relative flex min-h-[300px] items-center lg:min-h-[480px]">
                <AnimatePresence initial={false}>
                  <motion.div
                    key={active}
                    className="absolute inset-y-0 left-0 right-0 flex flex-col justify-center"
                    variants={textGroup}
                    initial="enter"
                    animate="center"
                    exit="exit"
                  >
                    <motion.span variants={textChild} className="inline-flex">
                      <Icon size={44} className="text-yellow" strokeWidth={1.8} />
                    </motion.span>
                    <motion.h3
                      variants={textChild}
                      className="mt-6 text-3xl font-semibold tracking-tight text-ink sm:text-[2.5rem] sm:leading-[1.1]"
                    >
                      {item.title}
                    </motion.h3>
                    <motion.p
                      variants={textChild}
                      className="mt-5 max-w-md text-lg leading-relaxed text-muted"
                    >
                      {item.copy}
                    </motion.p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Photo column */}
              <div className="relative min-h-[300px] overflow-hidden rounded-[12px] lg:min-h-[480px]">
                <AnimatePresence initial={false}>
                  <motion.div
                    key={active}
                    className="absolute inset-0"
                    variants={photo}
                    initial="enter"
                    animate="center"
                    exit="exit"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                      priority={active === 0}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Progress dots + bar */}
            <div className="mt-7 flex items-center gap-5">
              <div className="flex gap-2.5" role="tablist" aria-label="Why us reasons">
                {whyUs.items.map((it, i) => (
                  <button
                    key={it.title}
                    role="tab"
                    aria-selected={i === active}
                    aria-label={it.title}
                    onClick={() => goTo(i)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      i === active ? "w-9 bg-ink" : "w-2.5 bg-ink/25 hover:bg-ink/45"
                    }`}
                  />
                ))}
              </div>
              <div className="relative h-px flex-1 bg-ink/10">
                <motion.div
                  className="absolute inset-y-0 left-0 w-full origin-left bg-yellow"
                  style={{ scaleX: scrollYProgress }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
