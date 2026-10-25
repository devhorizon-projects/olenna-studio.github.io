import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import {
  sendContactInquiry,
  generateIdempotencyKey,
  formatContactMessage,
  EMAIL_SERVICE_BASE_URL,
  EMAIL_SERVICE_API_KEY,
  SUPPORT_EMAIL,
  CC_EMAIL,
} from "../emailService";

describe("emailService", () => {
  const originalFetch = global.fetch;

  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(() => {
    global.fetch = originalFetch;
  });

  it("generates correct idempotency keys starting with contact-", () => {
    const key1 = generateIdempotencyKey();
    const key2 = generateIdempotencyKey();

    expect(key1).toMatch(/^contact-\d+-[a-z0-9]+$/);
    expect(key2).toMatch(/^contact-\d+-[a-z0-9]+$/);
    expect(key1).not.toBe(key2);
  });

  it("formats message with optional metadata properly", () => {
    const formatted = formatContactMessage({
      message: "Looking for bridal dresses.",
      phone: "+91 98765 43210",
      storeLocation: "Indiranagar",
      subject: "Bridal Styling",
    });

    expect(formatted).toBe(
      "Looking for bridal dresses.\n\n---\nAdditional Details:\n• Phone: +91 98765 43210\n• Preferred Store Location: Indiranagar\n• Subject: Bridal Styling"
    );
  });

  it("leaves message unchanged when optional metadata fields are empty", () => {
    const formatted = formatContactMessage({
      message: "Looking for bridal dresses.",
    });

    expect(formatted).toBe("Looking for bridal dresses.");
  });

  it("sends contact inquiry with CC and triggers non-blocking visitor confirmation", async () => {
    const fetchCalls: { url: string; options: RequestInit }[] = [];

    global.fetch = vi.fn().mockImplementation(async (url: string, options: RequestInit) => {
      fetchCalls.push({ url, options });
      return {
        ok: true,
        status: 202,
        json: async () => ({
          requestId: "mock-request-id",
          status: "PENDING",
        }),
      } as Response;
    });

    const payload = {
      fullName: "Radhika Sharma",
      email: "radhika@example.com",
      phone: "+91 98765 43210",
      storeLocation: "Indiranagar",
      subject: "Bridal Styling Appointment",
      message: "Please help me with appointments.",
    };

    const result = await sendContactInquiry(payload);

    expect(result.success).toBe(true);
    expect(global.fetch).toHaveBeenCalledTimes(2);

    const primaryCall = fetchCalls[0];
    const confirmCall = fetchCalls[1];

    expect(primaryCall.url).toBe(`${EMAIL_SERVICE_BASE_URL}/api/v1/emails`);
    expect(primaryCall.options.method).toBe("POST");
    expect((primaryCall.options.headers as Record<string, string>)["X-API-Key"]).toBe(
      EMAIL_SERVICE_API_KEY
    );

    const primaryBody = JSON.parse(primaryCall.options.body as string);
    expect(primaryBody.idempotencyKey).toMatch(/^contact-/);
    expect(primaryBody.emailType).toBe("TRANSACTIONAL");
    expect(primaryBody.recipient).toEqual({
      email: SUPPORT_EMAIL,
      name: "DevHorizon Support",
    });
    expect(primaryBody.cc).toEqual([
      {
        email: CC_EMAIL,
        name: "Olenna StudioX",
      },
    ]);
    expect(primaryBody.subject).toBe("[Contact Form] Bridal Styling Appointment - Radhika Sharma");
    expect(primaryBody.priority).toBe(8);
    expect(primaryBody.templateId).toBe("contact-inquiry-notification");
    expect(primaryBody.variables.senderName).toBe("Radhika Sharma");
    expect(primaryBody.variables.senderEmail).toBe("radhika@example.com");
    expect(primaryBody.variables.message).toContain("Please help me with appointments.");
    expect(primaryBody.variables.message).toContain("• Phone: +91 98765 43210");
    expect(primaryBody.variables.message).toContain("• Preferred Store Location: Indiranagar");
    expect(primaryBody.variables.message).toContain("• Subject: Bridal Styling Appointment");

    // Confirmation call
    const confirmBody = JSON.parse(confirmCall.options.body as string);
    expect(confirmBody.recipient).toEqual({
      email: "radhika@example.com",
      name: "Radhika Sharma",
    });
    expect(confirmBody.templateId).toBe("contact-inquiry-confirmation");
    expect(confirmBody.variables.senderName).toBe("Radhika Sharma");
    expect(confirmBody.variables.message).toBe("Please help me with appointments.");
  });

  it("omits subject in payload when not provided", async () => {
    const fetchCalls: { url: string; options: RequestInit }[] = [];

    global.fetch = vi.fn().mockImplementation(async (url: string, options: RequestInit) => {
      fetchCalls.push({ url, options });
      return {
        ok: true,
        status: 202,
        json: async () => ({ requestId: "mock-id", status: "PENDING" }),
      } as Response;
    });

    await sendContactInquiry({
      fullName: "Ananya Rao",
      email: "ananya@example.com",
      message: "General enquiry message.",
    });

    const primaryBody = JSON.parse(fetchCalls[0].options.body as string);
    expect(primaryBody.subject).toBeUndefined();
  });

  it("throws error when email service returns non-202 status", async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 500,
      json: async () => ({ error: "Internal Server Error" }),
    } as Response);

    await expect(
      sendContactInquiry({
        fullName: "Ananya Rao",
        email: "ananya@example.com",
        message: "Hello",
      })
    ).rejects.toThrow("Server returned 500");
  });

  it("throws error when visitor inputs are missing", async () => {
    await expect(
      sendContactInquiry({
        fullName: "",
        email: "ananya@example.com",
        message: "Hello",
      })
    ).rejects.toThrow("Visitor name is required");

    await expect(
      sendContactInquiry({
        fullName: "Ananya",
        email: "",
        message: "Hello",
      })
    ).rejects.toThrow("Visitor email is required");

    await expect(
      sendContactInquiry({
        fullName: "Ananya",
        email: "ananya@example.com",
        message: "",
      })
    ).rejects.toThrow("Visitor message is required");
  });
});
