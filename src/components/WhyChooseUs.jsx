import React from 'react';
import { 
  GraduationCap, 
  Layers, 
  MessageSquareCheck, 
  UserCheck2, 
  TrendingUp, 
  ShieldAlert,
  Sparkles
} from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/servicesData';

const iconMap = {
  GraduationCap,
  Layers,
  MessageSquareCheck,
  UserCheck2,
  TrendingUp,
  ShieldAlert
};

export default function WhyChooseUs() {
  return (
    <section 
      id="why-us" 
      className="py-20 sm:py-28 bg-[#101F3D] text-white relative scroll-mt-20 overflow-hidden"
    >
      {/* Background Subtle Geometry & Radial Gold Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9962B]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1A315E]/40 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-[#E0AD42]/30 text-[#E0AD42] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Why Choose Evidex India
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Business Compliance{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F0C366] via-[#E0AD42] to-[#C9962B]">
              Made Simple.
            </span>
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-gray-300 font-normal leading-relaxed">
            Professional guidance, organized documentation and personalized support for every stage of your business.
          </p>
        </div>

        {/* 6 Benefit Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_US.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || GraduationCap;

            return (
              <div
                key={item.id}
                className="group bg-[#0B1528]/80 hover:bg-[#0B1528] rounded-2xl border border-white/10 hover:border-[#C9962B]/60 p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-[#C9962B]/10 hover:-translate-y-1 relative"
              >
                {/* Gold Card Top Accent */}
                <div className="w-12 h-1 bg-gradient-to-r from-[#E0AD42] to-[#C9962B] rounded-full mb-6 group-hover:w-20 transition-all duration-300"></div>

                {/* Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-white/5 group-hover:bg-[#C9962B]/20 text-[#E0AD42] flex items-center justify-center mb-5 transition-colors border border-white/10 group-hover:border-[#E0AD42]/40">
                  <IconComponent className="w-6 h-6" />
                </div>

                {/* Card Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-[#E0AD42] transition-colors mb-3">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="text-sm text-gray-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Confidence Assurance Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold text-white">
              Navigating a complex registration or tax filing?
            </h4>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">
              Speak directly with our experienced compliance officers in Kolkata.
            </p>
          </div>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-[#0B1528] bg-gradient-to-r from-[#E0AD42] to-[#C9962B] hover:from-[#E8B854] hover:to-[#D4A338] shadow-lg shadow-[#C9962B]/25 shrink-0 transition-transform hover:scale-105"
          >
            Schedule a Confidential Call
          </a>
        </div>

      </div>
    </section>
  );
}
