import { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Mail, MapPin, Trash2, Phone, AlertCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy Policy | Olenna StudioX",
  description:
    "Comprehensive Privacy Policy and Data Safety disclosures for the Olenna StudioX mobile application and web services, compliant with Google Play Store Developer Policies.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-brand-ivory-50 py-12 sm:py-16 min-h-screen">
      <Container size="narrow">
        {/* Header */}
        <div className="border-b border-brand-plum-900/10 pb-8 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-mauve-200/50 text-brand-plum-900 text-xs font-medium mb-3">
            <ShieldCheck className="w-4 h-4 text-brand-plum-700" />
            <span>Google Play Store Compliant Policy</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif text-brand-plum-900 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-brand-text-muted mt-2">
            <strong>Entity:</strong> Olenna StudioX | A Sahasra Business Solutions &bull;{" "}
            <strong>Last Updated & Effective:</strong> October 2026
          </p>
        </div>

        {/* Content Body */}
        <div className="text-brand-text-secondary text-sm sm:text-base space-y-8 leading-relaxed">
          {/* Introduction */}
          <section className="space-y-3">
            <p>
              Welcome to <strong>Olenna StudioX</strong>. This Privacy Policy governs your use of the
              Olenna StudioX mobile application (available on Google Play) and our associated digital
              platforms (collectively, the &ldquo;App&rdquo; or &ldquo;Services&rdquo;), operated by{" "}
              <strong>Olenna StudioX | A Sahasra Business Solutions</strong> (&ldquo;Olenna StudioX&rdquo;,
              &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;).
            </p>
            <p>
              We are committed to safeguarding your privacy and ensuring transparency in how personal and
              sensitive user data is collected, handled, and protected. This policy is designed in strict
              compliance with applicable privacy legislation and the{" "}
              <strong>Google Play Developer Program Policies (including the User Data and Data Safety standards)</strong>.
            </p>
          </section>

          {/* Quick Notice: Account & Data Deletion Highlight Box */}
          <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-amber-950 flex items-start gap-3.5">
            <Trash2 className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm space-y-1">
              <p className="font-semibold text-amber-900">
                Google Play Data Safety &amp; Account Deletion Notice
              </p>
              <p className="text-amber-900/90 leading-relaxed">
                You retain full control over your personal data. You may request the deletion of your account
                and all associated personal data at any time either within the App settings or by sending an
                email to{" "}
                <a
                  href="mailto:support@olennastudiox.com?subject=Account%20and%20Data%20Deletion%20Request"
                  className="underline font-semibold hover:text-amber-950"
                >
                  support@olennastudiox.com
                </a>
                . Please review{" "}
                <a href="#data-deletion" className="underline font-semibold hover:text-amber-950">
                  Section 7 (Account &amp; Data Deletion)
                </a>{" "}
                for full step-by-step instructions.
              </p>
            </div>
          </div>

          {/* 1. Information We Collect */}
          <section className="space-y-4">
            <h2 className="text-xl font-serif text-brand-plum-900 pt-2 border-b border-brand-plum-900/10 pb-2">
              1. Information We Collect
            </h2>
            <p>
              Depending on how you interact with our App and Services, we may collect the following
              categories of personal information:
            </p>
            <div className="space-y-3 pl-2 sm:pl-4 text-xs sm:text-sm">
              <div>
                <strong className="text-brand-plum-950">A. Personal Identification &amp; Contact Details:</strong>
                <p className="mt-0.5">
                  Name, email address, mobile phone number, shipping address, and billing address provided
                  when you create an account, place an order, or reach out to our customer concierge.
                </p>
              </div>
              <div>
                <strong className="text-brand-plum-950">B. Location Information:</strong>
                <p className="mt-0.5">
                  With your explicit permission, we may access approximate (coarse) or precise location data to
                  help you identify nearby Olenna physical boutiques, calculate estimated delivery times, or
                  provide accurate regional collection availability. You can disable location access at any
                  time through your device system settings.
                </p>
              </div>
              <div>
                <strong className="text-brand-plum-950">C. Financial &amp; Payment Data:</strong>
                <p className="mt-0.5">
                  All digital payments are processed through certified, PCI-DSS compliant payment gateways
                  (such as Razorpay / UPI / NetBanking providers). Olenna StudioX does <strong>not</strong>{" "}
                  store your complete credit/debit card numbers or bank credentials on our servers.
                </p>
              </div>
              <div>
                <strong className="text-brand-plum-950">D. Technical &amp; Device Information:</strong>
                <p className="mt-0.5">
                  Device model, operating system version, unique device identifiers, IP address, network
                  carrier, app version, crash diagnostic logs, and performance metrics collected automatically
                  to ensure smooth app performance.
                </p>
              </div>
              <div>
                <strong className="text-brand-plum-950">E. Customer Communications:</strong>
                <p className="mt-0.5">
                  Records of your communications with our team, such as enquiries sent via our concierge
                  contact form, feedback, or appointment scheduling requests.
                </p>
              </div>
            </div>
          </section>

          {/* 2. Device Permissions */}
          <section className="space-y-3">
            <h2 className="text-xl font-serif text-brand-plum-900 pt-2 border-b border-brand-plum-900/10 pb-2">
              2. Mobile App Device Permissions
            </h2>
            <p>
              Our Android app may request specific system permissions to deliver core functionality. Each
              permission is requested dynamically with clear rationale:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
              <li>
                <strong>Location (ACCESS_COARSE_LOCATION / ACCESS_FINE_LOCATION):</strong> Used strictly to
                locate the closest Olenna Studio boutique and show store directions.
              </li>
              <li>
                <strong>Notifications (POST_NOTIFICATIONS):</strong> Used to notify you about order status
                updates, delivery alerts, appointment confirmations, and important service announcements. You
                may opt out anytime via your device notification preferences.
              </li>
              <li>
                <strong>Camera / Media (Optional):</strong> If you choose to upload images for custom tailoring
                measurement requests, bridal styling references, or customer support documentation.
              </li>
            </ul>
          </section>

          {/* 3. How We Use Your Information */}
          <section className="space-y-3">
            <h2 className="text-xl font-serif text-brand-plum-900 pt-2 border-b border-brand-plum-900/10 pb-2">
              3. Purpose and Legal Grounds of Processing
            </h2>
            <p>We process collected information strictly for legitimate business and service purposes:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
              <li>To create and manage your customer account across our mobile app and digital storefront.</li>
              <li>To process, fulfill, and ship retail orders, custom tailoring, and accessories.</li>
              <li>To send transactional notifications, invoices, order confirmations, and dispatch tracking.</li>
              <li>To provide responsive customer support and respond to customer concierge inquiries.</li>
              <li>To detect and prevent fraudulent activities, unauthorized access, and security breaches.</li>
              <li>To optimize app responsiveness, fix software bugs, and enhance UI/UX stability.</li>
              <li>To comply with statutory financial, taxation, and legal requirements.</li>
            </ul>
          </section>

          {/* 4. Third-Party Sharing & Disclosure */}
          <section className="space-y-3">
            <h2 className="text-xl font-serif text-brand-plum-900 pt-2 border-b border-brand-plum-900/10 pb-2">
              4. Data Sharing &amp; Third-Party Services
            </h2>
            <p>
              <strong>We do not sell, rent, lease, or monetize your personal information to third parties.</strong>
            </p>
            <p>
              We only disclose necessary data to verified service partners bound by strict data confidentiality
              agreements, solely to enable App functionality:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
              <li>
                <strong>Google Play Services:</strong> Core Android runtime support, app updates, and crash
                diagnostics.
              </li>
              <li>
                <strong>Payment Gateways:</strong> Certified PCI-DSS payment partners that facilitate encrypted
                online financial transactions.
              </li>
              <li>
                <strong>Logistics &amp; Courier Partners:</strong> Delivery carriers (for shipping addresses and
                contact phone numbers for dispatch communication).
              </li>
              <li>
                <strong>Transactional Email &amp; Cloud Infrastructure:</strong> Cloud hosting (Render / AWS)
                and email dispatch systems for sending customer receipts and inquiry responses.
              </li>
              <li>
                <strong>Legal Authorities:</strong> Disclosed only if compelled by law, subpoena, or lawful
                request from law enforcement or judicial bodies.
              </li>
            </ul>
          </section>

          {/* 5. Data Security */}
          <section className="space-y-3">
            <h2 className="text-xl font-serif text-brand-plum-900 pt-2 border-b border-brand-plum-900/10 pb-2">
              5. Data Security Safeguards
            </h2>
            <p>
              We deploy industry-standard technical and organizational security controls to safeguard your
              data against unauthorized alteration, disclosure, destruction, or interception:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
              <li>End-to-end transport layer encryption (HTTPS / TLS 1.3) for all network communication.</li>
              <li>Secure tokenized authentication for accounts and APIs.</li>
              <li>Role-based access controls limiting internal access solely to authorized personnel.</li>
              <li>Continuous monitoring and regular security patching of server infrastructure.</li>
            </ul>
          </section>

          {/* 6. Data Retention */}
          <section className="space-y-3">
            <h2 className="text-xl font-serif text-brand-plum-900 pt-2 border-b border-brand-plum-900/10 pb-2">
              6. Data Retention Period
            </h2>
            <p>
              We retain your personal information only for as long as your account remains active or as needed
              to fulfill the purposes outlined in this policy. When data is no longer necessary for customer
              service or compliance with legal, tax, or auditing obligations, it is securely deleted or
              permanently anonymized.
            </p>
          </section>

          {/* 7. Account & Data Deletion (Google Play Mandatory) */}
          <section id="data-deletion" className="space-y-4 scroll-mt-20">
            <h2 className="text-xl font-serif text-brand-plum-900 pt-2 border-b border-brand-plum-900/10 pb-2">
              7. Account &amp; Data Deletion Policy
            </h2>
            <p>
              In accordance with <strong>Google Play&rsquo;s Account Deletion Policy</strong>, you have the
              right to request the permanent deletion of your user account and associated personal data at any
              time.
            </p>
            <div className="bg-white p-5 rounded-2xl border border-brand-plum-900/10 space-y-3 text-xs sm:text-sm">
              <h3 className="font-medium text-brand-plum-950 text-base">
                How to Request Account &amp; Data Deletion:
              </h3>
              <ol className="list-decimal pl-5 space-y-2">
                <li>
                  <strong>Direct In-App Deletion:</strong> Navigate to{" "}
                  <em>App Settings &gt; Account &gt; Delete Account</em> within the Olenna StudioX mobile app
                  and confirm your request.
                </li>
                <li>
                  <strong>Email Request:</strong> Send an email from your registered email address to:
                  <div className="mt-1 font-mono text-xs text-brand-plum-900 bg-brand-ivory-50 p-2 rounded border border-brand-plum-900/10 inline-block">
                    support@olennastudiox.com
                  </div>
                  <p className="mt-1 text-xs text-brand-text-muted">
                    Subject Line: <strong>&ldquo;Account and Data Deletion Request&rdquo;</strong>
                  </p>
                </li>
              </ol>

              <h4 className="font-medium text-brand-plum-950 pt-2">What Happens Upon Deletion:</h4>
              <ul className="list-disc pl-5 space-y-1 text-xs text-brand-text-secondary">
                <li>Your profile, saved addresses, authentication records, and preferences are permanently deleted.</li>
                <li>We fulfill deletion requests within <strong>30 calendar days</strong> of receiving your verified request.</li>
                <li>
                  Certain historical transaction data (such as tax invoices) may be retained strictly as required
                  by applicable financial and tax laws.
                </li>
              </ul>
            </div>
          </section>

          {/* 8. Children's Privacy */}
          <section className="space-y-3">
            <h2 className="text-xl font-serif text-brand-plum-900 pt-2 border-b border-brand-plum-900/10 pb-2">
              8. Children&rsquo;s Privacy
            </h2>
            <p>
              Our App and retail services are designed for a general audience and are not directed to children
              under the age of 13 (or under the age of 18 without parental consent). We do not knowingly collect
              or solicit personal data from children. If we discover that a minor under 13 has provided personal
              information, we promptly delete such data from our systems. Parents or guardians who believe a
              child has submitted data may contact us immediately at{" "}
              <a href="mailto:support@olennastudiox.com" className="text-brand-plum-900 underline">
                support@olennastudiox.com
              </a>
              .
            </p>
          </section>

          {/* 9. Your Rights */}
          <section className="space-y-3">
            <h2 className="text-xl font-serif text-brand-plum-900 pt-2 border-b border-brand-plum-900/10 pb-2">
              9. Your Rights &amp; Choices
            </h2>
            <p>Subject to applicable law, you possess the right to:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
              <li>Access and receive a copy of your personal data stored with us.</li>
              <li>Request correction or updating of inaccurate or incomplete information.</li>
              <li>Withdraw consent for optional processing activities (such as marketing notifications).</li>
              <li>Request erasure of your personal data (as detailed in Section 7).</li>
            </ul>
          </section>

          {/* 10. Changes to This Policy */}
          <section className="space-y-3">
            <h2 className="text-xl font-serif text-brand-plum-900 pt-2 border-b border-brand-plum-900/10 pb-2">
              10. Changes &amp; Updates to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy periodically to reflect enhancements to our App, legal updates,
              or modifications to Google Play policies. When changes are made, we will revise the &ldquo;Last
              Updated&rdquo; date at the top of this page. We encourage you to review this policy periodically.
            </p>
          </section>

          {/* 11. Grievance Officer & Contact Information */}
          <section className="space-y-4 pt-4">
            <h2 className="text-xl font-serif text-brand-plum-900 pt-2 border-b border-brand-plum-900/10 pb-2">
              11. Grievance Officer &amp; Contact Information
            </h2>
            <p>
              For questions, privacy grievances, or requests regarding this Privacy Policy or your personal
              data, please contact our designated Grievance &amp; Privacy Officer:
            </p>

            <div className="bg-white p-6 rounded-2xl border border-brand-plum-900/10 space-y-3 text-xs sm:text-sm">
              <p className="font-semibold text-brand-plum-950 text-base">
                Olenna StudioX | A Sahasra Business Solutions
              </p>
              <div className="space-y-2 text-brand-text-secondary">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-brand-plum-700 shrink-0 mt-0.5" />
                  <span>
                    <strong>Registered Boutique &amp; Studio:</strong> Rajajinagar, Bangalore, Karnataka,
                    India
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-brand-plum-700 shrink-0" />
                  <span>
                    <strong>Technical &amp; Privacy Support:</strong>{" "}
                    <a
                      href="mailto:support@olennastudiox.com"
                      className="text-brand-plum-900 underline font-medium"
                    >
                      support@olennastudiox.com
                    </a>
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-brand-plum-700 shrink-0" />
                  <span>
                    <strong>General Concierge:</strong>{" "}
                    <a
                      href="mailto:olennastudiox@gmail.com"
                      className="text-brand-plum-900 underline font-medium"
                    >
                      olennastudiox@gmail.com
                    </a>
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-brand-plum-700 shrink-0" />
                  <span>
                    <strong>Concierge Helpline:</strong> +91 9741424695 | 08754443777
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Back link */}
          <div className="pt-6 border-t border-brand-plum-900/10 flex items-center justify-between text-xs sm:text-sm">
            <Link
              href="/"
              className="text-brand-plum-900 font-medium hover:underline inline-flex items-center gap-1"
            >
              &larr; Return to Olenna StudioX Home
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
