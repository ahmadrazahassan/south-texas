"use client";

import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { testimonials, business } from "@/lib/site-config";
import Reveal from "./Reveal";

type Review = (typeof testimonials.items)[number];

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="flex w-full flex-col rounded-[20px] border border-ink/8 bg-white p-7 shadow-[0_20px_50px_-35px_rgba(0,0,0,0.4)]">
      <div className="flex items-center justify-between">
        <div className="flex" aria-label="5 out of 5 stars">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={16} className="fill-yellow text-yellow" />
          ))}
        </div>
        <Quote size={28} className="text-yellow/30" />
      </div>
      <p className="mt-4 flex-1 text-[17px] leading-relaxed text-ink">
        {review.quote}
      </p>
      <div className="mt-6 flex items-center gap-3">
        <span className="relative h-11 w-11 overflow-hidden rounded-full ring-2 ring-bg">
          <Image
            src={review.avatar}
            alt={review.name}
            fill
            sizes="44px"
            className="object-cover"
          />
        </span>
        <div>
          <p className="text-[15px] font-semibold text-ink">{review.name}</p>
          <p className="text-sm text-muted">{review.role}</p>
        </div>
      </div>
    </article>
  );
}

function MarqueeColumn({
  items,
  direction = "up",
  duration = 40,
  className = "",
}: {
  items: readonly Review[];
  direction?: "up" | "down";
  duration?: number;
  className?: string;
}) {
  const doubled = [...items, ...items];

  return (
    <div
      className={`marquee-col marquee-mask-y w-[330px] max-w-[88vw] overflow-hidden ${className}`}
    >
      <div
        className={`marquee-col__track ${
          direction === "down" ? "marquee-col__track--reverse" : ""
        }`}
        style={{ animationDuration: `${duration}s` }}
      >
        {doubled.map((review, i) => (
          <ReviewCard key={`${review.name}-${i}`} review={review} />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  const { items } = testimonials;
  // Three columns, each a different slice/order for visual variety.
  const colA = items;
  const colB = [...items].reverse();
  const colC = [...items.slice(2), ...items.slice(0, 2)];

  return (
    <section id="reviews" className="section-y overflow-hidden bg-bg">
      <div className="container-x grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* Heading */}
        <div className="text-center lg:text-left">
          <Reveal>
            <span className="pill inline-block text-sm text-ink">
              {testimonials.eyebrow}
            </span>
          </Reveal>
          <Reveal index={1}>
            <h2
              className="mt-5 font-medium leading-[1.08] text-ink"
              style={{ fontSize: "var(--text-section)" }}
            >
              {testimonials.heading}
            </h2>
          </Reveal>
          <Reveal index={2}>
            <div className="mt-6 flex items-center justify-center gap-2 text-muted lg:justify-start">
              <div className="flex" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow text-yellow" />
                ))}
              </div>
              <span className="text-sm font-medium text-ink">
                {business.rating.toFixed(1)} · {business.reviewCount} Google reviews
              </span>
            </div>
          </Reveal>
        </div>

        {/* Vertical marquee columns */}
        <Reveal
          index={1}
          className="flex h-[520px] justify-center gap-5 lg:h-[600px] lg:justify-end"
        >
          <MarqueeColumn items={colA} direction="up" duration={32} />
          <MarqueeColumn
            items={colB}
            direction="down"
            duration={40}
            className="hidden sm:block"
          />
          <MarqueeColumn
            items={colC}
            direction="up"
            duration={36}
            className="hidden xl:block"
          />
        </Reveal>
      </div>
    </section>
  );
}
