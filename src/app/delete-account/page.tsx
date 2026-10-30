import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ShieldAlert, Trash2, Mail, ExternalLink, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Account & Data Deletion Request — Olenna",
  description: "Request account deletion and personal data removal for Olenna and Olenna StudioX applications.",
  alternates: {
    canonical: "/delete-account",
  },
};

export default function DeleteAccountPage() {
  return (
    <div className="bg-brand-ivory-50 py-12 sm:py-16 min-h-screen">
      <Container size="narrow">
        {/* Header */}
        <div className="border-b border-brand-plum-900/10 pb-6 mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
              <Trash2 className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-semibold tracking-wider text-brand-plum-700 uppercase">
                User Data & Privacy
              </span>
              <h1 className="text-2xl sm:text-3xl font-serif text-brand-plum-900">
                Olenna Account & Data Deletion
              </h1>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-brand-text-muted">
            In compliance with Google Play Store User Data & Account Deletion Policy
          </p>
        </div>

        {/* Content Body */}
        <div className="text-brand-text-secondary text-sm sm:text-base space-y-8 leading-relaxed">
          <div className="bg-white/80 p-6 rounded-2xl border border-brand-plum-900/10 shadow-2xs space-y-3">
            <h2 className="text-lg font-serif text-brand-plum-900 font-medium">
              Overview
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed">
              At Olenna (&ldquo;Olenna StudioX&rdquo;), we respect your right to control your personal data. If you have registered an account on the <strong>Olenna Android Application</strong> or <strong>Customer PWA</strong>, you can permanently delete your login credentials and associated personal information at any time.
            </p>
          </div>

          {/* Option 1: Delete directly in the App / PWA */}
          <section className="space-y-4">
            <h2 className="text-xl font-serif text-brand-plum-900 border-b border-brand-plum-900/10 pb-2">
              Method 1: Instant In-App Deletion
            </h2>
            <p className="text-xs sm:text-sm">
              You can delete your account instantly from within the Olenna mobile application or Progressive Web App (PWA):
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm">
              <li>Open the <strong>Olenna App</strong> or visit <a href="https://app.olennastudiox.com" target="_blank" rel="noopener noreferrer" className="text-brand-plum-900 underline font-medium">app.olennastudiox.com</a>.</li>
              <li>Log in to your account.</li>
              <li>Click or tap on your <strong>Profile / Account Avatar</strong> in the top header.</li>
              <li>Select <strong className="text-red-600">Delete Account</strong> from the account menu.</li>
              <li>Type your email address (case-sensitive) to confirm your identity.</li>
              <li>Click <strong>Delete Account</strong> to finalize the request. Your login credentials will be immediately purged from Firebase Authentication.</li>
            </ol>
          </section>

          {/* Option 2: Request via Web / Email */}
          <section className="space-y-4">
            <h2 className="text-xl font-serif text-brand-plum-900 border-b border-brand-plum-900/10 pb-2">
              Method 2: Submit a Deletion Request via Email
            </h2>
            <p className="text-xs sm:text-sm">
              If you have uninstalled the app or cannot access your account, you can submit an account and data deletion request directly to our privacy officer:
            </p>
            <div className="bg-[#FAF1F4] p-5 rounded-xl border border-brand-plum-900/10 space-y-2 text-xs sm:text-sm">
              <p>
                <strong>Email:</strong> <a href="mailto:privacy@olenna.in" className="text-brand-plum-900 underline font-medium">privacy@olenna.in</a> (or <a href="mailto:support@olenna.in" className="text-brand-plum-900 underline font-medium">support@olenna.in</a>)
              </p>
              <p>
                <strong>Subject line:</strong> Account Deletion Request — [Your Registered Email]
              </p>
              <p>
                <strong>Required details:</strong> Please send the request from the email address registered with your Olenna account, stating your registered full name and phone number.
              </p>
              <p className="text-brand-text-muted text-xs pt-1">
                Turnaround time: Requests submitted by email are processed and verified within 48 to 72 business hours.
              </p>
            </div>
          </section>

          {/* Types of Data Deleted vs Retained */}
          <section className="space-y-4">
            <h2 className="text-xl font-serif text-brand-plum-900 border-b border-brand-plum-900/10 pb-2">
              Data Retention & Deletion Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-red-50/60 p-4 rounded-xl border border-red-200 space-y-2">
                <h3 className="font-medium text-red-900 flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-red-600" />
                  What Data is Deleted / Anonymized:
                </h3>
                <ul className="list-disc pl-5 text-xs text-red-950 space-y-1">
                  <li>Firebase Authentication login credentials & secure tokens</li>
                  <li>Profile details (display name, profile avatar, preferences)</li>
                  <li>Device identifiers & push notification tokens</li>
                  <li>Active shopping cart & temporary checkout leases</li>
                  <li>Marketing communication subscriptions</li>
                </ul>
              </div>

              <div className="bg-amber-50/60 p-4 rounded-xl border border-amber-200 space-y-2">
                <h3 className="font-medium text-amber-900 flex items-center gap-2 text-sm">
                  <ShieldAlert className="w-4 h-4 text-amber-600" />
                  What Data is Retained & Why:
                </h3>
                <ul className="list-disc pl-5 text-xs text-amber-950 space-y-1">
                  <li><strong>Financial & Invoicing Records:</strong> Order invoices, payment transaction IDs, and tax records are retained to comply with legal, taxation, and statutory requirements under Indian law.</li>
                  <li><strong>Delivery Proof:</strong> Records of fulfilled deliveries are archived for fraud prevention and consumer protection disputes.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Link back to privacy policy */}
          <div className="pt-4 border-t border-brand-plum-900/10 flex flex-wrap justify-between items-center text-xs text-brand-text-muted">
            <span>
              For full information on how your data is handled, read our{" "}
              <Link href="/privacy-policy" className="text-brand-plum-900 underline font-medium">
                Privacy Policy
              </Link>.
            </span>
            <Link href="/" className="text-brand-plum-900 underline font-medium">
              Back to Olenna Home
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
