import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import employersHero from "@/assets/employers-hero-new.png";
import employerMeeting from "@/assets/employer-meeting.jpg";
import employerResilience from "@/assets/employer-resilience.jpg";

const WWSEmployers = () => {
  const navigate = useNavigate();
  const heroAnimation = useScrollAnimation();
  const statsAnimation = useScrollAnimation();
  const solutionsAnimation = useScrollAnimation();
  const benefitsAnimation = useScrollAnimation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <ResponsiveNavbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-[hsl(220,20%,15%)] via-[hsl(220,20%,20%)] to-[hsl(220,20%,15%)] overflow-hidden">
          <div className="absolute inset-0 bg-black/40" />
          <div className="container max-w-7xl mx-auto px-4 py-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div
                ref={heroAnimation.elementRef as React.RefObject<HTMLDivElement>}
                className={`space-y-6 transition-all duration-1000 ${
                  heroAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Protect Your People.
                  <br />
                  <span className="text-brand-orange">Strengthen Your Business.</span>
                </h1>
                <p className="text-xl text-white/90 leading-relaxed max-w-xl">
                  ENDevo helps employers support employees through life's most challenging moments while safeguarding business continuity and reducing organizational risk.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button
                    onClick={() => navigate("/contact")}
                    className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-3 text-lg font-semibold rounded-full"
                    style={{ fontFamily: "'Open Sans', 'Helvetica', sans-serif" }}
                  >
                    Schedule a Demo
                  </Button>
                </div>
              </div>
              <div
                className={`transition-all duration-1000 delay-300 ${
                  heroAnimation.isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                }`}
              >
                <img
                  src={employersHero}
                  alt="Team collaboration"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* The Challenge Section */}
        <section ref={statsAnimation.elementRef as React.RefObject<HTMLElement>} className="py-20 bg-background">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center space-y-12">
              <h2
                className={`text-3xl md:text-4xl font-bold text-foreground transition-all duration-1000 ${
                  statsAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                The <span className="text-brand-orange">Hidden Cost</span> of Employee Unpreparedness
              </h2>

              {/* Statistics */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card
                  className={`bg-white shadow-lg rounded-xl border-0 transition-all duration-1000 ${
                    statsAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                  }`}
                  style={{ transitionDelay: statsAnimation.isVisible ? "200ms" : "0ms" }}
                >
                  <CardContent className="px-3 py-16 text-center space-y-4">
                    <p
                      className="text-7xl font-bold"
                      style={{ fontFamily: "Times New Roman, serif", color: "#394161" }}
                    >
                      60%
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      of employees have experienced grief affecting their work performance
                    </p>
                  </CardContent>
                </Card>

                <Card
                  className={`bg-white shadow-lg rounded-xl border-0 transition-all duration-1000 ${
                    statsAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                  }`}
                  style={{ transitionDelay: statsAnimation.isVisible ? "400ms" : "0ms" }}
                >
                  <CardContent className="px-3 py-16 text-center space-y-4">
                    <p
                      className="text-7xl font-bold"
                      style={{ fontFamily: "Times New Roman, serif", color: "#394161" }}
                    >
                      $75B
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      annual cost of grief-related productivity loss in the U.S.
                    </p>
                  </CardContent>
                </Card>

                <Card
                  className={`bg-white shadow-lg rounded-xl border-0 transition-all duration-1000 ${
                    statsAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                  }`}
                  style={{ transitionDelay: statsAnimation.isVisible ? "600ms" : "0ms" }}
                >
                  <CardContent className="px-3 py-16 text-center space-y-4">
                    <p
                      className="text-7xl font-bold"
                      style={{ fontFamily: "Times New Roman, serif", color: "#394161" }}
                    >
                      30%
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      of employees consider leaving after a personal loss due to lack of support
                    </p>
                  </CardContent>
                </Card>

                <Card
                  className={`bg-white shadow-lg rounded-xl border-0 transition-all duration-1000 ${
                    statsAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                  }`}
                  style={{ transitionDelay: statsAnimation.isVisible ? "800ms" : "0ms" }}
                >
                  <CardContent className="px-3 py-16 text-center space-y-4">
                    <p
                      className="text-7xl font-bold"
                      style={{ fontFamily: "Times New Roman, serif", color: "#394161" }}
                    >
                      85%
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      of HR leaders say they lack adequate resources for end-of-life support
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 bg-muted/30">
          <div className="container max-w-7xl mx-auto px-4">
            <div
              ref={solutionsAnimation.elementRef as React.RefObject<HTMLDivElement>}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Left - Image */}
              <div
                className={`relative transition-all duration-1000 ${
                  solutionsAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <img
                  src={employerMeeting}
                  alt="HR team meeting"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>

              {/* Right - Content */}
              <div
                className={`space-y-6 transition-all duration-1000 delay-200 ${
                  solutionsAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Comprehensive HR & EAP Solutions
                </h2>

                <p className="text-xl text-brand-orange font-semibold">
                  Support your employees before, during, and after life's most difficult transitions.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  ENDevo provides a complete suite of tools and resources designed specifically for HR teams and Employee Assistance Programs. From proactive planning workshops to crisis response support, we help you build a culture of care that protects both your people and your business.
                </p>

                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-brand-orange font-bold">✓</span>
                    <span>Turnkey employee wellness programs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-orange font-bold">✓</span>
                    <span>On-demand grief and bereavement resources</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-orange font-bold">✓</span>
                    <span>Manager training and support tools</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-orange font-bold">✓</span>
                    <span>Business continuity planning resources</span>
                  </li>
                </ul>

                <div className="mt-8">
                  <Button
                    onClick={() => navigate("/contact")}
                    variant="default"
                    className="bg-brand-orange hover:bg-brand-orange/90 text-white px-6 py-1.5 text-base font-semibold rounded-full"
                    style={{ fontFamily: "'Open Sans', 'Helvetica', sans-serif" }}
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-background">
          <div className="container max-w-7xl mx-auto px-4">
            <div
              ref={benefitsAnimation.elementRef as React.RefObject<HTMLDivElement>}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Left - Content */}
              <div
                className={`space-y-6 transition-all duration-1000 ${
                  benefitsAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Build Organizational Resilience
                </h2>

                <p className="text-xl text-brand-orange font-semibold">
                  Transform how your organization handles life transitions.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  When employees feel supported during their most vulnerable moments, they become more engaged, loyal, and productive. ENDevo helps you create a workplace culture that attracts and retains top talent while reducing the hidden costs of unpreparedness.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="bg-muted/50 rounded-lg p-4 text-center">
                    <p className="text-2xl font-bold text-brand-orange">↓ 40%</p>
                    <p className="text-sm text-muted-foreground">Reduced absenteeism</p>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4 text-center">
                    <p className="text-2xl font-bold text-brand-orange">↑ 65%</p>
                    <p className="text-sm text-muted-foreground">Employee satisfaction</p>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4 text-center">
                    <p className="text-2xl font-bold text-brand-orange">↓ 25%</p>
                    <p className="text-sm text-muted-foreground">Turnover costs</p>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4 text-center">
                    <p className="text-2xl font-bold text-brand-orange">↑ 80%</p>
                    <p className="text-sm text-muted-foreground">Manager confidence</p>
                  </div>
                </div>

                <div className="mt-8">
                  <Button
                    onClick={() => navigate("/contact")}
                    variant="default"
                    className="bg-brand-orange hover:bg-brand-orange/90 text-white px-6 py-1.5 text-base font-semibold rounded-full"
                    style={{ fontFamily: "'Open Sans', 'Helvetica', sans-serif" }}
                  >
                    Schedule a Consultation
                  </Button>
                </div>
              </div>

              {/* Right - Image */}
              <div
                className={`relative transition-all duration-1000 delay-200 ${
                  benefitsAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <img
                  src={employerResilience}
                  alt="Team building resilience"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-[hsl(220,20%,15%)] via-[hsl(220,20%,20%)] to-[hsl(220,20%,15%)]">
          <div className="container max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Support Your Team?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Join forward-thinking organizations that are redefining employee support for life's most challenging moments.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                onClick={() => navigate("/contact")}
                className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-3 text-lg font-semibold rounded-full"
                style={{ fontFamily: "'Open Sans', 'Helvetica', sans-serif" }}
              >
                Get Started Today
              </Button>
              <Button
                onClick={() => navigate("/resources")}
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg font-semibold rounded-full"
                style={{ fontFamily: "'Open Sans', 'Helvetica', sans-serif" }}
              >
                Explore Resources
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
