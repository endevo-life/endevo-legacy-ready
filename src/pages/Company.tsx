import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import Footer from "@/components/Footer";
import NikiWeissSection from "@/components/NikiWeissSection";
import CoreValuesSection from "@/components/CoreValuesSection";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import companyHeroBg from "@/assets/company-hero-bg.jpg";
import aboutEndevo from "@/assets/about-endevo.jpg";
import clarityGuidance from "@/assets/clarity-guidance.jpg";
import compassionTrust from "@/assets/compassion-trust.jpg";
import resilienceContinuity from "@/assets/resilience-continuity.jpg";
import companyHeroFamily from "@/assets/company-hero-family.png";

// Import team portraits
import nikiPortrait from "@/assets/niki-portrait.png";
import aaronPortrait from "@/assets/aaron-portrait.png";
import mercedesPortrait from "@/assets/mercedes-portrait.png";
import tyPortrait from "@/assets/ty-portrait.png";
import deepPortrait from "@/assets/deep-portrait.png";

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
  const {
    elementRef: teamRef,
    isVisible: teamVisible
  } = useScrollAnimation();
  const [hoveredTeamMember, setHoveredTeamMember] = useState<number | null>(null);
  const teamMembers = [{
    name: "Niki Weiss, PMP, PMI-RMP",
    title: "Digital Thanatologist",
    organization: "Founder / CEO",
    image: nikiPortrait
  }, {
    name: "Aaron Swam",
    title: "AI Enablement and Strategist",
    organization: "Choice Appointments",
    image: aaronPortrait
  }, {
    name: "Mercedes Sullivan",
    title: "VP, HR Storefront, PMO",
    organization: "TIAA",
    image: mercedesPortrait
  }, {
    name: "Ty Hagler",
    title: "Design Engineer",
    organization: "Principal, Trig",
    image: tyPortrait
  }, {
    name: "Deep Parmar",
    title: "Fractional CFO",
    organization: "Founders Institute Mentor",
    image: deepPortrait
  }];
  return <div className="min-h-screen bg-background">
      <ResponsiveNavbar />
      
      {/* New Hero Section */}
      <section className="py-20 bg-background">
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
              <p className="text-2xl font-bold text-brand-orange">
                Live Fully, Die Ready.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded to bring clarity and compassion to one of life's hardest conversations, ENDevo blends AI intelligence with human guidance to make legacy readiness and digital resilience accessible, scalable, and impactful.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-2xl">
                <img src={companyHeroFamily} alt="Happy family representing legacy and continuity" className="w-full h-auto rounded-xl shadow-lg object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

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
            <div className="relative">
              <img src={aboutEndevo} alt="About ENDevo - Team collaboration" className="rounded-lg shadow-lg w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Niki Weiss Section */}
      <NikiWeissSection />

      {/* Our Values Section */}
      

      {/* Core Values Section */}
      <CoreValuesSection />

      {/* Meet Our Team Section */}
      <section id="team" className="py-20 bg-gradient-to-b from-background to-primary/5">
        <div className="container max-w-7xl mx-auto px-4">
          <div ref={teamRef as any} className={`transition-all duration-1000 ${teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {teamMembers.map((member, index) => <div key={index} className="bg-card rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                  <div className="relative mb-6">
                    <img src={member.image} alt={member.name} className="w-32 h-32 object-cover rounded-full mx-auto border-4 border-primary/10" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-foreground leading-tight">
                      {member.name}
                    </h3>
                    <p className="text-sm font-medium text-primary italic">
                      {member.title}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {member.organization}
                    </p>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </section>

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
              <img 
                src={trustWillLogo} 
                alt="Trust & Will" 
                className="max-h-20 w-auto object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-20">
              <img 
                src={prisidioLogo} 
                alt="Prisidio" 
                className="max-h-20 w-auto object-contain"
              />
            </div>
            <div className="flex items-center justify-center h-20">
              <img 
                src={cignaLogo} 
                alt="Cigna Healthcare" 
                className="max-h-20 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>;
};
export default Company;