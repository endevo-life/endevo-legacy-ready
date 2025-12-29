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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-start relative">
            {/* Step 1 */}
            <div className={`text-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
            transitionDelay: isVisible ? '0.2s' : '0s'
          }}>
              <div className="relative inline-block mb-6">
                <div className="w-24 h-24 mx-auto bg-brand-navy rounded-full flex items-center justify-center shadow-lg relative z-10">
                  <span className="text-3xl font-bold text-white">1</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Assess Readiness</h3>
              <p className="text-muted-foreground leading-relaxed">Provide employees with access to our Peace of Mind Assessment to quickly identify their level of preparedness.</p>
            </div>

            {/* Arrow 1 */}
            <div className="hidden lg:flex items-center justify-center absolute top-[48px] left-[22%] z-20">
              <ArrowRight className="w-6 h-6 text-brand-orange" />
            </div>
            
            {/* Step 2 */}
            <div className={`text-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
            transitionDelay: isVisible ? '0.4s' : '0s'
          }}>
              <div className="relative inline-block mb-6">
                <div className="w-24 h-24 mx-auto bg-brand-teal rounded-full flex items-center justify-center shadow-lg relative z-10">
                  <span className="text-3xl font-bold text-white">2</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Organize & Secure</h3>
              <p className="text-muted-foreground leading-relaxed">Guide staff with AI-powered tools that help them organize legal, financial, and digital assets in one secure place.</p>
            </div>

            {/* Arrow 2 */}
            <div className="hidden lg:flex items-center justify-center absolute top-[48px] left-[47%] z-20">
              <ArrowRight className="w-6 h-6 text-brand-orange" />
            </div>
            
            {/* Step 3 */}
            <div className={`text-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
            transitionDelay: isVisible ? '0.6s' : '0s'
          }}>
              <div className="relative inline-block mb-6">
                <div className="w-24 h-24 mx-auto bg-brand-navy rounded-full flex items-center justify-center shadow-lg relative z-10">
                  <span className="text-3xl font-bold text-white">3</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Support Well-being</h3>
              <p className="text-muted-foreground leading-relaxed">Offer confidence and support that reduces stress, protects well-being, and lowers the risk of extended absences.</p>
            </div>

            {/* Arrow 3 */}
            <div className="hidden lg:flex items-center justify-center absolute top-[48px] left-[72%] z-20">
              <ArrowRight className="w-6 h-6 text-brand-orange" />
            </div>

            {/* Step 4 */}
            <div className={`text-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
            transitionDelay: isVisible ? '0.8s' : '0s'
          }}>
              <div className="relative inline-block mb-6">
                <div className="w-24 h-24 mx-auto bg-brand-teal rounded-full flex items-center justify-center shadow-lg relative z-10">
                  <span className="text-3xl font-bold text-white">4</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Strengthen Continuity</h3>
              <p className="text-muted-foreground leading-relaxed">Strengthen continuity by ensuring employees can focus on their work, even while navigating personal challenges.</p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className={`text-center mt-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
        transitionDelay: isVisible ? '0.8s' : '0s'
      }}>
          <button 
            className="bg-[#FF5A00] text-white font-semibold text-base px-6 py-1.5 rounded-full shadow-lg hover:shadow-xl hover:bg-[#FF6A10] transition-all duration-300 transform hover:scale-105"
            style={{
              fontFamily: "'Open Sans', 'Helvetica', sans-serif"
            }}
            onClick={() => window.open('https://jbigogmrgex.typeform.com/to/qBsak5CQ', '_blank')}
          >
            Take a free Peace of Mind Assessment
          </button>
        </div>
      </div>
    </section>;
};
export default ProcessSection;