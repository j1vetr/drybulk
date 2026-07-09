import React from 'react';
import { motion } from 'framer-motion';

export function Trust() {
  return (
    <section id="why-us" className="relative py-16 md:py-20 bg-primary text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/trust-bow.jpg"
          alt="Ship bow cutting through waves"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/40"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-accent text-sm font-bold tracking-[0.2em] uppercase mb-3">Why Choose Us</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Trust built on <span className="font-serif italic font-normal text-white/80">relentless</span> execution.
            </h3>
            <p className="text-base text-white/70 mb-10 max-w-2xl leading-relaxed">
              In maritime shipping, promises mean nothing without execution. We have built our reputation on a foundation of transparency, financial stability, and an unwavering commitment to delivering on our contractual obligations.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="h-[1px] w-12 bg-accent mb-4"></div>
              <h4 className="text-lg font-bold mb-2">Financial Strength</h4>
              <p className="text-white/60 text-sm leading-relaxed">
                A robust balance sheet ensuring stability through market cycles, giving our partners total peace of mind.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="h-[1px] w-12 bg-accent mb-4"></div>
              <h4 className="text-lg font-bold mb-2">Environmental Stewardship</h4>
              <p className="text-white/60 text-sm leading-relaxed">
                Investing in emission-reduction technologies and optimizing routing to minimize our carbon footprint.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="h-[1px] w-12 bg-accent mb-4"></div>
              <h4 className="text-lg font-bold mb-2">Risk Management</h4>
              <p className="text-white/60 text-sm leading-relaxed">
                Sophisticated hedging strategies and comprehensive insurance coverage to mitigate exposure across all operations.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className="h-[1px] w-12 bg-accent mb-4"></div>
              <h4 className="text-lg font-bold mb-2">Vetted Crewing</h4>
              <p className="text-white/60 text-sm leading-relaxed">
                Employing only highly-trained, experienced seafarers who prioritize safety, cargo care, and operational protocol.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
