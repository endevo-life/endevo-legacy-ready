import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
const empowerBg =
  "https://assets.cdn.filesafe.space/f5ehsbHfdFg2UsHEIb49/media/6997585bf8345327a132e32f.png";

const EmpowerEmployeesSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  return (
    <section
      ref={elementRef}
      className="min-h-[calc(100vh-4rem)] flex items-center relative bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `url(${empowerBg})`,
      }}
    >
      {/* Left gradient overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.5) 35%, rgba(0,0,0,0.1) 55%, transparent 65%)",
        }}
      />
      {/* Below lg the text spans the full width, past where the left
          gradient fades out, so body text over the photo fell to ~3:1.
          An even scrim keeps it readable on phones and tablets. */}
      <div className="absolute inset-0 z-0 bg-black/55 lg:hidden" />
      <div className="relative z-10 w-full lg:w-[45%] flex items-center px-4 md:px-8 lg:px-10 py-10">
        <div className="max-w-xl w-full">
          <p
            className={`text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-brand-orange mb-4 font-opensans transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            For HR, benefits &amp; EAP teams
          </p>
          <h1
            className={`text-[26px] md:text-[34px] lg:text-[42px] font-bold leading-tight font-playfair transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <span className="text-white">
              Help your employees get their affairs in order,
            </span>{" "}
            <span className="text-brand-orange">before a crisis.</span>
          </h1>

          {/* Says what ENDevo is in plain words first; "legacy readiness" is
              our term, and a first-time visitor has to learn it elsewhere. */}
          <p
            className={`mt-6 text-base md:text-lg text-white/85 mb-8 leading-relaxed font-opensans transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: "200ms" }}
          >
            ENDevo is an employee benefit for end-of-life planning. Each
            employee gets a private, step-by-step plan for their will, finances,
            passwords and medical wishes. You see participation, never personal
            answers.
          </p>

          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: "400ms" }}
          >
            {/* Darker brand orange: white on #FF5500 is 3.07:1 and fails
                WCAG AA at this size; brand-orange-dark is 4.78:1. */}
            <Button
              asChild
              className="text-white px-6 py-1.5 text-base font-semibold rounded-full font-opensans bg-brand-orange-dark hover:bg-brand-orange-dark/90"
            >
              <Link to="/contact">Book a 30-minute call</Link>
            </Button>
            <p className="mt-6 text-sm text-white/70 font-opensans">
              Planning for yourself?{" "}
              <Link
                to="/for-individuals"
                className="text-white underline underline-offset-4 hover:text-brand-orange"
              >
                Start your own plan &rarr;
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default EmpowerEmployeesSection;
