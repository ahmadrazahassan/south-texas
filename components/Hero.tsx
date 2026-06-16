import Image from "next/image";
import { hero, images } from "@/lib/site-config";
import RequestForm from "./RequestForm";
import Marquee from "./Marquee";

export default function Hero() {
  return (
    <section
      className="on-dark relative min-h-[100svh] w-full overflow-hidden rounded-b-[2.5rem] bg-black md:rounded-b-[3.5rem]"
      aria-label="Hero"
    >
      {/* Real hero photograph */}
      <Image
        src={images.hero.poster}
        alt="South Texas tile roofing"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Overlay — keeps the roof visible while the white text stays legible */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="container-x relative z-10 flex min-h-[100svh] flex-col">
        {/* Header height spacer */}
        <div className="h-[72px] flex-none" aria-hidden="true" />

        {/* Framed band: headline + CTA on the left, request card on the right.
            Thin hairlines top & bottom replicate the reference's grid framing. */}
        <div className="relative border-y border-white/12 py-10 sm:py-14">
          <div className="grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-[1fr_480px] lg:items-start">
            {/* Headline + CTA (no paragraph — matches reference) */}
            <div>
              <h1
                className="max-w-[14ch] font-medium text-white"
                style={{
                  fontSize: "clamp(40px, 5.4vw, 72px)",
                  lineHeight: 1.06,
                }}
              >
                {hero.h1}
              </h1>
              <a
                href="#contact"
                className="btn-primary glow-border glow-border--btn mt-8 whitespace-nowrap"
              >
                {hero.cta}
              </a>
            </div>

            {/* Floating request card — overlaps above the band's top hairline */}
            <div className="lg:-mt-6 lg:justify-self-end">
              <RequestForm />
            </div>
          </div>
        </div>

        <div className="flex-1" />
      </div>

      {/* Giant SOLID white marquee along the lower edge, photo still visible
          beneath it — exactly like the reference. */}
      <div
        className="pointer-events-none absolute inset-x-0 z-[6]"
        style={{ bottom: "clamp(20px, 4vh, 56px)" }}
      >
        <Marquee
          word={hero.marqueeWord}
          variant="solid"
          colorClass="text-white"
          duration={32}
        />
      </div>
    </section>
  );
}
