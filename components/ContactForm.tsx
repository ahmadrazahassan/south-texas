"use client";

import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { contact, serviceTypeOptions } from "@/lib/site-config";

type FormState = {
  fullName: string;
  email: string;
  message: string;
  services: string[];
};

const initialState: FormState = {
  fullName: "",
  email: "",
  message: "",
  services: [],
};

/** Matches the real field heights so SSR → hydration stays identical, which
 *  sidesteps autofill-extension hydration mismatches (inputs render only after
 *  mount). */
function FieldsSkeleton() {
  return (
    <div className="mt-8 flex flex-col gap-6" aria-hidden="true">
      <div className="h-[54px] rounded-xl border-[1.5px] border-ink/25 bg-white" />
      <div className="h-[54px] rounded-xl border-[1.5px] border-ink/25 bg-white" />
      <div className="h-[88px] rounded-xl border-[1.5px] border-ink/25 bg-white" />
      <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-3.5 sm:grid-cols-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-5 rounded bg-ink/10" />
        ))}
      </div>
      <div className="mt-2 h-[54px] rounded-xl bg-ink/15" />
    </div>
  );
}

/**
 * Contact form for the coloured panel — underline inputs, a "How can we help?"
 * checkbox group, and a dark submit button. Local state only; wire
 * `handleSubmit` to a real endpoint when the backend is ready. Shared by the
 * homepage Contact section and the /contact page.
 */
export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const update = (key: "fullName" | "email" | "message") => (value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const toggleService = (opt: string) =>
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(opt)
        ? prev.services.filter((s) => s !== opt)
        : [...prev.services, opt],
    }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire to endpoint (e.g. POST /api/contact)
    console.log("Contact submission:", form);
    setSubmitted(true);
    setForm(initialState);
    setTimeout(() => setSubmitted(false), 5000);
  };

  if (!mounted) return <FieldsSkeleton />;

  return (
    <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6" aria-label={contact.formTitle}>
      <div>
        <label htmlFor="cf-name" className="sr-only">
          Your name
        </label>
        <input
          id="cf-name"
          type="text"
          required
          placeholder="Your name"
          className="field-onbrand"
          value={form.fullName}
          onChange={(e) => update("fullName")(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="cf-email" className="sr-only">
          Email address
        </label>
        <input
          id="cf-email"
          type="email"
          required
          placeholder="you@email.com"
          className="field-onbrand"
          value={form.email}
          onChange={(e) => update("email")(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="cf-message" className="sr-only">
          Tell us about the project
        </label>
        <textarea
          id="cf-message"
          required
          rows={3}
          placeholder="Tell us a little about the project…"
          className="field-onbrand resize-none"
          value={form.message}
          onChange={(e) => update("message")(e.target.value)}
        />
      </div>

      <fieldset className="mt-1">
        <legend className="text-sm font-semibold text-ink">{contact.helpLabel}</legend>
        <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-3.5 sm:grid-cols-2">
          {serviceTypeOptions.map((opt) => (
            <label
              key={opt}
              className="flex cursor-pointer items-center gap-2.5 text-[15px] text-ink"
            >
              <input
                type="checkbox"
                className="peer sr-only"
                checked={form.services.includes(opt)}
                onChange={() => toggleService(opt)}
              />
              <span className="flex h-5 w-5 flex-none items-center justify-center rounded-md border-2 border-ink bg-transparent transition-colors peer-checked:bg-ink peer-checked:[&>svg]:opacity-100 peer-focus-visible:ring-2 peer-focus-visible:ring-ink/40 peer-focus-visible:ring-offset-1">
                <Check size={13} strokeWidth={3.5} className="text-white opacity-0 transition-opacity" />
              </span>
              {opt}
            </label>
          ))}
        </div>
      </fieldset>

      <button
        type="submit"
        className="mt-2 w-full rounded-xl bg-ink px-6 py-4 text-[15px] font-semibold text-white transition-colors hover:bg-black"
      >
        {contact.formCta}
      </button>

      <p
        aria-live="polite"
        className={`text-center text-sm font-medium text-ink transition-opacity ${
          submitted ? "opacity-100" : "opacity-0"
        }`}
      >
        Thanks! We&apos;ll be in touch within 24 hours.
      </p>
    </form>
  );
}
