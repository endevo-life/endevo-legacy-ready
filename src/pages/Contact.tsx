import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import Footer from "@/components/Footer";
import ConsultationSection from "@/components/ConsultationSection";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <ResponsiveNavbar />
      <main className="pt-16">
        <ConsultationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
