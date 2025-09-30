import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const ExploreOurSolutions = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  return (
    <section className="py-24 bg-background">
      <div ref={elementRef as any} className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <h2 className={`text-4xl md:text-5xl font-bold text-foreground text-center mb-16 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: isVisible ? '0.2s' : '0s' }}>
          Explore Our Solutions
        </h2>
        
        {/* Three Column Layout */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* For Companies Card */}
          <div className={`bg-card rounded-lg shadow-lg p-8 text-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: isVisible ? '0.4s' : '0s' }}>
            <h3 className="text-xl font-bold text-foreground mb-6">
              For Companies (HR/EAP):
            </h3>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              Reduce risk, protect employees, safeguard continuity.
            </p>
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-6 rounded-lg transition-colors duration-300 w-full">
              Learn More
            </button>
          </div>
          
          {/* For Individuals Card */}
          <div className={`bg-card rounded-lg shadow-lg p-8 text-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: isVisible ? '0.6s' : '0s' }}>
            <h3 className="text-xl font-bold text-foreground mb-6">
              For Individuals:
            </h3>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              AI-powered tools for personal legacy & digital preparedness.
            </p>
            <button className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 w-full">
              Get Started
            </button>
          </div>
          
          {/* For Investors Card */}
          <div className={`bg-card rounded-lg shadow-lg p-8 text-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: isVisible ? '0.8s' : '0s' }}>
            <h3 className="text-xl font-bold text-foreground mb-6">
              For Investors:
            </h3>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              Be part of a $126B industry transformation.
            </p>
            <button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold py-3 px-6 rounded-lg transition-colors duration-300 w-full">
              Explore Opportunity
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreOurSolutions;