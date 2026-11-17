import React, { useEffect } from 'react';
import { 
  X, 
  CheckCircle2, 
  FileText, 
  Clock, 
  ArrowRight, 
  Phone, 
  MessageCircle, 
  Users2,
  Building,
  Briefcase
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/servicesData';

export default function ServiceModal({ service, onClose, onEnquireNow }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    // Prevent background scrolling while modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!service) return null;

  const whatsappMessage = encodeURIComponent(
    `Hello Evidex India team, I am interested in consulting regarding "${service.title}". Please guide me on documentation, timeline and professional assistance.`
  );

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#0B1528]/80 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-service-title"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden my-8 transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#101F3D] to-[#182C52] p-6 sm:p-8 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-200 hover:text-white transition-colors focus:outline-none"
            aria-label="Close service modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#C9962B]/20 text-[#E0AD42] border border-[#E0AD42]/40">
              {service.categoryLabel}
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-gray-200">
              <Clock className="w-3.5 h-3.5 text-[#E0AD42]" />
              {service.timeline}
            </span>
            {service.price && (
              <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-[#E0AD42] text-[#0B1528] shadow-sm">
                Starting @ {service.price}
              </span>
            )}
            {service.badge && (
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-white/20 text-white">
                {service.badge}
              </span>
            )}
          </div>

          <h3 
            id="modal-service-title" 
            className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight"
          >
            {service.title}
          </h3>

          <p className="mt-2 text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl">
            {service.overview}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto space-y-8 divide-y divide-gray-100">
          
          {/* What's Included */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#101F3D] mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#C9962B]" />
              What This Service Includes
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.includes.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9962B] mt-2 shrink-0"></span>
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Process Steps */}
          {service.process && service.process.length > 0 && (
            <div className="pt-6">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#101F3D] mb-4 flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C9962B]" />
                How the Process Works
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.process.map((step, idx) => (
                  <div key={idx} className="bg-gray-50 p-3.5 rounded-xl border border-gray-100">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-6 h-6 rounded-full bg-[#101F3D] text-[#E0AD42] text-xs font-bold flex items-center justify-center shrink-0">
                        {step.step}
                      </span>
                      <p className="text-xs sm:text-sm font-bold text-[#101F3D]">{step.title}</p>
                    </div>
                    <p className="text-xs text-gray-600 pl-8 leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* General Documents Required */}
          <div className="pt-6">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#101F3D] mb-4 flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#C9962B]" />
              General Documents That May Be Required
            </h4>
            <ul className="space-y-2">
              {service.documents.map((doc, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-600 bg-amber-50/40 p-2.5 rounded-lg border border-amber-100/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E0AD42] mt-1.5 shrink-0"></span>
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Who It Suits */}
          <div className="pt-6">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#101F3D] mb-2 flex items-center gap-2">
              <Users2 className="w-4 h-4 text-[#C9962B]" />
              Who This Service May Suit
            </h4>
            <p className="text-xs sm:text-sm text-gray-700 bg-gray-50 p-3.5 rounded-xl border border-gray-100 leading-relaxed">
              {service.bestFor}
            </p>
          </div>

        </div>

        {/* Modal Footer / CTAs */}
        <div className="p-4 sm:p-6 bg-gray-50 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <a
              href={`tel:${COMPANY_DETAILS.phoneClean}`}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-gray-300 text-[#101F3D] hover:bg-gray-100 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#C9962B]" />
              <span>Call Now</span>
            </a>
            <a
              href={`${COMPANY_DETAILS.whatsappUrl}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>

          <button
            onClick={() => onEnquireNow(service)}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-[#0B1528] bg-gradient-to-r from-[#E0AD42] via-[#C9962B] to-[#B27E18] hover:from-[#E8B854] hover:to-[#C08C22] shadow-md shadow-[#C9962B]/20 flex items-center justify-center gap-2 transition-transform hover:scale-[1.02]"
          >
            <span>Get Expert Assistance</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
