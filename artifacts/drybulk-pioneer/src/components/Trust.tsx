import React from 'react';
import { motion } from 'framer-motion';

const FEATURES = [
  {
    title: 'Market Intelligence',
    desc: 'In-depth knowledge of dry bulk freight markets, vessel positioning and trade flows across all major routes.',
  },
  {
    title: 'Commercial Precision',
    desc: 'Rigorous voyage estimation, TCE analysis and charter-party review to protect your interests at every stage.',
  },
  {
    title: 'Post-Fixture Excellence',
    desc: 'Meticulous follow-up on voyage instructions, port coordination, freight settlement and demurrage claims.',
  },
  {
    title: 'Counterparty Network',
    desc: 'Established relationships with shipowners, charterers, operators and brokers across international dry bulk markets.',
  },
];

export function Trust() {
  return (
    <section id="why-us" className="relative py-16 md:py-24 bg-primary text-white overflow-hidden">
      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-20 items-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-accent text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-3">Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Built on expertise and{' '}
              <span className="text-white/80">market knowledge.</span>
            </h2>
            <p className="text-base text-white/70 leading-relaxed max-w-lg">
              Drybulk Pioneer was established by maritime professionals who understand the dry bulk
              market from the inside. We combine direct market access with disciplined commercial
              execution to deliver measurable results for our clients.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative aspect-[4/3]"
          >
            <div className="absolute inset-0 overflow-hidden">
              <img
                src="/images/trust-bow.jpg"
                alt="Bulk carrier at sea"
                className="absolute inset-0 w-full h-full object-cover"
                              />
            </div>

          </motion.div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white border-t-4 border-accent p-6 md:p-8 flex flex-col"
            >
              <h4 className="text-base md:text-lg font-bold text-primary mb-2 min-h-[48px] md:min-h-[56px]">
                {f.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
