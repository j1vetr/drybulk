import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { Vessels } from '@/components/Vessels';
import { Trust } from '@/components/Trust';
import { Compliance } from '@/components/Compliance';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { CookieBanner } from '@/components/CookieBanner';

export default function Home() {
  return (
    <div className="bg-white min-h-screen font-sans text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Vessels />
        <Trust />
        <Compliance />
        <Contact />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
