import { Link } from "react-router-dom";
import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import HiddenCostStatsSection from "@/components/HiddenCostStatsSection";
import DigitalReadinessWellnessSection from "@/components/DigitalReadinessWellnessSection";
import EmpowerEmployeesSection from "@/components/EmpowerEmployeesSection";
import ToolsForEmployersSection from "@/components/ToolsForEmployersSection";
import VideoSection from "@/components/VideoSection";
import FamilyTestimonialsSection from "@/components/FamilyTestimonialsSection";
import LatestSection from "@/components/LatestSection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Index = () => {
  const { elementRef: humanRef, isVisible: humanVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen">
      <SEO
        title="ENDevo — Legacy Readiness & Digital Preparedness"
        description="ENDevo helps individuals, families, and employers achieve Legacy Readiness. Protect your digital footprint, estate, and life story with intention."
        canonical="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "ENDevo",
          "url": "https://www.endevo.life",
          "logo": "https://www.endevo.life/favicon.png",
          "description": "Legacy Readiness & Digital Preparedness platform for individuals, families, and employers.",
          "sameAs": ["https://www.youtube.com/@DigitalLegacyPodcast"]
        }}
      />
      <ResponsiveNavbar />
      <main className="pt-16">
        <EmpowerEmployeesSection />
        <HiddenCostStatsSection />
        <DigitalReadinessWellnessSection />
        <VideoSection />

        {/* Our Human-Centered Support Section */}
        <section className="py-20 bg-background">
          <div className="container max-w-7xl mx-auto px-4">
            <div ref={humanRef} className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left — Text */}
              <div className={`space-y-6 transition-all duration-1000 ${humanVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} `}>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  Our <span className="text-brand-orange">Human-Centered</span> Support
                </h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  ENDevo blends technology with compassionate guidance, ensuring employees feel supported through life's decisions while enabling them to plan ahead without added burden.
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Our approach combines innovative solutions with education, structured project management, and empowerment to guide individuals through each step with clarity and confidence.
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Every step of the way, our CEO, <Link to="/company#niki" className="text-brand-orange font-semibold hover:underline">Niki Weiss</Link>, certified in multiple areas of employee wellbeing and organizational support, guides clients to implement strategies that are both effective and empathetic, making the experience truly human-centered.
                </p>
              </div>
              {/* Right — Certifications */}
              <div className="flex flex-col gap-4">
                {[
                  { src: "https://assets.cdn.filesafe.space/f5ehsbHfdFg2UsHEIb49/media/69ce6b79eeb3e5acb33c21f3.png", label: "PMI RISK MANAGEMENT PROFESSIONAL" },
                  { src: "https://assets.cdn.filesafe.space/f5ehsbHfdFg2UsHEIb49/media/69ce6b79a7dcb4cff033a7aa.png", label: "PROJECT MANAGEMENT PROFESSIONAL" },
                  { src: "https://assets.cdn.filesafe.space/f5ehsbHfdFg2UsHEIb49/media/69ce6b79a7dcb4cff033a7ac.png", label: "PROJECT MANAGEMENT INSTITUTE AUTHORIZED TRAINING PARTNER (PMP/CAPM)" },
                  { src: "https://assets.cdn.filesafe.space/f5ehsbHfdFg2UsHEIb49/media/69ce6b79fcc7c2f5772e2c7f.png", label: "PROSCI CERTIFIED: CHANGE PRACTITIONER" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-4 p-4 rounded-xl border border-border shadow-md hover:shadow-xl hover:border-brand-orange/40 transition-all duration-700 ${humanVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                    style={{ transitionDelay: humanVisible ? `${i * 150}ms` : "0ms" }}
                  >
                    <img src={item.src} alt={item.label} className="h-16 w-auto object-contain flex-shrink-0" />
                    <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-muted-foreground leading-tight">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ToolsForEmployersSection />

        <LatestSection />
        {/* Stories From Across Our Community Section */}
        <FamilyTestimonialsSection />

      </main>
      <Footer />
    </div>
  );
};

export default Index;
