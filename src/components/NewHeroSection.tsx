import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import heroBackground from "@/assets/hero-sunrise-tree.png";
const NewHeroSection = () => {
  const {
    elementRef,
    isVisible
  } = useScrollAnimation();

  // Detect iOS devices
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;
  const appStoreLink = isIOS ? "https://apps.apple.com/us/app/my-final-playbook/id6502518647" : "https://play.google.com/store/apps/details?id=com.p4tze2b0necm.pgwvu5pucapp&pcampaignid=web_share";
  return <section className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat bg-fixed" style={{
    backgroundImage: `url('${heroBackground}')`
  }}>
      {/* Subtle overlay for text readability */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Content */}
      <div ref={elementRef as any} className={`relative z-10 container max-w-5xl mx-auto px-4 text-center text-white transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
        <h1 className={`font-bold mb-8 transition-all duration-[1200ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] text-4xl md:text-6xl lg:text-7xl xl:text-8xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{
        fontFamily: 'serif',
        transitionDelay: isVisible ? '0.15s' : '0s'
      }}>
          Are you ready for what comes next?
        </h1>
        
        <p className={`text-lg md:text-xl mb-12 max-w-4xl mx-auto leading-relaxed transition-all duration-[1200ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{
        transitionDelay: isVisible ? '0.3s' : '0s'
      }}>ENDevo educates, project manages and empowers people so their life story, values, and digital footprint are protected, preserved, and passed on with intention.</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a href="https://jbigogmrgex.typeform.com/to/qBsak5CQ" target="_blank" rel="noopener noreferrer">
            <button className={`text-white font-bold py-2 px-8 rounded-full text-lg transition-all duration-[1200ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:shadow-xl hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{
            backgroundColor: '#FF4D00',
            transitionDelay: isVisible ? '0.45s' : '0s'
          }} onMouseEnter={e => e.currentTarget.style.backgroundColor = '#E64400'} onMouseLeave={e => e.currentTarget.style.backgroundColor = '#FF4D00'}>
              Take the Peace of Mind Assessment for Free
            </button>
          </a>
          
          <a href="/employee-wellness">
            <button className={`text-white font-bold py-2 px-8 rounded-full text-lg transition-all duration-[1200ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:shadow-xl hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{
            backgroundColor: '#FF4D00',
            transitionDelay: isVisible ? '0.6s' : '0s'
          }} onMouseEnter={e => e.currentTarget.style.backgroundColor = '#E64400'} onMouseLeave={e => e.currentTarget.style.backgroundColor = '#FF4D00'}>
              Start a Legacy Readiness Employee Wellness Program
            </button>
          </a>
        </div>
        
        
      </div>
    </section>;
};
export default NewHeroSection;