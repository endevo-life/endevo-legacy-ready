import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FrameworkSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section ref={elementRef} className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div 
            className={`transition-all duration-700 ${
              isVisible 
                ? "opacity-100 translate-x-0" 
                : "opacity-0 -translate-x-8"
            }`}
          >
            <img 
              src="/lovable-uploads/cff05551-a4e0-4e23-9c84-f293f69611c6.png"
              alt="ENDevo Framework - Digital, Legal, Physical, Financial around Your Beliefs"
              className="w-full max-w-md mx-auto"
            />
          </div>

          {/* Content */}
          <div 
            className={`transition-all duration-700 delay-200 ${
              isVisible 
                ? "opacity-100 translate-x-0" 
                : "opacity-0 translate-x-8"
            }`}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              🌟 Our Framework
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Your decisions should reflect your values. That's why our approach focuses on four key areas:
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <span className="text-lg">🌐</span>
                <div>
                  <span className="font-semibold text-foreground">Digital</span>
                  <span className="text-muted-foreground"> – Protect your online presence and digital legacy</span>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-lg">⚖️</span>
                <div>
                  <span className="font-semibold text-foreground">Legal</span>
                  <span className="text-muted-foreground"> – Keep your documents and rights secure</span>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-lg">💵</span>
                <div>
                  <span className="font-semibold text-foreground">Financial</span>
                  <span className="text-muted-foreground"> – Build long-term stability and security</span>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-lg">🏃</span>
                <div>
                  <span className="font-semibold text-foreground">Physical</span>
                  <span className="text-muted-foreground"> – Support your health and well-being</span>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground mb-8">
              At the heart of it all are your beliefs, guiding every choice.
            </p>

            <Button variant="cta" size="lg" asChild>
              <Link to="/our-approach">
                Learn More →
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameworkSection;