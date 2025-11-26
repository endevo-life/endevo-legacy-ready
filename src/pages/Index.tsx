import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import NewHeroSection from "@/components/NewHeroSection";
import EndevoPurposeSection from "@/components/EndevoPurposeSection";
import HiddenCostSection from "@/components/HiddenCostSection";
import ProcessSection from "@/components/ProcessSection";
import WhoBenefitsSection from "@/components/WhoBenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ConsultationSection from "@/components/ConsultationSection";
import VisionValuesSection from "@/components/VisionValuesSection";
import FamilyTestimonialsSection from "@/components/FamilyTestimonialsSection";
import Footer from "@/components/Footer";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Import partner logos
import trustWillLogo from "@/assets/trust-will-logo-new.png";
import prisidioLogo from "@/assets/prisidio-logo-new.jpg";
const Index = () => {
  return <div className="min-h-screen">
      <ResponsiveNavbar />
      <main className="pt-16">
        <NewHeroSection />
        <HiddenCostSection />
        <EndevoPurposeSection />
        <ProcessSection />
        <WhoBenefitsSection />
        
        
        <VisionValuesSection />
        <FamilyTestimonialsSection />
        
        {/* Partners Carousel Section */}
        <section className="py-16 bg-gradient-to-b from-background to-muted/20">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-2 text-brand-orange">Building Resilience Together</h2>
              
            </div>
            <div className="overflow-hidden w-full">
              <div className="flex animate-[scroll_20s_linear_infinite] hover:[animation-play-state:paused]">
                {/* First set of logos */}
                <div className="flex items-center justify-center min-w-[250px] h-24 p-4">
                  <img src={trustWillLogo} alt="Trust & Will" className="max-h-16 w-auto object-contain" />
                </div>
                <div className="flex items-center justify-center min-w-[250px] h-24 p-4">
                  <img src={prisidioLogo} alt="Prisidio" className="max-h-16 w-auto object-contain" />
                </div>
                {/* Duplicate set for seamless loop */}
                <div className="flex items-center justify-center min-w-[250px] h-24 p-4">
                  <img src={trustWillLogo} alt="Trust & Will" className="max-h-16 w-auto object-contain" />
                </div>
                <div className="flex items-center justify-center min-w-[250px] h-24 p-4">
                  <img src={prisidioLogo} alt="Prisidio" className="max-h-16 w-auto object-contain" />
                </div>
                {/* Third set for extra smoothness */}
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
        
        <ConsultationSection />
      </main>
      <Footer />
    </div>;
};
export default Index;