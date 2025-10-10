import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useNavigate } from "react-router-dom";
import individualsIcon from "@/assets/individuals-icon.png";
import serviceProvidersIcon from "@/assets/service-providers-icon.png";
import employersIcon from "@/assets/employers-icon.png";
const WhoBenefitsSection = () => {
  const navigate = useNavigate();
  const {
    elementRef,
    isVisible
  } = useScrollAnimation();
  return <section className="py-20 bg-gray-50">
      <div ref={elementRef as any} className="container max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className={`text-center mb-16 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-orange mb-12">Who We Serve</h2>
        </div>

        {/* 3-Column Card Layout */}
        <div className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
        transitionDelay: '0.2s'
      }}>
          {/* Individuals Card */}
          <div className="bg-white rounded-lg shadow-sm p-8 text-center h-full flex flex-col">
            <div className="flex justify-center mb-6">
              <img src={individualsIcon} alt="Individuals Icon" className="w-16 h-16" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Individuals</h3>
            <p className="text-muted-foreground mb-8 flex-grow">
              Simplifying legacy readiness with AI-powered guidance and compassionate resources.
            </p>
            <button 
              onClick={() => {
                navigate('/who-we-serve#individuals');
                setTimeout(() => {
                  const element = document.getElementById('individuals');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }, 100);
              }}
              className="bg-[#FF5A00] text-white font-semibold text-base px-6 py-1.5 rounded-full shadow-lg hover:shadow-xl hover:bg-[#FF6A10] transition-all duration-300 transform hover:scale-105"
              style={{
                fontFamily: "'Open Sans', 'Helvetica', sans-serif"
              }}
            >
              Learn More
            </button>
          </div>

          {/* Service Providers Card */}
          <div className="bg-white rounded-lg shadow-sm p-8 text-center h-full flex flex-col">
            <div className="flex justify-center mb-6">
              <img src={serviceProvidersIcon} alt="Service Providers Icon" className="w-16 h-16" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Service Providers</h3>
            <p className="text-muted-foreground mb-8 flex-grow">
              Unlock pre-qualified clients and boost revenue with efficient operations and smart partnerships.
            </p>
            <button 
              onClick={() => {
                navigate('/who-we-serve#service-providers');
                setTimeout(() => {
                  const element = document.getElementById('service-providers');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }, 100);
              }}
              className="bg-[#FF5A00] text-white font-semibold text-base px-6 py-1.5 rounded-full shadow-lg hover:shadow-xl hover:bg-[#FF6A10] transition-all duration-300 transform hover:scale-105"
              style={{
                fontFamily: "'Open Sans', 'Helvetica', sans-serif"
              }}
            >
              Learn More
            </button>
          </div>

          {/* Employers Card */}
          <div className="bg-white rounded-lg shadow-sm p-8 text-center h-full flex flex-col">
            <div className="flex justify-center mb-6">
              <img src={employersIcon} alt="Employers Icon" className="w-16 h-16" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Employers</h3>
            <p className="text-muted-foreground mb-8 flex-grow">
              Boost workplace resilience with dashboards and tools that cut absenteeism, increase productivity, and support employee well-being.
            </p>
            <button 
              onClick={() => {
                navigate('/who-we-serve#employers');
                setTimeout(() => {
                  const element = document.getElementById('employers');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }, 100);
              }}
              className="bg-[#FF5A00] text-white font-semibold text-base px-6 py-1.5 rounded-full shadow-lg hover:shadow-xl hover:bg-[#FF6A10] transition-all duration-300 transform hover:scale-105"
              style={{
                fontFamily: "'Open Sans', 'Helvetica', sans-serif"
              }}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>;
};
export default WhoBenefitsSection;