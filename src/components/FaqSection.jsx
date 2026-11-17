import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { FAQS } from '../data/servicesData';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0); // first item open by default

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section 
      id="faqs" 
      className="py-20 sm:py-28 bg-[#F7F8FA] relative scroll-mt-20 border-b border-gray-200"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#101F3D]/5 border border-[#101F3D]/10 text-[#101F3D] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C9962B]" />
            Frequently Asked Questions
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#101F3D] tracking-tight leading-tight">
            Questions?{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9962B] via-[#E0AD42] to-[#B27E18]">
              We Have Answers.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
            Clear, transparent answers regarding our corporate advisory, statutory registrations, documentation, and compliance processes.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-gray-200/90 hover:border-[#C9962B]/50 transition-all duration-200 shadow-sm overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-[#C9962B] focus:ring-inset"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span className="text-sm sm:text-base font-bold text-[#101F3D] flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-amber-50 text-[#C9962B] text-xs font-bold flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <span>{faq.q}</span>
                  </span>

                  <span className={`w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-[#101F3D] shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-[#101F3D] text-[#E0AD42]' : 'group-hover:bg-gray-100'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {isOpen && (
                  <div 
                    id={`faq-answer-${idx}`}
                    className="px-6 pb-6 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 animate-fadeIn pl-16"
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-12 text-center p-6 bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-[#101F3D] text-[#E0AD42] flex items-center justify-center shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-[#101F3D]">Have a question not listed here?</p>
              <p className="text-xs text-gray-500">Our senior team is available to assist you Monday through Saturday.</p>
            </div>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl font-bold text-xs text-[#0B1528] bg-gradient-to-r from-[#E0AD42] to-[#C9962B] hover:shadow-md shrink-0"
          >
            Ask an Expert
          </a>
        </div>

      </div>
    </section>
  );
}
