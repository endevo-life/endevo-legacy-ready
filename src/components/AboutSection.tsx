import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="heading-section mb-4">About ENDevo</h2>
          <p className="text-lead max-w-3xl mx-auto">
            We specialize in transforming legacy systems for forward-thinking organizations. 
            Our proven methodology reduces risk while accelerating your modernization journey.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              Our Mission
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              ENDevo bridges the gap between legacy systems and modern technology. We understand 
              that your existing systems contain valuable business logic and data that need to be 
              preserved while enabling innovation and growth.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Our team of experts has helped organizations across industries successfully modernize 
              their technology stack without disrupting critical business operations.
            </p>
            <Button variant="outline" size="lg">
              Learn More About Our Approach
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