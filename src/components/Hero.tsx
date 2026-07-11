import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play } from "lucide-react";

interface HeroProps {
  onOpenVideoModal: () => void;
  onScrollToSection: (sectionId: string) => void;
}

const HERO_IMAGES = [
  "/src/assets/images/lavish_light_exterior_1783714695972.jpg",
  "/src/assets/images/lavish_grand_stairs_1783714716601.jpg",
  "/src/assets/images/lavish_living_interior_1783714740123.jpg",
  "/src/assets/images/hero_luxury_home_1783453853144.jpg",
  "/src/assets/images/completed_modern_mansion_1783453929340.jpg",
  "/src/assets/images/southern_colonial_living_room_1783540561426.jpg",
  "/src/assets/images/luxury_finishing_details_1783453909295.jpg"
];

export default function Hero({ onOpenVideoModal }: HeroProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 2500); // Change image every 2.5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex h-screen w-screen items-end justify-center overflow-hidden bg-brand-dark"
    >
      {/* Immersive Image Background */}
      <motion.div 
        className="absolute inset-0 z-0 origin-center overflow-hidden"
        initial={{ scale: 0.35, rotate: -8, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{
          scale: { duration: 1.6, ease: [0.16, 1, 0.3, 1] },
          rotate: { duration: 1.6, ease: [0.16, 1, 0.3, 1] },
          opacity: { duration: 0.3, ease: "linear" }
        }}
      >
        <AnimatePresence initial={false}>
          <motion.img
            key={currentImageIndex}
            src={HERO_IMAGES[currentImageIndex]}
            alt="Luxury custom residence"
            className="absolute inset-0 h-full w-full object-cover object-center brightness-[0.95]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>
        {/* Elegant dark vignette / gradient overlays, lightened for clarity */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-brand-dark/15 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/40 via-transparent to-transparent z-10" />
      </motion.div>

      {/* Main Content Area - Aligned to bottom of viewport */}
      <div className="relative z-10 w-full max-w-7xl px-6 md:px-12 pb-3 sm:pb-4 lg:pb-5">
        
        {/* Content wrapper - shifted left and relative to absolute-position the card */}
        <div className="w-[333.2px] lg:w-full ml-[4px] lg:ml-0 flex flex-col -translate-x-[16px] md:-translate-x-[24px] relative">
          
          {/* Left Side: Build title & separation line & Confident title */}
          <div className="w-full flex flex-col text-left">
            
            {/* "Build" Title */}
            <div className="overflow-hidden">
              <motion.div
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: "0%" }}
                transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-left"
              >
                <h1
                  className="font-sans font-bold text-white text-6xl sm:text-8xl lg:text-[144px] leading-[0.8] tracking-tight lg:tracking-[-5.333px] select-none normal-case"
                  style={{
                    fontFamily: '"PP Neue Montreal", sans-serif',
                  }}
                >
                  Build
                </h1>
              </motion.div>
            </div>

          </div>

          {/* Precise Full-Width Horizontal Divider Line - Very close to text and bold, starting aligned where the word B starts */}
          <div className="relative w-full flex items-center z-10 pl-[2px] md:pl-[3px] lg:pl-[4px]">
            <motion.div 
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.72, ease: [0.16, 1, 0.3, 1] }}
              className="w-full border-t-[2px] border-white/50 mt-[6px] mb-[6px] origin-left"
            />
          </div>

          {/* Bottom Half of Content - Confident text on left */}
          <div className="w-full flex flex-col text-left mt-0.5">
            
            {/* "Confident" Title */}
            <div className="overflow-hidden">
              <motion.div
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: "0%" }}
                transition={{ duration: 1, delay: 0.84, ease: [0.16, 1, 0.3, 1] }}
                className="text-left"
              >
                <h1 
                  className="font-sans font-bold text-[#FFDD00] text-6xl sm:text-8xl lg:text-[144px] leading-[0.8] tracking-tight lg:tracking-[-5.333px] select-none normal-case"
                  style={{
                    fontFamily: '"PP Neue Montreal", sans-serif',
                  }}
                >
                  Confident
                </h1>
              </motion.div>
            </div>

          </div>

          {/* Desktop-only single merged glassmorphic box (overlaps the line) - Lighter glassmorphism */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
            className="hidden lg:flex absolute right-0 top-[7px] z-20 w-[310px] bg-white/[0.08] backdrop-blur-xl rounded-lg border border-white/15 flex-col overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)]"
          >
            {/* Top section: Text - Height and top alignment adjusted to decrease upper padding while keeping inner line aligned */}
            <div className="h-[114px] px-7 flex flex-col justify-center">
              <p 
                className="font-sans text-white font-medium"
                style={{
                  fontSize: '20px',
                  lineHeight: '28px',
                  letterSpacing: '-0.1px',
                  fontFamily: '"PP Neue Montreal", sans-serif'
                }}
              >
                Award-winning, luxury, custom<br />
                home builder in Pakistan
              </p>
            </div>

            {/* Inner divider line inside the card - thinner than the outer line */}
            <div className="w-full border-t-[1px] border-white/15" />

            {/* Bottom section: pic & play button with complete top-to-bottom vertical line */}
            <div className="flex items-stretch">
              {/* Left cell: Image container */}
              <div className="py-2.5 pl-3.5 pr-3.5 flex items-center justify-center">
                <div className="w-[85px] h-[86px] overflow-hidden rounded border border-white/15 flex-shrink-0 bg-brand-dark">
                  <img
                    src="/src/assets/images/completed_modern_mansion_1783453929340.jpg"
                    alt="Luxury custom residence"
                    className="w-full h-full object-cover opacity-90 transition-transform duration-500 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Vertical separation line between image and button - complete/full-height from top to bottom edge */}
              <div className="w-[1px] bg-white/15 flex-shrink-0" />

              {/* Right cell: Play button container */}
              <div className="py-2.5 pl-3.5 pr-3.5 flex-1 flex items-center">
                <button
                  id="hero-play-video-trigger"
                  onClick={onOpenVideoModal}
                  className="w-full h-[86px] bg-[#FFDD00] hover:opacity-95 text-brand-dark font-sans text-[13px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 rounded transition-all cursor-pointer shadow-md px-2"
                >
                  <Play className="h-4 w-4 fill-current text-brand-dark" />
                  Play video
                </button>
              </div>
            </div>
          </motion.div>

          {/* Mobile-only unified card presentation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
            className="lg:hidden w-full max-w-sm bg-black/40 backdrop-blur-lg p-5 rounded-lg border border-white/10 flex flex-col gap-4 shadow-2xl mt-4"
          >
            <p 
              className="font-sans text-white font-medium text-lg leading-snug"
              style={{
                fontFamily: '"PP Neue Montreal", sans-serif'
              }}
            >
              Award-winning, luxury, custom<br />
              home builder in Pakistan
            </p>
            
            <div className="border-t border-white/10 pt-4 flex items-center gap-3">
              <div className="w-[80px] h-[56px] overflow-hidden rounded border border-white/10 flex-shrink-0 bg-brand-dark">
                <img
                  src="/src/assets/images/completed_modern_mansion_1783453929340.jpg"
                  alt="Luxury custom residence"
                  className="w-full h-full object-cover opacity-90"
                  referrerPolicy="no-referrer"
                />
              </div>
              <button
                onClick={onOpenVideoModal}
                className="flex-1 bg-[#FFDD00] text-brand-dark font-sans text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 rounded"
                style={{ height: "55.9875px" }}
              >
                <Play className="h-3 w-3 fill-current text-brand-dark" />
                Play video
              </button>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

