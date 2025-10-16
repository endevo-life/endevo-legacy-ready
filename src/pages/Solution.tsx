import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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
import ServiceProvidersSection from "@/components/ServiceProvidersSection";


const Solution = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen">
      <ResponsiveNavbar />
      
      {/* Hero Section */}
      <section 
        className="min-h-screen bg-cover bg-center bg-no-repeat relative flex items-end"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container max-w-7xl mx-auto px-4 pb-20 relative z-10">
          <div 
            ref={elementRef as any}
            className={`max-w-2xl transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Enterprise Solutions for Legacy Readiness & Digital Preparedness
            </h1>
            <p className="text-xl text-white/90">
              Endevo empowers organizations to safeguard their people, culture, and future through AI-driven legacy readiness and digital preparedness tools.
            </p>
          </div>
        </div>
      </section>

      {/* Empowering You to Take Control Section */}
      <section id="process" className="py-20 bg-gray-50 scroll-mt-20">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Empowering You to Take Control</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Legacy planning doesn't have to be overwhelming. We empower families, employees, and employers with simple, supportive resources designed to guide every step of the way.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="animate-fade-in hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <CardTitle className="mb-3 text-lg">Educational App</CardTitle>
                  <p className="text-muted-foreground text-sm">
                    Interactive learning made easy by our app that breaks down complex legacy planning into practical, everyday steps.
                  </p>
                </CardContent>
              </Card>

              <Card className="animate-fade-in hover:shadow-lg transition-shadow duration-300" style={{ animationDelay: '0.1s' }}>
                <CardContent className="p-6">
                  <CardTitle className="mb-3 text-lg">Community Support</CardTitle>
                  <p className="text-muted-foreground text-sm">
                    You're not alone. Connect with peers and experts in a compassionate network built to share stories, guidance, and encouragement.
                  </p>
                </CardContent>
              </Card>

              <Card className="animate-fade-in hover:shadow-lg transition-shadow duration-300" style={{ animationDelay: '0.2s' }}>
                <CardContent className="p-6">
                  <CardTitle className="mb-3 text-lg">Workshops</CardTitle>
                  <p className="text-muted-foreground text-sm">
                    Hands-on sessions designed to demystify legacy planning, blending technology with human guidance to make tough topics approachable.
                  </p>
                </CardContent>
              </Card>

              <Card className="animate-fade-in hover:shadow-lg transition-shadow duration-300" style={{ animationDelay: '0.3s' }}>
                <CardContent className="p-6">
                  <CardTitle className="mb-3 text-lg">Tools & Resources</CardTitle>
                  <p className="text-muted-foreground text-sm">
                    A full suite of practical tools, templates, and guides that turn uncertainty into clear, actionable next steps.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            {/* Right side - Graphic */}
            <div className="animate-fade-in">
              <img 
                src={empowering} 
                alt="Empowering You to Take Control - Educational App, Community Support, Workshops, and Tools & Resources" 
                className="w-full h-auto max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Comprehensive Framework Section */}
      <section id="framework" className="py-20 bg-background scroll-mt-20">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Comprehensive Framework</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Legacy planning isn't one-dimensional. We center your beliefs, then build around them with four key areas that make your plan complete.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Framework Graphic */}
            <div className="animate-fade-in">
              <img 
                src={framework} 
                alt="Comprehensive Framework - Your Beliefs at the center surrounded by Legal, Financial, Physical, and Digital areas" 
                className="w-full h-auto max-w-md mx-auto"
              />
            </div>
            
            {/* Right side - Framework Cards */}
            <div className="space-y-4">
              <Card className="animate-fade-in hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <CardTitle className="mb-3 text-lg">Your Beliefs</CardTitle>
                  <p className="text-muted-foreground text-sm">
                    The foundation of every decision, your values, wishes, and priorities.
                  </p>
                </CardContent>
              </Card>

              <Card className="animate-fade-in hover:shadow-lg transition-shadow duration-300" style={{ animationDelay: '0.1s' }}>
                <CardContent className="p-6">
                  <CardTitle className="mb-3 text-lg">Legal</CardTitle>
                  <p className="text-muted-foreground text-sm">
                    Protect your rights and ensure your documents reflect your intentions.
                  </p>
                </CardContent>
              </Card>

              <Card className="animate-fade-in hover:shadow-lg transition-shadow duration-300" style={{ animationDelay: '0.2s' }}>
                <CardContent className="p-6">
                  <CardTitle className="mb-3 text-lg">Financial</CardTitle>
                  <p className="text-muted-foreground text-sm">
                    Secure your assets and provide clarity for future generations.
                  </p>
                </CardContent>
              </Card>

              <Card className="animate-fade-in hover:shadow-lg transition-shadow duration-300" style={{ animationDelay: '0.3s' }}>
                <CardContent className="p-6">
                  <CardTitle className="mb-3 text-lg">Physical</CardTitle>
                  <p className="text-muted-foreground text-sm">
                    Address care, health, and personal needs with confidence.
                  </p>
                </CardContent>
              </Card>

              <Card className="animate-fade-in hover:shadow-lg transition-shadow duration-300" style={{ animationDelay: '0.4s' }}>
                <CardContent className="p-6">
                  <CardTitle className="mb-3 text-lg">Digital</CardTitle>
                  <p className="text-muted-foreground text-sm">
                    Organize and safeguard your online presence and digital assets.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service Providers Section */}
      <ServiceProvidersSection />

      {/* Our Edge: Where AI Meets Empathy Section */}
      <section id="for-companies" className="py-6 bg-background scroll-mt-20">
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
      <Footer />
    </div>
  );
};

export default Solution;