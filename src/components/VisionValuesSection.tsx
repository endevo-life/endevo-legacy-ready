import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
const VisionValuesSection = () => {
  const {
    elementRef,
    isVisible
  } = useScrollAnimation();
  return <section ref={elementRef} className="py-24 bg-background">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        {/* Heading */}
        <h2 className={`text-5xl md:text-6xl font-bold mb-8 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
        fontFamily: 'serif'
      }}>
          Vision & <span className="text-[#fe5d01]">Values</span>
        </h2>

        {/* Subtext */}
        <p className={`text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
        transitionDelay: '200ms'
      }}>We envision a world where legacy readiness and digital resilience are as common as financial planning. Our values of Compassion, Clarity, Resilience, and Innovation guide every step.</p>

        {/* CTA Button */}
        <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
        transitionDelay: '400ms'
      }}>
          <Button 
            size="lg" 
            className="text-white font-bold py-3 px-12 rounded-full text-lg transition-all duration-300 ease-out"
            style={{
              backgroundColor: '#FF4D00'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#E64400'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FF4D00'}
            onClick={() => window.location.href = '/company'}
          >
            Read More About Us
          </Button>
        </div>
      </div>
    </section>;
};
export default VisionValuesSection;