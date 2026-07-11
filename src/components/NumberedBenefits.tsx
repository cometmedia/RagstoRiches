import { motion } from "motion/react";
import { ShieldAlert, RefreshCw, Handshake, ShieldCheck, Hammer, Layers } from "lucide-react";
import { BENEFITS } from "../types";

export default function NumberedBenefits() {
  const getIcon = (id: string) => {
    switch (id) {
      case "01":
        return <ShieldCheck className="h-6 w-6 text-[#FFDD00] flex-shrink-0" />;
      case "02":
        return <Layers className="h-6 w-6 text-[#FFDD00] flex-shrink-0" />;
      case "03":
        return <Handshake className="h-6 w-6 text-[#FFDD00] flex-shrink-0" />;
      default:
        return <Hammer className="h-6 w-6 text-[#FFDD00] flex-shrink-0" />;
    }
  };

  return (
    <section
      id="benefits"
      className="bg-brand-cream py-24 md:py-32 border-b border-brand-line/40 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="-translate-x-[12px] md:-translate-x-[24px] relative w-[calc(100%+24px)] md:w-[calc(100%+24px)] flex flex-col">
          {/* Small Eyebrow & Headline */}
        <div className="max-w-2xl mb-16">
          <span className="font-mono text-xs tracking-widest text-[#FFDD00] uppercase block mb-3">
            CORE PRINCIPLES
          </span>
          <h2 className="font-sans text-4xl font-semibold tracking-tight text-brand-dark sm:text-5xl uppercase leading-tight">
            Designed for <span className="text-brand-grey font-light italic">absolute certainty</span>
          </h2>
        </div>

        {/* Benefits Rows */}
        <div className="flex flex-col">
          {BENEFITS.map((benefit, index) => (
            <div key={benefit.id} className="flex flex-col">
              {/* Top Hairline Divider that draws in */}
              <div className="relative">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeInOut", delay: index * 0.1 }}
                  className="h-[1px] bg-brand-line/85"
                />
              </div>

              {/* Row Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="grid grid-cols-1 md:grid-cols-12 py-10 items-start gap-6 md:gap-12 hover:bg-brand-offwhite/30 transition-colors px-4 rounded-sm"
              >
                {/* Left Side: Number + Title (5 Cols) */}
                <div className="md:col-span-5 flex items-baseline gap-6">
                  {/* Large Faded Number */}
                  <span className="font-mono text-3xl md:text-4xl font-extrabold text-[#FFDD00]/30 tracking-widest select-none">
                    {benefit.id}
                  </span>
                  
                  {/* Title */}
                  <h3 className="font-sans text-xl md:text-2xl font-semibold text-brand-dark uppercase tracking-tight">
                    {benefit.title}
                  </h3>
                </div>

                {/* Right Side: Icon + Description (7 Cols) */}
                <div className="md:col-span-7 flex items-start gap-4">
                  {/* Small Icon */}
                  <div className="p-2.5 rounded-full bg-brand-offwhite border border-brand-line/40 shadow-sm mt-0.5">
                    {getIcon(benefit.id)}
                  </div>
                  
                  {/* Description text */}
                  <p className="font-sans text-sm text-brand-grey leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}

          {/* Bottom Closing Hairline Divider */}
          <div className="relative">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeInOut", delay: 0.4 }}
              className="h-[1px] bg-brand-line/85"
            />
          </div>
        </div>

        {/* Dynamic Trust Stamp */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 bg-brand-offwhite/60 backdrop-blur-md p-6 rounded-md border border-brand-line/40">
          <div className="flex items-center gap-4">
            <div className="bg-brand-dark text-[#FFDD00] rounded-full p-2">
              <ShieldAlert className="h-5 w-5" />
            </div>
            <div>
              <p className="font-sans text-xs font-bold text-brand-dark uppercase tracking-wider">
                Uncompromising Structural Guarantee
              </p>
              <p className="font-sans text-xs text-brand-grey">
                We stand behind our steel-cast concrete structures with a 10-year structural warranty.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="font-mono text-[10px] font-bold text-[#FFDD00] hover:text-[#FFDD00]-hover uppercase tracking-widest border-b border-[#FFDD00] pb-0.5"
          >
            Review Our Structural Guarantee
          </a>
        </div>
        </div>
      </div>
    </section>
  );
}
