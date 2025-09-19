import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import endevoImage from "@/assets/endevo-redefining-preparedness.jpg";

const EndevoPurposeSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const navigate = useNavigate();
  
  return (
    <section 
      className="relative py-24 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('${endevoImage}')`
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
          
          <p className={`text-lead text-white/90 leading-relaxed mb-8 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{ transitionDelay: isVisible ? '0.4s' : '0s' }}>
            We empower companies and employees to avoid chaos, reduce risk, and build resilience with tools that cover legal, financial, digital, and emotional dimensions of planning. By blending AI-driven project management with human guidance, ENDevo delivers continuity and confidence for businesses and the people behind them.
          </p>
          
          <Button 
            variant="cta" 
            size="lg"
            onClick={() => navigate('/solution')}
            className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
            style={{ transitionDelay: isVisible ? '0.6s' : '0s' }}
          >
            Explore Our Solutions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EndevoPurposeSection;