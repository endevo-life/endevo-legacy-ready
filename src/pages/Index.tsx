import Header from "@/components/Header";
import NewHeroSection from "@/components/NewHeroSection";
import VideoSection from "@/components/VideoSection";
import EndevoPurposeSection from "@/components/EndevoPurposeSection";
import HiddenCostSection from "@/components/HiddenCostSection";
import FutureSection from "@/components/FutureSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <NewHeroSection />
        <VideoSection />
        <EndevoPurposeSection />
        <HiddenCostSection />
        <FutureSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
