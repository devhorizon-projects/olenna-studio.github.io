"use client";

import React, { useState } from "react";
import { z } from "zod";
import { Send, AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { sendContactInquiry } from "@/lib/services/emailService";

const ContactFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(1, "Please enter your full name"),
  email: z
    .string()
    .trim()
    .min(1, "Please provide a valid email address")
    .email("Please provide a valid email address"),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+\s-]{10,15}$/, "Please provide a valid 10-digit phone number")
    .optional()
    .or(z.literal("")),
  storeInterest: z.string().optional().or(z.literal("")),
  subject: z.string().trim().optional().or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(1, "Please enter your message"),
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;

interface ContactFormProps {
  stores?: { id: string; name: string }[];
}

export function ContactForm({ stores = [] }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    phone: "",
    storeInterest: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = ContactFormSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.issues.forEach((err) => {
        const fieldName = err.path[0] as keyof ContactFormData;
        fieldErrors[fieldName] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setStatus("submitting");

    try {
      await sendContactInquiry({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        storeLocation: formData.storeInterest,
        subject: formData.subject,
        message: formData.message,
      });

      // Reset form and show success message
      setStatus("success");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        storeInterest: "",
        subject: "",
        message: "",
      });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl border border-brand-plum-900/10 shadow-xs">
      <h3 className="font-serif text-2xl text-brand-plum-900 mb-2">
        Send Us a Message
      </h3>
      <p className="text-sm text-brand-text-secondary font-light mb-6">
        Whether you have questions regarding our collections, store locations, or styling appointments, our concierge team is here to assist.
      </p>

      {/* Success Alert */}
      {status === "success" && (
        <div
          role="alert"
          aria-live="polite"
          className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-start gap-3"
        >
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div className="text-sm">
            <p className="font-medium text-emerald-950">Message Sent</p>
            <p className="text-xs sm:text-sm text-emerald-800 mt-0.5">
              Thank you! Your message has been sent. Our team will get back to you shortly.
            </p>
          </div>
        </div>
      )}

      {/* Error Alert */}
      {status === "error" && (
        <div
          role="alert"
          aria-live="assertive"
          className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-900 flex items-start gap-2.5"
        >
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <div className="text-sm">
            <p className="font-medium">Could not send message</p>
            <p className="text-xs sm:text-sm text-red-700 mt-0.5">
              Something went wrong. Please try again or email us directly at{" "}
              <a
                href="mailto:support@devhorizontech.com"
                className="underline font-medium hover:text-red-900"
              >
                support@devhorizontech.com
              </a>
              .
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        {/* Full Name */}
        <div>
          <label
            htmlFor="fullName"
            className="block text-xs font-semibold tracking-wider text-brand-plum-900 uppercase mb-1.5"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            aria-required="true"
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. Radhika Sharma"
            className={`w-full px-4 py-2.5 text-sm rounded-xl bg-brand-ivory-50 border ${
              errors.fullName
                ? "border-red-400 focus:border-red-500"
                : "border-brand-plum-900/15 focus:border-brand-plum-900"
            } focus:outline-none text-brand-text-primary`}
          />
          {errors.fullName && (
            <p id="fullName-error" role="alert" className="text-xs text-red-600 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.fullName}</span>
            </p>
          )}
        </div>

        {/* Email and Phone Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="email"
              className="block text-xs font-semibold tracking-wider text-brand-plum-900 uppercase mb-1.5"
            >
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              aria-required="true"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. radhika@example.com"
              className={`w-full px-4 py-2.5 text-sm rounded-xl bg-brand-ivory-50 border ${
                errors.email
                  ? "border-red-400 focus:border-red-500"
                  : "border-brand-plum-900/15 focus:border-brand-plum-900"
              } focus:outline-none text-brand-text-primary`}
            />
            {errors.email && (
              <p id="email-error" role="alert" className="text-xs text-red-600 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.email}</span>
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-xs font-semibold tracking-wider text-brand-plum-900 uppercase mb-1.5"
            >
              Phone Number <span className="text-brand-text-muted text-[10px] font-normal lowercase">(optional)</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. +91 98765 43210"
              className={`w-full px-4 py-2.5 text-sm rounded-xl bg-brand-ivory-50 border ${
                errors.phone
                  ? "border-red-400 focus:border-red-500"
                  : "border-brand-plum-900/15 focus:border-brand-plum-900"
              } focus:outline-none text-brand-text-primary`}
            />
            {errors.phone && (
              <p id="phone-error" role="alert" className="text-xs text-red-600 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.phone}</span>
              </p>
            )}
          </div>
        </div>

        {/* Store Selection & Subject */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="storeInterest"
              className="block text-xs font-semibold tracking-wider text-brand-plum-900 uppercase mb-1.5"
            >
              Preferred Store Location <span className="text-brand-text-muted text-[10px] font-normal lowercase">(optional)</span>
            </label>
            <select
              id="storeInterest"
              name="storeInterest"
              value={formData.storeInterest}
              onChange={handleChange}
              className="w-full px-4 py-2.5 text-sm rounded-xl bg-brand-ivory-50 border border-brand-plum-900/15 focus:border-brand-plum-900 focus:outline-none text-brand-text-primary"
            >
              <option value="">General Enquiry (Any Store)</option>
              {stores.map((s) => (
                <option key={s.id} value={s.name}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-xs font-semibold tracking-wider text-brand-plum-900 uppercase mb-1.5"
            >
              Subject <span className="text-brand-text-muted text-[10px] font-normal lowercase">(optional)</span>
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              placeholder="e.g. Bridal Styling Appointment"
              className={`w-full px-4 py-2.5 text-sm rounded-xl bg-brand-ivory-50 border ${
                errors.subject
                  ? "border-red-400 focus:border-red-500"
                  : "border-brand-plum-900/15 focus:border-brand-plum-900"
              } focus:outline-none text-brand-text-primary`}
            />
            {errors.subject && (
              <p id="subject-error" role="alert" className="text-xs text-red-600 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.subject}</span>
              </p>
            )}
          </div>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-xs font-semibold tracking-wider text-brand-plum-900 uppercase mb-1.5"
          >
            Your Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            aria-required="true"
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
            value={formData.message}
            onChange={handleChange}
            placeholder="Share details about what you're looking for..."
            className={`w-full px-4 py-2.5 text-sm rounded-xl bg-brand-ivory-50 border ${
              errors.message
                ? "border-red-400 focus:border-red-500"
                : "border-brand-plum-900/15 focus:border-brand-plum-900"
            } focus:outline-none text-brand-text-primary`}
          />
          {errors.message && (
            <p id="message-error" role="alert" className="text-xs text-red-600 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.message}</span>
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <Button
            type="submit"
            variant="primary"
            size="md"
            disabled={status === "submitting"}
            aria-label="Send Message"
            className="w-full sm:w-auto"
          >
            {status === "submitting" ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" aria-hidden="true" data-testid="loading-spinner" />
                <span>Sending message...</span>
                <span className="sr-only">(Send Message)</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" aria-hidden="true" />
                <span>Send Message</span>
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
