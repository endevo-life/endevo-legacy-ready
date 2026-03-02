import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import Footer from "@/components/Footer";
import NikiWeissSection from "@/components/NikiWeissSection";
import CoreValuesSection from "@/components/CoreValuesSection";
import MeetOurTeamSection from "@/components/MeetOurTeamSection";
import ConsultationSection from "@/components/ConsultationSection";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import companyHeroBg from "@/assets/company-hero-bg.jpg";
import aboutEndevo from "@/assets/about-endevo.jpg";
import clarityGuidance from "@/assets/clarity-guidance.jpg";
import compassionTrust from "@/assets/compassion-trust.jpg";
import resilienceContinuity from "@/assets/resilience-continuity.jpg";
import companyHeroFamily from "@/assets/company-hero-family.jpg";
import aboutUsFamily from "@/assets/about-us-family.jpg";
import aboutHeroBg from "@/assets/about-hero-bg.jpg";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Company = () => {
  const { elementRef: newHeroRef, isVisible: newHeroVisible } =
    useScrollAnimation();
  const { elementRef: clarityRef, isVisible: clarityVisible } =
    useScrollAnimation();
  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { elementRef: aboutRef, isVisible: aboutVisible } =
    useScrollAnimation();
  const { elementRef: oldValuesRef, isVisible: oldValuesVisible } =
    useScrollAnimation();
  const ctaAnimation = useScrollAnimation();
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background">
      <ResponsiveNavbar />

      {/* New Hero Section */}
      <section id="about" className="relative py-20 pt-36 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://assets.cdn.filesafe.space/f5ehsbHfdFg2UsHEIb49/media/699757793873af62c19c9462.jpeg"
            alt="Hero Image - Endevo Life - A New Standard of Employee Support
for Life's What-Ifs"
            aria-hidden="true"
            className="w-full h-full object-cover [object-position:37%_center] md:object-center"
          />
        </div>
        <div className="container max-w-6xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div
              ref={newHeroRef as any}
              className={`space-y-6 transition-all duration-1000 ${newHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <h1
                className="text-4xl lg:text-5xl font-bold text-foreground leading-tight"
                style={{
                  fontFamily:
                    "'Playfair Display', 'Merriweather', Georgia, serif",
                }}
              >
                Simplifying Legacy Readiness & Digital Resilience
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Empowering people to prepare with clarity, protect digital
                footprints, and create peace of mind for generations.
              </p>
              <p className="text-2xl font-bold text-brand-orange">
                Live Fully. Die Ready.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded to bring clarity and compassion to one of life's hardest
                conversations, ENDevo blends AI intelligence with human guidance
                to make legacy readiness and digital resilience accessible,
                scalable, and impactful.
              </p>
            </div>
            <div className="relative"></div>
          </div>
        </div>
      </section>

      {/* About ENDevo Section */}

      {/* Niki Weiss Section */}
      <NikiWeissSection />

      {/* Meet Our Team Section */}
      <MeetOurTeamSection />

      {/* Our Values Section */}

      {/* Core Values Section */}
      <CoreValuesSection />

      {/* Our Partners Section */}

      {/* Building Resilience Together Section */}
      <section
        id="partners"
        className="py-16 bg-gradient-to-b from-background to-muted/20"
      >
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">
              Our Partners
            </h2>
            <p className="text-2xl font-semibold text-brand-orange">
              Building Resilience Together
            </p>
          </div>
          <div className="overflow-hidden w-full">
            <div className="flex animate-[scroll_20s_linear_infinite] hover:[animation-play-state:paused]">
              {/* First set of logos */}
              <div className="flex items-center justify-center min-w-[250px] h-24 p-4">
                <img
                  src="https://assets.cdn.filesafe.space/f5ehsbHfdFg2UsHEIb49/media/699757441817156cc8a451cb.png"
                  alt="Trust & Will"
                  className="max-h-16 w-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-center min-w-[250px] h-24 p-4">
                <img
                  src="https://assets.cdn.filesafe.space/f5ehsbHfdFg2UsHEIb49/media/699757448d5b5af29c80f299.jpg"
                  alt="Prisidio"
                  className="max-h-16 w-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-center min-w-[250px] h-24 p-4">
                <img
                  src="https://assets.cdn.filesafe.space/f5ehsbHfdFg2UsHEIb49/media/69975744f83453e670329c0b.png"
                  alt="Nia Emberly"
                  className="max-h-16 w-auto object contain"
                />
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="flex items-center justify-center min-w-[250px] h-24 p-4">
                <img
                  src="https://assets.cdn.filesafe.space/f5ehsbHfdFg2UsHEIb49/media/699757441817156cc8a451cb.png"
                  alt="Trust & Will"
                  className="max-h-16 w-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-center min-w-[250px] h-24 p-4">
                <img
                  src="https://assets.cdn.filesafe.space/f5ehsbHfdFg2UsHEIb49/media/699757448d5b5af29c80f299.jpg"
                  alt="Prisidio"
                  className="max-h-16 w-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-center min-w-[250px] h-24 p-4">
                <img
                  src="https://assets.cdn.filesafe.space/f5ehsbHfdFg2UsHEIb49/media/69975744f83453e670329c0b.png"
                  alt="Nia Emberly"
                  className="max-h-16 w-auto object-contain"
                />
              </div>
              {/* Third set for extra smoothness */}
              <div className="flex items-center justify-center min-w-[250px] h-24 p-4">
                <img
                  src="https://assets.cdn.filesafe.space/f5ehsbHfdFg2UsHEIb49/media/699757441817156cc8a451cb.png"
                  alt="Trust & Will"
                  className="max-h-16 w-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-center min-w-[250px] h-24 p-4">
                <img
                  src="https://assets.cdn.filesafe.space/f5ehsbHfdFg2UsHEIb49/media/699757448d5b5af29c80f299.jpg"
                  alt="Prisidio"
                  className="max-h-16 w-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-center min-w-[250px] h-24 p-4">
                <img
                  src="https://assets.cdn.filesafe.space/f5ehsbHfdFg2UsHEIb49/media/69975744f83453e670329c0b.png"
                  alt="Nia Emberly"
                  className="max-h-16 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Let's Start Your Legacy Journey Section */}
      {/* CTA Section */}
      <section
        ref={ctaAnimation.elementRef as React.RefObject<HTMLElement>}
        className="py-10 md:py-12"
        style={{
          backgroundColor: "#F9F9F9",
        }}
      >
        <div
          className={`container mx-auto px-6 md:px-12 text-center transition-all duration-700 ${ctaAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Headline */}
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{
              fontFamily: "'Open Sans', 'Helvetica', sans-serif",
              color: "#000",
            }}
          >
            Partner With ENDevo
          </h2>

          {/* Subheadline */}
          <p
            className="text-lg md:text-xl font-bold uppercase tracking-wide mb-6"
            style={{
              fontFamily: "'Open Sans', 'Helvetica', sans-serif",
              color: "#D95D26",
            }}
          >
            PLAN. PROTECT. PEACE.
          </p>

          {/* Body Text */}
          <p
            className="text-base md:text-lg mx-auto mb-8"
            style={{
              fontFamily: "'Open Sans', 'Helvetica', sans-serif",
              color: "#000",
              maxWidth: "600px",
            }}
          >
            Position your company as an employer of choice that supports its
            people across their entire life journey
          </p>

          {/* CTA Button */}
          <Button
            variant="outline"
            className="px-8 py-3 text-base font-semibold rounded-full transition-all duration-300 hover:text-white"
            style={{
              fontFamily: "'Open Sans', 'Helvetica', sans-serif",
              borderColor: "#D95D26",
              color: "#D95D26",
              borderWidth: "2px",
              backgroundColor: "white",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#D95D26";
              e.currentTarget.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "white";
              e.currentTarget.style.color = "#D95D26";
            }}
            onClick={() => {
              navigate("/contact");
              window.scrollTo(0, 0);
            }}
          >
            Contact Us
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};
export default Company;
