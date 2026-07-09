import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, ShieldCheck, Headphones, ShieldPlus } from 'lucide-react';

const stats = [
  { icon: Globe, title: 'Global Operations', subtitle: 'Worldwide coverage' },
  { icon: ShieldCheck, title: 'Reliable Service', subtitle: 'On-time performance' },
  { icon: Headphones, title: '24/7 Support', subtitle: 'Always here for you' },
  { icon: ShieldPlus, title: 'Safety First', subtitle: 'Committed to safety' },
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
    <section className="relative min-h-[100dvh] flex items-end pt-24 pb-10 overflow-hidden bg-primary">
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
        {/* Left-to-right navy gradient for text contrast, video stays visible on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/55 to-primary/10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-primary/30"></div>
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
            Dry Bulk<br />Shipping Experts
          </h1>

          <p className="text-base md:text-lg text-white/80 max-w-lg mb-8 font-light leading-relaxed">
            Delivering reliable, efficient, and client-focused maritime solutions across the globe.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-3 mb-12">
            <a
              href="#contact"
              className="w-full sm:w-auto px-6 py-3 bg-accent text-white font-semibold text-sm hover:bg-accent/90 transition-colors flex items-center justify-center gap-2 group"
            >
              Request Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto px-6 py-3 bg-transparent border border-white/70 text-white font-semibold text-sm hover:bg-white/10 transition-colors flex items-center justify-center"
            >
              Explore Services
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="grid grid-cols-2 gap-y-4 md:flex md:flex-nowrap md:items-center md:gap-x-6"
        >
          {stats.map((stat, i) => {
            const isLeftColumn = i % 2 === 0;
            const isLastItem = i === stats.length - 1;
            return (
            <div
              key={stat.title}
              className={`flex items-center gap-3 pr-4 md:pr-6 border-white/20 ${
                isLeftColumn ? 'border-r' : ''
              } ${!isLastItem ? 'md:border-r' : 'md:border-r-0'}`}
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
