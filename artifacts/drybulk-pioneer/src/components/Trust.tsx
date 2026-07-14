import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

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
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

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
              <span className="font-serif italic font-normal text-white/80">market knowledge.</span>
            </h2>
            <p className="text-base text-white/70 leading-relaxed max-w-lg">
              Drybulk Pioneer was established by maritime professionals who understand the dry bulk
              market from the inside. We combine direct market access with disciplined commercial
              execution to deliver measurable results for our clients.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative aspect-[4/3]"
          >
            <div className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10">
              <img
                src="/images/trust-bow.jpg"
                alt="Bulk carrier at sea"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ filter: 'grayscale(100%) contrast(1.15) brightness(0.9)' }}
              />
              <div className="absolute inset-0" style={{ backgroundColor: 'hsl(212 90% 40%)', mixBlendMode: 'color' }} />
              <div className="absolute inset-0 bg-primary/25" />
            </div>

            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 lg:-bottom-8 lg:-left-8 w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full bg-primary border border-accent/40 flex flex-col items-center justify-center text-center p-3 shadow-xl">
              <ShieldCheck aria-hidden="true" className="w-5 h-5 sm:w-6 sm:h-6 text-accent mb-1" />
              <span className="text-[8px] sm:text-[9px] lg:text-[10px] tracking-[0.15em] uppercase font-bold leading-tight">
                Verified<br />Operator
              </span>
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
              className="bg-white rounded-xl border border-white/10 p-6 md:p-8 flex flex-col"
            >
              <div className="h-1 w-10 bg-accent rounded-full mb-4" />
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
