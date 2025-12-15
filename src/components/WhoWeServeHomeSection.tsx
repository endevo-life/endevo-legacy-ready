import { useNavigate } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import employersIcon from "@/assets/who-we-serve-employers.png";
import individualsIcon from "@/assets/who-we-serve-individuals.png";
import providersIcon from "@/assets/who-we-serve-providers.png";

const WhoWeServeHomeSection = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const navigate = useNavigate();

  const audiences = [
    {
      icon: employersIcon,
      title: "Employers",
      description: "Boost workplace resilience with legacy and digital readiness tools that reduce absenteeism, increase productivity, and support employee well-being.",
      link: "/wws-for-employers",
      isPrimary: true,
    },
    {
      icon: providersIcon,
      title: "Service Providers",
      description: "Unlock pre-qualified clients and boost revenue with organized operations and smart partnerships.",
      link: "/wws-service-providers",
      isPrimary: false,
    },
    {
      icon: individualsIcon,
      title: "Individuals",
      description: "Simplifying legacy readiness with AI-powered guidance and compassionate resources.",
      link: "/wws-individuals",
      isPrimary: false,
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {audiences.map((audience, index) => (
            <div
              key={audience.title}
              className={`
                bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-lg transition-all duration-500 flex flex-col h-full
                ${audience.isPrimary ? "md:scale-[1.02] shadow-lg" : ""}
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
              `}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <img
                  src={audience.icon}
                  alt={`${audience.title} icon`}
                  className="w-20 h-20 object-contain"
                />
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
                className="bg-brand-orange hover:bg-brand-orange/90 text-white rounded-full px-6 py-2 mt-auto"
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServeHomeSection;
