import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, BarChart2, FileCheck } from 'lucide-react';

const SERVICES = [
  {
    title: 'Dry Bulk Chartering',
    desc: 'Voyage and time charter solutions with direct market access across all major dry bulk vessel segments.',
    icon: TrendingUp,
    image: '/images/services/chartering.jpg',
    items: [
      'Voyage Charter',
      'Time Charter',
      'Cargo And Vessel Matching',
      'Freight Negotiation',
      'Market Evaluation',
    ],
  },
  {
    title: 'Commercial Operations',
    desc: 'Comprehensive commercial management ensuring each fixture is optimised for profitability and performance.',
    icon: BarChart2,
    image: '/images/services/shipping.jpg',
    items: [
      'Voyage Estimation',
      'TCE And Profitability Analysis',
      'Bunker Planning',
      'Trade And Employment Evaluation',
      'Charter-Party Follow-Up',
    ],
  },
  {
    title: 'Post-Fixture & Operations',
    desc: 'End-to-end voyage execution and post-fixture support from loading to final freight settlement.',
    icon: FileCheck,
    image: '/images/services/brokering.jpg',
    items: [
      'Voyage Instructions',
      'Port And Agency Coordination',
      'Freight And Hire Follow-Up',
      'Laytime And Demurrage',
      'Operational Reporting',
    ],
  },
];

const INK = '#8FB8DE';
const PAPER = '#141F38';

export function Services() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="relative">
      <div className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="text-accent text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-3">
              Our Services
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-primary leading-[1.1]">
              What Drybulk Pioneer Delivers
            </h2>
          </motion.div>
        </div>
      </div>

      <div
        className="w-full h-[560px] sm:h-[640px] lg:h-[760px] flex overflow-hidden relative"
        style={{ backgroundColor: PAPER }}
      >
        {SERVICES.map((s, i) => {
          const isActive = i === active;
          const Icon = s.icon;
          return (
            <div
              key={s.title}
              onClick={() => setActive(i)}
              role="button"
              tabIndex={0}
              aria-pressed={isActive}
              aria-label={`Show ${s.title} details`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActive(i);
                }
              }}
              style={{ flexGrow: isActive ? 14 : 1, flexBasis: 0, minWidth: 44 }}
              className="relative h-full cursor-pointer transition-[flex-grow] duration-[550ms] ease-[cubic-bezier(0.65,0,0.35,1)] group focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white/80 focus-visible:z-20"
            >
              {/* Photo background */}
              <div className="absolute inset-0 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out"
                  style={{
                    backgroundImage: `url(${s.image})`,
                    filter: isActive
                      ? 'grayscale(100%) contrast(1.2) brightness(1.05)'
                      : 'grayscale(100%) contrast(1.1) brightness(0.6)',
                    transform: isActive ? 'scale(1.04)' : 'scale(1)',
                  }}
                />
                <div className="absolute inset-0" style={{ backgroundColor: '#3F8FD9', mixBlendMode: 'color' }} />
                <div className="absolute inset-0" style={{ backgroundColor: `${PAPER}${isActive ? '40' : '80'}` }} />
              </div>

              {/* Panel divider */}
              {i !== 0 && (
                <div
                  className="absolute left-0 top-0 bottom-0 w-px z-10"
                  style={{
                    backgroundImage: `linear-gradient(${INK}66 60%, transparent 0%)`,
                    backgroundSize: '1px 10px',
                  }}
                />
              )}

              {/* Corner crop marks */}
              <div className="absolute top-4 left-2 w-2 h-2 border-t border-l pointer-events-none z-10" style={{ borderColor: `${INK}88` }} />
              <div className="absolute bottom-4 left-2 w-2 h-2 border-b border-l pointer-events-none z-10" style={{ borderColor: `${INK}88` }} />

              {/* Collapsed label */}
              <div
                className={`absolute inset-0 flex flex-col items-center justify-between py-6 sm:py-10 z-10 transition-opacity duration-300 ${
                  isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
              >
                <span className="w-8" />
                <span
                  className="whitespace-nowrap uppercase text-sm sm:text-lg lg:text-2xl tracking-[0.1em] sm:tracking-[0.15em] font-bold group-hover:text-white transition-colors"
                  style={{ writingMode: 'vertical-rl', color: INK }}
                >
                  {s.title}
                </span>
                <Icon size={18} strokeWidth={1.25} style={{ color: `${INK}aa` }} className="hidden sm:block" />
                <span className="w-8 sm:hidden" />
              </div>

              {/* Expanded content */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35, delay: 0.2 }}
                    className="absolute inset-0 p-6 sm:p-10 lg:p-14 flex flex-col justify-end z-10"
                  >
                    {/* Bottom scrim */}
                    <div
                      className="absolute inset-x-0 bottom-0 h-2/3 pointer-events-none"
                      style={{ background: `linear-gradient(to top, ${PAPER}f2 0%, ${PAPER}b0 40%, transparent 100%)` }}
                    />
                    {/* Ruler ticks */}
                    <div
                      className="absolute top-0 left-0 right-0 h-8 hidden sm:flex items-end"
                      style={{ borderBottom: `1px solid ${INK}55` }}
                    >
                      {Array.from({ length: 24 }).map((_, t) => (
                        <div key={t} className="flex-1 flex justify-start">
                          <div style={{ width: 1, height: t % 4 === 0 ? 10 : 5, background: `${INK}66` }} />
                        </div>
                      ))}
                    </div>

                    <div className="max-w-xl relative z-10">
                      <div className="flex items-center gap-3 mb-4 sm:mb-5">
                        <div className="w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center border" style={{ borderColor: `${INK}66` }}>
                          <Icon size={18} strokeWidth={1.25} color={INK} />
                        </div>
                      </div>

                      <h3 className="text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-none mb-3 sm:mb-5 text-white">
                        {s.title}
                      </h3>

                      <p className="text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6" style={{ color: `${INK}cc` }}>
                        {s.desc}
                      </p>

                      {/* Sub-items list */}
                      <ul className="space-y-1.5">
                        {s.items.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-xs sm:text-sm" style={{ color: `${INK}dd` }}>
                            <span className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: INK }} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
