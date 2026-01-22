import { ClipboardCheck, BookOpen, Users, UserCheck, CalendarClock } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Peace of Mind Assessment",
    description: "Quick baseline survey to identify gaps",
    icon: ClipboardCheck,
  },
  {
    number: 2,
    title: "On-Demand Learning",
    description: "Self-paced courses on legacy planning",
    icon: BookOpen,
  },
  {
    number: 3,
    title: "Live Masterclasses",
    description: "Interactive workshops with experts",
    icon: Users,
  },
  {
    number: 4,
    title: "1:1 Legacy Coaching",
    description: "Personalized guidance sessions",
    icon: UserCheck,
  },
  {
    number: 5,
    title: "Weekly Office Hours",
    description: "Ongoing support and Q&A",
    icon: CalendarClock,
  },
];

const ImplementationRoadmapSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#0F1738] via-[#1a2547] to-[#0F1738] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#D95D26] rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#D95D26] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', 'Merriweather', Georgia, serif" }}
          >
            The ENDevo{" "}
            <span style={{ color: "#D95D26" }}>Implementation Roadmap</span>
          </h2>
          <p
            className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto"
            style={{ fontFamily: "'Open Sans', 'Helvetica', sans-serif" }}
          >
            A structured 5-step journey to organizational legacy readiness
          </p>
        </div>

        {/* Desktop: Winding Road Layout */}
        <div className="hidden lg:block relative">
          {/* SVG Winding Path */}
          <svg
            className="absolute top-1/2 left-0 w-full h-40 -translate-y-1/2 z-0"
            viewBox="0 0 1200 160"
            preserveAspectRatio="none"
          >
            <path
              d="M0,80 C150,80 150,30 300,30 C450,30 450,130 600,130 C750,130 750,30 900,30 C1050,30 1050,80 1200,80"
              stroke="#D95D26"
              strokeWidth="4"
              fill="none"
              strokeDasharray="12,8"
              className="opacity-60"
            />
          </svg>

          {/* Steps Row */}
          <div className="flex justify-between items-center relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={step.number}
                  className={`flex flex-col items-center ${isEven ? "mt-0" : "mt-24"}`}
                  style={{ width: "18%" }}
                >
                  {/* Step Card */}
                  <div className="bg-white rounded-2xl shadow-xl p-6 text-center transform hover:scale-105 transition-transform duration-300 w-full">
                    {/* Number Badge */}
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 shadow-lg"
                      style={{ backgroundColor: "#D95D26" }}
                    >
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="mb-3">
                      <Icon className="w-8 h-8 mx-auto" style={{ color: "#0F1738" }} />
                    </div>

                    {/* Title */}
                    <h3
                      className="text-base font-bold mb-2"
                      style={{
                        fontFamily: "'Playfair Display', 'Merriweather', Georgia, serif",
                        color: "#0F1738",
                      }}
                    >
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-sm text-muted-foreground"
                      style={{ fontFamily: "'Open Sans', 'Helvetica', sans-serif" }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile/Tablet: Vertical Timeline */}
        <div className="lg:hidden relative">
          {/* Vertical Line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-1 rounded-full"
            style={{ backgroundColor: "#D95D26" }}
          />

          <div className="space-y-8">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="flex items-start gap-6 relative">
                  {/* Number Badge */}
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-lg flex-shrink-0 z-10"
                    style={{ backgroundColor: "#D95D26" }}
                  >
                    {step.number}
                  </div>

                  {/* Card */}
                  <div className="bg-white rounded-xl shadow-lg p-6 flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className="w-6 h-6" style={{ color: "#0F1738" }} />
                      <h3
                        className="text-lg font-bold"
                        style={{
                          fontFamily: "'Playfair Display', 'Merriweather', Georgia, serif",
                          color: "#0F1738",
                        }}
                      >
                        {step.title}
                      </h3>
                    </div>
                    <p
                      className="text-sm text-muted-foreground"
                      style={{ fontFamily: "'Open Sans', 'Helvetica', sans-serif" }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImplementationRoadmapSection;
