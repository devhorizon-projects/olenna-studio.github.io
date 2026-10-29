"use client";

import { useState, useCallback } from "react";
import {
  sendContactInquiry,
  ContactInquiryPayload,
  SendContactInquiryResult,
} from "@/lib/services/emailService";

export interface UseContactInquiryReturn {
  isSubmitting: boolean;
  isSuccess: boolean;
  errorMessage: string | null;
  submitInquiry: (payload: ContactInquiryPayload) => Promise<SendContactInquiryResult>;
  reset: () => void;
}

export function useContactInquiry(): UseContactInquiryReturn {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const submitInquiry = useCallback(async (payload: ContactInquiryPayload) => {
    setIsSubmitting(true);
    setErrorMessage(null);
    setIsSuccess(false);

    try {
      const result = await sendContactInquiry(payload);
      setIsSuccess(true);
      return result;
    } catch {
      const msg =
        "Something went wrong. Please try again or email us directly at support@olennastudiox.com";
      setErrorMessage(msg);
      throw new Error(msg);
    } finally {
      setIsSubmitting(false);
    }
  }, []);

  const reset = useCallback(() => {
    setIsSubmitting(false);
    setIsSuccess(false);
    setErrorMessage(null);
  }, []);

  return {
    isSubmitting,
    isSuccess,
    errorMessage,
    submitInquiry,
    reset,
  };
}
