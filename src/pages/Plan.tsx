import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import Footer from "@/components/Footer";

const Plan = () => {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { elementRef: cardsRef, isVisible: cardsVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <ResponsiveNavbar />
      
      {/* Pricing Section */}
      <section className="py-20 bg-background pt-36">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <div 
            ref={headerRef}
            className={`transition-all duration-1000 ${
              headerVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Plan Your Legacy with Clarity
            </h1>
            <p className="text-xl text-brand-orange font-semibold mb-16">
              Flexible paths to prepare with clarity and confidence.
            </p>
          </div>

          {/* Pricing Cards */}
          <div 
            ref={cardsRef}
            className={`grid md:grid-cols-3 gap-8 max-w-5xl mx-auto transition-all duration-1000 ${
              cardsVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Card 1 - Starter (Left) */}
            <Card className="bg-card text-card-foreground shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg flex flex-col">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold mb-4">Starter</CardTitle>
                <div className="text-4xl font-bold text-foreground mb-4">Free</div>
                <p className="text-muted-foreground">
                  Get started with a personal consultation and essential first steps.
                </p>
              </CardHeader>
              <CardContent className="pt-0 flex flex-col flex-grow">
                <ul className="space-y-3 text-left mb-8 flex-grow">
                  <li className="flex items-start">
                    <span className="text-brand-orange mr-2">•</span>
                    One-on-one meeting with the CEO to discuss your goals.
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-orange mr-2">•</span>
                    Free access to the introductory course in the Final Playbook app.
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-orange mr-2">•</span>
                    Personalized guidance to begin your legacy planning journey.
                  </li>
                </ul>
                <Button 
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white mt-auto px-6 py-1.5 text-base font-semibold rounded-full"
                  style={{ fontFamily: "'Open Sans', 'Helvetica', sans-serif" }}
                >
                  Schedule Your Free Session
                </Button>
              </CardContent>
            </Card>

            {/* Card 2 - Pro (Center) */}
            <Card className="bg-card text-card-foreground shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg flex flex-col">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold mb-4">Pro</CardTitle>
                <div className="text-4xl font-bold text-foreground mb-4">$00.00</div>
                <p className="text-muted-foreground">
                  Unlock the Final Playbook app with guided courses and challenges.
                </p>
              </CardHeader>
              <CardContent className="pt-0 flex flex-col flex-grow">
                <ul className="space-y-3 text-left mb-8 flex-grow">
                  <li className="flex items-start">
                    <span className="text-brand-orange mr-2">•</span>
                    Full access to the Final Playbook App.
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-orange mr-2">•</span>
                    Includes the "What is My Final Playbook: 6-Week Challenge" course.
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-orange mr-2">•</span>
                    Tools and resources to build confidence and reduce planning stress.
                  </li>
                </ul>
                <Button 
                  className="w-full bg-green-500 hover:bg-green-600 text-black mt-auto px-6 py-1.5 text-base font-semibold rounded-full"
                  style={{ fontFamily: "'Open Sans', 'Helvetica', sans-serif" }}
                >
                  Download the App & Enroll
                </Button>
              </CardContent>
            </Card>

            {/* Card 3 - Starter (Right) */}
            <Card className="bg-card text-card-foreground shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg flex flex-col">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold mb-4">Starter</CardTitle>
                <div className="text-4xl font-bold text-foreground mb-4">Free</div>
                <p className="text-muted-foreground">
                  Get started with a personal consultation and essential first steps.
                </p>
              </CardHeader>
              <CardContent className="pt-0 flex flex-col flex-grow">
                <ul className="space-y-3 text-left mb-8 flex-grow">
                  <li className="flex items-start">
                    <span className="text-brand-orange mr-2">•</span>
                    One-on-one meeting with the CEO to discuss your goals.
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-orange mr-2">•</span>
                    Free access to the introductory course in the Final Playbook app.
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-orange mr-2">•</span>
                    Personalized guidance to begin your legacy planning journey.
                  </li>
                </ul>
                <Button 
                  className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white mt-auto px-6 py-1.5 text-base font-semibold rounded-full"
                  style={{ fontFamily: "'Open Sans', 'Helvetica', sans-serif" }}
                >
                  Start for Free
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Plan;