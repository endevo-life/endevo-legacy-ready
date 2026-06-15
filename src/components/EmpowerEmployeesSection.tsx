import { useNavigate } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
const empowerBg =
  "https://assets.cdn.filesafe.space/f5ehsbHfdFg2UsHEIb49/media/6997585bf8345327a132e32f.png";

const EmpowerEmployeesSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const navigate = useNavigate();
  return (
    <section
      ref={elementRef}
      className="min-h-[calc(100vh-4rem)] flex items-center relative bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `url(${empowerBg})`,
      }}
    >
      {/* Left gradient overlay */}
      <div className="absolute inset-0 z-0" style={{ background: "linear-gradient(to right, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.5) 35%, rgba(0,0,0,0.1) 55%, transparent 65%)" }} />
      <div className="relative z-10 w-full lg:w-[45%] flex items-center px-4 md:px-8 lg:px-10 py-10">
        <div className="max-w-xl w-full">
        <h1
          className={`text-[24px] md:text-[32px] lg:text-[40px] font-bold leading-tight font-playfair transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <span className="text-white md:whitespace-nowrap">
            Protect Your Business Continuity
          </span>
          <br />
          <span className="md:whitespace-nowrap text-brand-orange">
            by Preparing Your People
          </span>
        </h1>

        <p
          className={`mt-6 text-lg md:text-xl mb-6 font-opensans transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{ transitionDelay: "200ms" }}
        >
          <span className="text-white">
            The Project Management Solution for Legacy Readiness & Digital Resilience
          </span>
        </p>

        <p
          className={`text-base md:text-lg text-white/80 mb-8 leading-relaxed font-opensans transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{ transitionDelay: "300ms" }}
        >
          Support your team through life's unexpected challenges, reduce
          absenteeism, maintain focus, and keep your business running smoothly.
        </p>

        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{ transitionDelay: "400ms" }}
        >
          <Button
            onClick={() => navigate("/contact")}
            className="text-white px-6 py-1.5 text-base font-semibold rounded-full font-opensans bg-brand-navy hover:bg-brand-navy-light"
          >
            Start a Conversation
          </Button>
        </div>
      </div>
      </div>
    </section>
  );
};
export default EmpowerEmployeesSection;
