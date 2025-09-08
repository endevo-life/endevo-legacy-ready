import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CriticalQuestion from "@/components/CriticalQuestion";
import AboutSection from "@/components/AboutSection";
import LegacySection from "@/components/LegacySection";
import VideoSection from "@/components/VideoSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <CriticalQuestion />
        <AboutSection />
        <LegacySection />
        <VideoSection />
      </main>
    </div>
  );
};

export default Index;
