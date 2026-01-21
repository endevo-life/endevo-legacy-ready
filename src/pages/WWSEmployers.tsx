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
                Support your team through life's unexpected challenges reduce absenteeism, maintain focus, and keep your business running smoothly.
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

        {/* Stats/Metrics Section */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 text-center">
                <p
                  className="text-4xl md:text-5xl font-bold mb-3"
                  style={{
                    fontFamily: "'Playfair Display', 'Merriweather', Georgia, serif",
                    color: "#0F1738",
                  }}
                >
                  $77,888
                </p>
                <p
                  className="text-base md:text-lg text-muted-foreground"
                  style={{ fontFamily: "'Open Sans', 'Helvetica', sans-serif" }}
                >
                  Total Benefits (Savings)
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 text-center">
                <p
                  className="text-4xl md:text-5xl font-bold mb-3"
                  style={{
                    fontFamily: "'Playfair Display', 'Merriweather', Georgia, serif",
                    color: "#0F1738",
                  }}
                >
                  $10,625
                </p>
                <p
                  className="text-base md:text-lg text-muted-foreground"
                  style={{ fontFamily: "'Open Sans', 'Helvetica', sans-serif" }}
                >
                  Total Program Costs
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 text-center">
                <p
                  className="text-4xl md:text-5xl font-bold mb-3"
                  style={{
                    fontFamily: "'Playfair Display', 'Merriweather', Georgia, serif",
                    color: "#0F1738",
                  }}
                >
                  $67,263
                </p>
                <p
                  className="text-base md:text-lg text-muted-foreground"
                  style={{ fontFamily: "'Open Sans', 'Helvetica', sans-serif" }}
                >
                  Net Organizational Benefit
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-6 md:px-12">
            {/* Headline */}
            <h2
              className="text-3xl md:text-4xl font-bold text-center mb-4"
              style={{ fontFamily: "'Playfair Display', 'Merriweather', Georgia, serif" }}
            >
              Why Legacy Preparedness is a{" "}
              <span style={{ color: "#D95D26" }}>Business Priority</span>
            </h2>

            {/* Subheadline */}
            <p
              className="text-base md:text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12"
              style={{ fontFamily: "'Open Sans', 'Helvetica', sans-serif" }}
            >
              Unpreparedness is a hidden operational risk. Data shows that 75% of employees will not complete essential end-of-life planning without a structured framework.
            </p>

            {/* 2x2 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Card 1 - Top Left */}
              <div
                className="bg-white rounded-lg p-6 md:p-8"
                style={{ border: "2px solid #D95D26" }}
              >
                <h3
                  className="text-xl md:text-2xl font-bold mb-3"
                  style={{ fontFamily: "'Playfair Display', 'Merriweather', Georgia, serif" }}
                >
                  5x to 7x ROI:
                </h3>
                <p
                  className="text-base text-muted-foreground"
                  style={{ fontFamily: "'Open Sans', 'Helvetica', sans-serif" }}
                >
                  Our conservative financial modeling demonstrates significant returns through crisis prevention.
                </p>
              </div>

              {/* Card 2 - Top Right */}
              <div
                className="bg-white rounded-lg p-6 md:p-8"
                style={{ border: "2px solid #D95D26" }}
              >
                <h3
                  className="text-xl md:text-2xl font-bold mb-3"
                  style={{ fontFamily: "'Playfair Display', 'Merriweather', Georgia, serif" }}
                >
                  Reduced Absenteeism:
                </h3>
                <p
                  className="text-base text-muted-foreground"
                  style={{ fontFamily: "'Open Sans', 'Helvetica', sans-serif" }}
                >
                  By providing a pre-managed roadmap, we prevent the unplanned downtime that occurs when a family is in chaos.
                </p>
              </div>

              {/* Card 3 - Bottom Left */}
              <div
                className="bg-white rounded-lg p-6 md:p-8"
                style={{ border: "2px solid #D95D26" }}
              >
                <h3
                  className="text-xl md:text-2xl font-bold mb-3"
                  style={{ fontFamily: "'Playfair Display', 'Merriweather', Georgia, serif" }}
                >
                  Activating Dormant Benefits:
                </h3>
                <p
                  className="text-base text-muted-foreground"
                  style={{ fontFamily: "'Open Sans', 'Helvetica', sans-serif" }}
                >
                  We drive utilization of your existing legal benefits by providing the project-based motivation for employees to finally use them.
                </p>
              </div>

              {/* Card 4 - Bottom Right */}
              <div
                className="bg-white rounded-lg p-6 md:p-8"
                style={{ border: "2px solid #D95D26" }}
              >
                <h3
                  className="text-xl md:text-2xl font-bold mb-3"
                  style={{ fontFamily: "'Playfair Display', 'Merriweather', Georgia, serif" }}
                >
                  Competitive Differentiation:
                </h3>
                <p
                  className="text-base text-muted-foreground"
                  style={{ fontFamily: "'Open Sans', 'Helvetica', sans-serif" }}
                >
                  92% of employees view this program as a competitive advantage that shows you care for them as a whole person.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WWSEmployers;
