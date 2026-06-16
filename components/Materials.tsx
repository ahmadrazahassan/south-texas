import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { materials } from "@/lib/site-config";
import Reveal from "./Reveal";

export default function Materials() {
  return (
    <section id="materials" className="section-y bg-bg">
      <div className="container-x">
        {/* Header row */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <Reveal>
              <span className="eyebrow">{materials.eyebrow}</span>
            </Reveal>
            <Reveal index={1}>
              <h2
                className="mt-5 font-medium leading-[1.05] text-ink"
                style={{ fontSize: "var(--text-section)" }}
              >
                {materials.heading}
              </h2>
            </Reveal>
          </div>
          <Reveal index={2}>
            <p className="max-w-sm text-lg text-muted">{materials.subtext}</p>
          </Reveal>
        </div>

        {/* Offset image-card grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {materials.items.map((m, i) => {
            const Icon = m.icon;
            return (
              <Reveal
                key={m.title}
                index={i}
                as="article"
                className={i === 1 ? "lg:mt-12" : i === 2 ? "lg:mt-6" : ""}
              >
                <div className="group relative h-full overflow-hidden rounded-[24px] border border-ink/8 bg-card">
                  {/* Image */}
                  <div className="relative aspect-[5/6] overflow-hidden">
                    <Image
                      src={m.image}
                      alt={m.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                    {/* Tag chip */}
                    <span className="absolute left-4 top-4 rounded-full bg-yellow px-3.5 py-1.5 text-xs font-semibold text-ink">
                      {m.tag}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <Icon size={34} className="text-yellow" strokeWidth={1.8} />
                    <h3 className="mt-4 flex items-center justify-between text-2xl font-semibold tracking-tight text-ink">
                      {m.title}
                      <ArrowUpRight
                        size={22}
                        className="text-muted transition-colors group-hover:text-ink"
                      />
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-muted">
                      {m.copy}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* CTA */}
        <Reveal index={1}>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Link href="/#contact" className="btn-primary">
              Consult Now
              <ArrowUpRight size={18} />
            </Link>
            <p className="text-base text-muted">
              Not sure which is right? We&apos;ll help you choose.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
