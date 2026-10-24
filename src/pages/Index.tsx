import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import EmpowerEmployeesSection from "@/components/EmpowerEmployeesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import UseCasesSection from "@/components/UseCasesSection";
import FeaturedTestimonialsSection from "@/components/FeaturedTestimonialsSection";
import FounderSection from "@/components/FounderSection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="End-of-Life Planning Benefit for Employees"
        description="An employee benefit for end-of-life planning. Each employee gets a private, step-by-step plan for their will, finances and passwords. HR never sees answers."
        canonical="/"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "ENDevo",
            url: "https://www.endevo.life",
            logo: "https://www.endevo.life/favicon.png",
            description:
              "Legacy Readiness & Digital Preparedness platform for individuals, families, and employers.",
            // Every profile we actually run. sameAs is how a search or answer
            // engine confirms these accounts are the same entity as the site.
            sameAs: [
              "https://www.youtube.com/@DigitalLegacyPodcast",
              "https://www.linkedin.com/company/endevo-digitallegacy/",
              "https://www.instagram.com/endevo_digitallegacy/",
              "https://www.facebook.com/endevo.digitallegacy/",
              "https://www.tiktok.com/@endevo_digitallegacy",
              "https://medium.com/@endevo_digitallegacy",
              "https://g.page/r/CcFDFJ3B886qEAI",
            ],
            founder: {
              "@type": "Person",
              name: "Niki Weiss",
              jobTitle: "Founder and Thanatologist",
              url: "https://www.endevo.life/company#niki",
            },
          },
          {
            // Names the site as an entity distinct from the organization, which
            // is what lets a search engine show a sitelinks search box.
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "ENDevo",
            url: "https://www.endevo.life",
            publisher: {
              "@type": "Organization",
              name: "ENDevo",
              url: "https://www.endevo.life",
            },
          },
        ]}
      />
      <ResponsiveNavbar />
      {/* Five sections, each answering one first-visit question in order:
          what is this and is it for me, how does it work, why should my
          company care, does it work, and who is behind it. */}
      <main className="pt-16">
        <EmpowerEmployeesSection />
        <HowItWorksSection />
        <UseCasesSection />
        <FeaturedTestimonialsSection />
        <FounderSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
