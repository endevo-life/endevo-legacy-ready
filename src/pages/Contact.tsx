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
        <ConsultationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
