import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function Corporate() {
  return (
    <div className="bg-white min-h-screen font-sans text-foreground">
      <Navbar />
      <div className="bg-primary pt-32 pb-16">
        <div className="container mx-auto px-6 md:px-12">
          <p className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-3">Legal</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white">Corporate Information</h1>
        </div>
      </div>
      <main className="container mx-auto px-6 md:px-12 py-16 max-w-3xl">
        <div className="grid sm:grid-cols-2 gap-8">
          <div className="border border-gray-100 p-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Company Title</h2>
            <p className="text-primary font-semibold">Drybulk Pioneer Denizcilik ve Ticaret Ltd. Şti.</p>
          </div>
          <div className="border border-gray-100 p-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Year of Incorporation</h2>
            <p className="text-primary font-semibold">2026</p>
          </div>
          <div className="border border-gray-100 p-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Registered Address</h2>
            <p className="text-primary font-semibold leading-relaxed">
              Kosuyolu Mah. Cenap Şahabettin Sokak No:90<br />
              34718 Kadıköy / İstanbul, Türkiye
            </p>
          </div>
          <div className="border border-gray-100 p-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Activity Area</h2>
            <p className="text-primary font-semibold leading-relaxed">
              Dry bulk shipping and chartering;<br />
              commercial operations; post-fixture support
            </p>
          </div>
          <div className="border border-gray-100 p-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Telephone</h2>
            <p className="text-primary font-semibold">
              <a href="tel:+902165450945" className="hover:text-accent transition-colors">+90 216 545 09 45</a>
            </p>
          </div>
          <div className="border border-gray-100 p-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">General Enquiries</h2>
            <p className="text-primary font-semibold">
              <a href="mailto:info@dbpioneer.com" className="hover:text-accent transition-colors">info@dbpioneer.com</a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
