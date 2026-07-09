import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[75dvh] flex items-center justify-center pt-20 pb-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-ship.jpg"
          alt="Massive dry bulk carrier on open ocean"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-primary/70 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-primary/90"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 flex flex-col items-center text-center mt-12 md:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-white/20 bg-white/10 backdrop-blur-sm text-white/90 text-xs font-semibold tracking-[0.2em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
            Global Maritime Excellence
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-[1.1] tracking-tight">
            Powering Global <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 font-serif italic">Commerce.</span>
          </h1>
          
          <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-8 font-light leading-relaxed">
            Drybulk Pioneer Denizcilik delivers uncompromising reliability, scale, and operational discipline to international dry bulk shipping. We navigate the world's most demanding supply chains with precision.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#contact"
              className="w-full sm:w-auto px-6 py-3 bg-white text-primary font-bold uppercase tracking-widest text-xs hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 group"
            >
              Request a Quote
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#fleet"
              className="w-full sm:w-auto px-6 py-3 bg-transparent border border-white text-white font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-colors flex items-center justify-center"
            >
              Explore Our Fleet
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/50 text-xs uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 w-full h-1/2 bg-white"
            animate={{ top: ['-50%', '100%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
