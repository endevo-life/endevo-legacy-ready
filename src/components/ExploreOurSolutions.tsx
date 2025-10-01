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
    <section ref={elementRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Explore Our <span className="text-brand-orange">Solutions</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={index}
                className={`p-8 rounded-2xl border border-border bg-card hover:shadow-lg transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <Icon className={`w-12 h-12 mb-4 text-${solution.color}`} />
                <h3 className="text-2xl font-bold mb-3">{solution.title}</h3>
                <p className="text-muted-foreground mb-6">{solution.description}</p>
                <Button variant="outline" className="w-full">
                  {solution.cta}
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default ExploreOurSolutions;