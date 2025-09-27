import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import oneInThreeImage from "@/assets/1in3.png";
import companyLossImage from "@/assets/company_loss.png";
import digitalLossImage from "@/assets/loss.png";

const HiddenCostSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  return (
    <section className="py-24 bg-background">
      <div ref={elementRef as any} className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <h2 className={`text-4xl md:text-5xl font-bold text-foreground text-center mb-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: isVisible ? '0.2s' : '0s' }}>
          The Hidden Cost of Being Unprepared
        </h2>
        
        {/* Intro Paragraph */}
        <p className={`text-lg text-muted-foreground text-center mb-16 max-w-4xl mx-auto transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: isVisible ? '0.3s' : '0s' }}>
          Most people—and most companies—are not ready for life's inevitable events. The result? Families face chaos. Employers lose billions. Legacies are left incomplete.
        </p>
        
        {/* Three Column Layout */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Column 1 */}
          <div className={`text-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: isVisible ? '0.4s' : '0s' }}>
            <div className="mb-6">
              <img 
                src={oneInThreeImage} 
                alt="Only 1 in 3 adults have a plan" 
                className="w-32 h-32 mx-auto object-contain drop-shadow-md"
              />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">
              Only 1 in 3 adults have a plan.
            </h3>
            <p className="text-muted-foreground">
              The majority lack preparation for critical life events, leaving families vulnerable.
            </p>
          </div>
          
          {/* Column 2 */}
          <div className={`text-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: isVisible ? '0.6s' : '0s' }}>
            <div className="mb-6">
              <img 
                src={companyLossImage} 
                alt="Companies lose billions annually" 
                className="w-32 h-32 mx-auto object-contain drop-shadow-md"
              />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">
              Companies lose $33B annually in productivity from unpreparedness.
            </h3>
            <p className="text-muted-foreground">
              Workplace disruption from unprepared events costs billions in lost productivity.
            </p>
          </div>
          
          {/* Column 3 */}
          <div className={`text-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: isVisible ? '0.8s' : '0s' }}>
            <div className="mb-6">
              <img 
                src={digitalLossImage} 
                alt="Digital accounts locked away" 
                className="w-32 h-32 mx-auto object-contain drop-shadow-md"
              />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">
              Digital accounts and assets are often locked away or lost forever.
            </h3>
            <p className="text-muted-foreground">
              Critical digital assets become inaccessible without proper planning.
            </p>
          </div>
        </div>
        
        
        {/* CTA Button */}
        <div className={`text-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: isVisible ? '1.1s' : '0s' }}>
          <button className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-300">
            Learn How We Solve It
          </button>
        </div>
      </div>
    </section>
  );
};

export default HiddenCostSection;