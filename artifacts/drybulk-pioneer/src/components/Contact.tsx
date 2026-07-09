import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-20 bg-gray-50 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-3">Contact & Inquiries</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-primary leading-tight mb-6">
              Ready to move your <span className="font-serif italic font-normal text-accent">cargo?</span>
            </h3>
            
            <div className="bg-primary text-white p-6 mb-8 flex items-start gap-4 shadow-md">
              <Clock className="w-6 h-6 text-accent shrink-0 mt-1" />
              <div>
                <h4 className="text-base font-bold mb-1">24/7 Operational Support</h4>
                <p className="text-white/70 text-sm leading-relaxed">
                  Shipping never sleeps. Our operations and technical teams are available around the clock to ensure seamless voyage execution and immediate incident response.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white flex items-center justify-center border border-gray-200 shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h5 className="font-bold text-primary mb-1 text-sm">Global Headquarters</h5>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Drybulk Pioneer Denizcilik ve Ticaret Ltd. Şti.<br />
                    Kosuyolu Mah. Cenap Şahabettin Sokak No:90<br />
                    34718 Kadıköy / İstanbul, Türkiye
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white flex items-center justify-center border border-gray-200 shrink-0">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h5 className="font-bold text-primary mb-1 text-sm">Phone</h5>
                  <p className="text-muted-foreground text-sm">
                    <a href="tel:+902165450945" className="hover:text-primary transition-colors">
                      +90 216 545 09 45
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white flex items-center justify-center border border-gray-200 shrink-0">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h5 className="font-bold text-primary mb-1 text-sm">Email Inquiries</h5>
                  <p className="text-muted-foreground text-sm">
                    <a href="mailto:drybulk@dbpioneer.com" className="hover:text-primary transition-colors">
                      drybulk@dbpioneer.com
                    </a>
                  </p>
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
            <h4 className="text-xl font-bold text-primary mb-5">Request a Freight Quote</h4>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
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
                <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Additional Requirements</label>
                <textarea className="w-full border-b border-gray-300 py-1.5 text-sm focus:outline-none focus:border-primary transition-colors bg-transparent resize-none h-16" placeholder="Any specific vessel requirements or terms..."></textarea>
              </div>

              <button className="w-full bg-primary text-white py-3 text-sm mt-2 font-bold uppercase tracking-widest hover:bg-primary/90 transition-colors">
                Submit Request
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
