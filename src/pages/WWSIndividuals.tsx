import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import Footer from "@/components/Footer";
import individualsLegacy from "@/assets/wws-individuals-hero.jpg";
import consultationMeeting from "@/assets/consultation-meeting.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
const WWSIndividuals = () => {
  const navigate = useNavigate();
  const individualsAnimation = useScrollAnimation();
  const statsAnimation = useScrollAnimation();
  const pathAnimation = useScrollAnimation();
  const [lineWidth, setLineWidth] = useState(0);
  const lineRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (lineRef.current) {
        const linePosition = lineRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Calculate progress based on scroll position
        const progress = Math.max(0, Math.min(100, (windowHeight - linePosition) / windowHeight * 100));
        setLineWidth(progress);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <div className="min-h-screen">
      <ResponsiveNavbar />
      <main className="pt-16">
        {/* Legacy Planning for Individuals Section */}
        <section className="py-20 bg-background">
          <div className="container max-w-7xl mx-auto px-4">
            <div ref={individualsAnimation.elementRef as any} id="individuals" className="grid lg:grid-cols-2 gap-12 items-center scroll-mt-20">
              {/* Left - Image */}
              <div className={`relative transition-all duration-1000 ${individualsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <img src={individualsLegacy} alt="Person working on laptop for legacy planning" className="w-full h-auto rounded-2xl shadow-lg" />
              </div>

              {/* Right - Content */}
              <div className={`space-y-6 transition-all duration-1000 delay-200 ${individualsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Legacy Planning for Individuals
                </h2>
                
                <p className="text-xl text-brand-orange font-semibold">
                  Simplify your journey with AI-powered guidance and compassionate resources designed to give you peace of mind.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  ENDevo's AI-powered tools help you organize essential documents, set reminders for important milestones, and provide compassionate resources every step of the way. We remove the stress and complexity from legacy planning, so you can focus on what matters most: your family, your values, and your peace of mind.
                </p>
                
                <div className="mt-8">
                  <p className="text-muted-foreground/70 italic mb-3">Find out how ready you are</p>
                  <Button onClick={() => window.open('https://jbigogmrgex.typeform.com/to/qBsak5CQ', '_blank')} variant="outline" size="lg" className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white px-8 py-3 text-lg rounded-full">
                    Take the peace of mind assessment for free
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Animated Divider Line */}
        

        {/* Your Personal Path Section */}
        <section ref={statsAnimation.elementRef as any} className="py-20">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center space-y-12">
              <h2 className={`text-3xl md:text-4xl font-bold text-black transition-all duration-1000 ${statsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                If you don't <span className="text-brand-orange">prepare</span>, this is what happens…
              </h2>
              
              {/* Statistics */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className={`bg-white shadow-lg rounded-xl border-0 transition-all duration-1000 ${statsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{ transitionDelay: statsAnimation.isVisible ? '200ms' : '0ms' }}>
                  <CardContent className="px-3 py-16 text-center space-y-4">
                    <p className="text-8xl font-bold" style={{
                    fontFamily: 'Times New Roman, serif',
                    color: '#394161'
                  }}>67%</p>
                    <p className="text-lg text-black">67% of adults have no plan in place, leaving families to make painful decisions alone.</p>
                  </CardContent>
                </Card>

                <Card className={`bg-white shadow-lg rounded-xl border-0 transition-all duration-1000 ${statsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{ transitionDelay: statsAnimation.isVisible ? '400ms' : '0ms' }}>
                  <CardContent className="px-3 py-16 text-center space-y-4">
                    <p className="text-8xl font-bold" style={{
                    fontFamily: 'Times New Roman, serif',
                    color: '#394161'
                  }}>420+</p>
                    <p className="text-lg text-black">Families spend 420+ hours sorting affairs when information isn’t organized.</p>
                  </CardContent>
                </Card>

                <Card className={`bg-white shadow-lg rounded-xl border-0 transition-all duration-1000 ${statsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{ transitionDelay: statsAnimation.isVisible ? '600ms' : '0ms' }}>
                  <CardContent className="px-3 py-16 text-center space-y-4">
                    <p className="text-8xl font-bold" style={{
                    fontFamily: 'Times New Roman, serif',
                    color: '#394161'
                  }}>30%</p>
                    <p className="text-lg text-black">30% of loved ones never access digital accounts, losing photos, messages, and records forever.</p>
                  </CardContent>
                </Card>

                <Card className={`bg-white shadow-lg rounded-xl border-0 transition-all duration-1000 ${statsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{ transitionDelay: statsAnimation.isVisible ? '800ms' : '0ms' }}>
                  <CardContent className="px-3 py-16 text-center space-y-4">
                    <p className="text-8xl font-bold" style={{
                    fontFamily: 'Times New Roman, serif',
                    color: '#394161'
                  }}>$58B</p>
                    <p className="text-lg text-black">$58B in assets goes unclaimed because families didn’t know accounts or policies existed.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Your Path to Peace of Mind Section */}
        <section ref={pathAnimation.elementRef as any} className="py-20 bg-background">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center space-y-12">
              <h2 className={`text-3xl md:text-4xl font-bold text-foreground mb-16 transition-all duration-1000 ${pathAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Your Path to Peace of Mind Starts Here
              </h2>
              
              {/* Two Column Layout: Steps and Image */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left - Step Blocks */}
                <div className={`grid grid-cols-1 gap-12 transition-all duration-1000 ${pathAnimation.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{ transitionDelay: pathAnimation.isVisible ? '200ms' : '0ms' }}>
                  {/* Step 1 */}
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-full bg-brand-orange text-white flex items-center justify-center text-2xl font-bold flex-shrink-0">
                      1
                    </div>
                    <p className="text-lg text-foreground leading-relaxed text-left">
                      Begin with the Peace of Mind Assessment, a quick check-up that highlights gaps and gives you a clear readiness score.
                    </p>
                  </div>

                  {/* Step 2 */}
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-full bg-brand-orange text-white flex items-center justify-center text-2xl font-bold flex-shrink-0">
                      2
                    </div>
                    <p className="text-lg text-foreground leading-relaxed text-left">Use our AI-driven platform to gather your most important information in one place.</p>
                  </div>

                  {/* Step 3 */}
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-full bg-brand-orange text-white flex items-center justify-center text-2xl font-bold flex-shrink-0">
                      3
                    </div>
                    <p className="text-lg text-foreground leading-relaxed text-left">
                      Gain access to guided support, including one-on-one sessions with ENDevo leadership, to walk you through your options and help you understand your next steps.
                    </p>
                  </div>

                  {/* Step 4 */}
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-full bg-brand-orange text-white flex items-center justify-center text-2xl font-bold flex-shrink-0">
                      4
                    </div>
                    <p className="text-lg text-foreground leading-relaxed text-left">
                      Securely share your plan with trusted family members or designated contacts so they have what they need when it matters most.
                    </p>
                  </div>
                </div>

                {/* Right - Image */}
                <div className={`relative transition-all duration-1000 ${pathAnimation.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: pathAnimation.isVisible ? '400ms' : '0ms' }}>
                  <img src={consultationMeeting} alt="Professional consultation meeting" className="w-full h-auto rounded-2xl shadow-lg" />
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className={`mt-12 text-center transition-all duration-1000 ${pathAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: pathAnimation.isVisible ? '600ms' : '0ms' }}>
              <Button 
                onClick={() => navigate('/contact')}
                size="lg" 
                className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-3 text-lg rounded-full"
              >
                Start Your Journey Today
              </Button>
            </div>
          </div>
        </section>

        {/* White Bar Section with Navy Blue Background */}
        <section className="py-20">
          <div className="shadow-2xl px-8 md:px-16 py-12 w-[85%]" style={{ backgroundColor: '#08123A', borderTopRightRadius: '100px', borderBottomRightRadius: '100px' }}>
            <p className="text-lg md:text-xl text-white leading-relaxed">
              With ENDevo, you are not just supporting individual employees. You are creating a healthier workplace culture, protecting business continuity, and showing that your organization values its people in the moments that matter most.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default WWSIndividuals;