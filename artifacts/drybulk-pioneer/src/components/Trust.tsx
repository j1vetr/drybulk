import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

const FEATURES = [
  {
    index: '01',
    title: 'Financial Strength',
    desc: 'A robust balance sheet ensuring stability through market cycles, giving our partners total peace of mind.',
  },
  {
    index: '02',
    title: 'Environmental Stewardship',
    desc: 'Investing in emission-reduction technologies and optimizing routing to minimize our carbon footprint.',
  },
  {
    index: '03',
    title: 'Risk Management',
    desc: 'Sophisticated hedging strategies and comprehensive insurance coverage to mitigate exposure across all operations.',
  },
  {
    index: '04',
    title: 'Vetted Crewing',
    desc: 'Employing only highly-trained, experienced seafarers who prioritize safety, cargo care, and operational protocol.',
  },
];

export function Trust() {
  return (
    <section id="why-us" className="relative py-16 md:py-24 bg-primary text-white overflow-hidden">
      {/* subtle technical grid texture, echoing the Services section's drafting motif */}
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
              Trust built on <span className="font-serif italic font-normal text-white/80">relentless</span> execution.
            </h2>
            <p className="text-base text-white/70 leading-relaxed max-w-lg">
              In maritime shipping, promises mean nothing without execution. We have built our reputation on a
              foundation of transparency, financial stability, and an unwavering commitment to delivering on our
              contractual obligations.
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
                alt="Ship bow cutting through waves"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ filter: 'grayscale(100%) contrast(1.15) brightness(0.9)' }}
              />
              <div className="absolute inset-0" style={{ backgroundColor: 'hsl(212 90% 40%)', mixBlendMode: 'color' }} />
              <div className="absolute inset-0 bg-primary/25" />
            </div>

            {/* Seal badge, overlapping the card corner */}
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 lg:-bottom-8 lg:-left-8 w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full bg-primary border border-accent/40 flex flex-col items-center justify-center text-center p-3 shadow-xl">
              <ShieldCheck aria-hidden="true" className="w-5 h-5 sm:w-6 sm:h-6 text-accent mb-1" />
              <span className="text-[8px] sm:text-[9px] lg:text-[10px] tracking-[0.15em] uppercase font-bold leading-tight">
                Verified
                <br />
                Operator
              </span>
            </div>
          </motion.div>
        </div>

        {/* Feature grid, presented as a technical spec sheet */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-primary p-6 md:p-8"
            >
              <span className="text-4xl md:text-5xl font-bold text-white/10 leading-none block mb-4">{f.index}</span>
              <h4 className="text-base md:text-lg font-bold mb-2">{f.title}</h4>
              <p className="text-white/60 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
