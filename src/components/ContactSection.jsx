import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageCircle, 
  CheckCircle, 
  AlertCircle, 
  ExternalLink,
  ShieldCheck,
  Building2,
  Sparkles
} from 'lucide-react';
import { COMPANY_DETAILS, SERVICES_DATA } from '../data/servicesData';

export default function ContactSection({ preselectedServiceId }) {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    businessName: '',
    serviceId: 'pvt-ltd',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submissionState, setSubmissionState] = useState(null); // 'submitted' | null

  // Auto-sync with preselected service from cards/modals
  useEffect(() => {
    if (preselectedServiceId) {
      setFormData((prev) => ({
        ...prev,
        serviceId: preselectedServiceId
      }));
    }
  }, [preselectedServiceId]);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name';
    }
    const cleanMobile = formData.mobile.replace(/[^0-9]/g, '');
    if (!cleanMobile || cleanMobile.length < 10) {
      errs.mobile = 'Please enter a valid 10-digit mobile number';
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide a brief description of your requirements';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const selectedServiceObj = SERVICES_DATA.find(s => s.id === formData.serviceId) || SERVICES_DATA[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Show professional handoff options (WhatsApp or Direct Email) without fake backend success alerts
    setSubmissionState('ready_to_send');
  };

  const handleWhatsAppHandoff = () => {
    const text = encodeURIComponent(
      `*New Consultation Enquiry — Evidex India*\n\n` +
      `*Name:* ${formData.fullName}\n` +
      `*Mobile:* ${formData.mobile}\n` +
      `*Email:* ${formData.email}\n` +
      `*Business Name:* ${formData.businessName || 'Not specified'}\n` +
      `*Service Required:* ${selectedServiceObj.title}\n` +
      `*Requirements:* ${formData.message}\n\n` +
      `Please provide guidance on the next steps and consultation schedule.`
    );
    window.open(`${COMPANY_DETAILS.whatsappUrl}?text=${text}`, '_blank');
  };

  const handleEmailHandoff = () => {
    const subject = encodeURIComponent(`Consultation Request: ${selectedServiceObj.title} - ${formData.fullName}`);
    const body = encodeURIComponent(
      `Hello Evidex India Consultation Team,\n\n` +
      `I would like to request expert consultation for the following requirements:\n\n` +
      `Client Name: ${formData.fullName}\n` +
      `Mobile: ${formData.mobile}\n` +
      `Email: ${formData.email}\n` +
      `Business / Firm Name: ${formData.businessName || 'N/A'}\n` +
      `Service Selected: ${selectedServiceObj.title}\n\n` +
      `Requirement Details:\n${formData.message}\n\n` +
      `Kindly reply with document prerequisites and available consultation timings.\n\n` +
      `Best regards,\n${formData.fullName}`
    );
    window.location.href = `mailto:${COMPANY_DETAILS.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section 
      id="contact" 
      className="py-20 sm:py-28 bg-white relative scroll-mt-20 border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#101F3D]/5 border border-[#101F3D]/10 text-[#101F3D] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C9962B]" />
            Direct Consultation
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#101F3D] tracking-tight leading-tight">
            Let's Simplify Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9962B] via-[#E0AD42] to-[#B27E18]">
              Business Requirements.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
            Tell us what you need, and connect with our team for professional guidance. 
            All enquiries receive direct attention from experienced corporate advisors.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Corporate Contact Details & Map */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Card */}
            <div className="bg-[#101F3D] text-white p-7 sm:p-8 rounded-3xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#C9962B]/10 rounded-full blur-2xl pointer-events-none"></div>

              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span>Corporate Office</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full font-semibold bg-[#C9962B]/20 text-[#E0AD42]">
                  Lal Bazar, Kolkata
                </span>
              </h3>

              <div className="space-y-6 text-sm">
                
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 text-[#E0AD42] flex items-center justify-center shrink-0 border border-white/10 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-300 uppercase tracking-wider">Office Address</p>
                    <p className="text-sm text-gray-100 font-medium leading-relaxed mt-1">
                      {COMPANY_DETAILS.address.line1},<br />
                      {COMPANY_DETAILS.address.line2},<br />
                      {COMPANY_DETAILS.address.city} – {COMPANY_DETAILS.address.pincode},<br />
                      {COMPANY_DETAILS.address.state}, {COMPANY_DETAILS.address.country}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 text-[#E0AD42] flex items-center justify-center shrink-0 border border-white/10 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-300 uppercase tracking-wider">Call Us</p>
                    <a 
                      href={`tel:${COMPANY_DETAILS.phoneClean}`}
                      className="text-base font-bold text-white hover:text-[#E0AD42] transition-colors mt-1 inline-block"
                    >
                      {COMPANY_DETAILS.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 text-[#E0AD42] flex items-center justify-center shrink-0 border border-white/10 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-300 uppercase tracking-wider">Email Us</p>
                    <a 
                      href={`mailto:${COMPANY_DETAILS.email}`}
                      className="text-sm font-semibold text-gray-200 hover:text-[#E0AD42] transition-colors mt-1 inline-block"
                    >
                      {COMPANY_DETAILS.email}
                    </a>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 text-[#E0AD42] flex items-center justify-center shrink-0 border border-white/10 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-300 uppercase tracking-wider">Business Hours</p>
                    <p className="text-xs sm:text-sm text-gray-200 mt-1 leading-snug">
                      Monday – Saturday: 10:00 AM – 7:00 PM<br />
                      <span className="text-gray-400">Sunday: Closed</span>
                    </p>
                  </div>
                </div>

              </div>

              {/* Direct Quick Action Buttons */}
              <div className="pt-6 mt-6 border-t border-white/10 grid grid-cols-2 gap-3">
                <a
                  href={`tel:${COMPANY_DETAILS.phoneClean}`}
                  className="py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors border border-white/15"
                >
                  <Phone className="w-3.5 h-3.5 text-[#E0AD42]" />
                  <span>Call Direct</span>
                </a>
                
                <a
                  href={`${COMPANY_DETAILS.whatsappUrl}?text=${encodeURIComponent('Hello Evidex India, I would like to enquire about your legal and compliance services.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-md"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Maps Container */}
            <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-md">
              <div className="p-4 bg-gray-50 border-b border-gray-100 flex items-center justify-between">
                <span className="text-xs font-bold text-[#101F3D] flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#C9962B]" />
                  Office Location Map
                </span>
                <a
                  href={COMPANY_DETAILS.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#C9962B] hover:underline flex items-center gap-1"
                >
                  <span>Get Directions</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="h-56 w-full">
                <iframe
                  title="Evidex India Office Location - Tobacco House Kolkata"
                  src={COMPANY_DETAILS.googleMapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

          </div>

          {/* Right Column: Premium High-Conversion Consultation Form */}
          <div className="lg:col-span-7 bg-[#F7F8FA] p-6 sm:p-10 rounded-3xl border border-gray-200/90 shadow-xl relative">
            
            <div className="mb-8">
              <h3 className="text-2xl font-extrabold text-[#101F3D] tracking-tight">
                Request Expert Consultation
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-1.5">
                Fill out the form below. When submitted, you can seamlessly connect via WhatsApp or verified corporate email with all details pre-arranged.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-[#101F3D] uppercase tracking-wider mb-1.5">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => {
                    setFormData({ ...formData, fullName: e.target.value });
                    if (errors.fullName) setErrors({ ...errors, fullName: null });
                  }}
                  placeholder="e.g. Rahul Sharma"
                  className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-gray-800 focus:outline-none focus:ring-2 transition-all ${
                    errors.fullName 
                      ? 'border-rose-400 focus:ring-rose-200' 
                      : 'border-gray-200 focus:border-[#C9962B] focus:ring-[#C9962B]/20'
                  }`}
                />
                {errors.fullName && (
                  <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* Mobile Number & Email Address (2 columns) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#101F3D] uppercase tracking-wider mb-1.5">
                    Mobile Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.mobile}
                    onChange={(e) => {
                      setFormData({ ...formData, mobile: e.target.value });
                      if (errors.mobile) setErrors({ ...errors, mobile: null });
                    }}
                    placeholder="+91 98765 43210"
                    className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-gray-800 focus:outline-none focus:ring-2 transition-all ${
                      errors.mobile 
                        ? 'border-rose-400 focus:ring-rose-200' 
                        : 'border-gray-200 focus:border-[#C9962B] focus:ring-[#C9962B]/20'
                    }`}
                  />
                  {errors.mobile && (
                    <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      {errors.mobile}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#101F3D] uppercase tracking-wider mb-1.5">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: null });
                    }}
                    placeholder="name@company.com"
                    className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-gray-800 focus:outline-none focus:ring-2 transition-all ${
                      errors.email 
                        ? 'border-rose-400 focus:ring-rose-200' 
                        : 'border-gray-200 focus:border-[#C9962B] focus:ring-[#C9962B]/20'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Business Name (Optional) */}
              <div>
                <label className="block text-xs font-bold text-[#101F3D] uppercase tracking-wider mb-1.5">
                  Business / Entity Name <span className="text-gray-400 font-normal lowercase">(optional)</span>
                </label>
                <input
                  type="text"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  placeholder="e.g. Apex Tech Solutions LLP or Proposed Name"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm text-gray-800 focus:border-[#C9962B] focus:outline-none focus:ring-2 focus:ring-[#C9962B]/20 transition-all"
                />
              </div>

              {/* Service Required Dropdown (All 24 services) */}
              <div>
                <label className="block text-xs font-bold text-[#101F3D] uppercase tracking-wider mb-1.5">
                  Service Required <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <select
                    value={formData.serviceId}
                    onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm text-gray-800 focus:border-[#C9962B] focus:outline-none focus:ring-2 focus:ring-[#C9962B]/20 transition-all appearance-none cursor-pointer"
                  >
                    <optgroup label="Start Business">
                      {SERVICES_DATA.filter(s => s.category === 'start-business').map(s => (
                        <option key={s.id} value={s.id}>{s.title}</option>
                      ))}
                    </optgroup>
                    <optgroup label="Filing & Drafting">
                      {SERVICES_DATA.filter(s => s.category === 'filing-drafting').map(s => (
                        <option key={s.id} value={s.id}>{s.title}</option>
                      ))}
                    </optgroup>
                    <optgroup label="Tax & Compliance">
                      {SERVICES_DATA.filter(s => s.category === 'tax-compliance').map(s => (
                        <option key={s.id} value={s.id}>{s.title}</option>
                      ))}
                    </optgroup>
                    <optgroup label="Trademark & Intellectual Property">
                      {SERVICES_DATA.filter(s => s.category === 'trademark-ip').map(s => (
                        <option key={s.id} value={s.id}>{s.title}</option>
                      ))}
                    </optgroup>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 text-xs">
                    ▼
                  </div>
                </div>
              </div>

              {/* Message / Requirements */}
              <div>
                <label className="block text-xs font-bold text-[#101F3D] uppercase tracking-wider mb-1.5">
                  Message / Requirements <span className="text-rose-500">*</span>
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: null });
                  }}
                  placeholder="Describe your requirements, current stage of registration, or questions..."
                  className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-gray-800 focus:outline-none focus:ring-2 transition-all resize-none ${
                    errors.message 
                      ? 'border-rose-400 focus:ring-rose-200' 
                      : 'border-gray-200 focus:border-[#C9962B] focus:ring-[#C9962B]/20'
                  }`}
                ></textarea>
                {errors.message && (
                  <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Primary Form Submit Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl font-extrabold text-sm sm:text-base text-[#0B1528] bg-gradient-to-r from-[#E0AD42] via-[#C9962B] to-[#B27E18] hover:from-[#E8B854] hover:to-[#C08C22] shadow-xl shadow-[#C9962B]/20 hover:shadow-[#C9962B]/35 transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Request Expert Consultation</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-gray-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C9962B]" />
                <span>Your contact details are kept strictly confidential under our Privacy Policy.</span>
              </div>

            </form>

            {/* Transparent Handoff Modal / Box when user clicks Submit */}
            {submissionState === 'ready_to_send' && (
              <div className="mt-6 p-6 rounded-2xl bg-amber-50/80 border-2 border-[#C9962B]/50 animate-fadeIn">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#101F3D] text-[#E0AD42] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#101F3D]">
                      Consultation Ready for Dispatch!
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-700 mt-1 leading-relaxed">
                      Your details for <strong>{selectedServiceObj.title}</strong> are prepared. 
                      Choose your preferred channel below for immediate review by our team:
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-3 mt-4">
                      <button
                        type="button"
                        onClick={handleWhatsAppHandoff}
                        className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-md transition-colors"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Send via WhatsApp</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleEmailHandoff}
                        className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#101F3D] hover:bg-[#182C52] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-md transition-colors"
                      >
                        <Mail className="w-4 h-4 text-[#E0AD42]" />
                        <span>Send via Corporate Email</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setSubmissionState(null)}
                        className="text-xs text-gray-500 hover:text-gray-800 underline sm:ml-auto"
                      >
                        Edit Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
