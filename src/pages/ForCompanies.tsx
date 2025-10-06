import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import hrEapImage from "@/assets/hr-eap-consultation.png";

const ForCompanies = () => {
  return (
    <div className="min-h-screen">
      <ResponsiveNavbar />
      <main className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Hero Section with Image */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#FF6B35]">
                Reduce risk. Protect employees. Safeguard continuity.
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Employees are the backbone of every organization, but when personal crises or major life events occur, they often bring stress and uncertainty into the workplace. The impact shows up in absenteeism, reduced productivity, and higher turnover. Companies that provide meaningful support during these moments create stronger, more resilient teams.
              </p>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                ENDevo helps HR and EAP leaders equip their workforce with practical tools and clear resources for life's transitions.
              </h2>
            </div>
            <div>
              <img 
                src={hrEapImage} 
                alt="HR professional consulting with employee"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>

          {/* Four Column Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="bg-gray-100 shadow-md">
              <CardContent className="p-6">
                <p className="text-gray-800">
                  Provide employees with access to our Peace of Mind Assessment to quickly identify their level of preparedness.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-100 shadow-md">
              <CardContent className="p-6">
                <p className="text-gray-800">
                  Guide staff with AI-powered tools that help them organize legal, financial, and digital assets in one secure place.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-100 shadow-md">
              <CardContent className="p-6">
                <p className="text-gray-800">
                  Offer confidence and support that reduces stress, protects well-being, and lowers the risk of extended absences.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-100 shadow-md">
              <CardContent className="p-6">
                <p className="text-gray-800">
                  Strengthen continuity by ensuring employees can focus on their work, even while navigating personal challenges.
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
              className="bg-[#FF6B35] hover:bg-[#FF6B35]/90"
            >
              Partner With Us
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ForCompanies;
