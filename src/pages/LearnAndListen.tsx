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
      
      {/* Latest Episodes Section */}
      <section className="py-16 bg-background">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">
            Catch the Latest Episodes
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Podcast 1 */}
            <div className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src="/lovable-uploads/8898de3e-9543-4c9d-97de-071f00c6eee4.png" 
                alt="How Funeral Director Explains the Future of Death Tech & AI"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-muted-foreground mb-2">Sep 02, 2025</p>
                <h3 className="text-lg font-semibold mb-4 text-foreground">
                  How Funeral Director Explains the Future of Death Tech & AI | Matthew J. Grieco
                </h3>
                <button className="bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300">
                  Listen
                </button>
              </div>
            </div>
            
            {/* Podcast 2 */}
            <div className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src="/lovable-uploads/749c3f80-6702-4d32-bebf-909d9fe0c17e.png" 
                alt="Can AI Preserve Our Consciousness After Death?"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-muted-foreground mb-2">Aug 19, 2025</p>
                <h3 className="text-lg font-semibold mb-4 text-foreground">
                  Can AI Preserve Our Consciousness After Death? | Joshua Orsak
                </h3>
                <button className="bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300">
                  Listen
                </button>
              </div>
            </div>
            
            {/* Podcast 3 */}
            <div className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src="/lovable-uploads/a60ccfdb-e0ce-4aca-a82a-c5a915485e1f.png" 
                alt="How to Avoid Digital Scams in an AI Era"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-muted-foreground mb-2">Aug 05, 2025</p>
                <h3 className="text-lg font-semibold mb-4 text-foreground">
                  How to Avoid Digital Scams in an AI Era | Kurtis Baker
                </h3>
                <button className="bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300">
                  Listen
                </button>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-8 rounded-lg transition-all duration-300">
              View All
            </button>
          </div>
        </div>
      </section>
      
      {/* Subscribe Section */}
      <section className="relative py-16 bg-brand-navy overflow-hidden">
        {/* Texture Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy opacity-90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px] opacity-20"></div>
        <div className="relative z-10 container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-stretch">
            {/* Image */}
            <div className="flex justify-center items-center">
              <img 
                src="/lovable-uploads/b9741420-16a0-47ce-919b-996cde302c8a.png" 
                alt="Digital Asset Inventory Worksheet"
                className="max-w-sm w-full h-full object-contain shadow-lg scale-90 border border-white/20"
              />
            </div>
            
            {/* Text Content */}
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Subscribe for Special Perks!
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                Join today and receive the Digital Asset Inventory Worksheet. This downloadable PDF makes it quick and easy to document and store your online accounts, subscriptions and assets.
              </p>
              <button className="bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover-scale">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* About the Digital Legacy Podcast Section */}
      <section className="py-16 bg-background">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-stretch">
            {/* Text Content */}
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                About the Digital Legacy Podcast
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
                Welcome to the Digital Legacy Podcast, where host Niki Weiss and expert guests explore the complexities of end-of-life and estate planning in the digital age. Each week, they share inspiring stories and practical advice on safeguarding your digital and physical assets, ensuring your loved ones avoid chaos, confusion, and costly legal battles if something happens to you.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
                We'll dive into the four pillars of end-of-life planning - Legal, Financial, Physical, and Digital - and break down each pillar into actionable steps, so you gain peace of mind knowing that every facet of your life and legacy is documented and secure.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Subscribe today to safeguard your digital legacy and protect what matters most in this high-tech, digital age.
              </p>
            </div>
            
            {/* Image */}
            <div className="flex justify-center items-center">
              <img 
                src="/lovable-uploads/0b1785cd-e006-48b9-bbca-31ba6ccc6f98.png" 
                alt="Death and Dying in the Digital Age"
                className="max-w-md w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LearnAndListen;