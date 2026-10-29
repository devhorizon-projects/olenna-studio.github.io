import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy Policy — Olenna",
  description: "Privacy policy and personal data protection principles for Olenna.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-brand-ivory-50 py-12 sm:py-16 min-h-screen">
      <Container size="narrow">
        {/* Header */}
        <div className="border-b border-brand-plum-900/10 pb-6 mb-8">
          <h1 className="text-3xl sm:text-4xl font-serif text-brand-plum-900 tracking-tight">
            Privacy Policy — Olenna
          </h1>
          <p className="text-xs sm:text-sm text-brand-text-muted mt-2 font-medium">
            Last Updated: October 29, 2026
          </p>
        </div>

        {/* Content Body */}
        <div className="text-brand-text-secondary text-sm sm:text-base space-y-6 leading-relaxed">
          <p>
            Olenna Retail Private Limited (&ldquo;Olenna,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
            operates the Olenna website, customer app/PWA, and online shopping services. This Privacy Policy
            explains what information we collect, how we use and protect it, and the choices available to you.
          </p>

          <p className="font-medium text-brand-plum-950">
            By using the Olenna app or website, you agree to this Privacy Policy.
          </p>

          {/* Information We Collect */}
          <section className="space-y-3 pt-2">
            <h2 className="text-xl font-serif text-brand-plum-900 border-b border-brand-plum-900/10 pb-2">
              Information We Collect
            </h2>
            <p>We may collect the following information:</p>
            <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
              <li>
                <strong className="text-brand-plum-950">Account information:</strong> name, email address,
                phone number, password, and profile details.
              </li>
              <li>
                <strong className="text-brand-plum-950">Order and payment information:</strong> delivery
                address, order history, preferred products, and transaction details. We do not store full card
                numbers, CVV, UPI PINs, or other sensitive payment credentials on our servers; payments are
                processed through secure third-party payment providers.
              </li>
              <li>
                <strong className="text-brand-plum-950">Contact/enquiry information:</strong> name, email,
                phone number, and message when you contact us.
              </li>
              <li>
                <strong className="text-brand-plum-950">Device and usage information:</strong> device model,
                operating system, app version, IP address, browser type, language, approximate location based
                on IP, pages viewed, and interactions with the app.
              </li>
              <li>
                <strong className="text-brand-plum-950">Permissions information:</strong> only if you grant
                permission, such as access to camera/gallery for profile photos or product images, notifications
                for order updates, and location for delivery or nearby-store features.
              </li>
              <li>
                <strong className="text-brand-plum-950">Cookies and similar technologies:</strong> to remember
                preferences, improve performance, analyse traffic, and support marketing where permitted.
              </li>
            </ul>
          </section>

          {/* How We Use Information */}
          <section className="space-y-3 pt-2">
            <h2 className="text-xl font-serif text-brand-plum-900 border-b border-brand-plum-900/10 pb-2">
              How We Use Information
            </h2>
            <p>We use your information to:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
              <li>Create and manage your Olenna account.</li>
              <li>Process orders, payments, deliveries, returns, refunds, and customer support requests.</li>
              <li>Send order confirmations, delivery updates, service notices, and security alerts.</li>
              <li>Respond to enquiries and improve our products, services, and customer experience.</li>
              <li>Personalise content, recommendations, offers, and promotions where you have consented.</li>
              <li>Detect fraud, prevent misuse, enforce our terms, and comply with legal obligations.</li>
              <li>Analyse app usage and website performance.</li>
            </ul>
          </section>

          {/* Legal Bases for Processing */}
          <section className="space-y-3 pt-2">
            <h2 className="text-xl font-serif text-brand-plum-900 border-b border-brand-plum-900/10 pb-2">
              Legal Bases for Processing
            </h2>
            <p>Where applicable, we process personal data based on:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
              <li>Your consent, such as for marketing communications or optional permissions.</li>
              <li>Performance of a contract, such as fulfilling an order.</li>
              <li>Legitimate business interests, such as improving services and preventing fraud.</li>
              <li>Compliance with legal or regulatory requirements.</li>
            </ul>
          </section>

          {/* Sharing of Information */}
          <section className="space-y-3 pt-2">
            <h2 className="text-xl font-serif text-brand-plum-900 border-b border-brand-plum-900/10 pb-2">
              Sharing of Information
            </h2>
            <p>We do not sell your personal information. We may share it only with:</p>
            <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
              <li>
                <strong className="text-brand-plum-950">Service providers:</strong> payment gateways,
                delivery/logistics partners, cloud hosting, analytics, communication, and customer-support
                providers.
              </li>
              <li>
                <strong className="text-brand-plum-950">Business partners:</strong> only where necessary to
                provide a requested service.
              </li>
              <li>
                <strong className="text-brand-plum-950">Authorities:</strong> when required by law, court
                order, government request, or to protect rights, safety, and property.
              </li>
              <li>
                <strong className="text-brand-plum-950">Corporate transactions:</strong> in connection with a
                merger, acquisition, or sale of assets, subject to appropriate safeguards.
              </li>
            </ul>
            <p className="text-xs sm:text-sm text-brand-text-secondary pt-1">
              All third parties are expected to use the information only to provide services to Olenna and to
              maintain appropriate confidentiality and security.
            </p>
          </section>

          {/* Data Retention */}
          <section className="space-y-3 pt-2">
            <h2 className="text-xl font-serif text-brand-plum-900 border-b border-brand-plum-900/10 pb-2">
              Data Retention
            </h2>
            <p className="text-xs sm:text-sm">
              We retain personal information only as long as necessary to provide services, fulfil orders,
              handle support and returns, comply with tax/accounting/legal requirements, and resolve disputes.
              When no longer required, we delete or anonymise it using reasonable measures.
            </p>
          </section>

          {/* Data Security */}
          <section className="space-y-3 pt-2">
            <h2 className="text-xl font-serif text-brand-plum-900 border-b border-brand-plum-900/10 pb-2">
              Data Security
            </h2>
            <p className="text-xs sm:text-sm">
              We use reasonable technical and organisational safeguards, including encrypted connections,
              access controls, and secure payment processing. No method of transmission or storage is completely
              secure, so we cannot guarantee absolute security.
            </p>
          </section>

          {/* Your Rights and Choices */}
          <section className="space-y-3 pt-2">
            <h2 className="text-xl font-serif text-brand-plum-900 border-b border-brand-plum-900/10 pb-2">
              Your Rights and Choices
            </h2>
            <p>Depending on your location and applicable law, you may request:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
              <li>Access to the personal information we hold about you.</li>
              <li>Correction of inaccurate or incomplete information.</li>
              <li>Deletion of your account or personal data, subject to legal retention requirements.</li>
              <li>Withdrawal of consent for marketing or optional data processing.</li>
              <li>Objection to or restriction of certain processing activities.</li>
              <li>A copy of your data in a portable format, where applicable.</li>
            </ul>
            <p className="text-xs sm:text-sm text-brand-text-secondary pt-1">
              To exercise these rights, contact us using the details below. We may verify your identity before
              processing a request.
            </p>
          </section>

          {/* Children’s Privacy */}
          <section className="space-y-3 pt-2">
            <h2 className="text-xl font-serif text-brand-plum-900 border-b border-brand-plum-900/10 pb-2">
              Children&rsquo;s Privacy
            </h2>
            <p className="text-xs sm:text-sm">
              Olenna services are not directed to children under 13 (or the minimum age required by local law).
              We do not knowingly collect personal information from children. If you believe a child has provided
              us with personal information, contact us and we will delete it.
            </p>
          </section>

          {/* Permissions */}
          <section className="space-y-3 pt-2">
            <h2 className="text-xl font-serif text-brand-plum-900 border-b border-brand-plum-900/10 pb-2">
              Permissions
            </h2>
            <p>The app may request permissions only when needed:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
              <li>
                <strong className="text-brand-plum-950">Notifications:</strong> order updates, offers, and
                account alerts.
              </li>
              <li>
                <strong className="text-brand-plum-950">Camera/gallery:</strong> uploading profile pictures or
                product-related images.
              </li>
              <li>
                <strong className="text-brand-plum-950">Location:</strong> delivery, store discovery, or
                location-based services.
              </li>
              <li>
                <strong className="text-brand-plum-950">Storage:</strong> saving or uploading files where
                required.
              </li>
            </ul>
            <p className="text-xs sm:text-sm text-brand-text-secondary pt-1">
              You can change or revoke permissions in your device settings at any time.
            </p>
          </section>

          {/* Third-Party Links and Services */}
          <section className="space-y-3 pt-2">
            <h2 className="text-xl font-serif text-brand-plum-900 border-b border-brand-plum-900/10 pb-2">
              Third-Party Links and Services
            </h2>
            <p className="text-xs sm:text-sm">
              Our app or website may contain links to third-party websites, payment services, or social
              platforms. Their privacy practices are governed by their own policies, and we encourage you to
              review them.
            </p>
          </section>

          {/* Changes to This Policy */}
          <section className="space-y-3 pt-2">
            <h2 className="text-xl font-serif text-brand-plum-900 border-b border-brand-plum-900/10 pb-2">
              Changes to This Policy
            </h2>
            <p className="text-xs sm:text-sm">
              We may update this Privacy Policy from time to time. We will post the updated version on this
              page and update the &ldquo;Last Updated&rdquo; date. Continued use of the app after changes means
              you accept the revised policy.
            </p>
          </section>

          {/* Contact Us */}
          <section className="space-y-3 pt-2">
            <h2 className="text-xl font-serif text-brand-plum-900 border-b border-brand-plum-900/10 pb-2">
              Contact Us
            </h2>
            <p className="text-xs sm:text-sm">
              For privacy questions, data access, correction, deletion requests, or complaints, contact:
            </p>
            <div className="bg-white p-6 rounded-2xl border border-brand-plum-900/10 space-y-2 text-xs sm:text-sm">
              <p className="font-semibold text-brand-plum-950 text-base">
                Olenna Retail Private Limited
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:info@olennastudiox.com"
                  className="text-brand-plum-900 underline font-medium hover:text-brand-plum-950"
                >
                  info@olennastudiox.com
                </a>
              </p>
              <p>
                <strong>Website:</strong>{" "}
                <a
                  href="https://olennastudiox.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-plum-900 underline font-medium hover:text-brand-plum-950"
                >
                  https://olennastudiox.com/
                </a>
              </p>
              <p>
                <strong>Address:</strong> Rajajinagar, Bangalore, Karnataka, India
              </p>
              <p className="pt-2 text-brand-text-muted text-xs">
                We aim to respond to privacy-related requests within a reasonable period and in accordance with applicable law.
              </p>
            </div>
          </section>

          {/* Back link */}
          <div className="pt-6 border-t border-brand-plum-900/10 flex items-center justify-between text-xs sm:text-sm">
            <Link
              href="/"
              className="text-brand-plum-900 font-medium hover:underline inline-flex items-center gap-1"
            >
              &larr; Return to Olenna Home
            </Link>
            <Link
              href="/terms"
              className="text-brand-text-muted hover:text-brand-plum-900 transition-colors"
            >
              View Terms of Use &rarr;
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
