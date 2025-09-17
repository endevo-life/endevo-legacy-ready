import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const NewHeroSection = () => {
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
          Are you ready for<br />
          what comes next?
        </h1>
        
        <p className={`text-lead mb-12 max-w-3xl mx-auto opacity-90 transition-all duration-1000 ease-out ${isVisible ? 'opacity-90 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: isVisible ? '0.4s' : '0s' }}>
          ENDevo helps enterprises achieve Legacy Readiness & Digital Preparedness—so your people, operations, and digital footprint are protected, preserved, and passed on with intention.
        </p>
        
        <a href="https://jbigogmrgex.typeform.com/to/qBsak5CQ" target="_blank" rel="noopener noreferrer">
          <button className={`bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-1000 ease-out hover-scale ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: isVisible ? '0.6s' : '0s' }}>
            📝 Take the Peace of Mind Assessment
          </button>
        </a>
      </div>
    </section>
  );
};

export default NewHeroSection;