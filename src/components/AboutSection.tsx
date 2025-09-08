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
        
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="order-2 md:order-1">
            <img 
              src="/lovable-uploads/f2633088-bb71-4e8a-a4d6-8a9ccb6792a2.png" 
              alt="Niki Weiss, Digital Legacy Thanatologist and Founder of ENDevo"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          
          <div className="order-1 md:order-2">
            <div className="mb-8">
              <h3 className="text-3xl font-bold mb-4 text-foreground">
                LIVE FULLY. DIE READY.
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Niki Weiss is transforming how we approach and navigate death, dying and end-of-life planning in the digital age.
              </p>
            </div>
            
            <div className="mb-6">
              <p className="text-brand-orange font-semibold mb-4">
                Digital Legacy Thanatologist, Founder of ENDevo, Creator of My Final Playbook App, and host of the Digital Legacy Podcast
              </p>
            </div>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Niki normalizes and simplifies the often daunting end-of-life planning process by merging innovative digital tools with traditional methods. With a background in healthcare, project management, and risk analysis, Niki brings a unique skill set in coaching her clients through developing a well-thought-out, customized legacy plan.
              </p>
              
              <p>
                My Final Playbook App incorporates a holistic approach that guides users through a customizable journey of exploring end-of-life options by breaking down complex decision-making into actionable steps. By comprehensively planning and documenting various facets of your life—such as legal, financial, physical, and digital aspects—we gain peace of mind to live fully while providing a roadmap for preserving our digital imprint and protecting the people we leave behind.
              </p>
            </div>
            
            <div className="mt-8">
              <Button variant="outline" size="lg">
                Start Your Legacy Journey
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;