import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Fleet', href: '#fleet' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-2 border-gray-200'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 relative z-10 group">
          <img
            src="/logo.png"
            alt="Drybulk Pioneer Logo"
            className={`transition-all duration-300 ${
              isScrolled ? 'h-8' : 'h-10 brightness-0 invert'
            }`}
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs font-medium tracking-wide uppercase transition-colors hover:text-accent ${
                  isScrolled ? 'text-primary' : 'text-white hover:text-white/80'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className={`px-5 py-2 text-xs font-semibold tracking-wide uppercase transition-all duration-300 ${
              isScrolled
                ? 'bg-primary text-white hover:bg-primary/90'
                : 'bg-white text-primary hover:bg-white/90'
            }`}
          >
            Request Quote
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden relative z-10 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className={`w-6 h-6 ${isScrolled || mobileMenuOpen ? 'text-primary' : 'text-white'}`} />
          ) : (
            <Menu className={`w-6 h-6 ${isScrolled ? 'text-primary' : 'text-white'}`} />
          )}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-0 left-0 right-0 bg-white h-screen flex flex-col pt-24 px-6 gap-6 md:hidden">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-bold text-primary uppercase border-b border-gray-100 pb-4"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 px-6 py-4 bg-primary text-white text-center font-bold uppercase tracking-widest w-full"
            >
              Request Quote
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
