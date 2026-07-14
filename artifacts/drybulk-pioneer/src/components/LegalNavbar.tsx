import React, { useState } from 'react';
import { Menu, X, ArrowLeft } from 'lucide-react';

/**
 * Standalone navigation bar used on legal pages (/privacy, /kvkk, etc.).
 * Always renders in the opaque white state — no scroll detection needed.
 * Links navigate to full paths (/, /#contact) not anchor-only fragments.
 */
export function LegalNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200 py-2">
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo — links to homepage */}
        <a href="/" className="flex items-center gap-3 relative z-10">
          <img src="/logo.png" alt="Drybulk Pioneer" className="h-14" />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-medium tracking-wide uppercase text-primary hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-3 h-3" />
            Back to Site
          </a>
          <a
            href="/#contact"
            className="px-5 py-2 text-xs font-semibold tracking-wide uppercase bg-primary text-white hover:bg-primary/90 transition-colors"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden relative z-10 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="w-6 h-6 text-primary" />
          ) : (
            <Menu className="w-6 h-6 text-primary" />
          )}
        </button>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="absolute top-0 left-0 right-0 bg-white h-screen flex flex-col pt-24 px-6 gap-5 md:hidden overflow-y-auto">
            <a
              href="/"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 text-xl font-bold text-primary uppercase border-b border-gray-100 pb-4"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Site
            </a>
            <a
              href="/#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-4 px-6 py-4 bg-primary text-white text-center font-bold uppercase tracking-widest w-full"
            >
              Contact Us
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
