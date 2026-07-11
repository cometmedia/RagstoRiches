import { motion } from "motion/react";
import { Shield, Hammer, Compass, Award, ArrowRight } from "lucide-react";

interface WhyUsProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function WhyUs({ onScrollToSection }: WhyUsProps) {
  return (
    <section
      id="why-us-section"
      className="bg-brand-offwhite text-brand-dark py-24 md:py-32 border-b border-brand-line/40 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="-translate-x-[12px] md:-translate-x-[24px] relative w-[calc(100%+24px)] md:w-[calc(100%+24px)] flex flex-col">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Column: Brand Story & Values (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="font-mono text-xs tracking-widest text-[#FFDD00] uppercase block mb-3">
              THE BUILDER STANDARDS
            </span>
            <h2 className="font-sans text-4xl font-semibold tracking-tight text-brand-dark sm:text-5xl leading-none uppercase mb-6">
              Why Rags to <br />
              <span className="text-[#FFDD00]">Riches Builders</span>
            </h2>

            <p className="font-sans text-sm text-brand-grey leading-relaxed mb-4">
              We started with a simple belief: your home is your single greatest life asset. Building it should never be left to chance or split among dozens of uncoordinated, unsupervised subcontractors.
            </p>
            <p className="font-sans text-sm text-brand-grey leading-relaxed mb-8">
              Rags to Riches Builders brings rigorous civil engineering standards, thick seismic reinforcement foundations, and master-level custom European finishes together under a single, highly aligned construction firm.
            </p>

            {/* Credibility Grid */}
            <div className="grid grid-cols-2 gap-6 w-full mb-8 font-sans">
              <div className="flex flex-col">
                <span className="font-mono text-2xl font-bold text-[#FFDD00]">100%</span>
                <span className="text-[11px] text-brand-grey tracking-wider uppercase font-semibold mt-1">In-house engineering</span>
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-2xl font-bold text-[#FFDD00]">15 Yrs+</span>
                <span className="text-[11px] text-brand-grey tracking-wider uppercase font-semibold mt-1">Combined mastery</span>
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-2xl font-bold text-[#FFDD00]">Grade-60</span>
                <span className="text-[11px] text-brand-grey tracking-wider uppercase font-semibold mt-1">Certified premium steel</span>
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-2xl font-bold text-[#FFDD00]">Zero-Cost</span>
                <span className="text-[11px] text-brand-grey tracking-wider uppercase font-semibold mt-1">Initial consultation</span>
              </div>
            </div>

            {/* Building Process CTA Button */}
            <button
              id="why-us-process-btn"
              onClick={() => onScrollToSection("process")}
              className="group flex items-center gap-2 border border-brand-dark hover:border-[#FFDD00] hover:bg-brand-dark hover:text-brand-offwhite px-6 py-3 font-sans text-xs font-semibold uppercase tracking-widest rounded-sm transition-all"
            >
              Our Building Process
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Middle Decorative Divider (1 Column) - Hidden on Mobile */}
          <div className="hidden lg:flex lg:col-span-1 justify-center h-full">
            <div className="w-[1.5px] bg-brand-line/60 h-96 relative">
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-[#FFDD00]" />
            </div>
          </div>

          {/* Right Column: Parallax Overlapping Images (6 Columns) */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[480px] md:min-h-[550px] mt-12 lg:mt-0">
            {/* Background Grid Accent */}
            <div className="absolute -inset-4 bg-brand-cream/40 rounded-sm -z-10 border border-brand-line/20" />

            {/* Main/Large Photo (Wide exterior/structure shot) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: -30 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative w-[75%] aspect-[4/3] rounded-sm overflow-hidden shadow-xl border border-brand-line/40 self-start mr-auto z-10"
            >
              <img
                src="/images/completed_modern_mansion_1783453929340.jpg"
                alt="Completed modern home exterior"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-dark/10" />
            </motion.div>

            {/* Smaller Detail Photo (Layered on top with parallax feel) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 50, x: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="absolute w-[45%] aspect-[1/1] rounded-sm overflow-hidden shadow-2xl border-2 border-brand-offwhite right-4 bottom-4 z-20"
            >
              <img
                src="/images/grey_structure_phase_1783453872098.jpg"
                alt="Raw grey structure steel details"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent" />
              
              {/* Overlapping small badge */}
              <div className="absolute bottom-4 left-4 bg-[#FFDD00] text-brand-dark px-2 py-1 font-mono text-[8px] font-bold tracking-widest uppercase rounded-sm shadow-md">
                STRUCTURAL INTEGRITY
              </div>
            </motion.div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
