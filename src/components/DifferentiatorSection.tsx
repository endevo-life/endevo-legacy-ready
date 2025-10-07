import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Card } from "@/components/ui/card";
import corporateHrEap from "@/assets/corporate-hr-eap.png";
import aiGuidance from "@/assets/ai-guidance.png";
import comprehensiveOfferings from "@/assets/comprehensive-offerings.png";
import marketplaceIntegration from "@/assets/marketplace-integration.png";
import educationalWorkshops from "@/assets/educational-workshops.png";

const DifferentiatorSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const differentiators = [
    {
      image: corporateHrEap,
      title: "Corporate HR EAP Focus",
      alt: "Employee Assistance Program Integration",
      description: "Unique focus on integrating Legacy Readiness and Digital Resilience planning into Employee Assistance Programs (EAPs) for businesses."
    },
    {
      image: aiGuidance,
      title: "Empathetic AI Guidance",
      alt: "AI and Human Collaboration",
      description: "Uses AI not just for technical tasks but for compassionate and personalized guidance."
    },
    {
      image: comprehensiveOfferings,
      title: "Comprehensive Offerings",
      alt: "Legal, Financial, Physical, and Digital Planning",
      description: "Complete coverage across legal, financial, physical, and digital aspects of legacy planning for holistic preparation."
    },
    {
      image: marketplaceIntegration,
      title: "Marketplace Integration",
      alt: "Connected Service Marketplace",
      description: "Seamless integration with trusted service providers through our curated marketplace ecosystem."
    },
    {
      image: educationalWorkshops,
      title: "Educational Workshops",
      alt: "Professional Training and Workshops",
      description: "Expert-led educational programs and workshops to empower individuals and organizations with knowledge and tools."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4">
        <div
          ref={elementRef as any}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-center mb-16 text-foreground">
            ENDevo's Differentiator
          </h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {differentiators.map((item, index) => (
              <Card
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden h-full flex flex-col group relative"
              >
                {/* Image Container */}
                <div className="aspect-square w-full overflow-hidden bg-gradient-to-br from-teal-50 to-blue-50">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-20"
                  />
                </div>

                {/* Hover Description Overlay */}
                <div className="absolute inset-0 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/95">
                  <p className="text-sm text-center text-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Title */}
                <div className="p-6 flex items-center justify-center flex-1">
                  <h3 className="text-lg font-bold text-center text-foreground leading-tight">
                    {item.title}
                  </h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorSection;
