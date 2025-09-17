import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const EndevoPurposeSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  return (
    <section 
      className="relative py-24 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/lovable-uploads/cdba9dc9-fda6-4e55-93b5-c348508632af.png')`
      }}
    >
      {/* Gradient overlay - left black to right transparent */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
      
      {/* Content */}
      <div ref={elementRef as any} className="relative z-10 container max-w-7xl mx-auto px-4">
        <div className="max-w-3xl">
          <h2 className={`heading-section text-white mb-8 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{ transitionDelay: isVisible ? '0.2s' : '0s' }}>
            ENDevo is redefining preparedness.
          </h2>
          
          <p className={`text-lead text-white/90 leading-relaxed transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{ transitionDelay: isVisible ? '0.4s' : '0s' }}>
            We empower companies and employees to avoid chaos, reduce risk, and build resilience with tools that cover legal, financial, digital, and emotional dimensions of planning. By blending AI-driven project management with human guidance, ENDevo delivers continuity and confidence for businesses and the people behind them.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EndevoPurposeSection;