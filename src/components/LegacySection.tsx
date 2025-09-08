import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const LegacySection = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  return (
    <section 
      className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/lovable-uploads/cfa2656b-ddf2-4eb5-92d3-b7929df247c6.png')`
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 legacy-gradient"></div>
      
      {/* Content */}
      <div ref={elementRef as any} className="relative z-10 container max-w-7xl mx-auto px-4 py-20">
        <div className={`max-w-2xl text-white transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <h2 className="heading-section mb-8">
            Legacy Readiness for Organizations
          </h2>
          
          <p className="text-lead mb-8 leading-relaxed">
            Business continuity is more than financials—it's about ensuring your leadership legacy, digital footprint, and organizational values remain clear and actionable. ENDevo empowers enterprises to:
          </p>
          
          <ul className="text-lg space-y-4 mb-12">
            <li className="flex items-start">
              <span className="block w-2 h-2 bg-brand-orange rounded-full mt-3 mr-4 flex-shrink-0 pulse"></span>
              <span>Protect critical digital assets</span>
            </li>
            <li className="flex items-start">
              <span className="block w-2 h-2 bg-brand-orange rounded-full mt-3 mr-4 flex-shrink-0 pulse"></span>
              <span>Organize and preserve institutional knowledge</span>
            </li>
            <li className="flex items-start">
              <span className="block w-2 h-2 bg-brand-orange rounded-full mt-3 mr-4 flex-shrink-0 pulse"></span>
              <span>Provide employees and families with guidance when it matters most</span>
            </li>
          </ul>
          
          <div className="space-y-6">
            <Button variant="secondary" size="lg" className="mb-4 hover-scale">
              Learn and Listen
            </Button>
            
            <p className="text-base opacity-90 leading-relaxed">
              Explore our podcasts, blogs, and founder insights on how digital legacy and preparedness can strengthen your company culture, wellness programs, and long-term stability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegacySection;