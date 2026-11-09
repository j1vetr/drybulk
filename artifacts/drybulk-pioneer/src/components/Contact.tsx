import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

const DEPARTMENTS = [
  { label: 'General Inquiries',  email: 'info@dbpioneer.com',        prefix: 'info@' },
  { label: 'Chartering',         email: 'chartering@dbpioneer.com',  prefix: 'chartering@' },
  { label: 'Operations',         email: 'operations@dbpioneer.com',  prefix: 'operations@' },
  { label: 'Accounts',           email: 'accounts@dbpioneer.com',    prefix: 'accounts@' },
  { label: 'Claims',             email: 'claims@dbpioneer.com',      prefix: 'claims@' },
];

const CTA_LINKS = [
  { label: 'Submit a Cargo Enquiry', value: 'cargo' },
  { label: 'Offer a Vessel',         value: 'vessel' },
  { label: 'Contact Chartering',     value: 'chartering' },
  { label: 'Contact Operations',     value: 'operations' },
];

const INPUT = 'w-full border-b border-gray-300 py-1.5 text-sm focus:outline-none focus:border-primary transition-colors bg-transparent';
const LABEL = 'text-[10px] font-bold uppercase tracking-wider text-muted-foreground';

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-20 bg-primary text-white relative">
      <div className="container mx-auto px-6 md:px-12">

        {/* CTA quick-links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {CTA_LINKS.map((link) => (
            <a
              key={link.label}
              href={`mailto:${link.value === 'cargo' || link.value === 'vessel' ? 'chartering@dbpioneer.com' : `${link.value}@dbpioneer.com`}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-primary text-xs font-semibold uppercase tracking-wider hover:bg-accent hover:text-white transition-colors group"
            >
              {link.label}
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </a>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-accent text-sm font-bold tracking-[0.2em] uppercase mb-3">Contact &amp; Inquiries</h2>
            <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-8">
              Ready to move your cargo?
            </h3>

            <div className="space-y-5 mb-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 flex items-center justify-center border border-white/25 shrink-0">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h5 className="font-bold mb-1 text-sm">Office</h5>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Drybulk Pioneer Denizcilik ve Ticaret Ltd. Şti.<br />
                    Kosuyolu Mah. Cenap Şahabettin Sokak No:90<br />
                    34718 Kadıköy / İstanbul, Türkiye
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 flex items-center justify-center border border-white/25 shrink-0">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h5 className="font-bold mb-1 text-sm">Telephone</h5>
                  <p className="text-white/70 text-sm">
                    <a href="tel:+902165450945" className="hover:text-white transition-colors">
                      +90 216 545 09 45
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 flex items-center justify-center border border-white/25 shrink-0">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <h5 className="font-bold mb-3 text-sm">Department Contacts</h5>
                  <div className="space-y-2">
                    {DEPARTMENTS.map((d) => (
                      <div key={d.email} className="flex items-center justify-between border-b border-white/15 pb-2">
                        <span className="text-xs text-white/60">{d.label}</span>
                        <a href={`mailto:${d.email}`} className="text-xs font-medium text-white hover:text-accent transition-colors">
                          {d.email}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white text-foreground p-6 md:p-8 shadow-sm"
          >
            <h4 className="text-xl font-bold text-primary mb-5">Send an Inquiry</h4>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-1">
                <label className={LABEL}>Inquiry Type</label>
                <select className={`${INPUT} text-foreground`}>
                  <option value="">Select inquiry type...</option>
                  <option value="cargo">Submit a Cargo Enquiry</option>
                  <option value="vessel">Offer a Vessel</option>
                  <option value="chartering">Chartering</option>
                  <option value="operations">Operations</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1"><label className={LABEL}>Company Name</label><input type="text" className={INPUT} placeholder="Enter company name" /></div>
                <div className="space-y-1"><label className={LABEL}>Contact Person</label><input type="text" className={INPUT} placeholder="Full name" /></div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1"><label className={LABEL}>Email Address</label><input type="email" className={INPUT} placeholder="name@company.com" /></div>
                <div className="space-y-1"><label className={LABEL}>Phone Number</label><input type="tel" className={INPUT} placeholder="+90 5XX XXX XX XX" /></div>
              </div>

              <div className="space-y-1">
                <label className={LABEL}>Cargo Details</label>
                <div className="grid grid-cols-3 gap-3">
                  <input type="text" className={INPUT} placeholder="Commodity" />
                  <input type="text" className={INPUT} placeholder="Quantity (MT)" />
                  <input type="text" className={INPUT} placeholder="Laycan" />
                </div>
              </div>

              <div className="space-y-1">
                <label className={LABEL}>Routing</label>
                <div className="grid grid-cols-2 gap-3">
                  <input type="text" className={INPUT} placeholder="Load Port(s)" />
                  <input type="text" className={INPUT} placeholder="Discharge Port(s)" />
                </div>
              </div>

              <div className="space-y-1">
                <label className={LABEL}>Additional Notes</label>
                <textarea className={`${INPUT} resize-none h-16`} placeholder="Vessel requirements, terms, or any other details..." />
              </div>

              <button type="submit" className="w-full bg-primary text-white py-3 text-sm mt-2 font-bold uppercase tracking-widest hover:bg-primary/90 transition-colors">
                Submit Inquiry
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
