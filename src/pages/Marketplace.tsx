import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import Footer from "@/components/Footer";

const Marketplace = () => {
  return (
    <div className="min-h-screen">
      <ResponsiveNavbar />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-muted/30 to-background">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Marketplace
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Discover trusted partners and services to support your end-of-life planning journey
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-background">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Placeholder cards - to be populated */}
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div 
                  key={item}
                  className="p-6 border rounded-lg hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-semibold mb-3">Service Provider {item}</h3>
                  <p className="text-muted-foreground mb-4">
                    Description of the service or partner offering
                  </p>
                  <button className="text-primary hover:underline">
                    Learn More →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Marketplace;
