import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const FutureSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  return (
    <section 
      className="relative py-24 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/lovable-uploads/762c9eba-581b-49da-89ce-66da9577a848.png')`
      }}
    >
      {/* Gradient overlay - right black to left transparent */}
      <div className="absolute inset-0 bg-gradient-to-l from-black via-black/70 to-transparent"></div>
      
      {/* Content */}
      <div ref={elementRef as any} className="relative z-10 container max-w-7xl mx-auto px-4">
        <div className="flex justify-end">
          <div className="max-w-3xl">
            <h2 className={`heading-section text-white mb-8 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: isVisible ? '0.2s' : '0s' }}>
              Building the Future of Legacy Readiness
            </h2>
            
            <p className={`text-lead text-white/90 leading-relaxed mb-8 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: isVisible ? '0.4s' : '0s' }}>
              A $126B industry that no one wants to talk about—but everyone will eventually need. ENDevo is building the category-defining platform for Legacy Readiness & Digital Preparedness, backed by AI and scalable enterprise integration.
            </p>
            
            <button className={`bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-1000 ease-out hover-scale ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: isVisible ? '0.6s' : '0s' }}>
              Learn About Investment Opportunities
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureSection;