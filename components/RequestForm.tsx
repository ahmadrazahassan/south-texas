"use client";

import { useEffect, useState } from "react";
import {
  hero,
  serviceTypeOptions,
  locationOptions,
} from "@/lib/site-config";

type FormState = {
  fullName: string;
  email: string;
  serviceType: string;
  location: string;
  preferredDate: string;
};

const initialState: FormState = {
  fullName: "",
  email: "",
  serviceType: "",
  location: "",
  preferredDate: "",
};

const fieldClass =
  "w-full rounded-lg border border-ink/12 bg-white px-4 py-2.5 text-[15px] text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-yellow focus:ring-2 focus:ring-yellow/25";

/** Skeleton shown during SSR / first paint — matches the real field heights so
 *  there's no layout shift, and keeps server + client markup identical (which
 *  sidesteps hydration mismatches from form-autofill browser extensions that
 *  inject elements into inputs before React hydrates). */
function FieldsSkeleton() {
  return (
    <div className="mt-5 flex flex-col gap-3" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="h-[46px] rounded-lg bg-ink/[0.06]" />
      ))}
      <div className="mt-1 h-[46px] rounded-lg bg-ink/10" />
    </div>
  );
}

/**
 * Floating "Request Services" card in the hero. Local state only — wire the
 * submit handler to a real endpoint when the backend is ready.
 */
export default function RequestForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const update = (key: keyof FormState) => (value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire to endpoint (e.g. POST /api/request-services)
    console.log("Request Services submission:", form);
    setSubmitted(true);
    setForm(initialState);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="glow-border w-full rounded-[16px] bg-white p-6 shadow-[0_30px_70px_-28px_rgba(0,0,0,0.5)]"
      aria-label={hero.formTitle}
    >
      <h2 className="text-center text-xl font-semibold tracking-tight text-ink">
        {hero.formTitle}
      </h2>

      {!mounted ? (
        <FieldsSkeleton />
      ) : (
        <div className="mt-5 flex flex-col gap-3">
          <div>
            <label htmlFor="rf-name" className="sr-only">
              Full Name
            </label>
            <input
              id="rf-name"
              type="text"
              required
              placeholder="Full Name"
              className={fieldClass}
              value={form.fullName}
              onChange={(e) => update("fullName")(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="rf-email" className="sr-only">
              Email address
            </label>
            <input
              id="rf-email"
              type="email"
              required
              placeholder="Email address"
              className={fieldClass}
              value={form.email}
              onChange={(e) => update("email")(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="rf-service" className="sr-only">
              Services Type
            </label>
            <select
              id="rf-service"
              required
              className={`${fieldClass} ${
                form.serviceType ? "text-ink" : "text-muted/70"
              }`}
              value={form.serviceType}
              onChange={(e) => update("serviceType")(e.target.value)}
            >
              <option value="" disabled>
                Services Type
              </option>
              {serviceTypeOptions.map((opt) => (
                <option key={opt} value={opt} className="text-ink">
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="rf-location" className="sr-only">
              Select Location
            </label>
            <select
              id="rf-location"
              required
              className={`${fieldClass} ${
                form.location ? "text-ink" : "text-muted/70"
              }`}
              value={form.location}
              onChange={(e) => update("location")(e.target.value)}
            >
              <option value="" disabled>
                Select Location
              </option>
              {locationOptions.map((opt) => (
                <option key={opt} value={opt} className="text-ink">
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="rf-date" className="sr-only">
              Preferred Date
            </label>
            <input
              id="rf-date"
              type="date"
              aria-label="Preferred date"
              className={`${fieldClass} ${
                form.preferredDate ? "text-ink" : "text-muted/70"
              }`}
              value={form.preferredDate}
              onChange={(e) => update("preferredDate")(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="btn-primary glow-border glow-border--btn mt-1 w-full"
          >
            {hero.formCta}
          </button>

          <p
            aria-live="polite"
            className={`text-center text-sm text-green-700 transition-opacity ${
              submitted ? "opacity-100" : "opacity-0"
            }`}
          >
            Thanks! We&apos;ll be in touch shortly.
          </p>
        </div>
      )}
    </form>
  );
}
