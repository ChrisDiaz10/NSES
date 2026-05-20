"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const services = [
  "Window Washing",
  "Pressure Washing",
  "Trash Bin Cleaning",
  "Multiple Services",
  "Not Sure Yet",
];

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const times = [
  { value: "morning", label: "Morning — 7am–10am" },
  { value: "midday", label: "Midday — 10am–1pm" },
  { value: "afternoon", label: "Afternoon — 1pm–5pm" },
];

const hearAbout = [
  "Google",
  "Nextdoor",
  "Referral",
  "Friend or Family",
  "Saw us in the neighborhood",
  "Social Media",
  "Other",
];

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  address: string;
  propertyType: string;
  preferredDay: string;
  preferredTime: string;
  hearAbout: string;
  notes: string;
}

interface Errors {
  name?: string;
  phone?: string;
  address?: string;
  service?: string;
}

export default function ContactForm() {
  const router = useRouter();
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    service: "",
    address: "",
    propertyType: "residential",
    preferredDay: "",
    preferredTime: "",
    hearAbout: "",
    notes: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);

  function validate(): boolean {
    const e: Errors = {};
    if (!form.name.trim()) e.name = "Full name is required.";
    if (!form.phone.trim()) e.phone = "Phone number is required.";
    if (!form.address.trim()) e.address = "Property address is required.";
    if (!form.service) e.service = "Please select a service.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof Errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 600));
    router.push("/thank-you");
  }

  const inputClass = (field: keyof Errors) =>
    `w-full px-4 py-3 rounded-xl border text-[#1A1A1A] bg-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-colors ${
      errors[field]
        ? "border-[#DC3545] focus:ring-red-200"
        : "border-gray-200 focus:ring-[#1B9BD1]/30 focus:border-[#1B9BD1]"
    }`;

  const selectClass = (field?: keyof Errors) =>
    `w-full px-4 py-3 rounded-xl border text-[#1A1A1A] bg-white focus:outline-none focus:ring-2 transition-colors ${
      field && errors[field]
        ? "border-[#DC3545] focus:ring-red-200"
        : "border-gray-200 focus:ring-[#1B9BD1]/30 focus:border-[#1B9BD1]"
    }`;

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="space-y-5">
        {/* Full Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-[#1A1A1A] mb-1.5">
            Full Name <span className="text-[#DC3545]">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            className={inputClass("name")}
            aria-required="true"
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" role="alert" className="mt-1.5 text-[#DC3545] text-xs font-medium">
              {errors.name}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-[#1A1A1A] mb-1.5">
            Phone Number <span className="text-[#DC3545]">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="(847) 555-0123"
            className={inputClass("phone")}
            aria-required="true"
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone && (
            <p id="phone-error" role="alert" className="mt-1.5 text-[#DC3545] text-xs font-medium">
              {errors.phone}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-[#1A1A1A] mb-1.5">
            Email Address <span className="text-gray-400 font-normal">(optional)</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="jane@email.com"
            className={selectClass()}
          />
        </div>

        {/* Service */}
        <div>
          <label htmlFor="service" className="block text-sm font-semibold text-[#1A1A1A] mb-1.5">
            Service Interested In <span className="text-[#DC3545]">*</span>
          </label>
          <select
            id="service"
            name="service"
            value={form.service}
            onChange={handleChange}
            className={selectClass("service")}
            aria-required="true"
            aria-describedby={errors.service ? "service-error" : undefined}
          >
            <option value="">Select a service...</option>
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          {errors.service && (
            <p id="service-error" role="alert" className="mt-1.5 text-[#DC3545] text-xs font-medium">
              {errors.service}
            </p>
          )}
        </div>

        {/* Address */}
        <div>
          <label htmlFor="address" className="block text-sm font-semibold text-[#1A1A1A] mb-1.5">
            Property Address <span className="text-[#DC3545]">*</span>
          </label>
          <input
            id="address"
            name="address"
            type="text"
            value={form.address}
            onChange={handleChange}
            placeholder="123 Elm Street, Glenview, IL 60025"
            className={inputClass("address")}
            aria-required="true"
            aria-describedby={errors.address ? "address-error" : undefined}
          />
          {errors.address && (
            <p id="address-error" role="alert" className="mt-1.5 text-[#DC3545] text-xs font-medium">
              {errors.address}
            </p>
          )}
        </div>

        {/* Property Type */}
        <div>
          <fieldset>
            <legend className="block text-sm font-semibold text-[#1A1A1A] mb-2">Property Type</legend>
            <div className="flex gap-6">
              {["residential", "commercial"].map((type) => (
                <label key={type} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="propertyType"
                    value={type}
                    checked={form.propertyType === type}
                    onChange={handleChange}
                    className="w-4 h-4 text-[#DC3545] accent-[#DC3545]"
                  />
                  <span className="text-sm text-[#1A1A1A] capitalize">{type}</span>
                </label>
              ))}
            </div>
          </fieldset>
        </div>

        {/* Preferred Day + Time */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="preferredDay" className="block text-sm font-semibold text-[#1A1A1A] mb-1.5">
              Preferred Day
            </label>
            <select
              id="preferredDay"
              name="preferredDay"
              value={form.preferredDay}
              onChange={handleChange}
              className={selectClass()}
            >
              <option value="">Any day works</option>
              {days.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="preferredTime" className="block text-sm font-semibold text-[#1A1A1A] mb-1.5">
              Preferred Time
            </label>
            <select
              id="preferredTime"
              name="preferredTime"
              value={form.preferredTime}
              onChange={handleChange}
              className={selectClass()}
            >
              <option value="">Any time works</option>
              {times.map((t) => (
                <option key={t.value} value={t.value}>{t.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* How did you hear */}
        <div>
          <label htmlFor="hearAbout" className="block text-sm font-semibold text-[#1A1A1A] mb-1.5">
            How did you hear about us?
          </label>
          <select
            id="hearAbout"
            name="hearAbout"
            value={form.hearAbout}
            onChange={handleChange}
            className={selectClass()}
          >
            <option value="">Select one...</option>
            {hearAbout.map((h) => (
              <option key={h} value={h}>{h}</option>
            ))}
          </select>
        </div>

        {/* Notes */}
        <div>
          <label htmlFor="notes" className="block text-sm font-semibold text-[#1A1A1A] mb-1.5">
            Anything we should know?{" "}
            <span className="text-gray-400 font-normal">(optional)</span>
          </label>
          <textarea
            id="notes"
            name="notes"
            value={form.notes}
            onChange={handleChange}
            rows={3}
            placeholder="Gate code, special instructions, which areas you want us to focus on..."
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[#1A1A1A] bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1B9BD1]/30 focus:border-[#1B9BD1] transition-colors resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-[#DC3545] hover:bg-[#b02a37] disabled:bg-gray-400 text-white font-bold py-4 rounded-xl transition-colors text-lg mt-2"
        >
          {submitting ? "Submitting..." : "Book My Free Estimate"}
        </button>

        <p className="text-gray-400 text-xs text-center">
          No obligation. No pressure. We typically respond within 2 hours during business hours.
        </p>
      </div>
    </form>
  );
}
