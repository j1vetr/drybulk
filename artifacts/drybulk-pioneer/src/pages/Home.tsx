import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Team } from '@/components/Team';
import { Services } from '@/components/Services';
import { Fleet } from '@/components/Fleet';
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
        <Fleet />
        <Team />
        <Trust />
        <Compliance />
        <Contact />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
