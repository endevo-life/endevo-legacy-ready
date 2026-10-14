import { Compass, Sunrise } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const statements = [
  {
    icon: Compass,
    label: "Our Mission",
    accent: "text-brand-orange",
    border: "border-t-brand-orange",
    body: (
      <>
        To normalize the conversation around death, dying, and end-of-life
        planning. We turn complex decisions into clear, actionable steps backed
        by modern tools, so people can{" "}
        <span className="font-semibold text-foreground">
          live fully ~ die ready
        </span>
        .
      </>
    ),
  },
  {
    icon: Sunrise,
    label: "Our Vision",
    accent: "text-brand-teal",
    border: "border-t-brand-teal",
    body: (
      <>
        A world where preparing for the end-of-life is a normal act of care, not
        one we avoid. Planning for life's most inevitable event gives everyone
        the peace of mind of being ready, for themselves and the people they
        leave behind.
      </>
    ),
  },
];

const MissionVisionSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section ref={elementRef} className="py-20 bg-muted/30">
      <div className="container max-w-6xl mx-auto px-4">
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-12 text-foreground font-serif transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          Our <span className="text-brand-orange">Mission</span> &amp;{" "}
          <span className="text-brand-teal">Vision</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {statements.map((item, index) => (
            <div
              key={item.label}
              className={`bg-white rounded-xl shadow-lg border-t-4 ${item.border} p-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${200 + index * 200}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <item.icon className={`w-7 h-7 ${item.accent}`} />
                <h3 className="text-2xl font-bold text-foreground font-serif">
                  {item.label}
                </h3>
              </div>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
