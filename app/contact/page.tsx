import type { Metadata } from "next";
import Link from "next/link";
import { business, contact } from "@/lib/site-config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ContactCard from "@/components/ContactCard";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${business.name} for a free roofing estimate. Call ${business.phone} or send a message — serving the Rio Grande Valley, San Antonio, and Austin.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="on-dark relative isolate overflow-hidden rounded-b-[2.5rem] bg-black md:rounded-b-[3.5rem]">
          <div className="container-x relative z-10 pb-16 pt-32">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/70">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/" className="hover:text-yellow">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-white">Contact</li>
              </ol>
            </nav>
            <span className="eyebrow !text-yellow">{contact.eyebrow}</span>
            <h1
              className="mt-4 max-w-3xl font-medium leading-[1.05] text-white"
              style={{ fontSize: "var(--text-h1)" }}
            >
              {contact.heading}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/80">{contact.subtext}</p>
          </div>
        </section>

        {/* Contact card */}
        <section className="section-y bg-bg">
          <div className="container-x">
            <Reveal>
              <ContactCard />
            </Reveal>
          </div>
        </section>

        {/* Map */}
        <section className="bg-card pb-20">
          <div className="container-x">
            <div className="overflow-hidden rounded-[var(--radius-card)] border border-ink/8">
              <iframe
                title={`Map to ${business.name}`}
                src={contact.mapEmbedSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[360px] w-full md:h-[440px]"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
