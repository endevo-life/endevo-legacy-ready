import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const steps = [
  {
    number: "1",
    description: "Provide employees with access to our Peace of Mind Assessment to quickly identify their level of preparedness."
  },
  {
    number: "2",
    description: "Guide staff with AI-powered tools that help them organize legal, financial, and digital assets in one secure place."
  },
  {
    number: "3",
    description: "Offer confidence and support that reduces stress, protects well-being, and lowers the risk of extended absences."
  },
  {
    number: "4",
    description: "Strengthen continuity by ensuring employees can focus on their work, even while navigating personal challenges."
  }
];

const ResiliencePathSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={elementRef as React.RefObject<HTMLElement>}
      className="py-20 md:py-28 bg-white"
    >
      <div className="container max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-4" style={{ fontFamily: 'serif' }}>
            Your Path to Organizational Resilience Starts Here
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-center">
                {/* Step Number */}
                <div className="w-16 h-16 rounded-full bg-brand-orange text-white flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  {step.number}
                </div>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResiliencePathSection;
