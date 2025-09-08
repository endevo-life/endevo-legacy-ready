import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const HeroSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  return (
    <section 
      ref={elementRef}
      className={`relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}
      style={{
        backgroundImage: `url('/lovable-uploads/9e254043-ae74-4e4d-b86f-694807a431d0.png')`
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 hero-gradient animate-fade-in"></div>
      
      {/* Content */}
      <div className="relative z-10 container max-w-4xl mx-auto px-4 text-center text-white">
        <h1 className="heading-hero mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          ARE YOU READY FOR<br />
          WHAT COMES NEXT?
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-brand-orange animate-fade-in" style={{ animationDelay: '0.4s' }}>
          LIFE'S FINAL CHAPTER
        </h2>
        
        <p className="text-lead mb-12 max-w-3xl mx-auto opacity-90 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          Are you ready for what comes next? ENDevo helps you achieve Legacy Readiness & Digital Preparedness—so your life story, values, and digital footprint are protected, preserved, and passed on with intention.
        </p>
        
        <a href="https://jbigogmrgex.typeform.com/to/qBsak5CQ" target="_blank" rel="noopener noreferrer">
          <Button variant="cta" size="lg" className="text-lg px-8 py-4 animate-fade-in hover-scale" style={{ animationDelay: '0.8s' }}>
            Peace of Mind Assessment
          </Button>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;