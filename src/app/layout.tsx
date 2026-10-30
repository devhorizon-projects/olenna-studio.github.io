import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ToastProvider } from "@/components/ui/Toast";
import { getSiteSettingsRepository, getSiteContentRepository } from "@/lib/repositories";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://olennastudiox.com"),
  title: {
    default: "Olenna StudioX — Everyday Elegance, Thoughtfully Curated",
    template: "%s | Olenna StudioX",
  },
  description:
    "Discover Olenna StudioX — a premium retail destination celebrating beauty, fashion, ethnic wear, imitation jewellery, accessories, personal care, and tailoring supplies.",
  keywords: [
    "Olenna",
    "Olenna StudioX",
    "premium retail",
    "ethnic wear",
    "beauty cosmetics",
    "imitation jewellery",
    "handbags accessories",
    "personal care",
    "tailoring supplies",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Olenna StudioX — Everyday Elegance, Thoughtfully Curated",
    description:
      "A premium multi-category retail brand celebrating beauty, timeless fashion, and lifestyle essentials.",
    url: "https://olennastudiox.com",
    siteName: "Olenna StudioX",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/logo/olenna-logo-full.png",
        width: 1057,
        height: 853,
        alt: "Olenna StudioX — Luxury Beauty, Fashion & Lifestyle",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Olenna StudioX — Everyday Elegance, Thoughtfully Curated",
    description:
      "A premium multi-category retail brand celebrating beauty, timeless fashion, and lifestyle essentials.",
    images: ["/images/logo/olenna-logo-full.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-48x48.png", type: "image/png", sizes: "48x48" },
      { url: "/icon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/icon-144x144.png", type: "image/png", sizes: "144x144" },
      { url: "/icon-192x192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#493541",
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settingsRepo = getSiteSettingsRepository();
  const contentRepo = getSiteContentRepository();

  const [settings, announcement] = await Promise.all([
    settingsRepo.getSiteSettings(),
    contentRepo.getAnnouncementBar(),
  ]);

  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable} h-full antialiased`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="48x48" href="/icon-48x48.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/icon-96x96.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192x192.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="min-h-full flex flex-col bg-brand-ivory-50 text-brand-text-primary selection:bg-brand-mauve-200 selection:text-brand-plum-950 font-sans">
        <ToastProvider>
          <AnnouncementBar announcement={announcement} settings={settings} />
          <Header settings={settings} />
          <main className="flex-1">{children}</main>
          <Footer settings={settings} />
        </ToastProvider>
      </body>
    </html>
  );
}
