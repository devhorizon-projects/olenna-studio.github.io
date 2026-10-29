"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Truck,
  Building2,
  Sparkles,
  X,
  ArrowRight,
  Handshake,
} from "lucide-react";

export function PartnershipPopup() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    // Check if dismissed in this session
    const hasSeen = typeof window !== "undefined" ? sessionStorage.getItem("olenna_partnership_popup_dismissed") : null;
    if (hasSeen) {
      setIsOpen(false);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("olenna_partnership_popup_dismissed", "true");
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="homepage-partnership-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-plum-950/65 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
    >
      <div className="bg-white max-w-lg w-full rounded-2xl p-6 sm:p-8 shadow-2xl border border-brand-plum-900/15 relative space-y-5 animate-in zoom-in-95 duration-200 max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close partnership announcement"
          className="absolute top-4 right-4 p-2 rounded-full text-brand-text-muted hover:text-brand-plum-900 hover:bg-brand-mauve-200/30 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-mauve-200/50 text-brand-plum-900 text-xs font-medium mb-2.5">
            <Handshake className="w-3.5 h-3.5 text-brand-plum-700" />
            <span>We Are Expanding</span>
          </div>
          <h2
            id="homepage-partnership-modal-title"
            className="font-serif text-2xl sm:text-3xl text-brand-plum-900 tracking-tight"
          >
            We Are Open For Partnerships
          </h2>
          <p className="text-xs sm:text-sm text-brand-text-secondary mt-1.5 leading-relaxed">
            Olenna StudioX is actively onboarding partners across three core commercial divisions.
            Select an opportunity below to submit your details:
          </p>
        </div>

        {/* 3 Partnership Opportunities */}
        <div className="space-y-3">
          {/* 1. Logistics Partner */}
          <Link
            href="/contact?type=logistics_partner"
            onClick={handleClose}
            className="w-full text-left p-3.5 rounded-xl border border-blue-200/80 bg-blue-50/60 hover:bg-blue-50 hover:border-blue-400 transition-all flex items-start justify-between gap-3 group"
          >
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                <Truck className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-xs sm:text-sm text-blue-950">
                    1. Logistics Partners
                  </span>
                  <span className="text-[10px] bg-blue-200/80 text-blue-900 px-1.5 py-0.2 rounded font-medium">
                    Onboarding
                  </span>
                </div>
                <p className="text-[11px] text-blue-900/80 mt-0.5 leading-relaxed">
                  Hyperlocal 2-wheeler courier fleets and regional order fulfillment partners.
                </p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-blue-600 shrink-0 mt-2 transition-transform group-hover:translate-x-1" />
          </Link>

          {/* 2. Rental Partner */}
          <Link
            href="/contact?type=shop_rental"
            onClick={handleClose}
            className="w-full text-left p-3.5 rounded-xl border border-amber-300/80 bg-amber-50/70 hover:bg-amber-50 hover:border-amber-400 transition-all flex items-start justify-between gap-3 group"
          >
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                <Building2 className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-xs sm:text-sm text-amber-950">
                    2. Rental Partners (Commercial Space)
                  </span>
                  <span className="text-[10px] bg-amber-200 text-amber-900 px-1.5 py-0.2 rounded font-medium">
                    2 Floors Req.
                  </span>
                </div>
                <p className="text-[11px] text-amber-900/80 mt-0.5 leading-relaxed">
                  Specific requirement: <strong>2 Floors (Ground Floor + First Floor)</strong> in prime commercial corridors.
                </p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-amber-700 shrink-0 mt-2 transition-transform group-hover:translate-x-1" />
          </Link>

          {/* 3. Manufacturing & Vendor Partner */}
          <Link
            href="/contact?type=vendor_onboarding"
            onClick={handleClose}
            className="w-full text-left p-3.5 rounded-xl border border-purple-200/80 bg-purple-50/60 hover:bg-purple-50 hover:border-purple-400 transition-all flex items-start justify-between gap-3 group"
          >
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-purple-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-xs sm:text-sm text-purple-950">
                    3. Manufacturing &amp; Vendor Partners
                  </span>
                  <span className="text-[10px] bg-purple-200/80 text-purple-900 px-1.5 py-0.2 rounded font-medium">
                    Open Call
                  </span>
                </div>
                <p className="text-[11px] text-purple-900/80 mt-0.5 leading-relaxed">
                  Shortlisting designers, tailors, and jewelry artisans. Connect with your Instagram handle &amp; catalog.
                </p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-purple-700 shrink-0 mt-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Modal Footer */}
        <div className="pt-2 text-center border-t border-brand-plum-900/10">
          <button
            type="button"
            onClick={handleClose}
            className="text-xs text-brand-text-muted hover:text-brand-plum-900 transition-colors"
          >
            Continue Browsing Olenna StudioX &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}
