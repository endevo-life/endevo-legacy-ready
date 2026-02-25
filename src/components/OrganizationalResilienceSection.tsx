import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const steps = [
  {
    number: 1,
    text: "Provide employees with access to our Peace of Mind Assessment to quickly identify their level of preparedness.",
  },
  {
    number: 2,
    text: "Guide staff with AI-powered tools that help them organize legal, financial, and digital assets in one secure place.",
  },
  {
    number: 3,
    text: "Offer confidence and support that reduces stress, protects well-being, and lowers the risk of extended absences.",
  },
  {
    number: 4,
    text: "Strengthen continuity by ensuring employees can focus on their work, even while navigating personal challenges.",
  },
];

const OrganizationalResilienceSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section
      ref={elementRef as React.RefObject<HTMLElement>}
      className="py-20 px-4 bg-background"
    >
      <div className="container max-w-7xl mx-auto">
        {/* Headline */}
        <h2
          className={`text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ fontFamily: "serif" }}
        >
          Your Path to Organizational Resilience Starts Here
        </h2>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`flex items-start gap-5 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${0.2 + index * 0.15}s` }}
              >
                {/* Circular Number Marker */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-navy text-white flex items-center justify-center text-xl font-bold shadow-md">
                  {step.number}
                </div>

                {/* Step Text */}
                <p className="text-lg text-muted-foreground leading-relaxed pt-2">
                  {step.text}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column - Image */}
          <div
            className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: "0.4s" }}
          >
            <img
              src="https://assets.cdn.filesafe.space/f5ehsbHfdFg2UsHEIb49/media/699758484c250204d696d032.png"
              alt="Team collaborating in a modern office environment, celebrating success"
              className="w-full h-auto rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
        </div>

        {/* CTA Button - Centered below both columns */}
        <div
          className={`pt-12 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: "0.8s" }}
        >
          <a href="/contact">
            <button className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold px-8 py-3 rounded-full text-base shadow-lg hover:shadow-xl transition-all duration-300">
              Start Your Journey Today
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default OrganizationalResilienceSection;
