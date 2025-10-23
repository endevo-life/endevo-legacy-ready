import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import Footer from "@/components/Footer";
import TrustedPartnersSection from "@/components/TrustedPartnersSection";
import heroBackground from "@/assets/marketplace-hero-bg.png";

const Marketplace = () => {
  return (
    <div className="min-h-screen">
      <ResponsiveNavbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section 
          className="relative py-16 md:py-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          <div className="absolute inset-0 bg-brand-navy/70"></div>
          <div className="container max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                The Readiness Hub
              </h1>
              <p className="text-lg md:text-xl">
                Explore trusted partners and resources that help you prepare, plan, and protect what matters most.
              </p>
            </div>
          </div>
        </section>

        {/* Trusted Partners Section */}
        <TrustedPartnersSection />
      </main>
      <Footer />
    </div>
  );
};

export default Marketplace;
