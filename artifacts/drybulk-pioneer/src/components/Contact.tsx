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

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-20 bg-gray-50 relative">
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
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-xs font-semibold uppercase tracking-wider hover:bg-accent transition-colors group"
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
            <h2 className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-3">Contact &amp; Inquiries</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-primary leading-tight mb-8">
              Ready to move your <span className="font-serif italic font-normal text-accent">cargo?</span>
            </h3>

            <div className="space-y-5 mb-8">
              {/* Address */}
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white flex items-center justify-center border border-gray-200 shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h5 className="font-bold text-primary mb-1 text-sm">Office</h5>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Drybulk Pioneer Denizcilik ve Ticaret Ltd. Şti.<br />
                    Kosuyolu Mah. Cenap Şahabettin Sokak No:90<br />
                    34718 Kadıköy / İstanbul, Türkiye
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white flex items-center justify-center border border-gray-200 shrink-0">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h5 className="font-bold text-primary mb-1 text-sm">Telephone</h5>
                  <p className="text-muted-foreground text-sm">
                    <a href="tel:+902165450945" className="hover:text-primary transition-colors">
                      +90 216 545 09 45
                    </a>
                  </p>
                </div>
              </div>

              {/* Department emails */}
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white flex items-center justify-center border border-gray-200 shrink-0">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1">
                  <h5 className="font-bold text-primary mb-3 text-sm">Department Contacts</h5>
                  <div className="space-y-2">
                    {DEPARTMENTS.map((d) => (
                      <div key={d.email} className="flex items-center justify-between border-b border-gray-100 pb-2">
                        <span className="text-xs text-muted-foreground">{d.label}</span>
                        <a
                          href={`mailto:${d.email}`}
                          className="text-xs font-medium text-primary hover:text-accent transition-colors"
                        >
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
            className="bg-white p-6 md:p-8 shadow-sm border border-gray-100"
          >
            <h4 className="text-xl font-bold text-primary mb-5">Send an Inquiry</h4>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              {/* Inquiry type */}
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  Inquiry Type
                </label>
                <select className="w-full border-b border-gray-300 py-1.5 text-sm focus:outline-none focus:border-primary transition-colors bg-transparent text-foreground">
                  <option value="">Select inquiry type...</option>
                  <option value="cargo">Submit a Cargo Enquiry</option>
                  <option value="vessel">Offer a Vessel</option>
                  <option value="chartering">Chartering</option>
                  <option value="operations">Operations</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Company Name</label>
                  <input type="text" className="w-full border-b border-gray-300 py-1.5 text-sm focus:outline-none focus:border-primary transition-colors bg-transparent" placeholder="Enter company name" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Contact Person</label>
                  <input type="text" className="w-full border-b border-gray-300 py-1.5 text-sm focus:outline-none focus:border-primary transition-colors bg-transparent" placeholder="Full name" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Email Address</label>
                  <input type="email" className="w-full border-b border-gray-300 py-1.5 text-sm focus:outline-none focus:border-primary transition-colors bg-transparent" placeholder="name@company.com" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Phone Number</label>
                  <input type="tel" className="w-full border-b border-gray-300 py-1.5 text-sm focus:outline-none focus:border-primary transition-colors bg-transparent" placeholder="+90 5XX XXX XX XX" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Cargo Details</label>
                <div className="grid grid-cols-3 gap-3">
                  <input type="text" className="w-full border-b border-gray-300 py-1.5 text-sm focus:outline-none focus:border-primary transition-colors bg-transparent" placeholder="Commodity" />
                  <input type="text" className="w-full border-b border-gray-300 py-1.5 text-sm focus:outline-none focus:border-primary transition-colors bg-transparent" placeholder="Quantity (MT)" />
                  <input type="text" className="w-full border-b border-gray-300 py-1.5 text-sm focus:outline-none focus:border-primary transition-colors bg-transparent" placeholder="Laycan" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Routing</label>
                <div className="grid grid-cols-2 gap-3">
                  <input type="text" className="w-full border-b border-gray-300 py-1.5 text-sm focus:outline-none focus:border-primary transition-colors bg-transparent" placeholder="Load Port(s)" />
                  <input type="text" className="w-full border-b border-gray-300 py-1.5 text-sm focus:outline-none focus:border-primary transition-colors bg-transparent" placeholder="Discharge Port(s)" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Additional Notes</label>
                <textarea className="w-full border-b border-gray-300 py-1.5 text-sm focus:outline-none focus:border-primary transition-colors bg-transparent resize-none h-16" placeholder="Vessel requirements, terms, or any other details..." />
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
