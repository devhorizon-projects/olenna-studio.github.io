"use client";

import React, { useState, useEffect } from "react";
import { z } from "zod";
import {
  Send,
  AlertCircle,
  CheckCircle2,
  Loader2,
  X,
} from "lucide-react";
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
  inquiryType: z.string().optional().or(z.literal("")),
  businessName: z.string().trim().optional().or(z.literal("")),
  instagramHandle: z.string().trim().optional().or(z.literal("")),
  productCategory: z.string().trim().optional().or(z.literal("")),
  portfolioUrl: z.string().trim().optional().or(z.literal("")),
  propertyAddress: z.string().trim().optional().or(z.literal("")),
  carpetArea: z.string().trim().optional().or(z.literal("")),
  commercialTerms: z.string().trim().optional().or(z.literal("")),
  serviceCoverage: z.string().trim().optional().or(z.literal("")),
  fleetCapabilities: z.string().trim().optional().or(z.literal("")),
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;

export type InquiryCategory =
  | "general"
  | "logistics_partner"
  | "shop_rental"
  | "vendor_onboarding";

export interface InquiryOption {
  id: InquiryCategory;
  title: string;
  badge?: string;
  description: string;
}

export const INQUIRY_OPTIONS: InquiryOption[] = [
  {
    id: "general",
    title: "General Concierge",
    description: "Collections, styling appointments, and inquiries",
  },
  {
    id: "logistics_partner",
    title: "Logistics Partner",
    badge: "Open Call",
    description: "Courier, fleet & order fulfillment collaboration",
  },
  {
    id: "shop_rental",
    title: "Rental Partner",
    badge: "2 Floors Req.",
    description: "Ground + 1st Floor commercial spaces in prime locations",
  },
  {
    id: "vendor_onboarding",
    title: "Product Manufacturers",
    badge: "Sell With Us",
    description: "Manufacturers of beauty products, skincare & lifestyle looking to sell",
  },
];

interface ContactFormProps {
  stores?: { id: string; name: string }[];
  initialInquiryType?: InquiryCategory;
}

export function ContactForm({
  stores = [],
  initialInquiryType = "general",
}: ContactFormProps) {
  const [selectedInquiry, setSelectedInquiry] = useState<InquiryCategory>(initialInquiryType);
  const [showModal, setShowModal] = useState<boolean>(false);

  // Trigger announcement popup or listen to query param on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const typeParam = params.get("type") as InquiryCategory | null;
      if (
        typeParam &&
        (typeParam === "logistics_partner" ||
          typeParam === "shop_rental" ||
          typeParam === "vendor_onboarding" ||
          typeParam === "general")
      ) {
        handleInquiryChange(typeParam);
        setShowModal(false);
        return;
      }
    }

    const timer = setTimeout(() => {
      setShowModal(true);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    phone: "",
    storeInterest: "",
    subject: "",
    message: "",
    inquiryType: "General Inquiry",
    businessName: "",
    instagramHandle: "",
    productCategory: "",
    portfolioUrl: "",
    propertyAddress: "",
    carpetArea: "",
    commercialTerms: "",
    serviceCoverage: "",
    fleetCapabilities: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleInquiryChange = (cat: InquiryCategory) => {
    setSelectedInquiry(cat);
    const labelMap: Record<InquiryCategory, string> = {
      general: "General Inquiry",
      logistics_partner: "Logistics Partnership",
      shop_rental: "Commercial Space for Rental (2 Floors)",
      vendor_onboarding: "Product Manufacturer (Sell With Us)",
    };
    setFormData((prev) => ({
      ...prev,
      inquiryType: labelMap[cat],
      subject:
        cat === "logistics_partner"
          ? "Logistics Partner Onboarding Proposal"
          : cat === "shop_rental"
          ? "Commercial Property for Rent (Ground + 1st Floor)"
          : cat === "vendor_onboarding"
          ? "Product Manufacturer Retail Proposal (Beauty & Lifestyle)"
          : prev.subject,
    }));
  };

  const handleSelectFromModal = (cat: InquiryCategory) => {
    handleInquiryChange(cat);
    setShowModal(false);
    const formElement = document.getElementById("contact-form-card");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

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
        ...(formData.inquiryType && formData.inquiryType !== "General Inquiry"
          ? { inquiryType: formData.inquiryType }
          : {}),
        ...(formData.businessName ? { businessName: formData.businessName } : {}),
        ...(formData.instagramHandle ? { instagramHandle: formData.instagramHandle } : {}),
        ...(formData.productCategory ? { productCategory: formData.productCategory } : {}),
        ...(formData.portfolioUrl ? { portfolioUrl: formData.portfolioUrl } : {}),
        ...(formData.propertyAddress ? { propertyAddress: formData.propertyAddress } : {}),
        ...(formData.carpetArea ? { carpetArea: formData.carpetArea } : {}),
        ...(formData.commercialTerms ? { commercialTerms: formData.commercialTerms } : {}),
        ...(formData.serviceCoverage ? { serviceCoverage: formData.serviceCoverage } : {}),
        ...(formData.fleetCapabilities ? { fleetCapabilities: formData.fleetCapabilities } : {}),
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
        inquiryType: "General Inquiry",
        businessName: "",
        instagramHandle: "",
        productCategory: "",
        portfolioUrl: "",
        propertyAddress: "",
        carpetArea: "",
        commercialTerms: "",
        serviceCoverage: "",
        fleetCapabilities: "",
      });
      setSelectedInquiry("general");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div id="contact-form-card" className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl border border-brand-plum-900/10 shadow-xs relative">
      {/* Partnership Announcement Modal / Popup */}
      {showModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="partnership-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-plum-950/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
        >
          <div className="bg-white max-w-lg w-full rounded-2xl p-6 sm:p-8 shadow-2xl border border-brand-plum-900/15 relative space-y-5 animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setShowModal(false)}
              aria-label="Close partnership announcement"
              className="absolute top-4 right-4 p-2 rounded-full text-brand-text-muted hover:text-brand-plum-900 hover:bg-brand-mauve-200/30 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-mauve-200/50 text-brand-plum-900 text-xs font-medium mb-2.5">
                <span>Now Open For Partnerships</span>
              </div>
              <h3 id="partnership-modal-title" className="font-serif text-2xl text-brand-plum-900">
                Partner with Olenna StudioX
              </h3>
              <p className="text-xs sm:text-sm text-brand-text-secondary mt-1">
                We are actively onboarding commercial partners across three key divisions. Select your area of interest to proceed:
              </p>
            </div>

            {/* 3 Partnership Opportunities */}
            <div className="space-y-3">
              {/* 1. Logistics Partner */}
              <button
                type="button"
                onClick={() => handleSelectFromModal("logistics_partner")}
                className="block w-full text-left p-4 rounded-xl border border-blue-200/80 bg-blue-50/60 hover:bg-blue-50 hover:border-blue-400 transition-all"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-semibold text-xs sm:text-sm text-blue-950">
                    1. Logistics Partner
                  </span>
                  <span className="text-[10px] bg-blue-200/80 text-blue-900 px-2 py-0.5 rounded font-medium">
                    Onboarding
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-blue-900/80 mt-1 leading-relaxed">
                  Hyperlocal delivery fleets, couriers, and regional order fulfillment partners.
                </p>
              </button>

              {/* 2. Rental Partner */}
              <button
                type="button"
                onClick={() => handleSelectFromModal("shop_rental")}
                className="block w-full text-left p-4 rounded-xl border border-amber-300/80 bg-amber-50/70 hover:bg-amber-50 hover:border-amber-400 transition-all"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-semibold text-xs sm:text-sm text-amber-950">
                    2. Rental Partner (Commercial Space)
                  </span>
                  <span className="text-[10px] bg-amber-200 text-amber-900 px-2 py-0.5 rounded font-medium">
                    2 Floors Req.
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-amber-900/80 mt-1 leading-relaxed">
                  Commercial space: <strong>Ground + 1st Floor</strong> in prime retail corridors.
                </p>
              </button>

              {/* 3. Product Manufacturers */}
              <button
                type="button"
                onClick={() => handleSelectFromModal("vendor_onboarding")}
                className="block w-full text-left p-4 rounded-xl border border-purple-200/80 bg-purple-50/60 hover:bg-purple-50 hover:border-purple-400 transition-all"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-semibold text-xs sm:text-sm text-purple-950">
                    3. Product Manufacturers (Sell With Us)
                  </span>
                  <span className="text-[10px] bg-purple-200/80 text-purple-900 px-2 py-0.5 rounded font-medium">
                    Open Call
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-purple-900/80 mt-1 leading-relaxed">
                  Manufacturers of products (beauty products, skincare, cosmetics &amp; lifestyle) willing to sell and retail through Olenna StudioX.
                </p>
              </button>
            </div>

            {/* Modal Footer */}
            <div className="pt-2 text-center">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="text-xs text-brand-text-muted hover:text-brand-plum-900 underline transition-colors"
              >
                Continue to General Customer Enquiry
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Top Persistent Announcement Ribbon */}
      <div className="mb-6 p-4 rounded-xl bg-brand-ivory-50 border border-brand-plum-900/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="text-xs text-brand-plum-900">
          <span>
            <strong>Now Open:</strong> We are accepting proposals for <strong>Logistics Partners</strong>,{" "}
            <strong>Rental Partners (2 Floors)</strong>, and <strong>Product Manufacturers (Beauty &amp; Lifestyle)</strong>.
          </span>
        </div>
        <button
          type="button"
          onClick={() => setShowModal(true)}
          className="text-xs font-semibold text-brand-plum-900 underline whitespace-nowrap hover:text-brand-plum-950"
        >
          View Details &rarr;
        </button>
      </div>

      <div className="mb-6">
        <h3 className="font-serif text-2xl text-brand-plum-900 mb-2">
          Contact &amp; Business Enquiries
        </h3>
        <p className="text-sm text-brand-text-secondary font-light">
          Connect with our customer concierge, propose commercial retail properties, partner for logistics,
          or submit your brand profile as a product manufacturer to retail with us.
        </p>
      </div>

      {/* Inquiry Type Pill Selector */}
      <div className="mb-6">
        <label className="block text-xs font-semibold tracking-wider text-brand-plum-900 uppercase mb-2.5">
          Select Enquiry Type
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {INQUIRY_OPTIONS.map((opt) => {
            const isSelected = selectedInquiry === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => handleInquiryChange(opt.id)}
                className={`p-3.5 rounded-xl border text-left transition-all ${
                  isSelected
                    ? "bg-brand-mauve-200/20 border-brand-plum-900 ring-1 ring-brand-plum-900 text-brand-plum-950"
                    : "bg-brand-ivory-50/70 border-brand-plum-900/15 hover:border-brand-plum-900/40 text-brand-text-secondary"
                }`}
              >
                <div className="flex items-center justify-between gap-1.5 flex-wrap">
                  <span className="font-semibold text-xs sm:text-sm text-brand-plum-950">
                    {opt.title}
                  </span>
                  {opt.badge && (
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-brand-plum-900/10 text-brand-plum-900">
                      {opt.badge}
                    </span>
                  )}
                </div>
                <p className="text-[11px] sm:text-xs text-brand-text-muted mt-1 leading-normal">
                  {opt.description}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Dynamic Contextual Guidance Banner based on Selection */}
      {selectedInquiry === "logistics_partner" && (
        <div className="mb-6 p-4 rounded-xl bg-blue-50/80 border border-blue-200/80 text-blue-950">
          <p className="font-semibold text-xs sm:text-sm text-blue-950">Logistics Partnership</p>
          <p className="text-xs sm:text-sm text-blue-900/90 mt-1 leading-relaxed">
            We are actively onboarding hyperlocal courier services, dedicated city fleet operators,
            and express logistics partners to power store-to-door deliveries for Olenna StudioX.
          </p>
        </div>
      )}

      {selectedInquiry === "shop_rental" && (
        <div className="mb-6 p-4 rounded-xl bg-amber-50/90 border border-amber-300/80 text-amber-950">
          <p className="font-semibold text-xs sm:text-sm text-amber-950">
            Commercial Retail Space for Rent — Specific Requirements
          </p>
          <p className="text-xs sm:text-sm text-amber-900/90 mt-1 leading-relaxed">
            <strong>Requirement:</strong> Minimum <strong>2 Floors (Ground Floor + First Floor)</strong> in
            prime commercial shopping corridors, high-street retail markets, or bustling hubs with prominent
            facade visibility.
          </p>
        </div>
      )}

      {selectedInquiry === "vendor_onboarding" && (
        <div className="mb-6 p-4 rounded-xl bg-purple-50/80 border border-purple-200/80 text-purple-950">
          <p className="font-semibold text-xs sm:text-sm text-purple-950">Calling Product Manufacturers (Beauty, Cosmetics &amp; Lifestyle)</p>
          <p className="text-xs sm:text-sm text-purple-900/90 mt-1 leading-relaxed">
            Are you a manufacturer of beauty products, skincare, cosmetics, or lifestyle goods willing to sell and retail through Olenna StudioX? We are onboarding direct manufacturers and brand suppliers. Please share your manufactured product details, catalog, and Instagram profile below.
          </p>
        </div>
      )}

      {/* Success Alert */}
      {status === "success" && (
        <div
          role="alert"
          aria-live="polite"
          className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-start gap-3"
        >
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div className="text-sm">
            <p className="font-medium text-emerald-950">Enquiry Received</p>
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
                href="mailto:support@olennastudiox.com"
                className="underline font-medium hover:text-red-900"
              >
                support@olennastudiox.com
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
            placeholder="Enter your full name"
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
              placeholder="Enter your email address"
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
              placeholder="Enter your phone number"
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

        {/* Dynamic Fields for Logistics Partner */}
        {selectedInquiry === "logistics_partner" && (
          <div className="p-4 rounded-xl bg-brand-ivory-50/80 border border-brand-plum-900/10 space-y-4">
            <h4 className="text-xs font-semibold tracking-wider text-brand-plum-900 uppercase">
              Logistics &amp; Fleet Details
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="businessName"
                  className="block text-xs font-semibold text-brand-plum-900 mb-1"
                >
                  Agency / Fleet Operator Name
                </label>
                <input
                  id="businessName"
                  name="businessName"
                  type="text"
                  value={formData.businessName || ""}
                  onChange={handleChange}
                  placeholder="Enter agency or company name"
                  className="w-full px-4 py-2 text-sm rounded-xl bg-white border border-brand-plum-900/15 focus:border-brand-plum-900 focus:outline-none text-brand-text-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="serviceCoverage"
                  className="block text-xs font-semibold text-brand-plum-900 mb-1"
                >
                  Service Coverage Areas / Cities
                </label>
                <input
                  id="serviceCoverage"
                  name="serviceCoverage"
                  type="text"
                  value={formData.serviceCoverage || ""}
                  onChange={handleChange}
                  placeholder="Enter operational cities / areas"
                  className="w-full px-4 py-2 text-sm rounded-xl bg-white border border-brand-plum-900/15 focus:border-brand-plum-900 focus:outline-none text-brand-text-primary"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="fleetCapabilities"
                className="block text-xs font-semibold text-brand-plum-900 mb-1"
              >
                Fleet Capabilities &amp; Delivery Modes
              </label>
              <input
                id="fleetCapabilities"
                name="fleetCapabilities"
                type="text"
                value={formData.fleetCapabilities || ""}
                onChange={handleChange}
                placeholder="Enter fleet types and delivery modes"
                className="w-full px-4 py-2 text-sm rounded-xl bg-white border border-brand-plum-900/15 focus:border-brand-plum-900 focus:outline-none text-brand-text-primary"
              />
            </div>
          </div>
        )}

        {/* Dynamic Fields for Shop for Rental */}
        {selectedInquiry === "shop_rental" && (
          <div className="p-4 rounded-xl bg-brand-ivory-50/80 border border-brand-plum-900/10 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-semibold tracking-wider text-brand-plum-900 uppercase">
                Property Specifications
              </h4>
              <span className="text-[11px] font-medium text-amber-900 bg-amber-100/70 px-2 py-0.5 rounded">
                Required: Ground + 1st Floor
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="propertyAddress"
                  className="block text-xs font-semibold text-brand-plum-900 mb-1"
                >
                  Commercial Property Address &amp; Locality
                </label>
                <input
                  id="propertyAddress"
                  name="propertyAddress"
                  type="text"
                  value={formData.propertyAddress || ""}
                  onChange={handleChange}
                  placeholder="Enter commercial property address"
                  className="w-full px-4 py-2 text-sm rounded-xl bg-white border border-brand-plum-900/15 focus:border-brand-plum-900 focus:outline-none text-brand-text-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="carpetArea"
                  className="block text-xs font-semibold text-brand-plum-900 mb-1"
                >
                  Total Carpet Area (Ground + 1st Floor)
                </label>
                <input
                  id="carpetArea"
                  name="carpetArea"
                  type="text"
                  value={formData.carpetArea || ""}
                  onChange={handleChange}
                  placeholder="Total carpet area across Ground & 1st Floor"
                  className="w-full px-4 py-2 text-sm rounded-xl bg-white border border-brand-plum-900/15 focus:border-brand-plum-900 focus:outline-none text-brand-text-primary"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="commercialTerms"
                className="block text-xs font-semibold text-brand-plum-900 mb-1"
              >
                Expected Monthly Rent &amp; Commercial Terms
              </label>
              <input
                id="commercialTerms"
                name="commercialTerms"
                type="text"
                value={formData.commercialTerms || ""}
                onChange={handleChange}
                placeholder="Expected rent and commercial terms"
                className="w-full px-4 py-2 text-sm rounded-xl bg-white border border-brand-plum-900/15 focus:border-brand-plum-900 focus:outline-none text-brand-text-primary"
              />
            </div>
          </div>
        )}

        {/* Dynamic Fields for Product Manufacturers */}
        {selectedInquiry === "vendor_onboarding" && (
          <div className="p-4 rounded-xl bg-brand-ivory-50/80 border border-brand-plum-900/10 space-y-4">
            <h4 className="text-xs font-semibold tracking-wider text-brand-plum-900 uppercase">
              Product Manufacturer &amp; Brand Details
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="businessName"
                  className="block text-xs font-semibold text-brand-plum-900 mb-1"
                >
                  Manufacturer / Brand Name
                </label>
                <input
                  id="businessName"
                  name="businessName"
                  type="text"
                  value={formData.businessName || ""}
                  onChange={handleChange}
                  placeholder="Enter manufacturer or brand name"
                  className="w-full px-4 py-2 text-sm rounded-xl bg-white border border-brand-plum-900/15 focus:border-brand-plum-900 focus:outline-none text-brand-text-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="instagramHandle"
                  className="block text-xs font-semibold text-brand-plum-900 mb-1"
                >
                  Instagram Handle / Profile Link
                </label>
                <input
                  id="instagramHandle"
                  name="instagramHandle"
                  type="text"
                  value={formData.instagramHandle || ""}
                  onChange={handleChange}
                  placeholder="@brand or instagram.com/brand"
                  className="w-full px-4 py-2 text-sm rounded-xl bg-white border border-brand-plum-900/15 focus:border-brand-plum-900 focus:outline-none text-brand-text-primary"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="productCategory"
                  className="block text-xs font-semibold text-brand-plum-900 mb-1"
                >
                  Manufactured Product Categories
                </label>
                <input
                  id="productCategory"
                  name="productCategory"
                  type="text"
                  value={formData.productCategory || ""}
                  onChange={handleChange}
                  placeholder="e.g. Beauty Products, Skincare, Cosmetics, Lifestyle"
                  className="w-full px-4 py-2 text-sm rounded-xl bg-white border border-brand-plum-900/15 focus:border-brand-plum-900 focus:outline-none text-brand-text-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="portfolioUrl"
                  className="block text-xs font-semibold text-brand-plum-900 mb-1"
                >
                  Catalog / Price List / Website Link <span className="text-brand-text-muted text-[10px] font-normal lowercase">(optional)</span>
                </label>
                <input
                  id="portfolioUrl"
                  name="portfolioUrl"
                  type="url"
                  value={formData.portfolioUrl || ""}
                  onChange={handleChange}
                  placeholder="Paste catalog, price list, or website URL"
                  className="w-full px-4 py-2 text-sm rounded-xl bg-white border border-brand-plum-900/15 focus:border-brand-plum-900 focus:outline-none text-brand-text-primary"
                />
              </div>
            </div>
          </div>
        )}

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
              placeholder="Enter subject"
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
            placeholder={
              selectedInquiry === "logistics_partner"
                ? "Provide an overview of your delivery fleet, turnaround times, and operational hubs..."
                : selectedInquiry === "shop_rental"
                ? "Share property details (Ground + 1st floor), frontage, parking, and lease terms..."
                : selectedInquiry === "vendor_onboarding"
                ? "Introduce your brand, production capacity, pricing, and craftsmanship..."
                : "Share details about what you're looking for..."
            }
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
