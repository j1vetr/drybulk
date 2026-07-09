import React from 'react';
import { motion } from 'framer-motion';
import {
  Ship,
  TrendingUp,
  Handshake,
  MapPin,
  Compass,
  Wrench,
  ArrowRight,
  Headphones,
} from 'lucide-react';

const services = [
  {
    icon: <Ship className="w-6 h-6" />,
    title: 'Shipping',
    description: 'Safe and efficient sea transport for dry bulk, breakbulk, project cargo, and general cargo.',
    image: '/images/services-shipping.webp',
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Chartering',
    description: 'Tailored chartering solutions backed by market expertise and a reliable vessel network.',
    image: '/images/services-chartering.webp',
  },
  {
    icon: <Handshake className="w-6 h-6" />,
    title: 'Brokering',
    description: 'Expert negotiation and commercial support connecting shipowners and charterers.',
    image: '/images/services-brokering.webp',
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: 'Port Agency',
    description: 'Efficient, responsive, and proactive port services to ensure smooth port calls.',
    image: '/images/services-port-agency.webp',
  },
  {
    icon: <Compass className="w-6 h-6" />,
    title: 'Ship Management',
    description: 'Professional technical and commercial management for safe and efficient operations.',
    image: '/images/services-ship-management.webp',
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: 'Ship Repair & Maintenance',
    description: 'Coordinated repair supervision, docking support, and technical assistance.',
    image: '/images/services-ship-repair.webp',
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-accent text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-3">
              Our Services
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-primary leading-[1.1] mb-4">
              Comprehensive Maritime Solutions
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed max-w-lg">
              From ocean freight to complete vessel management, we provide integrated services tailored to your business needs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[16/10] lg:aspect-[16/9]"
          >
            <img
              src="/images/services-hero.webp"
              alt="Drybulk Pioneer cargo ship sailing at sea"
              className="absolute inset-0 w-full h-full object-cover rounded-2xl"
              style={{
                maskImage: 'linear-gradient(to right, transparent, black 18%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 18%)',
              }}
            />
          </motion.div>
        </div>

        {/* Service cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-14 md:mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className="group flex bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="relative z-10 w-[58%] sm:w-[56%] flex flex-col pl-6 pr-4 py-6">
                <div className="w-11 h-11 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-3">
                  {service.icon}
                </div>
                <h3 className="text-primary font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  aria-label={`Learn more about ${service.title}`}
                  className="inline-flex items-center gap-1.5 text-accent text-sm font-semibold hover:gap-2.5 transition-all"
                >
                  Learn more
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="relative w-[42%] sm:w-[44%] overflow-hidden">
                <div
                  className="absolute inset-y-0 -left-8 right-0"
                  style={{ clipPath: 'polygon(22% 0, 100% 0, 100% 100%, 0 100%)' }}
                >
                  <img
                    src={service.image}
                    alt={`${service.title} service`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-primary rounded-2xl overflow-hidden px-6 py-6 md:px-10 md:py-8 flex flex-col md:flex-row md:items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 shrink-0 rounded-full bg-white/10 flex items-center justify-center text-accent">
              <Headphones className="w-6 h-6" />
            </div>
            <div>
              <p className="text-white font-bold text-lg mb-0.5">Need a customized solution?</p>
              <p className="text-white/60 text-sm">Our team is here to support your unique requirements.</p>
            </div>
          </div>
          <a
            href="#contact"
            className="shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary text-sm font-bold rounded-lg hover:bg-white/90 transition-colors group"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
