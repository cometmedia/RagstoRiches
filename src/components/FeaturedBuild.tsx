import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import CustomCursor from "./CustomCursor";

interface FeaturedBuildProps {
  onScrollToSection: (sectionId: string) => void;
  onExplore?: () => void;
}

export default function FeaturedBuild({ onScrollToSection, onExplore }: FeaturedBuildProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [isHoveringImage, setIsHoveringImage] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      id="featured-build"
      className="bg-brand-cream text-brand-dark pt-12 pb-16 md:pt-16 md:pb-[180px] overflow-hidden select-none border-b border-black relative"
      style={{ fontFamily: '"PP Neue Montreal Medium", sans-serif' }}
    >
      <CustomCursor isHovered={isHoveringImage} />
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Align starting margin exactly with "Build Confident" from Hero/Header */}
        <div className="-translate-x-[12px] md:-translate-x-[24px] relative w-[calc(100%+24px)] md:w-[calc(100%+24px)] flex flex-col">
          
          {/* UPPER PART: Heading on Left, Living Room Image & Label next to it on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start pb-6 lg:pb-8">
            {/* Left Column: Heading, moved upward */}
            <motion.div 
              className="lg:col-span-6 -mt-2 sm:-mt-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 
                className="font-[300] tracking-tight text-[#53565A] text-[36px] sm:text-[44px] lg:text-[58px] leading-[24.6px] lg:leading-[45px] pb-0 mb-[-10px] lg:mb-0 mt-[-15px] lg:mt-0"
                style={{
                  letterSpacing: "-0.06em"
                }}
              >
                Build The Home
                <span className="block text-[#9E9E99] mt-1">
                  You’ve Always Wanted
                </span>
              </h2>
            </motion.div>

            {/* Right Column: Living Room Image with Address label right next to its bottom-right */}
            <motion.div 
              className="lg:col-span-6 flex justify-center lg:justify-end w-full"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <div className="flex flex-col items-center gap-4 w-full lg:flex-row lg:items-end lg:gap-6 lg:justify-end lg:pr-8 lg:-translate-x-12">
                {/* Image - Smaller & compact as in the reference pic */}
                <div 
                  className="w-[330px] sm:w-[320px] aspect-[4/5] overflow-hidden shadow-md bg-brand-dark/5 shrink-0 rounded-none cursor-none"
                  onMouseEnter={() => setIsHoveringImage(true)}
                  onMouseLeave={() => setIsHoveringImage(false)}
                  onClick={() => onExplore && onExplore()}
                >
                  <img
                    src="/images/southern_colonial_living_room_1783540561426.jpg"
                    alt="Southern Colonial Estate Living Room"
                    className="w-full h-full object-cover hover:scale-102 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Address label - moved right next to the pic at its bottom */}
                <div className="flex items-center gap-2 text-brand-grey text-sm pb-0 lg:pb-3 whitespace-nowrap shrink-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFDD00] flex-shrink-0" />
                  <span className="font-medium tracking-normal text-[#6b6a65]">Southern Colonial Estate</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Horizontal Hairline Divider */}
          <div className="w-full border-t border-brand-line my-2" />

          {/* LOWER PART: Description & CTA on Left, Kitchen Image & Label next to its top-left on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start pt-6 lg:pt-8">
            {/* Left Column: Description (16px font size) & Available Homes Button */}
            <motion.div 
              className="lg:col-span-6 flex flex-col justify-between h-full min-h-[220px] order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <p 
                className="text-[16px] text-[#55534e] max-w-xl font-normal"
                style={isMobile ? {
                  lineHeight: "19px",
                  marginBottom: "0px",
                  paddingBottom: "0px"
                } : {
                  lineHeight: "1.625"
                }}
              >
                <span className="lg:block">Rags to Riches Builders is an award-winning, family owned,</span>{" "}
                <span>luxury, custom home builder based in Pakistan.</span>
              </p>
              
              {/* Available Homes Yellow Button */}
              <button
                onClick={() => onScrollToSection("contact")}
                className="bg-[#FFDD00] hover:bg-[#FFDD00] active:bg-[#FFDD00] text-brand-dark px-10 py-4.5 rounded-sm text-base font-semibold tracking-wide shadow-sm transition-all duration-300 w-full flex items-center justify-center gap-4 group mt-8 lg:mt-16 cursor-pointer"
              >
                <span>Available homes</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1.5 shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </motion.div>

            {/* Right Column: Label next to Kitchen Image at its top-left */}
            <motion.div 
              className="lg:col-span-6 flex justify-center lg:justify-end w-full order-1 lg:order-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <div className="flex flex-col-reverse items-center gap-4 w-full lg:flex-row lg:items-start lg:gap-6 lg:justify-end">
                {/* Address label - moved right next to the pic at its top-left */}
                <div className="flex items-center gap-2 text-brand-grey text-sm pt-0 lg:pt-3 whitespace-nowrap shrink-0">
                  <span className="font-medium tracking-normal text-[#6b6a65]">French Country Modern</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFDD00] flex-shrink-0" />
                </div>

                {/* Image - Smaller & compact as in the reference pic */}
                <div 
                  className="w-[330px] sm:w-[320px] aspect-[4/5] overflow-hidden shadow-md bg-brand-dark/5 shrink-0 rounded-none cursor-none"
                  onMouseEnter={() => setIsHoveringImage(true)}
                  onMouseLeave={() => setIsHoveringImage(false)}
                  onClick={() => onExplore && onExplore()}
                >
                  <img
                    src="/images/french_country_kitchen_1783540582090.jpg"
                    alt="French Country Modern Kitchen"
                    className="w-full h-full object-cover hover:scale-102 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
