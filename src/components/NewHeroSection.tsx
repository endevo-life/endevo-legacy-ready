import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import heroBackground from "@/assets/hero-background.png";
const NewHeroSection = () => {
  const {
    elementRef,
    isVisible
  } = useScrollAnimation();
  return <section className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{
    backgroundImage: `url('${heroBackground}')`
  }}>
      {/* Overlay */}
      <div className="absolute inset-0 hero-gradient"></div>
      
      {/* Content */}
      <div ref={elementRef as any} className="relative z-10 container max-w-4xl mx-auto px-4 text-center text-white">
        <h1 className={`heading-hero mb-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
        transitionDelay: isVisible ? '0.2s' : '0s'
      }}>
          Are you ready for<br />
          what comes next?
        </h1>
        
        <p className={`text-lead mb-12 max-w-3xl mx-auto opacity-90 transition-all duration-1000 ease-out ${isVisible ? 'opacity-90 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
        transitionDelay: isVisible ? '0.4s' : '0s'
      }}>ENDevo educates, project manages and empowers people so their life story, values, and digital footprint are protected, preserved, and passed on with intention.</p>
        
        <a href="https://jbigogmrgex.typeform.com/to/qBsak5CQ" target="_blank" rel="noopener noreferrer">
          <button className={`bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-1000 ease-out hover-scale mb-12 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
          transitionDelay: isVisible ? '0.6s' : '0s'
        }}>
            📝 Take the Peace of Mind Assessment
          </button>
        </a>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
          <a href="#" className={`text-white hover:text-brand-orange text-lg font-medium transition-all duration-700 ease-out story-link ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
          transitionDelay: isVisible ? '0.8s' : '0s'
        }}>
            📲 Download My Final Playbook App
          </a>
          <a href="/podcast" className={`text-white hover:text-brand-orange text-lg font-medium transition-all duration-700 ease-out story-link ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
          transitionDelay: isVisible ? '1s' : '0s'
        }}>
            🎙️ Listen to the Digital Legacy Podcast
          </a>
          <a href="#" className={`text-white hover:text-brand-orange text-lg font-medium transition-all duration-700 ease-out story-link ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
          transitionDelay: isVisible ? '1.2s' : '0s'
        }}>
            💼 Start a Legacy Readiness Wellness Program
          </a>
        </div>
      </div>
    </section>;
};
export default NewHeroSection;