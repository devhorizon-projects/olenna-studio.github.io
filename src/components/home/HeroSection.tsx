"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles, MapPin } from "lucide-react";
import { HeroSectionContent } from "@/lib/models/content";
import { Button } from "@/components/ui/Button";
import { assetPath } from "@/lib/utils/assetPath";

interface HeroSectionProps {
  content: HeroSectionContent;
}

export function HeroSection({ content }: HeroSectionProps) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = content.slides || [];
  const totalSlides = slides.length;

  useEffect(() => {
    if (totalSlides <= 1 || isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % totalSlides);
    }, 6000);

    return () => clearInterval(timer);
  }, [totalSlides, isPaused]);

  if (!content.isVisible || !slides.length) {
    return null;
  }

  const currentSlide = slides[currentSlideIndex] || slides[0];

  const handlePrev = () => {
    setCurrentSlideIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlideIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const isSoftLaunchSlide = currentSlide.overline.includes("SOFT LAUNCH");

  return (
    <section
      className="relative bg-[#FAF1F4] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Featured Carousel"
    >
      {/* Decorative subtle background gradient */}
      <div className="absolute inset-0 bg-radial-[at_top_right] from-brand-blush-100/60 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1 z-10">
            <div className="inline-flex items-center gap-2 mb-3">
              {isSoftLaunchSlide ? (
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-brand-blush-100 via-brand-champagne-100 to-brand-blush-100 border-2 border-brand-champagne-400/60 text-[11px] sm:text-xs font-bold tracking-[0.2em] text-brand-plum-950 uppercase shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-brand-champagne-600 animate-pulse" />
                  {currentSlide.overline}
                </span>
              ) : (
                <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-brand-plum-700 uppercase">
                  {currentSlide.overline}
                </span>
              )}
            </div>

            {isSoftLaunchSlide && (
              <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-brand-champagne-600 uppercase mb-2">
                Olenna StudioX — A Sahasra Business Solutions
              </p>
            )}

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-serif font-normal text-brand-plum-900 leading-[1.15] tracking-tight mb-5">
              {currentSlide.headline.split(",").length > 1 ? (
                <>
                  {currentSlide.headline.split(",")[0]},<br />
                  <span className="italic font-light">
                    {currentSlide.headline.split(",").slice(1).join(",")}
                  </span>
                </>
              ) : (
                currentSlide.headline
              )}
            </h1>

            <p className="text-sm sm:text-base text-brand-text-secondary leading-relaxed font-light max-w-lg mb-4">
              {currentSlide.subheadline}
            </p>

            {isSoftLaunchSlide && (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/95 border border-brand-champagne-400/50 text-xs sm:text-sm text-brand-plum-950 mb-6 font-medium shadow-2xs">
                <MapPin className="w-4 h-4 text-brand-champagne-600 shrink-0" />
                <span>Bangalore • Physical Store &amp; Workspace Opening Soon</span>
              </div>
            )}

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <Button
                href={currentSlide.primaryCtaUrl}
                variant="primary"
                size="lg"
                className="group shadow-sm hover:shadow-md"
              >
                <span>{currentSlide.primaryCtaLabel}</span>
                <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </Button>

              {currentSlide.secondaryCtaLabel && currentSlide.secondaryCtaUrl && (
                <Button
                  href={currentSlide.secondaryCtaUrl}
                  variant="outline"
                  size="lg"
                >
                  {currentSlide.secondaryCtaLabel}
                </Button>
              )}
            </div>

            {/* Slider Indicator & Navigation Controls */}
            <div className="flex items-center gap-6 pt-4 border-t border-brand-plum-900/10">
              {/* Clickable Slide Dots & Numbers */}
              <div className="flex items-center gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setCurrentSlideIndex(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`transition-all rounded-full ${
                      i === currentSlideIndex
                        ? "w-8 h-2 bg-brand-plum-900"
                        : "w-2 h-2 bg-brand-plum-900/25 hover:bg-brand-plum-900/50"
                    }`}
                  />
                ))}
                <span className="text-xs font-semibold text-brand-plum-900 ml-2">
                  {String(currentSlideIndex + 1).padStart(2, "0")} / {String(totalSlides).padStart(2, "0")}
                </span>
              </div>

              <div className="flex items-center gap-2 ml-auto">
                <button
                  onClick={handlePrev}
                  aria-label="Previous slide"
                  className="w-9 h-9 rounded-full border border-brand-plum-900/20 bg-white/70 hover:bg-white text-brand-plum-900 flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-plum-900 shadow-2xs"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next slide"
                  className="w-9 h-9 rounded-full border border-brand-plum-900/20 bg-white/70 hover:bg-white text-brand-plum-900 flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-plum-900 shadow-2xs"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Model */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] rounded-2xl overflow-hidden shadow-xl ring-1 ring-brand-plum-900/10 bg-brand-blush-100 mx-auto lg:ml-auto">
              <Image
                key={currentSlide.image}
                src={assetPath(currentSlide.image)}
                alt={currentSlide.imageAlt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                className="object-cover object-center transition-all duration-700 animate-in fade-in zoom-in-95 hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
