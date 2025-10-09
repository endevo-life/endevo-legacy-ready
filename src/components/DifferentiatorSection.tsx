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
      description: "Combines legal, financial, physical and digital aspects into one unified platform."
    },
    {
      image: marketplaceIntegration,
      title: "Marketplace Integration",
      alt: "Connected Service Marketplace",
      description: "Direct access to service providers, offering seamless connections for diverse end-of-life needs."
    },
    {
      image: educationalWorkshops,
      title: "Educational Workshops",
      alt: "Professional Training and Workshops",
      description: "Blends technology with human-centric education to demystify planning processes for employees and their families."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-teal-50/30 to-blue-50/20 relative overflow-hidden">
      {/* Background texture overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      <div className="container max-w-7xl mx-auto px-4 relative z-10">
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

          {/* Cards Grid - Desktop */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
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

          {/* Bullet List - Mobile */}
          <div className="md:hidden bg-white rounded-xl shadow-md p-6">
            <ul className="space-y-6">
              {differentiators.map((item, index) => (
                <li key={index} className="flex gap-4">
                  <span className="text-brand-orange font-bold text-xl flex-shrink-0">•</span>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorSection;
