import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useContactInquiry } from "../useContactInquiry";
import * as emailService from "@/lib/services/emailService";

describe("useContactInquiry hook", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("manages submitting, success and reset states correctly", async () => {
    vi.spyOn(emailService, "sendContactInquiry").mockResolvedValue({
      success: true,
      response: { requestId: "req-1", status: "PENDING" },
    });

    const { result } = renderHook(() => useContactInquiry());

    expect(result.current.isSubmitting).toBe(false);
    expect(result.current.isSuccess).toBe(false);
    expect(result.current.errorMessage).toBeNull();

    let submitPromise: Promise<unknown>;
    act(() => {
      submitPromise = result.current.submitInquiry({
        fullName: "Test",
        email: "test@example.com",
        message: "Hello",
      });
    });

    await act(async () => {
      await submitPromise;
    });

    expect(result.current.isSubmitting).toBe(false);
    expect(result.current.isSuccess).toBe(true);
    expect(result.current.errorMessage).toBeNull();

    act(() => {
      result.current.reset();
    });

    expect(result.current.isSuccess).toBe(false);
  });

  it("handles errors and sets friendly error message", async () => {
    vi.spyOn(emailService, "sendContactInquiry").mockRejectedValue(
      new Error("API Down")
    );

    const { result } = renderHook(() => useContactInquiry());

    await act(async () => {
      try {
        await result.current.submitInquiry({
          fullName: "Test",
          email: "test@example.com",
          message: "Hello",
        });
      } catch {
        // expected
      }
    });

    expect(result.current.isSubmitting).toBe(false);
    expect(result.current.isSuccess).toBe(false);
    expect(result.current.errorMessage).toBe(
      "Something went wrong. Please try again or email us directly at support@devhorizontech.com"
    );
  });
});
