import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import endevoImage from "@/assets/endevo-preparedness-bg.jpg";

const EndevoPurposeSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const navigate = useNavigate();

  const audiences = [
    {
      title: "For Companies (HR/EAP):",
      description: "Reduce risk, protect employees, safeguard continuity.",
      cta: "Learn More",
      link: "/who-we-serve/employers",
    },
    {
      title: "For Service Providers:",
      description: "Connect with clients and grow your practice through our trusted network.",
      cta: "Join Our Network",
      link: "/who-we-serve/service-providers",
    },
    {
      title: "For Individuals:",
      description: "AI-powered tools for personal legacy & digital preparedness.",
      cta: "Get Started",
      link: "/who-we-serve/individuals",
    },
  ];

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
        className={`relative z-10 container max-w-6xl mx-auto px-4 text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-12">
          ENDevo is redefining preparedness.
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
            >
              <h3 className="text-xl font-bold text-white mb-3">{audience.title}</h3>
              <p className="text-white/90 mb-6">{audience.description}</p>
              <Button
                onClick={() => navigate(audience.link)}
                className="bg-brand-orange hover:bg-brand-orange/90 text-white"
              >
                {audience.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EndevoPurposeSection;
