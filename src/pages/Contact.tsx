import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import Footer from "@/components/Footer";
import ConsultationSection from "@/components/ConsultationSection";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Contact = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <ResponsiveNavbar />
      
      {/* Hero Section */}
      <section className="relative py-20 pt-32 bg-gradient-to-b from-primary/5 to-background">
        <div className="container max-w-7xl mx-auto px-4">
          <div ref={elementRef as any} className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Get in <span className="text-brand-orange">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ready to take control of your legacy? We're here to help you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Consultation Section with Contact Form */}
      <ConsultationSection />

      <Footer />
    </div>
  );
};

export default Contact;
