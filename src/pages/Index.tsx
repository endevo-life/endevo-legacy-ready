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
              
              <h2 className="text-3xl md:text-4xl text-brand-orange font-semibold">
                Building Resilience Together
              </h2>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 lg:gap-20">
              <div className="flex items-center justify-center h-20">
                <img src={trustWillLogo} alt="Trust & Will" className="max-h-20 w-auto object-contain" />
              </div>
              <div className="flex items-center justify-center h-20">
                <img src={prisidioLogo} alt="Prisidio" className="max-h-20 w-auto object-contain" />
              </div>
              <div className="flex items-center justify-center h-20">
                
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