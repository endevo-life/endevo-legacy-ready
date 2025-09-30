import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import { Building2, User, TrendingUp } from "lucide-react";
const ExploreOurSolutions = () => {
  const {
    elementRef,
    isVisible
  } = useScrollAnimation();
  const solutions = [{
    icon: Building2,
    title: "For Companies (HR/EAP)",
    description: "Reduce risk, protect employees, safeguard continuity.",
    cta: "Learn More",
    color: "brand-navy"
  }, {
    icon: User,
    title: "For Individuals",
    description: "AI-powered tools for personal legacy & digital preparedness.",
    cta: "Get Started",
    color: "brand-teal"
  }, {
    icon: TrendingUp,
    title: "For Investors",
    description: "Be part of a $126B industry transformation.",
    cta: "Explore Opportunity",
    color: "brand-orange"
  }];
  return (
    <section className="py-16 bg-background">
      <div ref={elementRef as any} className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className={`text-lg text-muted-foreground mb-2 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            ENDevo is redefining preparedness.
          </p>
          <h2 className={`text-3xl md:text-4xl font-bold text-foreground transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: isVisible ? '0.1s' : '0s' }}>
            Explore Our Solutions
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={solution.title}
                className={`text-center p-8 rounded-lg bg-card transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: isVisible ? `${0.2 + index * 0.1}s` : '0s' }}
              >
                <div className="mb-4 flex justify-center">
                  <Icon className="w-12 h-12 text-brand-orange" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{solution.title}</h3>
                <p className="text-muted-foreground mb-4">{solution.description}</p>
                <a href="#" className="text-brand-orange hover:text-brand-orange-dark font-semibold transition-colors">
                  {solution.cta}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default ExploreOurSolutions;