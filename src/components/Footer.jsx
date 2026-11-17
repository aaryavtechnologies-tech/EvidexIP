import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowUp, 
  ShieldCheck, 
  ExternalLink,
  ChevronRight,
  Clock
} from 'lucide-react';
import { COMPANY_DETAILS, SERVICE_CATEGORIES } from '../data/servicesData';

export default function Footer({ onCategoryClick, onOpenPolicy }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleServiceCategory = (catId) => {
    onCategoryClick(catId);
    scrollTo('services');
  };

  return (
    <footer className="bg-[#0B1528] text-gray-300 border-t border-[#1A315E]/60 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          
          {/* Column 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="inline-block bg-white/95 rounded-xl px-3 py-2 border border-[#C9962B]/30 shadow-md">
              <img 
                src="/images/logo.png" 
                alt="EVIDEX INDIA" 
                className="h-9 w-auto max-w-[170px] object-contain"
                width="170"
                height="36"
              />
            </div>

            <p className="text-sm text-gray-300 leading-relaxed font-normal">
              Making Business Registration, Legal Services &amp; Corporate Compliance Simpler across Kolkata and all India.
            </p>

            <div className="space-y-2 text-xs text-gray-400">
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E0AD42]"></span>
                Corporate Consultants &amp; Tax Advisors
              </p>
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E0AD42]"></span>
                Intellectual Property &amp; Legal Documentation
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-l-2 border-[#E0AD42] pl-2.5">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: 'Home', id: 'hero' },
                { name: 'Our Services', id: 'services' },
                { name: 'Why Choose Us', id: 'why-us' },
                { name: 'How It Works', id: 'how-it-works' },
                { name: 'About Us', id: 'about' },
                { name: 'FAQs', id: 'faqs' },
                { name: 'Contact Us', id: 'contact' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="hover:text-[#E0AD42] transition-colors flex items-center gap-1.5 text-gray-300 text-left focus:outline-none"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
                    <span>{link.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Service Categories (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-l-2 border-[#E0AD42] pl-2.5">
              Service Sectors
            </h4>
            <ul className="space-y-2.5 text-sm">
              {SERVICE_CATEGORIES.filter(c => c.id !== 'all').map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => handleServiceCategory(cat.id)}
                    className="hover:text-[#E0AD42] transition-colors flex items-center gap-1.5 text-gray-300 text-left focus:outline-none"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#C9962B]" />
                    <span>{cat.label}</span>
                  </button>
                </li>
              ))}
            </ul>

            <div className="pt-3">
              <span className="text-xs font-semibold text-[#E0AD42] block mb-1">
                Popular Services
              </span>
              <p className="text-xs text-gray-400 leading-relaxed">
                Pvt Ltd Incorporation • GST Registration • Trademark Registration • FSSAI Licensing • ITR e-Filing
              </p>
            </div>
          </div>

          {/* Column 4: Contact & Office (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-l-2 border-[#E0AD42] pl-2.5">
              Corporate Office
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E0AD42] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Tobacco House, 3rd Floor, Room 308 (South), 1 Old Court House Corner, Radha Bazar, Lal Bazar, Kolkata – 700001
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#E0AD42] shrink-0" />
                <a href={`tel:${COMPANY_DETAILS.phoneClean}`} className="hover:text-[#E0AD42] font-semibold text-white">
                  {COMPANY_DETAILS.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#E0AD42] shrink-0" />
                <a href={`mailto:${COMPANY_DETAILS.email}`} className="hover:text-[#E0AD42] text-gray-300">
                  {COMPANY_DETAILS.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#C9962B] shrink-0" />
                <span className="text-xs text-gray-400">
                  Mon – Sat: 10:00 AM – 7:00 PM
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Mandatory Private Consultancy Legal Disclaimer */}
        <div className="my-8 p-5 rounded-2xl bg-white/5 border border-white/10 text-xs text-gray-400 leading-relaxed">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-4 h-4 text-[#E0AD42] shrink-0 mt-0.5" />
            <div>
              <strong className="text-gray-200">Regulatory Disclaimer: </strong>
              Evidex India is an independent private corporate and legal consultancy. We are NOT an official government website, nor are we affiliated with any government ministry or statutory authority. Applicable statutory government charges and professional consultancy fees are separate. Government approvals and certificate grants are subject to statutory verification and documentation requirements prescribed by respective authorities.
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>
            © {new Date().getFullYear()} EVIDEX INDIA. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6">
            <button 
              onClick={() => onOpenPolicy('privacy')}
              className="hover:text-[#E0AD42] transition-colors focus:outline-none"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button 
              onClick={() => onOpenPolicy('terms')}
              className="hover:text-[#E0AD42] transition-colors focus:outline-none"
            >
              Terms &amp; Conditions
            </button>
            <span>•</span>
            <button 
              onClick={() => onOpenPolicy('refund')}
              className="hover:text-[#E0AD42] transition-colors focus:outline-none"
            >
              Refund Policy
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
