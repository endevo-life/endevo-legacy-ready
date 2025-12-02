import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const EmpowerEmployeesSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={elementRef} 
      className="py-20 bg-gradient-to-b from-muted/30 to-background"
    >
      <div className="container max-w-4xl mx-auto px-4 text-center">
        <h2 
          className={`text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Empower Your Employees with{' '}
          <span className="text-brand-orange">Confidence</span> and{' '}
          <span className="text-brand-orange">Clarity</span>
        </h2>
      </div>
    </section>
  );
};

export default EmpowerEmployeesSection;
