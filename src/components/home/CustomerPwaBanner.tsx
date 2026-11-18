"use client";

import React from "react";
import { ArrowRight, MessageCircle, Truck, ShieldCheck } from "lucide-react";
import { CustomerPwaBannerContent } from "@/lib/models/content";
import { useToast } from "@/components/ui/Toast";

interface CustomerPwaBannerProps {
  content: CustomerPwaBannerContent;
}

export function CustomerPwaBanner({ content }: CustomerPwaBannerProps) {
  const { showComingSoon } = useToast();

  if (!content.isVisible) {
    return null;
  }

  return (
    <section className="py-14 sm:py-20 bg-brand-ivory-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#2D1829] border border-[#DFC7B0]/20 p-8 sm:p-12 lg:p-14 text-white shadow-xl relative overflow-hidden">
          {/* Subtle glow */}
          <div
            className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-[#DFC7B0]/10 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-[11px] font-semibold tracking-[0.25em] text-[#DFC7B0] uppercase">
                ONLINE BOUTIQUE & CONCIERGE
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal text-white leading-tight">
                {content.headline}
              </h2>
              <p className="text-sm sm:text-base text-white/75 font-light leading-relaxed max-w-xl">
                {content.subheadline}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href={content.ctaUrl}
                  onClick={(e) => {
                    e.preventDefault();
                    showComingSoon();
                  }}
                  className="bg-[#DFC7B0] hover:bg-[#C4A181] text-[#241322] font-semibold text-xs tracking-wider uppercase px-6 py-3.5 rounded-full inline-flex items-center gap-2 shadow-md transition-colors"
                >
                  <span>{content.ctaLabel}</span>
                  <ArrowRight className="w-4 h-4 ml-0.5" />
                </a>

                <a
                  href="https://wa.me/919741424695?text=Hello%20Olenna%20StudioX%20Concierge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/25 hover:border-white/50 text-white text-xs font-semibold tracking-wider uppercase px-6 py-3.5 rounded-full inline-flex items-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#DFC7B0]" />
                  <span>Order via WhatsApp Concierge</span>
                </a>
              </div>
            </div>

            {/* Right Information Badges Column */}
            <div className="lg:col-span-5 space-y-3.5">
              {/* Delivery Badge */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.06] border border-white/10 backdrop-blur-xs">
                <div className="w-10 h-10 rounded-full bg-[#DFC7B0]/20 text-[#DFC7B0] flex items-center justify-center shrink-0">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold tracking-wider text-[#DFC7B0] uppercase">
                    EXPRESS BANGALORE DELIVERY
                  </h3>
                  <p className="text-xs sm:text-sm text-white/80 font-light mt-0.5">
                    Same-day & scheduled delivery for Bangalore pin codes
                  </p>
                </div>
              </div>

              {/* Luxury Packaging Badge */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.06] border border-white/10 backdrop-blur-xs">
                <div className="w-10 h-10 rounded-full bg-[#DFC7B0]/20 text-[#DFC7B0] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold tracking-wider text-[#DFC7B0] uppercase">
                    LUXURY PACKAGING & CARE
                  </h3>
                  <p className="text-xs sm:text-sm text-white/80 font-light mt-0.5">
                    Signature gift boxes, temperature-controlled beauty transit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
