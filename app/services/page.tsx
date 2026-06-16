import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Phone } from "lucide-react";
import { services, business, process as processData } from "@/lib/site-config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Roofing Services",
  description: `Explore the full range of roofing services from ${business.name} — repair, installation, replacement, storm restoration, inspections, and maintenance across the Rio Grande Valley, San Antonio, and Austin.`,
  alternates: { canonical: "/services" },
};

export default function ServicesIndexPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="on-dark relative isolate flex min-h-[60svh] items-end overflow-hidden rounded-b-[2.5rem] bg-black md:rounded-b-[3.5rem]">
          <Image
            src="/images/Metal-roof-after-hero-section.png"
            alt="South Texas roofing services"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/45" />
          <div className="container-x relative z-10 pb-16 pt-32">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/70">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/" className="hover:text-yellow">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-white">Services</li>
              </ol>
            </nav>
            <span className="eyebrow !text-yellow">Services</span>
            <h1
              className="mt-4 max-w-3xl font-medium leading-[1.05] text-white"
              style={{ fontSize: "var(--text-h1)" }}
            >
              Everything your roof needs, under one roof.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/80">
              From quick repairs to full replacements, our family-owned crews
              protect homes across the Rio Grande Valley, San Antonio, and Austin
              with honest, faith-driven work.
            </p>
          </div>
        </section>

        {/* All services */}
        <section className="section-y bg-bg">
          <div className="container-x">
            <div className="grid gap-6 lg:grid-cols-2">
              {services.map((service, i) => {
                const Icon = service.icon;
                return (
                  <Reveal
                    as="article"
                    index={i % 2}
                    key={service.slug}
                  >
                    <Link
                      href={`/services/${service.slug}`}
                      className="group grid h-full overflow-hidden rounded-[24px] border border-ink/8 bg-card sm:grid-cols-2"
                    >
                      <div className="relative min-h-[220px] overflow-hidden">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          sizes="(max-width: 640px) 100vw, 33vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                      </div>
                      <div className="flex flex-col p-7">
                        <Icon size={32} className="text-yellow" strokeWidth={1.8} />
                        <h2 className="mt-4 flex items-center justify-between text-2xl font-semibold tracking-tight text-ink">
                          {service.title}
                          <ArrowUpRight
                            size={22}
                            className="text-muted transition-colors group-hover:text-ink"
                          />
                        </h2>
                        <p className="mt-2 text-base leading-relaxed text-muted">
                          {service.copy}
                        </p>
                        <ul className="mt-5 flex flex-col gap-2">
                          {service.highlights.slice(0, 2).map((h) => (
                            <li
                              key={h}
                              className="flex items-start gap-2 text-sm text-ink"
                            >
                              <Check
                                size={16}
                                className="mt-0.5 shrink-0 text-yellow"
                                strokeWidth={2.4}
                              />
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process recap */}
        <section className="section-y bg-card">
          <div className="container-x">
            <Reveal>
              <span className="eyebrow">{processData.eyebrow}</span>
              <h2
                className="mt-5 max-w-xl font-medium leading-[1.05] text-ink"
                style={{ fontSize: "var(--text-section)" }}
              >
                {processData.heading}
              </h2>
            </Reveal>
            <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {processData.steps.map((step, i) => {
                const StepIcon = step.icon;
                return (
                  <Reveal as="li" index={i} key={step.title}>
                    <StepIcon size={32} className="text-yellow" strokeWidth={1.8} />
                    <span className="mt-4 block text-sm font-medium text-muted">
                      {step.step}
                    </span>
                    <h3 className="mt-1 text-lg font-semibold text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted">{step.copy}</p>
                  </Reveal>
                );
              })}
            </ol>
          </div>
        </section>

        {/* CTA */}
        <section className="on-dark bg-black">
          <div className="container-x py-20 text-center md:py-24">
            <Reveal>
              <h2
                className="mx-auto max-w-3xl font-medium leading-[1.08] text-white"
                style={{ fontSize: "var(--text-section)" }}
              >
                Not sure what you need?
              </h2>
            </Reveal>
            <Reveal index={1}>
              <p className="mx-auto mt-5 max-w-xl text-lg text-white/70">
                Get a free inspection and an honest recommendation — no pressure,
                ever.
              </p>
            </Reveal>
            <Reveal index={2}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link href="/#contact" className="btn-primary">
                  Get a Free Estimate
                  <ArrowRight size={18} />
                </Link>
                <a
                  href={business.phoneHref}
                  className="inline-flex items-center gap-2 text-lg font-medium text-white"
                >
                  <Phone size={18} className="text-yellow" />
                  {business.phone}
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
