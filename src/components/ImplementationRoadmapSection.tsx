import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const steps = [
  {
    number: "01",
    title: "Peace of Mind Assessment",
    description: "A structured audit to identify personal and digital gaps.",
  },
  {
    number: "02",
    title: "On-Demand Self-Guidance Learning",
    description: "Flexible modules designed to fit into a busy professional schedule.",
  },
  {
    number: "03",
    title: "Live Masterclasses",
    description: "Interactive sessions to break down complex planning hurdles.",
  },
  {
    number: "04",
    title: "1:1 Project Accountability Sessions",
    description: "Specialized support to ensure all deliverables (legal, financial, and digital) are finalized.",
  },
  {
    number: "05",
    title: "Weekly Office Hours and Progress Reviews",
    description: "Continuous support to maintain project momentum.",
  },
];

const ImplementationRoadmapSection = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-16 md:py-20 bg-white">
      <div
        ref={elementRef}
        className="container mx-auto px-6 md:px-12"
      >
        {/* Header */}
        <div
          className={`mb-12 transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2
            className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 font-playfair"
          >
            The ENDevo Implementation Roadmap
          </h2>
          <p
            className="text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed font-opensans"
          >
            We treat legacy planning like any other high-stakes corporate project. We move employees from Intention to Action through a 3-month governed pilot.
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col md:flex-row gap-12 items-start">

          {/* Left: Step List */}
          <div className="flex-1 space-y-0">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`flex items-start gap-6 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
                style={{ transitionDelay: isVisible ? `${i * 150}ms` : "0ms" }}
              >
                {/* Line + Dot */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div
                    className="w-3 h-3 rounded-full mt-1 flex-shrink-0 bg-brand-orange"
                  />
                  {i < steps.length - 1 && (
                    <div className="w-[2px] flex-1 min-h-[48px] bg-brand-orange/30" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-10">
                  <span
                    className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-2 bg-brand-orange text-white font-opensans"
                  >
                    {step.title}
                  </span>
                  <p
                    className="text-muted-foreground text-sm md:text-base leading-relaxed font-opensans"
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Road Visual */}
          <div
            className={`flex flex-col items-center justify-center flex-shrink-0 w-full md:w-[700px] gap-0 transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
            style={{ transitionDelay: isVisible ? "400ms" : "0ms" }}
          >
            {/* Slanted road visual */}
            <div className="relative w-full flex flex-col items-center" style={{ minHeight: "clamp(320px, 60vw, 560px)" }}>
              <svg viewBox="0 0 220 440" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
                {/* Road shadow/border — bottom-left to top-right */}
                <path
                  d="M 10 440 C 50 400, 140 370, 120 300 C 100 230, 30 210, 60 150 C 90 90, 180 70, 215 5"
                  fill="none"
                  stroke="#08123A"
                  strokeWidth="48"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Road surface */}
                <path
                  d="M 10 440 C 50 400, 140 370, 120 300 C 100 230, 30 210, 60 150 C 90 90, 180 70, 215 5"
                  fill="none"
                  stroke="#1a2f5e"
                  strokeWidth="38"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Centre dashed line */}
                <path
                  d="M 10 440 C 50 400, 140 370, 120 300 C 100 230, 30 210, 60 150 C 90 90, 180 70, 215 5"
                  fill="none"
                  className="stroke-brand-orange"
                  strokeWidth="2.5"
                  strokeDasharray="12 10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              {/* Pins — 05 bottom-left → 01 top-right along wiggly diagonal */}
              {/* Positions calculated from bezier curve points on the SVG path (viewBox 220×440) */}
              {[
                { top: "3%",  left: "96%" },  // 01 — end of seg3: (215,5)
                { top: "25%", left: "42%" },  // 02 — seg3 t=0.25: (92,111)
                { top: "50%", left: "32%" },  // 03 — seg2 t=0.5:  (71,221)
                { top: "79%", left: "53%" },  // 04 — seg1 t=0.75: (117,346)
                { top: "97%", left: "5%"  },  // 05 — start of seg1: (10,440)
              ].map((pos, i) => (
                <div
                  key={i}
                  className="absolute flex flex-col items-center"
                  style={{ top: pos.top, left: pos.left, transform: "translate(-50%, -50%)" }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg font-opensans"
                    style={{
                      backgroundColor: i === 0 || i % 2 === 0 ? "hsl(var(--brand-orange))" : "#6B3A2A",
                    }}
                  >
                    {steps[i].number}
                  </div>
                  {/* Cone below circle */}
                  <div
                    className="w-0 h-0"
                    style={{
                      borderLeft: "8px solid transparent",
                      borderRight: "8px solid transparent",
                      borderTop: `14px solid ${i === 0 || i % 2 === 0 ? "hsl(var(--brand-orange))" : "#6B3A2A"}`,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImplementationRoadmapSection;
