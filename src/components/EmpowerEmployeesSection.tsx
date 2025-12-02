import { useState } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import empowerBg from "@/assets/empower-employees-bg.png";
import individualsBg from "@/assets/individuals-hero-bg.png";
import providersBg from "@/assets/providers-hero-bg.png";

type TabType = "individuals" | "employers" | "providers";

const tabContent = {
  individuals: {
    heading: "Are you ready for what comes",
    headingLine2: "next?",
    subtextLines: [
      "ENDevo educates, project manages and empowers people so their life story,",
      "values, and digital footprint are protected, preserved, and passed on with",
      "intention."
    ],
    ctaText: "Get Started",
    ctaLink: "/wws-individuals",
    background: individualsBg,
  },
  employers: {
    heading: "Empower Your Employees",
    headingLine2: "with Confidence and Clarity",
    subtext: "With ENDevo, HR teams can offer guided legacy planning that supports employees through life transitions while improving engagement and reducing burnout.",
    ctaText: "Start a Legacy Readiness Employee Wellness Program",
    ctaLink: "/employee-wellness",
    background: empowerBg,
  },
  providers: {
    heading: "Be part of a 126 billion dollar",
    headingLine2: "industry transformation.",
    subtext: "Partner with ENDevo to reach more clients, showcase your expertise, and grow your business with ease.",
    ctaText: "Join Our Network",
    ctaLink: "/wws-service-providers",
    background: providersBg,
  },
};

const EmpowerEmployeesSection = () => {
  const [activeTab, setActiveTab] = useState<TabType>("employers");
  const { elementRef, isVisible } = useScrollAnimation();
  
  const content = tabContent[activeTab];

  return (
    <section
      ref={elementRef}
      className="py-24 md:py-32 relative bg-cover bg-center bg-no-repeat transition-all duration-500"
      style={{ backgroundImage: `url(${content.background})` }}
    >
      <div className="container px-4 md:px-8 lg:px-16 text-left relative z-10">
        <div className={`flex flex-wrap gap-4 mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Button
            variant="ghost"
            className={`hover:bg-transparent px-0 ${activeTab === "individuals" ? "text-brand-orange" : "text-white hover:text-white/80"}`}
            onClick={() => setActiveTab("individuals")}
          >
            For Individuals
          </Button>
          <span className="text-white">|</span>
          <Button
            variant="ghost"
            className={`hover:bg-transparent px-0 ${activeTab === "employers" ? "text-brand-orange" : "text-white hover:text-white/80"}`}
            onClick={() => setActiveTab("employers")}
          >
            For Employers
          </Button>
          <span className="text-white">|</span>
          <Button
            variant="ghost"
            className={`hover:bg-transparent px-0 ${activeTab === "providers" ? "text-brand-orange" : "text-white hover:text-white/80"}`}
            onClick={() => setActiveTab("providers")}
          >
            For Service Providers
          </Button>
        </div>

        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {content.heading}
          {"headingLine2" in content && (
            <>
              <br />
              {content.headingLine2}
            </>
          )}
        </h2>

        <p
          className={`mt-6 text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: "200ms" }}
        >
          {"subtextLines" in content ? (
            content.subtextLines.map((line, index) => (
              <span key={index}>
                {line}
                {index < content.subtextLines.length - 1 && <br />}
              </span>
            ))
          ) : (
            content.subtext
          )}
        </p>

        <div
          className={`mt-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: "400ms" }}
        >
          <Button
            className="bg-brand-navy hover:bg-brand-navy/90 text-white px-8 py-3 text-base md:text-lg rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => (window.location.href = content.ctaLink)}
          >
            {content.ctaText}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EmpowerEmployeesSection;
