import React from 'react';
import { 
  ShieldCheck, 
  Eye, 
  Award, 
  HeartHandshake, 
  ArrowRight, 
  MapPin, 
  CheckCircle2 
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/servicesData';

export default function AboutUs() {
  const values = [
    {
      title: 'Integrity',
      desc: 'Ethical advisory with truthful regulatory disclosures and no misleading shortcuts.',
      icon: ShieldCheck
    },
    {
      title: 'Transparency',
      desc: 'Clear upfront breakdown of statutory government fees versus professional consultancy costs.',
      icon: Eye
    },
    {
      title: 'Professionalism',
      desc: 'Disciplined documentation preparation by qualified legal and tax consultants.',
      icon: Award
    },
    {
      title: 'Client-Focused Support',
      desc: 'Attentive, human consultation that listens to your commercial priorities at every step.',
      icon: HeartHandshake
    }
  ];

  return (
    <section 
      id="about" 
      className="py-20 sm:py-28 bg-[#F7F8FA] relative scroll-mt-20 border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Corporate Imagery with Elegant Gold Accent Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
              <img 
                src="/images/about-consulting.jpg" 
                alt="Evidex India Corporate Legal Consulting" 
                className="w-full h-[420px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                width="600"
                height="480"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101F3D]/80 via-transparent to-transparent"></div>
              
              {/* Overlay Location Stamp */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-gray-200/80 shadow-lg flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#101F3D] text-[#E0AD42] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#101F3D]">Registered Office</p>
                  <p className="text-[11px] text-gray-600 line-clamp-1">
                    Tobacco House, Lal Bazar, Kolkata, West Bengal
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Gold Border Aura behind image */}
            <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-[#C9962B]/20 rounded-3xl -z-10 blur-xl pointer-events-none"></div>
          </div>

          {/* Right Column: Heading, Paragraph & Four Values */}
          <div className="lg:col-span-7">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#101F3D]/5 border border-[#101F3D]/10 text-[#101F3D] text-xs font-bold uppercase tracking-wider mb-4">
              About Evidex India
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#101F3D] tracking-tight leading-tight mb-6">
              Your Trusted Partner in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9962B] via-[#E0AD42] to-[#B27E18]">
                Business Compliance.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-normal mb-8 text-balance">
              Evidex India is a business-support and legal-compliance consultancy helping entrepreneurs, startups and established businesses navigate important registrations, documentation, taxation and regulatory processes. Our focus is to make complex requirements easier to understand and manage through professional guidance and customer-focused assistance.
            </p>

            {/* 4 Core Value Statements */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <div 
                    key={i}
                    className="p-4 rounded-xl bg-white border border-gray-200/80 shadow-sm hover:border-[#C9962B]/50 transition-colors"
                  >
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <div className="w-7 h-7 rounded-lg bg-amber-50 text-[#C9962B] flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-[#101F3D]">{v.title}</h4>
                    </div>
                    <p className="text-xs text-gray-600 pl-9 leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Direct Action */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#contact"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-sm text-[#0B1528] bg-gradient-to-r from-[#E0AD42] via-[#C9962B] to-[#B27E18] hover:from-[#E8B854] hover:to-[#D4A338] shadow-lg shadow-[#C9962B]/20 flex items-center justify-center gap-2 transition-transform hover:scale-105"
              >
                <span>Connect With Our Team</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`tel:${COMPANY_DETAILS.phoneClean}`}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm text-[#101F3D] hover:bg-gray-200/70 border border-gray-300 transition-colors text-center"
              >
                Call: {COMPANY_DETAILS.phone}
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
