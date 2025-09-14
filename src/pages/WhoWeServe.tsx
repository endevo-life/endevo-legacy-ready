import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import heroBackground from "@/assets/who-we-serve-hero-bg.jpg";
import professionalHeadshot from "@/assets/professional-headshot.jpg";
import whyEndevoBackground from "@/assets/why-endevo-bg.jpg";

const WhoWeServe = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="min-h-screen bg-cover bg-center bg-no-repeat relative flex items-center justify-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <div 
            ref={elementRef as any}
            className={`max-w-4xl text-center transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Partnering with Organizations to Build Resilience, Protect People, and Ensure Continuity.
            </h1>
          </div>
        </div>
      </section>

      {/* Industries Served Section */}
      <section className="py-20 bg-background">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Industries Served</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img 
                src={professionalHeadshot} 
                alt="Professional consulting expert" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-3">Corporations & Enterprises</h3>
                  <p className="text-muted-foreground">Safeguard business continuity, minimize disruption, and strengthen employee resilience in uncertain times.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-3">HR & EAP Leaders</h3>
                  <p className="text-muted-foreground">Enhance workforce well-being with integrated readiness tools and peace-of-mind support.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-3">Financial & Insurance Firms</h3>
                  <p className="text-muted-foreground">Differentiate offerings with value-added readiness services that build trust and customer loyalty.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-3">Healthcare Organizations</h3>
                  <p className="text-muted-foreground">Support providers, patients, and families with tools that reduce stress and ensure informed decision-making.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why ENDevo Section */}
      <section 
        className="py-20 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${whyEndevoBackground})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="text-center lg:text-left animate-fade-in">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Scalable, adaptable, and compliant.
              </h3>
            </div>
            <div className="text-center lg:text-right animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Strengthens both culture and bottom line.
              </h3>
            </div>
          </div>
          
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Why ENDevo?</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-white/90 leading-relaxed">
                Something written here Something written here Something written here
                Something written here Something written here
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhoWeServe;