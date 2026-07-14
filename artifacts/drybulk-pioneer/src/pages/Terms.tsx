import React from 'react';
import { LegalNavbar } from '@/components/LegalNavbar';
import { Footer } from '@/components/Footer';

export default function Terms() {
  return (
    <div className="bg-white min-h-screen font-sans text-foreground">
      <LegalNavbar />
      <div className="bg-primary pt-32 pb-16">
        <div className="container mx-auto px-6 md:px-12">
          <p className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-3">Legal</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white">Terms of Use</h1>
        </div>
      </div>
      <div className="container mx-auto px-6 md:px-12 max-w-3xl pt-6 pb-1">
        <a
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
        >
          ← Back to Drybulk Pioneer
        </a>
      </div>
      <main className="container mx-auto px-6 md:px-12 pt-8 pb-16 max-w-3xl prose prose-slate">
        <p className="text-muted-foreground text-sm mb-8">Last updated: July 2026</p>

        <h2>1. Acceptance of Terms</h2>
        <p>By accessing and using the website at dbpioneer.com, you accept and agree to be bound by these Terms of Use. If you do not agree, please do not use this website.</p>

        <h2>2. Use of the Website</h2>
        <p>The content on this website is provided by Drybulk Pioneer Denizcilik ve Ticaret Ltd. Şti. for general information purposes only. You may not use this website for any unlawful purpose or in a way that infringes the rights of others.</p>

        <h2>3. Intellectual Property</h2>
        <p>All content, trademarks, logos, and intellectual property displayed on this website are the property of Drybulk Pioneer Denizcilik ve Ticaret Ltd. Şti. or its licensors. Reproduction, distribution, or modification without prior written consent is prohibited.</p>

        <h2>4. Disclaimer</h2>
        <p>The information on this website is provided "as is" without warranties of any kind. Drybulk Pioneer does not warrant that the website will be uninterrupted, error-free, or free of viruses. Market data and rates mentioned are for indicative purposes only.</p>

        <h2>5. Limitation of Liability</h2>
        <p>To the fullest extent permitted by law, Drybulk Pioneer shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of this website.</p>

        <h2>6. External Links</h2>
        <p>Our website may contain links to external sites. We are not responsible for the content or privacy practices of those sites.</p>

        <h2>7. Governing Law</h2>
        <p>These Terms of Use are governed by the laws of the Republic of Turkey. Any disputes shall be subject to the jurisdiction of Istanbul courts.</p>

        <h2>8. Contact</h2>
        <p>For questions regarding these terms: <a href="mailto:info@dbpioneer.com">info@dbpioneer.com</a></p>
      </main>
      <Footer />
    </div>
  );
}
