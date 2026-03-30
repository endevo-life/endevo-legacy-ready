import { useNavigate } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";

const WhoWeServeSection = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const navigate = useNavigate();

  const audiences = [
    {
      title: "Service Providers",
      description: "Unlock pre-qualified clients and boost revenue with organized operations and smart partnerships.",
      link: "/wws-service-providers",
      bgImage: "https://assets.cdn.filesafe.space/f5ehsbHfdFg2UsHEIb49/media/69c6f7be34bd3258cdeedeb7.jpeg",
    },
    {
      title: "Individuals",
      description: "Simplifying legacy readiness with AI-powered guidance and compassionate resources.",
      link: "/wws-individuals",
      bgImage: "https://assets.cdn.filesafe.space/f5ehsbHfdFg2UsHEIb49/media/69c6f83a0c63d56d4541b355.jpeg",
    },
  ];

  return (
    <section
      ref={elementRef as React.RefObject<HTMLElement>}
      className="pt-20 pb-10 bg-background"
    >
      <div className="container max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-orange">
            Beyond Employers
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-3xl mx-auto">
          {audiences.map((audience, index) => {
            return (
              <div
                key={audience.title}
                className={`
                  rounded-2xl p-8 text-left shadow-md hover:shadow-lg transition-all duration-500 flex flex-col border border-border/50 relative overflow-hidden
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                `}
                style={{
                  minHeight: "240px",
                  transitionDelay: `${index * 150}ms`,
                  ...(audience.bgImage ? {
                    backgroundImage: `url(${audience.bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  } : { backgroundColor: "var(--card)" }),
                }}
              >
                {/* Dark overlay for readability */}
                {audience.bgImage && (
                  <div className="absolute inset-0 bg-black/50 rounded-2xl" />
                )}
                <div className="relative z-10 flex flex-col h-full">

                {/* Title */}
                <h3 className={`text-xl font-bold mb-4 ${audience.bgImage ? "text-white" : "text-foreground"}`}>
                  {audience.title}
                </h3>

                {/* Description */}
                <p className={`text-sm leading-relaxed mb-6 flex-grow ${audience.bgImage ? "text-white/80" : "text-muted-foreground"}`}>
                  {audience.description}
                </p>

                {/* CTA Button */}
                <Button
                  onClick={() => {
                    navigate(audience.link);
                    window.scrollTo(0, 0);
                  }}
                  className="bg-[#FF5D00] hover:bg-[#FF5D00]/90 text-white rounded-full px-6 py-1.5 text-base font-semibold mt-auto self-start"
                  style={{ fontFamily: "'Open Sans', 'Helvetica', sans-serif" }}
                >
                  Learn More
                </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServeSection;
