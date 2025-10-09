import { Search, ClipboardCheck, Shield, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
const ProcessSection = () => {
  const {
    elementRef,
    isVisible
  } = useScrollAnimation();
  return <section ref={elementRef} className="py-20 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">How It Works</h2>
          <p className="text-lg text-muted-foreground">
            Three simple steps to complete preparedness
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-[60px] left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-brand-navy via-brand-teal to-brand-navy opacity-30" />
          
          <div className="grid md:grid-cols-3 gap-8 items-start relative">
            {/* Step 1: Discover */}
            <div className={`text-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
            transitionDelay: isVisible ? '0.2s' : '0s'
          }}>
              <div className="relative inline-block mb-6">
                <div className="w-24 h-24 mx-auto bg-brand-navy rounded-full flex items-center justify-center shadow-lg relative z-10">
                  <span className="text-3xl font-bold text-white">1</span>
                </div>
                
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Discover</h3>
              <p className="text-muted-foreground leading-relaxed">Take the Peace of Mind Assessment.</p>
            </div>

            {/* Arrow 1 */}
            <div className="hidden md:flex items-center justify-center absolute top-[60px] left-[30%] transform -translate-x-1/2">
              <ArrowRight className="w-6 h-6 text-brand-teal opacity-60" />
            </div>
            
            {/* Step 2: Plan */}
            <div className={`text-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
            transitionDelay: isVisible ? '0.4s' : '0s'
          }}>
              <div className="relative inline-block mb-6">
                <div className="w-24 h-24 mx-auto bg-brand-teal rounded-full flex items-center justify-center shadow-lg relative z-10">
                  <span className="text-3xl font-bold text-white">2</span>
                </div>
                
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Plan</h3>
              <p className="text-muted-foreground leading-relaxed">Use our AI-driven platform to organize legal, financial, and digital assets.</p>
            </div>

            {/* Arrow 2 */}
            <div className="hidden md:flex items-center justify-center absolute top-[60px] left-[63%] transform -translate-x-1/2">
              <ArrowRight className="w-6 h-6 text-brand-teal opacity-60" />
            </div>
            
            {/* Step 3: Secure & Share */}
            <div className={`text-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
            transitionDelay: isVisible ? '0.6s' : '0s'
          }}>
              <div className="relative inline-block mb-6">
                <div className="w-24 h-24 mx-auto bg-brand-navy rounded-full flex items-center justify-center shadow-lg relative z-10">
                  <span className="text-3xl font-bold text-white">3</span>
                </div>
                
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Secure & Share</h3>
              <p className="text-muted-foreground leading-relaxed">Ensure your family and organization can act with clarity when it matters most.</p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className={`text-center mt-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
        transitionDelay: isVisible ? '0.8s' : '0s'
      }}>
          <button 
            className="bg-[#FF5A00] text-white font-bold text-lg px-12 py-4 rounded-xl shadow-lg hover:shadow-xl hover:bg-[#FF6A10] transition-all duration-300 transform hover:scale-105"
            style={{
              fontFamily: "'Open Sans', 'Helvetica', sans-serif"
            }}
          >
            Start Your Readiness Journey
          </button>
        </div>
      </div>
    </section>;
};
export default ProcessSection;