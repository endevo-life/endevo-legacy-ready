import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import individualPlanningImage from "@/assets/individual-planning.png";

const ForIndividuals = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen">
      <ResponsiveNavbar />
      <main className="pt-8 pb-20">
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
            For Individuals
          </h1>

          {/* Hero Section with Image */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#FF6B35]">
                AI-powered tools for personal legacy and digital preparedness.
              </h2>
              <p className="text-lg text-gray-700">
                Planning for the future can feel overwhelming, but ENDevo makes it simple and approachable. Our platform helps you organize every part of your life so that you and your loved ones are always prepared.
              </p>
            </div>
            <div>
              <img 
                src={individualPlanningImage} 
                alt="Individual using ENDevo for digital legacy planning"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>

          {/* Centered Result Statement */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <p className="text-xl font-bold text-gray-900">
              The result is peace of mind. You know your affairs are organized, your digital presence is protected, and your family will have the clarity they need in the future.
            </p>
          </div>

          {/* Four Column Cards */}
          <div ref={elementRef as any} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className={`bg-gray-100 shadow-md transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'
            }`}>
              <CardContent className="p-6">
                <p className="text-gray-800">
                  Begin with the Peace of Mind Assessment, a quick check-up that highlights gaps and gives you a clear readiness score.
                </p>
              </CardContent>
            </Card>

            <Card className={`bg-gray-100 shadow-md transition-all duration-700 ease-out delay-150 ${
              isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'
            }`}>
              <CardContent className="p-6">
                <p className="text-gray-800">
                  Use our AI-driven platform to gather your most important information in one place, including legal documents, financial records, insurance, health information, and digital accounts.
                </p>
              </CardContent>
            </Card>

            <Card className={`bg-gray-100 shadow-md transition-all duration-700 ease-out delay-300 ${
              isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'
            }`}>
              <CardContent className="p-6">
                <p className="text-gray-800">
                  Gain access to guided support, including one-on-one sessions with ENDevo leadership, to walk you through your options and help you understand your next steps.
                </p>
              </CardContent>
            </Card>

            <Card className={`bg-gray-100 shadow-md transition-all duration-700 ease-out delay-[450ms] ${
              isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'
            }`}>
              <CardContent className="p-6">
                <p className="text-gray-800">
                  Securely share your plan with trusted family members or designated contacts so they have what they need when it matters most.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Bottom Text and CTA */}
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 italic mb-8">
              With ENDevo, you are not just supporting individual employees. You are creating a healthier workplace culture, protecting business continuity, and showing that your organization values its people in the moments that matter most.
            </p>
            <Button 
              variant="cta"
              size="lg"
              className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 rounded-full"
            >
              Start Your Plan
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ForIndividuals;
