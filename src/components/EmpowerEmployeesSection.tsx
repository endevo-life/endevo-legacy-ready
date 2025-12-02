import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import empowerBg from "@/assets/empower-employees-bg.png";

const EmpowerEmployeesSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={elementRef} 
      className="py-24 md:py-32 relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${empowerBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="container max-w-4xl mx-auto px-4 text-left relative z-10">
        <h2 
          className={`text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Empower Your Employees with{' '}
          <span className="text-brand-orange">Confidence</span> and{' '}
          <span className="text-brand-orange">Clarity</span>
        </h2>
        
        <p 
          className={`mt-6 text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          With ENDevo, HR teams can offer guided legacy planning that supports employees through life transitions while improving engagement and reducing burnout.
        </p>
        
        <div 
          className={`mt-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <Button 
            className="bg-brand-navy hover:bg-brand-navy/90 text-white px-8 py-6 text-base md:text-lg rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => window.location.href = '/employee-wellness'}
          >
            Start a Legacy Readiness Employee Wellness Program
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EmpowerEmployeesSection;
