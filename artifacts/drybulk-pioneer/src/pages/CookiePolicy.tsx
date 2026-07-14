import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function CookiePolicy() {
  return (
    <div className="bg-white min-h-screen font-sans text-foreground">
      <Navbar />
      <div className="bg-primary pt-32 pb-16">
        <div className="container mx-auto px-6 md:px-12">
          <p className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-3">Legal</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white">Cookie Policy</h1>
        </div>
      </div>
      <main className="container mx-auto px-6 md:px-12 py-16 max-w-3xl prose prose-slate">
        <p className="text-muted-foreground text-sm mb-8">Last updated: July 2026</p>

        <h2>1. What Are Cookies</h2>
        <p>Cookies are small text files stored on your device when you visit a website. They help the website function properly and provide information to the website owner.</p>

        <h2>2. Cookies We Use</h2>
        <h3>Strictly Necessary Cookies</h3>
        <p>These cookies are essential for the website to function and cannot be disabled. They include cookies that remember your cookie consent preference.</p>

        <h3>Analytics Cookies</h3>
        <p>We may use analytics cookies to understand how visitors interact with our website. This helps us improve our content and user experience. These cookies only activate with your consent.</p>

        <h2>3. Managing Cookies</h2>
        <p>You can control cookies through your browser settings. Most browsers allow you to:</p>
        <ul>
          <li>View what cookies are stored and delete them</li>
          <li>Block third-party cookies</li>
          <li>Block all cookies from specific sites</li>
          <li>Block all cookies from being set</li>
        </ul>
        <p>Please note that blocking all cookies may affect website functionality.</p>

        <h2>4. Your Consent</h2>
        <p>When you first visit our website, you are presented with a cookie banner allowing you to accept or decline non-essential cookies. You can change your preference at any time by clearing your browser's local storage.</p>

        <h2>5. Contact</h2>
        <p>For questions about our use of cookies: <a href="mailto:info@dbpioneer.com">info@dbpioneer.com</a></p>
      </main>
      <Footer />
    </div>
  );
}
