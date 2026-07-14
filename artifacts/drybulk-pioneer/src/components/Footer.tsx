import React from 'react';

export function Footer() {
  return (
    <footer className="bg-primary border-t border-white/10 pt-12 pb-6 text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="space-y-4">
            <img src="/logo.png" alt="Drybulk Pioneer" className="h-16 brightness-0 invert" />
            <p className="text-white/60 max-w-sm text-sm leading-relaxed">
              Istanbul-based dry bulk shipping and chartering company providing commercial
              operation, chartering and post-fixture support across international trades.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-bold uppercase tracking-wider mb-4 text-xs">Quick Links</h5>
            <ul className="space-y-2">
              <li><a href="#about"      className="text-white/60 hover:text-white transition-colors text-xs">About Us</a></li>
              <li><a href="#services"   className="text-white/60 hover:text-white transition-colors text-xs">Services</a></li>
              <li><a href="#segments"   className="text-white/60 hover:text-white transition-colors text-xs">Vessel Segments &amp; Cargoes</a></li>
              <li><a href="#team"       className="text-white/60 hover:text-white transition-colors text-xs">Our Team</a></li>
              <li><a href="#compliance" className="text-white/60 hover:text-white transition-colors text-xs">HSEQ &amp; Compliance</a></li>
              <li><a href="#contact"    className="text-white/60 hover:text-white transition-colors text-xs">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-bold uppercase tracking-wider mb-4 text-xs">Contact</h5>
            <ul className="space-y-2 text-white/60 text-xs leading-relaxed">
              <li>
                Kosuyolu Mah. Cenap Şahabettin Sokak No:90<br />
                34718 Kadıköy / İstanbul, Türkiye
              </li>
              <li>
                <a href="tel:+902165450945" className="hover:text-white transition-colors">+90 216 545 09 45</a>
              </li>
              <li><a href="mailto:info@dbpioneer.com"        className="hover:text-white transition-colors">info@dbpioneer.com</a></li>
              <li><a href="mailto:chartering@dbpioneer.com"  className="hover:text-white transition-colors">chartering@dbpioneer.com</a></li>
              <li><a href="mailto:operations@dbpioneer.com"  className="hover:text-white transition-colors">operations@dbpioneer.com</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h5 className="font-bold uppercase tracking-wider mb-4 text-xs">Legal</h5>
            <ul className="space-y-2">
              <li><a href="/privacy"      className="text-white/60 hover:text-white transition-colors text-xs">Privacy Policy</a></li>
              <li><a href="/kvkk"         className="text-white/60 hover:text-white transition-colors text-xs">KVKK Information Notice</a></li>
              <li><a href="/cookie-policy" className="text-white/60 hover:text-white transition-colors text-xs">Cookie Policy</a></li>
              <li><a href="/terms"        className="text-white/60 hover:text-white transition-colors text-xs">Terms of Use</a></li>
              <li><a href="/corporate"    className="text-white/60 hover:text-white transition-colors text-xs">Corporate Information</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-white/10 text-white/40 text-[10px]">
          <p>&copy; {new Date().getFullYear()} Drybulk Pioneer Denizcilik ve Ticaret Ltd. Şti. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
