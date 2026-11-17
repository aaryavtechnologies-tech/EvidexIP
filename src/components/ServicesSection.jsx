import React, { useState } from 'react';
import { 
  Building2, 
  Users, 
  UserCheck, 
  Handshake, 
  HeartHandshake, 
  Globe, 
  Award, 
  Utensils, 
  RefreshCw, 
  FileCheck2, 
  Store, 
  Rocket, 
  BadgeCheck, 
  FileText, 
  Receipt, 
  Calculator, 
  Coins, 
  Landmark, 
  Scale, 
  ShieldCheck, 
  FileQuestion, 
  Gavel, 
  FileBadge,
  ArrowRight,
  Clock,
  Sparkles,
  Search,
  X,
  Filter
} from 'lucide-react';
import { SERVICE_CATEGORIES, SERVICES_DATA } from '../data/servicesData';

// Dynamic icon resolver
const iconComponents = {
  Building2,
  Users,
  UserCheck,
  Handshake,
  HeartHandshake,
  Globe,
  Award,
  Utensils,
  RefreshCw,
  FileCheck2,
  Store,
  Rocket,
  BadgeCheck,
  FileText,
  Receipt,
  Calculator,
  Coins,
  Landmark,
  Scale,
  ShieldCheck,
  FileQuestion,
  Gavel,
  FileBadge
};

export default function ServicesSection({ 
  selectedCategory, 
  setSelectedCategory, 
  searchQuery, 
  setSearchQuery, 
  onSelectService, 
  onQuickEnquire 
}) {
  // Filter services by category and search query
  const filteredServices = SERVICES_DATA.filter((service) => {
    const matchesCategory = 
      selectedCategory === 'all' || 
      service.category === selectedCategory || 
      service.secondaryCategory === selectedCategory;

    const query = searchQuery.toLowerCase().trim();
    const matchesSearch = 
      !query ||
      service.title.toLowerCase().includes(query) ||
      service.shortDescription.toLowerCase().includes(query) ||
      service.categoryLabel.toLowerCase().includes(query) ||
      (service.tags && service.tags.some(t => t.toLowerCase().includes(query)));

    return matchesCategory && matchesSearch;
  });

  return (
    <section 
      id="services" 
      className="py-20 sm:py-28 bg-[#F7F8FA] relative scroll-mt-20 border-t border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#101F3D]/5 border border-[#101F3D]/10 text-[#101F3D] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C9962B]" />
            Complete Service Directory
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#101F3D] tracking-tight leading-tight">
            One Platform.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9962B] via-[#E0AD42] to-[#B27E18]">
              Every Essential Business Service.
            </span>
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
            Explore our legal, registration, taxation and compliance services — all in one place. 
            Select any service to view required documents, procedures, and speak with a specialist.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {SERVICE_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            const count = cat.id === 'all' 
              ? SERVICES_DATA.length 
              : SERVICES_DATA.filter(s => s.category === cat.id || s.secondaryCategory === cat.id).length;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 focus:outline-none ${
                  isActive
                    ? 'bg-[#101F3D] text-white shadow-lg shadow-[#101F3D]/25 border border-[#101F3D]'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
                aria-pressed={isActive}
              >
                <span>{cat.label}</span>
                <span className={`text-[11px] px-1.5 py-0.5 rounded-full font-bold ${
                  isActive ? 'bg-[#E0AD42] text-[#0B1528]' : 'bg-gray-100 text-gray-500'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Search / Category Indicator */}
        {(searchQuery || selectedCategory !== 'all') && (
          <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3 sm:p-4 rounded-2xl border border-gray-200 mb-8 shadow-sm">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
              <Filter className="w-4 h-4 text-[#C9962B]" />
              <span>
                Showing <strong>{filteredServices.length}</strong> {filteredServices.length === 1 ? 'service' : 'services'}
                {selectedCategory !== 'all' && (
                  <> in <strong className="text-[#101F3D]">{SERVICE_CATEGORIES.find(c => c.id === selectedCategory)?.label}</strong></>
                )}
                {searchQuery && (
                  <> matching <strong className="text-[#C9962B]">"{searchQuery}"</strong></>
                )}
              </span>
            </div>

            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="text-xs font-semibold text-[#101F3D] hover:text-[#C9962B] flex items-center gap-1 hover:underline"
            >
              <X className="w-3.5 h-3.5" />
              Reset all filters
            </button>
          </div>
        )}

        {/* Services Cards Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredServices.map((service) => {
              const IconComponent = iconComponents[service.iconName] || Building2;

              return (
                <div
                  key={service.id}
                  id={`service-${service.id}`}
                  className="group bg-white rounded-2xl border border-gray-200/90 hover:border-[#C9962B]/50 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden"
                >
                  {/* Subtle Top Gold Highlight on Hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C9962B] to-[#E0AD42] opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  <div>
                    {/* Top Row: Icon + Category Badge */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#101F3D]/5 group-hover:bg-[#101F3D] text-[#101F3D] group-hover:text-[#E0AD42] flex items-center justify-center transition-colors shrink-0 shadow-sm">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      
                      <div className="flex flex-col items-end gap-1">
                        <span className="text-[11px] font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-600 group-hover:bg-amber-50 group-hover:text-[#C9962B] transition-colors">
                          {service.categoryLabel}
                        </span>
                        {service.badge && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#E0AD42]/20 text-[#B27E18]">
                            {service.badge}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Service Title */}
                    <h3 className="text-lg font-bold text-[#101F3D] group-hover:text-[#C9962B] transition-colors leading-snug mb-2.5">
                      {service.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-gray-600 line-clamp-3 leading-relaxed mb-4">
                      {service.shortDescription}
                    </p>
                  </div>

                  <div>
                    {/* Timeline & Price Container */}
                    <div className="pt-3 border-t border-gray-100 mb-4">
                      {/* Timeline */}
                      <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-2.5">
                        <Clock className="w-3.5 h-3.5 text-[#C9962B] shrink-0" />
                        <span className="font-medium text-gray-600 line-clamp-1">{service.timeline}</span>
                      </div>

                      {/* Prominent Dedicated Price Box */}
                      <div className="flex items-center justify-between bg-gradient-to-r from-amber-50/70 to-amber-100/40 border border-[#C9962B]/25 rounded-xl px-3 py-1.5 transition-colors group-hover:border-[#C9962B]/50">
                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                          {service.price ? 'Starting Fee' : 'Consultation'}
                        </span>
                        
                        {service.price ? (
                          <div className="flex items-baseline gap-1 shrink-0">
                            <span className="text-[10px] font-bold text-[#C9962B] uppercase">From</span>
                            <span className="text-sm sm:text-base font-extrabold text-[#101F3D] group-hover:text-[#C9962B] tracking-tight whitespace-nowrap">
                              {service.price}
                            </span>
                          </div>
                        ) : (
                          <span className="text-xs font-semibold text-gray-500 whitespace-nowrap">
                            Custom Quote
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Card Action Buttons */}
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => onSelectService(service)}
                        className="w-full py-2 px-3 rounded-lg text-xs font-semibold text-[#101F3D] bg-gray-50 hover:bg-[#101F3D] hover:text-white border border-gray-200 transition-colors text-center"
                        aria-label={`View details for ${service.title}`}
                      >
                        View Details
                      </button>

                      <button
                        onClick={() => onQuickEnquire(service)}
                        className="w-full py-2 px-3 rounded-lg text-xs font-bold text-[#0B1528] bg-gradient-to-r from-[#E0AD42] to-[#C9962B] hover:from-[#E8B854] hover:to-[#D4A338] shadow-sm transition-all flex items-center justify-center gap-1 group/btn"
                        aria-label={`Enquire about ${service.title}`}
                      >
                        <span>Enquire</span>
                        <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty Search State */
          <div className="text-center py-16 px-4 bg-white rounded-3xl border border-gray-200 max-w-lg mx-auto shadow-sm">
            <div className="w-14 h-14 rounded-2xl bg-amber-50 text-[#C9962B] flex items-center justify-center mx-auto mb-4">
              <Search className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-[#101F3D] mb-1">
              No matching services found
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mb-6 max-w-sm mx-auto">
              We couldn't find any services matching "{searchQuery}". Try a different keyword like "GST", "Trademark", or "Company".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-5 py-2.5 rounded-xl font-bold text-xs text-[#0B1528] bg-gradient-to-r from-[#E0AD42] to-[#C9962B] hover:shadow-md"
            >
              Reset Filters &amp; View All Services
            </button>
          </div>
        )}

        {/* Pricing Transparency Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-gray-500">
            * Prices mentioned are starting professional consultancy charges. Statutory government filing fees, stamp duties, and GST are separate and applicable as per regulatory authority schedules.
          </p>
        </div>

      </div>
    </section>
  );
}
