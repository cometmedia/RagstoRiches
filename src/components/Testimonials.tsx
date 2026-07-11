import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { TESTIMONIALS } from "../types";

// Explicitly mapped project images
const TESTIMONIAL_IMAGES: Record<string, string> = {
  "test-1": "/src/assets/images/completed_modern_mansion_1783453929340.jpg",
  "test-2": "/src/assets/images/grey_structure_phase_1783453872098.jpg",
  "test-3": "/src/assets/images/luxury_finishing_details_1783453909295.jpg",
  "test-4": "/src/assets/images/southern_colonial_living_room_1783540561426.jpg",
  "test-5": "/src/assets/images/french_country_kitchen_1783540582090.jpg",
};

// Explicitly mapped roles & companies for the signature area matching the image's structure
const TESTIMONIAL_DETAILS: Record<string, { role: string; brand: string; location: string }> = {
  "test-1": {
    role: "Project Partners",
    brand: "Rahman Estate",
    location: "Islamabad, Pakistan",
  },
  "test-2": {
    role: "Civil Engineer",
    brand: "Crestwood",
    location: "Lahore, Pakistan",
  },
  "test-3": {
    role: "Creative Director",
    brand: "Atrium Villa",
    location: "Karachi, Pakistan",
  },
  "test-4": {
    role: "Homeowner",
    brand: "DHA Residence",
    location: "Rawalpindi, Pakistan",
  },
  "test-5": {
    role: "Client",
    brand: "Gulberg Manor",
    location: "Peshawar, Pakistan",
  },
};

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Check screen size to toggle items per page for responsive sliding
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setItemsPerPage(1);
      } else if (width < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, TESTIMONIALS.length - itemsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  const gap = itemsPerPage === 3 ? 32 : 24;
  const isMobile = itemsPerPage === 1;

  return (
    <section
      id="testimonials"
      className="bg-[#FFFFFF] text-[#1C1B19] pt-16 md:pt-20 pb-24 md:pb-36 border-t border-[#DBDBC8]/60 overflow-hidden"
      style={{ fontFamily: '"PP Neue Montreal", sans-serif' }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        
        {/* Header Block matching the reference design perfectly */}
        <motion.div 
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <img 
                src="/src/assets/images/logo.svg" 
                alt="Rags to Riches Logo" 
                className="h-5 w-5 object-contain"
                referrerPolicy="no-referrer"
              />
              <span 
                className="text-xs uppercase tracking-[0.14em] text-[#9E9E99]"
                style={{ fontFamily: '"PP Neue Montreal Medium", sans-serif', fontWeight: 500 }}
              >
                Testimonials
              </span>
            </div>
            <h2
              className="text-4xl sm:text-5xl md:text-[56px] font-medium tracking-tight text-[#53565A]"
              style={{
                fontFamily: '"PP Neue Montreal Medium", sans-serif',
                fontWeight: 500,
                lineHeight: "1.05",
                letterSpacing: "-0.045em",
                marginBottom: isMobile ? "-34px" : undefined
              }}
            >
              What Our <span className="text-[#9E9E99] font-light">Clients</span> Say
            </h2>
          </div>
 
          {/* Navigation Controls matching the reference image on the top right (solid black circles) - HIDDEN on mobile */}
          <div className="hidden md:flex items-center gap-3 mt-8 md:mt-0">
            <button
              onClick={handlePrev}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1C1B19] text-[#FFFFF7] hover:bg-[#1C1B19]/80 active:scale-95 transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1C1B19] text-[#FFFFF7] hover:bg-[#1C1B19]/80 active:scale-95 transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
 
        {/* Carousel Container */}
        <motion.div 
          className="relative w-full overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <motion.div
            className="flex gap-6 lg:gap-8"
            animate={{
              x: `calc(-${currentIndex * (100 / itemsPerPage)}% - ${currentIndex * (gap / itemsPerPage)}px)`,
            }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
            style={{ width: "100%" }}
          >
            {TESTIMONIALS.map((testimonial, idx) => {
              const details = TESTIMONIAL_DETAILS[testimonial.id] || {
                role: "Client",
                brand: "Estate",
                location: "Pakistan",
              };
              const imgUrl = TESTIMONIAL_IMAGES[testimonial.id] || "/src/assets/images/completed_modern_mansion_1783453929340.jpg";
 
              return (
                <div
                  key={testimonial.id}
                  className="shrink-0 bg-[#F4F4EB] rounded-[32px] p-6 sm:p-8 lg:p-10 flex flex-col justify-between min-h-[380px] sm:min-h-[440px] lg:min-h-[480px] border border-[#DBDBC8]/30 hover:border-[#FFDD00]/40 hover:shadow-lg transition-all duration-500 group"
                  style={{
                    width:
                      itemsPerPage === 3
                        ? "calc(33.333% - 21.33px)"
                        : itemsPerPage === 2
                        ? "calc(50% - 12px)"
                        : "100%",
                    borderRadius: idx === 0 ? "23px" : undefined
                  }}
                >
                  {/* Top Row: Avatar & Brand Badge */}
                  <div className="flex items-center justify-between">
                    <div className="overflow-hidden rounded-full w-14 h-14 border border-[#DBDBC8]">
                      <img
                        src={imgUrl}
                        alt={testimonial.author}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div 
                      className="border border-[#1C1B19]/15 px-5 py-2 rounded-full text-xs font-medium text-[#1C1B19] tracking-tight bg-[#FFFFF7]/40 transition-colors duration-300 group-hover:border-[#FFDD00] group-hover:bg-[#FFDD00]/10"
                      style={{ fontFamily: '"PP Neue Montreal Medium", sans-serif' }}
                    >
                      {details.brand}
                    </div>
                  </div>
 
                  {/* Quote Accent & Narrative */}
                  <div className="my-6 sm:my-8 flex-1 flex flex-col justify-center">
                    <span className="text-5xl text-[#53565A]/15 select-none leading-none -ml-1 mb-2 block font-serif transition-colors duration-300 group-hover:text-[#FFDD00]/40">
                      “
                    </span>
                    <p
                      className="text-base sm:text-lg lg:text-[20px] leading-[1.35] text-[#1C1B19] tracking-tight font-light"
                      style={{
                        fontFamily: '"PP Neue Montreal", sans-serif',
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {testimonial.quote}
                    </p>
                  </div>
 
                  {/* Signature Block with Vertical Border Left Line */}
                  <div className="border-l border-[#1C1B19]/20 pl-4 py-1 mt-auto transition-colors duration-300 group-hover:border-[#FFDD00]">
                    <h4
                      className="text-[17px] font-medium text-[#1C1B19] tracking-tight"
                      style={{ fontFamily: '"PP Neue Montreal Medium", sans-serif' }}
                    >
                      {testimonial.author}
                    </h4>
                    <span className="block text-xs text-[#53565A] mt-0.5">
                      {details.role}, {details.brand}
                    </span>
                    <span className="block text-[11px] text-[#9E9E99] mt-0.5 font-light">
                      {details.location}
                    </span>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Mobile Navigation Controls & Dot Indicators */}
        <div className="flex flex-col items-center gap-6 mt-8 md:hidden">
          {/* Dot indicators */}
          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? "w-6 bg-[#1C1B19]" : "w-1.5 bg-[#1C1B19]/20"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex items-center gap-4" style={isMobile ? { marginBottom: "-43px" } : undefined}>
            <button
              onClick={handlePrev}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1C1B19] text-[#FFFFF7] active:scale-95 transition-all duration-300 shadow-sm"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="h-4.5 w-4.5" />
            </button>
            <span className="text-xs font-medium text-[#1C1B19]/60 font-mono">
              {currentIndex + 1} / {TESTIMONIALS.length}
            </span>
            <button
              onClick={handleNext}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1C1B19] text-[#FFFFF7] active:scale-95 transition-all duration-300 shadow-sm"
              aria-label="Next testimonial"
            >
              <ArrowRight className="h-4.5 w-4.5" />
            </button>
          </div>
        </div>

        {/* Elegant Bottom Border and Description replacing Verified Commissions */}
        <div className="mt-16 pt-8 border-t border-[#DBDBC8]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span 
            className="text-xs text-[#9E9E99] tracking-wider uppercase font-light"
            style={{ fontFamily: '"PP Neue Montreal", sans-serif', marginTop: isMobile ? "-10px" : undefined }}
          >
            Honest Client Reflections
          </span>
          <div className="flex items-center gap-2" style={isMobile ? { marginTop: "-9px", marginBottom: "-34px" } : undefined}>
            <img 
              src="/src/assets/images/logo.svg" 
              alt="Rags to Riches Logo" 
              className="h-4.5 w-4.5 object-contain"
              referrerPolicy="no-referrer"
            />
            <span className="text-xs text-[#53565A] tracking-wide">
              30+ Years of Craftsmanship & Trust
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
