import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import HiddenCostStatsSection from "@/components/HiddenCostStatsSection";
import DigitalReadinessWellnessSection from "@/components/DigitalReadinessWellnessSection";
import EmpowerEmployeesSection from "@/components/EmpowerEmployeesSection";
import HowEndevoHelpsSection from "@/components/HowEndevoHelpsSection";
import ToolsForEmployersSection from "@/components/ToolsForEmployersSection";
import VideoSection from "@/components/VideoSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

import WhoWeServeSection from "@/components/WhoWeServeSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FamilyTestimonialsSection from "@/components/FamilyTestimonialsSection";
import LatestSection from "@/components/LatestSection";

import LegacyJourneyCTA from "@/components/LegacyJourneyCTA";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Import partner logos
import trustWillLogo from "@/assets/trust-will-logo-new.png";
import prisidioLogo from "@/assets/prisidio-logo-new.jpg";

const Index = () => {
  const { elementRef: partnersRef, isVisible: partnersVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen">
      <SEO
        title="ENDevo — Legacy Readiness & Digital Preparedness"
        description="ENDevo helps individuals, families, and employers achieve Legacy Readiness. Protect your digital footprint, estate, and life story with intention."
        canonical="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "ENDevo",
          "url": "https://www.endevo.life",
          "logo": "https://www.endevo.life/favicon.png",
          "description": "Legacy Readiness & Digital Preparedness platform for individuals, families, and employers.",
          "sameAs": ["https://www.youtube.com/@DigitalLegacyPodcast"]
        }}
      />
      <ResponsiveNavbar />
      <main className="pt-16">
        <EmpowerEmployeesSection />
        <HiddenCostStatsSection />
        <DigitalReadinessWellnessSection />
        <VideoSection />
        <HowEndevoHelpsSection />

        <ToolsForEmployersSection />


        {/* <WhoWeServeSection /> */}

        {/* Partners Carousel Section - Hidden for now
        <section ref={partnersRef as React.RefObject<HTMLElement>} className="py-4 bg-gradient-to-b from-background to-muted/20">
          <div className="container max-w-6xl mx-auto px-4">
            <div className={`text-center mb-12 transition-all duration-1000 ${partnersVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl md:text-4xl font-bold mb-2 text-brand-orange">Our Partners</h2>
            </div>
            <div className={`overflow-hidden w-full transition-all duration-1000 ${partnersVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
              <div className="flex animate-[scroll_20s_linear_infinite] hover:[animation-play-state:paused]">
                <div className="flex items-center justify-center min-w-[250px] h-24 p-4">
                  <img src={trustWillLogo} alt="Trust & Will" className="max-h-16 w-auto object-contain" />
                </div>
                <div className="flex items-center justify-center min-w-[250px] h-24 p-4">
                  <img src={prisidioLogo} alt="Prisidio" className="max-h-16 w-auto object-contain" />
                </div>
                <div className="flex items-center justify-center min-w-[250px] h-24 p-4">
                  <img src={trustWillLogo} alt="Trust & Will" className="max-h-16 w-auto object-contain" />
                </div>
                <div className="flex items-center justify-center min-w-[250px] h-24 p-4">
                  <img src={prisidioLogo} alt="Prisidio" className="max-h-16 w-auto object-contain" />
                </div>
                <div className="flex items-center justify-center min-w-[250px] h-24 p-4">
                  <img src={trustWillLogo} alt="Trust & Will" className="max-h-16 w-auto object-contain" />
                </div>
                <div className="flex items-center justify-center min-w-[250px] h-24 p-4">
                  <img src={prisidioLogo} alt="Prisidio" className="max-h-16 w-auto object-contain" />
                </div>
              </div>
            </div>
          </div>
        </section>
        */}

        <LatestSection />
        {/* Stories From Across Our Community Section */}
        <FamilyTestimonialsSection />

      </main>
      <Footer />
    </div>
  );
};

export default Index;
