import Image from "next/image";
import { projects, processHomeIcon as HomeIcon, images } from "@/lib/site-config";
import Reveal from "./Reveal";
import Parallax from "./Parallax";
import CountUp from "./CountUp";

/** Shared classes for the photo tiles. */
const photoCard =
  "glow-border glow-border--metal relative aspect-[4/3] overflow-hidden rounded-[var(--radius-card)] md:aspect-auto md:h-full md:min-h-[320px]";

export default function Projects() {
  return (
    <section id="projects" className="section-y relative overflow-hidden bg-bg">
      {/* Faint giant ghost lettering behind the grid */}
      <span className="ghost-word absolute -top-6 left-1/2 -translate-x-1/2 select-none">
        PROJECTS
      </span>

      <div className="container-x relative">
        <Reveal>
          <span className="eyebrow">{projects.eyebrow}</span>
        </Reveal>
        <Reveal index={1}>
          <h2
            className="mt-5 max-w-xl font-medium leading-[1.05] text-ink"
            style={{ fontSize: "var(--text-section)" }}
          >
            {projects.heading}
          </h2>
        </Reveal>

        {/* Bento grid */}
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {/* Top-left: project photo (parallax) */}
          <Reveal className={photoCard}>
            <Parallax amount={26} className="absolute inset-x-0 -inset-y-[12%]">
              <Image
                src={images.projects.one}
                alt="Completed roofing project"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </Parallax>
          </Reveal>

          {/* Top-right: yellow stat card with count-up */}
          <Reveal
            index={1}
            className="glow-border glow-border--metal flex flex-col justify-between rounded-[var(--radius-card)] bg-yellow p-8 md:min-h-[320px]"
          >
            <span
              className="font-semibold leading-none text-ink"
              style={{ fontSize: "clamp(56px, 7vw, 88px)" }}
            >
              <CountUp target={projects.stat.target} suffix={projects.stat.suffix} />
            </span>
            <p className="mt-6 max-w-xs text-lg text-ink/80">
              {projects.stat.copy}
            </p>
          </Reveal>

          {/* Bottom-left: feature card on the 3rd project photo */}
          <Reveal
            index={1}
            className="glow-border glow-border--metal relative flex flex-col justify-end overflow-hidden rounded-[var(--radius-card)] p-8 md:min-h-[320px]"
          >
            <Image
              src={images.projects.three}
              alt="Roofed home protected against the elements"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20" />
            <div className="relative">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-yellow">
                <HomeIcon size={24} className="text-ink" />
              </span>
              <h3 className="mt-6 text-2xl font-semibold text-white">
                {projects.feature.title}
              </h3>
              <p className="mt-3 text-lg text-white/85">{projects.feature.copy}</p>
            </div>
          </Reveal>

          {/* Bottom-right: project photo (parallax) */}
          <Reveal className={photoCard}>
            <Parallax amount={26} className="absolute inset-x-0 -inset-y-[12%]">
              <Image
                src={images.projects.two}
                alt="Roof installation in progress"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </Parallax>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
