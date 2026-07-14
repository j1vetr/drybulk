import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TradingAreasMap } from '@/components/TradingAreasMap';

const VESSEL_SEGMENTS = [
  { name: 'Handysize',           dwt: '~25,000-40,000 DWT' },
  { name: 'Handymax',            dwt: '~40,000-55,000 DWT' },
  { name: 'Supramax',            dwt: '~55,000-65,000 DWT' },
  { name: 'Ultramax',            dwt: '~60,000-65,000 DWT' },
  { name: 'Panamax / Kamsarmax', dwt: '~65,000-82,000 DWT' },
];

const CARGOES = [
  'Grain And Agricultural Products',
  'Fertiliser And Urea',
  'Sulphur',
  'Coal And Petcoke',
  'Minerals',
  'Cement And Clinker',
  'Steel Products',
  'Sugar',
  'Bagged And Bulk Commodities',
];

const INK = '#8FB8DE';
const PAPER = '#0A2540';

function Column({
  title,
  eyebrow,
  children,
  delay = 0,
}: {
  title: string;
  eyebrow: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay }}
      className="flex flex-col"
    >
      <p className="text-[10px] font-bold uppercase tracking-[0.22em] mb-2" style={{ color: `${INK}99` }}>
        {eyebrow}
      </p>
      <h3 className="text-white text-xl sm:text-2xl font-bold mb-5 leading-tight">{title}</h3>
      <div className="w-6 h-[2px] mb-6" style={{ backgroundColor: INK }} />
      {children}
    </motion.div>
  );
}

export function Fleet() {
  const [allowMotion, setAllowMotion] = useState(true);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    setAllowMotion(!query.matches);
    const handleChange = (e: MediaQueryListEvent) => setAllowMotion(!e.matches);
    query.addEventListener('change', handleChange);
    return () => query.removeEventListener('change', handleChange);
  }, []);

  return (
    <section id="segments" className="relative py-20 md:py-28 overflow-hidden" style={{ backgroundColor: PAPER }}>
      {/* Background video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {allowMotion ? (
          <video
            src="/videos/fleet-bg.mp4"
            poster="/images/fleet-bg-poster.webp"
            autoPlay muted loop playsInline preload="auto" aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        ) : (
          <img src="/images/fleet-bg-poster.webp" alt="" aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-center" />
        )}
        <div className="absolute inset-0" style={{ backgroundColor: `${PAPER}cc` }} />
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(to top, ${PAPER} 0%, ${PAPER}99 50%, ${PAPER}55 100%)` }}
        />
      </div>

      {/* Blueprint grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.07] z-[1]"
        style={{
          backgroundImage: `linear-gradient(${INK} 1px, transparent 1px), linear-gradient(90deg, ${INK} 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="container relative z-10 mx-auto px-6 md:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14 md:mb-20"
        >
          <p className="text-accent text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-3">
            Market Presence
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white leading-tight mb-4">
            Vessel Segments &amp; Market Coverage
          </h2>
          <p className="leading-relaxed text-base" style={{ color: `${INK}cc` }}>
            Drybulk Pioneer operates across a wide range of dry bulk vessel segments, commodity
            types and international trading areas.
          </p>
        </motion.div>

        {/* Top row: Vessel Segments + Cargoes */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 lg:gap-24 mb-14 md:mb-20">
          {/* Vessel Segments */}
          <Column title="Vessel Segments We Operate In" eyebrow="Ship Types" delay={0}>
            <ul className="space-y-0">
              {VESSEL_SEGMENTS.map((v) => (
                <li
                  key={v.name}
                  className="flex items-center justify-between gap-4 border-b py-3"
                  style={{ borderColor: `${INK}22` }}
                >
                  <span className="text-white text-sm font-semibold">{v.name}</span>
                  <span
                    className="text-xs font-mono shrink-0"
                    style={{ color: `${INK}88` }}
                  >
                    {v.dwt}
                  </span>
                </li>
              ))}
            </ul>
          </Column>

          {/* Cargoes */}
          <Column title="Cargoes" eyebrow="Commodities" delay={0.12}>
            <ul className="space-y-0">
              {CARGOES.map((c) => (
                <li
                  key={c}
                  className="flex items-center gap-3 text-sm border-b py-2.5"
                  style={{ borderColor: `${INK}22`, color: `${INK}dd` }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ backgroundColor: `${INK}77` }}
                  />
                  {c}
                </li>
              ))}
            </ul>
          </Column>
        </div>

        {/* Divider */}
        <div className="w-full h-px mb-14 md:mb-16" style={{ backgroundColor: `${INK}18` }} />

        {/* Trading Areas - full width map */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] mb-2" style={{ color: `${INK}99` }}>
            Geographies
          </p>
          <h3 className="text-white text-xl sm:text-2xl font-bold mb-5 leading-tight">
            Trading Areas
          </h3>
          <div className="w-6 h-[2px] mb-8" style={{ backgroundColor: INK }} />
          <TradingAreasMap />
        </motion.div>
      </div>
    </section>
  );
}
