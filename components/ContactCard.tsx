import Image from "next/image";
import { business, contact, images } from "@/lib/site-config";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

/**
 * Two-panel contact card: brand + details on a white panel, and the form on an
 * inset brand-coloured panel. Shared by the homepage section and /contact page.
 */
export default function ContactCard() {
  return (
    <div className="rounded-[28px] border-2 border-ink bg-white p-3 sm:p-4">
      <div className="grid gap-3 sm:gap-4 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Left: brand + contact details */}
        <div className="flex flex-col p-5 sm:p-7">
          <a href="/" className="flex items-center gap-2.5" aria-label={`${business.name} home`}>
            <Image src={images.logo} alt="" width={32} height={32} className="h-8 w-8" />
            <span className="text-lg font-semibold tracking-tight text-ink">
              {business.name}
            </span>
          </a>
          <div className="mt-10 flex-1">
            <ContactInfo />
          </div>
        </div>

        {/* Right: brand-coloured form panel */}
        <div className="rounded-[22px] bg-yellow p-7 sm:p-9 lg:p-10">
          <h2
            className="font-semibold leading-[1.05] tracking-tight text-ink"
            style={{ fontSize: "clamp(30px, 3.4vw, 46px)" }}
          >
            {contact.cardHeading}
          </h2>
          <p className="mt-4 max-w-md text-lg text-ink/80">{contact.cardSubtext}</p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
