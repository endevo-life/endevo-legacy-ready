import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import NewHeroSection from "@/components/NewHeroSection";
import EndevoPurposeSection from "@/components/EndevoPurposeSection";
import HiddenCostSection from "@/components/HiddenCostSection";
import ProcessSection from "@/components/ProcessSection";
import WhoBenefitsSection from "@/components/WhoBenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ConsultationSection from "@/components/ConsultationSection";
import VisionValuesSection from "@/components/VisionValuesSection";
import Footer from "@/components/Footer";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Import partner logos
import trustWillLogo from "@/assets/trust-will-logo.png";
import prisidioLogo from "@/assets/prisidio-logo.jpg";
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
        
        
        {/* Our Partners Section */}
        <section id="partners" className="py-12 bg-background">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-8">
              
            </div>
            <Carousel opts={{
            align: "start",
            loop: true
          }} plugins={[Autoplay({
            delay: 3000
          })]} className="w-full max-w-4xl mx-auto">
              <CarouselContent>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="flex items-center justify-center h-20 p-4">
                    <img src={trustWillLogo} alt="Trust & Will" className="max-h-20 w-auto object-contain" />
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="flex items-center justify-center h-20 p-4">
                    <img src={prisidioLogo} alt="Prisidio" className="max-h-20 w-auto object-contain" />
                  </div>
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
        </section>
        
        <ConsultationSection />
      </main>
      <Footer />
    </div>;
};
export default Index;