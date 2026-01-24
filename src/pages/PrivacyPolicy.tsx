import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <ResponsiveNavbar />
      
      <section className="py-20 pt-32">
        <div className="container max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Privacy Policy
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-6">
              Last Updated: January 23, 2026
            </p>
            
            <p className="text-muted-foreground mb-8">
              This Privacy Policy page is currently under development. We are committed to protecting your privacy and will provide detailed information about how we collect, use, and safeguard your personal information.
            </p>
            
            <p className="text-muted-foreground">
              For privacy-related inquiries, please contact us at{" "}
              <a href="mailto:hello@endevo.life" className="text-brand-orange hover:underline">
                hello@endevo.life
              </a>
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
