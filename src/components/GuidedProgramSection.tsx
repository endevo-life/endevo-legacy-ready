import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ClipboardCheck, Brain, Shield, Target } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Assess Readiness",
    description: "Provide employees with access to a Peace of Mind Assessment to quickly identify their level of preparedness.",
    icon: ClipboardCheck,
    color: "from-orange-500/20 to-orange-600/10"
  },
  {
    number: "02",
    title: "Organize & Secure",
    description: "Guide staff with AI-powered tools that help organize legal, financial, and digital assets in one secure place.",
    icon: Brain,
    color: "from-amber-500/20 to-amber-600/10"
  },
  {
    number: "03",
    title: "Support Well-being",
    description: "Offer confidence and support that reduces stress, protects well-being, and lowers the risk of extended absences.",
    icon: Shield,
    color: "from-orange-400/20 to-orange-500/10"
  },
  {
    number: "04",
    title: "Strengthen Continuity",
    description: "Strengthen continuity by ensuring employees can focus on their work, even while navigating personal challenges.",
    icon: Target,
    color: "from-slate-700/20 to-slate-800/10"
  }
];

const GuidedProgramSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={elementRef as React.RefObject<HTMLElement>}
      className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-orange-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-slate-200/40 rounded-full blur-3xl" />
      </div>

      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-4">
            Employee Journey
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            A Guided Path to <span className="text-orange-600">Preparedness</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Empower your team with a structured program that builds confidence and peace of mind.
          </p>
        </div>

        {/* Steps Grid with Connection Path */}
        <div className="relative">
          {/* Connection Path - Desktop */}
          <svg 
            className="absolute inset-0 w-full h-full hidden md:block pointer-events-none"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="pathGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f97316" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#ea580c" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            <path 
              d="M 12% 85% Q 25% 70% 37% 65% Q 50% 55% 62% 45% Q 75% 35% 88% 25%"
              fill="none"
              stroke="url(#pathGradient)"
              strokeWidth="3"
              strokeDasharray="8,8"
              className="animate-pulse"
            />
          </svg>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4">
            {steps.map((step, index) => (
              <div 
                key={step.number}
                className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ 
                  transitionDelay: `${index * 150}ms`,
                  transform: isVisible ? `translateY(${index % 2 === 0 ? '0' : '-20px'})` : undefined
                }}
              >
                <div className="relative group h-full">
                  {/* Card */}
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 h-full border border-slate-100 relative overflow-hidden">
                    {/* Corner Accent */}
                    <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${step.color} rounded-bl-[80px] -mr-2 -mt-2`} />
                    
                    {/* Step Number */}
                    <div className="relative z-10 mb-4">
                      <span className="text-4xl font-bold text-orange-500/20">{step.number}</span>
                    </div>

                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-semibold text-slate-800 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {step.description}
                    </p>

                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500/0 via-orange-500/50 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Arrow to next step - Mobile */}
                  {index < steps.length - 1 && (
                    <div className="flex justify-center py-4 md:hidden">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-orange-400 rotate-90">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-14 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLScL84N2XYOJpgGl8_UxQqbmxIBKg3cyZWd2AGDS7fkbVAFdpA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-800 to-slate-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl hover:from-slate-900 hover:to-slate-800 transition-all duration-300 group"
          >
            Start Your Team's Journey
            <svg 
              className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GuidedProgramSection;
