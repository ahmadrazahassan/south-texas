"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { contact, serviceTypeOptions, locationOptions } from "@/lib/site-config";

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  serviceType: string;
  location: string;
  message: string;
};

const initialState: FormState = {
  fullName: "",
  email: "",
  phone: "",
  serviceType: "",
  location: "",
  message: "",
};

const fieldClass = "field";

/** Matches real field heights so SSR → hydration stays identical, sidestepping
 *  autofill-extension hydration mismatches (same approach as RequestForm). */
function FieldsSkeleton() {
  return (
    <div className="mt-6 grid gap-4" aria-hidden="true">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="h-[50px] rounded-xl bg-ink/[0.06]" />
        <div className="h-[50px] rounded-xl bg-ink/[0.06]" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="h-[50px] rounded-xl bg-ink/[0.06]" />
        <div className="h-[50px] rounded-xl bg-ink/[0.06]" />
      </div>
      <div className="h-[50px] rounded-xl bg-ink/[0.06]" />
      <div className="h-[120px] rounded-xl bg-ink/[0.06]" />
      <div className="h-[50px] rounded-lg bg-ink/10" />
    </div>
  );
}

/**
 * Full contact form — name, email, phone, service type, location, message.
 * Local state only; wire `handleSubmit` to a real endpoint when the backend
 * is ready. Shared by the homepage Contact section and the /contact page.
 */
export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const update = (key: keyof FormState) => (value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

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
    <form onSubmit={handleSubmit} className="mt-6 grid gap-4" aria-label={contact.formTitle}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="sr-only">
            Full name
          </label>
          <input
            id="cf-name"
            type="text"
            required
            placeholder="Full name"
            className={fieldClass}
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
            placeholder="Email address"
            className={fieldClass}
            value={form.email}
            onChange={(e) => update("email")(e.target.value)}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-phone" className="sr-only">
            Phone number
          </label>
          <input
            id="cf-phone"
            type="tel"
            placeholder="Phone number"
            className={fieldClass}
            value={form.phone}
            onChange={(e) => update("phone")(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="cf-service" className="sr-only">
            Service type
          </label>
          <select
            id="cf-service"
            required
            className={`${fieldClass} ${form.serviceType ? "text-ink" : "text-muted/70"}`}
            value={form.serviceType}
            onChange={(e) => update("serviceType")(e.target.value)}
          >
            <option value="" disabled>
              Service type
            </option>
            {serviceTypeOptions.map((opt) => (
              <option key={opt} value={opt} className="text-ink">
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="cf-location" className="sr-only">
          Location
        </label>
        <select
          id="cf-location"
          required
          className={`${fieldClass} ${form.location ? "text-ink" : "text-muted/70"}`}
          value={form.location}
          onChange={(e) => update("location")(e.target.value)}
        >
          <option value="" disabled>
            Select location
          </option>
          {locationOptions.map((opt) => (
            <option key={opt} value={opt} className="text-ink">
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="cf-message" className="sr-only">
          How can we help?
        </label>
        <textarea
          id="cf-message"
          required
          rows={4}
          placeholder="Tell us about your project…"
          className={`${fieldClass} resize-none`}
          value={form.message}
          onChange={(e) => update("message")(e.target.value)}
        />
      </div>

      <button type="submit" className="btn-primary w-full">
        {contact.formCta}
        <ArrowRight size={18} />
      </button>

      <p
        aria-live="polite"
        className={`text-center text-sm font-medium text-green-700 transition-opacity ${
          submitted ? "opacity-100" : "opacity-0"
        }`}
      >
        Thanks! We&apos;ll be in touch within 24 hours.
      </p>
    </form>
  );
}
