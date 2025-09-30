import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import { Building2, User, TrendingUp } from "lucide-react";

const ExploreOurSolutions = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  const solutions = [
    {
      icon: Building2,
      title: "For Companies (HR/EAP)",
      description: "Reduce risk, protect employees, safeguard continuity.",
      cta: "Learn More",
      color: "brand-navy"
    },
    {
      icon: User,
      title: "For Individuals",
      description: "AI-powered tools for personal legacy & digital preparedness.",
      cta: "Get Started",
      color: "brand-teal"
    },
    {
      icon: TrendingUp,
      title: "For Investors",
      description: "Be part of a $126B industry transformation.",
      cta: "Explore Opportunity",
      color: "brand-orange"
    }
  ];

  return (
    <section ref={elementRef} className="py-20 bg-muted/30">
      <div className="container max-w-6xl mx-auto px-4">
        <div className={`text-center mb-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-lg text-muted-foreground mb-2">
            ENDevo is redefining preparedness.
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Explore Our Solutions
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={index}
                className={`bg-card rounded-2xl p-8 shadow-lg border transition-all duration-1000 hover:shadow-xl hover:-translate-y-1 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: isVisible ? `${0.2 + index * 0.2}s` : '0s' }}
              >
                <div className="mb-6">
                  <div className={`w-16 h-16 rounded-full bg-${solution.color}/10 flex items-center justify-center`}>
                    <Icon className={`w-8 h-8 text-${solution.color}`} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {solution.description}
                </p>
                <Button variant="secondary" className="w-full">
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