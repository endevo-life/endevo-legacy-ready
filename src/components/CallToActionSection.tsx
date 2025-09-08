import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const CallToActionSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  return (
    <section ref={elementRef} className={`py-12 bg-background transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
      <div className="container max-w-4xl mx-auto px-4 text-center">
        <p className="text-lead text-foreground leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <span className="font-bold animate-fade-in" style={{ animationDelay: '0.4s' }}>Don't leave the significant people in your life in the dark.</span>{" "}
          <span className="font-normal animate-fade-in" style={{ animationDelay: '0.6s' }}>Taking the first step toward peace of mind is quick, easy, and incredibly important.</span>
        </p>
      </div>
    </section>
  );
};

export default CallToActionSection;