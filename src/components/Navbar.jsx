import React, { useState, useEffect } from 'react';
import { Phone, Mail, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/servicesData';

export default function Navbar({ onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Top Corporate Strip */}
      <div className="bg-[#0B1528] text-gray-300 text-xs border-b border-[#1A315E]/60 py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-gray-300">
              <span className="w-2 h-2 rounded-full bg-[#E0AD42] animate-pulse"></span>
              Corporate Legal & Business Compliance Consultancy
            </span>
            <span className="text-gray-500">|</span>
            <span className="text-gray-400">Kolkata, West Bengal</span>
          </div>
          <div className="flex items-center gap-6">
            <a 
              href={`tel:${COMPANY_DETAILS.phoneClean}`}
              className="flex items-center gap-2 hover:text-[#E0AD42] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C9962B]" />
              <span className="font-medium text-white">{COMPANY_DETAILS.phone}</span>
            </a>
            <span className="text-gray-500">|</span>
            <a 
              href={`mailto:${COMPANY_DETAILS.email}`}
              className="flex items-center gap-2 hover:text-[#E0AD42] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#C9962B]" />
              <span>{COMPANY_DETAILS.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#101F3D]/95 backdrop-blur-md shadow-xl border-b border-[#C9962B]/20 py-3' 
            : 'bg-[#101F3D]/80 backdrop-blur-sm border-b border-white/10 py-4'
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a 
              href="#hero" 
              onClick={(e) => { e.preventDefault(); scrollTo('hero'); }}
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#C9962B] rounded-lg p-1"
              aria-label="Evidex India Homepage"
            >
              <div className="bg-white/95 rounded-lg px-2.5 py-1.5 shadow-md border border-[#C9962B]/30 flex items-center justify-center transition-transform group-hover:scale-[1.02]">
                <img 
                  src="/images/logo.png" 
                  alt="EVIDEX INDIA" 
                  className="h-9 w-auto max-w-[170px] object-contain"
                  width="170"
                  height="36"
                />
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {[
                { name: 'Home', id: 'hero' },
                { name: 'Our Services', id: 'services' },
                { name: 'Why Choose Us', id: 'why-us' },
                { name: 'How It Works', id: 'how-it-works' },
                { name: 'About Us', id: 'about' },
                { name: 'FAQs', id: 'faqs' },
                { name: 'Contact Us', id: 'contact' },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="px-3 py-2 text-sm font-medium text-gray-200 hover:text-[#E0AD42] rounded-md transition-colors relative group focus:outline-none"
                >
                  {link.name}
                  <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-[#E0AD42] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
                </button>
              ))}
            </div>

            {/* Desktop Primary CTA */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={`tel:${COMPANY_DETAILS.phoneClean}`}
                className="hidden xl:flex items-center gap-2 text-xs font-semibold text-white/90 bg-white/10 hover:bg-white/15 px-3 py-2 rounded-lg border border-white/15 transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-[#E0AD42]" />
                <span>Call Expert</span>
              </a>
              <button
                onClick={() => scrollTo('contact')}
                className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm text-[#0B1528] bg-gradient-to-r from-[#E0AD42] via-[#C9962B] to-[#B27E18] hover:from-[#E8B854] hover:to-[#C08C22] shadow-lg shadow-[#C9962B]/25 hover:shadow-[#C9962B]/40 transform hover:-translate-y-0.5 transition-all focus:outline-none focus:ring-2 focus:ring-[#E0AD42] focus:ring-offset-2 focus:ring-offset-[#101F3D]"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => scrollTo('contact')}
                className="sm:hidden text-xs font-bold px-3 py-1.5 rounded bg-gradient-to-r from-[#E0AD42] to-[#C9962B] text-[#0B1528]"
              >
                Get Started
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-gray-200 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#C9962B]"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-[#E0AD42]" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-200" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0B1528]/98 border-b border-[#C9962B]/30 px-4 pt-3 pb-6 space-y-2 animate-fadeIn shadow-2xl">
            <div className="flex flex-col space-y-1">
              {[
                { name: 'Home', id: 'hero' },
                { name: 'Our Services', id: 'services' },
                { name: 'Why Choose Us', id: 'why-us' },
                { name: 'How It Works', id: 'how-it-works' },
                { name: 'About Us', id: 'about' },
                { name: 'FAQs', id: 'faqs' },
                { name: 'Contact Us', id: 'contact' },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="w-full text-left px-3 py-2.5 rounded-md text-base font-medium text-gray-200 hover:text-[#E0AD42] hover:bg-white/5 transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 text-gray-500" />
                </button>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 space-y-3">
              <a
                href={`tel:${COMPANY_DETAILS.phoneClean}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg border border-[#C9962B]/40 text-sm font-semibold text-[#E0AD42] bg-white/5"
              >
                <Phone className="w-4 h-4 text-[#E0AD42]" />
                <span>Call {COMPANY_DETAILS.phone}</span>
              </a>
              <button
                onClick={() => scrollTo('contact')}
                className="w-full py-3 rounded-lg font-bold text-sm text-[#0B1528] bg-gradient-to-r from-[#E0AD42] to-[#C9962B] shadow-lg flex items-center justify-center gap-2"
              >
                <span>Get Started — Consult Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
