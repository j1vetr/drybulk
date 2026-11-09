import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, ArrowUpRight } from 'lucide-react';

const DEPARTMENTS = [
  { label: 'General Inquiries', email: 'info@dbpioneer.com' },
  { label: 'Chartering',        email: 'chartering@dbpioneer.com' },
  { label: 'Operations',        email: 'operations@dbpioneer.com' },
  { label: 'Accounts',          email: 'accounts@dbpioneer.com' },
  { label: 'Claims',            email: 'claims@dbpioneer.com' },
];

const INQUIRY_TYPES = [
  { value: 'cargo',      label: 'Cargo Enquiry',  to: 'chartering@dbpioneer.com' },
  { value: 'vessel',     label: 'Offer a Vessel', to: 'chartering@dbpioneer.com' },
  { value: 'chartering', label: 'Chartering',     to: 'chartering@dbpioneer.com' },
  { value: 'operations', label: 'Operations',     to: 'operations@dbpioneer.com' },
  { value: 'general',    label: 'General',        to: 'info@dbpioneer.com' },
];

const FIELD =
  'w-full bg-transparent border-0 border-b border-white/25 py-2 text-sm text-white placeholder:text-white/35 focus:outline-none focus:border-white transition-colors rounded-none';
const LABEL = 'block text-[10px] font-bold uppercase tracking-[0.18em] text-white/60 mb-1';

export function Contact() {
  const [type, setType] = useState(INQUIRY_TYPES[0].value);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? '').trim();
    const target = INQUIRY_TYPES.find((t) => t.value === type) ?? INQUIRY_TYPES[0];
    const lines = [
      `Company: ${get('company')}`,
      `Contact Person: ${get('person')}`,
      `Email: ${get('email')}`,
      `Phone: ${get('phone')}`,
      '',
      `Commodity: ${get('commodity')}`,
      `Quantity (MT): ${get('quantity')}`,
      `Laycan: ${get('laycan')}`,
      `Load Port(s): ${get('load')}`,
      `Discharge Port(s): ${get('discharge')}`,
      '',
      get('notes'),
    ];
    const subject = `${target.label} from ${get('company') || get('person') || 'website'}`;
    window.location.href = `mailto:${target.to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-primary text-white scroll-mt-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 lg:gap-24">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-accent text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-3">Contact</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-10">
              Ready to move your cargo?
            </h2>

            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-white/75 text-sm leading-relaxed">
                  Drybulk Pioneer Denizcilik ve Ticaret Ltd. Şti.<br />
                  Kosuyolu Mah. Cenap Şahabettin Sokak No:90<br />
                  34718 Kadıköy / İstanbul, Türkiye
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <Phone className="w-5 h-5 text-accent shrink-0" aria-hidden="true" />
                <a href="tel:+902165450945" className="text-white/75 hover:text-white text-sm transition-colors">
                  +90 216 545 09 45
                </a>
              </div>
            </div>

            <ul className="border-t border-white/15">
              {DEPARTMENTS.map((d) => (
                <li key={d.email}>
                  <a
                    href={`mailto:${d.email}`}
                    className="flex items-center justify-between gap-4 py-3.5 border-b border-white/15 group"
                  >
                    <span className="text-xs font-bold uppercase tracking-[0.15em] text-white/60">{d.label}</span>
                    <span className="flex items-center gap-2 text-sm text-white group-hover:text-accent transition-colors">
                      {d.email}
                      <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-6">Send an Inquiry</h3>
            <form className="space-y-6" onSubmit={onSubmit} data-testid="form-inquiry">
              <fieldset>
                <legend className={LABEL}>Inquiry Type</legend>
                <div className="flex flex-wrap gap-2 mt-2">
                  {INQUIRY_TYPES.map((t) => (
                    <button
                      key={t.value}
                      type="button"
                      onClick={() => setType(t.value)}
                      aria-pressed={type === t.value}
                      className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider border transition-colors ${
                        type === t.value
                          ? 'bg-white text-primary border-white'
                          : 'border-white/30 text-white/80 hover:border-white'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </fieldset>

              <div className="grid md:grid-cols-2 gap-6">
                <div><label className={LABEL} htmlFor="c-company">Company</label><input id="c-company" name="company" className={FIELD} /></div>
                <div><label className={LABEL} htmlFor="c-person">Contact Person</label><input id="c-person" name="person" required className={FIELD} /></div>
                <div><label className={LABEL} htmlFor="c-email">Email</label><input id="c-email" name="email" type="email" required className={FIELD} /></div>
                <div><label className={LABEL} htmlFor="c-phone">Phone</label><input id="c-phone" name="phone" type="tel" className={FIELD} /></div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div><label className={LABEL} htmlFor="c-commodity">Commodity</label><input id="c-commodity" name="commodity" className={FIELD} /></div>
                <div><label className={LABEL} htmlFor="c-quantity">Quantity (MT)</label><input id="c-quantity" name="quantity" className={FIELD} /></div>
                <div><label className={LABEL} htmlFor="c-laycan">Laycan</label><input id="c-laycan" name="laycan" className={FIELD} /></div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div><label className={LABEL} htmlFor="c-load">Load Port(s)</label><input id="c-load" name="load" className={FIELD} /></div>
                <div><label className={LABEL} htmlFor="c-discharge">Discharge Port(s)</label><input id="c-discharge" name="discharge" className={FIELD} /></div>
              </div>

              <div>
                <label className={LABEL} htmlFor="c-notes">Notes</label>
                <textarea id="c-notes" name="notes" rows={3} className={`${FIELD} resize-none`} />
              </div>

              <button
                type="submit"
                className="w-full bg-white text-primary py-3.5 text-sm font-bold uppercase tracking-widest hover:bg-accent hover:text-white transition-colors"
                data-testid="button-submit-inquiry"
              >
                Send Inquiry
              </button>
              <p className="text-white/45 text-xs">Sending opens your email app with the details filled in.</p>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
