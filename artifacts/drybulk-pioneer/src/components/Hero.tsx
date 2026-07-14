import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Ship, BarChart2, FileCheck } from 'lucide-react';

const stats = [
  { icon: Ship,       title: 'Dry Bulk Chartering',      subtitle: 'Voyage & Time Charter' },
  { icon: BarChart2,  title: 'Commercial Operations',    subtitle: 'Estimation & Analysis' },
  { icon: FileCheck,  title: 'Post-Fixture Support',     subtitle: 'Laytime & Demurrage' },
];

export function Hero() {
  const [allowMotion, setAllowMotion] = useState(true);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    setAllowMotion(!query.matches);
    const handleChange = (e: MediaQueryListEvent) => setAllowMotion(!e.matches);
    query.addEventListener('change', handleChange);
    return () => query.removeEventListener('change', handleChange);
  }, []);

  return (
    <section className="relative min-h-[100dvh] flex items-center pt-20 pb-10 overflow-hidden bg-primary">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {allowMotion ? (
          <video
            src="/videos/hero-bg.mp4"
            poster="/images/hero-ship.webp"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        ) : (
          <img
            src="/images/hero-ship.webp"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/55 to-primary/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-primary/30" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <p className="text-accent text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-4">
            Global Reach. Local Commitment.
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-[1.08] tracking-tight uppercase">
            Dry Bulk Pioneer<br />Shipping Experts
          </h1>

          <p className="text-base md:text-lg text-white/80 max-w-xl mb-8 font-light leading-relaxed">
            An Istanbul-based dry bulk shipping and chartering company providing commercial
            operation, chartering and post-fixture support across international trades.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-3 mb-4">
            <a
              href="#contact"
              className="w-full sm:w-auto px-6 py-3 bg-accent text-white font-semibold text-sm hover:bg-accent/90 transition-colors flex items-center justify-center gap-2 group"
            >
              Submit a Cargo Enquiry
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-6 py-3 bg-transparent border border-white/70 text-white font-semibold text-sm hover:bg-white/10 transition-colors flex items-center justify-center"
            >
              Offer a Vessel
            </a>
          </div>

          <div className="flex flex-wrap gap-4 mb-12">
            <a href="#contact" className="text-white/60 text-xs hover:text-white transition-colors underline-offset-2 hover:underline">
              Contact Chartering
            </a>
            <span className="text-white/20 text-xs">|</span>
            <a href="#contact" className="text-white/60 text-xs hover:text-white transition-colors underline-offset-2 hover:underline">
              Contact Operations
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="flex flex-wrap items-center gap-x-6 gap-y-4"
        >
          {stats.map((stat, i) => {
            const isLastItem = i === stats.length - 1;
            return (
              <div
                key={stat.title}
                className={`flex items-center gap-3 pr-6 border-white/20 ${!isLastItem ? 'border-r' : ''}`}
              >
                <stat.icon className="w-6 h-6 text-accent shrink-0" strokeWidth={1.75} />
                <div className="leading-tight">
                  <div className="text-white text-sm font-semibold">{stat.title}</div>
                  <div className="text-white/60 text-xs">{stat.subtitle}</div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
