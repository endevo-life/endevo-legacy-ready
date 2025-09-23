import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import NewHeroSection from "@/components/NewHeroSection";
import VideoSection from "@/components/VideoSection";
import EndevoPurposeSection from "@/components/EndevoPurposeSection";
import HiddenCostSection from "@/components/HiddenCostSection";
import CoreValuesSection from "@/components/CoreValuesSection";
import FutureSection from "@/components/FutureSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ConsultationSection from "@/components/ConsultationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ResponsiveNavbar />
      <main>
        <NewHeroSection />
        <VideoSection />
        <EndevoPurposeSection />
        <HiddenCostSection />
        <CoreValuesSection />
        <FutureSection />
        <TestimonialsSection />
        <ConsultationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
