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

        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default WhoWeServe;