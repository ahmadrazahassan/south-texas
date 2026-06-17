import {
  MessageCircle,
  MapPin,
  Phone,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import { business } from "@/lib/site-config";

const blocks = [
  {
    icon: MessageCircle,
    title: "Chat to us",
    desc: "Our friendly team is here to help.",
    value: business.email,
    href: `mailto:${business.email}`,
  },
  {
    icon: MapPin,
    title: "Visit us",
    desc: "Come say hello at our office.",
    value: business.address.full,
    href: `https://www.google.com/maps?q=${encodeURIComponent(business.address.full)}`,
  },
  {
    icon: Phone,
    title: "Call us",
    desc: business.hours,
    value: business.phone,
    href: business.phoneHref,
  },
];

const socials = [
  { icon: Facebook, href: business.social.facebook, label: "Facebook" },
  { icon: Instagram, href: business.social.instagram, label: "Instagram" },
  { icon: Linkedin, href: business.social.linkedin, label: "LinkedIn" },
];

/** Contact details (chat / visit / call) + socials for the contact panel. */
export default function ContactInfo() {
  return (
    <div className="flex h-full flex-col">
      <ul className="flex flex-col gap-8">
        {blocks.map(({ icon: Icon, title, desc, value, href }) => {
          const external = href.startsWith("http");
          return (
            <li key={title} className="flex gap-4">
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl border-2 border-ink">
                <Icon size={20} className="text-ink" strokeWidth={2} />
              </span>
              <div>
                <h3 className="text-base font-semibold text-ink">{title}</h3>
                <p className="mt-0.5 text-[15px] text-muted">{desc}</p>
                <a
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="mt-2 inline-block text-[15px] font-semibold text-ink underline-offset-4 hover:underline"
                >
                  {value}
                </a>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="mt-10 flex gap-4 lg:mt-auto lg:pt-10">
        {socials.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink/70 transition-colors hover:border-ink hover:text-ink"
          >
            <Icon size={18} />
          </a>
        ))}
      </div>
    </div>
  );
}
