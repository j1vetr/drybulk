import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Ship, TrendingUp, Handshake, MapPin, Compass, Wrench } from 'lucide-react';

const SERVICES = [
  {
    title: 'Shipping',
    desc: 'Safe, efficient sea transport for dry bulk and general cargo.',
    icon: Ship,
    image: '/images/services/shipping.jpg',
  },
  {
    title: 'Chartering',
    desc: 'Tailored chartering backed by market expertise and a trusted network.',
    icon: TrendingUp,
    image: '/images/services/chartering.jpg',
  },
  {
    title: 'Brokering',
    desc: 'Expert negotiation connecting shipowners and charterers.',
    icon: Handshake,
    image: '/images/services/brokering.jpg',
  },
  {
    title: 'Port Agency',
    desc: 'Responsive port services ensuring smooth calls, every time.',
    icon: MapPin,
    image: '/images/services/port-agency.jpg',
  },
  {
    title: 'Ship Management',
    desc: 'Technical and commercial management for efficient operations.',
    icon: Compass,
    image: '/images/services/ship-management.jpg',
  },
  {
    title: 'Ship Repair',
    desc: 'Coordinated docking, repair supervision, and technical support.',
    icon: Wrench,
    image: '/images/services/ship-repair.jpg',
  },
];

const INK = '#8FB8DE';
const PAPER = '#0A2540';

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
              Comprehensive Maritime Solutions
            </h2>
          </motion.div>
        </div>
      </div>

      <div
        className="w-full h-[560px] sm:h-[640px] lg:h-[760px] flex overflow-hidden relative"
        style={{ backgroundColor: PAPER, fontFamily: "'Inter', sans-serif" }}
      >
        {/* Blueprint grid texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.35] z-10"
          style={{
            backgroundImage: `linear-gradient(${INK}22 1px, transparent 1px), linear-gradient(90deg, ${INK}22 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.25] z-10"
          style={{
            backgroundImage: `linear-gradient(${INK}33 1px, transparent 1px), linear-gradient(90deg, ${INK}33 1px, transparent 1px)`,
            backgroundSize: '120px 120px',
          }}
        />

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
              {/* Cyanotype-duotone photo background */}
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
                {/* Duotone color layer: recolors the grayscale photo into the blueprint blue */}
                <div className="absolute inset-0" style={{ backgroundColor: '#3F8FD9', mixBlendMode: 'color' }} />
                {/* Base wash to keep it dark and legible */}
                <div className="absolute inset-0" style={{ backgroundColor: `${PAPER}${isActive ? '40' : '80'}` }} />
              </div>

              {/* Panel border, dashed like a drafting sheet division */}
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
              <div
                className="absolute top-4 left-2 w-2 h-2 border-t border-l pointer-events-none z-10"
                style={{ borderColor: `${INK}88` }}
              />
              <div
                className="absolute bottom-4 left-2 w-2 h-2 border-b border-l pointer-events-none z-10"
                style={{ borderColor: `${INK}88` }}
              />

              {/* Collapsed content */}
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
                    transition={{ duration: 0.35, delay: isActive ? 0.2 : 0 }}
                    className="absolute inset-0 p-6 sm:p-10 lg:p-14 flex flex-col justify-end z-10"
                  >
                    {/* Bottom scrim for text legibility over the photo */}
                    <div
                      className="absolute inset-x-0 bottom-0 h-2/3 pointer-events-none"
                      style={{ background: `linear-gradient(to top, ${PAPER}f2 0%, ${PAPER}b0 40%, transparent 100%)` }}
                    />
                    {/* Ruler ticks along the top */}
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
                      <div className="flex items-center gap-3 mb-4 sm:mb-6">
                        <div
                          className="w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center border"
                          style={{ borderColor: `${INK}66` }}
                        >
                          <Icon size={18} strokeWidth={1.25} color={INK} />
                        </div>
                      </div>

                      <h3 className="text-2xl sm:text-4xl lg:text-6xl font-semibold tracking-tight leading-none mb-3 sm:mb-6 text-white">
                        {s.title}
                      </h3>

                      <p className="text-xs sm:text-sm lg:text-base leading-relaxed" style={{ color: `${INK}dd` }}>
                        <span className="tracking-[0.2em]" style={{ color: INK }}>
                          SPEC:{' '}
                        </span>
                        {s.desc}
                      </p>
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
