/**
 * Centralized Email Service Integration
 * Handles transmission of contact form enquiries to the Centralized Email Service on Render.
 */

export const EMAIL_SERVICE_BASE_URL =
  process.env.NEXT_PUBLIC_EMAIL_SERVICE_URL || "https://olenna-email-service.onrender.com";

export const EMAIL_SERVICE_API_KEY =
  process.env.NEXT_PUBLIC_EMAIL_SERVICE_API_KEY || "9eRK1AxMdJkiFBSXzAYxBFz6o+4IySEkc8AjTwW1Yi0=";

export const SUPPORT_EMAIL =
  process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "support@devhorizontech.com";

export const SUPPORT_NAME = "DevHorizon Support";

export const CC_EMAIL = "olennastudiox@gmail.com";
export const CC_NAME = "Olenna StudioX";

export interface ContactInquiryPayload {
  fullName?: string;
  name?: string;
  email: string;
  phone?: string;
  storeLocation?: string;
  storeInterest?: string;
  subject?: string;
  message: string;
}

export interface EmailRecipient {
  email: string;
  name?: string;
}

export interface EmailServiceRequestBody {
  idempotencyKey?: string;
  emailType: "TRANSACTIONAL";
  priority?: number;
  recipient: EmailRecipient;
  cc?: EmailRecipient[];
  subject?: string;
  templateId: string;
  variables: Record<string, string>;
}

export interface EmailServiceResponse {
  requestId?: string;
  status?: string;
  correlationId?: string | null;
  createdAt?: string;
}

export interface SendContactInquiryResult {
  success: boolean;
  response: EmailServiceResponse;
}

/**
 * Generates an idempotency key conforming to:
 * 'contact-' + Date.now() + '-' + Math.random().toString(36).slice(2, 9)
 */
export function generateIdempotencyKey(): string {
  return "contact-" + Date.now() + "-" + Math.random().toString(36).slice(2, 9);
}

/**
 * Formats the contact message including any optional metadata fields.
 */
export function formatContactMessage({
  message,
  phone = "",
  storeLocation = "",
  subject = "",
}: {
  message: string;
  phone?: string;
  storeLocation?: string;
  subject?: string;
}): string {
  let formattedMessage = message.trim();
  const metaDetails: string[] = [];

  if (phone.trim()) {
    metaDetails.push(`• Phone: ${phone.trim()}`);
  }
  if (storeLocation.trim()) {
    metaDetails.push(`• Preferred Store Location: ${storeLocation.trim()}`);
  }
  if (subject.trim()) {
    metaDetails.push(`• Subject: ${subject.trim()}`);
  }

  if (metaDetails.length > 0) {
    formattedMessage += "\n\n---\nAdditional Details:\n" + metaDetails.join("\n");
  }

  return formattedMessage;
}

/**
 * Sends contact enquiry with CC to olennastudiox@gmail.com
 * and triggers asynchronous non-blocking visitor confirmation email upon HTTP 202.
 */
export async function sendContactInquiry(
  payload: ContactInquiryPayload
): Promise<SendContactInquiryResult> {
  const fullName = (payload.fullName || payload.name || "").trim();
  const email = (payload.email || "").trim();
  const rawMessage = (payload.message || "").trim();
  const phone = (payload.phone || "").trim();
  const storeLocation = (payload.storeLocation || payload.storeInterest || "").trim();
  const subject = (payload.subject || "").trim();

  if (!fullName) {
    throw new Error("Visitor name is required");
  }
  if (!email) {
    throw new Error("Visitor email is required");
  }
  if (!rawMessage) {
    throw new Error("Visitor message is required");
  }

  const formattedMessage = formatContactMessage({
    message: rawMessage,
    phone,
    storeLocation,
    subject,
  });

  const endpoint = `${EMAIL_SERVICE_BASE_URL}/api/v1/emails`;
  const headers: HeadersInit = {
    "Content-Type": "application/json",
    "X-API-Key": EMAIL_SERVICE_API_KEY,
  };

  const supportPayload: EmailServiceRequestBody = {
    idempotencyKey: generateIdempotencyKey(),
    emailType: "TRANSACTIONAL",
    recipient: {
      email: SUPPORT_EMAIL,
      name: SUPPORT_NAME,
    },
    cc: [
      {
        email: CC_EMAIL,
        name: CC_NAME,
      },
    ],
    subject: subject ? `[Contact Form] ${subject} - ${fullName}` : undefined,
    templateId: "contact-inquiry-notification",
    variables: {
      senderName: fullName,
      senderEmail: email,
      message: formattedMessage,
    },
    priority: 8,
  };

  const response = await fetch(endpoint, {
    method: "POST",
    headers,
    body: JSON.stringify(supportPayload),
  });

  if (response.status === 202) {
    // Dispatch visitor confirmation email asynchronously (non-blocking)
    fetch(endpoint, {
      method: "POST",
      headers,
      body: JSON.stringify({
        emailType: "TRANSACTIONAL",
        recipient: {
          email,
          name: fullName,
        },
        templateId: "contact-inquiry-confirmation",
        variables: {
          senderName: fullName,
          message: rawMessage,
        },
      }),
    }).catch(() => {
      // Ignored for non-blocking execution
    });

    const data = (await response.json().catch(() => ({
      status: "PENDING",
    }))) as EmailServiceResponse;

    return {
      success: true,
      response: data,
    };
  }

  throw new Error("Server returned " + response.status);
}

export const sendContactEmails = sendContactInquiry;
export const submitContactInquiry = sendContactInquiry;
