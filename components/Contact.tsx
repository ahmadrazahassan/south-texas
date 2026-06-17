import Reveal from "./Reveal";
import ContactCard from "./ContactCard";

export default function Contact() {
  return (
    <section id="contact" className="section-y scroll-mt-24 bg-bg">
      <div className="container-x">
        <Reveal>
          <ContactCard />
        </Reveal>
      </div>
    </section>
  );
}
