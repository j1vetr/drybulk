import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');
const asset = (path: string) => `${BASE}${path}`;

type VesselPhoto = { src: string; alt: string; width: number; height: number };
type SpecRow = [label: string, value: string | undefined];
type SpecGroup = { title: string; rows: SpecRow[] };
type Vessel = {
  id: string;
  name: string;
  type?: string;
  imo?: string;
  photos: VesselPhoto[];
  highlights?: { value: string; label: string }[];
  specs?: SpecGroup[];
};

/* Add further vessels here. Only confirmed data belongs in this list. Missing specs are hidden. */
export const VESSELS: Vessel[] = [
  {
    id: 'rhosus-cy',
    name: 'RHOSUS CY',
    type: 'Bulk Carrier',
    imo: '9426192',
    photos: [
      { src: '/images/vessels/rhosus-cy-1.webp', alt: 'RHOSUS CY, photograph 1', width: 1440, height: 917 },
      { src: '/images/vessels/rhosus-cy-2.webp', alt: 'RHOSUS CY, photograph 2', width: 1440, height: 874 },
    ],
    highlights: [
      { value: '57,937 MT', label: 'Deadweight' },
      { value: '189.99 m', label: 'Length Overall' },
      { value: '32.26 m', label: 'Beam' },
      { value: '12.83 m', label: 'Maximum Draft' },
      { value: '2011', label: 'Year Built' },
      { value: '8,450 kW', label: 'Engine Power' },
    ],
    specs: [
      { title: 'Vessel Overview', rows: [
        ['Vessel Name', 'RHOSUS CY'], ['Vessel Type', 'Bulk Carrier'], ['IMO Number', '9426192'],
        ['Year Built', '2011'], ['Country of Build', 'Philippines'], ['Hull Type', 'Single Hull'],
        ['Hull Material', 'Steel'], ['Number of Decks', '1'] ] },
      { title: 'Principal Dimensions', rows: [
        ['Length Overall (LOA)', '189.99 m'], ['Length Between Perpendiculars (LBP)', '185.60 m'],
        ['Breadth Moulded', '32.26 m'], ['Breadth Extreme', '32.26 m'], ['Moulded Depth', '18.00 m'],
        ['Maximum Draft', '12.83 m'], ['Freeboard', '5.225 m'] ] },
      { title: 'Tonnage & Capacity', rows: [
        ['Deadweight Tonnage (DWT)', '57,937 MT'], ['Gross Tonnage (GT)', '32,309'], ['Net Tonnage (NT)', '19,439'],
        ['Loaded Displacement', '67,814 MT'], ['Light Displacement', '9,877 MT'] ] },
      { title: 'Main Engine Specifications', rows: [
        ['Engine Type', 'Diesel Engine'], ['Engine Model', '6S50MC-C'], ['Number of Main Engines', '1'],
        ['Number of Cylinders', '6'], ['Engine Power', '8,450 kW'], ['Engine Speed', '119 RPM'],
        ['Cylinder Bore', '500 mm'], ['Piston Stroke', '2,000 mm'] ] },
      { title: 'Construction Details', rows: [
        ['Country of Build', 'Philippines'], ['Yard Number', '135'], ['Order Date', '01 January 2007'],
        ['Keel Laid', '13 September 2010'], ['Launch Date', '07 July 2011'],
        ['Delivery / Built Date', '15 September 2011'], ['Hull Construction', 'Single Hull'], ['Hull Material', 'Steel'] ] },
      { title: 'Additional Technical Information', rows: [
        ['AIS Transceiver Class', 'Class A'], ['Distance to Bow', '163 m'], ['Distance to Stern', '26.99 m'],
        ['Distance to Port', '19 m'], ['Distance to Starboard', '13.26 m'] ] },
    ],
  },
  {
    id: 'sea-diamond-i',
    name: 'SEA DIAMOND I',
    photos: [
      { src: '/images/vessels/sea-diamond-i-1.webp', alt: 'SEA DIAMOND I, photograph 1', width: 1600, height: 1111 },
      { src: '/images/vessels/sea-diamond-i-2.webp', alt: 'SEA DIAMOND I, photograph 2', width: 1600, height: 1112 },
    ],
  },
];

function Specs({ vessel }: { vessel: Vessel }) {
  const groups = (vessel.specs ?? [])
    .map((g) => ({ ...g, rows: g.rows.filter((r): r is [string, string] => !!r[1]) }))
    .filter((g) => g.rows.length);
  if (!vessel.highlights?.length && !groups.length) return null;
  return (
    <div className="mt-6" data-testid={`specs-${vessel.id}`}>
      {vessel.highlights && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/15 border border-white/15 mb-8">
          {vessel.highlights.map((h) => (
            <div key={h.label} className="bg-[#0d2c4b] px-4 py-5">
              <p className="text-white font-bold text-2xl xl:text-3xl leading-none">{h.value}</p>
              <p className="mt-2 text-[#8FB8DE] text-[10px] font-bold uppercase tracking-[0.18em]">{h.label}</p>
            </div>
          ))}
        </div>
      )}
      <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
        {groups.map((g) => (
          <div key={g.title}>
            <h4 className="text-[#8FB8DE] text-xs font-bold uppercase tracking-[0.2em] pb-3 border-b border-white/25">{g.title}</h4>
            <dl>
              {g.rows.map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 py-2.5 border-b border-white/10 text-sm">
                  <dt className="text-white/60">{k}</dt>
                  <dd className="text-white font-medium text-right">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </div>
  );
}

function Lightbox({
  vessel,
  index,
  onClose,
  onIndex,
}: {
  vessel: Vessel;
  index: number;
  onClose: () => void;
  onIndex: (i: number) => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const total = vessel.photos.length;
  const photo = vessel.photos[index];
  const go = useCallback((d: number) => onIndex((index + d + total) % total), [index, total, onIndex]);

  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = original;
      prev?.focus();
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && total > 1) go(1);
      if (e.key === 'ArrowLeft' && total > 1) go(-1);
      if (e.key === 'Tab') {
        const buttons = dialogRef.current?.querySelectorAll<HTMLButtonElement>('button');
        if (!buttons?.length) return;
        const first = buttons[0];
        const last = buttons[buttons.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [go, onClose, total]);

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`${vessel.name} photo viewer`}
      className="fixed inset-0 z-[100] bg-[#06182b]/95 flex flex-col motion-safe:animate-[vfade_.25s_ease-out]"
      onClick={onClose}
      data-testid="dialog-vessel-lightbox"
    >
      <div className="flex items-center justify-between px-4 sm:px-8 py-4 text-white" onClick={(e) => e.stopPropagation()}>
        <p className="text-xs font-bold uppercase tracking-[0.22em]">
          {vessel.name}
          <span className="text-white/50 font-medium ml-3">
            {index + 1} / {total}
          </span>
        </p>
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Close photo viewer"
          className="p-2 hover:bg-white/10 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          data-testid="button-close-lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>
      <div className="flex-1 min-h-0 flex items-center justify-center px-2 sm:px-16 pb-6 relative">
        <img
          key={photo.src}
          src={asset(photo.src)}
          alt={photo.alt}
          className="max-w-full max-h-full object-contain motion-safe:animate-[vfade_.3s_ease-out]"
          onClick={(e) => e.stopPropagation()}
        />
        {total > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); go(-1); }}
              aria-label="Previous photo"
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-3 bg-black/40 text-white hover:bg-black/60 transition-colors"
              data-testid="button-prev-photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); go(1); }}
              aria-label="Next photo"
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-3 bg-black/40 text-white hover:bg-black/60 transition-colors"
              data-testid="button-next-photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}
      </div>
    </div>
  );
}

function summary(v: Vessel): [string, string][] {
  const h = (l: string) => v.highlights?.find((x) => x.label === l)?.value;
  const rows: [string, string | undefined][] = [
    ['Type', v.type], ['IMO', v.imo], ['Built', h('Year Built')],
    ['DWT', h('Deadweight')], ['LOA', h('Length Overall')], ['Beam', h('Beam')],
  ];
  return rows.filter((r): r is [string, string] => !!r[1]);
}

function VesselModal({ vessel, onClose }: { vessel: Vessel; onClose: () => void }) {
  const [active, setActive] = useState(0);
  const [zoom, setZoom] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const photo = vessel.photos[active];

  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = original; prev?.focus(); };
  }, []);
  useEffect(() => {
    if (zoom !== null) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, zoom]);

  return (
    <div
      role="dialog" aria-modal="true" aria-label={`${vessel.name} details`}
      className="fixed inset-0 z-[90] bg-[#06182b]/90 overflow-y-auto motion-safe:animate-[vfade_.25s_ease-out]"
      onClick={onClose} data-testid={`dialog-vessel-${vessel.id}`}
    >
      <div className="min-h-full flex items-start sm:items-center justify-center p-0 sm:p-6">
        <div className="relative w-full max-w-5xl bg-[#0A2540] border border-white/15" onClick={(e) => e.stopPropagation()}>
          <button ref={closeRef} onClick={onClose} aria-label="Close vessel details"
            className="absolute top-3 right-3 z-10 p-2 bg-[#06182b]/70 text-white hover:bg-[#06182b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
            data-testid="button-close-vessel">
            <X className="w-5 h-5" />
          </button>
          <div className="relative">
            <button type="button" onClick={() => setZoom(active)} className="block w-full aspect-[16/9] sm:aspect-[2/1] bg-[#0d2c4b] overflow-hidden group" aria-label="View photo full size">
              <img src={asset(photo.src)} alt={photo.alt} className="w-full h-full object-cover" />
            </button>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#06182b] to-transparent p-5 sm:p-8 pt-20 pointer-events-none">
              <p className="text-[#8FB8DE] text-xs font-bold uppercase tracking-[0.2em] mb-2">
                {[vessel.type, vessel.imo && `IMO ${vessel.imo}`].filter(Boolean).join(' / ')}
              </p>
              <h3 className="text-white font-bold text-3xl sm:text-5xl tracking-tight leading-none">{vessel.name}</h3>
            </div>
          </div>
          {vessel.photos.length > 1 && (
            <div className="flex gap-2 px-5 sm:px-8 pt-4">
              {vessel.photos.map((p, i) => (
                <button key={p.src} onClick={() => setActive(i)} aria-label={`Show photo ${i + 1}`}
                  className={`w-20 h-14 overflow-hidden border-2 ${i === active ? 'border-[#8FB8DE]' : 'border-transparent opacity-60 hover:opacity-100'}`}>
                  <img src={asset(p.src)} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
          <div className="px-5 sm:px-8 pb-8">
            {vessel.specs || vessel.highlights ? <Specs vessel={vessel} /> : (
              <p className="mt-8 text-white/60 text-sm border border-white/15 px-5 py-6">
                Technical specifications for this vessel will be published soon.
              </p>
            )}
          </div>
        </div>
      </div>
      {zoom !== null && (
        <div onClick={(e) => e.stopPropagation()}>
          <Lightbox vessel={vessel} index={zoom} onClose={() => setZoom(null)} onIndex={setZoom} />
        </div>
      )}
    </div>
  );
}

function VesselCard({ vessel, i, onOpen }: { vessel: Vessel; i: number; onOpen: () => void }) {
  const reduce = useReducedMotion();
  const facts = summary(vessel).filter(([k]) => k !== 'Type' && k !== 'IMO');
  return (
    <motion.button
      type="button" onClick={onOpen}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="group text-left bg-primary shadow-xl shadow-primary/15 flex flex-col focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
      aria-label={`View ${vessel.name} details`}
      data-testid={`card-vessel-${vessel.id}`}
    >
      <div className="relative aspect-[16/11] overflow-hidden">
        <img src={asset(vessel.photos[0].src)} alt={vessel.photos[0].alt} width={vessel.photos[0].width} height={vessel.photos[0].height}
          loading="lazy" decoding="async"
          className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out motion-safe:group-hover:scale-[1.05]" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent" />
        <div className="absolute top-4 left-4 flex gap-2">
          {vessel.type && <span className="bg-accent text-white text-[10px] font-bold uppercase tracking-[0.18em] px-3 py-1.5">{vessel.type}</span>}
          {vessel.imo && <span className="bg-white/90 text-primary text-[10px] font-bold uppercase tracking-[0.18em] px-3 py-1.5">IMO {vessel.imo}</span>}
        </div>
        <span className="absolute top-4 right-4 bg-primary/70 text-white text-[10px] font-bold uppercase tracking-[0.18em] px-3 py-1.5">
          {vessel.photos.length} Photos
        </span>
        <h3 className="absolute bottom-4 left-5 right-5 text-white font-bold text-3xl sm:text-4xl tracking-tight leading-none" data-testid={`text-vessel-name-${vessel.id}`}>
          {vessel.name}
        </h3>
      </div>
      <div className="p-5 sm:p-6 flex-1 flex flex-col">
        {facts.length > 0 ? (
          <dl className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/15">
            {facts.map(([k, v]) => (
              <div key={k} className="bg-primary py-3 pr-3 sm:px-3 first:sm:pl-0">
                <dt className="text-[#8FB8DE] text-[10px] font-bold uppercase tracking-[0.18em]">{k}</dt>
                <dd className="text-white text-lg font-bold mt-1">{v}</dd>
              </div>
            ))}
          </dl>
        ) : (
          <p className="text-white/60 text-sm">Photographs available. Technical specifications to follow.</p>
        )}
        <span className="mt-auto pt-5 inline-flex items-center gap-2 text-white text-xs font-bold uppercase tracking-[0.2em] group-hover:gap-3 transition-all">
          <span className="border-b border-accent pb-0.5">View Specifications</span>
          <ChevronRight className="w-4 h-4 text-accent" aria-hidden="true" />
        </span>
      </div>
    </motion.button>
  );
}

export function Vessels() {
  const [openId, setOpenId] = useState<string | null>(null);
  const current = VESSELS.find((v) => v.id === openId);
  const close = useCallback(() => setOpenId(null), []);
  return (
    <section id="vessels" className="bg-white py-16 md:py-24 scroll-mt-16" aria-labelledby="vessels-heading">
      <style>{`@keyframes vfade{from{opacity:0}to{opacity:1}}`}</style>
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-10 md:mb-14 grid md:grid-cols-[1fr_auto] gap-6 md:items-end">
          <div>
            <p className="text-accent text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-3">On the Water</p>
            <div className="w-10 h-[3px] bg-accent mb-5" />
            <h2 id="vessels-heading" className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-primary leading-[1.1]">
              Our Fleet
            </h2>
          </div>
          <p className="text-muted-foreground text-sm md:text-base max-w-md leading-relaxed md:text-right">
            Select a vessel to see its photographs and full technical specifications.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {VESSELS.map((v, i) => <VesselCard key={v.id} vessel={v} i={i} onOpen={() => setOpenId(v.id)} />)}
        </div>
      </div>
      {current && <VesselModal vessel={current} onClose={close} />}
    </section>
  );
}
