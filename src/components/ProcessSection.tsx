import { ClipboardCheck, Smartphone, Headphones } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const ProcessSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  return (
    <section ref={elementRef} className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-10'}`}>
          <h2 className="heading-section mb-4 text-primary">Our Simple Process</h2>
          <p className="text-lead text-muted-foreground">
            Three steps to complete care
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start justify-items-center">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-20'}`} style={{ transitionDelay: isVisible ? '0.3s' : '0s' }}>
            <div className="w-20 h-20 mx-auto mb-8 bg-primary rounded-full flex items-center justify-center relative shadow-lg hover-scale transition-transform duration-300 pulse">
              <span className="text-2xl font-bold text-primary-foreground">1</span>
            </div>
            <div className="bg-card rounded-3xl p-6 relative h-80 border shadow-lg hover-scale transition-transform duration-300"
                 style={{
                   background: 'linear-gradient(135deg, hsl(var(--card)) 0%, hsl(var(--muted)) 100%)'
                 }}>
              <div className="flex justify-center mb-4">
                <ClipboardCheck className="w-12 h-12 text-primary hover-scale transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Take the Peace of Mind Assessment</h3>
              <p className="text-muted-foreground leading-relaxed">Quickly assess your preparedness for life's transitions, spot gaps, and gain clarity with a short summary of your readiness.</p>
            </div>
          </div>
          
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-20'}`} style={{ transitionDelay: isVisible ? '0.6s' : '0s' }}>
            <div className="w-20 h-20 mx-auto mb-8 bg-accent rounded-full flex items-center justify-center relative shadow-lg hover-scale transition-transform duration-300 pulse">
              <span className="text-2xl font-bold text-accent-foreground">2</span>
            </div>
            <div className="bg-card rounded-3xl p-6 relative h-80 border shadow-lg hover-scale transition-transform duration-300"
                 style={{
                   background: 'linear-gradient(135deg, hsl(var(--card)) 0%, hsl(var(--accent) / 0.1) 100%)'
                 }}>
              <div className="flex justify-center mb-4">
                <Smartphone className="w-12 h-12 text-accent hover-scale transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Download My Final Playbook app</h3>
              <p className="text-muted-foreground leading-relaxed">My Final Playbook makes end-of-life planning simple with expert guidance, digital tools, and seamless in-app options to secure your legacy.</p>
            </div>
          </div>
          
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-20'}`} style={{ transitionDelay: isVisible ? '0.9s' : '0s' }}>
            <div className="w-20 h-20 mx-auto mb-8 bg-secondary rounded-full flex items-center justify-center relative shadow-lg hover-scale transition-transform duration-300 pulse">
              <span className="text-2xl font-bold text-secondary-foreground">3</span>
            </div>
            <div className="bg-card rounded-3xl p-6 relative h-80 border shadow-lg hover-scale transition-transform duration-300"
                 style={{
                   background: 'linear-gradient(135deg, hsl(var(--card)) 0%, hsl(var(--secondary) / 0.1) 100%)'
                 }}>
              <div className="flex justify-center mb-4">
                <Headphones className="w-12 h-12 text-secondary hover-scale transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Listen to the Digital Legacy Podcast</h3>
              <p className="text-muted-foreground leading-relaxed">The Digital Legacy Podcast shows you how to protect your online assets, avoid chaos, and give loved ones peace of mind.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;