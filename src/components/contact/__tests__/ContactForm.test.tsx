import { describe, it, expect, vi, beforeEach } from "vitest";
import React from "react";
import "@testing-library/jest-dom/vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ContactForm } from "../ContactForm";
import * as emailService from "@/lib/services/emailService";

describe("ContactForm component", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("renders form fields and initial 'Send Message' button", () => {
    render(<ContactForm stores={[{ id: "1", name: "Indiranagar" }]} />);

    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/preferred store location/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/subject/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/your message/i)).toBeInTheDocument();

    const submitBtn = screen.getByRole("button", { name: /send message/i });
    expect(submitBtn).toBeInTheDocument();
    expect(submitBtn).not.toBeDisabled();
  });

  it("validates required fields before submission", async () => {
    const user = userEvent.setup();
    const sendSpy = vi.spyOn(emailService, "sendContactInquiry");

    render(<ContactForm />);

    const submitBtn = screen.getByRole("button", { name: /send message/i });
    await user.click(submitBtn);

    expect(screen.getByText("Please enter your full name")).toBeInTheDocument();
    expect(screen.getByText("Please provide a valid email address")).toBeInTheDocument();
    expect(screen.getByText("Please enter your message")).toBeInTheDocument();
    expect(sendSpy).not.toHaveBeenCalled();
  });

  it("validates invalid email format", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.type(screen.getByLabelText(/full name/i), "Radhika");
    await user.type(screen.getByLabelText(/email address/i), "invalid-email");
    await user.type(screen.getByLabelText(/your message/i), "Valid message text here");

    await user.click(screen.getByRole("button", { name: /send message/i }));

    expect(screen.getByText("Please provide a valid email address")).toBeInTheDocument();
  });

  it("disables button, displays loading spinner, and displays success alert upon submission", async () => {
    const user = userEvent.setup();

    let resolvePromise!: (val: emailService.SendContactInquiryResult) => void;
    const pendingPromise = new Promise<emailService.SendContactInquiryResult>((resolve) => {
      resolvePromise = resolve;
    });

    const sendSpy = vi.spyOn(emailService, "sendContactInquiry").mockReturnValue(pendingPromise);

    render(<ContactForm />);

    const nameInput = screen.getByLabelText(/full name/i) as HTMLInputElement;
    const emailInput = screen.getByLabelText(/email address/i) as HTMLInputElement;
    const phoneInput = screen.getByLabelText(/phone number/i) as HTMLInputElement;
    const subjectInput = screen.getByLabelText(/subject/i) as HTMLInputElement;
    const messageInput = screen.getByLabelText(/your message/i) as HTMLTextAreaElement;

    await user.type(nameInput, "Radhika Sharma");
    await user.type(emailInput, "radhika@example.com");
    await user.type(phoneInput, "+91 98765 43210");
    await user.type(subjectInput, "Bridal Styling Appointment");
    await user.type(messageInput, "I would like to inquire about bridal styling.");

    const submitBtn = screen.getByRole("button", { name: /send message/i });
    await user.click(submitBtn);

    // Button should be disabled and loading spinner rendered while pending
    expect(submitBtn).toBeDisabled();
    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
    expect(screen.getByText("Sending message...")).toBeInTheDocument();

    // Resolve the promise
    resolvePromise({
      success: true,
      response: { requestId: "req-1", status: "PENDING" },
    });

    // Check success alert
    await waitFor(() => {
      expect(
        screen.getByText(
          "Thank you! Your message has been sent. Our team will get back to you shortly."
        )
      ).toBeInTheDocument();
    });

    // Verify form reset
    expect(nameInput.value).toBe("");
    expect(emailInput.value).toBe("");
    expect(phoneInput.value).toBe("");
    expect(subjectInput.value).toBe("");
    expect(messageInput.value).toBe("");
    expect(submitBtn).not.toBeDisabled();
    expect(sendSpy).toHaveBeenCalledWith({
      fullName: "Radhika Sharma",
      email: "radhika@example.com",
      phone: "+91 98765 43210",
      storeLocation: "",
      subject: "Bridal Styling Appointment",
      message: "I would like to inquire about bridal styling.",
    });
  });

  it("displays user-friendly error message on failure", async () => {
    const user = userEvent.setup();

    vi.spyOn(emailService, "sendContactInquiry").mockRejectedValue(
      new Error("Network Error")
    );

    render(<ContactForm />);

    await user.type(screen.getByLabelText(/full name/i), "Radhika Sharma");
    await user.type(screen.getByLabelText(/email address/i), "radhika@example.com");
    await user.type(screen.getByLabelText(/your message/i), "Hello team");

    const submitBtn = screen.getByRole("button", { name: /send message/i });
    await user.click(submitBtn);

    await waitFor(() => {
      expect(
        screen.getByText(/Something went wrong\. Please try again or email us directly at/i)
      ).toBeInTheDocument();
      expect(screen.getByRole("link", { name: "support@devhorizontech.com" })).toHaveAttribute(
        "href",
        "mailto:support@devhorizontech.com"
      );
    });

    expect(submitBtn).not.toBeDisabled();
  });
});
