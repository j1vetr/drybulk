import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-gray-50 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-4">Contact & Inquiries</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-primary leading-tight mb-8">
              Ready to move your <span className="font-serif italic font-normal text-accent">cargo?</span>
            </h3>
            
            <div className="bg-primary text-white p-8 mb-10 flex items-start gap-4 shadow-xl">
              <Clock className="w-8 h-8 text-accent shrink-0" />
              <div>
                <h4 className="text-lg font-bold mb-2">24/7 Operational Support</h4>
                <p className="text-white/70 text-sm leading-relaxed">
                  Shipping never sleeps. Our operations and technical teams are available around the clock to ensure seamless voyage execution and immediate incident response.
                </p>
                <div className="mt-4 font-mono text-accent font-bold tracking-wider">AOG: +90 555 000 0000</div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white flex items-center justify-center border border-gray-200 shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h5 className="font-bold text-primary mb-1">Global Headquarters</h5>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Drybulk Pioneer Denizcilik A.Ş.<br />
                    Levent Mah. Büyükdere Cad.<br />
                    No: 199, 34394 Şişli / İstanbul, Turkey
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white flex items-center justify-center border border-gray-200 shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h5 className="font-bold text-primary mb-1">Commercial Desk</h5>
                  <p className="text-muted-foreground text-sm">
                    +90 212 555 0000<br />
                    +90 212 555 0001
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white flex items-center justify-center border border-gray-200 shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h5 className="font-bold text-primary mb-1">Email Inquiries</h5>
                  <p className="text-muted-foreground text-sm">
                    Chartering: chartering@drybulkpioneer.com<br />
                    Operations: ops@drybulkpioneer.com
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
            className="bg-white p-8 md:p-12 shadow-sm border border-gray-100"
          >
            <h4 className="text-2xl font-bold text-primary mb-6">Request a Freight Quote</h4>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Company Name</label>
                  <input type="text" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-primary transition-colors bg-transparent" placeholder="Enter company name" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Contact Person</label>
                  <input type="text" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-primary transition-colors bg-transparent" placeholder="Full name" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email Address</label>
                  <input type="email" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-primary transition-colors bg-transparent" placeholder="work@company.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Phone Number</label>
                  <input type="tel" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-primary transition-colors bg-transparent" placeholder="+1 (555) 000-0000" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Cargo Details</label>
                <div className="grid grid-cols-3 gap-4">
                  <input type="text" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-primary transition-colors bg-transparent" placeholder="Commodity" />
                  <input type="text" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-primary transition-colors bg-transparent" placeholder="Quantity (MT)" />
                  <input type="text" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-primary transition-colors bg-transparent" placeholder="Laycan" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Routing</label>
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-primary transition-colors bg-transparent" placeholder="Load Port(s)" />
                  <input type="text" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-primary transition-colors bg-transparent" placeholder="Discharge Port(s)" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Additional Requirements</label>
                <textarea className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-primary transition-colors bg-transparent resize-none h-24" placeholder="Any specific vessel requirements or terms..."></textarea>
              </div>

              <button className="w-full bg-primary text-white py-4 font-bold uppercase tracking-widest hover:bg-primary/90 transition-colors">
                Submit Request
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
