import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import employersHeroOffice from "@/assets/employers-hero-office.jpg";
import insightsPortrait from "@/assets/insights-portrait.png";
import teamCollaboration from "@/assets/team-collaboration.jpg";
import employersHeroSecondary from "@/assets/employers-hero-secondary.png";
import ImplementationRoadmapSection from "@/components/ImplementationRoadmapSection";
const WWSEmployers = () => {
  const navigate = useNavigate();
  const heroAnimation = useScrollAnimation<HTMLElement>();

  const benefitsAnimation = useScrollAnimation<HTMLElement>();
  const resourcesAnimation = useScrollAnimation<HTMLElement>();
  const insightsAnimation = useScrollAnimation<HTMLElement>();
  const metricsAnimation = useScrollAnimation<HTMLElement>();
  const processAnimation = useScrollAnimation<HTMLElement>();
  const ctaAnimation = useScrollAnimation<HTMLElement>();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen">
      <SEO
        title="Employer Wellness & Legacy Readiness for HR Teams"
        description="Support employees through life's hardest moments with ENDevo's legacy readiness program for HR teams — reduce absenteeism and strengthen business continuity."
        canonical="/for-employers"
      />
      <ResponsiveNavbar />
      <main className="pt-16">
        {/* Hero Section - Hidden for now
        <section
          className="relative min-h-[calc(100vh-4rem)] flex bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${employersHeroOffice}')`,
          }}
        >
          <div
            ref={heroAnimation.elementRef}
            className="relative z-10 w-full lg:w-[45%] flex items-center"
          >
            <div
              className={`px-6 md:px-8 lg:px-10 py-10 max-w-xl transition-all duration-1000 ${heroAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                style={{
                  fontFamily:
                    "'Playfair Display', 'Merriweather', Georgia, serif",
                }}
              >
                <span className="text-foreground whitespace-nowrap">
                  Protect Your Business Continuity
                </span>
                <br />
                <span
                  className="whitespace-nowrap"
                  style={{ color: "#D95D26" }}
                >
                  by Preparing Your People
                </span>
              </h1>
              <p
                className="text-lg md:text-xl mb-6"
                style={{ fontFamily: "'Open Sans', 'Helvetica', sans-serif" }}
              >
                <span className="font-bold" style={{ color: "#D95D26" }}>ENDevo</span>
                <span className="text-foreground">
                  : The Project Management Solution for Legacy & Digital Readiness
                </span>
              </p>
              <p
                className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed"
                style={{ fontFamily: "'Open Sans', 'Helvetica', sans-serif" }}
              >
                Support your team through life's unexpected challenges, reduce
                absenteeism, maintain focus, and keep your business running smoothly.
              </p>
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
        */}

        {/* Hero Section */}
        <section
          ref={heroAnimation.elementRef}
          className="pt-16 md:pt-20 pb-2 md:pb-3 px-6 text-center bg-background"
        >
          <div
            className={`container max-w-6xl mx-auto transition-all duration-1000 ${heroAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight md:whitespace-nowrap"
              style={{
                fontFamily:
                  "'Playfair Display', 'Merriweather', Georgia, serif",
              }}
            >
              <span className="text-foreground">Legacy Planning Benefits </span>
              <span style={{ color: "#D95D26" }}>for Employees</span>
            </h1>
          </div>
        </section>

        {/* Secondary Hero Section */}

        {/* Benefits Section */}
        <section
          ref={benefitsAnimation.elementRef}
          className="pt-2 md:pt-3 pb-16 md:pb-20 bg-white"
        >
          <div className="container mx-auto px-6 md:px-12">
            {/* Subheadline */}
            <p
              className={`text-base md:text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12 transition-all duration-700 delay-100 ${benefitsAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{
                fontFamily: "'Open Sans', 'Helvetica', sans-serif",
              }}
            >
              Unpreparedness is a hidden operational risk. Data shows that 75%
              of employees will not complete essential end-of-life planning
              without a structured framework.
            </p>

            {/* 2x2 Grid */}
            <div
              className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 transition-all duration-700 delay-200 ${benefitsAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              {/* Card 1 - Top Left */}
              <div
                className="bg-white rounded-lg p-6 md:p-8"
                style={{
                  border: "2px solid #D95D26",
                }}
              >
                <h3
                  className="text-xl md:text-2xl font-bold mb-3"
                  style={{
                    fontFamily:
                      "'Playfair Display', 'Merriweather', Georgia, serif",
                  }}
                >
                  5-7x ROI:
                </h3>
                <p
                  className="text-base text-muted-foreground"
                  style={{
                    fontFamily: "'Open Sans', 'Helvetica', sans-serif",
                  }}
                >
                  Our conservative financial modeling demonstrates significant
                  returns through crisis prevention.
                </p>
              </div>

              {/* Card 2 - Top Right */}
              <div
                className="bg-white rounded-lg p-6 md:p-8"
                style={{
                  border: "2px solid #D95D26",
                }}
              >
                <h3
                  className="text-xl md:text-2xl font-bold mb-3"
                  style={{
                    fontFamily:
                      "'Playfair Display', 'Merriweather', Georgia, serif",
                  }}
                >
                  Reduced Absenteeism:
                </h3>
                <p
                  className="text-base text-muted-foreground"
                  style={{
                    fontFamily: "'Open Sans', 'Helvetica', sans-serif",
                  }}
                >
                  By providing a pre-managed roadmap, we prevent the unplanned
                  downtime that occurs when a family is in chaos.
                </p>
              </div>

              {/* Card 3 - Bottom Left */}
              <div
                className="bg-white rounded-lg p-6 md:p-8"
                style={{
                  border: "2px solid #D95D26",
                }}
              >
                <h3
                  className="text-xl md:text-2xl font-bold mb-3"
                  style={{
                    fontFamily:
                      "'Playfair Display', 'Merriweather', Georgia, serif",
                  }}
                >
                  Activating Dormant Benefits:
                </h3>
                <p
                  className="text-base text-muted-foreground"
                  style={{
                    fontFamily: "'Open Sans', 'Helvetica', sans-serif",
                  }}
                >
                  We drive utilization of your existing benefits by providing
                  the project-based motivation for employees to finally use
                  them.
                </p>
              </div>

              {/* Card 4 - Bottom Right */}
              <div
                className="bg-white rounded-lg p-6 md:p-8"
                style={{
                  border: "2px solid #D95D26",
                }}
              >
                <h3
                  className="text-xl md:text-2xl font-bold mb-3"
                  style={{
                    fontFamily:
                      "'Playfair Display', 'Merriweather', Georgia, serif",
                  }}
                >
                  Competitive Differentiation:
                </h3>
                <p
                  className="text-base text-muted-foreground"
                  style={{
                    fontFamily: "'Open Sans', 'Helvetica', sans-serif",
                  }}
                >
                  92% of employees view this program as a competitive advantage
                  that shows you care for employers, demonstrating commitment to
                  whole-person wellness.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Resources/Tools Section */}
        <section
          ref={resourcesAnimation.elementRef}
          className="py-16 md:py-20"
          style={{
            backgroundColor: "#F5F5F5",
          }}
        >
          <div className="container mx-auto px-6 md:px-12">
            {/* Headline */}
            <h2
              className={`text-3xl md:text-4xl font-bold text-center mb-12 transition-all duration-700 ${resourcesAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{
                fontFamily:
                  "'Playfair Display', 'Merriweather', Georgia, serif",
                color: "#000",
              }}
            >
              Practical Tools for HR Teams
            </h2>

            {/* Cards Grid */}
            <div
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-700 delay-150 ${resourcesAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              {/* Card 1 */}
              <div className="bg-white rounded-2xl shadow-lg p-10 text-center flex flex-col">
                <h3
                  className="text-xl font-bold mb-4"
                  style={{
                    fontFamily:
                      "'Playfair Display', 'Merriweather', Georgia, serif",
                    color: "#0F1738",
                  }}
                >
                  Digital Continuity Planning
                </h3>
                <p
                  className="text-base text-muted-foreground mb-6 leading-relaxed flex-grow"
                  style={{
                    fontFamily: "'Open Sans', 'Helvetica', sans-serif",
                  }}
                >
                  Support staff with tools to organize legal, financial, and
                  digital assets in one secure place.
                </p>
                <Button
                  className="text-white px-6 py-1.5 text-base font-semibold rounded-full mx-auto"
                  style={{
                    fontFamily: "'Open Sans', 'Helvetica', sans-serif",
                    backgroundColor: "#0F1738",
                  }}
                  onClick={() => navigate("/solution#about-program")}
                >
                  Explore the Program
                </Button>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-2xl shadow-lg p-10 text-center flex flex-col">
                <h3
                  className="text-xl font-bold mb-4"
                  style={{
                    fontFamily:
                      "'Playfair Display', 'Merriweather', Georgia, serif",
                    color: "#0F1738",
                  }}
                >
                  Digital Asset Playbook
                </h3>
                <p
                  className="text-base text-muted-foreground mb-6 leading-relaxed flex-grow"
                  style={{
                    fontFamily: "'Open Sans', 'Helvetica', sans-serif",
                  }}
                >
                  An app-based guide for navigating transitions with data access
                  planning and clear instructions for designated contacts.
                </p>
                <Button
                  className="text-white px-6 py-1.5 text-base font-semibold rounded-full mx-auto"
                  style={{
                    fontFamily: "'Open Sans', 'Helvetica', sans-serif",
                    backgroundColor: "#0F1738",
                  }}
                  onClick={() => navigate("/resources#mobile-app")}
                >
                  View Playbook
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Roadmap Section */}
        <ImplementationRoadmapSection />

        {/* Insights Section - Split Layout */}
        <section
          ref={insightsAnimation.elementRef}
          className="py-16 md:py-20 bg-white"
        >
          <div className="container mx-auto px-6 md:px-12">
            {/* Section Headline */}
            <h2
              className={`text-3xl md:text-4xl font-bold text-center mb-12 transition-all duration-700 ${insightsAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{
                fontFamily:
                  "'Playfair Display', 'Merriweather', Georgia, serif",
                color: "#000",
              }}
            >
              Insights That Shape Our Work
            </h2>

            {/* Split Layout */}
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-700 delay-150 ${insightsAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              {/* Left Column - Image */}
              <div className="flex justify-center">
                <img
                  src={insightsPortrait}
                  alt="Professional woman holding tablet with floating badges for Peace of Mind Assessment, Legacy Map Strategy Session, and 1:1 support"
                  className="w-full max-w-lg h-auto"
                />
              </div>

              {/* Right Column - Text Content */}
              <div>
                {/* Lead Paragraph */}
                <p
                  className="text-xl md:text-2xl font-bold mb-6 leading-snug"
                  style={{
                    fontFamily: "'Open Sans', 'Helvetica', sans-serif",
                  }}
                >
                  Support employee well-being, reduce absenteeism, and build a
                  more resilient workforce with ENDevo.
                </p>

                {/* Body Text */}
                <p
                  className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed"
                  style={{
                    fontFamily: "'Open Sans', 'Helvetica', sans-serif",
                  }}
                >
                  ENDevo reduces workplace absenteeism and stress by supporting
                  employees with clarity and confidence during life's most
                  challenging moments. By integrating legacy readiness into your
                  wellness programs, you strengthen employee engagement, build
                  organizational resilience, and demonstrate genuine care for
                  your team's overall well-being, across the whole life-cycle.
                </p>

                {/* CTA Button - Ghost/Outline Style */}
                <Button
                  variant="outline"
                  className="px-6 py-1.5 text-base font-semibold rounded-full"
                  style={{
                    fontFamily: "'Open Sans', 'Helvetica', sans-serif",
                    borderColor: "#0F1738",
                    color: "#0F1738",
                    borderWidth: "2px",
                  }}
                  onClick={() => {
                    navigate("/company");
                    window.scrollTo(0, 0);
                  }}
                >
                  Learn More About Us →
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Success Metrics Section */}
        <section
          ref={metricsAnimation.elementRef}
          className="py-16 md:py-20 bg-muted/30"
        >
          <div className="container mx-auto px-6 md:px-12">
            {/* Headline */}
            <h2
              className={`text-3xl md:text-4xl font-bold text-center mb-12 transition-all duration-700 ${metricsAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{
                fontFamily:
                  "'Playfair Display', 'Merriweather', Georgia, serif",
              }}
            >
              <span
                style={{
                  color: "#D95D26",
                }}
              >
                Proven Results
              </span>{" "}
              <span
                style={{
                  color: "#000",
                }}
              >
                for Your Workforce
              </span>
            </h2>

            {/* 3-column Grid */}
            <div
              className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-700 delay-150 ${metricsAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              {/* Card 1 */}
              <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 text-center">
                <p
                  className="text-5xl md:text-6xl font-bold mb-4"
                  style={{
                    fontFamily:
                      "'Playfair Display', 'Merriweather', Georgia, serif",
                    color: "#0F1738",
                  }}
                >
                  92%
                </p>
                <p
                  className="text-lg font-bold mb-2"
                  style={{
                    fontFamily: "'Open Sans', 'Helvetica', sans-serif",
                    color: "#000",
                  }}
                >
                  Planning Clarity
                </p>
                <p
                  className="text-sm md:text-base"
                  style={{
                    fontFamily: "'Open Sans', 'Helvetica', sans-serif",
                    color: "#555555",
                  }}
                >
                  Moving employees from intending to plan to being fully
                  prepared.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 text-center">
                <p
                  className="text-5xl md:text-6xl font-bold mb-4"
                  style={{
                    fontFamily:
                      "'Playfair Display', 'Merriweather', Georgia, serif",
                    color: "#0F1738",
                  }}
                >
                  100%
                </p>
                <p
                  className="text-lg font-bold mb-2"
                  style={{
                    fontFamily: "'Open Sans', 'Helvetica', sans-serif",
                    color: "#000",
                  }}
                >
                  Promoter Score
                </p>
                <p
                  className="text-sm md:text-base"
                  style={{
                    fontFamily: "'Open Sans', 'Helvetica', sans-serif",
                    color: "#555555",
                  }}
                >
                  Participants report a Net Promoter Score (NPS) of 100, citing
                  massive reductions in stress and increased peace of mind.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 text-center">
                <p
                  className="text-5xl md:text-6xl font-bold mb-4"
                  style={{
                    fontFamily:
                      "'Playfair Display', 'Merriweather', Georgia, serif",
                    color: "#0F1738",
                  }}
                >
                  77%
                </p>
                <p
                  className="text-lg font-bold mb-2"
                  style={{
                    fontFamily: "'Open Sans', 'Helvetica', sans-serif",
                    color: "#000",
                  }}
                >
                  Statistically-significant outcomes
                </p>
                <p
                  className="text-sm md:text-base"
                  style={{
                    fontFamily: "'Open Sans', 'Helvetica', sans-serif",
                    color: "#555555",
                  }}
                >
                  Employee confidence in legacy-readiness more than doubled.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section - How It Works */}
        <section
          ref={processAnimation.elementRef}
          className="py-16 md:py-20 bg-white"
        >
          <div className="container mx-auto px-6 md:px-12">
            {/* Headline */}
            <h2
              className={`text-3xl md:text-4xl font-bold text-center mb-12 transition-all duration-700 ${processAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{
                fontFamily:
                  "'Playfair Display', 'Merriweather', Georgia, serif",
                color: "#000",
              }}
            >
              Your Path to Organizational Resilience Starts Here
            </h2>

            {/* Split Layout */}
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-700 delay-150 ${processAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              {/* Left Column - Steps */}
              <div className="space-y-8">
                {/* Step 1 */}
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg"
                    style={{
                      backgroundColor: "#EF6836",
                    }}
                  >
                    1
                  </div>
                  <p
                    className="text-base md:text-lg leading-relaxed"
                    style={{
                      fontFamily: "'Open Sans', 'Helvetica', sans-serif",
                      color: "#333",
                    }}
                  >
                    Provide employees with access to our Peace of Mind
                    Assessment to quickly identify their level of preparedness.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg"
                    style={{
                      backgroundColor: "#EF6836",
                    }}
                  >
                    2
                  </div>
                  <p
                    className="text-base md:text-lg leading-relaxed"
                    style={{
                      fontFamily: "'Open Sans', 'Helvetica', sans-serif",
                      color: "#333",
                    }}
                  >
                    Guide staff with AI-powered tools that help them organize
                    legal, financial, and digital assets in one secure place.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg"
                    style={{
                      backgroundColor: "#EF6836",
                    }}
                  >
                    3
                  </div>
                  <p
                    className="text-base md:text-lg leading-relaxed"
                    style={{
                      fontFamily: "'Open Sans', 'Helvetica', sans-serif",
                      color: "#333",
                    }}
                  >
                    Offer confidence and support that reduces stress, protects
                    well-being, and lowers the risk of extended absences.
                  </p>
                </div>

                {/* Step 4 */}
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg"
                    style={{
                      backgroundColor: "#EF6836",
                    }}
                  >
                    4
                  </div>
                  <p
                    className="text-base md:text-lg leading-relaxed"
                    style={{
                      fontFamily: "'Open Sans', 'Helvetica', sans-serif",
                      color: "#333",
                    }}
                  >
                    Strengthen continuity by ensuring employees can focus on
                    their work, even while navigating personal challenges.
                  </p>
                </div>
              </div>

              {/* Right Column - Image */}
              <div className="flex justify-center">
                <img
                  src={teamCollaboration}
                  alt="Diverse team of professionals high-fiving in a modern office"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          ref={ctaAnimation.elementRef}
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
                fontFamily:
                  "'Playfair Display', 'Merriweather', Georgia, serif",
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
      </main>
      <Footer />
    </div>
  );
};
export default WWSEmployers;
