import { Metadata } from "next";
import { SoftLaunchPoster } from "@/components/home/SoftLaunchPoster";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Official Soft Launch Celebration | Olenna StudioX - A Sahasra Business Solutions",
  description:
    "Celebrating the official soft launch of Olenna StudioX — A Sahasra Business Solutions. Discover our curated collections across beauty, ethnic fashion, imitation jewellery, accessories, personal care, and tailoring supplies.",
  alternates: {
    canonical: "/soft-launch",
  },
};

export default function SoftLaunchPage() {
  return (
    <div className="bg-brand-ivory-50 min-h-screen py-10 sm:py-16">
      <Container>
        <SoftLaunchPoster />
      </Container>
    </div>
  );
}

