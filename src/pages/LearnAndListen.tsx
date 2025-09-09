import LearnListenHeader from "@/components/LearnListenHeader";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const LearnAndListen = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  return (
    <div className="min-h-screen bg-background">
      <LearnListenHeader />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/e1962475-57a2-4dd5-ab64-3d261596e3cd.png')`
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 hero-gradient"></div>
        
        {/* Content */}
        <div ref={elementRef as any} className="relative z-10 container max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className={`heading-hero mb-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: isVisible ? '0.2s' : '0s' }}>
            NEW EPISODE AVAILABLE<br />
            LISTEN NOW
          </h1>
          
          <h2 className={`text-2xl md:text-3xl font-semibold mb-8 text-brand-orange transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: isVisible ? '0.4s' : '0s' }}>
            How Funeral Director Explains the Future of Death Tech & AI | Matthew J. Grieco
          </h2>
          
          <div className={`mb-12 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: isVisible ? '0.6s' : '0s' }}>
            <button className="bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 ease-out hover-scale">
              Listen Now
            </button>
          </div>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="py-16 bg-background">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Life's Final Playbook, Planned for Today's Digital Age
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12">
            Safeguard Your Assets. Preserve Your Digital Legacy. Protect What Matters Most.
          </p>
        </div>
      </section>
    </div>
  );
};

export default LearnAndListen;