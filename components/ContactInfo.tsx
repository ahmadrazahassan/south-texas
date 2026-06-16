import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from "lucide-react";
import { business } from "@/lib/site-config";

const socials = [
  { icon: Facebook, href: business.social.facebook, label: "Facebook" },
  { icon: Instagram, href: business.social.instagram, label: "Instagram" },
  { icon: Linkedin, href: business.social.linkedin, label: "LinkedIn" },
];

const details = [
  {
    icon: Phone,
    label: "Call us",
    value: business.phone,
    href: business.phoneHref,
  },
  {
    icon: Mail,
    label: "Email us",
    value: business.email,
    href: `mailto:${business.email}`,
  },
  {
    icon: MapPin,
    label: "Visit us",
    value: business.address.full,
    href: `https://www.google.com/maps?q=${encodeURIComponent(business.address.full)}`,
  },
  { icon: Clock, label: "Hours", value: business.hours, href: undefined },
];

/**
 * Contact details list (phone, email, address, hours) + socials.
 * Theme-agnostic: pass `tone="dark"` when placed on a dark background.
 */
export default function ContactInfo({ tone = "light" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";

  return (
    <div>
      <ul className="flex flex-col gap-5">
        {details.map(({ icon: Icon, label, value, href }) => {
          const content = (
            <>
              <span
                className={`flex h-11 w-11 flex-none items-center justify-center rounded-xl ${
                  dark ? "bg-white/10 text-yellow" : "bg-yellow/10 text-yellow"
                }`}
              >
                <Icon size={20} />
              </span>
              <span>
                <span
                  className={`block text-xs font-medium uppercase tracking-wide ${
                    dark ? "text-white/50" : "text-muted"
                  }`}
                >
                  {label}
                </span>
                <span
                  className={`mt-0.5 block text-[15px] font-medium ${
                    dark ? "text-white" : "text-ink"
                  }`}
                >
                  {value}
                </span>
              </span>
            </>
          );

          return (
            <li key={label}>
              {href ? (
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-start gap-4 transition-opacity hover:opacity-80"
                >
                  {content}
                </a>
              ) : (
                <div className="flex items-start gap-4">{content}</div>
              )}
            </li>
          );
        })}
      </ul>

      <div className="mt-8 flex gap-3">
        {socials.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${
              dark
                ? "border-white/20 text-white/80 hover:border-yellow hover:text-yellow"
                : "border-ink/15 text-ink/70 hover:border-yellow hover:text-yellow"
            }`}
          >
            <Icon size={18} />
          </a>
        ))}
      </div>
    </div>
  );
}
