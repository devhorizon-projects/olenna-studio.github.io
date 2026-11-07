"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Sparkles, Gift, Store, ArrowRight, Flame } from "lucide-react";
import { assetPath } from "@/lib/utils/assetPath";

export function SoftLaunchPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"wishes" | "partnerships">("wishes");

  useEffect(() => {
    // Check if dismissed in this session
    const hasSeen =
      typeof window !== "undefined"
        ? sessionStorage.getItem("olenna_softlaunch_popup_dismissed_v1")
        : null;

    if (!hasSeen) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 350);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("olenna_softlaunch_popup_dismissed_v1", "true");
    }
  };

  const handleOpenPoster = () => {
    handleClose();
    const el = document.getElementById("soft-launch-poster");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="soft-launch-popup-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-brand-plum-950/70 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
    >
      <div className="bg-[#FFFAF7] max-w-xl w-full rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-brand-champagne-400/40 relative space-y-5 animate-in zoom-in-95 duration-200 max-h-[92vh] overflow-y-auto ring-1 ring-brand-plum-900/10">
        {/* Luxury Corner Accents */}
        <div className="absolute top-2 left-2 text-brand-champagne-600/30 text-xs pointer-events-none select-none">
          ❖
        </div>
        <div className="absolute top-2 right-10 text-brand-champagne-600/30 text-xs pointer-events-none select-none">
          ❖
        </div>

        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close soft launch announcement"
          className="absolute top-4 right-4 p-2 rounded-full text-brand-text-muted hover:text-brand-plum-900 hover:bg-brand-mauve-200/40 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center pt-1">
          {/* Official Soft Launch Edition Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-brand-blush-100 via-brand-champagne-100 to-brand-blush-100 border border-brand-champagne-400/50 text-brand-plum-900 text-xs font-bold tracking-[0.2em] uppercase mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-brand-champagne-600 animate-pulse" />
            <span>Official Soft Launch Edition</span>
            <Sparkles className="w-3.5 h-3.5 text-brand-champagne-600 animate-pulse" />
          </div>

          {/* Festive Diwali Image Banner */}
          <div className="relative w-full h-32 sm:h-36 rounded-2xl overflow-hidden mb-3 border border-brand-champagne-400/40 shadow-xs">
            <Image
              src={assetPath("/images/diwali/diwali-diya-luxury.jpg")}
              alt="Diwali Celebration Diya Lighting"
              fill
              sizes="(max-width: 640px) 100vw, 540px"
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-plum-950/80 via-transparent to-black/20" />
            <div className="absolute bottom-2 left-0 right-0 text-center">
              <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-brand-plum-900/85 backdrop-blur-xs text-brand-champagne-200 text-[10px] sm:text-xs font-medium border border-brand-champagne-400/30">
                <Flame className="w-3 h-3 text-amber-400" />
                <span>Diwali Lights &amp; Everyday Elegance</span>
                <Sparkles className="w-3 h-3 text-brand-champagne-300" />
              </span>
            </div>
          </div>

          <h2
            id="soft-launch-popup-title"
            className="font-serif text-2xl sm:text-3xl text-brand-plum-900 tracking-tight leading-snug"
          >
            Warm Wishes on Our Soft Launch
          </h2>
          <p className="text-xs sm:text-sm font-medium tracking-wide text-brand-champagne-600 mt-1 uppercase">
            Olenna StudioX — A Sahasra Business Solutions
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center justify-center gap-2 border-b border-brand-plum-900/10 pb-3">
          <button
            type="button"
            onClick={() => setActiveTab("wishes")}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
              activeTab === "wishes"
                ? "bg-brand-plum-900 text-white shadow-xs"
                : "text-brand-text-secondary hover:text-brand-plum-900 bg-brand-blush-50 border border-brand-plum-900/10"
            }`}
          >
            🎉 Soft Launch Wishes
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("partnerships")}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
              activeTab === "partnerships"
                ? "bg-brand-plum-900 text-white shadow-xs"
                : "text-brand-text-secondary hover:text-brand-plum-900 bg-brand-blush-50 border border-brand-plum-900/10"
            }`}
          >
            🤝 Partner Opportunities
          </button>
        </div>

        {/* Tab 1: Soft Launch Wishes */}
        {activeTab === "wishes" && (
          <div className="space-y-4 animate-in fade-in duration-150">
            {/* Heartfelt celebration card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-white via-brand-blush-50 to-[#FAF1F4] border border-brand-champagne-400/30 text-center space-y-3">
              <p className="text-xs sm:text-sm text-brand-text-secondary leading-relaxed font-light">
                We take immense pride and joy in presenting the soft launch of{" "}
                <strong className="text-brand-plum-900 font-semibold">
                  Olenna StudioX — A Sahasra Business Solutions
                </strong>
                . Conceived as a sanctuary for modern women, bringing together
                beauty, ethnic grace, celebratory jewellery, and bespoke tailoring craftsmanship.
              </p>
              <div className="h-px w-20 bg-brand-champagne-400/50 mx-auto" />
              <p className="text-xs italic text-brand-plum-800 font-serif">
                &ldquo;Wishing all our patrons, partners, and well-wishers radiant beginnings,
                endless grace, and everyday elegance.&rdquo;
              </p>
            </div>

            {/* Launch Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-left">
              <div className="p-3 rounded-xl bg-white border border-brand-plum-900/10 flex items-start gap-2.5">
                <Gift className="w-4 h-4 text-brand-champagne-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-brand-plum-900">
                    6 Curated Collections
                  </h4>
                  <p className="text-[11px] text-brand-text-muted leading-tight mt-0.5">
                    Beauty, sarees, Kundan ornaments, bags &amp; tailoring.
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-brand-plum-900/10 flex items-start gap-2.5">
                <Store className="w-4 h-4 text-brand-champagne-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-brand-plum-900">
                    Bangalore Boutique Studio
                  </h4>
                  <p className="text-[11px] text-brand-text-muted leading-tight mt-0.5">
                    Physical store &amp; workspace opening soon in Bangalore! Stay tuned for launch updates.
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-2.5">
              <button
                type="button"
                onClick={handleOpenPoster}
                className="w-full sm:flex-1 py-2.5 px-4 rounded-xl bg-brand-plum-900 hover:bg-brand-plum-800 text-white text-xs font-medium text-center shadow-xs transition-colors flex items-center justify-center gap-1.5"
              >
                <span>View Soft Launch Poster</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <Link
                href="/#collections"
                onClick={handleClose}
                className="w-full sm:flex-1 py-2.5 px-4 rounded-xl border border-brand-plum-900/20 bg-white hover:bg-brand-blush-50 text-brand-plum-900 text-xs font-medium text-center transition-colors"
              >
                Explore Collections
              </Link>
            </div>
          </div>
        )}

        {/* Tab 2: Partnerships */}
        {activeTab === "partnerships" && (
          <div className="space-y-3 animate-in fade-in duration-150">
            <p className="text-xs text-brand-text-secondary leading-relaxed">
              Olenna StudioX — A Sahasra Business Solutions is actively onboarding partners
              across three commercial divisions:
            </p>

            {/* 1. Logistics Partner */}
            <Link
              href="/contact?type=logistics_partner"
              onClick={handleClose}
              className="block w-full text-left p-3.5 rounded-xl border border-blue-200/80 bg-blue-50/60 hover:bg-blue-50 hover:border-blue-400 transition-all"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-semibold text-xs text-blue-950">
                  1. Logistics Partners
                </span>
                <span className="text-[10px] bg-blue-200/80 text-blue-900 px-2 py-0.5 rounded font-medium">
                  Onboarding
                </span>
              </div>
              <p className="text-[11px] text-blue-900/80 mt-1 leading-relaxed">
                Hyperlocal 2-wheeler courier fleets and regional order fulfillment partners.
              </p>
            </Link>

            {/* 2. Rental Partner */}
            <Link
              href="/contact?type=shop_rental"
              onClick={handleClose}
              className="block w-full text-left p-3.5 rounded-xl border border-amber-300/80 bg-amber-50/70 hover:bg-amber-50 hover:border-amber-400 transition-all"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-semibold text-xs text-amber-950">
                  2. Rental Partners (Commercial Space)
                </span>
                <span className="text-[10px] bg-amber-200 text-amber-900 px-2 py-0.5 rounded font-medium">
                  2 Floors Req.
                </span>
              </div>
              <p className="text-[11px] text-amber-900/80 mt-1 leading-relaxed">
                Specific requirement: <strong>2 Floors (Ground Floor + First Floor)</strong> in prime commercial corridors.
              </p>
            </Link>

            {/* 3. Product Manufacturers */}
            <Link
              href="/contact?type=vendor_onboarding"
              onClick={handleClose}
              className="block w-full text-left p-3.5 rounded-xl border border-purple-200/80 bg-purple-50/60 hover:bg-purple-50 hover:border-purple-400 transition-all"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-semibold text-xs text-purple-950">
                  3. Product Manufacturers (Sell With Us)
                </span>
                <span className="text-[10px] bg-purple-200/80 text-purple-900 px-2 py-0.5 rounded font-medium">
                  Open Call
                </span>
              </div>
              <p className="text-[11px] text-purple-900/80 mt-1 leading-relaxed">
                Manufacturers of beauty products, skincare, cosmetics &amp; lifestyle goods willing to retail through Olenna StudioX — A Sahasra Business Solutions.
              </p>
            </Link>
          </div>
        )}

        {/* Modal Footer */}
        <div className="pt-2 text-center border-t border-brand-plum-900/10 flex items-center justify-between text-xs text-brand-text-muted">
          <span>Olenna StudioX — A Sahasra Business Solutions</span>
          <button
            type="button"
            onClick={handleClose}
            className="hover:text-brand-plum-900 transition-colors font-medium"
          >
            Continue Browsing &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}

