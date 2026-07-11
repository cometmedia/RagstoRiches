import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";

interface ExploreHouseProps {
  onBack: () => void;
}

const HOUSE_IMAGES = [
  {
    title: "The Exterior",
    src: "/src/assets/images/lavish_light_exterior_1783714695972.jpg",
    description: "Striking clean lines and expansive glass facades."
  },
  {
    title: "Grand Interior",
    src: "/src/assets/images/lavish_living_interior_1783714740123.jpg",
    description: "Double-height ceilings and bespoke furnishings."
  },
  {
    title: "Gourmet Kitchen",
    src: "/src/assets/images/french_country_kitchen_1783540582090.jpg",
    description: "Culinary perfection with premium finishes."
  },
  {
    title: "Luxury Washroom",
    src: "/src/assets/images/lavish_washroom_1783717341151.jpg",
    description: "A spa-like retreat wrapped in elegant marble."
  },
  {
    title: "Opulent Stairs",
    src: "/src/assets/images/lavish_grand_stairs_1783714716601.jpg",
    description: "A stunning architectural centerpiece."
  },
  {
    title: "Scenic Balcony",
    src: "/src/assets/images/lavish_balcony_1783717361201.jpg",
    description: "Expansive outdoor living with breathtaking views."
  },
  {
    title: "Exotic Garage",
    src: "/src/assets/images/lavish_garage_1783717379014.jpg",
    description: "Polished floors and perfect lighting for automotive art."
  }
];

export default function ExploreHouse({ onBack }: ExploreHouseProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-brand-offwhite min-h-screen text-brand-dark pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-brand-grey hover:text-brand-dark transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-sans text-sm font-medium uppercase tracking-widest">Back to Home</span>
        </button>

        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-light tracking-tight text-brand-dark mb-4">
            Lavish Estate Showcase
          </h1>
          <p className="text-brand-grey max-w-2xl text-lg font-light">
            Step inside a masterclass of luxury architecture and bespoke interior design. Every detail meticulously crafted for unparalleled elegance.
          </p>
        </div>

        <div className="space-y-24">
          {HOUSE_IMAGES.map((img, idx) => (
            <motion.div
              key={img.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col md:flex-row items-center gap-8 md:gap-16"
            >
              <div className={`w-full md:w-2/3 ${idx % 2 !== 0 ? 'md:order-2' : ''}`}>
                <div className="aspect-[4/3] md:aspect-[16/9] w-full overflow-hidden shadow-2xl rounded-sm">
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
              <div className={`w-full md:w-1/3 ${idx % 2 !== 0 ? 'md:order-1 md:text-right' : ''}`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-[1px] w-12 bg-brand-gold"></div>
                  <span className="font-sans text-xs uppercase tracking-widest text-brand-grey font-semibold">0{idx + 1}</span>
                </div>
                <h2 className="text-2xl md:text-4xl font-light text-brand-dark mb-4">
                  {img.title}
                </h2>
                <p className="text-brand-grey font-light leading-relaxed">
                  {img.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
