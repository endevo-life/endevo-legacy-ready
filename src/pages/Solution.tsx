import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Solution = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen">
      <Header />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-variant">
        <div className="container max-w-7xl mx-auto px-4">
          <div 
            ref={elementRef as any}
            className={`text-center transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Solution
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Comprehensive digital legacy and end-of-life planning solutions designed to protect what matters most.
            </p>
          </div>
        </div>
      </section>

      {/* Content sections would go here */}
      <section className="py-20">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Solution Details Coming Soon</h2>
            <p className="text-lg text-muted-foreground mb-8">
              This page is under construction. Please check back soon for comprehensive solution details.
            </p>
            <Button variant="cta" size="lg">
              Contact Us for More Information
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solution;