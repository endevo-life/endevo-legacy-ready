import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import Footer from "@/components/Footer";
import individualsLegacy from "@/assets/individuals-legacy-planning.png";
import serviceProviders from "@/assets/service-providers-new.png";
import employersTeams from "@/assets/employers-teams-new.png";
import { Button } from "@/components/ui/button";

const WhoWeServe = () => {
  return (
    <div className="min-h-screen">
      <ResponsiveNavbar />
      
      {/* Who We Serve Section */}
      <section className="py-20 bg-background pt-36">
        <div className="container max-w-7xl mx-auto px-4">
          {/* Main Heading */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6" style={{ fontFamily: 'serif' }}>
              Who We Serve
            </h1>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              At ENDevo, we help companies, organizations, and individuals prepare with clarity and confidence so their legacy, digital footprint, and critical operations remain protected, resilient, and continuous. Our AI-powered platform bridges the gap between personal planning and workplace readiness, making Legacy Readiness and Digital Preparedness accessible and actionable.
            </p>
          </div>

          {/* Subsection 1 - Legacy Planning for Individuals */}
          <div id="individuals" className="grid lg:grid-cols-2 gap-12 items-center mb-24 scroll-mt-20">
            {/* Left - Image */}
            <div className="relative">
              <img 
                src={individualsLegacy} 
                alt="Person organizing legacy planning documents" 
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>

            {/* Right - Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Legacy Planning for Individuals
              </h2>
              
              <p className="text-xl text-brand-orange font-semibold">
                Simplify your journey with AI-powered guidance and compassionate resources designed to give you peace of mind.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                ENDevo's AI-powered tools help you organize essential documents, set reminders for important milestones, and provide compassionate resources every step of the way. We remove the stress and complexity from legacy planning, so you can focus on what matters most: your family, your values, and your peace of mind.
              </p>
              
              <div className="flex gap-4">
              <Button 
                onClick={() => window.open('https://link.endevo.life/widget/booking/HUYkq6QZs0fI7AMtt6qH', '_blank')}
                className="bg-brand-orange hover:bg-brand-orange-dark text-white px-6 py-1.5 text-base rounded-full"
              >
                Start Your Journey Today
              </Button>
              </div>
            </div>
          </div>

          {/* Subsection 2 - Solutions for Service Providers */}
          <div id="service-providers" className="grid lg:grid-cols-2 gap-12 items-center mb-24 scroll-mt-20">
            {/* Left - Content */}
            <div className="space-y-6 order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Solutions for Service Providers
              </h2>
              
              <p className="text-xl text-brand-orange font-semibold">
                Unlock pre-qualified clients, streamline operations, and strengthen trust with the people who need you most.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                ENDevo connects service providers with pre-qualified clients who are ready for your expertise. Our platform improves onboarding efficiency, strengthens client trust through seamless integration, and reduces the time you spend on administrative paperwork so you can focus on delivering exceptional service.
              </p>
              
              <div className="flex gap-4">
              <Button 
                onClick={() => window.open('https://link.endevo.life/widget/booking/HUYkq6QZs0fI7AMtt6qH', '_blank')}
                className="bg-brand-orange hover:bg-brand-orange-dark text-white px-6 py-1.5 text-base rounded-full"
              >
                Partner With ENDevo
              </Button>
              </div>
            </div>

            {/* Right - Image */}
            <div className="relative order-1 lg:order-2">
              <img 
                src={serviceProviders} 
                alt="Service providers collaborating with clients" 
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* Subsection 3 - Tools for Employers & Teams */}
          <div id="employers" className="grid lg:grid-cols-2 gap-12 items-center scroll-mt-20">
            {/* Left - Image */}
            <div className="relative">
              <img 
                src={employersTeams} 
                alt="Employers and teams using ENDevo tools" 
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>

            {/* Right - Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Tools for Employers & Teams
              </h2>
              
              <p className="text-xl text-brand-orange font-semibold">
                Support employee well-being, reduce absenteeism, and build a more resilient workforce with ENDevo.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                ENDevo reduces workplace absenteeism and stress by supporting employees with clarity and confidence during life's most challenging moments. By integrating legacy readiness into your wellness programs, you strengthen employee engagement, build organizational resilience, and demonstrate genuine care for your team's well-being.
              </p>
              
              <div className="flex gap-4">
                <Button className="bg-brand-orange hover:bg-brand-orange-dark text-white px-6 py-1.5 text-base rounded-full">
                  Empower Your Team
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default WhoWeServe;