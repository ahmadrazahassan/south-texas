"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services, servicesMeta } from "@/lib/site-config";
import Reveal from "./Reveal";

const pad = (n: number) => String(n + 1).padStart(2, "0");
const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

export default function ServicesSlider() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="on-dark bg-bg py-8 sm:py-12">
      {/* Inset, gently-rounded dark panel floating on the off-white page */}
      <div className="mx-auto max-w-[1480px] px-3 sm:px-5">
        <div className="overflow-hidden rounded-[22px] bg-black px-6 py-16 sm:px-12 sm:py-20 lg:px-16">
          {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal>
              <span className="eyebrow !text-yellow">{servicesMeta.eyebrow}</span>
            </Reveal>
            <Reveal index={1}>
              <h2
                className="mt-4 max-w-2xl font-medium leading-[1.05] text-white"
                style={{ fontSize: "var(--text-section)" }}
              >
                {servicesMeta.heading}
              </h2>
            </Reveal>
          </div>
          <Reveal index={2}>
            <p className="max-w-sm text-lg text-white/65">{servicesMeta.subtext}</p>
          </Reveal>
        </div>

        {/* Expanding panels */}
        <Reveal index={1}>
          <ul
            className="mt-12 flex h-[560px] flex-col gap-3 lg:h-[540px] lg:flex-row"
            role="tablist"
            aria-label="Our roofing services"
          >
            {services.map((service, i) => {
              const isActive = i === active;
              const Icon = service.icon;
              return (
                <li
                  key={service.title}
                  className="min-h-0 basis-0 overflow-hidden rounded-[18px]"
                  style={{
                    flexGrow: isActive ? 6 : 1,
                    transition: `flex-grow 0.7s ${EASE}`,
                  }}
                >
                  <div className="group relative h-full w-full">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                      priority={i === 0}
                    />
                    {/* Dark wash — stronger when collapsed for legibility */}
                    <div
                      className="absolute inset-0 transition-opacity duration-700"
                      style={{
                        background: isActive
                          ? "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.25) 55%, rgba(0,0,0,0.15) 100%)"
                          : "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 100%)",
                      }}
                    />

                    {/* Activation layer — hover / focus / click expands the panel */}
                    <button
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-label={`${service.title} — expand`}
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      onClick={() => setActive(i)}
                      className="absolute inset-0 z-10 h-full w-full cursor-pointer outline-none"
                    />

                    {/* Collapsed label (number + icon + vertical title) */}
                    <div
                      className={`pointer-events-none absolute inset-0 flex flex-col justify-between p-5 transition-opacity duration-500 ${
                        isActive ? "opacity-0" : "opacity-100"
                      }`}
                    >
                      <span className="text-sm font-medium text-white/60">
                        {pad(i)}
                      </span>
                      <div className="flex items-center gap-3 lg:flex-col lg:items-start lg:gap-4">
                        <Icon size={24} className="shrink-0 text-yellow" />
                        <span className="text-lg font-semibold text-white lg:[writing-mode:vertical-rl] lg:rotate-180 lg:whitespace-nowrap">
                          {service.title}
                        </span>
                      </div>
                    </div>

                    {/* Active content */}
                    <div
                      className={`pointer-events-none absolute inset-0 z-20 flex flex-col justify-end p-7 transition-opacity duration-500 sm:p-9 ${
                        isActive ? "opacity-100 delay-200" : "opacity-0"
                      }`}
                    >
                      <span className="text-sm font-medium text-yellow">
                        {pad(i)} / {pad(services.length - 1)}
                      </span>
                      <div className="mt-3 flex items-center gap-3">
                        <Icon size={30} className="text-yellow" />
                        <h3 className="text-2xl font-semibold text-white sm:text-3xl">
                          {service.title}
                        </h3>
                      </div>
                      <p className="mt-3 max-w-md text-base text-white/85 sm:text-lg">
                        {service.copy}
                      </p>
                      <Link
                        href={`/services/${service.slug}`}
                        tabIndex={isActive ? 0 : -1}
                        className={`btn-primary mt-6 w-fit whitespace-nowrap ${
                          isActive ? "pointer-events-auto" : ""
                        }`}
                      >
                        Learn More
                        <ArrowUpRight size={18} />
                      </Link>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>
        </div>
      </div>
    </section>
  );
}
