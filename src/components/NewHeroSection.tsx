import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import heroBackground from "@/assets/hero-sunrise-tree.png";
const NewHeroSection = () => {
  const {
    elementRef,
    isVisible
  } = useScrollAnimation();
  return <section className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{
    backgroundImage: `url('${heroBackground}')`
  }}>
      {/* Subtle overlay for text readability */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Content */}
      <div ref={elementRef as any} className="relative z-10 container max-w-5xl mx-auto px-4 text-center text-white">
        <h1 className={`font-bold mb-8 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
        fontFamily: 'serif',
        fontSize: '96px',
        transitionDelay: isVisible ? '0.2s' : '0s'
      }}>
          Are you ready for what comes next?
        </h1>
        
        <p className={`text-lg md:text-xl mb-12 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
        transitionDelay: isVisible ? '0.4s' : '0s'
      }}>ENDevo educates, project manages and empowers people so their life story, values, and digital footprint are protected, preserved, and passed on with intention.</p>
        
        <a href="https://jbigogmrgex.typeform.com/to/qBsak5CQ" target="_blank" rel="noopener noreferrer">
          <button 
            className={`text-white font-bold py-3 px-12 rounded-full text-lg transition-all duration-300 ease-out mb-12 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{
              backgroundColor: '#FF4D00',
              transitionDelay: isVisible ? '0.6s' : '0s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#E64400'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FF4D00'}
          >
            Take the Peace of Mind Assessment
          </button>
        </a>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          <a 
            href="https://play.google.com/store/apps/details?id=com.p4tze2b0necm.pgwvu5pucapp&pcampaignid=web_share" 
            target="_blank"
            rel="noopener noreferrer"
            className={`text-white hover:text-brand-orange text-base md:text-lg font-medium transition-all duration-75 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} 
            style={{
              transitionDelay: isVisible ? '0.8s' : '0s'
            }}
          >
            Download My Final Playbook App
          </a>
          <a 
            href="https://digitallegacypodcast.com/" 
            target="_blank"
            rel="noopener noreferrer"
            className={`text-white hover:text-brand-orange text-base md:text-lg font-medium transition-all duration-75 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} 
            style={{
              transitionDelay: isVisible ? '1s' : '0s'
            }}
          >
            Listen to the Digital Legacy Podcast
          </a>
          <a href="#" className={`text-white hover:text-brand-orange text-base md:text-lg font-medium transition-all duration-75 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
          transitionDelay: isVisible ? '1.2s' : '0s'
        }}>
            Start a Legacy Readiness Wellness Program
          </a>
        </div>
      </div>
    </section>;
};
export default NewHeroSection;