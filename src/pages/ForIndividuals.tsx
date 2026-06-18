import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import IndividualsHeroSection from "@/components/IndividualsHeroSection";
// framework image replaced with CDN URL below
// wellnessPillars image replaced with CDN URL below
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
const WWSIndividuals = () => {
  const navigate = useNavigate();
  const individualsAnimation = useScrollAnimation();
  const statsAnimation = useScrollAnimation<HTMLElement>();
  const pathAnimation = useScrollAnimation<HTMLElement>();
  const barAnimation = useScrollAnimation<HTMLElement>();
  const [lineWidth, setLineWidth] = useState(0);
  const lineRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (lineRef.current) {
        const linePosition = lineRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Calculate progress based on scroll position
        const progress = Math.max(
          0,
          Math.min(100, ((windowHeight - linePosition) / windowHeight) * 100),
        );
        setLineWidth(progress);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="min-h-screen">
      <SEO
        title="Personal Legacy & End-of-Life Planning for Individuals"
        description="Plan with clarity and care. ENDevo helps individuals organize legal, financial, physical, and digital affairs so families don't carry the burden alone."
        canonical="/for-individuals"
      />
      <ResponsiveNavbar />
      <main className="pt-16">
        <IndividualsHeroSection />

        {/* If you don't prepare Section */}
        <section ref={statsAnimation.elementRef} className="py-20">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center space-y-12">
              <h2
                className={`text-3xl md:text-4xl font-bold text-black transition-all duration-1000 ${statsAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                If you don't <span className="text-brand-orange">prepare</span>,
                this is what happens…
              </h2>

              {/* Statistics */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card
                  className={`bg-white shadow-lg rounded-xl border-0 transition-all duration-1000 ${statsAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
                  style={{
                    transitionDelay: statsAnimation.isVisible ? "200ms" : "0ms",
                  }}
                >
                  <CardContent className="px-3 py-16 text-center space-y-4">
                    <p
                      className="text-8xl font-bold"
                      style={{
                        fontFamily: "Times New Roman, serif",
                        color: "#394161",
                      }}
                    >
                      67%
                    </p>
                    <p className="text-lg text-black">
                      67% of adults have no plan in place, leaving families to
                      make painful decisions alone.
                    </p>
                  </CardContent>
                </Card>

                <Card
                  className={`bg-white shadow-lg rounded-xl border-0 transition-all duration-1000 ${statsAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
                  style={{
                    transitionDelay: statsAnimation.isVisible ? "400ms" : "0ms",
                  }}
                >
                  <CardContent className="px-3 py-16 text-center space-y-4">
                    <p
                      className="text-8xl font-bold"
                      style={{
                        fontFamily: "Times New Roman, serif",
                        color: "#394161",
                      }}
                    >
                      420+
                    </p>
                    <p className="text-lg text-black">
                      Families spend 420+ hours sorting affairs when information
                      isn't organized.
                    </p>
                  </CardContent>
                </Card>

                <Card
                  className={`bg-white shadow-lg rounded-xl border-0 transition-all duration-1000 ${statsAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
                  style={{
                    transitionDelay: statsAnimation.isVisible ? "600ms" : "0ms",
                  }}
                >
                  <CardContent className="px-3 py-16 text-center space-y-4">
                    <p
                      className="text-8xl font-bold"
                      style={{
                        fontFamily: "Times New Roman, serif",
                        color: "#394161",
                      }}
                    >
                      30%
                    </p>
                    <p className="text-lg text-black">
                      30% of loved ones never access digital accounts, losing
                      photos, messages, and records forever.
                    </p>
                  </CardContent>
                </Card>

                <Card
                  className={`bg-white shadow-lg rounded-xl border-0 transition-all duration-1000 ${statsAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
                  style={{
                    transitionDelay: statsAnimation.isVisible ? "800ms" : "0ms",
                  }}
                >
                  <CardContent className="px-3 py-16 text-center space-y-4">
                    <p
                      className="text-8xl font-bold"
                      style={{
                        fontFamily: "Times New Roman, serif",
                        color: "#394161",
                      }}
                    >
                      $58B
                    </p>
                    <p className="text-lg text-black">
                      $58B in assets goes unclaimed because families didn't know
                      accounts or policies existed.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Legacy Planning for Individuals Section */}
        <section className="py-20 bg-background">
          <div className="container max-w-7xl mx-auto px-4">
            <div
              ref={individualsAnimation.elementRef}
              id="individuals"
              className="grid lg:grid-cols-2 gap-12 items-center scroll-mt-20"
            >
              {/* Left - Image */}
              <div
                className={`relative transition-all duration-1000 ${individualsAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                <img
                  src="https://assets.cdn.filesafe.space/f5ehsbHfdFg2UsHEIb49/media/699757e81817156924a4769d.jpg"
                  alt="Person working on laptop for legacy planning"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>

              {/* Right - Content */}
              <div
                className={`space-y-6 transition-all duration-1000 delay-200 ${individualsAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                <h1
                  className="text-3xl md:text-4xl font-bold text-foreground"
                  style={{ fontFamily: "'Times New Roman', serif" }}
                >
                  Legacy Planning for Individuals
                </h1>

                <p className="text-xl text-brand-orange font-semibold">
                  Simplify your journey with AI-powered guidance and
                  compassionate resources designed to give you peace of mind.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  ENDevo's AI-powered tools help you organize essential
                  documents, set reminders for important milestones, and provide
                  compassionate resources every step of the way. We remove the
                  stress and complexity from legacy planning, so you can focus
                  on what matters most: your family, your values, and your peace
                  of mind.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Comprehensive Framework Section */}
        <section id="framework" className="py-20 bg-background scroll-mt-20">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Comprehensive Framework
              </h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                Legacy planning isn't one-dimensional. We center your beliefs,
                then build around them with four key areas that make your plan
                complete.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Framework Graphic */}
              <div className="animate-fade-in">
                <img
                  src="https://assets.cdn.filesafe.space/f5ehsbHfdFg2UsHEIb49/media/699757e82a2f159e92fe3045.png"
                  alt="Comprehensive Framework - Your Beliefs at the center surrounded by Legal, Financial, Physical, and Digital areas"
                  className="w-full h-auto max-w-xl mx-auto"
                />
              </div>

              {/* Right side - Framework Cards */}
              <div className="space-y-4">
                <Card className="animate-fade-in hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <CardTitle className="mb-3 text-lg">Your Beliefs</CardTitle>
                    <p className="text-muted-foreground text-sm">
                      The foundation of every decision, your values, wishes, and
                      priorities.
                    </p>
                  </CardContent>
                </Card>

                <Card
                  className="animate-fade-in hover:shadow-lg transition-shadow duration-300"
                  style={{ animationDelay: "0.1s" }}
                >
                  <CardContent className="p-6">
                    <CardTitle className="mb-3 text-lg">Legal</CardTitle>
                    <p className="text-muted-foreground text-sm">
                      Protect your rights and ensure your documents reflect your
                      intentions.
                    </p>
                  </CardContent>
                </Card>

                <Card
                  className="animate-fade-in hover:shadow-lg transition-shadow duration-300"
                  style={{ animationDelay: "0.2s" }}
                >
                  <CardContent className="p-6">
                    <CardTitle className="mb-3 text-lg">Financial</CardTitle>
                    <p className="text-muted-foreground text-sm">
                      Secure your assets and provide clarity for future
                      generations.
                    </p>
                  </CardContent>
                </Card>

                <Card
                  className="animate-fade-in hover:shadow-lg transition-shadow duration-300"
                  style={{ animationDelay: "0.3s" }}
                >
                  <CardContent className="p-6">
                    <CardTitle className="mb-3 text-lg">Physical</CardTitle>
                    <p className="text-muted-foreground text-sm">
                      Address care, health, and personal needs with confidence.
                    </p>
                  </CardContent>
                </Card>

                <Card
                  className="animate-fade-in hover:shadow-lg transition-shadow duration-300"
                  style={{ animationDelay: "0.4s" }}
                >
                  <CardContent className="p-6">
                    <CardTitle className="mb-3 text-lg">Digital</CardTitle>
                    <p className="text-muted-foreground text-sm">
                      Organize and safeguard your online presence and digital
                      assets.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Core Pillars of Wellness Section */}
        <section className="py-12 px-4">
          <div className="container max-w-7xl mx-auto">
            <div className="grid grid-cols-12 gap-8 items-center">
              {/* Title - 25% */}
              <div className="col-span-12 md:col-span-3 space-y-4">
                <h2
                  className="text-3xl md:text-4xl font-bold text-foreground"
                  style={{ fontFamily: "serif" }}
                >
                  Our Core Pillars of Wellness
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Our Core Pillars of Wellness focus on nurturing every aspect
                  of well-being. They bring together the physical, emotional,
                  financial, and professional sides of life to help individuals
                  find balance, clarity, and long-term fulfillment in both their
                  personal and work journeys.
                </p>
              </div>

              {/* Image - 75% */}
              <div className="col-span-12 md:col-span-9">
                <img
                  src="https://assets.cdn.filesafe.space/f5ehsbHfdFg2UsHEIb49/media/699757e820c035105a0b9a1b.png"
                  alt="Five Core Pillars of Wellness: Physical Health, Emotional Well-Being, Financial Readiness, Career Growth and Purpose, and Community and Connection"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Empowering You to Take Control Section */}
        <section
          className="py-20 scroll-mt-20"
          style={{ backgroundColor: "#f6f7f8" }}
        >
          <div className="container max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-5 gap-12 items-center">
              {/* Left side - Text (40%) */}
              <div className="lg:col-span-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Empowering You to Take Control
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Endevo empowers organizations to safeguard their people,
                  culture, and future through AI-driven legacy readiness and
                  digital preparedness tools.
                </p>
                <Button
                  onClick={() => {
                    navigate("/resources");
                    window.scrollTo(0, 0);
                  }}
                  className="bg-brand-orange hover:bg-brand-orange/90 text-white px-6 py-1.5 text-base font-semibold rounded-full"
                  style={{ fontFamily: "'Open Sans', 'Helvetica', sans-serif" }}
                >
                  Explore Resources
                </Button>
              </div>

              {/* Right side - Image (60%) */}
              <div className="lg:col-span-3 flex justify-center">
                <img
                  src="https://assets.cdn.filesafe.space/f5ehsbHfdFg2UsHEIb49/media/699757e8f83453dcc232c361.png"
                  alt="Empowering You to Take Control - Educational App, Community Support, Workshops, and Tools & Resources"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Your Path to Peace of Mind Section */}
        <section ref={pathAnimation.elementRef} className="py-20 bg-background">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center space-y-12">
              <h2
                className={`text-3xl md:text-4xl font-bold text-foreground mb-16 transition-all duration-1000 ${pathAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                Your Path to Peace of Mind Starts Here
              </h2>

              {/* Two Column Layout: Steps and Image */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left - Step Blocks */}
                <div
                  className={`grid grid-cols-1 gap-12 transition-all duration-1000 ${pathAnimation.isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
                  style={{
                    transitionDelay: pathAnimation.isVisible ? "200ms" : "0ms",
                  }}
                >
                  {/* Step 1 */}
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-full bg-brand-orange text-white flex items-center justify-center text-2xl font-bold flex-shrink-0">
                      1
                    </div>
                    <p className="text-lg text-foreground leading-relaxed text-left">
                      Begin with the Peace of Mind Assessment, a quick check-up
                      that highlights gaps and gives you a clear readiness
                      score.
                    </p>
                  </div>

                  {/* Step 2 */}
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-full bg-brand-orange text-white flex items-center justify-center text-2xl font-bold flex-shrink-0">
                      2
                    </div>
                    <p className="text-lg text-foreground leading-relaxed text-left">
                      Use our AI-driven platform to gather your most important
                      information in one place.
                    </p>
                  </div>

                  {/* Step 3 */}
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-full bg-brand-orange text-white flex items-center justify-center text-2xl font-bold flex-shrink-0">
                      3
                    </div>
                    <p className="text-lg text-foreground leading-relaxed text-left">
                      Gain access to guided support, including one-on-one
                      sessions with ENDevo leadership, to walk you through your
                      options and help you understand your next steps.
                    </p>
                  </div>

                  {/* Step 4 */}
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-full bg-brand-orange text-white flex items-center justify-center text-2xl font-bold flex-shrink-0">
                      4
                    </div>
                    <p className="text-lg text-foreground leading-relaxed text-left">
                      Securely share your plan with trusted family members or
                      designated contacts so they have what they need when it
                      matters most.
                    </p>
                  </div>
                </div>

                {/* Right - Image */}
                <div
                  className={`relative transition-all duration-1000 ${pathAnimation.isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
                  style={{
                    transitionDelay: pathAnimation.isVisible ? "400ms" : "0ms",
                  }}
                >
                  <img
                    src="https://assets.cdn.filesafe.space/f5ehsbHfdFg2UsHEIb49/media/699757e8f83453588332c354.jpg"
                    alt="Professional consultation meeting"
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div
              className={`mt-12 text-center transition-all duration-1000 ${pathAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{
                transitionDelay: pathAnimation.isVisible ? "600ms" : "0ms",
              }}
            >
              <Button
                onClick={() => navigate("/contact")}
                className="bg-brand-orange hover:bg-brand-orange/90 text-white px-6 py-1.5 text-base font-semibold rounded-full"
                style={{ fontFamily: "'Open Sans', 'Helvetica', sans-serif" }}
              >
                Start Your Journey Today
              </Button>
            </div>
          </div>
        </section>

        {/* White Bar Section with Navy Blue Background */}
        <section
          ref={barAnimation.elementRef}
          className="py-20 overflow-hidden"
        >
          <div
            className={`shadow-2xl px-8 md:px-16 py-12 transition-all ease-out ${barAnimation.isVisible ? "opacity-100" : "opacity-0"}`}
            style={{
              backgroundColor: "#08123A",
              borderTopRightRadius: "100px",
              borderBottomRightRadius: "100px",
              width: barAnimation.isVisible ? "85%" : "0%",
              transitionDuration: "2000ms",
              transitionProperty: "width, opacity",
            }}
          >
            <p
              className={`text-lg md:text-xl text-white leading-relaxed transition-opacity duration-1000 ${barAnimation.isVisible ? "opacity-100" : "opacity-0"}`}
              style={{
                transitionDelay: barAnimation.isVisible ? "800ms" : "0ms",
              }}
            >
              With ENDevo, you are not just supporting individual employees. You
              are creating a healthier workplace culture, protecting business
              continuity, and showing that your organization values its people
              in the moments that matter most.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default WWSIndividuals;
