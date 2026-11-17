import React, { useEffect } from 'react';
import { X, ShieldCheck, FileText, RefreshCw } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/servicesData';

export default function PolicyModal({ policyType, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!policyType) return null;

  const contentMap = {
    privacy: {
      title: 'Privacy Policy',
      icon: ShieldCheck,
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-gray-600 leading-relaxed">
          <p>
            At <strong>Evidex India</strong>, accessible from https://www.evidexindia.com, the privacy of our visitors and clients is of utmost priority. This Privacy Policy outlines the types of personal data we collect, why we collect it, and how we safeguard your information.
          </p>
          <h4 className="font-bold text-[#101F3D] text-sm">1. Information We Collect</h4>
          <p>
            When you request consultation or engage our services, we may collect your name, mobile number, email address, proposed business entity name, identity documentation, and registered address proofs required for statutory filings.
          </p>
          <h4 className="font-bold text-[#101F3D] text-sm">2. Use of Information</h4>
          <p>
            We use the collected information solely to:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Communicate regarding requested corporate registrations, filings, and advisories.</li>
            <li>Prepare and draft statutory applications with governmental registries (MCA, GSTN, IP India, FSSAI).</li>
            <li>Comply with statutory verification and anti-fraud regulations.</li>
          </ul>
          <h4 className="font-bold text-[#101F3D] text-sm">3. Data Confidentiality &amp; Security</h4>
          <p>
            Evidex India strictly does NOT sell, rent, or trade your personal or business records to any commercial third parties. Information is disclosed solely to authorized government filing portals as mandated by law.
          </p>
          <h4 className="font-bold text-[#101F3D] text-sm">4. Contacting Our Data Officer</h4>
          <p>
            For any privacy inquiries or data requests, write to us at <strong>{COMPANY_DETAILS.email}</strong> or call <strong>{COMPANY_DETAILS.phone}</strong>.
          </p>
        </div>
      )
    },
    terms: {
      title: 'Terms & Conditions',
      icon: FileText,
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-gray-600 leading-relaxed">
          <p>
            Welcome to <strong>Evidex India</strong>. By accessing our website or retaining our consultancy services, you agree to comply with and be bound by the following terms and conditions.
          </p>
          <h4 className="font-bold text-[#101F3D] text-sm">1. Nature of Services</h4>
          <p>
            Evidex India is an independent private consultancy providing professional facilitation, legal drafting, and taxation compliance services. We are NOT a government body or registrar. Final approval of applications (including company incorporation, trademark grant, or GST issuance) rests entirely with respective statutory authorities.
          </p>
          <h4 className="font-bold text-[#101F3D] text-sm">2. Client Responsibilities</h4>
          <p>
            Clients agree to furnish authentic, accurate, and valid identity and constitutional documents. Evidex India shall not be held liable for delays, rejections, or penalties resulting from inaccurate, fraudulent, or delayed documentation provided by the client.
          </p>
          <h4 className="font-bold text-[#101F3D] text-sm">3. Statutory Government Fees</h4>
          <p>
            Statutory government fees (including MCA filing fees, stamp duties, trademark official fees, and municipal charges) are separate from professional service consultancy charges and must be paid in accordance with the regulatory schedule.
          </p>
          <h4 className="font-bold text-[#101F3D] text-sm">4. Jurisdiction</h4>
          <p>
            Any disputes arising out of our services shall be subject to the exclusive jurisdiction of the competent courts in Kolkata, West Bengal, India.
          </p>
        </div>
      )
    },
    refund: {
      title: 'Refund & Cancellation Policy',
      icon: RefreshCw,
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-gray-600 leading-relaxed">
          <p>
            At <strong>Evidex India</strong>, we are committed to delivering rigorous, professional corporate consultancy. Please review our refund guidelines below.
          </p>
          <h4 className="font-bold text-[#101F3D] text-sm">1. Pre-Processing Cancellation</h4>
          <p>
            If a cancellation request is submitted before our team has drafted legal documentation, obtained Digital Signatures, or initiated statutory filings, a refund may be granted after deducting nominal administrative onboarding fees.
          </p>
          <h4 className="font-bold text-[#101F3D] text-sm">2. Non-Refundable Statutory Fees</h4>
          <p>
            Once government filing fees, stamp duties, DSC generation fees, or official portal charges have been paid to third-party government departments (such as MCA, GSTN, or IP India), these statutory expenses are strictly non-refundable under government policy.
          </p>
          <h4 className="font-bold text-[#101F3D] text-sm">3. Departmental Objections &amp; Timelines</h4>
          <p>
            Rejections or delays stemming from departmental discretion, regulatory changes, or incomplete client KYC do not constitute grounds for refund, though our team will provide guidance on rectifications.
          </p>
        </div>
      )
    }
  };

  const active = contentMap[policyType] || contentMap.privacy;
  const Icon = active.icon;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#0B1528]/80 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-[#101F3D] p-6 text-white flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 text-[#E0AD42] flex items-center justify-center">
              <Icon className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white">{active.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-gray-300 hover:text-white"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto">
          {active.body}
        </div>

        <div className="p-4 bg-gray-50 border-t border-gray-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#101F3D] text-white text-xs font-semibold hover:bg-[#182C52]"
          >
            I Understand &amp; Close
          </button>
        </div>
      </div>
    </div>
  );
}
