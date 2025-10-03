import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import heroBackground from "@/assets/resources-hero-bg.jpg";
import nikiLifestyle from "@/assets/niki-lifestyle.jpg";
import mobileApp from "@/assets/mobile-app.png";

const Resources = () => {
  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { elementRef: peaceRef, isVisible: peaceVisible } = useScrollAnimation();
  const { elementRef: appRef, isVisible: appVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <div className={`max-w-4xl ${heroVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Your Hub for Legacy Readiness & Digital Preparedness
            </h1>
            <p className="text-xl text-white/90 mb-12 max-w-3xl">
              Practical tools, expert insights, and digital guides to help organizations and employees prepare with confidence.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6">
              <Button 
                variant="cta" 
                size="lg" 
                className="flex items-center gap-2"
                onClick={() => window.open('https://digitallegacypodcast.com/', '_blank')}
              >
                🎙️ Learn from Experts
              </Button>
              <Button 
                variant="cta" 
                size="lg" 
                className="flex items-center gap-2"
                onClick={() => window.open('https://play.google.com/store/apps/details?id=com.p4tze2b0necm.pgwvu5pucapp&hl=en_US', '_blank')}
              >
                📱 Plan with Our App
              </Button>
              <Button variant="cta" size="lg" className="flex items-center gap-2">
                📘 Explore Practical Guides
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Peace of Mind Section */}
      <section id="peace-of-mind"
        ref={peaceRef}
        className="py-20 bg-cover bg-center bg-no-repeat relative"
        style={{ 
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.3)), url(${nikiLifestyle})` 
        }}
      >
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`${peaceVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <h2 className="text-4xl font-bold text-white mb-6">
                Peace of Mind for Life's What-Ifs
              </h2>
              <p className="text-lg text-white/90 mb-8">
                Life is unpredictable, but your loved ones don't have to face uncertainty alone. With ENDevo, you can organize plans, protect your digital and financial legacy, and give your family the confidence of knowing exactly what to do — no matter what tomorrow brings.
              </p>
              <Button 
                variant="cta" 
                size="lg" 
                className="mb-4"
                onClick={() => window.open('https://digitallegacypodcast.com/', '_blank')}
              >
                Learn and Listen
              </Button>
              <p className="text-sm text-white/70">
                Explore blogs, podcasts, and videos where our founder shares insights, stories, and guidance to help you prepare with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Access Care Anywhere Section */}
      <section id="mobile-app" ref={appRef} className="py-20">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`${appVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Access Care Anywhere
              </h2>
              <h3 className="text-2xl font-semibold text-muted-foreground mb-8">
                With Our Mobile App
              </h3>
              <ul className="space-y-4 text-lg mb-8">
                <li>Stay connected with your care team and access important documents</li>
                <li>Schedule consultations and receive updates in real-time</li>
                <li>Secure messaging with healthcare professionals and advisors</li>
                <li>Digital document storage and easy sharing capabilities</li>
                <li>Emergency contact features and important notifications</li>
                <li>Personalized care plans and progress tracking</li>
                <li>24/7 access to resources and support materials</li>
                <li>Family coordination tools and shared decision-making</li>
                <li>Appointment reminders and care schedule management</li>
              </ul>
            </div>
            <div className={`${appVisible ? 'animate-fade-in' : 'opacity-0'} flex justify-center`}>
              <img 
                src={mobileApp} 
                alt="My Final Playbook Mobile App" 
                className="max-w-md w-full h-auto"
              />
            </div>
          </div>
          <div className="text-center mt-12">
            <Button 
              variant="cta" 
              size="lg"
              onClick={() => window.open('https://play.google.com/store/apps/details?id=com.p4tze2b0necm.pgwvu5pucapp&pcampaignid=web_share', '_blank')}
            >
              Get the App
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Resources;