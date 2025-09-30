import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
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
      <Header />
      
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

      {/* C.L.A.R.I.T.Y. Core Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container max-w-6xl mx-auto px-4">
          <div ref={clarityRef as any} className={`text-center mb-16 transition-all duration-1000 ${clarityVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Our Core Values: <span className="text-brand-orange">C.L.A.R.I.T.Y.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Every service we provide is guided by our core values, ensuring comprehensive support that addresses both digital resilience and human-centered legacy readiness.
            </p>
          </div>

          <div className={`grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 transition-all duration-1000 ${clarityVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
          animationDelay: '0.2s'
        }}>
            {/* C - Compassion */}
            <Card className="relative overflow-hidden bg-card text-card-foreground shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
              <div className="absolute top-2 right-2 text-8xl font-bold text-gray-100 select-none pointer-events-none">
                C
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-foreground mb-3">Compassion</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Honor humanity while simplifying the complex. We approach every situation with empathy and understanding.
                </p>
              </div>
            </Card>

            {/* L - Legacy Readiness */}
            <Card className="relative overflow-hidden bg-card text-card-foreground shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
              <div className="absolute top-2 right-2 text-8xl font-bold text-gray-100 select-none pointer-events-none">
                L
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-foreground mb-3">Legacy Readiness</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Act today to safeguard families, organizations, and communities for tomorrow's challenges.
                </p>
              </div>
            </Card>

            {/* A - Action & Empowerment */}
            <Card className="relative overflow-hidden bg-card text-card-foreground shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
              <div className="absolute top-2 right-2 text-8xl font-bold text-gray-100 select-none pointer-events-none">
                A
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-foreground mb-3">Action & Empowerment</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Educate, project manage, and empower people to act with confidence and clarity.
                </p>
              </div>
            </Card>

            {/* R - Resilience */}
            <Card className="relative overflow-hidden bg-card text-card-foreground shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
              <div className="absolute top-2 right-2 text-8xl font-bold text-gray-100 select-none pointer-events-none">
                R
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-foreground mb-3">Resilience (Digital & Human)</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Protect identities, assets, and digital footprints with comprehensive safeguards.
                </p>
              </div>
            </Card>

            {/* I - Innovation with Integrity */}
            <Card className="relative overflow-hidden bg-card text-card-foreground shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
              <div className="absolute top-2 right-2 text-8xl font-bold text-gray-100 select-none pointer-events-none">
                I
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-foreground mb-3">Innovation with Integrity</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Harness AI and emerging tech responsibly to serve human needs and values.
                </p>
              </div>
            </Card>

            {/* T - Teamwork & Collaboration */}
            <Card className="relative overflow-hidden bg-card text-card-foreground shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
              <div className="absolute top-2 right-2 text-8xl font-bold text-gray-100 select-none pointer-events-none">
                T
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-foreground mb-3">Teamwork & Collaboration</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Build systemic resilience with trusted partners and connected communities.
                </p>
              </div>
            </Card>

            {/* Y - Yesterday, Today, Tomorrow */}
            <Card className="relative overflow-hidden bg-card text-card-foreground shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 md:col-span-2 lg:col-span-1 xl:col-span-3">
              <div className="absolute top-2 right-2 text-8xl font-bold text-gray-100 select-none pointer-events-none">
                Y
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-foreground mb-3">Yesterday, Today, Tomorrow</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Honor the past, strengthen the present, secure the future for generations.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${companyHeroBg})`
    }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div ref={heroRef as any} className={`relative z-10 text-center text-white px-4 transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl mx-auto">
            Our Mission: Building Resilient Legacies
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            We believe preparedness is a gift—for families, employees, companies, and communities.
          </p>
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

      {/* Core Values Section */}
      <CoreValuesSection />

      <Footer />
    </div>;
};
export default Company;