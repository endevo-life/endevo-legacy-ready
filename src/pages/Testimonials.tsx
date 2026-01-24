import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import FamilyTestimonialsSection from "@/components/FamilyTestimonialsSection";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Testimonials = () => {
  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation();
  
  return (
    <div className="min-h-screen bg-background">
      <ResponsiveNavbar />
      
      {/* Hero Section */}
      <section ref={heroRef as any} className="py-20 pt-32 bg-muted/20">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h1 className={`text-4xl md:text-5xl font-bold text-foreground mb-6 transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Client <span className="text-brand-orange">Testimonials</span>
          </h1>
          <p className={`text-lg text-muted-foreground max-w-3xl mx-auto transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '0.2s'}}>
            Hear from families and individuals who have found peace of mind through ENDevo's legacy planning services.
          </p>
        </div>
      </section>
      
      {/* Family Testimonials */}
      <FamilyTestimonialsSection />
      
      {/* Video Testimonials */}
      <TestimonialsSection />
      
      <Footer />
    </div>
  );
};

export default Testimonials;
