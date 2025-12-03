import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import consultationImage from "@/assets/consultation-image.jpg";
const ConsultationSection = () => {
  const {
    elementRef,
    isVisible
  } = useScrollAnimation();
  return <section className="py-20 bg-muted/20">
      <div ref={elementRef as any} className="container max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-foreground mb-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
          transitionDelay: isVisible ? '0.2s' : '0s'
        }}>
            Let&apos;s Start Your <span className="text-brand-orange">Legacy Journey</span>
          </h2>
          <p className={`text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
          transitionDelay: isVisible ? '0.4s' : '0s'
        }}>
            Ready to protect your family&apos;s future? Contact us today for a confidential consultation.
          </p>
        </div>

        {/* Two Column Layout */}
        
      </div>
    </section>;
};
export default ConsultationSection;