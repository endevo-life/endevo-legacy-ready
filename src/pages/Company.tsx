import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import Footer from "@/components/Footer";
import NikiWeissSection from "@/components/NikiWeissSection";
import CoreValuesSection from "@/components/CoreValuesSection";
import MeetOurTeamSection from "@/components/MeetOurTeamSection";
import ConsultationSection from "@/components/ConsultationSection";
import DifferentiatorSection from "@/components/DifferentiatorSection";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import VideoSection from "@/components/VideoSection";
import companyHeroBg from "@/assets/company-hero-bg.jpg";
import aboutEndevo from "@/assets/about-endevo.jpg";
import clarityGuidance from "@/assets/clarity-guidance.jpg";
import compassionTrust from "@/assets/compassion-trust.jpg";
import resilienceContinuity from "@/assets/resilience-continuity.jpg";
import companyHeroFamily from "@/assets/company-hero-family.png";

// Import partner logos
import trustWillLogo from "@/assets/trust-will-logo.png";
import prisidioLogo from "@/assets/prisidio-logo.jpg";
import cignaLogo from "@/assets/cigna-logo.png";
const Company = () => {
  const {
    elementRef: newHeroRef,
    isVisible: newHeroVisible
  } = useScrollAnimation();
  const {
    elementRef: clarityRef,
    isVisible: clarityVisible
  } = useScrollAnimation();
  const {
    elementRef: heroRef,
    isVisible: heroVisible
  } = useScrollAnimation();
  const {
    elementRef: aboutRef,
    isVisible: aboutVisible
  } = useScrollAnimation();
  const {
    elementRef: oldValuesRef,
    isVisible: oldValuesVisible
  } = useScrollAnimation();
  return <div className="min-h-screen bg-background">
      <ResponsiveNavbar />
      
      {/* New Hero Section */}
      <section className="py-20 bg-background pt-36">
        <div className="container max-w-6xl mx-auto px-4">
          <div ref={newHeroRef as any} className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${newHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Simplifying Legacy Readiness & Digital Resilience
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Empowering people to prepare with clarity, protect digital footprints, and create peace of mind for generations.
              </p>
              <p className="text-2xl font-bold text-brand-orange">Live Fully. Die Ready.</p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded to bring clarity and compassion to one of life's hardest conversations, ENDevo blends AI intelligence with human guidance to make legacy readiness and digital resilience accessible, scalable, and impactful.
              </p>
            </div>

            {/* Right Column - Image (Hidden on mobile) */}
            <div className="relative hidden md:block">
              <div className="relative bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-2xl">
                <img src={companyHeroFamily} alt="Happy family representing legacy and continuity" className="w-full h-auto rounded-xl shadow-lg object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <VideoSection />

      {/* About ENDevo Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container max-w-6xl mx-auto px-4">
          <div ref={aboutRef as any} className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${aboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                About ENDevo
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Founded to bring clarity and compassion to one of life's hardest conversations, ENDevo blends AI intelligence with human guidance to make legacy readiness and digital resilience accessible, scalable, and impactful.
              </p>
            </div>
            <div className="relative hidden md:block">
              <img src={aboutEndevo} alt="About ENDevo - Team collaboration" className="rounded-lg shadow-lg w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* ENDevo's Differentiator Section */}
      <DifferentiatorSection />

      {/* Niki Weiss Section */}
      <NikiWeissSection />

      {/* Our Values Section */}
      

      {/* Core Values Section */}
      <CoreValuesSection />

      {/* Meet Our Team Section */}
      <MeetOurTeamSection />

      {/* Our Partners Section */}
      <section id="partners" className="py-20 bg-background">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Our Partners
            </h2>
            <p className="text-xl text-brand-orange font-semibold">
              Building Resilience Together
            </p>
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

      {/* Let's Start Your Legacy Journey Section */}
      <ConsultationSection />

      <Footer />
    </div>;
};
export default Company;