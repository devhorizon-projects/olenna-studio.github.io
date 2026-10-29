import { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Terms of Use | Olenna",
  description: "Terms and conditions of use for Olenna's public brand website.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsOfUsePage() {
  return (
    <div className="bg-brand-ivory-50 py-12 sm:py-16 min-h-screen">
      <Container size="narrow">
        <h1 className="text-3xl sm:text-4xl font-serif text-brand-plum-900 mb-6">
          Terms of Use
        </h1>
        <div className="prose prose-brand text-brand-text-secondary text-sm sm:text-base space-y-6 leading-relaxed">
          <p>
            Last Updated: October 2026
          </p>
          <p>
            Welcome to Olenna StudioX. By accessing or using our mobile application and brand website, you agree to comply with and be bound by these terms of use.
          </p>

          <h2 className="text-xl font-serif text-brand-plum-900 pt-4">
            1. Platform & Store Services
          </h2>
          <p>
            Olenna StudioX provides brand showcases, physical boutique directories, curated luxury collections, and online shopping services operated by Olenna StudioX | A Sahasra Business Solutions.
          </p>

          <h2 className="text-xl font-serif text-brand-plum-900 pt-4">
            2. Intellectual Property
          </h2>
          <p>
            All content, including brand logos, editorial photography, typography, and application designs, are the property of Olenna StudioX | A Sahasra Business Solutions or its licensors.
          </p>

          <h2 className="text-xl font-serif text-brand-plum-900 pt-4">
            3. Contact & Support
          </h2>
          <p>
            For questions regarding these terms, please contact our support team at{" "}
            <a href="mailto:support@olennastudiox.com" className="text-brand-plum-900 underline font-medium">
              support@olennastudiox.com
            </a>
            .
          </p>
        </div>
      </Container>
    </div>
  );
}
