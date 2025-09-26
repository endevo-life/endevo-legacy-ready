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

      {/* Our Holistic Framework Section */}
      <section id="framework" className="py-20 bg-background">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Holistic Framework</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img 
                src={holisticFramework} 
                alt="Holistic Framework Illustration" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg border animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <h3 className="text-xl font-bold mb-2">Digital</h3>
                <p className="text-muted-foreground">Protect online accounts, files, and identity</p>
              </div>
              <div className="bg-card p-6 rounded-lg border animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <h3 className="text-xl font-bold mb-2">Legal</h3>
                <p className="text-muted-foreground">Secure wills, directives, and power of attorney</p>
              </div>
              <div className="bg-card p-6 rounded-lg border animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <h3 className="text-xl font-bold mb-2">Financial</h3>
                <p className="text-muted-foreground">Organize assets, insurance, and beneficiaries</p>
              </div>
              <div className="bg-card p-6 rounded-lg border animate-fade-in" style={{ animationDelay: '0.8s' }}>
                <h3 className="text-xl font-bold mb-2">Physical</h3>
                <p className="text-muted-foreground">Capture healthcare wishes and personal care preferences</p>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      {/* Simple 3-Step Process Section */}
      <section id="process" className="py-20 bg-background">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Simple 3-Step Process</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img 
                src={threeStepProcess} 
                alt="Three Step Process Illustration" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-8">
              <div className="flex items-start space-x-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Assess</h3>
                  <p className="text-muted-foreground">Meet with our compassionate experts to discuss your specific needs and concerns</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Plan</h3>
                  <p className="text-muted-foreground">Create a comprehensive plan tailored to your wishes and family requirements</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Protect</h3>
                  <p className="text-muted-foreground">Receive ongoing guidance and emotional support throughout the entire process</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Companies Section */}
      <section id="for-companies" className="py-20 bg-muted/50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img 
                src={forCompanies} 
                alt="For Companies" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">For Companies</h2>
              <h3 className="text-xl font-semibold mb-4 text-muted-foreground">
                Position your organization at the forefront of employee resilience and continuity, while addressing a $126B growing industry.
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Reduce financial and emotional strain on employees.</li>
                <li>• Mitigate absenteeism, productivity loss, turnover, and workplace disruption.</li>
                <li>• Strengthen resilience, loyalty, and workplace culture.</li>
                <li>• Improve ROI of wellness programs by addressing a critical gap in preparedness.</li>
                <li>• Demonstrate care and compassion as part of corporate culture.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* For Employees Section */}
      <section id="for-employees" className="py-20 bg-background">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">For Employees</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Step-by-step guidance to document wishes and secure digital accounts.</li>
                <li>• Peace of mind knowing loved ones and executors can act with clarity.</li>
                <li>• Practical tools to reduce procrastination and overwhelm.</li>
                <li>• Confidential, compassionate resources that normalize planning and make it simple.</li>
              </ul>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <img 
                src={forEmployees} 
                alt="For Employees" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default Solution;