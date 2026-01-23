import { useNavigate } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import { Handshake, User, Building2 } from "lucide-react";

const WhoWeServeSection = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const navigate = useNavigate();

  const audiences = [
    {
      icon: Building2,
      title: "For Employers",
      description: "Boost workplace resilience with dashboards and tools that cut absenteeism, increase productivity, and support employee well-being.",
      link: "/wws-employers",
    },
    {
      icon: Handshake,
      title: "Service Providers",
      description: "Unlock pre-qualified clients and boost revenue with organized operations and smart partnerships.",
      link: "/wws-service-providers",
    },
    {
      icon: User,
      title: "Individuals",
      description: "Simplifying legacy readiness with AI-powered guidance and compassionate resources.",
      link: "/wws-individuals",
    },
  ];

  return (
    <section
      ref={elementRef as React.RefObject<HTMLElement>}
      className="py-20 bg-background"
    >
      <div className="container max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-orange">
            Who We Serve
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {audiences.map((audience, index) => {
            const IconComponent = audience.icon;
            return (
              <div
                key={audience.title}
                className={`
                  bg-card rounded-2xl p-8 text-center shadow-md hover:shadow-lg transition-all duration-500 flex flex-col h-full border border-border/50
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                `}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center bg-muted">
                    <IconComponent 
                      className="w-8 h-8 text-muted-foreground" 
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {audience.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                  {audience.description}
                </p>

                {/* CTA Button */}
                <Button
                  onClick={() => {
                    navigate(audience.link);
                    window.scrollTo(0, 0);
                  }}
                  className="bg-[#FF5D00] hover:bg-[#FF5D00]/90 text-white rounded-full px-6 py-1.5 text-base font-semibold mt-auto"
                  style={{ fontFamily: "'Open Sans', 'Helvetica', sans-serif" }}
                >
                  Learn More
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServeSection;
