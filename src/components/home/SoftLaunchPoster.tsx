"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight, Heart, Share2, Check, MapPin, Store, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { assetPath } from "@/lib/utils/assetPath";

export function SoftLaunchPoster() {
  const [copied, setCopied] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const festiveGallery = [
    {
      src: "/images/diwali/diwali-festive-model.jpg",
      tag: "✦ Auspicious Soft Launch ✦",
      title: "Festive Silk Attire & Kundan Ornaments",
      subtitle: "Celebrating grace, tradition, and modern feminine confidence",
      alt: "Diwali Festive Celebration Model — Olenna StudioX - A Sahasra Business Solutions",
    },
    {
      src: "/images/diwali/diwali-diya-luxury.jpg",
      tag: "✦ Celebration of Lights ✦",
      title: "Handcrafted Golden Diyas & Jasmine Buds",
      subtitle: "Deep plum velvet and liquid champagne silks bathed in festive glow",
      alt: "Traditional Glowing Diyas & Jasmine Celebration — Olenna StudioX",
    },
    {
      src: "/images/diwali/diwali-boutique-banner.jpg",
      tag: "✦ Curated Luxury Finds ✦",
      title: "Bespoke Packaging & Curated Collections",
      subtitle: "Thoughtfully curated gifts, accessories, and Banarasi textiles",
      alt: "Luxury Festive Packaging and Silk Textiles — Olenna StudioX",
    },
  ];

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev === 0 ? festiveGallery.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev === festiveGallery.length - 1 ? 0 : prev + 1));
  };

  const handleShare = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "https://olennastudiox.com";
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Soft Launch — Olenna StudioX - A Sahasra Business Solutions",
          text: "Warm wishes on the Soft Launch of Olenna StudioX — A Sahasra Business Solutions! Everyday Elegance, Thoughtfully Curated.",
          url,
        });
        return;
      } catch {
        // Fallback to clipboard
      }
    }
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section
      id="soft-launch-poster"
      aria-label="Soft Launch Celebration Poster"
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#FFFDFB] via-[#FAF1F4] to-[#FFFDFB] relative overflow-hidden"
    >
      {/* Decorative ambient gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-r from-brand-blush-100/40 via-brand-champagne-100/50 to-brand-mauve-100/40 blur-3xl pointer-events-none -z-0" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Poster Outer Frame: Luxury double border with champagne gold highlights */}
        <div className="relative bg-gradient-to-b from-white via-[#FFFBF9] to-white rounded-3xl sm:rounded-[36px] p-6 sm:p-10 lg:p-14 border-2 border-brand-champagne-400/50 shadow-xl ring-1 ring-brand-plum-900/10 overflow-hidden">
          
          {/* Inner Accent Inset Border */}
          <div className="absolute inset-3 sm:inset-4 rounded-2xl sm:rounded-[28px] border border-brand-champagne-400/30 pointer-events-none" />

          {/* Luxury Corner Ornaments */}
          <div className="absolute top-5 left-5 sm:top-6 sm:left-6 text-brand-champagne-600/40 text-base sm:text-lg select-none pointer-events-none font-serif">
            ❖
          </div>
          <div className="absolute top-5 right-5 sm:top-6 sm:right-6 text-brand-champagne-600/40 text-base sm:text-lg select-none pointer-events-none font-serif">
            ❖
          </div>
          <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6 text-brand-champagne-600/40 text-base sm:text-lg select-none pointer-events-none font-serif">
            ❖
          </div>
          <div className="absolute bottom-5 right-5 sm:bottom-6 sm:right-6 text-brand-champagne-600/40 text-base sm:text-lg select-none pointer-events-none font-serif">
            ❖
          </div>

          {/* Poster Content */}
          <div className="text-center max-w-3xl mx-auto space-y-6 sm:space-y-8 relative">
            
            {/* Top Ribbon Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-brand-blush-100 via-brand-champagne-100 to-brand-blush-100 border-2 border-brand-champagne-400/60 shadow-sm ring-1 ring-brand-champagne-400/20">
              <Sparkles className="w-4 h-4 text-brand-champagne-600 animate-pulse" />
              <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-brand-plum-950 uppercase">
                Official Soft Launch Edition
              </span>
              <Sparkles className="w-4 h-4 text-brand-champagne-600 animate-pulse" />
            </div>

            {/* Brand Monogram & Crest */}
            <div className="space-y-1">
              <div className="flex justify-center mb-2">
                <Image
                  src={assetPath("/images/logo/olenna-logo-full.webp")}
                  alt="Olenna StudioX - A Sahasra Business Solutions Crest"
                  width={140}
                  height={113}
                  className="w-24 sm:w-28 h-auto object-contain mx-auto"
                />
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-plum-900 tracking-tight leading-tight">
                Olenna StudioX
              </h2>
              <p className="text-xs sm:text-sm tracking-[0.3em] uppercase font-medium text-brand-champagne-600">
                A Sahasra Business Solutions
              </p>
            </div>

            {/* Divider Filigree */}
            <div className="flex items-center justify-center gap-3 text-brand-champagne-400">
              <span className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent to-brand-champagne-400" />
              <span className="text-xs">✦ ❖ ✦</span>
              <span className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent to-brand-champagne-400" />
            </div>

            {/* Main Festive Soft Launch Proclamation & Wishes */}
            <div className="space-y-4">
              <h3 className="font-serif text-2xl sm:text-3xl text-brand-plum-900 italic font-normal">
                Wishing You Joy, Grace &amp; Everyday Elegance
              </h3>

              <p className="text-sm sm:text-base text-brand-text-secondary leading-relaxed font-light max-w-2xl mx-auto">
                We are profoundly honoured to announce the soft launch of{" "}
                <strong className="font-medium text-brand-plum-900">
                  Olenna StudioX — A Sahasra Business Solutions
                </strong>
                . Conceived with love for the discerning modern woman, Olenna StudioX
                unites luxurious skincare, bespoke fashion textiles, heirloom jewellery,
                and master tailoring artistry under one welcoming destination.
              </p>

              <p className="text-xs sm:text-sm text-brand-plum-800 font-serif italic max-w-xl mx-auto">
                &ldquo;May the radiant glow of Diwali and this auspicious soft launch illuminate your
                homes with boundless prosperity, timeless beauty, and cherished elegance.&rdquo;
              </p>
            </div>

            {/* Editorial Festive Diwali Visual Carousel */}
            <div className="relative my-6 max-w-2xl mx-auto">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden border-2 border-brand-champagne-400/50 shadow-lg ring-1 ring-brand-plum-900/10 group">
                <Image
                  key={festiveGallery[activeImageIndex].src}
                  src={assetPath(festiveGallery[activeImageIndex].src)}
                  alt={festiveGallery[activeImageIndex].alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 700px"
                  className="object-cover object-top transition-all duration-700 animate-in fade-in zoom-in-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-plum-950/85 via-transparent to-black/20" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3">
                  <span className="inline-block text-[10px] sm:text-xs tracking-widest uppercase font-semibold text-brand-champagne-200 bg-brand-plum-900/85 backdrop-blur-xs px-3 py-1 rounded-full border border-brand-champagne-400/40 shadow-xs">
                    {festiveGallery[activeImageIndex].tag}
                  </span>
                </div>

                {/* Bottom Caption */}
                <div className="absolute bottom-3 left-4 right-14 text-left">
                  <h4 className="text-sm sm:text-base text-white font-medium drop-shadow-xs">
                    {festiveGallery[activeImageIndex].title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-brand-champagne-100 font-light drop-shadow-xs line-clamp-1">
                    {festiveGallery[activeImageIndex].subtitle}
                  </p>
                </div>

                {/* Next / Prev Controls inside Carousel */}
                <button
                  type="button"
                  onClick={handlePrevImage}
                  aria-label="Previous festive image"
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-brand-plum-950/70 hover:bg-brand-plum-900 text-white flex items-center justify-center transition-colors border border-white/20"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNextImage}
                  aria-label="Next festive image"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-brand-plum-950/70 hover:bg-brand-plum-900 text-white flex items-center justify-center transition-colors border border-white/20"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Dot Indicators */}
              <div className="flex items-center justify-center gap-2 mt-3">
                {festiveGallery.map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    aria-label={`View ${item.title}`}
                    className={`transition-all rounded-full ${
                      idx === activeImageIndex
                        ? "w-7 h-2 bg-brand-champagne-600"
                        : "w-2 h-2 bg-brand-plum-900/20 hover:bg-brand-plum-900/40"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* 4 Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 pt-2 text-left">
              {/* Highlight 1 */}
              <div className="p-4 rounded-2xl bg-white/90 border border-brand-plum-900/10 shadow-2xs space-y-1">
                <span className="text-lg">🌸</span>
                <h4 className="font-serif text-sm font-medium text-brand-plum-900">
                  Beauty &amp; Cosmetics
                </h4>
                <p className="text-[11px] text-brand-text-muted leading-relaxed">
                  Skin-safe, dermatologically curated botanical skincare and radiant cosmetics.
                </p>
              </div>

              {/* Highlight 2 */}
              <div className="p-4 rounded-2xl bg-white/90 border border-brand-plum-900/10 shadow-2xs space-y-1">
                <span className="text-lg">👑</span>
                <h4 className="font-serif text-sm font-medium text-brand-plum-900">
                  Ethnic Wear &amp; Jewellery
                </h4>
                <p className="text-[11px] text-brand-text-muted leading-relaxed">
                  Artisanal sarees, regal Kundan ornaments, and timeless celebratory attire.
                </p>
              </div>

              {/* Highlight 3 */}
              <div className="p-4 rounded-2xl bg-white/90 border border-brand-plum-900/10 shadow-2xs space-y-1">
                <span className="text-lg">🪡</span>
                <h4 className="font-serif text-sm font-medium text-brand-plum-900">
                  Master Tailoring Studio
                </h4>
                <p className="text-[11px] text-brand-text-muted leading-relaxed">
                  Bespoke couture finishing, silk threads, zardozi trims &amp; design supplies.
                </p>
              </div>

              {/* Highlight 4 */}
              <div className="p-4 rounded-2xl bg-white/90 border border-brand-plum-900/10 shadow-2xs space-y-1">
                <span className="text-lg">📍</span>
                <h4 className="font-serif text-sm font-medium text-brand-plum-900">
                  Bangalore Workspace
                </h4>
                <p className="text-[11px] text-brand-text-muted leading-relaxed">
                  Physical store &amp; workspace opening soon. Operating hours will be announced upon launch.
                </p>
              </div>
            </div>

            {/* Official Soft Launch Seal & Info */}
            <div className="pt-4 pb-2 border-t border-brand-plum-900/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-text-secondary">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-brand-champagne-100 border border-brand-champagne-400/40 flex items-center justify-center text-brand-plum-900 font-serif font-bold text-xs">
                  ✦
                </div>
                <div className="text-left">
                  <p className="font-semibold text-brand-plum-900">
                    Olenna StudioX — A Sahasra Business Solutions
                  </p>
                  <p className="text-[11px] text-brand-text-muted">
                    Bengaluru, Karnataka • Support: support@olennastudiox.com
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-brand-plum-900/20 bg-white hover:bg-brand-blush-50 text-brand-plum-900 text-xs font-medium transition-colors shadow-2xs"
                aria-label="Share soft launch celebration wishes"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Link Copied!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5 text-brand-champagne-600" />
                    <span>Share Wishes</span>
                  </>
                )}
              </button>
            </div>

            {/* Poster Interactive Call to Actions */}
            <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
              <Button href="/#collections" variant="primary" size="md">
                <span>Explore Curated Collections</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>

              <Button href="/contact?type=vendor_onboarding" variant="outline" size="md">
                <span>Partner With Us</span>
              </Button>

              <Button href="/stores" variant="ghost" size="md">
                <Store className="w-4 h-4 mr-1.5" />
                <span>Visit Store Updates</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

