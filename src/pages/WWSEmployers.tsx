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
        {/* Hero Section - Full Background */}
        <section
          className="relative min-h-[calc(100vh-4rem)] flex bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${employersHeroOffice}')` }}
        >
          {/* Content Block */}
          <div
            ref={heroAnimation.elementRef as React.RefObject<HTMLDivElement>}
            className="relative z-10 w-full lg:w-[45%] flex items-center"
          >
            <div
              className={`px-8 md:px-12 lg:px-16 py-16 max-w-xl transition-all duration-1000 ${
                heroAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              {/* Main Headline */}
              <h1
                className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6"
                style={{ fontFamily: "'Playfair Display', 'Merriweather', Georgia, serif" }}
              >
                <span className="text-foreground">Protect Your Business Continuity</span>
                <br />
                <span style={{ color: "#D95D26" }}>by Preparing Your People</span>
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
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WWSEmployers;
