const steps = [
  {
    number: "01",
    title: "Peace of Mind Assessment",
    description: "A structured audit to identify personal and digital gaps.",
    color: "#D95D26",
  },
  {
    number: "02",
    title: "On-Demand Self-Guided Learning",
    description: "Flexible modules designed to fit into a busy professional schedule.",
    color: "#D95D26",
  },
  {
    number: "03",
    title: "Live Masterclasses",
    description: "Interactive sessions to break down complex planning hurdles.",
    color: "#D95D26",
  },
  {
    number: "04",
    title: "1:1 Project Accountability Sessions",
    description: "Specialized support to ensure all deliverables (legal, financial, physical, and digital) are finalized.",
    color: "#8B4513",
  },
  {
    number: "05",
    title: "Weekly Office Hours and Progress Reviews",
    description: "Continuous support to maintain project momentum.",
    color: "#8B4513",
  },
];

const ImplementationRoadmapSection = () => {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: "#E8EEF4" }}>
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-12">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{
              fontFamily: "'Playfair Display', 'Merriweather', Georgia, serif",
              color: "#0F1738",
            }}
          >
            The ENDevo Implementation Roadmap
          </h2>
          <p
            className="text-base md:text-lg text-muted-foreground max-w-4xl"
            style={{ fontFamily: "'Open Sans', 'Helvetica', sans-serif" }}
          >
            We treat legacy planning like any other high-stakes corporate project. In this 3-month governed
            pilot, we move employees from Intention to Action.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Steps List */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-start gap-4">
                {/* Arrow Badge */}
                <div className="flex-shrink-0 flex items-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#D95D26"
                    className="mr-2"
                  >
                    <polygon points="0,0 24,12 0,24" />
                  </svg>
                  <div
                    className="px-4 py-2 rounded-md text-white text-sm font-semibold text-center min-w-[180px]"
                    style={{
                      backgroundColor: step.color,
                      fontFamily: "'Open Sans', 'Helvetica', sans-serif",
                    }}
                  >
                    {step.title}
                  </div>
                </div>

                {/* Description */}
                <p
                  className="text-sm md:text-base text-muted-foreground pt-2"
                  style={{ fontFamily: "'Open Sans', 'Helvetica', sans-serif" }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column - Winding Road Illustration */}
          <div className="relative h-[400px] md:h-[500px] hidden lg:block">
            {/* SVG Winding Road */}
            <svg
              viewBox="0 0 400 500"
              className="w-full h-full"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Road Path */}
              <path
                d="M380,80 C380,80 320,80 280,120 C240,160 280,200 240,240 C200,280 140,260 120,300 C100,340 160,380 200,400 C240,420 300,400 340,440"
                stroke="#0F1738"
                strokeWidth="50"
                fill="none"
                strokeLinecap="round"
              />
              {/* Road Center Line */}
              <path
                d="M380,80 C380,80 320,80 280,120 C240,160 280,200 240,240 C200,280 140,260 120,300 C100,340 160,380 200,400 C240,420 300,400 340,440"
                stroke="white"
                strokeWidth="3"
                fill="none"
                strokeDasharray="15,10"
                strokeLinecap="round"
              />

              {/* Pin 01 */}
              <g transform="translate(370, 50)">
                <ellipse cx="0" cy="35" rx="12" ry="4" fill="rgba(217,93,38,0.3)" />
                <path d="M0,0 L-15,30 L15,30 Z" fill="#FFD5C2" />
                <circle cx="0" cy="8" r="18" fill="#FFD5C2" />
                <text
                  x="0"
                  y="13"
                  textAnchor="middle"
                  fill="#0F1738"
                  fontSize="14"
                  fontWeight="bold"
                  style={{ fontFamily: "'Open Sans', sans-serif" }}
                >
                  01
                </text>
              </g>

              {/* Pin 02 */}
              <g transform="translate(280, 90)">
                <ellipse cx="0" cy="35" rx="12" ry="4" fill="rgba(217,93,38,0.3)" />
                <path d="M0,0 L-15,30 L15,30 Z" fill="#D95D26" />
                <circle cx="0" cy="8" r="18" fill="#D95D26" />
                <text
                  x="0"
                  y="13"
                  textAnchor="middle"
                  fill="white"
                  fontSize="14"
                  fontWeight="bold"
                  style={{ fontFamily: "'Open Sans', sans-serif" }}
                >
                  02
                </text>
              </g>

              {/* Pin 03 */}
              <g transform="translate(230, 210)">
                <ellipse cx="0" cy="35" rx="12" ry="4" fill="rgba(217,93,38,0.3)" />
                <path d="M0,0 L-15,30 L15,30 Z" fill="#D95D26" />
                <circle cx="0" cy="8" r="18" fill="#D95D26" />
                <text
                  x="0"
                  y="13"
                  textAnchor="middle"
                  fill="white"
                  fontSize="14"
                  fontWeight="bold"
                  style={{ fontFamily: "'Open Sans', sans-serif" }}
                >
                  03
                </text>
              </g>

              {/* Pin 04 */}
              <g transform="translate(130, 270)">
                <ellipse cx="0" cy="35" rx="12" ry="4" fill="rgba(139,69,19,0.3)" />
                <path d="M0,0 L-15,30 L15,30 Z" fill="#8B4513" />
                <circle cx="0" cy="8" r="18" fill="#8B4513" />
                <text
                  x="0"
                  y="13"
                  textAnchor="middle"
                  fill="white"
                  fontSize="14"
                  fontWeight="bold"
                  style={{ fontFamily: "'Open Sans', sans-serif" }}
                >
                  04
                </text>
              </g>

              {/* Pin 05 */}
              <g transform="translate(280, 390)">
                <ellipse cx="0" cy="35" rx="12" ry="4" fill="rgba(217,93,38,0.3)" />
                <path d="M0,0 L-15,30 L15,30 Z" fill="#D95D26" />
                <circle cx="0" cy="8" r="18" fill="#D95D26" />
                <text
                  x="0"
                  y="13"
                  textAnchor="middle"
                  fill="white"
                  fontSize="14"
                  fontWeight="bold"
                  style={{ fontFamily: "'Open Sans', sans-serif" }}
                >
                  05
                </text>
              </g>
            </svg>
          </div>

          {/* Mobile: Simple numbered list */}
          <div className="lg:hidden space-y-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                  style={{ backgroundColor: step.color }}
                >
                  {step.number}
                </div>
                <div>
                  <h4
                    className="font-semibold text-sm"
                    style={{ color: "#0F1738" }}
                  >
                    {step.title}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImplementationRoadmapSection;
