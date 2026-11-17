import React from 'react';
import { 
  Rocket, 
  Store, 
  Building, 
  ShoppingBag, 
  UtensilsCrossed, 
  Briefcase,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { WHO_WE_HELP } from '../data/servicesData';

const iconMap = {
  Rocket,
  Store,
  Building,
  ShoppingBag,
  UtensilsCrossed,
  Briefcase
};

export default function WhoWeHelp({ onSelectCategory }) {
  return (
    <section 
      id="who-we-help" 
      className="py-20 sm:py-28 bg-white relative scroll-mt-20 border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#101F3D]/5 border border-[#101F3D]/10 text-[#101F3D] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C9962B]" />
            Client Focus
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#101F3D] tracking-tight leading-tight">
            Solutions for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9962B] via-[#E0AD42] to-[#B27E18]">
              Every Stage of Business.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
            Whether you are taking your first entrepreneurial step or managing an established commercial enterprise, our compliance solutions scale with you.
          </p>
        </div>

        {/* 6 Client Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHO_WE_HELP.map((item) => {
            const IconComponent = iconMap[item.icon] || Briefcase;

            return (
              <div
                key={item.id}
                className="group bg-[#F7F8FA] hover:bg-white rounded-2xl border border-gray-200 hover:border-[#C9962B]/50 p-6 sm:p-7 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#101F3D] text-[#E0AD42] group-hover:bg-[#C9962B] group-hover:text-[#0B1528] flex items-center justify-center transition-colors shadow-md">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-gray-500 bg-white px-2.5 py-1 rounded-full border border-gray-200">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#101F3D] group-hover:text-[#C9962B] transition-colors mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-gray-200/70">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#101F3D] group-hover:text-[#C9962B] transition-colors"
                  >
                    <span>Request Custom Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
