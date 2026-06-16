import Image from "next/image";
import { Star } from "lucide-react";
import { about, business, images } from "@/lib/site-config";
import Reveal from "./Reveal";
import ScrollRevealText from "./ScrollRevealText";

export default function About() {
  return (
    <section id="about" className="section-y bg-bg">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left: heading + rating + subtext */}
        <div>
          <Reveal>
            <span className="eyebrow">{about.eyebrow}</span>
          </Reveal>
          <ScrollRevealText
            as="h2"
            text={about.heading}
            className="mt-5 font-medium leading-[1.08]"
            baseClassName="text-ink/15"
            revealClassName="text-ink"
            style={{ fontSize: "var(--text-section)" }}
          />

          <Reveal index={2}>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              {/* Rating block */}
              <div className="flex items-center gap-3">
                <div className="flex" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="fill-yellow text-yellow"
                    />
                  ))}
                </div>
                <span className="text-sm font-medium text-ink">
                  {business.rating.toFixed(1)} ({business.reviewCount} Reviews)
                </span>
              </div>

              {/* Stacked avatars */}
              <div className="flex -space-x-3">
                {images.avatars.map((src, i) => (
                  <span
                    key={src}
                    className="relative inline-block h-10 w-10 overflow-hidden rounded-full ring-2 ring-bg"
                  >
                    <Image
                      src={src}
                      alt={`Happy customer ${i + 1}`}
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal index={3}>
            <p className="mt-6 max-w-md text-lg text-muted">{about.subtext}</p>
          </Reveal>
        </div>

        {/* Right: two overlapping rounded photos */}
        <Reveal index={1} className="relative">
          <div className="relative ml-auto aspect-[4/5] w-[78%] overflow-hidden rounded-[var(--radius-media)]">
            <Image
              src={images.about.primary}
              alt="Newly installed metal roof"
              fill
              sizes="(max-width: 1024px) 80vw, 40vw"
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-0 aspect-[4/3] w-[52%] overflow-hidden rounded-[var(--radius-media)] ring-8 ring-bg">
            <Image
              src={images.about.secondary}
              alt="Roofing technician measuring a roof"
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
