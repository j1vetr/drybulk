import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function Privacy() {
  return (
    <div className="bg-white min-h-screen font-sans text-foreground">
      <Navbar />
      <div className="bg-primary pt-32 pb-16">
        <div className="container mx-auto px-6 md:px-12">
          <p className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-3">Legal</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white">Privacy Policy</h1>
        </div>
      </div>
      <main className="container mx-auto px-6 md:px-12 py-16 max-w-3xl prose prose-slate">
        <p className="text-muted-foreground text-sm mb-8">Last updated: July 2026</p>

        <h2>1. Introduction</h2>
        <p>Drybulk Pioneer Denizcilik ve Ticaret Ltd. Şti. ("Drybulk Pioneer", "we", "us", or "our") is committed to protecting your personal data and respecting your privacy. This Privacy Policy explains how we collect, use, and safeguard information when you visit our website at dbpioneer.com.</p>

        <h2>2. Data We Collect</h2>
        <p>We may collect the following categories of personal data:</p>
        <ul>
          <li><strong>Contact information:</strong> name, company name, email address, phone number provided via our contact form or direct correspondence.</li>
          <li><strong>Usage data:</strong> IP address, browser type, pages visited, time spent on pages, and referring URLs collected automatically when you visit our website.</li>
          <li><strong>Cookies:</strong> see our Cookie Policy for details.</li>
        </ul>

        <h2>3. How We Use Your Data</h2>
        <p>We use collected data to:</p>
        <ul>
          <li>Respond to your inquiries and provide requested information</li>
          <li>Manage our commercial relationships</li>
          <li>Improve our website and services</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2>4. Legal Basis for Processing</h2>
        <p>We process your personal data on the basis of:</p>
        <ul>
          <li>Your consent (where explicitly given)</li>
          <li>Contractual necessity (for managing business relationships)</li>
          <li>Legitimate interests (for website analytics and business communications)</li>
          <li>Legal obligation</li>
        </ul>

        <h2>5. Data Sharing</h2>
        <p>We do not sell your personal data. We may share data with trusted third-party service providers who assist us in operating our website and conducting our business, subject to confidentiality obligations.</p>

        <h2>6. Data Retention</h2>
        <p>We retain personal data only as long as necessary for the purposes described in this policy or as required by applicable law.</p>

        <h2>7. Your Rights</h2>
        <p>Depending on your jurisdiction, you may have the right to access, rectify, erase, restrict, or object to the processing of your personal data. To exercise these rights, contact us at <a href="mailto:info@dbpioneer.com">info@dbpioneer.com</a>.</p>

        <h2>8. Contact</h2>
        <p>For privacy-related enquiries: <a href="mailto:info@dbpioneer.com">info@dbpioneer.com</a><br />
        Drybulk Pioneer Denizcilik ve Ticaret Ltd. Şti.<br />
        Kosuyolu Mah. Cenap Şahabettin Sokak No:90, 34718 Kadıköy / İstanbul, Türkiye</p>
      </main>
      <Footer />
    </div>
  );
}
