import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Heart, Shield, Zap, Brain, Settings, Handshake, Clock } from "lucide-react";

const CoreValuesSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  const values = [
    {
      letter: "C",
      title: "Compassion",
      description: "Honor humanity while simplifying the complex. We approach every situation with empathy and understanding.",
      icon: Heart
    },
    {
      letter: "L",
      title: "Legacy Readiness",
      description: "Act today to safeguard families, organizations, and communities for tomorrow's challenges.",
      icon: Shield
    },
    {
      letter: "A",
      title: "Action & Empowerment",
      description: "Educate, project manage, and empower people to act with confidence and clarity.",
      icon: Zap
    },
    {
      letter: "R",
      title: "Resilience (Digital & Human)",
      description: "Protect identities, assets, and digital footprints with comprehensive safeguards.",
      icon: Brain
    },
    {
      letter: "I",
      title: "Innovation with Integrity",
      description: "Harness AI and emerging tech responsibly to serve human needs and values.",
      icon: Settings
    },
    {
      letter: "T",
      title: "Teamwork & Collaboration",
      description: "Build systemic resilience with trusted partners and connected communities.",
      icon: Handshake
    },
    {
      letter: "Y",
      title: "Yesterday, Today, Tomorrow",
      description: "Honor the past, strengthen the present, secure the future for generations.",
      icon: Clock
    }
  ];

  return (
    <section id="values" className="py-20 bg-background">
      <div ref={elementRef as any} className="container max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-foreground mb-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: isVisible ? '0.2s' : '0s' }}>
            Our Core Values: <span className="text-brand-orange">C.L.A.R.I.T.Y.</span>
          </h2>
          <p className={`text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: isVisible ? '0.4s' : '0s' }}>
            Every service we provide is guided by our core values, ensuring comprehensive support that addresses both digital resilience and human-centered legacy readiness.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 mb-6">
          {values.slice(0, 4).map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div 
                key={value.letter}
                className={`relative bg-card rounded-xl shadow-sm p-6 text-center hover:shadow-md transition-all duration-1000 ease-out overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: isVisible ? `${0.6 + index * 0.1}s` : '0s' }}
              >
                {/* Large Background Letter */}
                <div className="absolute top-2 right-4 text-8xl font-bold text-brand-orange/10 select-none pointer-events-none">
                  {value.letter}
                </div>
                
                {/* Icon */}
                <div className="relative z-10 mb-4">
                  <IconComponent className="w-8 h-8 text-brand-orange mx-auto" />
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Second Row - Centered */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl">
            {values.slice(4).map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div 
                  key={value.letter}
                  className={`relative bg-card rounded-xl shadow-sm p-6 text-center hover:shadow-md transition-all duration-1000 ease-out overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: isVisible ? `${1.0 + index * 0.1}s` : '0s' }}
                >
                  {/* Large Background Letter */}
                  <div className="absolute top-2 right-4 text-8xl font-bold text-brand-orange/10 select-none pointer-events-none">
                    {value.letter}
                  </div>
                  
                  {/* Icon */}
                  <div className="relative z-10 mb-4">
                    <IconComponent className="w-8 h-8 text-brand-orange mx-auto" />
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-lg font-bold text-foreground mb-3">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;