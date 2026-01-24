import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // Log 404 error for monitoring (production only)
    if (import.meta.env.PROD) {
      console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <ResponsiveNavbar />
      
      {/* 404 Content Section */}
      <section className="flex-1 flex items-center justify-center py-20 pt-32">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          {/* Large 404 Number */}
          <h1 className="text-[120px] md:text-[150px] font-bold text-brand-orange leading-none mb-8" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            404
          </h1>
          
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Page Not Found
          </h2>
          
          {/* Description */}
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Oops! The page you're looking for doesn't exist or has been moved. 
            Don't worry — let's get you back on track to planning your legacy.
          </p>
          
          {/* Attempted Path Display */}
          <div className="bg-muted/50 rounded-lg p-4 mb-8 inline-block">
            <p className="text-sm text-muted-foreground">
              Attempted path: <code className="text-brand-orange font-mono font-semibold">{location.pathname}</code>
            </p>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link to="/">
              <Button 
                className="bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-8 py-6 rounded-full text-base shadow-lg hover:shadow-xl transition-all"
                style={{ fontFamily: "'Open Sans', 'Helvetica', sans-serif" }}
              >
                <Home className="w-5 h-5 mr-2" />
                Return Home
              </Button>
            </Link>
            
            <Button 
              variant="outline"
              onClick={() => window.history.back()}
              className="border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white px-8 py-6 rounded-full text-base font-semibold shadow-md hover:shadow-lg transition-all"
              style={{ fontFamily: "'Open Sans', 'Helvetica', sans-serif" }}
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </Button>
          </div>
          
          {/* Helpful Links Section */}
          <div className="mt-16">
            <h3 className="text-xl font-semibold text-foreground mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Helpful Links
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <Link 
                to="/solution" 
                className="p-6 bg-card rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-center group border border-border hover:border-brand-orange"
              >
                <p className="font-semibold text-foreground group-hover:text-brand-orange transition-colors">Solutions</p>
              </Link>
              <Link 
                to="/resources" 
                className="p-6 bg-card rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-center group border border-border hover:border-brand-orange"
              >
                <p className="font-semibold text-foreground group-hover:text-brand-orange transition-colors">Resources</p>
              </Link>
              <Link 
                to="/company" 
                className="p-6 bg-card rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-center group border border-border hover:border-brand-orange"
              >
                <p className="font-semibold text-foreground group-hover:text-brand-orange transition-colors">About Us</p>
              </Link>
              <Link 
                to="/contact" 
                className="p-6 bg-card rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-center group border border-border hover:border-brand-orange"
              >
                <p className="font-semibold text-foreground group-hover:text-brand-orange transition-colors">Contact</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default NotFound;
