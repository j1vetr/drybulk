import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

const STORAGE_KEY = 'dbpioneer_cookie_consent';

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(STORAGE_KEY, 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-[999] bg-primary text-white border-t border-white/10 shadow-2xl"
    >
      <div className="container mx-auto px-6 md:px-12 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
        <p className="text-sm text-white/85 leading-relaxed max-w-2xl">
          We use cookies to improve your browsing experience and analyse site traffic. By
          clicking{' '}
          <strong className="text-white font-semibold">"Accept"</strong>, you consent to our
          use of cookies.{' '}
          <a href="/cookie-policy" className="underline underline-offset-2 hover:text-white transition-colors">
            Cookie Policy
          </a>
          {' '}|{' '}
          <a href="/privacy" className="underline underline-offset-2 hover:text-white transition-colors">
            Privacy Policy
          </a>
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={decline}
            className="px-4 py-2 text-xs font-semibold uppercase tracking-wider border border-white/30 text-white/70 hover:text-white hover:border-white/60 transition-colors"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="px-5 py-2 text-xs font-semibold uppercase tracking-wider bg-accent text-white hover:bg-accent/90 transition-colors"
          >
            Accept
          </button>
          <button
            onClick={decline}
            aria-label="Close cookie notice"
            className="ml-1 p-1 text-white/50 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
