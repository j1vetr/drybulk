import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Scale, Search, Handshake, Leaf, Lock } from 'lucide-react';

const ITEMS = [
  {
    icon: ShieldCheck,
    title: 'Sanctions Compliance',
    desc: 'We conduct rigorous counterparty screening against international sanctions lists prior to engaging in any commercial transaction.',
  },
  {
    icon: Scale,
    title: 'Anti-Bribery & Corruption',
    desc: 'Zero-tolerance policy on bribery and corruption in all forms across every aspect of our commercial activities.',
  },
  {
    icon: Search,
    title: 'Counterparty Screening',
    desc: 'All business partners and counterparties undergo thorough due diligence checks before any fixture is concluded.',
  },
  {
    icon: Handshake,
    title: 'Responsible Business Conduct',
    desc: 'We uphold the highest standards of ethical conduct, transparency and integrity in every commercial relationship.',
  },
  {
    icon: Leaf,
    title: 'Environmental Awareness',
    desc: 'Committed to minimising the environmental impact of maritime operations through responsible voyage planning and vessel selection.',
  },
  {
    icon: Lock,
    title: 'Data Protection',
    desc: 'All personal and commercial data is handled with strict confidentiality in accordance with applicable data protection regulations.',
  },
];

export function Compliance() {
  return (
    <section id="compliance" className="py-20 md:py-28 bg-slate-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-start">
          {/* Left: heading */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-28"
          >
            <p className="text-accent text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-3">
              HSEQ &amp; Compliance
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight mb-5">
              Operating with integrity and accountability.
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              As a responsible dry bulk operator, Drybulk Pioneer is committed to the highest
              standards of ethical business conduct, regulatory compliance and environmental
              awareness across all of our activities.
            </p>
          </motion.div>

          {/* Right: grid */}
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            {ITEMS.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-white border border-gray-100 p-6 md:p-7 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-accent" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-bold text-primary text-base mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
