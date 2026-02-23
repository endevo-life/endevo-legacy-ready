import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import Footer from "@/components/Footer";
import TrustedPartnersSection from "@/components/TrustedPartnersSection";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

import legalFrameworkBg from "@/assets/legal-collaboration-bg.png";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Marketplace = () => {
  const navigate = useNavigate();
  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen">
      <ResponsiveNavbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section
          ref={heroRef as any}
          className="relative py-16 md:py-20 bg-cover bg-center"
          style={{
            backgroundImage: `url("https://assets.cdn.filesafe.space/f5ehsbHfdFg2UsHEIb49/media/6997579a1817151d64a4656b.png")`,
          }}
        >
          <div className="absolute inset-0 bg-brand-navy/70"></div>
          <div className="container max-w-7xl mx-auto px-4 relative z-10">
            <div
              className={`text-center max-w-3xl mx-auto text-white transition-all duration-1000 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                The Readiness Hub
              </h1>
              <p className="text-lg md:text-xl">
                Explore trusted partners and resources that help you prepare,
                plan, and protect what matters most.
              </p>
            </div>
          </div>
        </section>

        {/* Trusted Partners Section */}
        <TrustedPartnersSection />

        {/* Legal Collaboration Opportunities Section */}
        <section
          id="legal-collaboration"
          className="bg-muted/30 relative overflow-hidden py-6 scroll-mt-20"
        >
          <div
            className="absolute inset-0 bg-cover bg-center opacity-50"
            style={{ backgroundImage: `url(${legalFrameworkBg})` }}
          />
          <div className="container max-w-7xl mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-4 text-center relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Legal Collaboration Opportunities
              </h2>
              <p className="text-xl text-brand-orange font-semibold mb-8">
                Join us in creating lasting impact through trusted partnerships
              </p>
              <p className="text-lg leading-relaxed">
                At ENDevo, we believe that meaningful partnerships are built on
                trust, integrity, and shared responsibility. Our legal framework
                ensures that every collaboration is grounded in clarity,
                fairness, and respect.
              </p>
              <p className="text-lg leading-relaxed">
                We uphold the highest ethical standards and comply with all
                applicable laws and regulations to protect our partners,
                clients, and community. Every agreement reflects our commitment
                to transparency, confidentiality, and the responsible use of
                information and resources.
              </p>
              <p className="text-lg leading-relaxed">
                By partnering with ENDevo, you join a network guided by
                principles of accountability and mutual respect. We take pride
                in creating partnerships that last, supported by sound
                governance and a shared vision for long-term impact.
              </p>

              {/* CTA Button */}
              <div className="pt-8">
                <Button
                  className="bg-brand-orange hover:bg-brand-orange/90 text-white px-6 py-1.5 text-base rounded-full"
                  onClick={() => navigate("/contact")}
                >
                  Become A Legal Partner
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Marketplace;
