import React from "react";
import { Sparkles, Gem, Leaf, Shield, Crown } from "lucide-react";
import { BrandStoryContent, BrandPillar } from "@/lib/models/content";

interface BrandStoryProps {
  content: BrandStoryContent;
}

export function BrandStory({ content }: BrandStoryProps) {
  if (!content.isVisible) {
    return null;
  }

  const renderIcon = (name: string) => {
    switch (name) {
      case "leaf":
        return <Leaf className="w-5 h-5 text-[#DFC7B0] stroke-[1.5]" />;
      case "diamond":
        return <Gem className="w-5 h-5 text-[#DFC7B0] stroke-[1.5]" />;
      case "heart":
        return <Crown className="w-5 h-5 text-[#DFC7B0] stroke-[1.5]" />;
      case "shield":
        return <Shield className="w-5 h-5 text-[#DFC7B0] stroke-[1.5]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#DFC7B0] stroke-[1.5]" />;
    }
  };

  return (
    <section className="relative py-20 sm:py-24 bg-[#241322] text-white overflow-hidden">
      {/* Subtle ambient luxury glow in background */}
      <div
        className="absolute inset-0 bg-radial-[at_top_center] from-[#3D2039]/60 via-transparent to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Centered Editorial Header (Figma Desktop Mockup) */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#DFC7B0] uppercase">
            {content.overline || "THE ARTISANAL DIFFERENCE"}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-white tracking-tight mt-3">
            {content.headline}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-white/70 font-light leading-relaxed">
            {content.description}
          </p>
        </div>

        {/* 3 Pillars Row (Figma Desktop Mockup) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {content.pillars.map((pillar: BrandPillar) => (
            <div
              key={pillar.id}
              className="flex flex-col items-start p-7 sm:p-8 bg-white/[0.04] hover:bg-white/[0.08] backdrop-blur-xs rounded-2xl border border-white/10 shadow-lg transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-5 border border-white/10">
                {renderIcon(pillar.iconName)}
              </div>
              <h3 className="font-serif text-xl font-medium text-white mb-2">
                {pillar.title}
              </h3>
              <p className="text-sm text-white/70 font-light leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
