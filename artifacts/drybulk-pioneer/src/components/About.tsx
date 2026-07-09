import React from 'react';
import { motion } from 'framer-motion';
import { Anchor, Ship, Users, Headphones } from 'lucide-react';

const stats = [
  {
    icon: Anchor,
    value: '25+',
    title: 'Years of Experience',
    subtitle: 'Decades of expertise in dry bulk shipping and maritime operations.',
  },
  {
    icon: Ship,
    value: '1000+',
    title: 'Successful Voyages',
    subtitle: 'Delivering cargo safely and efficiently across the globe.',
  },
  {
    icon: Users,
    value: '98%',
    title: 'Client Satisfaction',
    subtitle: 'Built on trust, transparency, and consistent performance.',
  },
  {
    icon: Headphones,
    value: '24/7',
    title: 'Operational Support',
    subtitle: 'Our team is always ready to assist you, anytime, anywhere.',
  },
];

export function About() {
  return (
    <section id="about" className="relative py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-stretch">

          {/* Left column: copy + photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <p className="text-accent text-sm font-bold tracking-[0.2em] uppercase mb-4">
              About Drybulk Pioneer
            </p>
            <div className="w-10 h-[3px] bg-accent mb-6"></div>

            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-primary leading-tight mb-6">
              Your Trusted Partner in Maritime Solutions
            </h2>

            <p className="text-muted-foreground text-base leading-relaxed mb-5">
              With over two decades of experience in dry bulk shipping, we deliver safe, efficient, and tailor-made solutions to meet the evolving needs of our global clients.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              Our commitment to operational excellence, integrity, and long-term partnerships makes us a reliable partner at every stage of your journey.
            </p>

            <div className="mt-auto rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/about-ship.webp"
                alt="Drybulk Pioneer bulk carrier heading out to open sea"
                className="w-full h-full max-h-80 object-cover"
              />
            </div>
          </motion.div>

          {/* Right column: stat cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow p-8 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-5">
                  <stat.icon className="w-7 h-7 text-accent" strokeWidth={1.75} />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-primary font-bold text-base mb-3">{stat.title}</div>
                <div className="w-8 h-[2px] bg-accent/30 mb-3"></div>
                <p className="text-sm text-muted-foreground leading-relaxed">{stat.subtitle}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
