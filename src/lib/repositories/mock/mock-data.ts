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
    description: "Premium makeup, luxury skincare serums, and radiant essentials.",
    longDescription:
      "Explore a handpicked sanctuary of premium beauty essentials. From nourishing skincare foundations to vibrant, long-lasting cosmetic palettes, each product is chosen to celebrate your natural glow.",
    image: "/images/categories/beauty-cosmetics.webp",
    displayOrder: 1,
    isActive: true,
    destinationUrl: "/collections/beauty-cosmetics",
    highlights: ["Dermatologically Tested", "Luxury Formulations", "Cruelty-Free Options"],
    metaTitle: "Beauty & Cosmetics — Curated Luxury Makeup & Skincare | Olenna StudioX - A Sahasra Business Solutions",
    metaDescription: "Discover luxury beauty, skincare serums, and premium cosmetics curated for modern women at Olenna StudioX - A Sahasra Business Solutions.",
  },
  {
    id: "cat-fashion-ethnic",
    slug: "fashion-ethnic",
    name: "Fashion & Ethnic Wear",
    description: "Handcrafted sarees, celebratory lehengas, and contemporary ethnic styles.",
    longDescription:
      "Timeless silhouettes meet modern grace. Our ethnic wear collection brings you intricately woven sarees, festive kurtas, and artisanal textiles designed for unforgettable moments and daily elegance.",
    image: "/images/categories/fashion-ethnic.webp",
    displayOrder: 2,
    isActive: true,
    destinationUrl: "/collections/fashion-ethnic",
    highlights: ["Pure Weaves", "Artisanal Embroidery", "Custom Fit Available in Stores"],
    metaTitle: "Fashion & Ethnic Wear — Sarees, Kurtas & Timeless Drapes | Olenna StudioX - A Sahasra Business Solutions",
    metaDescription: "Elevate your wardrobe with Olenna StudioX - A Sahasra Business Solutions's premium ethnic fashion, celebratory drapes, and artisanal craftsmanship.",
  },
  {
    id: "cat-imitation-jewellery",
    slug: "imitation-jewellery",
    name: "Imitation Jewellery",
    description: "Opulent Kundan, temple jewellery, and delicate zircon accents.",
    longDescription:
      "Adorn every celebration with heirloom-inspired jewellery crafted with meticulous detail. Explore exquisite bridal necklaces, timeless jhumkas, and minimalist daily sparkle.",
    image: "/images/categories/imitation-jewellery.webp",
    displayOrder: 3,
    isActive: true,
    destinationUrl: "/collections/imitation-jewellery",
    highlights: ["Micro Gold-Plated", "Semi-Precious Stones", "Hypoallergenic Finish"],
    metaTitle: "Imitation Jewellery — Kundan, Temple & Fashion Ornaments | Olenna StudioX - A Sahasra Business Solutions",
    metaDescription: "Statement earrings, Kundan bridal sets, and contemporary daily jewellery curated with regal aesthetics.",
  },
  {
    id: "cat-handbags-accessories",
    slug: "handbags-accessories",
    name: "Handbags & Accessories",
    description: "Sculpted leather totes, festive potlis, and everyday statement pieces.",
    longDescription:
      "The perfect finishing touch. From structured top-handle bags and work totes to embroidered clutches and ornate potlis, complete your ensemble with refined charm.",
    image: "/images/categories/handbags-accessories.webp",
    displayOrder: 4,
    isActive: true,
    destinationUrl: "/collections/handbags-accessories",
    highlights: ["Vegan & Fine Leather", "Ergonomic Storage", "Artisanal Hardware"],
    metaTitle: "Handbags & Accessories — Premium Clutches & Everyday Totes | Olenna StudioX - A Sahasra Business Solutions",
    metaDescription: "Discover structured bags, festive clutches, and timeless accessories designed for effortless sophistication.",
  },
  {
    id: "cat-personal-care",
    slug: "personal-care",
    name: "Personal Care & Hygiene",
    description: "Botanical body washes, gentle self-care rituals, and wellness essentials.",
    longDescription:
      "Gentle, indulgent care crafted for your daily wellness. Immerse in soothing fragrances, clean body care formulas, and trusted personal hygiene essentials.",
    image: "/images/categories/personal-care.webp",
    displayOrder: 5,
    isActive: true,
    destinationUrl: "/collections/personal-care",
    highlights: ["Botanical Extracts", "pH Balanced", "Gentle Care"],
    metaTitle: "Personal Care & Hygiene — Gentle Botanical Self-Care | Olenna StudioX - A Sahasra Business Solutions",
    metaDescription: "Indulgent body care rituals, nourishing lotions, and daily wellness essentials at Olenna StudioX - A Sahasra Business Solutions.",
  },
  {
    id: "cat-tailoring-supplies",
    slug: "tailoring-supplies",
    name: "Tailoring & Fashion Designing",
    description: "Fine silk threads, designer trims, zardozi borders, and tailoring supplies.",
    longDescription:
      "Bring your bespoke fashion dreams to life. We supply master-quality tailoring materials, vibrant threads, antique borders, buttons, and couture accessories.",
    image: "/images/categories/tailoring-supplies.webp",
    displayOrder: 6,
    isActive: true,
    destinationUrl: "/collections/tailoring-supplies",
    highlights: ["Silk & Metallic Threads", "Handcrafted Borders", "Bespoke Findings"],
    metaTitle: "Tailoring & Fashion Designing Supplies — Master Craftsmen Materials | Olenna StudioX - A Sahasra Business Solutions",
    metaDescription: "Premium tailoring supplies, luxury trims, threads, and bespoke accessories for fashion designers.",
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
    name: "Olenna StudioX - A Sahasra Business Solutions Studio & Workspace — Bangalore",
    tagline: "Ladies / women corner — Workspace & retail studio (Opening Soon)",
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
    openingHours: [
      { day: "Monday", open: "10:00 AM", close: "10:00 PM" },
      { day: "Tuesday", open: "10:00 AM", close: "10:00 PM" },
      { day: "Wednesday", open: "10:00 AM", close: "10:00 PM" },
      { day: "Thursday", open: "10:00 AM", close: "10:00 PM" },
      { day: "Friday", open: "10:00 AM", close: "10:00 PM" },
      { day: "Saturday", open: "10:00 AM", close: "10:00 PM" },
      { day: "Sunday", open: "10:00 AM", close: "10:00 PM" },
    ],
    specialHoursNotice: "Physical store in progress — opening soon in Bangalore!",
    directionsUrl: "https://maps.google.com/?q=Bangalore",
    image: "/images/stores/store-flagship.webp",
    isFeatured: false,
    isPublished: false, // In progress / opening soon
    displayOrder: 1,
    amenities: [
      "Ladies / Women's Corner",
      "Creative Workspace",
      "Personal Styling Consultations",
    ],
    createdAt: "2024-10-17T00:00:00Z",
    updatedAt: "2024-10-17T00:00:00Z",
  },
];

export const MOCK_HOMEPAGE_CONTENT: HomepageContent = {
  announcementBar: {
    isVisible: true,
    message: "Soft Launch Celebration ✦ Olenna StudioX - A Sahasra Business Solutions ✦ Ladies & Women's Corner ✦ Store opening soon in Bangalore",
    highlightBadge: "Soft Launch",
    storeLocatorLabel: "Store In Progress",
    storeLocatorUrl: "/stores",
  },
  heroSection: {
    isVisible: true,
    slides: [
      {
        id: "hero-slide-soft-launch",
        overline: "OFFICIAL SOFT LAUNCH EDITION ✦ BANGALORE",
        headline: "Warm wishes on our soft launch, everyday elegance.",
        subheadline:
          "Olenna StudioX — A Sahasra Business Solutions is delighted to announce our soft launch! Conceived as a refined sanctuary for modern women celebrating beauty, ethnic wear, Kundan jewellery, and curated accessories. Physical store & workspace opening soon in Bangalore.",
        primaryCtaLabel: "Explore Curated Collections",
        primaryCtaUrl: "/#collections",
        secondaryCtaLabel: "Partner With Us",
        secondaryCtaUrl: "/contact?type=vendor_onboarding",
        image: "/images/diwali/diwali-festive-model-landscape.jpg",
        imageAlt: "Olenna StudioX - A Sahasra Business Solutions Official Soft Launch Edition",
      },
      {
        id: "hero-slide-diwali",
        overline: "FESTIVE DIWALI CELEBRATION ✦ LIGHTS & LUXURY",
        headline: "Radiance redefined, celebrate in timeless elegance.",
        subheadline:
          "Illuminate your festivities with glowing handcrafted brass diyas, statement Kundan temple ornaments, and celebratory Banarasi silks.",
        primaryCtaLabel: "View Festive Jewellery",
        primaryCtaUrl: "/collections/imitation-jewellery",
        secondaryCtaLabel: "Store Updates",
        secondaryCtaUrl: "/stores",
        image: "/images/diwali/diwali-diya-luxury.jpg",
        imageAlt: "Olenna StudioX - A Sahasra Business Solutions Diwali Celebration of Lights",
      },
      {
        id: "hero-slide-boutique",
        overline: "LADIES & WOMEN'S CORNER",
        headline: "A refined sanctuary, curated for modern women.",
        subheadline:
          "From dermatologically tested beauty formulations to timeless handcrafted sarees and lifestyle essentials, discover styles made for you.",
        primaryCtaLabel: "Explore All Categories",
        primaryCtaUrl: "/#collections",
        secondaryCtaLabel: "Bangalore Workspace",
        secondaryCtaUrl: "/stores",
        image: "/images/hero/hero-model.webp",
        imageAlt: "Olenna StudioX - A Sahasra Business Solutions Model in Elegant Pink Ethnic Wear",
      },
      {
        id: "hero-slide-accessories",
        overline: "HANDBAGS & ACCESSORIES",
        headline: "Everyday elegance, made for you.",
        subheadline:
          "Sculpted leather totes, festive potlis, and everyday statement pieces designed for effortless sophistication.",
        primaryCtaLabel: "Explore Handbags",
        primaryCtaUrl: "/collections/handbags-accessories",
        secondaryCtaLabel: "Contact Concierge",
        secondaryCtaUrl: "/contact",
        image: "/images/diwali/diwali-boutique-banner.jpg",
        imageAlt: "Olenna StudioX - A Sahasra Business Solutions Handbags & Accessories Collection",
      },
    ],
  },
  categorySection: {
    isVisible: true,
    headline: "Explore our collections",
    subheadline: "A thoughtfully curated range for your everyday needs",
  },
  brandStory: {
    isVisible: true,
    overline: "THE OLENNA STUDIOX EXPERIENCE",
    headline: "More than a store, a part of your story.",
    description:
      "Olenna StudioX - A Sahasra Business Solutions brings together beauty, fashion and everyday essentials in one elegant destination. We curate products that inspire confidence and celebrate your unique style.",
    ctaLabel: "Learn About Olenna StudioX - A Sahasra Business Solutions",
    ctaUrl: "/about",
    pillars: [
      {
        id: "pillar-curated",
        iconName: "leaf",
        title: "Curated Selections",
        description: "Quality products for every occasion",
      },
      {
        id: "pillar-luxury",
        iconName: "diamond",
        title: "Everyday Luxury",
        description: "Style and care within reach",
      },
      {
        id: "pillar-you",
        iconName: "heart",
        title: "For Every You",
        description: "Because every story is unique",
      },
    ],
  },
  storeDiscovery: {
    isVisible: true,
    headline: "Our store is opening soon",
    subheadline:
      "We are setting up our exclusive workspace and retail studio in Bangalore. Official opening hours and launch dates will be announced shortly.",
    ctaLabel: "View Store Updates",
    ctaUrl: "/stores",
    image: "/images/stores/store-flagship.webp",
    imageAlt: "Olenna StudioX - A Sahasra Business Solutions Studio & Workspace Bangalore",
  },
  pwaBanner: {
    isVisible: true,
    headline: "Your next favourite find awaits",
    subheadline: "Explore our full range on the Olenna StudioX - A Sahasra Business Solutions Customer App.",
    ctaLabel: "Shop Online",
    ctaUrl:
      process.env.NEXT_PUBLIC_CUSTOMER_PWA_URL ||
      "https://shop.olenna.in",
    image: "/images/promo/pwa-gift-box.webp",
    imageAlt: "Olenna StudioX - A Sahasra Business Solutions Signature Gift Box with Silk Ribbon",
  },
};

export const MOCK_SITE_SETTINGS: SiteSettings = {
  brandName: "Olenna StudioX - A Sahasra Business Solutions",
  logoText: "OLENNA",
  tagline: "Ladies / Women's Corner — Everyday elegance, thoughtfully curated.",
  customerPwaUrl:
    process.env.NEXT_PUBLIC_CUSTOMER_PWA_URL || "https://shop.olenna.in",
  customerPwaLabel: "Shop Online",
  mainNavigation: [
    { id: "nav-home", label: "Home", href: "/" },
    { id: "nav-about", label: "About", href: "/about" },
    { id: "nav-stores", label: "Our Store", href: "/stores" },
    { id: "nav-contact", label: "Contact", href: "/contact" },
  ],
  footerQuickLinks: [
    { id: "foot-home", label: "Home", href: "/" },
    { id: "foot-about", label: "About", href: "/about" },
    { id: "foot-stores", label: "Our Store", href: "/stores" },
    { id: "foot-contact", label: "Contact", href: "/contact" },
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
