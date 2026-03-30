import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useNavigate } from "react-router-dom";

const ToolsForEmployersSection = () => {
  const navigate = useNavigate();
  const animation = useScrollAnimation();

  return (
    <section className="pt-20 pb-10 bg-background">
      <div className="container max-w-7xl mx-auto px-4">
        <div
          ref={animation.elementRef as any}
          id="employers"
          className="grid lg:grid-cols-2 gap-12 items-center scroll-mt-20"
        >
          {/* Left - Image */}
          <div
            className={`relative transition-all duration-1000 ${
              animation.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <img
              src="https://assets.cdn.filesafe.space/f5ehsbHfdFg2UsHEIb49/media/6997585b8523c598ecce5807.jpg"
              alt="Business professionals collaborating"
              className="w-full h-auto rounded-2xl shadow-lg"
              loading="lazy"
            />
          </div>

          {/* Right - Content */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-200 ${
              animation.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Tools for Employers & Teams
            </h2>

            <p className="text-xl text-brand-orange font-semibold">
              Support employee well-being, reduce absenteeism, and build a more
              resilient workforce with ENDevo.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              ENDevo reduces workplace absenteeism and stress by supporting
              employees with clarity and confidence during life's most
              challenging moments. By integrating legacy readiness into your
              wellness programs, you strengthen employee engagement, build
              organizational resilience, and demonstrate genuine care for your
              team's well-being.
            </p>

            <div className="mt-8">
              <p className="text-sm text-muted-foreground mb-3">
                Built on compassionate guidance, AI-powered organization, and human-centered legacy readiness.
              </p>
              <Button
                onClick={() => navigate("/wws-employers")}
                variant="default"
                className="bg-brand-orange hover:bg-brand-orange/90 text-white px-6 py-1.5 text-base font-semibold rounded-full"
                style={{
                  fontFamily: "'Open Sans', 'Helvetica', sans-serif",
                }}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsForEmployersSection;
