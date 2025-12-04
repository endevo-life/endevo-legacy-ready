import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const LegacyJourneyCTA = () => {
  const navigate = useNavigate();
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section
      ref={elementRef as React.RefObject<HTMLElement>}
      className="py-20 bg-muted/20"
    >
      <div className="container max-w-4xl mx-auto px-4 text-center">
        <h2
          className={`text-3xl md:text-4xl font-bold text-foreground mb-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Let's Start Your <span className="text-brand-orange">Legacy Journey</span>
        </h2>
        <p
          className={`text-lg text-muted-foreground mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "150ms" }}
        >
          Ready to protect your family's future? Contact us today for a confidential consultation.
        </p>
        <Button
          onClick={() => {
            navigate("/contact");
            window.scrollTo(0, 0);
          }}
          className={`bg-brand-orange hover:bg-brand-orange/90 text-white rounded-full px-8 py-3 text-lg transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          Schedule a Consultation
        </Button>
      </div>
    </section>
  );
};

export default LegacyJourneyCTA;
