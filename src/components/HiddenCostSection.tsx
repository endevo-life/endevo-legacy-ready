import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import familyOverwhelmedImage from "@/assets/family-overwhelmed.png";

const HiddenCostSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  return (
    <section className="py-24 bg-background">
      <div ref={elementRef as any} className="container max-w-5xl mx-auto px-4">
        {/* Centered Title */}
        <div className={`text-center mb-16 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            The Hidden Cost of Being Unprepared
          </h2>
        </div>

        {/* Three Statistics in Grid */}
        <div className={`grid md:grid-cols-3 gap-8 mb-16 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.2s' }}>
          {/* Stat 1 */}
          <div className="text-center">
            <h3 className="text-xl font-bold text-foreground mb-3">
              Only 1 in 3 adults have a plan –
            </h3>
            <p className="text-muted-foreground">
              Most Americans are unprepared. Without a plan, families face chaos, expensive legal issues, unclear asset distribution, disputes, locked accounts, and even lost business revenue.
            </p>
          </div>
          
          {/* Stat 2 */}
          <div className="text-center">
            <h3 className="text-xl font-bold text-foreground mb-3">
              Companies Lose $33B Each Year –
            </h3>
            <p className="text-muted-foreground">
              Unpreparedness leads to lost productivity as employees juggle end-of-life and caregiving responsibilities, causing absenteeism, presenteeism, interruptions, and higher turnover.
            </p>
          </div>
          
          {/* Stat 3 */}
          <div className="text-center">
            <h3 className="text-xl font-bold text-foreground mb-3">
              Digital Assets Are Lost Forever –
            </h3>
            <p className="text-muted-foreground">
              Avoidance driven by procrastination, overwhelm, and fear leaves accounts and assets locked away, often never recovered.
            </p>
          </div>
        </div>
        
        {/* Centered Closing Statement and CTA */}
        <div className={`text-center max-w-3xl mx-auto transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.4s' }}>
          <p className="text-2xl font-bold text-brand-orange mb-4">
            ENDevo Brings Clarity, Confidence, and Continuity
          </p>
          <p className="text-lg text-muted-foreground italic mb-8">
            With AI-powered tools and compassionate guidance, we help individuals, families, and workplaces safeguard their legacy and prepare for the future without the overwhelm.
          </p>
          
          <button className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold py-4 px-8 rounded-full text-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
            Learn How We Solve It
          </button>
        </div>
      </div>
    </section>
  );
};

export default HiddenCostSection;