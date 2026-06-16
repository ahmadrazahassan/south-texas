"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, MapPin, Phone, Clock, Facebook, Instagram, Linkedin } from "lucide-react";
import { business, footerNav, images } from "@/lib/site-config";
import Marquee from "./Marquee";

const socials = [
  { icon: Facebook, href: business.social.facebook, label: "Facebook" },
  { icon: Instagram, href: business.social.instagram, label: "Instagram" },
  { icon: Linkedin, href: business.social.linkedin, label: "LinkedIn" },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wide text-white/50">
        {title}
      </h3>
      <ul className="mt-4 flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-[15px] text-white/80 transition-colors hover:text-yellow"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire to endpoint (e.g. POST /api/newsletter)
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <footer id="footer" className="on-dark relative overflow-hidden bg-black">
      <div className="container-x pt-20 pb-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          {/* Brand + mission + newsletter */}
          <div>
            <a href="#home" className="flex items-center gap-2.5">
              <Image
                src={images.logo}
                alt=""
                width={36}
                height={36}
                className="h-9 w-9"
              />
              <span className="text-lg font-semibold text-white">
                {business.name}
              </span>
            </a>
            <p className="mt-5 max-w-sm text-[15px] text-white/70">
              {business.mission}
            </p>

            <form onSubmit={handleSubscribe} className="mt-7 max-w-sm">
              <label htmlFor="newsletter" className="sr-only">
                Email address
              </label>
              {/* Browser extensions (password managers, autofill) inject
                  nodes into this wrapper, causing a hydration mismatch.
                  Suppress on the wrapper since that's the element whose
                  children differ between server and client. */}
              <div
                suppressHydrationWarning
                className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 py-1.5 pl-5 pr-1.5"
              >
                <input
                  id="newsletter"
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent text-[15px] text-white outline-none placeholder:text-white/40"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-full bg-yellow text-ink transition-transform hover:translate-x-0.5"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </form>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <FooterColumn title="Main" links={footerNav.main} />
            <FooterColumn title="Company" links={footerNav.company} />
            <FooterColumn title="Legal" links={footerNav.legal} />
          </div>
        </div>

        {/* NAP line */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-[15px] text-white/75 md:flex-row md:flex-wrap md:items-center md:gap-8">
          <span className="inline-flex items-center gap-2">
            <MapPin size={18} className="text-yellow" />
            {business.address.full}
          </span>
          <a
            href={business.phoneHref}
            className="inline-flex items-center gap-2 hover:text-yellow"
          >
            <Phone size={18} className="text-yellow" />
            {business.phone}
          </a>
          <span className="inline-flex items-center gap-2">
            <Clock size={18} className="text-yellow" />
            {business.hours}
          </span>
        </div>

        {/* Copyright + social */}
        <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/50">
            © 2026 {business.name}. All Rights Reserved.
          </p>
          <div className="flex gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-yellow hover:text-yellow"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Giant marquee word along the very bottom edge */}
      <div className="pb-2">
        <Marquee word="ROOFING" variant="solid" colorClass="text-white/10" duration={34} />
      </div>
    </footer>
  );
}
