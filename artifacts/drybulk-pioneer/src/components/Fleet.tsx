import React, { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';

const vessels = [
  {
    name: 'Pioneer Ocean',
    className: 'Capesize Bulk Carrier',
    image: '/images/pioneer-ocean.webp',
    capacity: '180,000 DWT',
    yearBuilt: '2018',
    length: '292.0 m',
  },
  {
    name: 'Pioneer Atlantic',
    className: 'Panamax Bulk Carrier',
    image: '/images/pioneer-atlantic.webp',
    capacity: '79,000 DWT',
    yearBuilt: '2016',
    length: '225.0 m',
  },
  {
    name: 'Pioneer Pacific',
    className: 'Supramax Bulk Carrier',
    image: '/images/pioneer-pacific.webp',
    capacity: '56,000 DWT',
    yearBuilt: '2019',
    length: '199.9 m',
  },
  {
    name: 'Pioneer Horizon',
    className: 'Handymax Bulk Carrier',
    image: '/images/pioneer-horizon.webp',
    capacity: '38,000 DWT',
    yearBuilt: '2017',
    length: '179.9 m',
  },
  {
    name: 'Pioneer Star',
    className: 'Handysize Bulk Carrier',
    image: '/images/pioneer-star.webp',
    capacity: '32,000 DWT',
    yearBuilt: '2015',
    length: '178.0 m',
  },
  {
    name: 'Pioneer Dawn',
    className: 'Handysize Bulk Carrier',
    image: '/images/pioneer-dawn.webp',
    capacity: '28,000 DWT',
    yearBuilt: '2014',
    length: '160.0 m',
  },
];

export function Fleet() {
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [allowMotion, setAllowMotion] = useState(true);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    setAllowMotion(!query.matches);
    const handleChange = (e: MediaQueryListEvent) => setAllowMotion(!e.matches);
    query.addEventListener('change', handleChange);
    return () => query.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => {
      setScrollSnaps(api.scrollSnapList());
      setSelectedIndex(api.selectedScrollSnap());
    };
    onSelect();
    api.on('select', onSelect);
    api.on('reInit', onSelect);
    return () => {
      api.off('select', onSelect);
      api.off('reInit', onSelect);
    };
  }, [api]);

  const scrollTo = useCallback((index: number) => api?.scrollTo(index), [api]);

  return (
    <section id="fleet" className="relative py-20 md:py-28 bg-primary overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {allowMotion ? (
          <video
            src="/videos/fleet-bg.mp4"
            poster="/images/fleet-bg-poster.webp"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        ) : (
          <img
            src="/images/fleet-bg-poster.webp"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        )}
        <div className="absolute inset-0 bg-primary/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/40"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-12 md:mb-16"
        >
          <p className="text-accent text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-3">
            Our Fleet
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white leading-tight mb-3">
            Modern Fleet. Global Standards.
          </h2>
          <p className="text-white/70 text-base leading-relaxed">
            Our modern and well-maintained fleet is equipped to handle a wide range of dry bulk cargoes, ensuring safe and efficient operations worldwide.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <Carousel
            setApi={setApi}
            opts={{ align: 'start', loop: true }}
            className="px-1"
          >
            <CarouselContent>
              {vessels.map((vessel) => (
                <CarouselItem
                  key={vessel.name}
                  className="basis-[85%] sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <div className="bg-white h-full flex flex-col group overflow-hidden">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={vessel.image}
                        alt={`${vessel.name}, a ${vessel.className.toLowerCase()}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="text-primary font-bold text-lg mb-1">{vessel.name}</h3>
                      <p className="text-accent text-xs font-semibold mb-4">{vessel.className}</p>

                      <div className="space-y-2 mb-4 text-sm">
                        <div className="flex justify-between border-b border-gray-100 pb-2">
                          <span className="text-muted-foreground">Capacity</span>
                          <span className="text-primary font-semibold">{vessel.capacity}</span>
                        </div>
                        <div className="flex justify-between border-b border-gray-100 pb-2">
                          <span className="text-muted-foreground">Year Built</span>
                          <span className="text-primary font-semibold">{vessel.yearBuilt}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Length</span>
                          <span className="text-primary font-semibold">{vessel.length}</span>
                        </div>
                      </div>

                      <a
                        href="#contact"
                        className="mt-auto inline-flex items-center gap-1.5 text-accent text-sm font-semibold hover:gap-2.5 transition-all"
                      >
                        View Details
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Prev / Next arrows */}
          <button
            type="button"
            aria-label="Previous vessel"
            onClick={() => api?.scrollPrev()}
            className="hidden md:flex absolute -left-5 top-[38%] -translate-y-1/2 w-11 h-11 rounded-full bg-white items-center justify-center text-primary shadow-lg hover:bg-accent hover:text-white transition-colors z-10"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            aria-label="Next vessel"
            onClick={() => api?.scrollNext()}
            className="hidden md:flex absolute -right-5 top-[38%] -translate-y-1/2 w-11 h-11 rounded-full bg-white items-center justify-center text-primary shadow-lg hover:bg-accent hover:text-white transition-colors z-10"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>

        {/* Dot pagination */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => scrollTo(index)}
              aria-current={index === selectedIndex}
              className={`h-2 rounded-full transition-all ${
                index === selectedIndex ? 'w-6 bg-accent' : 'w-2 bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
