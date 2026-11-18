import { Metadata } from "next";
import {
  getSiteContentRepository,
  getCategoryRepository,
  getStoreRepository,
} from "@/lib/repositories";
import { HeroSection } from "@/components/home/HeroSection";
import { StoreDiscovery } from "@/components/home/StoreDiscovery";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { BrandStory } from "@/components/home/BrandStory";
import { CustomerPwaBanner } from "@/components/home/CustomerPwaBanner";
import { ArtisanPartnerBanner } from "@/components/home/ArtisanPartnerBanner";
import { PhilosophyQuote } from "@/components/home/PhilosophyQuote";
import { PartnershipPopup } from "@/components/home/PartnershipPopup";
import { OrganizationJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Everyday Elegance, Thoughtfully Curated | Olenna StudioX",
  description:
    "Explore Olenna StudioX — premium beauty, ethnic fashion, imitation jewellery, accessories, personal care, and tailoring supplies. Discover our boutiques and shop online.",
  alternates: {
    canonical: "/",
  },
};

export default async function HomePage() {
  const contentRepo = getSiteContentRepository();
  const categoryRepo = getCategoryRepository();
  const storeRepo = getStoreRepository();

  const [homepageContent, activeCategories, featuredStores] = await Promise.all([
    contentRepo.getHomepageContent(),
    categoryRepo.getActiveCategories(),
    storeRepo.getFeaturedStores(),
  ]);

  return (
    <>
      <OrganizationJsonLd />
      <PartnershipPopup />

      {/* 1. Hero Section (Figma Desktop Mockup) */}
      <HeroSection content={homepageContent.heroSection} />

      {/* 2. Flagship Boutique Corridor & Inaugural Greetings (Figma Desktop Mockup) */}
      <StoreDiscovery
        content={homepageContent.storeDiscovery}
        featuredStores={featuredStores}
      />

      {/* 3. Six Pillars of Everyday & Festive Grandeur (Figma Desktop Mockup) */}
      <CategoryGrid
        categories={activeCategories}
        content={homepageContent.categorySection}
      />

      {/* 4. The Olenna StudioX Experience - Dark Luxury Section (Figma Desktop Mockup) */}
      <BrandStory content={homepageContent.brandStory} />

      {/* 5. Online PWA & Express Bangalore Delivery (Figma Desktop Mockup) */}
      <CustomerPwaBanner content={homepageContent.pwaBanner} />

      {/* 6. Grow With Us - Artisan & Vendor Partnership Banner (Figma Desktop Mockup) */}
      <ArtisanPartnerBanner />

      {/* 7. Philosophy Quote (Figma Desktop Mockup) */}
      <PhilosophyQuote />
    </>
  );
}
