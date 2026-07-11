import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

interface ServiceItem {
  id: string;
  num: string;
  category: string;
  name: string;
  description: string;
  image: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: "pre-construction",
    num: "01",
    category: "Planning & Estimation",
    name: "Pre Construction",
    description: "The complete planning phase: rigorous site surveys, precise cost estimations, value engineering, and seamless municipal approvals to lock down your budget before groundbreaking.",
    image: "/src/assets/images/pre_construction_planning_1783453890515.jpg"
  },
  {
    id: "grey-structure",
    num: "02",
    category: "Structural Core",
    name: "Grey Structure",
    description: "The raw physical skeleton. Heavy-duty foundation casting, Grade-60 reinforced steel grids, premium clay masonry, and robust seismic-resistant framing built to endure generations.",
    image: "/src/assets/images/grey_structure_phase_1783453872098.jpg"
  },
  {
    id: "finishing",
    num: "03",
    category: "Artisanal Interiors",
    name: "Finishing",
    description: "Impeccable turnkey refinement: custom solid-timber joinery, pristine Italian marble layouts, premium electrical and lighting plans, and flawless interior wall treatments.",
    image: "/src/assets/images/luxury_finishing_details_1783453909295.jpg"
  },
  {
    id: "turnkey-management",
    num: "04",
    category: "End-to-End Control",
    name: "Turnkey Project Management",
    description: "End-to-end client security. We manage site logistics, rigorous material testing, scheduling, and post-build warranties while you monitor progress via clean weekly logs.",
    image: "/src/assets/images/completed_modern_mansion_1783453929340.jpg"
  }
];

export default function ConstructionPhases() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleInquireClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const headerOffset = 90;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="construction-phases"
      className="bg-[#FFFFF7] text-[#1C1B19] py-24 md:py-32 border-b border-[#DBDBC8]/40 overflow-hidden"
      style={isMobile ? { paddingBottom: "44px", fontFamily: '"PP Neue Montreal", sans-serif' } : { fontFamily: '"PP Neue Montreal", sans-serif' }}
    >
      <div className="mx-auto max-w-7xl px-3 md:px-12">
        
        {/* Simple & Spacious Header */}
        <motion.div 
          className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="space-y-4" style={isMobile ? { marginTop: "-66px" } : undefined}>
            <span 
              className="text-xs uppercase tracking-[0.2em] text-[#9E9E99]"
              style={{ fontFamily: '"PP Neue Montreal Medium", sans-serif', fontWeight: 500 }}
            >
              Our Offerings
            </span>
            <h2
              className="text-4xl sm:text-5xl md:text-[56px] font-medium tracking-tight text-[#1C1B19] leading-[1.05]"
              style={{
                fontFamily: '"PP Neue Montreal Medium", sans-serif',
                fontWeight: 500,
                letterSpacing: "-0.045em"
              }}
            >
              Elite Construction <span className="text-[#9E9E99] font-light">Services</span>
            </h2>
          </div>
          <p 
            className="max-w-md text-[15px] leading-relaxed text-[#53565A] font-light"
            style={isMobile ? { marginBottom: "-45px" } : undefined}
          >
            We deliver engineered transparency and architectural precision, transforming premium designs into structurally resilient masterpieces.
          </p>
        </motion.div>

        {/* Minimalist 4-Column Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15, delayChildren: 0.1 }
            }
          }}
        >
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.95 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: { type: "spring", stiffness: 80, damping: 20 }
                }
              }}
              className="group flex flex-col justify-between pt-8 relative h-full cursor-pointer"
              onClick={handleInquireClick}
            >
              {/* Dynamic Animated Top Border */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-[#DBDBC8]" />
              <div className="absolute top-0 left-0 h-[1px] bg-[#1C1B19] w-0 group-hover:w-full transition-all duration-500 ease-[0.16,1,0.3,1]" />

              {/* Top Row: Number and Dynamic Hover Arrow */}
              <div className="flex items-center justify-between mb-6 z-10">
                <span className="text-sm font-medium text-[#9E9E99] tracking-wider font-mono">
                  {service.num}
                </span>
                <div className="h-6 w-6 rounded-full border border-[#DBDBC8] flex items-center justify-center text-[#53565A] group-hover:bg-[#1C1B19] group-hover:text-white group-hover:border-transparent transition-all duration-300">
                  <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              {/* Service Visual Frame with smooth scale and soft shadow on hover */}
              <div className="relative aspect-[3/2] rounded-[18px] overflow-hidden mb-6 bg-[#F4F4EB] border border-[#DBDBC8]/20 shadow-sm transition-shadow duration-500 group-hover:shadow-md">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-[800ms] ease-[0.16,1,0.3,1] group-hover:scale-104"
                  referrerPolicy="no-referrer"
                />
                {/* Subtle premium light overlay */}
                <div className="absolute inset-0 bg-black/[0.02] group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Text Block */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono tracking-[0.15em] text-[#9E9E99] uppercase mb-2 block">
                    {service.category}
                  </span>
                  <h3 
                    className="text-xl font-medium tracking-tight text-[#1C1B19] mb-3 group-hover:text-brand-gold transition-colors duration-300"
                    style={{ fontFamily: '"PP Neue Montreal Medium", sans-serif' }}
                  >
                    {service.name}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-[#53565A] font-light">
                    {service.description}
                  </p>
                </div>

                {/* Elegant Interactive Underline Button */}
                <div className="mt-8 pb-1 self-start">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleInquireClick();
                    }}
                    className="relative text-xs uppercase tracking-[0.12em] text-[#1C1B19] font-medium transition-all duration-300 cursor-pointer flex items-center gap-1.5 group/btn"
                    style={{ fontFamily: '"PP Neue Montreal Medium", sans-serif' }}
                  >
                    <span>Inquire Service</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#1C1B19] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

