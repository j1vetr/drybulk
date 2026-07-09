import React from 'react';

export function Footer() {
  return (
    <footer className="bg-primary border-t border-white/10 pt-12 pb-6 text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-2 space-y-4">
            <img src="/logo.png" alt="Drybulk Pioneer" className="h-10 brightness-0 invert" />
            <p className="text-white/60 max-w-sm text-sm leading-relaxed">
              Leading the international dry bulk sector with uncompromising reliability, precision, and global scale. Your trusted partner on the open ocean.
            </p>
          </div>
          
          <div>
            <h5 className="font-bold uppercase tracking-wider mb-4 text-xs">Quick Links</h5>
            <ul className="space-y-2">
              <li><a href="#about" className="text-white/60 hover:text-white transition-colors text-xs">Company Profile</a></li>
              <li><a href="#fleet" className="text-white/60 hover:text-white transition-colors text-xs">Our Fleet</a></li>
              <li><a href="#services" className="text-white/60 hover:text-white transition-colors text-xs">Management Services</a></li>
              <li><a href="#contact" className="text-white/60 hover:text-white transition-colors text-xs">Request Quote</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-bold uppercase tracking-wider mb-4 text-xs">Legal</h5>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-xs">Terms & Conditions</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-xs">Privacy Policy</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-xs">Supplier Code of Conduct</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-white/10 text-white/40 text-[10px]">
          <p>&copy; {new Date().getFullYear()} Drybulk Pioneer Denizcilik ve Ticaret Ltd. Şti. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Global Maritime Operator.</p>
        </div>
      </div>
    </footer>
  );
}
