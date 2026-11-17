import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/servicesData';

export default function HowItWorks() {
  return (
    <section 
      id="how-it-works" 
      className="py-20 sm:py-28 bg-white relative scroll-mt-20 border-b border-gray-200 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#101F3D]/5 border border-[#101F3D]/10 text-[#101F3D] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C9962B]" />
            Transparent Workflow
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#101F3D] tracking-tight leading-tight">
            A Simpler Way to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9962B] via-[#E0AD42] to-[#B27E18]">
              Get Started.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
            A transparent, structured four-step journey to resolve your legal, registration and taxation requirements without administrative confusion.
          </p>
        </div>

        {/* 4-Step Timeline Container */}
        <div className="relative">
          {/* Desktop Connecting Horizontal Line */}
          <div 
            className="hidden lg:block absolute top-14 left-16 right-16 h-0.5 bg-gradient-to-r from-[#E0AD42]/40 via-[#C9962B] to-[#E0AD42]/40 z-0" 
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {HOW_IT_WORKS_STEPS.map((item, idx) => (
              <div 
                key={item.step}
                className="group bg-[#F7F8FA] hover:bg-white p-6 sm:p-7 rounded-2xl border border-gray-200 hover:border-[#C9962B]/50 transition-all duration-300 hover:shadow-xl flex flex-col items-center text-center relative"
              >
                {/* Number Badge Circle */}
                <div className="w-16 h-16 rounded-2xl bg-[#101F3D] text-[#E0AD42] group-hover:bg-[#C9962B] group-hover:text-[#0B1528] font-extrabold text-xl flex items-center justify-center shadow-lg shadow-[#101F3D]/20 mb-6 transition-all duration-300 transform group-hover:scale-110 border-2 border-white">
                  {item.step}
                </div>

                {/* Step Sub-label */}
                <span className="text-[11px] font-bold text-[#C9962B] uppercase tracking-wider mb-2">
                  Step {idx + 1}
                </span>

                {/* Step Title */}
                <h3 className="text-lg font-bold text-[#101F3D] group-hover:text-[#C9962B] transition-colors mb-3">
                  {item.title}
                </h3>

                {/* Step Description */}
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Assurance Note */}
        <div className="mt-14 max-w-2xl mx-auto text-center">
          <p className="text-xs text-gray-500 italic">
            * Note: Turnaround timelines depend on specific service documentation, statutory government department procedures, and timely verification by the relevant authorities.
          </p>
        </div>

      </div>
    </section>
  );
}
