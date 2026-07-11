import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedBuild from "./components/FeaturedBuild";
import ShowcaseSlider from "./components/ShowcaseSlider";
import ConstructionPhases from "./components/ConstructionPhases";
import WhyEppright from "./components/WhyEppright";
import Testimonials from "./components/Testimonials";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";
import VideoModal from "./components/VideoModal";
import ExploreHouse from "./components/ExploreHouse";

export default function App() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [currentPage, setCurrentPage] = useState<"home" | "explore">("home");

  // Scroll smoothly to target section with offset for header
  const handleScrollToSection = (sectionId: string) => {
    if (currentPage !== "home") {
      setCurrentPage("home");
      setTimeout(() => {
        scrollToElement(sectionId);
      }, 100);
      return;
    }
    scrollToElement(sectionId);
  };

  const scrollToElement = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(sectionId);
    }
  };

  // Monitor intersection on scroll to highlight nav links dynamically
  useEffect(() => {
    if (currentPage !== "home") return;

    const sections = [
      "hero",
      "featured-build",
      "showcase-slider",
      "construction-phases",
      "why-us-section",
      "benefits",
      "testimonials",
      "contact"
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentPage]);

  return (
    <div id="rags-to-riches-builders-app" className="relative min-h-screen bg-brand-offwhite text-brand-dark selection:bg-[#FFDD00] selection:text-brand-dark overflow-x-hidden">
      
      {/* SECTION 0 — Header / Nav */}
      <Header
        activeSection={activeSection}
        onScrollToSection={handleScrollToSection}
      />

      {currentPage === "home" ? (
        <main id="main-content-layout">
          {/* SECTION 1 — Hero */}
          <Hero
            onOpenVideoModal={() => setIsVideoModalOpen(true)}
            onScrollToSection={handleScrollToSection}
          />

          {/* SECTION 2 — Featured Build Showcase */}
          <FeaturedBuild 
            onScrollToSection={handleScrollToSection}
            onExplore={() => setCurrentPage("explore")} 
          />

          {/* SECTION 3 — Showcase Slider */}
          <ShowcaseSlider onExplore={() => setCurrentPage("explore")} />

          {/* SECTION 4 — Why Eppright Master Split Section */}
          <WhyEppright onScrollToSection={handleScrollToSection} />

          {/* SECTION 5 — Construction Phases */}
          <ConstructionPhases />

          {/* SECTION 6 — Testimonials */}
          <Testimonials />

          {/* SECTION 7 — Contact / Schedule CTA */}
          <ContactCTA />
        </main>
      ) : (
        <main id="main-explore-layout">
          <ExploreHouse onBack={() => setCurrentPage("home")} />
        </main>
      )}

      {/* SECTION 8 — Footer */}
      <Footer onScrollToSection={handleScrollToSection} />

      {/* Cinematic Drone Walkthrough Video Modal Lightbox */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
    </div>
  );
}
