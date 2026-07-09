import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Fleet } from '@/components/Fleet';
import { Services } from '@/components/Services';
import { Trust } from '@/components/Trust';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="bg-white min-h-screen font-sans text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Fleet />
        <Services />
        <Trust />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
