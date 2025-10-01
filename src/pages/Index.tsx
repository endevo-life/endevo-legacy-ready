import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import NewHeroSection from "@/components/NewHeroSection";
import VideoSection from "@/components/VideoSection";
import EndevoPurposeSection from "@/components/EndevoPurposeSection";
import HiddenCostSection from "@/components/HiddenCostSection";
import ProcessSection from "@/components/ProcessSection";
import ExploreOurSolutions from "@/components/ExploreOurSolutions";
import WhyTrustSection from "@/components/WhyTrustSection";
import WhoBenefitsSection from "@/components/WhoBenefitsSection";


import TestimonialsSection from "@/components/TestimonialsSection";
import ConsultationSection from "@/components/ConsultationSection";
import VisionValuesSection from "@/components/VisionValuesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ResponsiveNavbar />
      <main>
        <NewHeroSection />
        <VideoSection />
        <HiddenCostSection />
        <EndevoPurposeSection />
        <ProcessSection />
        <WhoBenefitsSection />
        <ExploreOurSolutions />
        <WhyTrustSection />
        
        
        <VisionValuesSection />
        <TestimonialsSection />
        <ConsultationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
