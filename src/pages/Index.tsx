import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CriticalQuestion from "@/components/CriticalQuestion";
import LegacySection from "@/components/LegacySection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <CriticalQuestion />
        <LegacySection />
      </main>
    </div>
  );
};

export default Index;
