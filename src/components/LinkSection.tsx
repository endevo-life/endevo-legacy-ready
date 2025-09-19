import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const LinkSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  return (
    <section className="py-16 bg-background">
      <div ref={elementRef as any} className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-row items-center justify-center gap-4 md:gap-8 lg:gap-12 flex-wrap">
          <a 
            href="#" 
            className={`text-brand-navy hover:text-brand-orange text-lg font-medium transition-all duration-700 ease-out story-link ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: isVisible ? '0.2s' : '0s' }}
          >
            📲 Download My Final Playbook App
          </a>
          <a 
            href="/podcast" 
            className={`text-brand-navy hover:text-brand-orange text-lg font-medium transition-all duration-700 ease-out story-link ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: isVisible ? '0.4s' : '0s' }}
          >
            🎙️ Listen to the Digital Legacy Podcast
          </a>
          <a 
            href="#" 
            className={`text-brand-navy hover:text-brand-orange text-lg font-medium transition-all duration-700 ease-out story-link ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: isVisible ? '0.6s' : '0s' }}
          >
            💼 Start a Legacy Readiness Wellness Program
          </a>
        </div>
      </div>
    </section>
  );
};

export default LinkSection;