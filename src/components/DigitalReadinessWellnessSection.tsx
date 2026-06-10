
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import { Clock, Calendar, BarChart2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const highlights = [
  {
    icon: Clock,
    title: "Meets employees where they are",
    description: "Support that activates based on real life events, not a fixed schedule. Whether an employee is planning ahead or in crisis, the program responds.",
  },
  {
    icon: Calendar,
    title: "Contained. Measurable. Expandable.",
    description: "Start with a defined employee group, prove outcomes, then scale. No long-term commitment required.",
  },
  {
    icon: BarChart2,
    title: "Data-backed ROI",
    description: "Track absenteeism, productivity loss, and HR escalations before and after. Built for your business case.",
  },
];

const DigitalReadinessWellnessSection = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  const navigate = useNavigate();


  return (
    <section
      ref={elementRef}
      className="bg-muted/20 py-20"
    >
      <div className="container max-w-6xl mx-auto px-4">

        {/* Header */}
        <div
          className={`text-center mb-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Legacy Readiness &{" "}
            <span className="text-brand-orange">Digital Resilience</span>
          </h2>
          <p className="text-xl font-semibold text-brand-orange mb-3">
            Prepare today, protect tomorrow.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-5xl mx-auto">
            Our comprehensive employee wellness program helps employees complete critical life and digital planning decisions before a crisis occurs. By combining step-by-step roadmap, 1:1 accountability and productivity tools, we reduce the feelings of overwhelm while ensuring life stories and digital footprints are protected, preserved, and passed on intentionally.
          </p>
        </div>

        {/* Program highlights + image */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
        <div className="flex-1">
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6">
            Program highlights
          </p>

          <ul className="space-y-8 mb-10">
            {highlights.map((item) => {
              const IconComponent = item.icon;
              return (
                <li key={item.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center shrink-0 mt-0.5">
                    <IconComponent
                      className="w-5 h-5 text-brand-orange"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-lg mb-1">
                      {item.title}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>

        </div>

        {/* Image */}
        <div className="flex-1">
          <img
            src="https://assets.cdn.filesafe.space/f5ehsbHfdFg2UsHEIb49/media/69c6f3131c63fbadc6ba7bab.jpeg"
            alt="Digital Readiness"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        </div>

        {/* CTA — centered across full width */}
        <div className="flex justify-center gap-4 mt-10">
          <Button
            onClick={() => window.open("https://link.endevo.life/widget/booking/HUYkq6QZs0fI7AMtt6qH", "_blank")}
            className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-3 text-base font-semibold rounded-full"
            style={{ fontFamily: "'Open Sans', 'Helvetica', sans-serif" }}
          >
            Request Program Info
          </Button>
          <Button
            onClick={() => navigate("/solution#about-program")}
            variant="outline"
            className="px-8 py-3 text-base font-semibold rounded-full border-brand-orange text-brand-orange hover:bg-brand-orange/10 hover:text-brand-orange"
            style={{ fontFamily: "'Open Sans', 'Helvetica', sans-serif" }}
          >
            Learn More
          </Button>
        </div>

      </div>
    </section>
  );
};

export default DigitalReadinessWellnessSection;
