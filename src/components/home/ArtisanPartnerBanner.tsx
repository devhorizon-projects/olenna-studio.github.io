import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ArtisanPartnerBanner() {
  return (
    <section className="py-6 sm:py-10 bg-brand-ivory-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#FAF1F4] border border-brand-plum-900/10 p-8 sm:p-10 lg:p-12 shadow-2xs">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 sm:gap-8">
            {/* Left Content */}
            <div className="max-w-2xl space-y-2">
              <span className="text-[11px] font-semibold tracking-[0.25em] text-brand-plum-700 uppercase">
                GROW WITH OLENNA STUDIOX
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif font-normal text-brand-plum-900 leading-snug">
                Are You a Weaver, Kundan Jeweller, or Clean Beauty Artisan?
              </h2>
              <p className="text-sm sm:text-base text-brand-text-secondary font-light leading-relaxed pt-1">
                Join India&apos;s curated boutique collective. We partner with master artisans and ethical brands to showcase exceptional craftsmanship to Bangalore&apos;s most discerning patrons.
              </p>
            </div>

            {/* Right Action Button */}
            <div className="shrink-0">
              <Link
                href="/contact?type=vendor_onboarding"
                className="inline-flex items-center gap-2 bg-brand-plum-900 hover:bg-brand-plum-950 text-white font-medium text-xs tracking-wider uppercase px-7 py-3.5 rounded-full shadow-sm hover:shadow-md transition-all"
              >
                <span>Partner With Us</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
