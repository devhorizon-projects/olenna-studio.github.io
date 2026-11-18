import React from "react";

export function PhilosophyQuote() {
  return (
    <section className="py-16 sm:py-24 bg-brand-ivory-50 border-t border-brand-plum-900/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <blockquote className="font-serif italic font-normal text-3xl sm:text-4xl lg:text-[42px] text-brand-plum-900 leading-snug tracking-tight">
          &ldquo;The art of living beautifully.&rdquo;
        </blockquote>
        <p className="mt-4 text-[11px] sm:text-xs font-semibold tracking-[0.3em] text-brand-plum-700/80 uppercase">
          &mdash; OLENNA STUDIOX ATELIER PHILOSOPHY &mdash;
        </p>
      </div>
    </section>
  );
}
