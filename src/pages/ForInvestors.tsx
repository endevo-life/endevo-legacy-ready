import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import investorNetworkImage from "@/assets/investor-network.png";

const ForInvestors = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen">
      <ResponsiveNavbar />
      <main className="pt-8 pb-20 pt-24">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Go Back Button */}
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mb-8 hover:bg-gray-100"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
          
          {/* Section Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            For Investors
          </h1>

          {/* Hero Section with Image */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#FF6B35]">
                Be part of a 126 billion dollar industry transformation.
              </h2>
              <p className="text-lg text-gray-700">
                The preparedness industry is large and underserved, with families, companies, and institutions facing rising demand for solutions that address both personal and digital legacies. ENDevo is creating a new standard for how people plan, prepare, and secure their futures.
              </p>
            </div>
            <div>
              <img 
                src={investorNetworkImage} 
                alt="Business network and growth opportunities"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>

          {/* Centered Statement */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <p className="text-xl font-bold text-gray-900">
              Positioned as a category leader, ENDevo is at the intersection of wellness, technology, and risk management.
            </p>
          </div>

          {/* Four Column Cards */}
          <div ref={elementRef as any} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className={`bg-gray-100 shadow-md transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <CardContent className="p-6">
                <p className="text-gray-800">
                  We are addressing a market valued at over 126 billion dollars, combining traditional estate and legacy planning with digital preparedness.
                </p>
              </CardContent>
            </Card>

            <Card className={`bg-gray-100 shadow-md transition-all duration-700 delay-150 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <CardContent className="p-6">
                <p className="text-gray-800">
                  Our technology is built to scale, offering AI-powered tools alongside personalized human guidance.
                </p>
              </CardContent>
            </Card>

            <Card className={`bg-gray-100 shadow-md transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <CardContent className="p-6">
                <p className="text-gray-800">
                  Multiple revenue streams are available through individual subscriptions, corporate partnerships, and enterprise solutions.
                </p>
              </CardContent>
            </Card>

            <Card className={`bg-gray-100 shadow-md transition-all duration-700 delay-[450ms] ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <CardContent className="p-6">
                <p className="text-gray-800">
                  ENDevo combines financial opportunity with social impact by solving a real human problem that affects every person, family, and organization.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Bottom Text and CTA */}
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 italic mb-8">
              By joining ENDevo, you are not only investing in a company but also in a movement to bring clarity, confidence, and preparedness to millions of people. This is your chance to participate in shaping a new market while generating both financial return and meaningful impact.
            </p>
            <Button 
              variant="cta"
              className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 rounded-full px-6 py-1.5 text-base font-semibold"
              style={{ fontFamily: "'Open Sans', 'Helvetica', sans-serif" }}
              onClick={() => navigate('/contact')}
            >
              Explore Investment Opportunities
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ForInvestors;
