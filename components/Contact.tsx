import { contact } from "@/lib/site-config";
import Reveal from "./Reveal";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default function Contact() {
  return (
    <section id="contact" className="section-y scroll-mt-24 bg-card">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* Left: heading + contact details */}
          <Reveal>
            <span className="eyebrow">{contact.eyebrow}</span>
            <h2
              className="mt-5 font-medium leading-[1.05] text-ink"
              style={{ fontSize: "var(--text-section)" }}
            >
              {contact.heading}
            </h2>
            <p className="mt-5 max-w-md text-lg text-muted">{contact.subtext}</p>
            <div className="mt-10">
              <ContactInfo />
            </div>
          </Reveal>

          {/* Right: form card */}
          <Reveal index={1}>
            <div className="rounded-[var(--radius-card)] border border-ink/8 bg-white p-7 shadow-[0_30px_70px_-40px_rgba(0,0,0,0.4)] sm:p-8">
              <h3 className="text-xl font-semibold tracking-tight text-ink">
                {contact.formTitle}
              </h3>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
