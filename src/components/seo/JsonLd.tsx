import React from "react";
import { Store } from "@/lib/models/store";

interface OrganizationJsonLdProps {
  url?: string;
  name?: string;
  logo?: string;
}

export function OrganizationJsonLd({
  url = "https://olennastudiox.com",
  name = "Olenna StudioX",
  logo = "https://olennastudiox.com/images/logo/olenna-logo-full.png",
}: OrganizationJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "RetailStore",
    name,
    legalName: "Sahasra Business Solutions",
    alternateName: "Olenna StudioX, a Brand of Sahasra Business Solutions",
    parentOrganization: {
      "@type": "Organization",
      name: "Sahasra Business Solutions",
      description: "Sahasra Business Solutions partnership firm operates Olenna StudioX as its brand.",
    },
    url,
    logo,
    description:
      "Olenna StudioX, a Brand of Sahasra Business Solutions — A premium multi-category retail brand celebrating beauty, timeless fashion, ethnic wear, imitation jewellery, accessories, personal care, and tailoring supplies.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface StoreJsonLdProps {
  store: Store;
}

export function StoreJsonLd({ store }: StoreJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ClothingStore",
    name: store.name,
    description: store.tagline || `${store.name} — Olenna retail boutique`,
    address: {
      "@type": "PostalAddress",
      streetAddress: store.addressLines.join(", "),
      addressLocality: store.locality,
      addressRegion: store.state,
      postalCode: store.postalCode,
      addressCountry: store.country,
    },
    ...(store.phone ? { telephone: store.phone } : {}),
    ...(store.email ? { email: store.email } : {}),
    ...(store.coordinates
      ? {
          geo: {
            "@type": "GeoCoordinates",
            latitude: store.coordinates.latitude,
            longitude: store.coordinates.longitude,
          },
        }
      : {}),
    ...(store.openingHours.length > 0
      ? {
          openingHoursSpecification: store.openingHours
            .filter((h) => !h.isClosed)
            .map((h) => ({
              "@type": "OpeningHoursSpecification",
              dayOfWeek: h.day,
              opens: h.open,
              closes: h.close,
            })),
        }
      : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
