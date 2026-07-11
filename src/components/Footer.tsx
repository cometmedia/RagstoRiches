import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Instagram, Facebook, Youtube } from "lucide-react";

interface FooterProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Footer({ onScrollToSection }: FooterProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleScrollTop = (e: React.MouseEvent) => {
    e.preventDefault();
    onScrollToSection("hero");
  };

  // Stagger animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 100, damping: 18 } 
    },
  };

  return (
    <footer
      id="app-footer"
      className="bg-white text-[#1C1B19] pt-24 pb-12 border-t border-[#DBDBC8]/40 overflow-hidden"
      style={{ fontFamily: '"PP Neue Montreal", sans-serif' }}
    >
      <div className="mx-auto max-w-7xl px-3 md:px-12">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          
          {/* Left Column (Logo, Stacked Brand Name, CTA Button) - 6 Columns */}
          <motion.div 
            className="lg:col-span-6 flex flex-col justify-between items-start"
            variants={itemVariants}
          >
            <div className="space-y-10" style={isMobile ? { marginTop: "-62px" } : undefined}>
              {/* Stacked Wordmark in strict Neue Montreal layout with minimal letter spacing */}
              <a
                href="#"
                onClick={handleScrollTop}
                className="block select-none group"
              >
                <div className="flex flex-col">
                  {/* Row 1: Logo and Build */}
                  <div className="flex items-end gap-3 sm:gap-4 lg:gap-6">
                    <div className="relative flex h-12 w-12 sm:h-18 sm:w-18 lg:h-[100px] lg:w-[100px] items-center justify-center rounded-full overflow-hidden transition-transform duration-500 group-hover:scale-105 flex-shrink-0">
                      <svg viewBox="0 0 100 100" className="h-full w-full">
                        {/* Yellow Circle Background */}
                        <circle cx="50" cy="50" r="50" fill="#FFDD00" />

                        {/* Mirrored R (Left) */}
                        <path
                          d="M 48 22 
                             L 37 22 
                             C 24 22, 14 31, 14 41 
                             C 14 51, 24 59, 37 59 
                             L 48 59 Z"
                          fill="#FFFFFF"
                        />
                        <path
                          d="M 37 55 
                             L 14 76 
                             L 24 76 
                             L 39 59 Z"
                          fill="#FFFFFF"
                        />

                        {/* Forward R (Right) */}
                        <path
                          d="M 52 22 
                             L 63 22 
                             C 76 22, 86 31, 86 41 
                             C 86 51, 76 59, 63 59 
                             L 52 59 Z"
                          fill="#FFFFFF"
                        />
                        <path
                          d="M 63 55 
                             L 86 76 
                             L 76 76 
                             L 61 59 Z"
                          fill="#FFFFFF"
                        />

                        {/* Center stem block */}
                        <rect x="37" y="22" width="26" height="54" fill="#FFFFFF" />

                        {/* Top/Bottom center slits */}
                        <rect x="48.5" y="22" width="3" height="16" fill="#FFDD00" />
                        <rect x="48.5" y="60.5" width="3" height="15.5" fill="#FFDD00" />

                        {/* Loop Cutouts */}
                        <path
                          d="M 37 31.5 
                             C 28.5 31.5, 23.5 35.5, 23.5 41 
                             C 23.5 46.5, 28.5 50.5, 37 50.5 Z"
                          fill="#FFDD00"
                        />
                        <path
                          d="M 63 31.5 
                             C 71.5 31.5, 76.5 35.5, 76.5 41 
                             C 76.5 46.5, 71.5 50.5, 63 50.5 Z"
                          fill="#FFDD00"
                        />

                        {/* The beautiful central '2' cutout */}
                        <path
                          d="M 42.5 45.5 
                             C 42.5 40.5, 46 38.5, 50 38.5 
                             C 54 38.5, 57.5 40.5, 57.5 45.5 
                             C 57.5 50, 54 53, 48.5 57.5 
                             L 42.5 62.5 
                             L 57.5 62.5"
                          fill="none"
                          stroke="#FFDD00"
                          strokeWidth="6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span 
                      className="font-sans font-bold text-[#3B3D40] text-6xl sm:text-7xl lg:text-[124px] leading-[0.8] tracking-tight lg:tracking-[-5.333px] select-none"
                      style={isMobile ? {
                        fontFamily: '"PP Neue Montreal", sans-serif',
                        marginLeft: '-10px',
                        fontSize: '61px',
                        lineHeight: '46px',
                      } : {
                        fontFamily: '"PP Neue Montreal", sans-serif',
                        width: '280.031px',
                        paddingRight: '-13px',
                        marginRight: '-22px',
                        marginLeft: '-19px'
                      }}
                    >
                      Build
                    </span>
                  </div>

                  {/* Row 2: Confident */}
                  <div className="mt-1 sm:mt-2 lg:mt-2.5">
                    <span 
                      className="font-sans font-bold text-[#3B3D40] text-6xl sm:text-7xl lg:text-[124px] leading-[0.8] tracking-tight lg:tracking-[-5.333px] select-none"
                      style={isMobile ? {
                        fontFamily: '"PP Neue Montreal", sans-serif',
                        marginBottom: '7px',
                        paddingTop: '0px',
                        paddingBottom: '0px'
                      } : {
                        fontFamily: '"PP Neue Montreal", sans-serif',
                        marginBottom: '8px',
                        paddingTop: '0px',
                        paddingBottom: '0px'
                      }}
                    >
                      Confident
                    </span>
                  </div>
                </div>
              </a>
            </div>

            {/* Schedule Visit Button - Styled matching 'Schedule orientation' from the image */}
            <button
              onClick={() => onScrollToSection("contact")}
              className="group mt-12 lg:mt-0 flex items-center justify-between border border-[#DBDBC8] hover:border-[#1C1B19] bg-white text-[#1C1B19] px-6 py-4.5 rounded-[14px] text-[14px] font-medium tracking-tight transition-all duration-300 w-full max-w-[280px] shadow-sm hover:shadow-md cursor-pointer"
              style={isMobile ? {
                fontFamily: '"PP Neue Montreal", sans-serif',
                paddingTop: '12px',
                marginTop: '32px',
                marginBottom: '-9px'
              } : {
                fontFamily: '"PP Neue Montreal", sans-serif'
              }}
            >
              <span>Schedule site visit</span>
              <span className="text-base font-light tracking-widest transition-transform duration-300 group-hover:translate-x-1.5">&rarr;</span>
            </button>
          </motion.div>

          {/* Right Column (Link matrices and Get In Touch block) with border separator on Desktop */}
          <motion.div 
            className="lg:col-span-6 lg:border-l lg:border-[#DBDBC8]/60 lg:pl-16 flex flex-col justify-between"
            variants={itemVariants}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 sm:gap-y-12">
              
              {/* Build Confident Links Column */}
              <div className="space-y-3 sm:space-y-5">
                <h4 
                  className="text-[11px] uppercase tracking-[0.16em] text-[#9E9E99]"
                  style={{ fontFamily: '"PP Neue Montreal Medium", sans-serif', fontWeight: 500 }}
                >
                  Build Confident
                </h4>
                <ul className="space-y-2 sm:space-y-3.5 text-[15px] font-light text-[#53565A]">
                  <li>
                    <button 
                      onClick={() => onScrollToSection("process")} 
                      className="hover:text-[#1C1B19] transition-colors cursor-pointer text-left block"
                    >
                      Our Process
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => onScrollToSection("why-us-section")} 
                      className="hover:text-[#1C1B19] transition-colors cursor-pointer text-left block"
                    >
                      Meet Our Team
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => onScrollToSection("contact")} 
                      className="hover:text-[#1C1B19] transition-colors cursor-pointer text-left block"
                    >
                      Build on Your Lot
                    </button>
                  </li>
                </ul>
              </div>

              {/* Getting Started Links Column */}
              <div className="space-y-3 sm:space-y-5">
                <h4 
                  className="text-[11px] uppercase tracking-[0.16em] text-[#9E9E99]"
                  style={{ fontFamily: '"PP Neue Montreal Medium", sans-serif', fontWeight: 500 }}
                >
                  Getting Started
                </h4>
                <ul className="space-y-2 sm:space-y-3.5 text-[15px] font-light text-[#53565A]">
                  <li>
                    <button 
                      onClick={() => onScrollToSection("featured-build")} 
                      className="hover:text-[#1C1B19] transition-colors cursor-pointer text-left block"
                    >
                      Available Homes
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => onScrollToSection("gallery-slider")} 
                      className="hover:text-[#1C1B19] transition-colors cursor-pointer text-left block"
                    >
                      Available Homesites
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => onScrollToSection("gallery-slider")} 
                      className="hover:text-[#1C1B19] transition-colors cursor-pointer text-left block"
                    >
                      Showcase
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => onScrollToSection("benefits")} 
                      className="hover:text-[#1C1B19] transition-colors cursor-pointer text-left block"
                    >
                      Resources
                    </button>
                  </li>
                </ul>
              </div>

              {/* Get In Touch Info Row - taking span of 2 below link blocks */}
              <div className="space-y-4 sm:col-span-2 pt-4">
                <h4 
                  className="text-[11px] uppercase tracking-[0.16em] text-[#9E9E99]"
                  style={{ fontFamily: '"PP Neue Montreal Medium", sans-serif', fontWeight: 500 }}
                >
                  Get In Touch
                </h4>
                <div className="text-[15px] font-light text-[#53565A] space-y-2.5 leading-relaxed">
                  <p>
                    House 12, Model Town A<br />
                    Bahawalpur, Pakistan
                  </p>
                  <a 
                    href="tel:+923001234567" 
                    className="block text-[#1C1B19] hover:text-brand-gold font-medium pt-1.5 transition-colors duration-300"
                    style={{ fontFamily: '"PP Neue Montreal Medium", sans-serif' }}
                  >
                    +92 300 1234567
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

        </motion.div>

        {/* Bottom bar with faint line separator */}
        <div className="mt-20 pt-8 border-t border-[#DBDBC8]/40 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left legal links */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-2 text-xs text-[#53565A]">
            <a href="#" className="hover:text-[#1C1B19] transition-colors duration-300">Privacy</a>
            <a href="#" className="hover:text-[#1C1B19] transition-colors duration-300">Terms of Use</a>
          </div>

          {/* Center social icons */}
          <div className="flex items-center gap-6 text-[#53565A]">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#1C1B19] transition-all duration-300 hover:scale-105"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#1C1B19] transition-all duration-300 hover:scale-105"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#1C1B19] transition-all duration-300 hover:scale-105"
              aria-label="Youtube"
            >
              <Youtube className="h-5 w-5" />
            </a>
          </div>

          {/* Right branding and copyright */}
          <div className="text-xs text-[#53565A] flex flex-wrap items-center gap-x-1.5 gap-y-1 justify-center md:justify-end">
            <span className="font-medium text-[#1C1B19]" style={{ fontFamily: '"PP Neue Montreal Medium", sans-serif' }}>Rags to Riches Builders, LLC</span>
            <span className="text-[#9E9E99] hidden sm:inline">&bull;</span>
            <span className="text-[#9E9E99]">All Rights Reserved</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
