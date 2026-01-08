import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import empowerBg from "@/assets/hero-section-home.png";
const EmpowerEmployeesSection = () => {
  const {
    elementRef,
    isVisible
  } = useScrollAnimation();
  return <section ref={elementRef} className="min-h-[calc(100vh-4rem)] flex items-center relative bg-cover bg-center bg-no-repeat overflow-hidden" style={{
    backgroundImage: `url(${empowerBg})`
  }}>
      <div className="absolute inset-0 bg-black/40" />
      <div className="container px-4 md:px-8 lg:px-16 text-left relative z-10">
        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>A New Standard of  Employee Support  for Life's What-Ifs
        <br />
          for Life's What-Ifs
        </h2>

        <p className={`mt-6 text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
        transitionDelay: "200ms"
      }}>
          Legacy planning doesn't have to be overwhelming. We empower families, employees, and employers with simple, supportive resources designed to guide every step of the way.
        </p>

        <div className={`mt-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
        transitionDelay: "400ms"
      }}>
          <Button className="bg-brand-navy hover:bg-brand-navy/90 text-white px-6 py-1.5 text-base rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300" style={{
          fontFamily: "'Open Sans', 'Helvetica', sans-serif"
        }} onClick={() => window.location.href = "/solution"}>
            Start A Legacy Readiness Employee Wellness Program
          </Button>
        </div>
      </div>
    </section>;
};
export default EmpowerEmployeesSection;