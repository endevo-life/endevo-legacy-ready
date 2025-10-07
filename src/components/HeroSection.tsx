import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const HeroSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/lovable-uploads/9e254043-ae74-4e4d-b86f-694807a431d0.png')`
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 hero-gradient"></div>
      
      {/* Content */}
      <div ref={elementRef as any} className="relative z-10 container max-w-4xl mx-auto px-4 text-center text-white">
        <h1 className={`heading-hero mb-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: isVisible ? '0.2s' : '0s' }}>
          ARE YOU READY FOR<br />
          WHAT COMES NEXT?
        </h1>
        
        <h2 className={`text-2xl md:text-3xl font-semibold mb-8 text-brand-orange transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: isVisible ? '0.4s' : '0s' }}>
          LIFE'S FINAL CHAPTER
        </h2>
        
        <p className={`text-lead mb-12 max-w-3xl mx-auto opacity-90 transition-all duration-1000 ease-out ${isVisible ? 'opacity-90 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: isVisible ? '0.6s' : '0s' }}>
          Are you ready for what comes next? ENDevo helps you achieve Legacy Readiness & Digital Preparedness—so your life story, values, and digital footprint are protected, preserved, and passed on with intention.
        </p>
        
        <a href="https://jbigogmrgex.typeform.com/to/qBsak5CQ" target="_blank" rel="noopener noreferrer">
          <button 
            className={`text-white font-bold py-3 px-12 rounded-full text-lg transition-all duration-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{
              backgroundColor: '#FF4D00',
              transitionDelay: isVisible ? '0.8s' : '0s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#E64400'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FF4D00'}
          >
            Peace of Mind Assessment
          </button>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;