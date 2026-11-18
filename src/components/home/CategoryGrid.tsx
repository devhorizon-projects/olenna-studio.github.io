import React from "react";
import { Category } from "@/lib/models/category";
import { CategorySectionContent } from "@/lib/models/content";
import { CategoryCard } from "./CategoryCard";

interface CategoryGridProps {
  categories: Category[];
  content: CategorySectionContent;
}

export function CategoryGrid({ categories, content }: CategoryGridProps) {
  if (!content.isVisible || categories.length === 0) {
    return null;
  }

  return (
    <section id="collections" className="py-16 sm:py-20 bg-brand-ivory-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Title on Left, Subtitle on Right (Figma Desktop Mockup) */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10 sm:mb-12 border-b border-brand-plum-900/10 pb-6">
          <div className="max-w-xl">
            <span className="text-[11px] font-semibold tracking-[0.25em] text-brand-plum-700 uppercase">
              CURATED CATEGORIES
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal text-brand-plum-900 tracking-tight mt-2">
              {content.headline}
            </h2>
          </div>
          {content.subheadline && (
            <p className="text-sm sm:text-base text-brand-text-secondary font-light max-w-md lg:text-right leading-relaxed">
              {content.subheadline}
            </p>
          )}
        </div>

        {/* 3 Columns × 2 Rows Responsive Grid (Figma Desktop Mockup) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
