import { describe, it, expect, beforeEach, vi } from "vitest";
import React from "react";
import "@testing-library/jest-dom/vitest";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SoftLaunchPopup } from "@/components/home/SoftLaunchPopup";
import { SoftLaunchPoster } from "@/components/home/SoftLaunchPoster";

describe("SoftLaunchPoster component", () => {
  it("renders brand header, subtitle, and launch wishes", () => {
    render(<SoftLaunchPoster />);

    // Brand name and entity
    expect(screen.getByRole("heading", { name: "Olenna StudioX" })).toBeInTheDocument();
    expect(screen.getAllByText(/A Sahasra Business Solutions/i).length).toBeGreaterThan(0);

    // Soft launch wishes headline
    expect(
      screen.getByText(/Wishing You Joy, Grace & Everyday Elegance/i)
    ).toBeInTheDocument();

    // Key pillars
    expect(screen.getByText("Beauty & Cosmetics")).toBeInTheDocument();
    expect(screen.getByText("Ethnic Wear & Jewellery")).toBeInTheDocument();
    expect(screen.getByText("Master Tailoring Studio")).toBeInTheDocument();
    expect(screen.getByText("Bangalore Workspace")).toBeInTheDocument();

    // Call to action buttons
    expect(
      screen.getByRole("link", { name: /explore curated collections/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /partner with us/i })
    ).toBeInTheDocument();
  });

  it("handles share / copy wishes button click", async () => {
    const user = userEvent.setup();
    render(<SoftLaunchPoster />);

    const shareBtn = screen.getByRole("button", {
      name: /share soft launch celebration wishes/i,
    });
    expect(shareBtn).toBeInTheDocument();

    await user.click(shareBtn);
    expect(screen.getByText(/Link Copied!|Share Wishes/i)).toBeInTheDocument();
  });
});

describe("SoftLaunchPopup component", () => {
  beforeEach(() => {
    sessionStorage.clear();
    vi.useFakeTimers({ toFake: ["setTimeout", "clearTimeout"] });
  });

  it("renders popup with soft launch wishes and switches to partnerships tab", async () => {
    render(<SoftLaunchPopup />);

    // Fast forward the 350ms timer
    act(() => {
      vi.advanceTimersByTime(400);
    });

    // Check modal appears
    expect(
      screen.getByRole("dialog", { name: /warm wishes on our soft launch/i })
    ).toBeInTheDocument();
    expect(
      screen.getAllByText(/Olenna StudioX — A Sahasra Business Solutions/i).length
    ).toBeGreaterThan(0);

    // Switch to partnerships tab
    const partnerTab = screen.getByRole("button", { name: /partner opportunities/i });
    act(() => {
      partnerTab.click();
    });

    expect(
      screen.getByText(/Logistics Partners/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Rental Partners \(Commercial Space\)/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Product Manufacturers \(Sell With Us\)/i)
    ).toBeInTheDocument();

    // Close modal
    const closeBtn = screen.getByRole("button", {
      name: /close soft launch announcement/i,
    });
    act(() => {
      closeBtn.click();
    });

    expect(screen.queryByRole("dialog")).toBeNull();
    expect(
      sessionStorage.getItem("olenna_softlaunch_popup_dismissed_v1")
    ).toBe("true");
  });
});
