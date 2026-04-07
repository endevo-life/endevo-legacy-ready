import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
const HiddenCostStatsSection = () => {
  const {
    elementRef,
    isVisible
  } = useScrollAnimation();
  const navigate = useNavigate();
  const stats = [{
    value: "30%",
    subtitle: "Productivity Drop",
    description: "Employees dealing with personal loss experience a 20–30% productivity drop for months."
  }, {
    value: "$1,900",
    subtitle: "Per Employee Lost",
    description: "Businesses lose an estimated $1,900 per employee annually due to disorganization and crisis-driven leave."
  }, {
    value: "25%",
    subtitle: "Major Life Events",
    description: "25% of workers face a major life event each year that requires immediate documentation."
  }];
  return <section ref={elementRef} className="pt-20 pb-10 bg-muted/30">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-2 text-foreground font-serif transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          When employees are unprepared,<br />businesses <span className="text-brand-orange">feel the impact</span>.
        </h2>
        <p className={`text-center text-muted-foreground text-base md:text-lg max-w-3xl mx-auto mb-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{
        transitionDelay: "100ms"
      }}>Major life events don't pause work. Without preparation, they create stress, disruption, and lost productivity across teams. <span className="font-bold">
ENDevo helps organizations proactively support employees before life disruptions turn into workplace challenges.</span></p>

        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{
        transitionDelay: "200ms"
      }}>
          
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, index) => <div key={index} className={`bg-white rounded-xl shadow-lg p-8 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{
          transitionDelay: `${400 + index * 200}ms`
        }}>
              <p className="text-5xl md:text-6xl font-bold text-foreground font-serif mb-2">
                {stat.value}
              </p>
              <p className="text-lg font-semibold text-foreground mb-4">
                {stat.subtitle}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {stat.description}
              </p>
            </div>)}
        </div>

        <div className={`text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{
        transitionDelay: "1000ms"
      }}>
          <Button onClick={() => navigate("/solution")} variant="outline" className="border-2 border-brand-navy text-brand-navy bg-transparent hover:bg-brand-navy/10 px-6 py-1.5 rounded-full text-base font-semibold" style={{
          fontFamily: "'Open Sans', 'Helvetica', sans-serif"
        }}>
            Learn How We Solve It
          </Button>
        </div>
      </div>
    </section>;
};
export default HiddenCostStatsSection;