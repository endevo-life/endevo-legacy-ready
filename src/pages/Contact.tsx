import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import Footer from "@/components/Footer";
import ConsultationSection from "@/components/ConsultationSection";
import SEO from "@/components/SEO";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Contact ENDevo"
        description="Get in touch with the ENDevo team. We're here to help with legacy readiness, digital preparedness, and enterprise solutions."
        canonical="/contact"
      />
      <ResponsiveNavbar />
      <main className="pt-16">
        <section className="pt-16 md:pt-20 pb-4 text-center px-6">
          <div className="container max-w-6xl mx-auto">
            <h1 className="font-bold mb-4 leading-tight font-playfair">
              <span className="block text-base md:text-lg font-normal mb-2 font-opensans">
                Schedule Your
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl md:whitespace-nowrap">
                <span className="text-brand-orange">Legacy Readiness</span>{" "}
                Consultation
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-opensans">
              Connect with the ENDevo team to start your legacy planning journey
            </p>
          </div>
        </section>
        <ConsultationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
