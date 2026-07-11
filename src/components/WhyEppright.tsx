import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface WhyEpprightProps {
  onScrollToSection: (sectionId: string) => void;
}

// Custom SVGs matching the images precisely
const LaurelWreathIcon = () => (
  <svg className="w-14 h-14 text-brand-dark/85" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5">
    {/* Left branch */}
    <path d="M 35 75 C 24 65, 24 45, 35 30" strokeLinecap="round" />
    <path d="M 27 34 C 29 36, 33 36, 35 34 C 37 32, 35 28, 33 26" fill="currentColor" opacity="0.8" />
    <path d="M 24 45 C 26 47, 30 47, 32 45 C 34 43, 32 39, 30 37" fill="currentColor" opacity="0.8" />
    <path d="M 23 56 C 25 58, 29 58, 31 56 C 33 54, 31 50, 29 48" fill="currentColor" opacity="0.8" />
    <path d="M 26 67 C 28 69, 32 69, 34 67 C 36 65, 34 61, 32 59" fill="currentColor" opacity="0.8" />

    {/* Right branch */}
    <path d="M 65 75 C 76 65, 76 45, 65 30" strokeLinecap="round" />
    <path d="M 73 34 C 71 36, 67 36, 65 34 C 63 32, 65 28, 67 26" fill="currentColor" opacity="0.8" />
    <path d="M 76 45 C 74 47, 70 47, 68 45 C 66 43, 68 39, 70 37" fill="currentColor" opacity="0.8" />
    <path d="M 77 56 C 75 58, 71 58, 69 56 C 67 54, 69 50, 71 48" fill="currentColor" opacity="0.8" />
    <path d="M 74 67 C 72 69, 68 69, 66 67 C 64 65, 66 61, 68 59" fill="currentColor" opacity="0.8" />

    {/* Center laurel tie ribbon at bottom */}
    <path d="M 45 78 C 50 82, 50 82, 55 78" strokeLinecap="round" />
    <circle cx="50" cy="79" r="2.5" fill="currentColor" />
  </svg>
);

const CollaborativeIcon = () => (
  <svg className="w-14 h-14 text-brand-dark/85" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5">
    {/* Three star-people */}
    {/* Left person */}
    <circle cx="34" cy="50" r="6" />
    <path d="M 20 70 C 20 62, 28 60, 34 60 C 37 60, 42 61, 44 64" />
    
    {/* Right person */}
    <circle cx="66" cy="50" r="6" />
    <path d="M 80 70 C 80 62, 72 60, 66 60 C 63 60, 58 61, 56 64" />

    {/* Center/Top person */}
    <circle cx="50" cy="40" r="7" />
    <path d="M 34 62 C 34 52, 44 50, 50 50 C 56 50, 66 52, 66 62" />

    {/* Stars above them */}
    <path d="M 50 18 L 51.5 22 L 55.5 22.5 L 52.5 25.5 L 53.5 29.5 L 50 27.5 L 46.5 29.5 L 47.5 25.5 L 44.5 22.5 L 48.5 22 Z" fill="currentColor" stroke="none" />
    <path d="M 30 24 L 31 27 L 34 27.5 L 31.5 29.5 L 32.5 32.5 L 30 31 L 27.5 32.5 L 28.5 29.5 L 26 27.5 L 29 27 Z" fill="currentColor" stroke="none" opacity="0.8" />
    <path d="M 70 24 L 71 27 L 74 27.5 L 71.5 29.5 L 72.5 32.5 L 70 31 L 67.5 32.5 L 68.5 29.5 L 66 27.5 L 69 27 Z" fill="currentColor" stroke="none" opacity="0.8" />
  </svg>
);

const ComprehensiveSupportIcon = () => (
  <svg className="w-14 h-14 text-brand-dark/85" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    {/* Handshake */}
    <path d="M 25 45 L 35 35 C 37 33, 41 33, 43 35 L 55 47 L 45 57 Z" />
    <path d="M 75 45 L 65 35 C 63 33, 59 33, 57 35 L 45 47 L 55 57 Z" />
    <path d="M 33 53 L 23 63 L 31 71 L 41 61" />
    <path d="M 67 53 L 77 63 L 69 71 L 59 61" />
    {/* Clasp details */}
    <path d="M 45 47 C 48 50, 52 50, 55 47" />
    <path d="M 43 45 C 46 48, 50 48, 53 45" />
  </svg>
);

export default function WhyEppright({ onScrollToSection }: WhyEpprightProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      id="why-us-section"
      className="bg-[#FFFFFF] text-[#1c1d1f] pt-12 md:pt-16 pb-16 md:pb-32 overflow-hidden"
      style={{ fontFamily: '"PP Neue Montreal Medium", sans-serif' }}
    >
      {/* 1. UPPER PART: "Why Eppright" layout */}
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="-translate-x-[12px] md:-translate-x-[24px] relative w-[calc(100%+24px)] md:w-[calc(100%+24px)] flex flex-col">
          {/* Top divider line: thicker, #53565A color, with decreased padding after it */}
          <div className="w-full border-t-2 border-[#53565A] pt-6 md:pt-8"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column (6 Cols) */}
            <div 
              className="lg:col-span-6 flex flex-col justify-start"
              style={isMobile ? { marginBottom: "-67px" } : undefined}
            >
              <h2 
                className="tracking-tight text-[#53565A] select-none pb-4"
                style={isMobile ? {
                  fontFamily: '"PP Neue Montreal Medium", sans-serif', 
                  fontWeight: 300,
                  fontSize: "48.4px",
                  lineHeight: "42.16px",
                  letterSpacing: "-0.03em",
                  marginBottom: "-18px",
                  paddingBottom: "33px"
                } : { 
                  fontFamily: '"PP Neue Montreal Medium", sans-serif', 
                  fontWeight: 300,
                  fontSize: "97.4px",
                  lineHeight: "85.16px",
                  letterSpacing: "-0.03em",
                  marginBottom: "138px",
                  paddingRight: "0px",
                  marginRight: "-36px",
                  paddingBottom: "33px"
                }}
              >
                Why<br />Rags to Riches
              </h2>

             <div className="text-[#9E9E99] font-light text-[15px] sm:text-[16px] leading-relaxed space-y-6 max-w-lg mb-10">
              <p 
                style={isMobile ? {
                  marginRight: "-12px",
                  marginBottom: "20px",
                  lineHeight: "23.375px",
                  color: "#53565a"
                } : { 
                  paddingRight: "-38px", 
                  marginRight: "-75px", 
                  color: "#53565a" 
                }}
              >
                When choosing Rags to Riches Builders you'll add a team of partners who have 30+ years of
                custom home building experience in Pakistan. We are professionals in real
                estate, architecture, interior design, construction management and finance. We begin
                by helping you select the perfect lot, then are with you through each step of the
                design and construction process, as you settle into your new home and beyond.
              </p>
              <p 
                className="font-normal text-[#53565a]"
                style={isMobile ? {
                  lineHeight: "22.375px"
                } : undefined}
              >
                Experience for yourself why so many of our customers build with us again!
              </p>
            </div>

            <button
              onClick={() => onScrollToSection("contact")}
              className="self-start group flex items-center gap-2.5 bg-[#FFDD00] text-[#1c1d1f] hover:bg-[#FFDD00]/90 px-8 py-4 text-sm font-semibold rounded-[4px] shadow-sm transition-all"
              style={{ fontFamily: '"PP Neue Montreal Medium", sans-serif', textTransform: 'none' }}
            >
              Building with us
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Vertical Separator Line (visible on lg screens only) shifted closer to the right column */}
          <div 
            className="hidden lg:block lg:col-span-1 justify-self-end mr-4 w-[1px] bg-black/10"
            style={{ height: "616px" }}
          />

          {/* Right Column (5 Cols) with overlapping image layouts */}
          <div 
            className="lg:col-span-5 relative flex items-center justify-center min-h-[300px] md:min-h-[500px] lg:min-h-[550px] w-full mt-12 lg:mt-0"
            style={isMobile ? {
              width: "100%",
              height: "360px",
              paddingBottom: "0px",
              marginRight: "0px",
              paddingRight: "0px"
            } : {
              width: "500px",
              height: "616px",
              paddingBottom: "0px",
              marginRight: "0px",
              paddingRight: "38px"
            }}
          >
            {/* Top-Right Image (Main/Back) - increased height to 616px to match the vertical line */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative ml-auto overflow-hidden"
              style={isMobile ? {
                width: "240px",
                height: "350px",
              } : {
                width: "420px",
                height: "616px",
              }}
            >
              <img
                src="/images/completed_modern_mansion_1783453929340.jpg"
                alt="Custom Rags to Riches home construction patio"
                className="w-full h-full object-cover rounded-[4px]"
                referrerPolicy="no-referrer"
                style={isMobile ? {
                  width: "240px",
                  height: "350px",
                  paddingRight: "0px",
                  marginRight: "0px",
                  marginLeft: "0px",
                  borderRadius: "0px"
                } : {
                  width: "420px",
                  height: "616px",
                  paddingRight: "0px",
                  marginRight: "0px",
                  marginLeft: "0px"
                }}
              />
            </motion.div>

            {/* Bottom-Left Image (Foreground, overlapping with white border) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: 0.15 }}
              className="absolute left-0 bottom-0 overflow-hidden shadow-2xl border-4 md:border-8 border-white z-20"
              style={isMobile ? {
                height: "185px",
                width: "138px",
                marginBottom: "42px",
                marginLeft: "10px"
              } : {
                width: "50%",
                aspectRatio: "3/4",
                marginRight: "0px",
                marginLeft: "-79px",
                height: "319.396px",
                marginTop: "0px",
                marginBottom: "56px"
              }}
            >
              <img
                src="/images/luxury_finishing_details_1783453909295.jpg"
                alt="Rags to Riches premium details"
                className="w-full h-full object-cover rounded-[2px]"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>

        {/* 2. LOWER PART: 01, 02, 03 list rows */}
        <div id="benefits" className="w-full border-t border-black/10 mt-12 md:mt-36">
          {/* Row 01 */}
          <motion.div 
            className="border-b border-black/10" 
            style={isMobile ? { paddingTop: "16px", paddingBottom: "16px" } : { paddingTop: "30px", paddingBottom: "30px" }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-center">
              <div className="flex items-center gap-4 md:contents">
                {/* Number (Col 1) */}
                <div className="md:col-span-2">
                  <span 
                    className="text-[#9E9E99] font-extralight select-none leading-none block"
                    style={{ fontSize: isMobile ? "44px" : "clamp(60px, 8vw, 100px)", fontFamily: '"PP Neue Montreal", sans-serif' }}
                  >
                    01
                  </span>
                </div>
                {/* Title (Col 2) */}
                <div className="md:col-span-4">
                  <h3 
                    className="text-[20px] sm:text-2xl md:text-[34px] font-medium tracking-tight text-[#1c1d1f]"
                    style={{ fontFamily: '"PP Neue Montreal Medium", sans-serif', paddingLeft: isMobile ? "0px" : "37px" }}
                  >
                    Superior Quality
                  </h3>
                </div>
              </div>
              {/* Centered Icon (Col 3) */}
              <div className="hidden md:flex md:col-span-2 md:justify-center">
                <LaurelWreathIcon />
              </div>
              {/* Description (Col 4) */}
              <div className="md:col-span-4">
                <p className="text-[#53565A] font-light text-[15px] sm:text-[16px] leading-relaxed">
                  We take great pride in the quality of our construction. We design and build
                  top-tier, superior quality homes that you will enjoy for years to come.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Row 02 */}
          <motion.div 
            className="border-b border-black/10" 
            style={isMobile ? { paddingTop: "16px", paddingBottom: "16px" } : { paddingTop: "30px", paddingBottom: "30px" }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-center">
              <div className="flex items-center gap-4 md:contents">
                {/* Number */}
                <div className="md:col-span-2">
                  <span 
                    className="text-[#9E9E99] font-extralight select-none leading-none block"
                    style={{ fontSize: isMobile ? "44px" : "clamp(60px, 8vw, 100px)", fontFamily: '"PP Neue Montreal", sans-serif' }}
                  >
                    02
                  </span>
                </div>
                {/* Title */}
                <div className="md:col-span-4">
                  <h3 
                    className="text-[20px] sm:text-2xl md:text-[34px] font-medium tracking-tight text-[#1c1d1f]"
                    style={{ fontFamily: '"PP Neue Montreal Medium", sans-serif', paddingLeft: isMobile ? "0px" : "53px" }}
                  >
                    Collaborative
                  </h3>
                </div>
              </div>
              {/* Centered Icon */}
              <div className="hidden md:flex md:col-span-2 md:justify-center">
                <CollaborativeIcon />
              </div>
              {/* Description */}
              <div className="md:col-span-4">
                <p className="text-[#53565A] font-light text-[15px] sm:text-[16px] leading-relaxed">
                  Our team of experts are with you each step of the way: From initial vision
                  to land acquisition, architectural and interior design, all the way through
                  construction, warranty, and on-going support.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Row 03 */}
          <motion.div 
            className="border-b border-black/10" 
            style={isMobile ? { paddingTop: "16px", paddingBottom: "16px" } : { paddingTop: "30px", paddingBottom: "30px" }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-center">
              <div className="flex items-center gap-4 md:contents">
                {/* Number */}
                <div className="md:col-span-2">
                  <span 
                    className="text-[#9E9E99] font-extralight select-none leading-none block"
                    style={{ fontSize: isMobile ? "44px" : "clamp(60px, 8vw, 100px)", fontFamily: '"PP Neue Montreal", sans-serif' }}
                  >
                    03
                  </span>
                </div>
                {/* Title */}
                <div className="md:col-span-4">
                  <h3 
                    className="text-[20px] sm:text-2xl md:text-[34px] font-medium tracking-tight text-[#1c1d1f]"
                    style={{ fontFamily: '"PP Neue Montreal Medium", sans-serif' }}
                  >
                    Comprehensive Support
                  </h3>
                </div>
              </div>
              {/* Centered Icon */}
              <div className="hidden md:flex md:col-span-2 md:justify-center">
                <ComprehensiveSupportIcon />
              </div>
              {/* Description */}
              <div className="md:col-span-4">
                <p className="text-[#53565A] font-light text-[15px] sm:text-[16px] leading-relaxed">
                  Our efforts don't end when we hand you the keys to your new home. We provide
                  on-going personalized warranty support as well as copies of manuals, warranty and
                  maintenance information.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);
}
