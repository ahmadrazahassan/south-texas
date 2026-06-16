import { ArrowRight } from "lucide-react";
import { finalCta, business } from "@/lib/site-config";
import Reveal from "./Reveal";

export default function FinalCta() {
  return (
    <section className="on-dark bg-black">
      <div className="container-x py-20 text-center md:py-28">
        <Reveal>
          <h2
            className="mx-auto max-w-3xl font-medium leading-[1.08] text-white"
            style={{ fontSize: "var(--text-section)" }}
          >
            {finalCta.heading}
          </h2>
        </Reveal>
        <Reveal index={1}>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/70">
            {finalCta.subtext}
          </p>
        </Reveal>
        <Reveal index={2}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href={business.phoneHref} className="btn-primary">
              {finalCta.cta}
              <ArrowRight size={18} />
            </a>
            <a href={business.phoneHref} className="text-lg font-medium text-white">
              {business.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
