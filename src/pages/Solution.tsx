import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import heroBackground from "@/assets/solution-hero-bg.jpg";
import holisticFramework from "@/assets/holistic-framework.png";
import threeStepProcess from "@/assets/three-step-process.jpg";
import forCompanies from "@/assets/for-companies.jpg";
import forEmployees from "@/assets/for-employees.jpg";
import hrEapPrograms from "@/assets/hr-eap-programs.jpg";
import digitalLegacy from "@/assets/digital-legacy.jpg";
import workshopsAssessments from "@/assets/workshops-assessments.jpg";
import peaceMindAssessment from "@/assets/peace-mind-assessment.jpg";
import empowering from "@/assets/empowering-new.png";
import framework from "@/assets/4-domains.png";
import hrEapIcon from "@/assets/hr-eap-programs.png";
import empoweringControlGraphic from "@/assets/empowering-control-graphic.png";

import ToolsForEmployersSection from "@/components/ToolsForEmployersSection";
import ProcessSection from "@/components/ProcessSection";
import DifferentiatorSection from "@/components/DifferentiatorSection";
import employeeWellnessHero from "@/assets/employee-wellness-hero-bg.jpg";
import wellnessPillars from "@/assets/wellness-pillars.png";


const Solution = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen">
      <ResponsiveNavbar />
      
      {/* Employee Wellness Hero Section */}
      <section 
        ref={elementRef as any} 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: `url('${employeeWellnessHero}')` }}
      >
        <div className="relative z-10 container max-w-4xl mx-auto px-4 text-center">
          <h1 
            className={`font-bold mb-6 transition-all duration-1000 ease-out text-4xl md:text-5xl lg:text-6xl text-white ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} 
            style={{ fontFamily: 'serif', transitionDelay: isVisible ? '0.2s' : '0s' }}
          >
            Empowering Employees to Thrive in Work, Life, and Legacy
          </h1>
          
          <p 
            className={`text-lg md:text-xl mb-12 leading-relaxed transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} 
            style={{ color: '#e5e7eb', transitionDelay: isVisible ? '0.4s' : '0s' }}
          >
            Our Employee Wellness Program helps individuals find balance, build resilience, and prepare for life's transitions because a strong legacy starts with a healthy, fulfilled you.
          </p>
          
          <div 
            className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} 
            style={{ transitionDelay: isVisible ? '0.6s' : '0s' }}
          >
            <a href="/contact">
              <button 
                className="bg-[#002147] hover:bg-[#003366] text-white font-semibold px-6 py-1.5 rounded-full text-base shadow-lg hover:shadow-2xl transition-all duration-300" 
                style={{ fontFamily: "'Open Sans', 'Helvetica', sans-serif" }}
              >
                Start the Program
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* About the Program and Why It Matters Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className={`container max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <div className="grid md:grid-cols-2 gap-8">
            {/* About the Program Card */}
            <Card className={`shadow-lg transition-all duration-[1000ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.1s' }}>
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-bold text-foreground text-center" style={{ fontFamily: 'serif' }}>
                  About the Program
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                  <p>
                    The Legacy Readiness Employee Wellness Program is built around one simple truth: you cannot build a lasting legacy without caring for yourself first.
                  </p>
                  <p>
                    We provide a holistic approach to wellness that supports employees physically, emotionally, and financially. Whether it is improving daily habits, navigating career changes, or preparing for major life events, our goal is to empower you to show up as your best self, today and in the future.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Why It Matters Card */}
            <Card className={`shadow-lg transition-all duration-[1000ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.3s' }}>
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-bold text-foreground text-center" style={{ fontFamily: 'serif' }}>
                  Why It Matters
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                  <p>
                    When employees are supported as whole individuals, they become more focused, motivated, and inspired. Our program strengthens workplace culture, reduces burnout, and helps teams create meaningful impact in their careers, families, and communities.
                  </p>
                  <p>
                    Legacy readiness is more than preparing for what is next; it is about living well right now.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Pillars of Wellness Section */}
      <section className="py-12 px-4">
        <div className="container max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-8 items-center">
            {/* Title - 25% */}
            <div className="col-span-12 md:col-span-3 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground" style={{ fontFamily: 'serif' }}>
                Our Core Pillars of Wellness
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Our Core Pillars of Wellness focus on nurturing every aspect of well-being. They bring together the physical, emotional, financial, and professional sides of life to help individuals find balance, clarity, and long-term fulfillment in both their personal and work journeys.
              </p>
            </div>
            
            {/* Image - 75% */}
            <div className="col-span-12 md:col-span-9">
              <img 
                src={wellnessPillars} 
                alt="Five Core Pillars of Wellness: Physical Health, Emotional Well-Being, Financial Readiness, Career Growth and Purpose, and Community and Connection" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Empowering You to Take Control Section */}
      <section id="process" className="py-20 scroll-mt-20" style={{ backgroundColor: '#f6f7f8' }}>
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Left side - Text (40%) */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Empowering You to Take Control</h2>
              <p className="text-lg text-muted-foreground">
                Endevo empowers organizations to safeguard their people, culture, and future through AI-driven legacy readiness and digital preparedness tools.
              </p>
            </div>
            
            {/* Right side - Image (60%) */}
            <div className="lg:col-span-3 flex justify-center">
              <img 
                src={empoweringControlGraphic} 
                alt="Empowering You to Take Control - Educational App, Community Support, Workshops, and Tools & Resources" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <ProcessSection />

      {/* Tools for Employers & Teams Section */}
      <ToolsForEmployersSection />

      {/* ENDevo's Differentiator Section */}
      <DifferentiatorSection />

      <Footer />
    </div>
  );
};

export default Solution;