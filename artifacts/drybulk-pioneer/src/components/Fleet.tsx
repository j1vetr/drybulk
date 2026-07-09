import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const fleetClasses = [
  {
    name: "Capesize",
    capacity: "150,000 - 400,000 DWT",
    description: "The giants of our fleet, primarily utilized for transporting iron ore and coal across major deep-water trade routes.",
  },
  {
    name: "Panamax",
    capacity: "65,000 - 85,000 DWT",
    description: "Versatile workhorses capable of navigating the Panama Canal, ideal for coal, grain, and minor bulk commodities.",
  },
  {
    name: "Supramax",
    capacity: "50,000 - 60,000 DWT",
    description: "Geared vessels equipped with own cranes, offering maximum flexibility for ports lacking sophisticated cargo handling infrastructure.",
  },
  {
    name: "Handysize",
    capacity: "15,000 - 35,000 DWT",
    description: "Highly maneuverable vessels designed for niche ports and specialized bulk cargoes like steel products and fertilizers.",
  }
];

export function Fleet() {
  return (
    <section id="fleet" className="py-16 md:py-20 bg-gray-50 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-200/50 -skew-x-12 translate-x-1/4"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-14 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-3">Our Fleet</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
              Built for <span className="font-serif italic font-normal text-accent">scale</span>. <br/>Engineered for efficiency.
            </h3>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-sm max-w-md"
          >
            A modern, diversified fleet of bulk carriers maintained to the highest industry standards, ready to meet the demands of global commodity trading.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Main Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 aspect-[4/3] lg:aspect-auto bg-gray-200 relative group overflow-hidden"
          >
            <img 
              src="/images/fleet-vessel.jpg" 
              alt="Massive dry bulk carrier" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white/80 text-xs font-bold tracking-widest uppercase mb-2">Flagship Standard</p>
              <p className="text-white text-lg md:text-xl font-light">Maintaining an average fleet age significantly below industry standards to ensure maximum reliability.</p>
            </div>
          </motion.div>

          {/* Fleet Classes Accordion-style List */}
          <div className="lg:col-span-5 flex flex-col justify-center gap-4">
            {fleetClasses.map((shipClass, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group border-b border-gray-200 pb-4 last:border-0"
              >
                <div className="flex justify-between items-baseline mb-2">
                  <h4 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                    {shipClass.name}
                  </h4>
                  <span className="text-xs font-mono text-muted-foreground">{shipClass.capacity}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                  {shipClass.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
