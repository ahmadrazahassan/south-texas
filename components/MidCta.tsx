import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { midCta, images } from "@/lib/site-config";
import Reveal from "./Reveal";

export default function MidCta() {
  return (
    <section className="bg-bg py-8 sm:py-12">
      <div className="mx-auto max-w-[1480px] px-3 sm:px-5">
        <Reveal>
          <div className="on-dark relative isolate overflow-hidden rounded-[22px] bg-black">
            <Image
              src={images.ctaBand}
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-black/60" />

            <div className="relative z-10 px-6 py-16 sm:px-12 sm:py-20 lg:px-16 lg:py-24">
              <div className="max-w-2xl">
                <h2
                  className="font-medium leading-[1.08] text-white"
                  style={{ fontSize: "var(--text-section)" }}
                >
                  {midCta.heading}
                </h2>
                <p className="mt-5 max-w-xl text-lg text-white/80">
                  {midCta.subtext}
                </p>
                <Link href="/#contact" className="btn-primary mt-8">
                  {midCta.cta}
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
