import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import endevoImage from "@/assets/endevo-preparedness-bg.jpg";

const EndevoPurposeSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const navigate = useNavigate();

  return (
    <section
      className="relative py-20 md:py-28 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('${endevoImage}')` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div
        ref={elementRef as React.RefObject<HTMLDivElement>}
        className={`relative z-10 container max-w-4xl mx-auto px-4 text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
          ENDevo is Redefining Preparedness.
        </h2>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          We help individuals and organizations navigate life's most critical moments with clarity, confidence, and continuity.
        </p>
        <Button
          onClick={() => navigate("/company")}
          className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-3 text-lg"
        >
          Learn More About Us
        </Button>
      </div>
    </section>
  );
};

export default EndevoPurposeSection;