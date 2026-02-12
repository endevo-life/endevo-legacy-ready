import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <ResponsiveNavbar />
      <main className="flex-1 flex items-center justify-center pt-20 pb-16">
        <div className="text-center px-4">
          <h1 className="mb-4 text-6xl md:text-8xl font-bold font-playfair text-brand-navy">404</h1>
          <p className="mb-8 text-2xl md:text-3xl text-gray-600">Oops! Page not found</p>
          <p className="mb-8 text-gray-500 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <a 
            href="/" 
            className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Return to Home
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
