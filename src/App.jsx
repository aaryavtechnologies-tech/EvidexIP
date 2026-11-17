import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import ServiceModal from './components/ServiceModal';
import WhyChooseUs from './components/WhyChooseUs';
import HowItWorks from './components/HowItWorks';
import AboutUs from './components/AboutUs';
import WhoWeHelp from './components/WhoWeHelp';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import PolicyModal from './components/PolicyModal';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [modalService, setModalService] = useState(null);
  const [preselectedServiceId, setPreselectedServiceId] = useState('pvt-ltd');
  const [policyType, setPolicyType] = useState(null);

  // When user clicks "Enquire" on card or "Get Expert Assistance" in modal
  const handleQuickEnquire = (service) => {
    setPreselectedServiceId(service.id);
    if (modalService) {
      setModalService(null);
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectServiceFromHero = (service) => {
    setModalService(service);
  };

  const handleCategorySelectFromFooter = (catId) => {
    setSelectedCategory(catId);
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#263247] font-body selection:bg-[#E0AD42] selection:text-[#0B1528]">
      
      {/* Sticky Premium Navbar */}
      <Navbar />

      {/* Main Single Page Content */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onSelectService={handleSelectServiceFromHero}
          onCategorySelect={setSelectedCategory}
        />

        {/* 2. Complete Services Directory */}
        <ServicesSection 
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onSelectService={(service) => setModalService(service)}
          onQuickEnquire={handleQuickEnquire}
        />

        {/* 3. Why Choose Evidex India */}
        <WhyChooseUs />

        {/* 4. How It Works */}
        <HowItWorks />

        {/* 5. About Evidex India */}
        <AboutUs />

        {/* 6. Who We Help */}
        <WhoWeHelp 
          onSelectCategory={(catId) => {
            setSelectedCategory(catId);
            const el = document.getElementById('services');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 7. FAQs */}
        <FaqSection />

        {/* 8. High-Conversion Contact & Map Section */}
        <ContactSection 
          preselectedServiceId={preselectedServiceId}
        />
      </main>

      {/* 9. Premium Corporate Footer */}
      <Footer 
        onCategoryClick={handleCategorySelectFromFooter}
        onOpenPolicy={(policy) => setPolicyType(policy)}
      />

      {/* 10. Floating Actions (WhatsApp, Call, Back to Top) */}
      <FloatingActions />

      {/* 11. Interactive Service Detail Modal */}
      {modalService && (
        <ServiceModal 
          service={modalService}
          onClose={() => setModalService(null)}
          onEnquireNow={handleQuickEnquire}
        />
      )}

      {/* 12. Policy Legal Modal */}
      {policyType && (
        <PolicyModal 
          policyType={policyType}
          onClose={() => setPolicyType(null)}
        />
      )}

    </div>
  );
}
