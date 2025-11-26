import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import endevoImage from "@/assets/endevo-preparedness-bg.jpg";
const EndevoPurposeSection = () => {
  const {
    elementRef,
    isVisible
  } = useScrollAnimation();
  const navigate = useNavigate();
  return <section className="relative py-12 bg-cover bg-center bg-no-repeat" style={{
    backgroundImage: `url('${endevoImage}')`
  }}>
      {/* Gradient overlay - left black to right transparent */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
      
      {/* Content */}
      <div ref={elementRef as any} className="relative z-10 container max-w-7xl mx-auto px-4">
        <div className="max-w-3xl">
          <h2 className={`text-3xl md:text-4xl font-bold text-white mb-8 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            ENDevo is redefining preparedness.
          </h2>
          <div className="space-y-8">
            <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{
            transitionDelay: isVisible ? '0.2s' : '0s'
          }}>
              <h3 className="text-2xl font-bold text-white mb-1">For Companies (HR/EAP):</h3>
              <p className="text-white/90 text-lg mb-4">Reduce risk, protect employees, safeguard continuity.</p>
              <a href="/for-companies" className="text-brand-orange hover:text-brand-orange-dark font-semibold text-lg transition-colors">
                Learn More
              </a>
            </div>

            <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{
            transitionDelay: isVisible ? '0.4s' : '0s'
          }}>
              <h3 className="text-2xl font-bold text-white mb-1">For Service Providers:</h3>
              <p className="text-white/90 text-lg mb-4">Connect with clients and grow your practice through our trusted network.</p>
              <a href="/wws-service-providers" className="text-brand-orange hover:text-brand-orange-dark font-semibold text-lg transition-colors">
                Join Our Network
              </a>
            </div>

            <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{
            transitionDelay: isVisible ? '0.6s' : '0s'
          }}>
              <h3 className="text-2xl font-bold text-white mb-1">For Individuals:</h3>
              <p className="text-white/90 text-lg mb-4">AI-powered tools for personal legacy & digital preparedness.</p>
              <a href="/for-individuals" className="text-brand-orange hover:text-brand-orange-dark font-semibold text-lg transition-colors">
                Get Started
              </a>
            </div>
          </div>
          
          
        </div>
      </div>
    </section>;
};
export default EndevoPurposeSection;