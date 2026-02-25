import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useNavigate } from "react-router-dom";
import financialPartners from "@/assets/financial-partners-new.jpeg";
import digitalPartners from "@/assets/digital-partners-new.jpeg";

const ServiceProvidersSection = () => {
  const navigate = useNavigate();
  const { elementRef, isVisible } = useScrollAnimation();
  return (
    <section id="for-employees" className="py-20 bg-background scroll-mt-20">
      <div
        ref={elementRef as any}
        className={`container max-w-7xl mx-auto px-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        {/* Headline */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Connecting You With Trusted Service Providers
          </h2>
          <p className="text-xl text-brand-orange font-semibold mb-8">
            Because no plan is complete without the right support.
          </p>
        </div>

        {/* Supporting Intro */}
        <p className="text-center text-lg text-muted-foreground max-w-4xl mx-auto mb-16 leading-relaxed">
          ENDevo does not just give you tools. We connect you with the experts
          and services that help bring your plan to life. Our role is to
          educate, guide, and empower you to know who to talk to, when to talk
          to them, and how to take action.
        </p>

        {/* Three Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Card 1 - Physical Partners */}
          <Card className="hover:shadow-xl transition-shadow duration-300 relative group overflow-hidden">
            <CardContent className="p-0">
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src="https://assets.cdn.filesafe.space/f5ehsbHfdFg2UsHEIb49/media/6997584820c0351d060bb450.jpeg"
                  alt="Physical Partners - Funeral homes, hospice care, and long-term care providers"
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Physical Partners</h3>
                <p className="text-muted-foreground">
                  Funeral homes, hospice care, and long-term care providers to
                  support you and your loved ones through life's toughest
                  transitions.
                </p>
              </div>
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-primary/95 flex items-center justify-center p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-center text-base leading-relaxed">
                  Life's most challenging moments are easier to navigate when
                  you have guidance and support. At ENDevo, we help you plan
                  ahead so your loved ones are cared for with compassion and
                  dignity, easing stress during difficult times and ensuring
                  peace of mind for the future.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Card 2 - Financial Partners */}
          <Card className="hover:shadow-xl transition-shadow duration-300 relative group overflow-hidden">
            <CardContent className="p-0">
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src="https://assets.cdn.filesafe.space/f5ehsbHfdFg2UsHEIb49/media/69975848181715f0e9a48f5e.jpeg"
                  alt="Financial Partners - Wealth advisors, accountants, and insurance providers"
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Financial Partners</h3>
                <p className="text-muted-foreground">
                  Wealth advisors, accountants, Social Security specialists, and
                  life insurance providers to secure your family's financial
                  future.
                </p>
              </div>
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-primary/95 flex items-center justify-center p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-center text-base leading-relaxed">
                  Securing your family's financial future is about more than
                  just money. It is about peace of mind and stability. ENDevo
                  connects you with trusted experts who can guide you through
                  complex decisions, from retirement planning to life insurance,
                  helping ensure that your loved ones are protected and prepared
                  for whatever comes next.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Card 3 - Digital Partners */}
          <Card className="hover:shadow-xl transition-shadow duration-300 relative group overflow-hidden">
            <CardContent className="p-0">
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src="https://assets.cdn.filesafe.space/f5ehsbHfdFg2UsHEIb49/media/699758488523c5f9c2ce5201.jpeg"
                  alt="Digital Partners - Digital asset managers and secure storage services"
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Digital Partners</h3>
                <p className="text-muted-foreground">
                  Digital asset managers and secure storage services to protect
                  cryptocurrency, online accounts, and your entire digital
                  footprint.
                </p>
              </div>
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-primary/95 flex items-center justify-center p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-center text-base leading-relaxed">
                  Protecting your digital life is becoming increasingly
                  important. ENDevo connects you with experts who can help
                  manage and secure your cryptocurrency, online accounts, and
                  entire digital footprint, giving you peace of mind that your
                  digital assets are safe and accessible when your loved ones
                  need them.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Closing Tagline */}
        <p className="text-center text-lg text-muted-foreground italic max-w-3xl mx-auto mb-8">
          With ENDevo you do not have to navigate the end of life landscape
          alone. We help you find the right people and services at the right
          time.
        </p>

        {/* CTA Button */}
        <div className="text-center">
          <Button
            onClick={() => {
              navigate("/marketplace");
              window.scrollTo(0, 0);
            }}
            className="bg-brand-orange hover:bg-brand-orange/90 text-white px-6 py-1.5 text-base rounded-full"
          >
            Get Connected Now
          </Button>
        </div>
      </div>
    </section>
  );
};
export default ServiceProvidersSection;
