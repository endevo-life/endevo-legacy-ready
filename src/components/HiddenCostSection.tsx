import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import familyUnprepared from "@/assets/family-unprepared.png";

const HiddenCostSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const navigate = useNavigate();

  return (
    <section 
      ref={elementRef} 
      className={`py-20 bg-background transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}
    >
      <div className="container mx-auto px-4">
        {/* Centered Heading */}
        <h2 className="heading-section text-center mb-12">
          The Hidden Cost of Being Unprepared
        </h2>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          {/* Left: Image */}
          <div className="flex justify-center">
            <img 
              src={familyUnprepared} 
              alt="Family facing financial uncertainty" 
              className="rounded-2xl shadow-lg w-full max-w-lg"
            />
          </div>

          {/* Right: Text Content */}
          <div className="space-y-8">
            {/* Intro Paragraph */}
            <p className="text-lg text-foreground leading-relaxed">
              Most people and most companies are not ready for life's inevitable events. The result? Families face chaos. Employers lose billions. Legacies are left incomplete.
            </p>

            {/* Stat 1 */}
            <div>
              <h3 className="text-2xl font-bold text-brand-navy mb-2">
                Only 1 in 3 adults have a plan
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Most Americans are unprepared. Without a plan, families face chaos, expensive legal issues, unclear asset distribution, disputes, locked accounts, and even lost business revenue.
              </p>
            </div>

            {/* Stat 2 */}
            <div>
              <h3 className="text-2xl font-bold text-brand-navy mb-2">
                Companies Lose $33B Each Year
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Unpreparedness leads to lost productivity as employees juggle end-of-life and caregiving responsibilities, causing absenteeism, presenteeism, interruptions, and higher turnover.
              </p>
            </div>

            {/* Stat 3 */}
            <div>
              <h3 className="text-2xl font-bold text-brand-navy mb-2">
                Digital Assets Are Lost Forever
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Avoidance driven by procrastination, overwhelm, and fear leaves accounts and assets locked away, often never recovered.
              </p>
            </div>
          </div>
        </div>

        {/* Centered Bottom Section */}
        <div className="text-center space-y-6">
          <h3 className="text-3xl font-bold text-brand-orange">
            ENDevo Brings Clarity, Confidence, and Continuity
          </h3>
          
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            With AI-powered tools and compassionate guidance, we help individuals, families, and workplaces safeguard their legacy and prepare for the future without the overwhelm.
          </p>

          <Button 
            onClick={() => {
              navigate('/solution');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            size="lg"
            className="bg-brand-orange hover:bg-brand-orange-hover text-white font-bold px-8 py-6 rounded-full text-lg transition-all duration-150 ease-out hover:scale-105"
          >
            Learn How We Solve It
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HiddenCostSection;