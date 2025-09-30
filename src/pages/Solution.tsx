import Header from "@/components/Header";
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
import empowering from "@/assets/empowering.png";
import framework from "@/assets/framework.png";
import hrEapIcon from "@/assets/hr-eap-programs.png";
import ServiceProvidersSection from "@/components/ServiceProvidersSection";


const Solution = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen">
      <Header />
      
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

      {/* How It Works Section */}
      <section className="py-20 bg-background">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How It Works</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Step 1 */}
            <div className="bg-card rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
              <div className="w-16 h-16 bg-slate-800 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-bold mb-4">Discover</h3>
              <p className="text-muted-foreground">Take the Peace of Mind Assessment.</p>
            </div>

            {/* Step 2 */}
            <div className="bg-card rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
              <div className="w-16 h-16 bg-slate-800 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-bold mb-4">Plan</h3>
              <p className="text-muted-foreground">Use our AI-driven platform to organize legal, financial, and digital assets.</p>
            </div>

            {/* Step 3 */}
            <div className="bg-card rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
              <div className="w-16 h-16 bg-slate-800 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-bold mb-4">Secure & Share</h3>
              <p className="text-muted-foreground">Ensure your family and organization can act with clarity when it matters most.</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg rounded-full">
              Start Your Readiness Journey
            </Button>
          </div>
        </div>
      </section>

      {/* Empowering You to Take Control Section */}
      <section className="py-20 bg-muted/50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Empowering You to Take Control</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Legacy planning doesn't have to be overwhelming. We empower families, employees, and employers with simple, supportive resources designed to guide every step of the way.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Graphic */}
            <div className="animate-fade-in">
              <img 
                src={empowering} 
                alt="Empowering You to Take Control - Educational App, Community Support, Workshops, and Tools & Resources" 
                className="w-full h-auto max-w-md mx-auto"
              />
            </div>
            
            {/* Right side - Feature Cards */}
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
          </div>
        </div>
      </section>

      {/* Our Comprehensive Framework Section */}
      <section className="py-20 bg-background">
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

      {/* Core Solutions Section */}
      <section id="core-solutions" className="py-20 bg-muted/50">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Core Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="animate-fade-in hover-scale">
              <CardHeader className="p-0">
                <img 
                  src={hrEapPrograms} 
                  alt="HR/EAP Programs" 
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="mb-3">HR/EAP Programs</CardTitle>
                <p className="text-muted-foreground">Reduce risk while improving workplace well-being.</p>
              </CardContent>
            </Card>

            <Card className="animate-fade-in hover-scale" style={{ animationDelay: '0.2s' }}>
              <CardHeader className="p-0">
                <img 
                  src={digitalLegacy} 
                  alt="Digital Legacy Protection" 
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="mb-3">Digital Legacy Protection</CardTitle>
                <p className="text-muted-foreground">Safeguard critical online access points</p>
              </CardContent>
            </Card>

            <Card className="animate-fade-in hover-scale" style={{ animationDelay: '0.4s' }}>
              <CardHeader className="p-0">
                <img 
                  src={workshopsAssessments} 
                  alt="Workshops & Assessments" 
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="mb-3">Workshops & Assessments</CardTitle>
                <p className="text-muted-foreground">Engage teams with tailored readiness education.</p>
              </CardContent>
            </Card>

            <Card className="animate-fade-in hover-scale" style={{ animationDelay: '0.6s' }}>
              <CardHeader className="p-0">
                <img 
                  src={peaceMindAssessment} 
                  alt="Peace of Mind Assessment" 
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="mb-3">Peace of Mind Assessment</CardTitle>
                <p className="text-muted-foreground">Identify gaps before they become crises</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* HR & Employee Wellness Section */}
      <section id="hr-wellness" className="py-20 bg-background">
        <div className="container max-w-7xl mx-auto px-4">
          {/* Top Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              For Companies: HR & Employee Wellness
            </h2>
            <h3 className="text-xl md:text-2xl text-brand-orange font-semibold mb-6">
              A Smarter Way to Support Your Team
            </h3>
            <p className="text-muted-foreground text-lg max-w-4xl mx-auto leading-relaxed">
              When employees aren't prepared for life's inevitable transitions, workplaces feel the impact—stress, absenteeism, and lost productivity. ENDevo equips organizations with tools, guidance, and resources that help employees plan ahead, fostering resilience at work and at home.
            </p>
          </div>

          {/* Middle Section - Two Boxes */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Core Features Box */}
            <div className="bg-card p-8 rounded-lg shadow-md border">
              <h3 className="text-xl font-bold text-foreground mb-6">Core Features:</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-brand-orange mr-2">•</span>
                  <span><strong>All-in-One Platform:</strong> Legal, financial, and digital readiness in one place.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-orange mr-2">•</span>
                  <span><strong>Guided Support:</strong> AI-powered tools and workshops simplify complex steps.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-orange mr-2">•</span>
                  <span><strong>Workplace Integration:</strong> Scalable for HR and EAP programs, easing administrative burden.</span>
                </li>
              </ul>
            </div>

            {/* Benefits Box */}
            <div className="bg-card p-8 rounded-lg shadow-md border">
              <h3 className="text-xl font-bold text-foreground mb-6">Benefits:</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-brand-orange mr-2">•</span>
                  <span>Reduce employee stress and mental health strain.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-orange mr-2">•</span>
                  <span>Protect organizational continuity and productivity.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-orange mr-2">•</span>
                  <span>Strengthen workplace resilience and loyalty.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Lower Section - Our Differentiator */}
          <div className="text-center mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-8">Our Differentiator</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-5xl mx-auto">
              <div className="flex-1">
                <ol className="text-left space-y-3 text-muted-foreground text-lg">
                  <li className="flex items-start">
                    <span className="text-brand-orange font-bold mr-3">1.</span>
                    <span>Corporate HR EAP focus</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-orange font-bold mr-3">2.</span>
                    <span>Empathetic AI guidance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-orange font-bold mr-3">3.</span>
                    <span>Unified offerings across legal, financial, physical, and digital needs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-orange font-bold mr-3">4.</span>
                    <span>Marketplace integration with trusted providers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-orange font-bold mr-3">5.</span>
                    <span>Human-centered workshops that demystify planning</span>
                  </li>
                </ol>
              </div>
              <div className="flex justify-center md:justify-end">
                <img 
                  src={hrEapIcon} 
                  alt="HR & EAP Wellness Programs" 
                  className="w-36 h-36 rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Bottom Area */}
          <div className="text-center">
            <button className="bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors hover-scale">
              Start a Pilot
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Solution;