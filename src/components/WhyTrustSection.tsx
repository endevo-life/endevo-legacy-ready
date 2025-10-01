import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import marketIcon from "@/assets/trust-icon-market.png";
import aiHumanIcon from "@/assets/trust-icon-ai-human.png";
import businessIcon from "@/assets/trust-icon-business.png";
import securityIcon from "@/assets/trust-icon-security.png";
import valuesIcon from "@/assets/trust-icon-values.png";
const WhyTrustSection = () => {
  const {
    elementRef,
    isVisible
  } = useScrollAnimation();
  const features = [{
    iconSrc: marketIcon,
    title: "$126B Market Need",
    description: "Legacy readiness & digital preparedness are urgent, but overlooked."
  }, {
    iconSrc: aiHumanIcon,
    title: "AI + Human-Centered Design",
    description: "Smart tools made simple, supportive, and compassionate."
  }, {
    iconSrc: businessIcon,
    title: "Trusted by Businesses & Individuals",
    description: "Early HR/EAP pilots and app users already seeing impact."
  }, {
    iconSrc: securityIcon,
    title: "Secure & Reliable",
    description: "Enterprise-grade safeguards to protect digital footprints."
  }, {
    iconSrc: valuesIcon,
    title: "Built on Values (C.L.A.R.I.T.Y.)",
    description: "Compassion, Clarity, Resilience, and Innovation at the core."
  }];
  return (
    <section ref={elementRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Why <span className="text-brand-orange">Trust ENDevo</span>?
        </h2>
        
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="mb-4 flex justify-center">
                <img src={feature.iconSrc} alt={feature.title} className="w-16 h-16 object-contain" />
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default WhyTrustSection;