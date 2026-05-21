"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

interface Step1Data {
  name: string;
  email: string;
  service: string;
}

interface Step2Data {
  address: string;
  propertyType: string;
  preferredDay: string;
  preferredTime: string;
  howHeard: string;
  notes: string;
}

interface Errors {
  [key: string]: string;
}

const inputClass = (error?: string) =>
  `w-full px-4 py-3.5 rounded-xl border text-[#0A1628] text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#DC3545]/30 focus:border-[#DC3545] transition-colors ${
    error ? "border-[#DC3545] bg-red-50/40" : "border-gray-200 bg-white hover:border-gray-300"
  }`;

const labelClass = "block text-sm font-semibold text-[#0A1628] mb-2";

export default function TwoStepForm() {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2>(1);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [step1, setStep1] = useState<Step1Data>({ name: "", email: "", service: "" });
  const [step2, setStep2] = useState<Step2Data>({
    address: "", propertyType: "Residential", preferredDay: "",
    preferredTime: "", howHeard: "", notes: "",
  });
  const [errors, setErrors] = useState<Errors>({});

  const validateStep1 = () => {
    const e: Errors = {};
    if (!step1.name.trim()) e.name = "Name is required";
    if (!step1.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(step1.email)) e.email = "Enter a valid email address";
    if (!step1.service) e.service = "Please select a service";
    return e;
  };

  const validateStep2 = () => {
    const e: Errors = {};
    if (!step2.address.trim()) e.address = "Property address is required";
    return e;
  };

  const handleNext = () => {
    const e = validateStep1();
    if (Object.keys(e).length > 0) { setErrors(e); return; }
    setErrors({});
    setDirection(1);
    setStep(2);
  };

  const handleBack = () => {
    setErrors({});
    setDirection(-1);
    setStep(1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validateStep2();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setIsSubmitting(true);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("submittedName", step1.name.split(" ")[0]);
    }
    await new Promise((r) => setTimeout(r, 600));
    router.push("/thank-you");
  };

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 48 : -48, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -48 : 48, opacity: 0 }),
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      {/* Progress Bar */}
      <div className="px-8 pt-8 pb-0">
        <div className="flex items-center gap-3 mb-8">
          {[1, 2].map((s) => (
            <div key={s} className="flex items-center gap-3 flex-1">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 transition-all duration-300 ${
                step >= s ? "bg-[#DC3545] text-white shadow-md shadow-red-200" : "bg-gray-100 text-gray-400"
              }`}>
                {step > s ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                ) : s}
              </div>
              <div className="flex-1">
                <p className={`text-xs font-semibold transition-colors ${step >= s ? "text-[#0A1628]" : "text-gray-400"}`}>
                  {s === 1 ? "Your Info" : "Property Details"}
                </p>
                {s < 2 && (
                  <div className="h-px mt-1.5 bg-gray-200 relative overflow-hidden rounded-full">
                    <div className={`absolute inset-y-0 left-0 bg-[#DC3545] transition-all duration-500 ${step > 1 ? "w-full" : "w-0"}`} />
                  </div>
                )}
              </div>
            </div>
          ))}
          <p className="text-xs text-gray-400 shrink-0">Step {step} of 2</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <div className="overflow-hidden px-8 pb-8">
          <AnimatePresence mode="wait" custom={direction}>
            {step === 1 ? (
              <motion.div
                key="step1"
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div className="space-y-5">
                  <div>
                    <label htmlFor="name" className={labelClass}>Full Name *</label>
                    <input
                      id="name"
                      type="text"
                      autoComplete="name"
                      placeholder="John Smith"
                      className={inputClass(errors.name)}
                      value={step1.name}
                      onChange={(e) => setStep1({ ...step1, name: e.target.value })}
                    />
                    {errors.name && <p className="mt-1.5 text-xs text-[#DC3545]">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className={labelClass}>Email Address *</label>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      placeholder="john@example.com"
                      className={inputClass(errors.email)}
                      value={step1.email}
                      onChange={(e) => setStep1({ ...step1, email: e.target.value })}
                    />
                    {errors.email && <p className="mt-1.5 text-xs text-[#DC3545]">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="service" className={labelClass}>Service Interested In *</label>
                    <select
                      id="service"
                      className={inputClass(errors.service)}
                      value={step1.service}
                      onChange={(e) => setStep1({ ...step1, service: e.target.value })}
                    >
                      <option value="">Select a service…</option>
                      <option>Window Washing</option>
                      <option>Pressure Washing</option>
                      <option>Trash Bin Cleaning</option>
                      <option>Multiple Services</option>
                      <option>Not Sure Yet</option>
                    </select>
                    {errors.service && <p className="mt-1.5 text-xs text-[#DC3545]">{errors.service}</p>}
                  </div>

                  <button
                    type="button"
                    onClick={handleNext}
                    className="w-full bg-[#DC3545] hover:bg-[#b02a37] text-white font-bold py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-red-200 mt-2 flex items-center justify-center gap-2"
                  >
                    Next Step
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="step2"
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div className="space-y-5">
                  <div>
                    <label htmlFor="address" className={labelClass}>Property Address *</label>
                    <input
                      id="address"
                      type="text"
                      autoComplete="street-address"
                      placeholder="123 Oak Street, Glenview, IL"
                      className={inputClass(errors.address)}
                      value={step2.address}
                      onChange={(e) => setStep2({ ...step2, address: e.target.value })}
                    />
                    {errors.address && <p className="mt-1.5 text-xs text-[#DC3545]">{errors.address}</p>}
                  </div>

                  <div>
                    <label className={labelClass}>Property Type</label>
                    <div className="flex gap-4">
                      {["Residential", "Commercial"].map((type) => (
                        <label key={type} className="flex items-center gap-2 cursor-pointer group">
                          <input
                            type="radio"
                            name="propertyType"
                            value={type}
                            checked={step2.propertyType === type}
                            onChange={() => setStep2({ ...step2, propertyType: type })}
                            className="accent-[#DC3545]"
                          />
                          <span className="text-sm text-gray-700 group-hover:text-[#0A1628] transition-colors">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="day" className={labelClass}>Preferred Day</label>
                      <select
                        id="day"
                        className={inputClass()}
                        value={step2.preferredDay}
                        onChange={(e) => setStep2({ ...step2, preferredDay: e.target.value })}
                      >
                        <option value="">Any day</option>
                        {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map((d) => (
                          <option key={d}>{d}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="time" className={labelClass}>Preferred Time</label>
                      <select
                        id="time"
                        className={inputClass()}
                        value={step2.preferredTime}
                        onChange={(e) => setStep2({ ...step2, preferredTime: e.target.value })}
                      >
                        <option value="">Any time</option>
                        <option value="morning">Morning (7am–10am)</option>
                        <option value="midday">Midday (10am–1pm)</option>
                        <option value="afternoon">Afternoon (1pm–5pm)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="howHeard" className={labelClass}>How did you hear about us?</label>
                    <select
                      id="howHeard"
                      className={inputClass()}
                      value={step2.howHeard}
                      onChange={(e) => setStep2({ ...step2, howHeard: e.target.value })}
                    >
                      <option value="">Select one…</option>
                      <option>Google</option>
                      <option>Nextdoor</option>
                      <option>Referral</option>
                      <option>Friend or Family</option>
                      <option>Saw us in the neighborhood</option>
                      <option>Social Media</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="notes" className={labelClass}>Anything I should know? <span className="font-normal text-gray-400">(optional)</span></label>
                    <textarea
                      id="notes"
                      rows={3}
                      placeholder="Number of windows, specific areas, access notes, etc."
                      className={`${inputClass()} resize-none`}
                      value={step2.notes}
                      onChange={(e) => setStep2({ ...step2, notes: e.target.value })}
                    />
                  </div>

                  <div className="flex gap-3 pt-1">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="flex items-center gap-2 px-6 py-4 rounded-xl border-2 border-gray-200 text-gray-600 font-semibold text-sm hover:border-gray-300 hover:text-[#0A1628] transition-all"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 bg-[#DC3545] hover:bg-[#b02a37] disabled:opacity-70 text-white font-bold py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-red-200 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Sending…
                        </>
                      ) : (
                        "Book My Free Estimate"
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </form>
    </div>
  );
}
