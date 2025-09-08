import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="heading-section mb-4">About ENDevo</h2>
          <p className="text-lead max-w-3xl mx-auto">
            ENDevo is redefining end-of-life planning through the lens of Legacy Readiness & Digital Preparedness. 
            We guide you through legal, emotional, and digital dimensions of legacy creation—empowering you to live with clarity and leave with confidence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              Our Mission
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We believe that legacy planning shouldn't be overwhelming or left until it's too late. 
              ENDevo provides comprehensive guidance through the complex legal, emotional, and digital 
              aspects of creating your lasting legacy.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Our approach empowers you to make informed decisions about your digital footprint, 
              legal preparations, and emotional readiness, ensuring peace of mind for you and your loved ones.
            </p>
            <Button variant="outline" size="lg">
              Start Your Legacy Journey
            </Button>
          </div>
          
          <div className="space-y-6">
            <div className="bg-muted/50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-2 text-foreground">15+ Years</h4>
              <p className="text-muted-foreground">of legacy system transformation experience</p>
            </div>
            
            <div className="bg-muted/50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-2 text-foreground">200+ Projects</h4>
              <p className="text-muted-foreground">successfully modernized across industries</p>
            </div>
            
            <div className="bg-muted/50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-2 text-foreground">Zero Downtime</h4>
              <p className="text-muted-foreground">commitment to business continuity</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;