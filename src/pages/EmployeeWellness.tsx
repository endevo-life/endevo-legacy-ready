import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const EmployeeWellness = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen">
      <ResponsiveNavbar />
      <main>
        {/* Hero Section */}
        <section 
          ref={elementRef as any}
          className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/lovable-uploads/placeholder-wellness-hero.jpg')`
          }}
        >
          {/* Dark overlay for text contrast */}
          <div className="absolute inset-0 bg-black/50"></div>
          
          {/* Content */}
          <div className="relative z-10 container max-w-4xl mx-auto px-4 text-center">
            <h1 
              className={`font-bold mb-6 transition-all duration-1000 ease-out text-4xl md:text-5xl lg:text-6xl text-white ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{
                fontFamily: 'serif',
                transitionDelay: isVisible ? '0.2s' : '0s'
              }}
            >
              Empowering Employees to Thrive in Work, Life, and Legacy
            </h1>
            
            <p 
              className={`text-lg md:text-xl mb-12 leading-relaxed transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{
                color: '#e5e7eb',
                transitionDelay: isVisible ? '0.4s' : '0s'
              }}
            >
              Our Employee Wellness Program helps individuals find balance, build resilience, and prepare for life's transitions — because a strong legacy starts with a healthy, fulfilled you.
            </p>
            
            <div 
              className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{
                transitionDelay: isVisible ? '0.6s' : '0s'
              }}
            >
              <Button 
                className="bg-[#002147] hover:bg-[#003366] text-white font-bold py-4 px-9 rounded-full text-lg shadow-lg hover:shadow-2xl transition-all duration-300"
                onClick={() => window.location.href = 'https://jbigogmrgex.typeform.com/to/qBsak5CQ'}
              >
                Join the Program
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EmployeeWellness;
