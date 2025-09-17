import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const HiddenCostSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  return (
    <section className="py-24 bg-muted">
      <div ref={elementRef as any} className="container max-w-6xl mx-auto px-4">
        <h2 className={`heading-section text-brand-navy text-center mb-16 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: isVisible ? '0.2s' : '0s' }}>
          The Hidden Cost of Being Unprepared
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Card 1 */}
          <div className={`relative transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: isVisible ? '0.4s' : '0s' }}>
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center text-white text-2xl font-bold">
              1
            </div>
            <div className="bg-white p-8 pt-12 rounded-lg shadow-lg text-center">
              <p className="text-brand-navy font-medium text-lg leading-relaxed">
                $33B lost annually from productivity decline, absenteeism, and stress due to unpreparedness.
              </p>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className={`relative transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: isVisible ? '0.6s' : '0s' }}>
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center text-white text-2xl font-bold">
              2
            </div>
            <div className="bg-white p-8 pt-12 rounded-lg shadow-lg text-center">
              <p className="text-brand-navy font-medium text-lg leading-relaxed">
                Only 1 in 3 adults has a plan for critical events.
              </p>
            </div>
          </div>
          
          {/* Card 3 */}
          <div className={`relative transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: isVisible ? '0.8s' : '0s' }}>
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center text-white text-2xl font-bold">
              3
            </div>
            <div className="bg-white p-8 pt-12 rounded-lg shadow-lg text-center">
              <p className="text-brand-navy font-medium text-lg leading-relaxed">
                Digital chaos (accounts, passwords, assets) creates risks for families and employers.
              </p>
            </div>
          </div>
        </div>
        
        <p className={`text-brand-navy text-xl italic text-center font-medium transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: isVisible ? '1s' : '0s' }}>
          With ENDevo, organizations turn uncertainty into resilience.
        </p>
      </div>
    </section>
  );
};

export default HiddenCostSection;