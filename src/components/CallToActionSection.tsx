import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const CallToActionSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  return (
    <section className="py-12 bg-background">
      <div ref={elementRef as any} className="container max-w-4xl mx-auto px-4 text-center">
        <p className={`text-lead text-foreground leading-relaxed transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="font-bold">Don't leave the significant people in your life in the dark.</span>{" "}
          <span className="font-normal">Taking the first step toward peace of mind is quick, easy, and incredibly important.</span>
        </p>
      </div>
    </section>
  );
};

export default CallToActionSection;