import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const HiddenCostStatsSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const navigate = useNavigate();

  const stats = [
    {
      value: "$33B",
      subtitle: "Lost Every Year",
      description:
        "Unpreparedness leads to absenteeism, presenteeism, caregiver strain, interruptions, and turnover, costing U.S. companies billions in lost productivity.",
    },
    {
      value: "67%",
      subtitle: "of adults are unprepared.",
      description:
        "Disorganized legal, financial, and digital information leads to unnecessary stress and reduced productivity at work.",
    },
    {
      value: "40%",
      subtitle: "of Digital Assets are Never Recovered",
      description:
        "Locked accounts, forgotten passwords, and inaccessible information affect families and organizations every day.",
    },
  ];

  return (
    <section ref={elementRef} className="py-20 bg-muted/30">
      <div className="container max-w-6xl mx-auto px-4">
        <h2
          className={`text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-16 text-foreground font-serif transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Unprepared employees cost businesses <span className="text-brand-orange">time and money</span>.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg p-8 text-center transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${200 + index * 200}ms` }}
            >
              <p className="text-5xl md:text-6xl font-bold text-foreground font-serif mb-2">
                {stat.value}
              </p>
              <p className="text-lg font-semibold text-foreground mb-4">
                {stat.subtitle}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-brand-orange mb-4">
            ENDevo Brings Clarity, Confidence, and Continuity
          </h3>
          <p className="text-muted-foreground italic text-base md:text-lg max-w-3xl mx-auto mb-8">
            With AI-powered tools and compassionate guidance, we help individuals, families, and workplaces safeguard their legacy and prepare for the future without the overwhelm.
          </p>
          <Button
            onClick={() => navigate("/solution")}
            className="bg-brand-orange hover:bg-brand-orange/90 text-white px-6 py-1.5 rounded-full text-base font-semibold"
            style={{ fontFamily: "'Open Sans', 'Helvetica', sans-serif" }}
          >
            Learn How We Solve It
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HiddenCostStatsSection;
