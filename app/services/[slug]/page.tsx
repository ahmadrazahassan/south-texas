import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Phone } from "lucide-react";
import { services, business, process as processData } from "@/lib/site-config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

type Params = { slug: string };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.copy,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} | ${business.name}`,
      description: service.copy,
      images: [service.image],
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const Icon = service.icon;
  const others = services.filter((s) => s.slug !== slug);

  return (
    <>
      <Header />
      <main>
        {/* Hero band */}
        <section className="on-dark relative isolate flex min-h-[78svh] items-end overflow-hidden rounded-b-[2.5rem] bg-black md:rounded-b-[3.5rem]">
          <Image
            src={service.image}
            alt={service.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />

          <div className="container-x relative z-10 pb-16 pt-32">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/70">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/" className="hover:text-yellow">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/services" className="hover:text-yellow">
                    Services
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-white">{service.title}</li>
              </ol>
            </nav>

            <Icon size={48} className="text-yellow" strokeWidth={1.8} />
            <h1
              className="mt-5 max-w-3xl font-medium leading-[1.05] text-white"
              style={{ fontSize: "var(--text-h1)" }}
            >
              {service.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/80">{service.intro}</p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
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
          </div>
        </section>

        {/* What's included */}
        <section className="section-y bg-bg">
          <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <Reveal>
              <span className="eyebrow">What&apos;s included</span>
              <h2
                className="mt-5 font-medium leading-[1.08] text-ink"
                style={{ fontSize: "var(--text-section)" }}
              >
                Done right, the first time.
              </h2>
              <p className="mt-5 text-lg text-muted">
                Every {service.title.toLowerCase()} we take on is handled with the
                same honest, faith-driven care we&apos;d give our own homes.
              </p>
            </Reveal>

            <Reveal index={1}>
              <ul className="grid gap-4 sm:grid-cols-2">
                {service.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-3 rounded-[16px] border border-ink/8 bg-card p-5"
                  >
                    <Check size={20} className="mt-0.5 shrink-0 text-yellow" strokeWidth={2.4} />
                    <span className="text-[15px] leading-relaxed text-ink">{h}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* How it works (reuses the global process) */}
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
                    <h3 className="mt-1 text-lg font-semibold text-ink">{step.title}</h3>
                    <p className="mt-2 text-sm text-muted">{step.copy}</p>
                  </Reveal>
                );
              })}
            </ol>
          </div>
        </section>

        {/* Explore other services */}
        <section className="section-y bg-bg">
          <div className="container-x">
            <Reveal>
              <h2
                className="font-medium leading-[1.05] text-ink"
                style={{ fontSize: "var(--text-section)" }}
              >
                Explore other services
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((s, i) => {
                const OtherIcon = s.icon;
                return (
                  <Reveal as="article" index={i} key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="group relative block overflow-hidden rounded-[20px] border border-ink/8 bg-card p-6 transition-transform hover:-translate-y-1"
                    >
                      <OtherIcon size={30} className="text-yellow" strokeWidth={1.8} />
                      <h3 className="mt-5 flex items-center justify-between text-xl font-semibold text-ink">
                        {s.title}
                        <ArrowUpRight
                          size={20}
                          className="text-muted transition-colors group-hover:text-ink"
                        />
                      </h3>
                      <p className="mt-2 text-base text-muted">{s.copy}</p>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA band */}
        <section className="on-dark bg-black">
          <div className="container-x py-20 text-center md:py-24">
            <Reveal>
              <h2
                className="mx-auto max-w-3xl font-medium leading-[1.08] text-white"
                style={{ fontSize: "var(--text-section)" }}
              >
                Ready to get started?
              </h2>
            </Reveal>
            <Reveal index={1}>
              <p className="mx-auto mt-5 max-w-xl text-lg text-white/70">
                Get a free inspection and a clear, no-pressure estimate within 24
                hours.
              </p>
            </Reveal>
            <Reveal index={2}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link href="/#contact" className="btn-primary">
                  Get a Free Estimate
                  <ArrowRight size={18} />
                </Link>
                <a href={business.phoneHref} className="btn-outline">
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
