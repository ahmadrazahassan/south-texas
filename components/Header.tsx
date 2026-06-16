"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navLinks, business, images } from "@/lib/site-config";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  /**
   * A link is "active" only when it targets a real route matching the current
   * page. Homepage section anchors (e.g. "/#about") all resolve to "/", so we
   * don't persistently highlight them — that avoids the old bug where "Home"
   * was always highlighted, even on /services.
   */
  const isActive = (href: string) => {
    if (href.includes("#")) return false;
    const route = href.split("#")[0] || "/";
    return pathname === route || pathname.startsWith(`${route}/`);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile overlay is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-[72px] items-center justify-between">
        {/* Logo + wordmark */}
        <a
          href="/"
          className="flex items-center gap-2.5"
          aria-label={`${business.name} home`}
        >
          <Image
            src={images.logo}
            alt=""
            width={36}
            height={36}
            className="h-9 w-9"
            priority
          />
          <span
            className={`text-[17px] font-600 font-semibold tracking-tight ${
              solid ? "text-ink" : "text-white"
            }`}
          >
            {business.name}
          </span>
        </a>

        {/* Center nav (desktop) */}
        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 md:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`text-[15px] font-medium transition-opacity hover:opacity-70 ${
                isActive(link.href)
                  ? "text-yellow"
                  : solid
                    ? "text-ink"
                    : "text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: contact pill (desktop) + hamburger (mobile) */}
        <div className="flex items-center gap-3">
          <a
            href="/contact"
            aria-current={isActive("/contact") ? "page" : undefined}
            className={`hidden rounded-lg px-6 py-2.5 text-[15px] font-medium transition-colors md:inline-flex ${
              isActive("/contact")
                ? "bg-yellow text-ink hover:bg-yellow-dark"
                : solid
                  ? "border border-ink/25 text-ink hover:bg-ink hover:text-white"
                  : "border border-white/40 text-white hover:bg-white hover:text-ink"
            }`}
          >
            Contact
          </a>
          <button
            type="button"
            className={`inline-flex h-10 w-10 items-center justify-center rounded-lg md:hidden ${
              solid ? "text-ink" : "text-white"
            }`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile full-screen overlay */}
      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-0 top-[72px] z-40 flex flex-col bg-white px-6 py-8 md:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`border-b border-ink/10 py-4 text-2xl font-medium ${
                  isActive(link.href) ? "text-yellow" : "text-ink"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="/contact"
            onClick={() => setOpen(false)}
            className="btn-primary mt-6 w-full"
          >
            Contact Us
          </a>
          <div className="mt-auto text-sm text-muted">
            <a href={business.phoneHref} className="font-semibold text-ink">
              {business.phone}
            </a>
            <p className="mt-1">{business.address.full}</p>
          </div>
        </div>
      )}
    </header>
  );
}
