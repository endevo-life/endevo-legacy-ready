import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import familyOverwhelmedImage from "@/assets/family-overwhelmed.png";

const HiddenCostSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  return (
    <section className="py-24 bg-background">
      <div ref={elementRef as any} className="container max-w-7xl mx-auto px-4">
        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={familyOverwhelmedImage} 
                alt="Family overwhelmed with documents and planning" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          {/* Right Column - Content */}
          <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: '0.2s' }}>
            {/* Headline */}
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
              The Hidden Cost of Being Unprepared
            </h2>
            
            {/* Intro Paragraph */}
            <p className="text-lg text-muted-foreground mb-8">
              Most people and most companies are not ready for life's inevitable events. The result? Families face chaos. Employers lose billions. Legacies are left incomplete.
            </p>
            
            {/* Subsection 1 */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-foreground mb-3">
                Only 1 in 3 adults have a plan –
              </h3>
              <p className="text-muted-foreground">
                Most Americans are unprepared. Without a plan, families face chaos, expensive legal issues, unclear asset distribution, disputes, locked accounts, and even lost business revenue.
              </p>
            </div>
            
            {/* Subsection 2 */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-foreground mb-3">
                Companies Lose $33B Each Year –
              </h3>
              <p className="text-muted-foreground">
                Unpreparedness leads to lost productivity as employees juggle end-of-life and caregiving responsibilities, causing absenteeism, presenteeism, interruptions, and higher turnover.
              </p>
            </div>
            
            {/* Subsection 3 */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-foreground mb-3">
                Digital Assets Are Lost Forever –
              </h3>
              <p className="text-muted-foreground">
                Avoidance driven by procrastination, overwhelm, and fear leaves accounts and assets locked away, often never recovered.
              </p>
            </div>
            
            {/* Closing Statement */}
            <div className="text-center mb-6">
              <p className="text-2xl font-bold text-brand-orange mb-2">
                ENDevo Brings Clarity, Confidence, and Continuity
              </p>
              <p className="text-lg text-muted-foreground italic">
                With AI-powered tools and compassionate guidance, we help individuals, families, and workplaces safeguard their legacy and prepare for the future without the overwhelm.
              </p>
            </div>
            
            {/* CTA Button */}
            <div className="text-center">
              <button className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold py-4 px-8 rounded-full text-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
                Learn How We Solve It
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HiddenCostSection;