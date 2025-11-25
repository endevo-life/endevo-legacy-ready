import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import individualPlanningImage from "@/assets/individual-planning.png";

const ForEmployers = () => {
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
          
          {/* Hero Section with Image */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-8">
            <div>
              <p className="text-xl font-semibold mb-4 text-foreground">
                For Employers
              </p>
              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-[#FF6B35]">
                AI-powered tools for employee wellness and organizational preparedness.
              </h1>
              <p className="text-lg text-gray-700">
                Supporting your employees through life's most difficult moments can feel overwhelming, but ENDevo makes it simple and approachable. Our platform helps your organization provide comprehensive support so that your employees and their families are always prepared.
              </p>
            </div>
            <div>
              <img 
                src={individualPlanningImage} 
                alt="Employer supporting employee wellness with ENDevo"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>

          {/* Centered Result Statement */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <p className="text-xl font-bold text-gray-900">
              The result is a more resilient workforce. Your employees know they have support, their families have clarity during difficult times, and your organization maintains continuity when it matters most.
            </p>
          </div>

          {/* Four Column Cards */}
          <div ref={elementRef as any} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className={`bg-gray-100 shadow-md transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'
            }`}>
              <CardContent className="p-6">
                <p className="text-gray-800">
                  Begin with organizational assessments that help you understand your workforce's preparedness needs and identify gaps in your current support systems.
                </p>
              </CardContent>
            </Card>

            <Card className={`bg-gray-100 shadow-md transition-all duration-700 ease-out delay-150 ${
              isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'
            }`}>
              <CardContent className="p-6">
                <p className="text-gray-800">
                  Provide employees with AI-driven tools to organize their important information including legal documents, financial records, insurance, health information, and digital accounts.
                </p>
              </CardContent>
            </Card>

            <Card className={`bg-gray-100 shadow-md transition-all duration-700 ease-out delay-300 ${
              isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'
            }`}>
              <CardContent className="p-6">
                <p className="text-gray-800">
                  Gain access to guided support programs, including workshops and one-on-one sessions with ENDevo experts, to help your employees understand their options and plan effectively.
                </p>
              </CardContent>
            </Card>

            <Card className={`bg-gray-100 shadow-md transition-all duration-700 ease-out delay-[450ms] ${
              isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'
            }`}>
              <CardContent className="p-6">
                <p className="text-gray-800">
                  Ensure business continuity with comprehensive planning tools that help protect your organization while supporting employee well-being during life transitions.
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
              onClick={() => navigate('/contact')}
            >
              Partner with ENDevo
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ForEmployers;
