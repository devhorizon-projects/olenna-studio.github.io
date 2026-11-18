import { Category } from "@/lib/models/category";
import { Store } from "@/lib/models/store";
import { HomepageContent } from "@/lib/models/content";
import { SiteSettings } from "@/lib/models/settings";

/**
 * Verified provisional placeholder content for Olenna public website.
 * Follows guidelines: clearly identified provisional data until production API is connected.
 */

export const MOCK_CATEGORIES: Category[] = [
  {
    id: "cat-beauty-cosmetics",
    slug: "beauty-cosmetics",
    name: "Beauty & Cosmetics",
    description: "Pure, toxin-free ayurvedic formulations, botanical serums, and ritual oils for enduring radiance.",
    longDescription:
      "Pure, toxin-free ayurvedic formulations, botanical serums, and ritual oils for enduring radiance. Each formulation is ethically sourced and dermatologist verified.",
    image: "/images/categories/beauty-cosmetics.webp",
    displayOrder: 1,
    isActive: true,
    destinationUrl: "/collections/beauty-cosmetics",
    highlights: ["Ayurvedic Formulations", "Botanical Serums", "Toxin-Free Radiance"],
    metaTitle: "Beauty & Cosmetics — Clean Formulations & Botanical Serums | Olenna StudioX",
    metaDescription: "Pure, toxin-free ayurvedic formulations, botanical serums, and ritual oils for enduring radiance at Olenna StudioX.",
  },
  {
    id: "cat-fashion-ethnic",
    slug: "fashion-ethnic",
    name: "Ethnic Wear & Silks",
    description: "Timeless handwoven silks, organzas, and georgettes crafted by master weavers from across India.",
    longDescription:
      "Timeless silhouettes meet royal Indian heritage. Intricately handwoven Banarasi, Kanjivaram, and Chanderi sarees crafted by master generational weavers.",
    image: "/images/categories/fashion-ethnic.webp",
    displayOrder: 2,
    isActive: true,
    destinationUrl: "/collections/fashion-ethnic",
    highlights: ["Pure Handloom Silks", "Artisanal Weaves", "Bespoke Draping Available"],
    metaTitle: "Ethnic Wear & Silks — Handwoven Sarees & Heritage Drapes | Olenna StudioX",
    metaDescription: "Timeless handwoven silks, organzas, and georgettes crafted by master weavers from across India at Olenna StudioX.",
  },
  {
    id: "cat-imitation-jewellery",
    slug: "imitation-jewellery",
    name: "Kundan & Polki Jewels",
    description: "Handcrafted bridal and heirloom jewels designed with rare uncut diamonds, emeralds, and heritage gold.",
    longDescription:
      "Heirloom-inspired jewellery crafted with meticulous detail. Opulent Kundan chokers, jadau earrings, and royal temple ornaments for celebratory grandeur.",
    image: "/images/categories/imitation-jewellery.webp",
    displayOrder: 3,
    isActive: true,
    destinationUrl: "/collections/imitation-jewellery",
    highlights: ["Micro 24K Gold Plated", "Semi-Precious Emeralds", "Hypoallergenic Finish"],
    metaTitle: "Kundan & Polki Jewels — Heritage Bridal Jewellery | Olenna StudioX",
    metaDescription: "Handcrafted bridal and heirloom jewels designed with rare uncut stones, emeralds, and heritage gold finishes.",
  },
  {
    id: "cat-handbags-accessories",
    slug: "handbags-accessories",
    name: "Handbags & Accessories",
    description: "Artisanal leather clutches, handcrafted potlis, and embroidered heirloom bags designed to complement.",
    longDescription:
      "The perfect finishing touch to bespoke couture. Hand-beaded potlis, structured vegan leather top-handles, and ornate bridal clutches.",
    image: "/images/categories/handbags-accessories.webp",
    displayOrder: 4,
    isActive: true,
    destinationUrl: "/collections/handbags-accessories",
    highlights: ["Handcrafted Potlis", "Vegan & Fine Leather", "Artisanal Zari Work"],
    metaTitle: "Handbags & Accessories — Artisanal Clutches & Potlis | Olenna StudioX",
    metaDescription: "Artisanal leather clutches, handcrafted potlis, and embroidered heirloom bags designed to complement your style.",
  },
  {
    id: "cat-personal-care",
    slug: "personal-care",
    name: "Personal Care & Wellness",
    description: "Artisanal fragrances, luxury body care, and bespoke wellness elixirs inspired by ancient royal rituals.",
    longDescription:
      "Indulgent self-care rituals crafted for deep wellness. Natural attars, botanical bath oils, and fragrant body butters.",
    image: "/images/categories/personal-care.webp",
    displayOrder: 5,
    isActive: true,
    destinationUrl: "/collections/personal-care",
    highlights: ["Royal Botanical Blends", "Natural Attars & Mists", "Holistic Wellness"],
    metaTitle: "Personal Care & Wellness — Luxury Body Elixirs | Olenna StudioX",
    metaDescription: "Artisanal fragrances, luxury body care, and bespoke wellness elixirs inspired by ancient royal rituals.",
  },
  {
    id: "cat-tailoring-supplies",
    slug: "tailoring-supplies",
    name: "Tailoring & Fashion",
    description: "Bespoke blouse design, lehenga customization, and made-to-measure bridal couture with our in-house atelier.",
    longDescription:
      "Bring your bespoke couture dreams to life. Private consultations with master patternmakers, custom zardozi embroidery, and precision fitting.",
    image: "/images/categories/tailoring-supplies.webp",
    displayOrder: 6,
    isActive: true,
    destinationUrl: "/collections/tailoring-supplies",
    highlights: ["Made-to-Measure Couture", "Master Patternmakers", "Private Atelier Fittings"],
    metaTitle: "Tailoring & Fashion — Bespoke Atelier Services | Olenna StudioX",
    metaDescription: "Bespoke blouse design, lehenga customization, and made-to-measure bridal couture with our in-house atelier.",
  },
  // Inactive / draft category for testing filter behaviour
  {
    id: "cat-kids-baby",
    slug: "kids-baby-essentials",
    name: "Kids & Baby Essentials",
    description: "Soft organic cotton wear and gentle baby accessories (Coming Soon).",
    image: "/images/categories/beauty-cosmetics.webp",
    displayOrder: 7,
    isActive: false, // Testing that inactive categories are filtered out
    destinationUrl: "/collections/kids-baby-essentials",
  },
];

export const MOCK_STORES: Store[] = [
  {
    id: "store-bangalore",
    slug: "bangalore",
    name: "Olenna StudioX — Bangalore",
    tagline: "Ladies / women corner — Boutique retail studio (Opening Soon)",
    addressLines: ["Bangalore"],
    locality: "Bangalore",
    city: "Bangalore",
    state: "Karnataka",
    postalCode: "560001",
    country: "India",
    coordinates: {
      latitude: 12.9716,
      longitude: 77.5946,
    },
    phone: "9741424695 | 08754443777",
    email: "olennastudiox@gmail.com",
    openingHours: [],
    specialHoursNotice: "Retail boutique store in progress — official launch date and store hours will be announced shortly.",
    directionsUrl: "https://maps.google.com/?q=Bangalore",
    image: "/images/stores/store-flagship.webp",
    isFeatured: true,
    isPublished: false, // In progress / opening soon
    displayOrder: 1,
    amenities: [
      "Ladies / Women's Corner",
      "Boutique Retail Experience",
      "Personal Styling Consultations",
      "Curated Accessories",
    ],
    createdAt: "2024-10-17T00:00:00Z",
    updatedAt: "2024-10-17T00:00:00Z",
  },
];

export const MOCK_HOMEPAGE_CONTENT: HomepageContent = {
  announcementBar: {
    isVisible: true,
    message: "DISCOVER OLENNA STUDIOX ✦ ARTISANAL MULTI-CATEGORY BOUTIQUE ✦ BANGALORE",
    highlightBadge: "Opening Soon",
    storeLocatorLabel: "OUR STORES",
    storeLocatorUrl: "/stores",
  },
  heroSection: {
    isVisible: true,
    slides: [
      {
        id: "hero-slide-celebrate",
        overline: "CURATED FOR CELEBRATIONS, WEDDINGS & EVERYDAY LUXURY",
        headline: "Radiance Redefined, Celebrate in Timeless Elegance.",
        subheadline:
          "Olenna StudioX is a haven for the modern Indian woman who seeks refined style, timeless craftsmanship, and understated luxury. From artisanal everyday wear to showstopping sarees and exquisite bespoke couture, every piece tells a story of heritage, passion, and fine living.",
        primaryCtaLabel: "EXPLORE THE COLLECTION",
        primaryCtaUrl: "/#collections",
        secondaryCtaLabel: "DISCOVER OUR STORY",
        secondaryCtaUrl: "/about",
        image: "/images/hero/hero-model.webp",
        imageAlt: "Olenna StudioX - Emperor's Heritage Bridal and Jewel Collection",
      },
    ],
  },
  categorySection: {
    isVisible: true,
    headline: "Six Pillars of Everyday & Festive Grandeur",
    subheadline:
      "Meticulously curated across bridal luxury, everyday elegance, clean beauty, and artisanal bespoke services.",
  },
  brandStory: {
    isVisible: true,
    overline: "THE ARTISANAL DIFFERENCE",
    headline: "The Olenna StudioX Experience",
    description:
      "A world where artisanal heritage meets contemporary grace.",
    ctaLabel: "Explore Atelier",
    ctaUrl: "/about",
    pillars: [
      {
        id: "pillar-curated",
        iconName: "shield",
        title: "Curated Exclusivity",
        description:
          "Every piece in our boutique is either one-of-a-kind or produced in limited editions, ensuring your style remains genuinely singular.",
      },
      {
        id: "pillar-luxury",
        iconName: "sparkles",
        title: "Artisanal Luxury",
        description:
          "Direct partnerships with award-winning master weavers, kundan artisans, and botanical formulators across India.",
      },
      {
        id: "pillar-atelier",
        iconName: "heart",
        title: "VIP Atelier Suite",
        description:
          "Private styling sessions, made-to-measure bridal consultations, and personalized trousseau curation with master couturiers.",
      },
    ],
  },
  storeDiscovery: {
    isVisible: true,
    headline: "Opening Soon in the HSR Layout : Indiranagar Corridor",
    subheadline:
      "Designed as an intimate private gallery, Olenna StudioX brings together 6 luxury lifestyle categories under one roof. Step into a world of curated grace.",
    ctaLabel: "Explore All Store Locations",
    ctaUrl: "/stores",
    image: "/images/stores/store-flagship.webp",
    imageAlt: "Olenna StudioX Flagship Boutique Store Bangalore",
  },
  pwaBanner: {
    isVisible: true,
    headline: "Shop Olenna Online – PAN-India & Express Bangalore Delivery",
    subheadline:
      "Experience the convenience of boutique shopping on your phone. Browse limited editions, book bespoke consultations, and enjoy white-glove delivery across Bangalore.",
    ctaLabel: "LAUNCH ONLINE PWA STORE",
    ctaUrl:
      process.env.NEXT_PUBLIC_CUSTOMER_PWA_URL ||
      "https://shop.olenna.in",
    image: "/images/promo/pwa-gift-box.webp",
    imageAlt: "Olenna Signature Gift Box with Silk Ribbon",
  },
};

export const MOCK_SITE_SETTINGS: SiteSettings = {
  brandName: "Olenna StudioX - A Sahasra Business Solutions",
  logoText: "OLENNA STUDIOX",
  tagline: "A haven for the modern Indian woman who seeks refined style, timeless craftsmanship, and understated luxury.",
  customerPwaUrl:
    process.env.NEXT_PUBLIC_CUSTOMER_PWA_URL || "https://shop.olenna.in",
  customerPwaLabel: "SHOP ONLINE PWA ↗",
  mainNavigation: [
    { id: "nav-home", label: "HOME", href: "/" },
    { id: "nav-stores", label: "OUR STORES", href: "/stores" },
    { id: "nav-about", label: "ABOUT US", href: "/about" },
    { id: "nav-contact", label: "CONTACT US", href: "/contact" },
  ],
  footerQuickLinks: [
    { id: "foot-home", label: "HOME", href: "/" },
    { id: "foot-stores", label: "OUR STORES", href: "/stores" },
    { id: "foot-about", label: "ABOUT US", href: "/about" },
    { id: "foot-contact", label: "CONTACT US", href: "/contact" },
  ],
  socialLinks: [], // Hidden for now per request
  contactDetails: {
    primaryPhone: "+919741424695",
    phoneDisplay: "9741424695 | 08754443777",
    primaryEmail: "olennastudiox@gmail.com",
    technicalEmail: "support@olennastudiox.com",
    supportHours: "Monday to Sunday, Daily Support IST",
    headquartersAddress:
      "Bangalore, Karnataka, India",
    isVerified: true,
  },
  copyrightText: "© 2026 Olenna StudioX - A Sahasra Business Solutions. All rights reserved.",
};
