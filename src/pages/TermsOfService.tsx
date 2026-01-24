import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <ResponsiveNavbar />
      
      <section className="py-20 pt-32">
        <div className="container max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Terms of Service
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-6">
              Last Updated: January 23, 2026
            </p>
            
            <p className="text-muted-foreground mb-8">
              This Terms of Service page is currently under development. We are working to provide comprehensive terms that govern your use of ENDevo services and our website.
            </p>
            
            <p className="text-muted-foreground">
              For questions about our terms, please contact us at{" "}
              <a href="mailto:legal@endevo.life" className="text-brand-orange hover:underline">
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

export default TermsOfService;
