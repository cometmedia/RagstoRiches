import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight, ChevronDown, Hammer, ShieldCheck, HelpCircle, HardHat, LandPlot, Users2, LibraryBig } from "lucide-react";

interface HeaderProps {
  onScrollToSection: (sectionId: string) => void;
  activeSection: string;
}

export default function Header({ onScrollToSection, activeSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    onScrollToSection(sectionId);
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        id="main-app-header"
        className="fixed top-0 left-0 right-0 z-40 w-full flex justify-center pointer-events-none"
        initial={{ y: "-100%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          className={`pointer-events-auto transition-all duration-500 ease-in-out flex items-center justify-between w-full ${
            isScrolled
              ? "mt-4 w-[92%] md:w-[85%] max-w-7xl h-14 rounded-full max-md:rounded-tl-none bg-brand-offwhite/95 text-brand-dark shadow-lg border border-brand-line/50 backdrop-blur-md px-5 md:px-6"
              : "h-20 sm:h-24 bg-gradient-to-b from-black/60 to-transparent text-white px-3 md:px-12 mt-0 rounded-none shadow-none"
          }`}
        >
          {/* Logo */}
          <a
            id="header-logo-anchor"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("hero");
            }}
            className={`flex items-center select-none transition-all duration-500 ${
              isScrolled
                ? "gap-0 translate-x-0"
                : "gap-1 md:gap-1 translate-x-0"
            }`}
          >
            <div className={`relative flex items-center justify-center rounded-full overflow-hidden transition-all duration-500 group-hover:scale-105 ${isScrolled ? "h-9 w-9" : "h-10 w-10"}`}>
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

                {/* Loop Cutouts (mirrored / standard) */}
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
            <div className={`flex items-center transition-all duration-500 ease-in-out ${
              isScrolled
                ? "max-w-0 opacity-0 pointer-events-none"
                : "max-w-[400px] opacity-100"
            } overflow-hidden whitespace-nowrap`}>
              <span className="font-sans text-[20px] md:text-[22px] tracking-tight leading-none text-white font-medium">
                Rags to Riches
              </span>
              <span className="text-[#FFDD00] font-semibold pl-0 ml-[3px] md:ml-1.5 font-sans text-[20px] md:text-[22px] tracking-tight leading-none">
                Builders
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav
            id="desktop-nav"
            className={`hidden lg:flex items-center transition-all duration-500 ${
              isScrolled
                ? "gap-8 text-brand-dark"
                : "gap-16 text-white"
            }`}
          >
            <button
              onClick={() => handleNavClick("process")}
              className={`font-sans text-[14px] leading-[16.8px] tracking-normal font-medium transition-colors hover:text-[#FFDD00] cursor-pointer ${
                activeSection === "process" ? "text-[#FFDD00]" : "text-inherit"
              }`}
            >
              Build Confident
            </button>

            {/* Plain Link 2: Showcase */}
            <button
              id="nav-link-showcase"
              onClick={() => handleNavClick("showcase-slider")}
              className={`font-sans text-[14px] leading-[16.8px] tracking-normal font-medium transition-colors hover:text-[#FFDD00] cursor-pointer ${
                activeSection === "showcase-slider" ? "text-[#FFDD00]" : "text-inherit"
              }`}
            >
              Showcase
            </button>

            {/* Plain Link 3: Services */}
            <button
              id="nav-link-phases"
              onClick={() => handleNavClick("construction-phases")}
              className={`font-sans text-[14px] leading-[16.8px] tracking-normal font-medium transition-colors hover:text-[#FFDD00] cursor-pointer ${
                activeSection === "construction-phases" ? "text-[#FFDD00]" : "text-inherit"
              }`}
            >
              Services
            </button>

            {/* Plain Link 4: Why Us */}
            <button
              id="nav-link-why-us"
              onClick={() => handleNavClick("why-us-section")}
              className={`font-sans text-[14px] leading-[16.8px] tracking-normal font-medium transition-colors hover:text-[#FFDD00] cursor-pointer ${
                activeSection === "why-us-section" ? "text-[#FFDD00]" : "text-inherit"
              }`}
            >
              Why Us
            </button>
          </nav>

          {/* Right side CTA */}
          <div className={`hidden lg:flex items-center gap-4 transition-all duration-500 ${
            isScrolled
              ? "translate-x-0"
              : "translate-x-0"
          }`}>
            <button
              id="header-cta-button"
              onClick={() => handleNavClick("contact")}
              className={`group flex items-center gap-1.5 transition-all duration-500 cursor-pointer ${
                isScrolled
                  ? "bg-brand-dark hover:bg-brand-dark/95 text-brand-offwhite px-4 py-1.5 rounded-full text-xs font-sans tracking-wide font-medium shadow-sm"
                  : "border border-white text-white hover:bg-white hover:text-brand-dark px-5 py-2.5 rounded-sm text-[14px] leading-[16.8px] font-medium"
              }`}
            >
              Schedule orientation
              <ArrowRight className={`transition-transform group-hover:translate-x-1 ${isScrolled ? "h-3 w-3" : "h-3.5 w-3.5"}`} />
            </button>
          </div>

          {/* Hamburger Icon on Mobile */}
          <button
            id="mobile-hamburger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden rounded-full p-2 transition-colors ${
              isScrolled
                ? "text-brand-dark hover:bg-brand-dark/5"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle navigation drawer"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile / Tablet Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-drawer-overlay"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-x-0 top-0 z-30 max-h-screen overflow-y-auto bg-brand-dark text-brand-offwhite pt-24 pb-8 shadow-2xl flex flex-col px-3 md:px-12 border-b border-brand-line/20"
          >
            <div className="flex flex-col gap-6 font-sans">
              <div className="flex flex-col gap-3 border-l border-brand-line/20 pl-4 mt-2">
                <button
                  onClick={() => handleNavClick("process")}
                  className="text-left font-sans text-lg font-medium hover:text-[#FFDD00]"
                >
                  Build Confident
                </button>
                <button
                  onClick={() => handleNavClick("showcase-slider")}
                  className="text-left font-sans text-lg font-medium hover:text-[#FFDD00]"
                >
                  Showcase
                </button>
                <button
                  onClick={() => handleNavClick("construction-phases")}
                  className="text-left font-sans text-lg font-medium hover:text-[#FFDD00]"
                >
                  Services
                </button>
                <button
                  onClick={() => handleNavClick("why-us-section")}
                  className="text-left font-sans text-lg font-medium hover:text-[#FFDD00]"
                >
                  Why Us
                </button>
              </div>

              <div className="mt-4 border-t border-white/10 pt-6">
                <button
                  id="mobile-cta-btn"
                  onClick={() => handleNavClick("contact")}
                  className="w-full flex items-center justify-center gap-2 bg-[#FFDD00] hover:bg-[#FFDD00] text-brand-dark py-3 font-sans text-xs font-semibold uppercase tracking-widest rounded-sm"
                >
                  Schedule a Site Visit
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
