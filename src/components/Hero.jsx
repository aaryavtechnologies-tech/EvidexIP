import React, { useState, useRef, useEffect } from 'react';
import { 
  Search, 
  ArrowRight, 
  Sparkles,
  ChevronRight,
  ChevronLeft,
  X
} from 'lucide-react';
import { SERVICES_DATA, POPULAR_SERVICE_CHIPS } from '../data/servicesData';

const SLIDES = [
  {
    id: 1,
    image: '/images/hero-slide-1.jpg',
    title: 'Supreme Court & Institutional Legal Authority',
    subtitle: 'Highest standards of compliance and statutory filing',
    position: 'center center'
  },
  {
    id: 2,
    image: '/images/hero-slide-2.jpg',
    title: 'Modern Executive Boardroom & Corporate Counsel',
    subtitle: 'Strategic corporate advisory for growing enterprises',
    position: 'center center'
  },
  {
    id: 3,
    image: '/images/hero-slide-3.jpg',
    title: 'Senior Legal Advisory & Client Consultation',
    subtitle: '1-on-1 personalized corporate legal guidance',
    position: 'center center'
  }
];

export default function Hero({ 
  searchQuery, 
  setSearchQuery, 
  onSelectService, 
  onCategorySelect 
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFocused, setIsFocused] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const searchContainerRef = useRef(null);

  // Touch swipe support for mobile
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Preload all slideshow images & auto-play slideshow every 5 seconds
  useEffect(() => {
    SLIDES.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Compute live suggestions
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSuggestions([]);
      return;
    }
    const q = searchQuery.toLowerCase().trim();
    const matches = SERVICES_DATA.filter(s => 
      s.title.toLowerCase().includes(q) ||
      s.shortDescription.toLowerCase().includes(q) ||
      s.categoryLabel.toLowerCase().includes(q)
    ).slice(0, 5);
    setSuggestions(matches);
  }, [searchQuery]);

  // Click outside to close suggestion dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target)) {
        setIsFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSuggestionClick = (service) => {
    setSearchQuery('');
    setIsFocused(false);
    onSelectService(service);
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleChipClick = (chip) => {
    const service = SERVICES_DATA.find(s => s.id === chip.id);
    if (service) {
      onSelectService(service);
      const el = document.getElementById('services');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 45) {
      nextSlide();
    } else if (diff < -45) {
      prevSlide();
    }
  };

  return (
    <header 
      id="hero" 
      className="relative min-h-[90vh] md:min-h-[92vh] flex items-center justify-center bg-[#0B1528] overflow-hidden pt-8 pb-16 sm:pt-12 sm:pb-24 lg:pt-16 lg:pb-32"
    >
      {/* ========================================================
          DESKTOP SLIDESHOW BACKGROUND (>= md)
          Widescreen 16:9 full-bleed crossfade slideshow
         ======================================================== */}
      <div className="hidden md:block absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        {SLIDES.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 bg-cover bg-no-repeat transition-all duration-1000 ease-in-out ${
              idx === currentSlide 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-105 pointer-events-none'
            }`}
            style={{ 
              backgroundImage: `url('${slide.image}')`,
              backgroundPosition: slide.position || 'center center'
            }}
          >
            {/* Clear-Vision Gradient Overlay for desktop */}
            <div 
              className="absolute inset-0 bg-gradient-to-b from-[#0B1528]/45 via-black/25 to-[#0B1528]/55"
            ></div>
          </div>
        ))}
      </div>

      {/* ========================================================
          MOBILE AMBIENT GLOW BACKGROUND (< md)
          Soft atmospheric ambient glow synchronized with current slide
         ======================================================== */}
      <div className="md:hidden absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {SLIDES.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              idx === currentSlide ? 'opacity-30' : 'opacity-0'
            }`}
          >
            <img 
              src={slide.image} 
              alt=""
              className="w-full h-full object-cover blur-2xl scale-125" 
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1528]/80 via-[#0B1528]/85 to-[#0B1528]"></div>
      </div>

      {/* Desktop Manual Slideshow Arrow Controls */}
      <button
        type="button"
        onClick={prevSlide}
        className="hidden md:flex absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/40 hover:bg-black/75 text-white/80 hover:text-white items-center justify-center border border-white/20 shadow-xl backdrop-blur-sm transition-all focus:outline-none hover:scale-110"
        aria-label="Previous background slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        type="button"
        onClick={nextSlide}
        className="hidden md:flex absolute right-4 lg:right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/40 hover:bg-black/75 text-white/80 hover:text-white items-center justify-center border border-white/20 shadow-xl backdrop-blur-sm transition-all focus:outline-none hover:scale-110"
        aria-label="Next background slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* ========================================================
          HERO MAIN CONTENT
         ======================================================== */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center w-full">
        
        {/* Mobile Top Badge */}
        <div className="md:hidden inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-[#E0AD42]/20 text-[#E0AD42] border border-[#E0AD42]/40 mb-3 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E0AD42] animate-pulse"></span>
          Verified Corporate Legal Consultancy
        </div>

        {/* Main Hero Headline */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.18] sm:leading-[1.15] mb-3 sm:mb-4 drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
          Grow Your Business with Confidence.{' '}
          <span className="block mt-1 sm:mt-3 text-[#E0AD42] drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]">
            Achieve More with Evidex India.
          </span>
        </h1>

        {/* Supporting Description */}
        <p className="max-w-3xl text-xs sm:text-base md:text-lg text-white/95 font-medium leading-relaxed mb-4 sm:mb-8 text-balance drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
          Simplifying Legal, Tax, and Compliance the{' '}
          <span className="inline-block px-2 sm:px-2.5 py-0.5 rounded-full text-[11px] sm:text-xs font-bold bg-[#E0AD42] text-[#0B1528] shadow-md align-middle mx-1">
            Expert-Driven
          </span>{' '}
          way. Guided corporate registrations across India.
        </p>

        {/* ========================================================
            MOBILE FEATURED SLIDESHOW CARD (< md)
            100% Uncropped, Fully Visible High-Definition Slideshow
            Eliminates side clipping while preserving all subjects
           ======================================================== */}
        <div 
          className="md:hidden w-full max-w-md my-3 select-none"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border-2 border-[#E0AD42]/40 bg-black/90 ring-4 ring-black/40">
            {SLIDES.map((slide, idx) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover object-center"
                />

                {/* Subtle dark gradient overlay at top & bottom of the card for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/35 flex flex-col justify-between p-3 pointer-events-none text-left">
                  <div className="flex justify-between items-center">
                    <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-black/70 text-[#E0AD42] border border-[#E0AD42]/40 backdrop-blur-sm">
                      SLIDE {idx + 1} / {SLIDES.length}
                    </span>
                    <span className="text-[10px] text-gray-200 bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm border border-white/10">
                      Swipe ↔
                    </span>
                  </div>

                  <div>
                    <p className="text-xs font-extrabold text-white drop-shadow-md leading-tight">
                      {slide.title}
                    </p>
                    <p className="text-[10px] text-gray-300 drop-shadow mt-0.5 line-clamp-1">
                      {slide.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Mobile Card Next / Prev Buttons */}
            <button
              type="button"
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-black/60 active:bg-black text-white/90 flex items-center justify-center border border-white/30 shadow-lg backdrop-blur-sm focus:outline-none"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-black/60 active:bg-black text-white/90 flex items-center justify-center border border-white/30 shadow-lg backdrop-blur-sm focus:outline-none"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Card Dots Indicator */}
            <div className="absolute bottom-2.5 right-3 flex items-center gap-1 z-20">
              {SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none ${
                    idx === currentSlide 
                      ? 'w-5 bg-[#E0AD42]' 
                      : 'w-1.5 bg-white/50'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Smart Service Search Bar */}
        <div 
          ref={searchContainerRef}
          className="w-full max-w-2xl relative mb-4 sm:mb-6 mt-1 sm:mt-0"
        >
          <div className="relative flex items-center shadow-2xl rounded-2xl overflow-hidden bg-white p-1 sm:p-2 border border-white/80 focus-within:ring-4 focus-within:ring-[#C9962B]/40 focus-within:border-[#C9962B] transition-all">
            <div className="pl-3 sm:pl-4 text-gray-500">
              <Search className="w-4 h-4 sm:w-5 sm:h-5 text-[#101F3D]" />
            </div>
            
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              placeholder="Search a service — e.g. GST Registration, Trademark..."
              className="w-full px-2.5 sm:px-4 py-2 sm:py-3 text-xs sm:text-base text-gray-800 placeholder-gray-400 focus:outline-none font-medium bg-transparent"
              aria-label="Search company and legal services"
            />

            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="p-1 sm:p-1.5 mr-1 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            )}

            <button
              type="button"
              onClick={() => {
                const el = document.getElementById('services');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-[#C9962B] to-[#E0AD42] hover:from-[#B88520] hover:to-[#D4A338] text-[#0B1528] flex items-center justify-center shrink-0 shadow-md transition-transform hover:scale-105 focus:outline-none"
              aria-label="Submit service search"
            >
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 font-bold" />
            </button>
          </div>

          {/* Real-Time Live Search Suggestions Dropdown */}
          {isFocused && suggestions.length > 0 && (
            <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50 text-left animate-fadeIn">
              <div className="px-4 py-2 bg-gray-50 border-b border-gray-100 text-xs font-semibold text-gray-500 uppercase tracking-wider flex justify-between">
                <span>Matching Services ({suggestions.length})</span>
                <span className="text-[#C9962B]">Click to view &amp; consult</span>
              </div>
              <div className="divide-y divide-gray-100 max-h-72 overflow-y-auto">
                {suggestions.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => handleSuggestionClick(service)}
                    className="w-full px-4 py-3 text-left hover:bg-amber-50/60 transition-colors flex items-center justify-between group"
                  >
                    <div>
                      <div className="text-sm font-bold text-[#101F3D] group-hover:text-[#C9962B] flex items-center gap-2">
                        <span>{service.title}</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold bg-gray-100 text-gray-600">
                          {service.categoryLabel}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 line-clamp-1 mt-0.5">
                        {service.shortDescription}
                      </p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#C9962B] group-hover:translate-x-1 transition-transform shrink-0 ml-2" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Clickable Popular Service Chips */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 max-w-3xl mb-6 sm:mb-10">
          {POPULAR_SERVICE_CHIPS.map((chip) => (
            <button
              key={chip.id}
              onClick={() => handleChipClick(chip)}
              className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-semibold text-white bg-black/45 hover:bg-[#C9962B]/40 hover:text-[#E0AD42] hover:border-[#E0AD42]/60 border border-white/20 backdrop-blur-md transition-all focus:outline-none shadow-md"
            >
              {chip.label}
            </button>
          ))}
        </div>

        {/* Hero Factual Trust Metrics Row (Glassmorphic) */}
        <div className="w-full max-w-4xl p-2 rounded-2xl bg-black/40 border border-white/20 backdrop-blur-md grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 shadow-2xl">
          <div className="p-2.5 sm:p-3 text-center rounded-xl bg-white/5 border border-white/10">
            <p className="text-lg sm:text-2xl font-black text-[#E0AD42] drop-shadow-md">Active</p>
            <p className="text-[10px] sm:text-[11px] text-gray-200 font-medium mt-0.5">Client Support</p>
          </div>

          <div className="p-2.5 sm:p-3 text-center rounded-xl bg-white/5 border border-white/10">
            <p className="text-lg sm:text-2xl font-black text-[#E0AD42] drop-shadow-md">1-on-1</p>
            <p className="text-[10px] sm:text-[11px] text-gray-200 font-medium mt-0.5">Expert Guidance</p>
          </div>

          <div className="p-2.5 sm:p-3 text-center rounded-xl bg-white/5 border border-white/10">
            <p className="text-lg sm:text-2xl font-black text-[#E0AD42] drop-shadow-md">28+</p>
            <p className="text-[10px] sm:text-[11px] text-gray-200 font-medium mt-0.5">Services Offered</p>
          </div>

          <div className="p-2.5 sm:p-3 text-center rounded-xl bg-white/5 border border-white/10">
            <p className="text-lg sm:text-2xl font-black text-[#E0AD42] drop-shadow-md">100%</p>
            <p className="text-[10px] sm:text-[11px] text-gray-200 font-medium mt-0.5">Secure Portal Filings</p>
          </div>
        </div>

        {/* Desktop Slide Indicator Dots */}
        <div className="hidden md:flex items-center justify-center gap-2.5 mt-6 z-20">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 focus:outline-none shadow-md ${
                idx === currentSlide 
                  ? 'w-9 bg-[#E0AD42] ring-2 ring-[#E0AD42]/40' 
                  : 'w-2.5 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Switch to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>

      {/* Subtle Curved Bottom Divider Transitioning into White Content Section */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none z-10 pointer-events-none">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-8 sm:h-12 md:h-16 text-[#F7F8FA] fill-current"
        >
          <path d="M0,0 C150,90 350,-40 500,60 C650,160 900,10 1200,40 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </header>
  );
}
