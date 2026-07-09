import React from 'react';
import { motion } from 'framer-motion';
import { Settings, BarChart3, Navigation, Briefcase } from 'lucide-react';

const services = [
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: "Commercial Management",
    description: "Maximizing vessel earnings through strategic chartering, voyage estimation, and comprehensive market analysis to secure the most profitable employment.",
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: "Technical Management",
    description: "Ensuring vessels operate at peak efficiency with rigorous maintenance schedules, proactive dry-docking planning, and strict compliance with international regulations.",
  },
  {
    icon: <Navigation className="w-8 h-8" />,
    title: "Vessel Chartering",
    description: "Expert negotiation of voyage and time charter parties, matching cargo requirements with optimal tonnage while managing risk and exposure.",
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Post-fixture Operations",
    description: "Flawless execution of voyages including routing optimization, bunkering strategy, port agency coordination, and strict performance monitoring.",
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-4"
          >
            Our Expertise
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-primary leading-tight mb-6"
          >
            End-to-end maritime <span className="font-serif italic font-normal text-accent">solutions</span>.
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            From fixing the cargo to delivering it safely, we provide comprehensive management services that protect asset value and guarantee performance.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 lg:p-12 border border-gray-100 bg-white hover:bg-primary transition-colors duration-500"
            >
              <div className="text-accent group-hover:text-white transition-colors duration-500 mb-6">
                {service.icon}
              </div>
              <h4 className="text-2xl font-bold text-primary group-hover:text-white transition-colors duration-500 mb-4">
                {service.title}
              </h4>
              <p className="text-muted-foreground group-hover:text-white/80 transition-colors duration-500 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 w-full h-[400px] bg-gray-200 relative overflow-hidden"
        >
          <img 
            src="/images/services-cargo.jpg" 
            alt="Cargo loading operations" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
        </motion.div>
      </div>
    </section>
  );
}
