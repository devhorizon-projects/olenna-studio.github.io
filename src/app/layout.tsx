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
    default: "Olenna StudioX - A Sahasra Business Solutions — Everyday Elegance, Thoughtfully Curated",
    template: "%s | Olenna StudioX - A Sahasra Business Solutions",
  },
  description:
    "Discover Olenna StudioX - A Sahasra Business Solutions — a premium retail destination celebrating beauty, fashion, ethnic wear, imitation jewellery, accessories, personal care, and tailoring supplies.",
  keywords: [
    "Olenna StudioX - A Sahasra Business Solutions",
    "Olenna StudioX",
    "Olenna",
    "Sahasra Business Solutions",
    "premium retail",
    "ethnic wear",
    "beauty cosmetics",
    "imitation jewellery",
    "handbags accessories",
    "personal care",
    "tailoring supplies",
  ],
  openGraph: {
    title: "Olenna StudioX - A Sahasra Business Solutions — Everyday Elegance, Thoughtfully Curated",
    description:
      "A premium multi-category retail brand celebrating beauty, timeless fashion, and lifestyle essentials by Olenna StudioX - A Sahasra Business Solutions.",
    url: "https://olennastudiox.com",
    siteName: "Olenna StudioX - A Sahasra Business Solutions",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/logo/olenna-logo-full.png",
        width: 1057,
        height: 853,
        alt: "Olenna StudioX - A Sahasra Business Solutions — Luxury Beauty, Fashion & Lifestyle",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/icon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-48x48.png", type: "image/png", sizes: "48x48" },
      { url: "/icon-192x192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
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
