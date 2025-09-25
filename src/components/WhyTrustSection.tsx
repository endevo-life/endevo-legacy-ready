import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import marketIcon from "@/assets/trust-icon-market.png";
import aiHumanIcon from "@/assets/trust-icon-ai-human.png";
import businessIcon from "@/assets/trust-icon-business.png";
import securityIcon from "@/assets/trust-icon-security.png";
import valuesIcon from "@/assets/trust-icon-values.png";

const WhyTrustSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  const features = [
    {
      iconSrc: marketIcon,
      title: "$126B Market Need",
      description: "Legacy readiness & digital preparedness are urgent, but overlooked."
    },
    {
      iconSrc: aiHumanIcon,
      title: "AI + Human-Centered Design",
      description: "Smart tools made simple, supportive, and compassionate."
    },
    {
      iconSrc: businessIcon,
      title: "Trusted by Businesses & Individuals",
      description: "Early HR/EAP pilots and app users already seeing impact."
    },
    {
      iconSrc: securityIcon,
      title: "Secure & Reliable",
      description: "Enterprise-grade safeguards to protect digital footprints."
    },
    {
      iconSrc: valuesIcon,
      title: "Built on Values (C.L.A.R.I.T.Y.)",
      description: "Compassion, Clarity, Resilience, and Innovation at the core."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div ref={elementRef as any} className="container max-w-4xl mx-auto px-4">
        {/* Header */}
        <h2 className={`text-4xl md:text-5xl font-bold text-foreground text-center mb-16 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: isVisible ? '0.2s' : '0s' }}>
          Why Trust ENDevo?
        </h2>
        
        {/* Features List */}
        <div className="space-y-8 mb-16 flex flex-col items-center">
        {features.map((feature, index) => (
              <div 
                key={index}
                className={`flex items-start gap-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} 
                style={{ transitionDelay: isVisible ? `${0.3 + index * 0.1}s` : '0s' }}
              >
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 flex items-center justify-center">
                    <img 
                      src={feature.iconSrc} 
                      alt={feature.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
        
        {/* CTA Button */}
        <div className={`text-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: isVisible ? '0.9s' : '0s' }}>
          <button className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-300">
            Explore Our Solutions
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyTrustSection;