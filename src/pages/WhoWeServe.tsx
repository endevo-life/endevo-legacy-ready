import Header from "@/components/Header";
import Footer from "@/components/Footer";
import individualsIcon from "@/assets/individuals-icon.png";
import serviceProvidersIcon from "@/assets/service-providers-icon.png";
import employersIcon from "@/assets/employers-icon.png";
import whoWeServeTeam from "@/assets/who-we-serve-team.png";
import familyOverwhelmed from "@/assets/family-overwhelmed.png";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const WhoWeServe = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Who We Serve Section */}
      <section className="py-20 bg-background">
        <div className="container max-w-7xl mx-auto px-4">
          {/* Main Heading */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6" style={{ fontFamily: 'serif' }}>
              Who We Serve
            </h1>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              At ENDevo, we help companies, organizations, and individuals prepare with clarity and confidence so their legacy, digital footprint, and critical operations remain protected, resilient, and continuous. Our AI-powered platform bridges the gap between personal planning and workplace readiness, making Legacy Readiness and Digital Preparedness accessible and actionable.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div className="relative">
              <img 
                src={whoWeServeTeam} 
                alt="Professional team collaborating with digital icons overlay" 
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>

            {/* Right Side - Content */}
            <div className="space-y-8">
              {/* Subheading */}
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Businesses & Corporations
              </h2>

              {/* Highlight Heading */}
              <h3 className="text-xl md:text-2xl font-bold text-brand-orange">
                Empower Your Workforce, Protect Your Organization
              </h3>

              {/* Body Text */}
              <p className="text-lg text-muted-foreground leading-relaxed">
                Companies face real risks when employees are unprepared for life's inevitable events: absenteeism, productivity loss, and stress can cost billions annually. ENDevo's Legacy Readiness Wellness Program integrates with HR and Employee Assistance Programs (EAPs), providing:
              </p>

              {/* Bullet List */}
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-brand-orange font-bold mr-3">•</span>
                  <div>
                    <span className="font-semibold text-foreground">All-in-One Platform:</span>
                    <span className="text-muted-foreground ml-1">Legal, financial, and digital preparedness in one place.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-orange font-bold mr-3">•</span>
                  <div>
                    <span className="font-semibold text-foreground">Guided Support:</span>
                    <span className="text-muted-foreground ml-1">AI-powered agents and workshops simplify complex planning steps.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-orange font-bold mr-3">•</span>
                  <div>
                    <span className="font-semibold text-foreground">Seamless Integration:</span>
                    <span className="text-muted-foreground ml-1">Scalable for HR/EAP programs, reducing administrative burden.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-orange font-bold mr-3">•</span>
                  <div>
                    <span className="font-semibold text-foreground">Employee Well-Being:</span>
                    <span className="text-muted-foreground ml-1">Reduce stress, boost confidence, and build workplace resilience.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default WhoWeServe;