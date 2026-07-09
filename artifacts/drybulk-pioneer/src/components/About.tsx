import React from 'react';
import { motion } from 'framer-motion';
import { Anchor, Globe2, ShieldCheck, Clock } from 'lucide-react';

const stats = [
  { value: "2.5M+", label: "DWT Total Capacity" },
  { value: "15+", label: "Years of Excellence" },
  { value: "120+", label: "Global Ports Served" },
  { value: "24/7", label: "Operations Support" }
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-4">About The Company</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-primary leading-tight mb-6">
                A legacy of <span className="font-serif italic font-normal text-accent">strength</span> on the open ocean.
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Drybulk Pioneer Denizcilik was established with a singular vision: to bring unparalleled operational excellence to the international dry bulk sector. We are more than ship operators; we are the vital link in the global supply chain, ensuring raw materials reach their destinations safely, efficiently, and on schedule.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-100">
              <div className="space-y-3">
                <Globe2 className="w-6 h-6 text-accent" />
                <h4 className="text-primary font-bold">Global Reach</h4>
                <p className="text-sm text-muted-foreground">Navigating major trade routes across all continents with precision.</p>
              </div>
              <div className="space-y-3">
                <ShieldCheck className="w-6 h-6 text-accent" />
                <h4 className="text-primary font-bold">Uncompromising Safety</h4>
                <p className="text-sm text-muted-foreground">Highest standards of vessel maintenance and crew well-being.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden relative">
              <img 
                src="/images/about-operations.jpg" 
                alt="Maritime operations center" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/10"></div>
            </div>
            
            {/* Stats floating block */}
            <div className="absolute -bottom-10 -left-10 lg:-left-20 bg-primary text-white p-8 lg:p-12 w-[80%] md:w-[70%] max-w-sm">
              <Anchor className="w-8 h-8 text-white/50 mb-6" />
              <div className="space-y-8">
                {stats.slice(0, 2).map((stat, i) => (
                  <div key={i}>
                    <div className="text-4xl font-bold mb-1">{stat.value}</div>
                    <div className="text-xs uppercase tracking-widest text-white/70">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom stats row */}
        <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-t border-gray-100 pt-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center md:text-left"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
