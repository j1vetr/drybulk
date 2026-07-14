import React from 'react';
import { motion } from 'framer-motion';

const TEAM = [
  {
    name: 'Ahmet Yıldız',
    title: 'Founder & Managing Director',
    experience:
      '15+ years in dry bulk chartering and commercial maritime operations across Mediterranean, Black Sea and Arabian Gulf trades.',
    initials: 'AY',
  },
  {
    name: 'Mehmet Kaya',
    title: 'Head of Chartering',
    experience:
      '12 years in freight negotiation and market evaluation with focus on grain, fertiliser and coal commodity markets.',
    initials: 'MK',
  },
  {
    name: 'Ali Demir',
    title: 'Operations Manager',
    experience:
      '10 years in post-fixture management, voyage execution, laytime analysis and demurrage claims for Supramax and Panamax vessels.',
    initials: 'AD',
  },
];

export function Team() {
  return (
    <section id="team" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12 md:mb-16"
        >
          <p className="text-accent text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-3">
            Our Team
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-primary leading-tight mb-4">
            Experience You Can Rely On
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            Drybulk Pioneer was founded by maritime professionals with decades of combined
            dry bulk sector experience. Our team brings direct market knowledge and
            hands-on operational expertise to every fixture.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {TEAM.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow p-8 flex flex-col"
            >
              {/* Avatar */}
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-6 shrink-0">
                <span className="text-white font-bold text-lg tracking-wide">
                  {member.initials}
                </span>
              </div>

              <h3 className="text-primary font-bold text-lg mb-1">{member.name}</h3>
              <p className="text-accent text-xs font-bold uppercase tracking-wider mb-4">
                {member.title}
              </p>
              <div className="w-8 h-[2px] bg-accent/40 mb-4" />
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                {member.experience}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
