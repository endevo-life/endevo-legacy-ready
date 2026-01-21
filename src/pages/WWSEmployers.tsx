import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import employersHeroOffice from "@/assets/employers-hero-office.jpg";

const WWSEmployers = () => {
  const navigate = useNavigate();
  const heroAnimation = useScrollAnimation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <ResponsiveNavbar />
      <main className="pt-16">
        {/* Hero Section - Split Screen Layout */}
        <section className="relative min-h-[calc(100vh-4rem)] flex">
          {/* Left Content Block */}
          <div
            ref={heroAnimation.elementRef as React.RefObject<HTMLDivElement>}
            className="relative z-10 w-full lg:w-[45%] flex items-center bg-white"
          >
            {/* White gradient overlay that fades into image */}
            <div className="hidden lg:block absolute top-0 right-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10" />
            
            <div
              className={`px-8 md:px-12 lg:px-16 py-16 max-w-xl transition-all duration-1000 ${
                heroAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              {/* Main Headline */}
              <h1
                className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-foreground"
                style={{ fontFamily: "'Playfair Display', 'Merriweather', Georgia, serif" }}
              >
                Protect Your Business Continuity by Preparing Your People
              </h1>

              {/* Subheadline */}
              <p className="text-lg md:text-xl mb-6" style={{ fontFamily: "'Open Sans', 'Helvetica', sans-serif" }}>
                <span className="font-bold" style={{ color: "#D95D26" }}>ENDevo</span>
                <span className="text-foreground">: The Project Management Solution for Legacy & Digital Readiness</span>
              </p>

              {/* Body Text */}
              <p
                className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed"
                style={{ fontFamily: "'Open Sans', 'Helvetica', sans-serif" }}
              >
                Support your team through life's unexpected challenges — reduce absenteeism, maintain focus, and keep your business running smoothly.
              </p>

              {/* CTA Button */}
              <Button
                onClick={() => navigate("/contact")}
                className="text-white px-6 py-1.5 text-base font-semibold rounded-full"
                style={{
                  fontFamily: "'Open Sans', 'Helvetica', sans-serif",
                  backgroundColor: "#0F1738",
                }}
              >
                Start a Conversation
              </Button>
            </div>
          </div>

          {/* Right Image Block */}
          <div
            className="hidden lg:block absolute top-0 right-0 w-[55%] h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${employersHeroOffice}')` }}
          />

          {/* Mobile Image (shows below content on smaller screens) */}
          <div
            className="lg:hidden absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
            style={{ backgroundImage: `url('${employersHeroOffice}')` }}
          />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WWSEmployers;
