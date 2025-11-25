import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import Footer from "@/components/Footer";
import individualsLegacy from "@/assets/individuals-legacy-planning.png";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const WWSIndividuals = () => {
  const individualsAnimation = useScrollAnimation();
  
  return (
    <div className="min-h-screen">
      <ResponsiveNavbar />
      <main className="pt-16">
        {/* Legacy Planning for Individuals Section */}
        <section className="py-20 bg-background">
          <div className="container max-w-7xl mx-auto px-4">
            <div ref={individualsAnimation.elementRef as any} id="individuals" className="grid lg:grid-cols-2 gap-12 items-center scroll-mt-20">
              {/* Left - Image */}
              <div className={`relative transition-all duration-1000 ${individualsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <img 
                  src={individualsLegacy} 
                  alt="Person organizing legacy planning documents" 
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>

              {/* Right - Content */}
              <div className={`space-y-6 transition-all duration-1000 delay-200 ${individualsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Legacy Planning for Individuals
                </h2>
                
                <p className="text-xl text-brand-orange font-semibold">
                  Simplify your journey with AI-powered guidance and compassionate resources designed to give you peace of mind.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  ENDevo's AI-powered tools help you organize essential documents, set reminders for important milestones, and provide compassionate resources every step of the way. We remove the stress and complexity from legacy planning, so you can focus on what matters most: your family, your values, and your peace of mind.
                </p>
                
                <div className="flex gap-4">
                  <Button 
                    onClick={() => window.open('https://link.endevo.life/widget/booking/HUYkq6QZs0fI7AMtt6qH', '_blank')}
                    className="bg-brand-orange hover:bg-brand-orange-dark text-white px-6 py-1.5 text-base rounded-full"
                  >
                    Start Your Journey Today
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WWSIndividuals;
