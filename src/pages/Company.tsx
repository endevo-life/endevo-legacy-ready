import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import NikiWeissSection from "@/components/NikiWeissSection";
import CoreValuesSection from "@/components/CoreValuesSection";
import MeetOurTeamSection from "@/components/MeetOurTeamSection";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import companyHeroBg from "@/assets/company-hero-bg.jpg";
import aboutEndevo from "@/assets/about-endevo.jpg";
import clarityGuidance from "@/assets/clarity-guidance.jpg";
import compassionTrust from "@/assets/compassion-trust.jpg";
import resilienceContinuity from "@/assets/resilience-continuity.jpg";
import companyHeroFamily from "@/assets/company-hero-family.jpg";
import aboutUsFamily from "@/assets/about-us-family.jpg";
import aboutHeroBg from "@/assets/about-hero-bg.jpg";
import companyHeroFamilyNew from "@/assets/company-hero-family-new.jpg";

// Import partner logos
import trustWillLogo from "@/assets/trust-will-logo-new.png";
import prisidioLogo from "@/assets/prisidio-logo-new.jpg";
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
      <SEO 
        title="About Us - Our Mission & Team | ENDevo"
        description="Learn about ENDevo's mission to simplify legacy readiness and digital resilience. Meet our team of experts dedicated to empowering people with clarity and peace of mind."
        keywords="about endevo, mission, team, legacy planning experts, digital thanatologist, niki weiss"
        canonicalUrl="/company"
      />
      <ResponsiveNavbar />
      
      {/* New Hero Section */}
      <section id="about" className="relative py-20 pt-36 overflow-hidden scroll-mt-20">
        <div className="absolute inset-0">
          <img src={companyHeroFamilyNew} alt="Family together planning their legacy and digital preparedness" className="w-full h-full object-cover" />
        </div>
        <div className="container max-w-6xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div ref={newHeroRef as any} className={`space-y-6 transition-all duration-1000 ${newHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
            <div className="relative">
              
            </div>
          </div>
        </div>
      </section>


      {/* About ENDevo Section */}
      


      {/* Niki Weiss Section */}
      <div id="niki">
        <NikiWeissSection />
      </div>

      {/* Our Values Section */}
      

      {/* Core Values Section */}
      <div id="values">
        <CoreValuesSection />
      </div>

      {/* Meet Our Team Section */}
      <div id="team">
        <MeetOurTeamSection />
      </div>

      {/* Our Partners Section */}
      

      {/* Building Resilience Together Section */}
      <section id="partners" className="py-16 bg-gradient-to-b from-background to-muted/20 scroll-mt-20">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">Our Partners</h2>
            <p className="text-2xl font-semibold text-brand-orange">Building Resilience Together</p>
          </div>
          <div className="overflow-hidden w-full">
            <div className="flex animate-[scroll_20s_linear_infinite] hover:[animation-play-state:paused]">
              {/* First set of logos */}
              <div className="flex items-center justify-center min-w-[250px] h-24 p-4">
                <img src={trustWillLogo} alt="Trust & Will" className="max-h-16 w-auto object-contain" />
              </div>
              <div className="flex items-center justify-center min-w-[250px] h-24 p-4">
                <img src={prisidioLogo} alt="Prisidio" className="max-h-16 w-auto object-contain" />
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="flex items-center justify-center min-w-[250px] h-24 p-4">
                <img src={trustWillLogo} alt="Trust & Will" className="max-h-16 w-auto object-contain" />
              </div>
              <div className="flex items-center justify-center min-w-[250px] h-24 p-4">
                <img src={prisidioLogo} alt="Prisidio" className="max-h-16 w-auto object-contain" />
              </div>
              {/* Third set for extra smoothness */}
              <div className="flex items-center justify-center min-w-[250px] h-24 p-4">
                <img src={trustWillLogo} alt="Trust & Will" className="max-h-16 w-auto object-contain" />
              </div>
              <div className="flex items-center justify-center min-w-[250px] h-24 p-4">
                <img src={prisidioLogo} alt="Prisidio" className="max-h-16 w-auto object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Company;