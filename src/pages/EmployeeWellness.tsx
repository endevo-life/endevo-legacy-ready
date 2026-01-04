import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import employeeWellnessHero from "@/assets/employee-wellness-hero-bg.jpg";

const EmployeeWellness = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen">
      <ResponsiveNavbar />
      <main className="pt-16">
        {/* Back Button - Top */}
        <div className="p-0 m-0">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </Button>
        </div>
        {/* Get Involved Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-600" style={{ fontFamily: 'serif' }}>
              Get Involved
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              Ready to invest in your well-being and legacy?<br />
              Let's build a culture of clarity, compassion, and balance together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-[#002147] hover:bg-[#003366] text-white font-semibold px-6 py-1.5 rounded-full text-base shadow-lg hover:shadow-2xl transition-all duration-300"
                style={{ fontFamily: "'Open Sans', 'Helvetica', sans-serif" }}
                onClick={() => navigate('/contact')}
              >
                Start the Program
              </Button>
              <Button 
                variant="outline"
                className="border-2 font-semibold px-6 py-1.5 rounded-full text-base shadow-lg hover:shadow-2xl transition-all duration-300"
                style={{ fontFamily: "'Open Sans', 'Helvetica', sans-serif" }}
                onClick={() => window.open('https://link.endevo.life/widget/booking/HUYkq6QZs0fI7AMtt6qH', '_blank')}
              >
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* Back Button - Bottom */}
        <div className="p-0 m-0">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EmployeeWellness;