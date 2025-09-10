import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CriticalQuestion from "@/components/CriticalQuestion";
import AboutSection from "@/components/AboutSection";
import FrameworkSection from "@/components/FrameworkSection";
import LegacySection from "@/components/LegacySection";
import VideoSection from "@/components/VideoSection";
import ProcessSection from "@/components/ProcessSection";
import MobileAppSection from "@/components/MobileAppSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CallToActionSection from "@/components/CallToActionSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <CriticalQuestion />
        <AboutSection />
        <FrameworkSection />
        <LegacySection />
        <VideoSection />
        <ProcessSection />
        <MobileAppSection />
        <TestimonialsSection />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
