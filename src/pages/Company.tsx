import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import Footer from "@/components/Footer";
import NikiWeissSection from "@/components/NikiWeissSection";
import CoreValuesSection from "@/components/CoreValuesSection";
import MeetOurTeamSection from "@/components/MeetOurTeamSection";
import ConsultationSection from "@/components/ConsultationSection";
import DifferentiatorSection from "@/components/DifferentiatorSection";
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
      <ResponsiveNavbar />
      
      {/* New Hero Section */}
      <section className="relative py-20 pt-36 overflow-hidden">
        <div className="absolute inset-0">
          <img src={companyHeroFamilyNew} alt="" className="w-full h-full object-cover" />
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
      

      {/* Our Edge: Where AI Meets Empathy Section */}
      <section id="our-edge" className="py-20 bg-background scroll-mt-20">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl text-foreground">
                Our Edge: Where{" "}
                <span className="font-bold text-brand-orange">AI Meets Empathy</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                ENDevo isn't just another platform. It is a new standard for preparedness, where technology meets humanity, blending innovation with empathy to create solutions you can trust. Our edge is what makes us different and what makes planning simpler, smarter, and more human.
              </p>
            </div>

            {/* Right Column - Accordion */}
            <div className="space-y-4">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="market-need" className="bg-white rounded-lg shadow-sm px-6 py-2 border-none">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🌍</span>
                      <span className="font-semibold text-foreground">$126B Market Need</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2 pb-4">
                    Legacy readiness & digital preparedness are urgent and costly gaps for families and businesses. ENDevo addresses the crisis head-on with scalable, human-centered solutions.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="ai-guidance" className="bg-white rounded-lg shadow-sm px-6 py-2 border-none">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🤖</span>
                      <span className="font-semibold text-foreground">Empathetic AI Guidance</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2 pb-4">
                    Our AI isn't just about automation. It's supportive, compassionate, and tailored to individuals, families, and employees.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="comprehensive" className="bg-white rounded-lg shadow-sm px-6 py-2 border-none">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🛠️</span>
                      <span className="font-semibold text-foreground">Comprehensive Offerings</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2 pb-4">
                    Plan across every domain, beliefs, legal, financial, physical, and digital, all in one unified platform.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="marketplace" className="bg-white rounded-lg shadow-sm px-6 py-2 border-none">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🛒</span>
                      <span className="font-semibold text-foreground">Marketplace Integration</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2 pb-4">
                    Seamless connections to trusted providers like Trust&Will and Presidio for diverse planning needs.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="education" className="bg-white rounded-lg shadow-sm px-6 py-2 border-none">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">📚</span>
                      <span className="font-semibold text-foreground">Human-Centered Education</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2 pb-4">
                    Workshops and resources blend technology with empathy, making complex planning simple and approachable.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="security" className="bg-white rounded-lg shadow-sm px-6 py-2 border-none">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🔒</span>
                      <span className="font-semibold text-foreground">Secure & Reliable</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2 pb-4">
                    Enterprise-grade safeguards protect sensitive data and digital footprints.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="values" className="bg-white rounded-lg shadow-sm px-6 py-2 border-none">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">❤️</span>
                      <span className="font-semibold text-foreground">Built on Values (C.L.A.R.I.T.Y.)</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2 pb-4">
                    Compassion, Clarity, Resilience, and Innovation guide every step of our work.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
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
        
      </section>

      {/* Building Resilience Together Section */}
      <section className="py-16 bg-gradient-to-b from-background to-muted/20">
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

      {/* Let's Start Your Legacy Journey Section */}
      <ConsultationSection />

      <Footer />
    </div>;
};
export default Company;