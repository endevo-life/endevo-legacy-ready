import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const HiddenCostStatsSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const stats = [
    {
      value: "$33B",
      description: "$33B in Productivity Loss Every Year",
    },
    {
      value: "1 in 3",
      description: "1 in 3 Employees Have No Plan",
    },
    {
      value: "$100B+",
      description: "$100B+ in Digital Assets Go Unclaimed",
    },
  ];

  return (
    <section ref={elementRef} className="py-20 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        <h2
          className={`text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-gray-900 font-serif transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          The Hidden Cost of Being Unprepared.
        </h2>

        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 font-serif mb-3">
                {stat.value}
              </p>
              <p className="text-base md:text-lg text-gray-700 font-sans">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        <p
          className={`text-center text-gray-600 italic font-sans text-base md:text-lg max-w-4xl mx-auto leading-relaxed transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          Most people and most companies are not ready for life's inevitable events. The result? Families face chaos. Employers lose billions. Legacies are left incomplete.
        </p>
      </div>
    </section>
  );
};

export default HiddenCostStatsSection;
