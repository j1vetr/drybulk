import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, BarChart2, FileCheck, Globe, Calculator, MapPin } from 'lucide-react';

const COMPETENCIES = [
  {
    icon: TrendingUp,
    title: 'Dry Bulk Chartering',
    desc: 'Voyage and time charter across Handysize to Kamsarmax segments with direct market access.',
  },
  {
    icon: BarChart2,
    title: 'Commercial Operations',
    desc: 'Voyage estimation, TCE analysis, bunker planning and charter-party management.',
  },
  {
    icon: FileCheck,
    title: 'Post-Fixture Support',
    desc: 'End-to-end voyage execution including laytime, demurrage and freight settlement.',
  },
  {
    icon: Globe,
    title: 'Market Coverage',
    desc: 'Active across Mediterranean, Black Sea, Arabian Gulf, Indian Subcontinent and Far East.',
  },
  {
    icon: Calculator,
    title: 'Freight Analysis',
    desc: 'Detailed TCE modelling, freight benchmarking and cost analysis to protect commercial returns on every fixture.',
  },
  {
    icon: MapPin,
    title: 'Istanbul: A Maritime Gateway',
    desc: 'Strategically positioned at the crossroads of Mediterranean and Black Sea trades, with direct access to key regional commodity flows.',
  },
];

export function About() {
  return (
    <section id="about" className="relative py-20 md:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-[0.88fr_1.12fr] gap-14 lg:gap-16 items-start">

          {/* Left column: copy + photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <p className="text-accent text-sm font-bold tracking-[0.22em] uppercase mb-4">
              About Drybulk Pioneer
            </p>
            <div className="w-10 h-[3px] bg-accent mb-6" />

            <h2 className="text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-primary leading-tight mb-6">
              Istanbul-Based Dry Bulk Chartering &amp; Operations
            </h2>

            <p className="text-muted-foreground text-base leading-relaxed mb-5">
              Founded in Istanbul in 2026, Drybulk Pioneer Denizcilik ve Ticaret Ltd. Şti. is a
              dry bulk shipping and chartering company specialising in commercial operation,
              chartering and post-fixture support across international trades.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-5">
              Our team brings decades of combined experience in the dry bulk sector, with deep
              expertise across Handysize to Kamsarmax vessel segments and major commodity markets
              including grain, fertiliser, coal and steel products.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              Rather than a long corporate history, we offer something more valuable: hands-on
              sector knowledge, direct market access, and a commitment to transparent,
              client-focused execution on every fixture.
            </p>

            <div className="mt-auto rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/about-ship.webp"
                alt="Drybulk Pioneer bulk carrier at sea"
                className="w-full h-full max-h-72 object-cover"
              />
            </div>
          </motion.div>

          {/* Right column: 6 competency cards — 3 × 2 grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:pt-4"
          >
            {COMPETENCIES.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.07 }}
                  className="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md hover:border-accent/20 transition-all duration-300 p-5 flex flex-col group"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 group-hover:bg-accent/15 flex items-center justify-center mb-4 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-accent" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-primary font-bold text-sm mb-2 leading-snug">{item.title}</h3>
                  <div className="w-6 h-[2px] bg-accent/30 group-hover:bg-accent/50 mb-2.5 transition-colors duration-300" />
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
