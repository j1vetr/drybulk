import { useState, useEffect, useMemo, useRef } from 'react';
import { geoNaturalEarth1, geoPath } from 'd3-geo';
// @ts-ignore - topojson-client has loose typings
import { feature } from 'topojson-client';
import { motion, AnimatePresence } from 'framer-motion';

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

const INK = '#8FB8DE';
const ACTIVE_FILL = '#2980B9';
const ACTIVE_HOVER = '#4DAEE8';
const INACTIVE_FILL = '#0e1e2e';
const INACTIVE_HOVER = '#152332';
const STROKE = '#8FB8DE0f';

// Numeric ISO 3166-1 codes per trading area
const AREA_CODES: Record<string, number[]> = {
  Mediterranean: [
    724, 250, 380, 300, 191, 705, 499, 8,
    470, 196, 422, 376, 818, 434, 788, 12, 504,
  ],
  'Black Sea': [642, 100, 804, 268, 792],
  'Arabian Gulf': [414, 48, 634, 784, 512, 682, 368],
  'Red Sea': [736, 232, 262, 887, 400],
  'Indian Subcontinent': [356, 586, 50, 144],
  'East & South Africa': [404, 834, 508, 710, 450, 480, 706, 231],
  'Southeast Asia': [104, 764, 704, 116, 458, 702, 360, 608, 418, 96],
  'Far East': [156, 392, 410, 408],
  'South America': [76, 32, 152, 858, 604, 170, 218, 862, 328, 740, 68, 600],
};

// Reverse lookup: numeric ISO -> area name
const CODE_TO_AREA: Record<number, string> = {};
for (const [area, codes] of Object.entries(AREA_CODES)) {
  for (const code of codes) {
    if (!CODE_TO_AREA[code]) CODE_TO_AREA[code] = area;
  }
}

const AREA_NAMES = Object.keys(AREA_CODES);

type GeoFeature = {
  id: string | number;
  type: string;
  geometry: any;
  properties: any;
};

export function TradingAreasMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [countries, setCountries] = useState<GeoFeature[]>([]);
  const [loading, setLoading] = useState(true);
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);
  const [containerWidth, setContainerWidth] = useState(800);

  // Load topojson from CDN
  useEffect(() => {
    fetch(GEO_URL)
      .then((r) => r.json())
      .then((topology) => {
        const fc = feature(topology, topology.objects.countries) as any;
        setCountries(fc.features ?? []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Track container width for responsive SVG
  useEffect(() => {
    if (!containerRef.current) return;
    const ro = new ResizeObserver((entries) => {
      const w = entries[0]?.contentRect.width;
      if (w && w > 0) setContainerWidth(w);
    });
    ro.observe(containerRef.current);
    // Set initial width
    setContainerWidth(containerRef.current.offsetWidth || 800);
    return () => ro.disconnect();
  }, []);

  const svgHeight = Math.round(containerWidth * 0.5);

  const projection = useMemo(
    () =>
      geoNaturalEarth1()
        .scale(containerWidth / 6.1)
        .translate([containerWidth / 2, svgHeight / 2]),
    [containerWidth, svgHeight],
  );

  const pathGen = useMemo(() => geoPath(projection), [projection]);

  return (
    <div className="flex flex-col gap-5">
      {/* SVG map */}
      <div ref={containerRef} className="relative w-full overflow-hidden">
        {/* Hover label */}
        <div className="absolute top-2 right-2 z-10 pointer-events-none">
          <AnimatePresence mode="wait">
            {hoveredArea ? (
              <motion.div
                key={hoveredArea}
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 4 }}
                transition={{ duration: 0.14 }}
                className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] border"
                style={{
                  color: ACTIVE_HOVER,
                  backgroundColor: '#0A2540f0',
                  borderColor: '#8FB8DE2a',
                }}
              >
                {hoveredArea}
              </motion.div>
            ) : (
              <motion.div
                key="hint"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.45 }}
                exit={{ opacity: 0 }}
                className="px-3 py-1.5 text-[10px] tracking-wider"
                style={{ color: INK }}
              >
                Hover to explore
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Loading skeleton */}
        {loading && (
          <div
            className="w-full animate-pulse"
            style={{
              height: svgHeight,
              backgroundColor: INACTIVE_FILL,
              borderRadius: 2,
            }}
          />
        )}

        {!loading && (
          <svg
            width={containerWidth}
            height={svgHeight}
            viewBox={`0 0 ${containerWidth} ${svgHeight}`}
            style={{ display: 'block', overflow: 'hidden' }}
            aria-label="Interactive world map showing Drybulk Pioneer trading areas"
          >
            {countries.map((geo, i) => {
              const numericId = +geo.id;
              const area = CODE_TO_AREA[numericId];
              const isActive = Boolean(area);
              const isHovered = area === hoveredArea;
              const d = pathGen(geo as any);
              if (!d) return null;

              return (
                <path
                  key={`${geo.id ?? 'x'}-${i}`}
                  d={d}
                  fill={
                    isActive
                      ? isHovered
                        ? ACTIVE_HOVER
                        : ACTIVE_FILL
                      : isHovered
                        ? INACTIVE_HOVER
                        : INACTIVE_FILL
                  }
                  stroke={STROKE}
                  strokeWidth={0.35}
                  style={{
                    cursor: isActive ? 'crosshair' : 'default',
                    transition: 'fill 0.18s ease',
                  }}
                  onMouseEnter={() => setHoveredArea(area ?? null)}
                  onMouseLeave={() => setHoveredArea(null)}
                />
              );
            })}
          </svg>
        )}
      </div>

      {/* Region badges */}
      <div className="flex flex-wrap gap-2">
        {AREA_NAMES.map((name) => {
          const active = hoveredArea === name;
          return (
            <span
              key={name}
              onMouseEnter={() => setHoveredArea(name)}
              onMouseLeave={() => setHoveredArea(null)}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider cursor-default select-none"
              style={{
                color: active ? ACTIVE_HOVER : `${INK}88`,
                backgroundColor: active ? `${ACTIVE_FILL}22` : `${INK}08`,
                border: `1px solid ${active ? `${INK}40` : `${INK}15`}`,
                transition: 'all 0.15s ease',
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{
                  backgroundColor: active ? ACTIVE_HOVER : `${INK}44`,
                  transition: 'background-color 0.15s ease',
                }}
              />
              {name}
            </span>
          );
        })}
      </div>
    </div>
  );
}
