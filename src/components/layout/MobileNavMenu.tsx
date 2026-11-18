"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface MobileNavMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items?: NavItem[];
  activeHref?: string;
}

const DEFAULT_NAV_ITEMS: NavItem[] = [
  { id: "nav-home", label: "HOME", href: "/" },
  { id: "nav-about", label: "ABOUT", href: "/about" },
  { id: "nav-store", label: "OUR STORE", href: "/stores" },
  { id: "nav-contact", label: "CONTACT", href: "/contact" },
];

/**
 * MobileNavMenu — Production React Implementation of Figma Node 149:3196
 * 
 * Figma Specifications:
 * - Frame Dimensions: 240px width, Hug vertical (252px)
 * - Styling: White (#FFFFFF), 4px border-radius, drop-shadow 0 6px 20px rgba(0,0,0,0.14)
 * - Padding: 20px horizontal (px-5), 12px vertical (py-3)
 * - Motion Timing: 92ms duration, ease-out (click/open), ease-in (drag/dismiss)
 * - Touch Targets: Expanded close button to 44x44px for WCAG compliance
 */
export function MobileNavMenu({
  isOpen,
  onClose,
  items = DEFAULT_NAV_ITEMS,
  activeHref,
}: MobileNavMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const dragStartY = useRef<number | null>(null);

  // Close on Escape key press
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Touch drag-to-dismiss gesture handling (Figma Drag Trigger -> 92ms Ease-In)
  const handleTouchStart = (e: React.TouchEvent) => {
    dragStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (dragStartY.current === null) return;
    const dragDelta = e.changedTouches[0].clientY - dragStartY.current;
    if (Math.abs(dragDelta) > 35) {
      onClose();
    }
    dragStartY.current = null;
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop overlay for focus and tap-outside dismiss */}
      <div
        className="fixed inset-0 z-40 bg-black/25 backdrop-blur-[2px] animate-in fade-in duration-[92ms] ease-out"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Floating Navigation Menu Card (Figma Node 149:3196) */}
      <div className="fixed top-18 sm:top-20 right-4 sm:right-6 z-50">
        <nav
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
          data-node-id="149:3196"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="w-[240px] bg-white rounded-[4px] px-5 py-3 shadow-[0_6px_20px_rgba(0,0,0,0.14)] border border-brand-plum-900/10 flex flex-col focus:outline-none animate-in fade-in zoom-in-95 slide-in-from-top-2 duration-[92ms] ease-out"
        >
          {/* Close Button Header (Figma Node 149:3197) */}
          <div
            data-node-id="149:3197"
            className="h-9 flex items-center justify-end"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close navigation menu"
              className="inline-flex items-center justify-center min-h-[44px] min-w-[44px] -mr-2 text-[11px] font-normal tracking-wide text-[#292D32] hover:text-[#493541] active:opacity-70 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-plum-900"
            >
              <span data-node-id="149:3198">CLOSE ×</span>
            </button>
          </div>

          {/* Navigation Items (Figma Nodes 149:3199, 149:3201, 149:3203, 149:3205) */}
          <div className="flex flex-col">
            {items.map((item) => {
              const isActive = activeHref === item.href;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={onClose}
                  className={`h-12 flex items-center text-[14px] font-medium tracking-normal uppercase transition-colors hover:text-[#493541] active:opacity-75 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-plum-900 ${
                    isActive
                      ? "text-[#493541] font-semibold"
                      : "text-[#292D32]"
                  }`}
                >
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </>
  );
}
