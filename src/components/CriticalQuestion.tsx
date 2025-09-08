import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const CriticalQuestion = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  return (
    <section ref={elementRef} className={`py-4 bg-muted/30 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
      <div className="container max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-lead font-bold text-brand-navy mb-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          If your company lost a key leader or critical knowledge tomorrow...
        </h2>
        <p className="text-lead text-muted-foreground animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Would your employees, stakeholders, and investors know what to do next?
        </p>
      </div>
    </section>
  );
};

export default CriticalQuestion;