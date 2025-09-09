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
      <section className="py-8 bg-background">
        <div className="container max-w-6xl mx-auto px-2 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Life's Final Playbook, Planned for Today's Digital Age
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Safeguard Your Assets. Preserve Your Digital Legacy. Protect What Matters Most.
          </p>
          
          <h3 className="text-2xl md:text-3xl font-semibold mb-12 text-foreground">
            Subscribe on Your Favorite Platform
          </h3>
          
          {/* Podcast Platform Buttons */}
          <div className="flex justify-center items-center gap-12">
            <a href="#" className="hover-scale transition-transform duration-300">
              <img 
                src="/lovable-uploads/ff2f1422-2b37-4f11-b883-e24612bbb6af.png" 
                alt="Listen on Spotify" 
                className="h-auto w-auto scale-110"
              />
            </a>
            <a href="#" className="hover-scale transition-transform duration-300">
              <img 
                src="/lovable-uploads/f6babc84-f525-4844-86a2-dd58e7313d90.png" 
                alt="Listen on Apple Podcasts" 
                className="h-auto w-auto scale-110"
              />
            </a>
            <a href="#" className="hover-scale transition-transform duration-300">
              <img 
                src="/lovable-uploads/a4b7dcdc-52dd-431f-a44a-9bd6232bc7dd.png" 
                alt="Listen on YouTube" 
                className="h-auto w-auto scale-110"
              />
            </a>
            <a href="#" className="hover-scale transition-transform duration-300">
              <img 
                src="/lovable-uploads/9d063b21-239e-4b1d-aea8-4a4ccdc0c9ba.png" 
                alt="Listen on Pandora" 
                className="h-auto w-auto scale-110"
              />
            </a>
            <a href="#" className="hover-scale transition-transform duration-300">
              <img 
                src="/lovable-uploads/52a87b6b-8b2f-4bc0-9c73-b68f62df7b5d.png" 
                alt="Listen on Amazon Music" 
                className="h-auto w-auto scale-110"
              />
            </a>
          </div>
        </div>
      </section>
      
      {/* Why Tune In Section */}
      <section 
        className="relative py-16 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/c4e16bc3-599c-45d7-b44e-39d8c6f5ef91.png')`
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
        
        <div className="relative z-10 container max-w-6xl mx-auto px-4 flex items-center min-h-[600px]">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-left text-white">
              Why Tune In to the Digital Legacy Podcast
            </h2>
            
            <div>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              In today's high-tech world, death isn't just about physical belongings. It's about safeguarding your digital legacy and online assets. Yet, most of us are totally unprepared. Then, the inevitable happens. And our loved ones are left in a mess of chaos, confusion, or costly legal battles. What if this could all be avoided by having a plan in place before something happens?
            </p>
            
            <div className="mb-8">
              <p className="text-lg md:text-xl text-white mb-6 font-semibold">
                Tune in to hear from Niki Weiss and leading experts as they explore how to:
              </p>
              
              <ul className="space-y-4 text-lg text-white/90">
                <li className="flex items-start">
                  <span className="text-brand-orange mr-3 mt-1">•</span>
                  Confront the hard truths about death, illness, and incapacitation in the digital age
                </li>
                <li className="flex items-start">
                  <span className="text-brand-orange mr-3 mt-1">•</span>
                  Protect your digital, physical, legal, and financial assets
                </li>
                <li className="flex items-start">
                  <span className="text-brand-orange mr-3 mt-1">•</span>
                  Incorporate digital asset management in the estate planning process
                </li>
                <li className="flex items-start">
                  <span className="text-brand-orange mr-3 mt-1">•</span>
                  Face and initiate meaningful conversations about death, dying, and end-of-life planning
                </li>
                <li className="flex items-start">
                  <span className="text-brand-orange mr-3 mt-1">•</span>
                  Create a Final Playbook for peace of mind and provide a roadmap for those you leave behind
                </li>
              </ul>
            </div>
            
            <p className="text-lg md:text-xl text-white font-semibold text-left">
              Life is full of surprises. What happens to your physical and digital assets when you die shouldn't be.
            </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LearnAndListen;