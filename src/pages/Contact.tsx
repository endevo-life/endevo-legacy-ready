import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import ConsultationSection from "@/components/ConsultationSection";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Contact Us - Schedule a Consultation | ENDevo"
        description="Get in touch with ENDevo for legacy readiness and digital preparedness solutions. Schedule a free consultation to discuss your organization's needs."
        keywords="contact endevo, schedule consultation, legacy planning consultation, get started"
        canonicalUrl="/contact"
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
