import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import CustomCursor from "./CustomCursor";

interface ShowcaseSlide {
  id: string;
  category: string;
  title: string;
  exploreUrl: string;
  mainImage: string;
  insideImage: string;
}

const SHOWCASE_SLIDES: ShowcaseSlide[] = [
  {
    id: "slide-1",
    category: "LATEST PROJECT",
    title: "Brass Canopy Villa",
    exploreUrl: "#contact",
    mainImage: "/src/assets/images/brass_canopy_villa_1783715577912.jpg",
    insideImage: "/src/assets/images/southern_colonial_living_room_1783540561426.jpg"
  },
  {
    id: "slide-2",
    category: "FEATURED ESTATE",
    title: "Modernist Cuboid Pavilion",
    exploreUrl: "#contact",
    mainImage: "/src/assets/images/completed_modern_mansion_1783453929340.jpg",
    insideImage: "/src/assets/images/french_country_kitchen_1783540582090.jpg"
  },
  {
    id: "slide-3",
    category: "CLASSIC RESIDENCE",
    title: "The Atrium Estate",
    exploreUrl: "#contact",
    mainImage: "/src/assets/images/southern_colonial_custom_exterior_1783715596682.jpg",
    insideImage: "/src/assets/images/luxury_finishing_details_1783453909295.jpg"
  }
];

interface ShowcaseSliderProps {
  onExplore?: () => void;
}

export default function ShowcaseSlider({ onExplore }: ShowcaseSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHoveringImage, setIsHoveringImage] = useState(false);
  const currentSlide = SHOWCASE_SLIDES[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % SHOWCASE_SLIDES.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + SHOWCASE_SLIDES.length) % SHOWCASE_SLIDES.length);
  };

  return (
    <section
      id="showcase-slider"
      className="bg-white text-brand-dark pt-16 pb-12 md:pt-20 md:pb-14 overflow-hidden select-none border-b border-brand-line/40 relative"
      style={{ fontFamily: '"PP Neue Montreal Medium", sans-serif' }}
    >
      <CustomCursor isHovered={isHoveringImage} />
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Align starting margin exactly with "Build Confident" from Hero/Header */}
        <div className="-translate-x-[12px] md:-translate-x-[24px] relative w-[calc(100%+24px)] md:w-[calc(100%+24px)] flex flex-col">
          
          {/* Headline block */}
          <motion.div 
            className="flex flex-col gap-1.5 md:gap-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2
              className="font-[300] tracking-tight text-[#9E9E99] text-[36px] lg:text-[66px] leading-[24.6px] lg:leading-[58.1px]"
              style={{
                letterSpacing: "-0.05em",
                fontFamily: '"PP Neue Montreal Medium", sans-serif',
              }}
            >
              A Legacy Of
            </h2>
            <h2
              className="font-[300] tracking-tight text-[#9E9E99] text-[36px] lg:text-[66px] leading-[24.6px] lg:leading-[58.1px]"
              style={{
                letterSpacing: "-0.05em",
                fontFamily: '"PP Neue Montreal Medium", sans-serif',
              }}
            >
              Constructing <span className="text-[#53565A] font-[300]">Custom</span>
            </h2>
            <h2
              className="font-[300] tracking-tight text-[#53565A] text-[36px] lg:text-[66px] leading-[24.6px] lg:leading-[53.1px]"
              style={{
                letterSpacing: "-0.05em",
                fontFamily: '"PP Neue Montreal Medium", sans-serif',
              }}
            >
              Visions
            </h2>
          </motion.div>

          {/* Navigation Controls Bar */}
          <motion.div 
            className="flex items-center justify-between w-full mt-8 mb-6 px-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {/* Pagination Dots */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                {SHOWCASE_SLIDES.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      index === activeIndex ? "bg-[#FFDD00]" : "bg-[#9E9E99]/40"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm font-mono text-[#9E9E99] ml-2">
                {activeIndex + 1} / {SHOWCASE_SLIDES.length}
              </span>
            </div>

            {/* Pill Navigation Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="h-10 w-16 md:h-12 md:w-20 rounded-full border border-[#1c1d1f]/10 hover:border-[#1c1d1f]/40 flex items-center justify-center transition-colors group cursor-pointer bg-transparent"
                aria-label="Previous slide"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="w-5 h-5 text-[#1c1d1f] group-hover:-translate-x-0.5 transition-transform"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="h-10 w-16 md:h-12 md:w-20 rounded-full border border-[#1c1d1f]/10 hover:border-[#1c1d1f]/40 flex items-center justify-center transition-colors group cursor-pointer bg-transparent"
                aria-label="Next slide"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="w-5 h-5 text-[#1c1d1f] group-hover:translate-x-0.5 transition-transform"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </motion.div>

          {/* Main Slider Display */}
          <motion.div 
            className="relative w-full overflow-hidden rounded-sm bg-brand-dark/5 flex flex-col md:block md:min-h-[580px] lg:min-h-[660px]"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            {/* Background Image with motion crossfade */}
            <div 
              className="relative md:absolute inset-x-0 top-0 w-full aspect-[4/3] md:aspect-auto md:h-full cursor-none"
              onMouseEnter={() => setIsHoveringImage(true)}
              onMouseLeave={() => setIsHoveringImage(false)}
              onClick={() => onExplore && onExplore()}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentSlide.id}
                  src={currentSlide.mainImage}
                  alt={currentSlide.title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              {/* Subtle darkened vignette gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Info & Interior Card */}
            <div className="relative md:absolute md:right-4 md:top-4 md:bottom-4 w-full md:w-[318px] h-auto md:h-[350px] bg-transparent md:bg-[#FAF8F5]/95 md:backdrop-blur-md pt-6 md:pt-[60px] pb-0 pl-0 pr-0 flex flex-col justify-start gap-4 md:gap-0 rounded-none md:rounded-[13px] shadow-none md:shadow-lg border-0 md:border md:border-brand-dark/15 m-0 mb-0 z-10 mt-0 md:mt-0 overflow-visible md:overflow-hidden">
              <div className="px-5 pb-2.5 flex flex-col">
                <span className="text-[9px] font-mono tracking-[0.2em] text-[#9E9E99] uppercase block mb-1.5">
                  {currentSlide.category}
                </span>
                <h3
                  className="font-medium text-xl sm:text-2xl tracking-tight text-[#1c1d1f] mb-1.5"
                  style={{ fontFamily: '"PP Neue Montreal Medium", sans-serif', fontWeight: 500 }}
                >
                  {currentSlide.title}
                </h3>
                <a
                  href={currentSlide.exploreUrl}
                  className="text-[#DFB300] hover:text-[#FFDD00] transition-colors flex items-center gap-1.5 font-sans font-semibold text-xs mt-1.5 group/link"
                >
                  Explore more
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 shrink-0"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </a>
              </div>

              {/* Interior embedded picture at the bottom of the card - flush to the bottom and side borders */}
              <div 
                className="w-full aspect-[16/10] bg-brand-dark/5 border-t border-brand-line/20 overflow-hidden rounded-b-[13px] hidden md:block cursor-none"
                onMouseEnter={() => setIsHoveringImage(true)}
                onMouseLeave={() => setIsHoveringImage(false)}
                onClick={() => onExplore && onExplore()}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentSlide.id + "-inside"}
                    src={currentSlide.insideImage}
                    alt="Interior Showcase"
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-cover hover:scale-102 transition-transform duration-500 pb-0"
                    style={{ paddingBottom: "0px" }}
                  />
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Bottom Explore Showcase Block */}
          <div className="w-full mt-10 border-t border-brand-line/40 pt-8 pb-2 px-1">
            <button
              onClick={() => onExplore && onExplore()}
              className="flex items-center justify-end gap-4 md:gap-6 w-full pr-0 group cursor-pointer py-4"
            >
              <span
                className="font-normal text-[28px] sm:text-[36px] md:text-[42px] tracking-tight text-[#53565A] hover:text-[#FFDD00] transition-colors"
                style={{ fontFamily: '"PP Neue Montreal Medium", sans-serif', fontWeight: 400 }}
              >
                Explore Showcase
              </span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-11 h-11 md:w-14 md:h-14 text-[#53565A] group-hover:translate-x-2 transition-transform duration-300 shrink-0"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
