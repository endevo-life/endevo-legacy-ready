import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import Footer from "@/components/Footer";
import ConsultationSection from "@/components/ConsultationSection";
import SEO from "@/components/SEO";
import { FaGoogle } from "react-icons/fa";
import { GOOGLE_REVIEW_URL } from "@/data/socialLinks";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Contact Us — End-of-Life Planning Support"
        description="Get in touch with the ENDevo team about end-of-life planning, digital legacy, and employer wellness programs. We're here to help you prepare with clarity."
        canonical="/contact"
        breadcrumbs={[{ name: "Contact", path: "/contact" }]}
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
        <section className="py-12 text-center px-6">
          <p className="text-lg text-muted-foreground font-opensans mb-3">
            Already worked with us? Your review helps other families find us.
          </p>
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold text-brand-orange underline hover:no-underline font-opensans"
          >
            <FaGoogle className="w-5 h-5" aria-hidden="true" />
            Leave a review on Google
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
