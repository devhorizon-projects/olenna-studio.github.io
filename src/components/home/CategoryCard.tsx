import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Category } from "@/lib/models/category";
import { assetPath } from "@/lib/utils/assetPath";

interface CategoryCardProps {
  category: Category;
}

const ACTION_LABELS: Record<string, string> = {
  "beauty-cosmetics": "Discover Clean Beauty",
  "fashion-ethnic": "Explore Ready-to-Wear",
  "imitation-jewellery": "View Bridal Jewelry",
  "handbags-accessories": "Shop Accessories",
  "personal-care": "Explore Wellness",
  "tailoring-supplies": "Book Bespoke Atelier",
};

export function CategoryCard({ category }: CategoryCardProps) {
  const destination = category.destinationUrl || `/collections/${category.slug}`;
  const actionLabel = ACTION_LABELS[category.slug] || "Explore Collection";

  return (
    <Link
      href={destination}
      className="group relative flex flex-col justify-between bg-[#FBF6F7] hover:bg-[#F7EEF1] border border-brand-plum-900/10 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-plum-900"
    >
      <div>
        {/* Category Image Box */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-brand-blush-100 mb-4 shadow-2xs">
          <Image
            src={assetPath(category.image)}
            alt={category.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Title */}
        <h3 className="font-serif text-lg sm:text-xl font-medium text-brand-plum-900 leading-snug group-hover:text-brand-plum-950 transition-colors">
          {category.name}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-brand-text-secondary font-light leading-relaxed mt-2 mb-6">
          {category.description}
        </p>
      </div>

      {/* Action Footer */}
      <div className="pt-2 border-t border-brand-plum-900/10 flex items-center justify-between">
        <span className="text-xs font-semibold tracking-wider text-brand-plum-800 uppercase group-hover:text-brand-plum-950 transition-colors">
          {actionLabel}
        </span>
        <div className="w-7 h-7 rounded-full bg-white group-hover:bg-brand-plum-900 text-brand-plum-900 group-hover:text-white flex items-center justify-center border border-brand-plum-900/15 shadow-2xs transition-colors shrink-0">
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
        </div>
      </div>
    </Link>
  );
}
