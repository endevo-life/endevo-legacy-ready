import { useNavigate } from "react-router-dom";
import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SEO
        title="Page Not Found | ENDevo"
        description="The page you're looking for doesn't exist. Return to ENDevo's homepage to explore legacy readiness resources."
        noIndex={true}
      />
      <ResponsiveNavbar />
      <main className="flex-1 flex items-center justify-center pt-20 pb-16">
        <div className="text-center px-4">
          <h1 className="mb-4 text-6xl md:text-8xl font-bold font-playfair text-brand-navy">404</h1>
          <p className="mb-8 text-2xl md:text-3xl text-gray-600">Oops! Page not found</p>
          <p className="mb-8 text-gray-500 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <button
            onClick={() => navigate("/")}
            className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Return to Home
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
