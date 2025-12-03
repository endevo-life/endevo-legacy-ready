import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ArrowRight } from "lucide-react";

const WhyEndevoExistsSection = () => {
  const navigate = useNavigate();
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section
      ref={elementRef as React.RefObject<HTMLElement>}
      className="py-20 bg-background"
    >
      <div className="container max-w-4xl mx-auto px-4 text-center">
        <h2
          className={`text-3xl md:text-4xl font-bold text-foreground mb-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Why ENDevo Exists
        </h2>
        <p
          className={`text-lg text-muted-foreground leading-relaxed mb-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "150ms" }}
        >
          ENDevo is the first platform dedicated to helping people and workplaces prepare for life's most important moments with clarity, structure, and confidence.
        </p>
        <p
          className={`text-lg text-muted-foreground leading-relaxed mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "250ms" }}
        >
          We combine expert guidance, compassionate support, and AI-powered tools to make legacy readiness simple, actionable, and accessible.
        </p>
        <Button
          onClick={() => {
            navigate("/company");
            window.scrollTo(0, 0);
          }}
          variant="link"
          className={`text-brand-orange hover:text-brand-orange/80 text-lg font-semibold transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "350ms" }}
        >
          Read Our Story <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default WhyEndevoExistsSection;
