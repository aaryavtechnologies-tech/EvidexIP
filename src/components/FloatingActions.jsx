import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/servicesData';

export default function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const defaultWhatsappMessage = encodeURIComponent(
    'Hello Evidex India, I would like to consult with an expert regarding business registration & legal compliance.'
  );

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="pointer-events-auto w-10 h-10 rounded-full bg-[#101F3D] hover:bg-[#C9962B] text-white shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#C9962B]"
          aria-label="Back to top"
          title="Back to Top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating Call Button */}
      <a
        href={`tel:${COMPANY_DETAILS.phoneClean}`}
        className="pointer-events-auto group relative w-12 h-12 rounded-full bg-[#101F3D] hover:bg-[#182C52] text-white shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 border-2 border-[#E0AD42] focus:outline-none focus:ring-2 focus:ring-[#E0AD42]"
        aria-label={`Call ${COMPANY_DETAILS.phone}`}
      >
        <Phone className="w-5 h-5 text-[#E0AD42]" />
        
        {/* Tooltip */}
        <span className="absolute right-14 whitespace-nowrap px-3 py-1.5 rounded-lg bg-[#0B1528] text-white text-xs font-semibold shadow-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden sm:block">
          Call {COMPANY_DETAILS.phone}
        </span>
      </a>

      {/* Floating WhatsApp Button */}
      <a
        href={`${COMPANY_DETAILS.whatsappUrl}?text=${defaultWhatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto group relative w-13 h-13 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-emerald-400"
        aria-label="Chat with Evidex India on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        
        {/* Animated pulse ring */}
        <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-75 animate-ping -z-10"></span>

        {/* Tooltip */}
        <span className="absolute right-15 whitespace-nowrap px-3 py-1.5 rounded-lg bg-[#0B1528] text-white text-xs font-semibold shadow-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden sm:block">
          Chat on WhatsApp
        </span>
      </a>

    </div>
  );
}
