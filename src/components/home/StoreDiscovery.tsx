import React from "react";
import Image from "next/image";
import { MapPin, Calendar, ArrowRight } from "lucide-react";
import { StoreDiscoveryContent } from "@/lib/models/content";
import { Store } from "@/lib/models/store";
import { Button } from "@/components/ui/Button";
import { assetPath } from "@/lib/utils/assetPath";

interface StoreDiscoveryProps {
  content: StoreDiscoveryContent;
  featuredStores?: Store[];
}

export function StoreDiscovery({
  content,
}: StoreDiscoveryProps) {
  if (!content.isVisible) {
    return null;
  }

  return (
    <section className="py-16 sm:py-20 bg-brand-ivory-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Editorial Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal text-brand-plum-900 tracking-tight">
            Inaugural Greetings from Olenna StudioX
          </h2>
          <p className="mt-4 text-sm sm:text-base text-brand-text-secondary leading-relaxed font-light">
            Curated multi-category artisanal luxury, clean beauty, & bespoke atelier services for the modern Indian woman. Discover understated luxury crafted with heritage, passion, and elegance. Opening our flagship door in Bangalore&apos;s premier boutique corridor.
          </p>
        </div>

        {/* Flagship Showroom Card Container */}
        <div className="rounded-3xl bg-[#FAF5F3] border border-brand-plum-900/10 overflow-hidden shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Left Column: Boutique Showroom Interior */}
            <div className="lg:col-span-5 relative h-72 sm:h-96 lg:h-[480px] w-full p-4 sm:p-6 lg:p-8">
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-md">
                <Image
                  src={assetPath(content.image)}
                  alt={content.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* Right Column: Corridor Launch Details & VIP Booking */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-12 space-y-6">
              <div>
                <span className="text-[11px] font-semibold tracking-[0.25em] text-brand-plum-700 uppercase">
                  FLAGSHIP BOUTIQUE STORE
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-normal text-brand-plum-900 leading-snug mt-2">
                  {content.headline}
                </h3>
                <p className="text-sm sm:text-base text-brand-text-secondary leading-relaxed font-light mt-3">
                  {content.subheadline}
                </p>
              </div>

              {/* Inset Information Pills / Cards */}
              <div className="space-y-3 pt-2">
                {/* Corridor Pill */}
                <div className="flex items-center gap-3.5 p-3.5 bg-white/90 rounded-xl border border-brand-plum-900/8 shadow-2xs">
                  <div className="w-9 h-9 rounded-full bg-brand-blush-100 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-brand-plum-800" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold tracking-wider text-brand-plum-700 uppercase">
                      FLAGSHIP CORRIDOR
                    </p>
                    <p className="text-xs sm:text-sm font-medium text-brand-plum-900">
                      HSR Layout Sector 2 / Indiranagar 100ft Road Corridor (TBC)
                    </p>
                  </div>
                </div>

                {/* Anticipated Launch Pill */}
                <div className="flex items-center gap-3.5 p-3.5 bg-white/90 rounded-xl border border-brand-plum-900/8 shadow-2xs">
                  <div className="w-9 h-9 rounded-full bg-brand-blush-100 flex items-center justify-center shrink-0">
                    <Calendar className="w-4 h-4 text-brand-plum-800" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold tracking-wider text-brand-plum-700 uppercase">
                      ANTICIPATED LAUNCH
                    </p>
                    <p className="text-xs sm:text-sm font-medium text-brand-plum-900">
                      Q1 2025 • Priority invitations for registered patrons
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button
                  href={content.ctaUrl}
                  variant="outline"
                  size="md"
                  className="rounded-full px-6 py-2.5 text-xs font-semibold uppercase tracking-wider border-brand-plum-900/30 hover:border-brand-plum-900"
                >
                  <span>{content.ctaLabel}</span>
                </Button>

                <Button
                  href="/contact?type=vip_preview"
                  variant="primary"
                  size="md"
                  className="rounded-full px-6 py-2.5 text-xs font-semibold uppercase tracking-wider shadow-sm hover:shadow-md"
                >
                  <span>Book a VIP Preview</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Button>
              </div>

              {/* Footnote Notice */}
              <p className="text-xs text-brand-text-muted font-light pt-1">
                ✦ Bangalore patrons: VIP previews and styling consultations open for early registration
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
