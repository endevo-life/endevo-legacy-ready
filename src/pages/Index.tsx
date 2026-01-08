import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import HiddenCostStatsSection from "@/components/HiddenCostStatsSection";
import EmpowerEmployeesSection from "@/components/EmpowerEmployeesSection";
import HowEndevoHelpsSection from "@/components/HowEndevoHelpsSection";
import ToolsForEmployersSection from "@/components/ToolsForEmployersSection";
import VideoSection from "@/components/VideoSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

import WhoWeServeSection from "@/components/WhoWeServeSection";
import TestimonialsSection from "@/components/TestimonialsSection";

import LegacyJourneyCTA from "@/components/LegacyJourneyCTA";
import Footer from "@/components/Footer";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Import partner logos
import trustWillLogo from "@/assets/trust-will-logo-new.png";
import prisidioLogo from "@/assets/prisidio-logo-new.jpg";

const Index = () => {
  const { elementRef: edgeRef, isVisible: edgeVisible } = useScrollAnimation();
  const { elementRef: partnersRef, isVisible: partnersVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen">
      <ResponsiveNavbar />
      <main className="pt-16">
        <EmpowerEmployeesSection />
        <HiddenCostStatsSection />
        <VideoSection />
        <HowEndevoHelpsSection />

        <ToolsForEmployersSection />

        {/* Our Edge: Where AI Meets Empathy Section */}
        <section ref={edgeRef as React.RefObject<HTMLElement>} id="our-edge" className="py-20 bg-background scroll-mt-20">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text */}
              <div className={`space-y-6 transition-all duration-1000 ${edgeVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h2 className="text-3xl md:text-4xl text-foreground">
                  Our Edge: Where{" "}
                  <span className="font-bold text-brand-orange">AI Meets Empathy</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  ENDevo isn't just another platform. It is a new standard for preparedness, where technology meets humanity, blending innovation with empathy to create solutions you can trust. Our edge is what makes us different and what makes planning simpler, smarter, and more human.
                </p>
              </div>

              {/* Right Column - Accordion */}
              <div className={`space-y-4 transition-all duration-1000 ${edgeVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
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

        <WhoWeServeSection />

        {/* Partners Carousel Section */}
        <section ref={partnersRef as React.RefObject<HTMLElement>} className="py-4 bg-gradient-to-b from-background to-muted/20">
          <div className="container max-w-6xl mx-auto px-4">
            <div className={`text-center mb-12 transition-all duration-1000 ${partnersVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl md:text-4xl font-bold mb-2 text-brand-orange">Our Partners</h2>
            </div>
            <div className={`overflow-hidden w-full transition-all duration-1000 ${partnersVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
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

      </main>
      <Footer />
    </div>
  );
};

export default Index;
