import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import NewHeroSection from "@/components/NewHeroSection";
import VideoSection from "@/components/VideoSection";
import EndevoPurposeSection from "@/components/EndevoPurposeSection";
import HiddenCostSection from "@/components/HiddenCostSection";
import ProcessSection from "@/components/ProcessSection";
import WhoBenefitsSection from "@/components/WhoBenefitsSection";


import TestimonialsSection from "@/components/TestimonialsSection";
import ConsultationSection from "@/components/ConsultationSection";
import VisionValuesSection from "@/components/VisionValuesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ResponsiveNavbar />
      <main className="pt-16">
        <NewHeroSection />
        <VideoSection />
        <HiddenCostSection />
        <EndevoPurposeSection />
        <ProcessSection />
        <WhoBenefitsSection />
        
        
        <VisionValuesSection />
        <TestimonialsSection />
        <ConsultationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
