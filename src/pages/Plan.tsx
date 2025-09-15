import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import chaosBg from "@/assets/plan-chaos-bg.jpg";
import legacyReadinessBg from "@/assets/legacy-readiness-bg.jpg";

const Plan = () => {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { elementRef: cardsRef, isVisible: cardsVisible } = useScrollAnimation();
  const { elementRef: chaosRef, isVisible: chaosVisible } = useScrollAnimation();
  const { elementRef: frameworkRef, isVisible: frameworkVisible } = useScrollAnimation();
  const { elementRef: legacyRef, isVisible: legacyVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Main Title Section */}
      <section className="py-20 bg-background">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <div 
            ref={headerRef as any}
            className={`transition-all duration-1000 ${
              headerVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Choose a Path to Legacy Readiness
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Whether you're an enterprise leader or an individual employee, ENDevo makes preparedness simple, secure, and scalable.
            </p>
          </div>
        </div>
      </section>

      {/* Index Cards Section */}
      <section className="py-20 bg-muted/30">
        <div className="container max-w-6xl mx-auto px-4">
          <div 
            ref={cardsRef as any}
            className={`grid md:grid-cols-2 gap-8 transition-all duration-1000 ${
              cardsVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Enterprise Pilot Card */}
            <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-t-[50px] shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-center">
                  Start an Enterprise Pilot
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg leading-relaxed">
                  Test ENDevo's readiness program with your team and see the impact on resilience, productivity, and peace of mind.
                </p>
              </CardContent>
            </Card>

            {/* Assessment Card */}
            <Card className="bg-gradient-to-br from-brand-orange to-brand-orange/80 text-white rounded-t-[50px] shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-center">
                  Take the Peace of Mind Assessment
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg leading-relaxed">
                  Quickly spot gaps, gain clarity, and understand your readiness for life's inevitable transitions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Avoid the Mess Section */}
      <section className="py-20 bg-background">
        <div className="container max-w-6xl mx-auto px-4">
          <div 
            ref={chaosRef as any}
            className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
              chaosVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Image */}
            <div className="relative">
              <img 
                src={chaosBg}
                alt="Chaotic unorganized documents representing unpreparedness"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Avoid the Mess Before it Starts
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Chaos doesn't come from the event itself—it comes from being unprepared. With no plan in place, families face confusion, leaders lose time, and businesses risk continuity. Planning doesn't have to be hard, but it does have to start now.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Framework Section */}
      <section className="py-20 bg-muted/30">
        <div className="container max-w-6xl mx-auto px-4">
          <div 
            ref={frameworkRef as any}
            className={`text-center mb-16 transition-all duration-1000 ${
              frameworkVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              A Smarter Framework for Readiness
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              ENDevo blends project management, digital tools, and compassionate guidance into a single framework. Our approach emphasizes:
            </p>
          </div>

          <div 
            className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 ${
              frameworkVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
            style={{ animationDelay: '0.2s' }}
          >
            {/* Framework Card 1 */}
            <Card className="text-center bg-card shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                  1
                </div>
                <CardTitle className="text-xl">Reduce Crisis Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Reduce absenteeism and turnover caused by unplanned crises.
                </p>
              </CardContent>
            </Card>

            {/* Framework Card 2 */}
            <Card className="text-center bg-card shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-brand-orange text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                  2
                </div>
                <CardTitle className="text-xl">Increase Well-being</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Increase employee well-being, loyalty, and productivity.
                </p>
              </CardContent>
            </Card>

            {/* Framework Card 3 */}
            <Card className="text-center bg-card shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                  3
                </div>
                <CardTitle className="text-xl">Strengthen Culture</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Strengthen workplace culture with a proactive wellness benefit.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Legacy Readiness Section */}
      <section className="py-20 bg-background">
        <div className="container max-w-6xl mx-auto px-4">
          <div 
            ref={legacyRef as any}
            className={`text-center mb-16 transition-all duration-1000 ${
              legacyVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
              Simplify Your Legacy Readiness
            </h2>
          </div>

          <div 
            className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
              legacyVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
            style={{ animationDelay: '0.2s' }}
          >
            {/* Image */}
            <div className="relative">
              <img 
                src={legacyReadinessBg}
                alt="Clean digital planning interface showing organized legacy readiness"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Steps */}
            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                  1
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Secure digital vault for critical information.
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-orange text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                  2
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Guided templates for wills, directives, and digital accounts.
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                  3
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Peace of Mind Assessment to identify gaps.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-16">
            <Button variant="cta" size="lg" className="hover-scale">
              Take the Peace of Mind Assessment
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Plan;