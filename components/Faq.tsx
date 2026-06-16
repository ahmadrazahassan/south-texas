"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Minus, ArrowRight } from "lucide-react";
import { faq, images } from "@/lib/site-config";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-y relative isolate overflow-hidden bg-bg">
      {/* Faded roof background image */}
      <Image
        src={images.faqRoof}
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-10"
      />

      <div className="container-x relative grid gap-12 lg:grid-cols-[minmax(0,420px)_1fr] lg:gap-16">
        {/* Left: heading + CTA */}
        <div>
          <span className="eyebrow">{faq.eyebrow}</span>
          <h2
            className="mt-5 font-medium leading-[1.05] text-ink"
            style={{ fontSize: "var(--text-section)" }}
          >
            {faq.heading}
          </h2>
          <p className="mt-5 text-lg text-muted">
            Still have questions? We&apos;re happy to walk you through anything
            before you commit.
          </p>
          <a href="#contact" className="btn-primary mt-8">
            {faq.cta}
            <ArrowRight size={18} />
          </a>
        </div>

        {/* Right: accordion cards */}
        <div className="flex flex-col gap-4">
          {faq.items.map((item, i) => {
            const isOpen = open === i;
            const panelId = `faq-panel-${i}`;
            const buttonId = `faq-button-${i}`;
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-[var(--radius-media)] bg-white shadow-[0_10px_30px_-20px_rgba(0,0,0,0.4)]"
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-lg font-medium text-ink">
                      {item.q}
                    </span>
                    <span className="inline-flex h-8 w-8 flex-none items-center justify-center rounded-full bg-card text-ink">
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-base text-muted">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
