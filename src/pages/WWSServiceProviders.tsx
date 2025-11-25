import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import Footer from "@/components/Footer";
import serviceProvidersHero from "@/assets/service-providers-hero.jpg";
import consultationMeeting from "@/assets/consultation-meeting.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
const WWSServiceProviders = () => {
  const navigate = useNavigate();
  const individualsAnimation = useScrollAnimation();
  const statsAnimation = useScrollAnimation();
  const pathAnimation = useScrollAnimation();
  const barAnimation = useScrollAnimation();
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
        {/* Legacy Planning for Service Providers Section */}
        <section className="py-20 bg-background">
          <div className="container max-w-7xl mx-auto px-4">
            <div ref={individualsAnimation.elementRef as any} id="service-providers" className="grid lg:grid-cols-2 gap-12 items-center scroll-mt-20">
              {/* Left - Image */}
              <div className={`relative transition-all duration-1000 ${individualsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <img src={serviceProvidersHero} alt="Business professionals collaborating" className="w-full h-auto rounded-2xl shadow-lg" />
              </div>

              {/* Right - Content */}
              <div className={`space-y-6 transition-all duration-1000 delay-200 ${individualsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Solutions for Service Providers
                </h2>
                
                <p className="text-xl text-brand-orange font-semibold">
                  Unlock pre-qualified clients, streamline operations, and strengthen trust with the people who need you most.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  ENDevo connects service providers with pre-qualified clients who are ready for your expertise. Our platform improves onboarding efficiency, strengthens client trust through seamless integration, and reduces the time you spend on administrative paperwork so you can focus on delivering exceptional service.
                </p>
                
                <div className="mt-8">
                  <Button onClick={() => navigate('/contact')} variant="default" size="lg" className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-3 text-lg rounded-full">
                    Partner with ENDevo
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
                Clients expect <span className="text-brand-orange">guidance</span>. Most aren't prepared.
              </h2>
              
              {/* Statistics */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className={`bg-white shadow-lg rounded-xl border-0 transition-all duration-1000 ${statsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{
                transitionDelay: statsAnimation.isVisible ? '200ms' : '0ms'
              }}>
                  <CardContent className="px-3 py-16 text-center space-y-4">
                    <p className="text-8xl font-bold" style={{
                    fontFamily: 'Times New Roman, serif',
                    color: '#394161'
                  }}>70%</p>
                    <p className="text-lg text-black">70% of clients arrive without organized documents, slowing every process</p>
                  </CardContent>
                </Card>

                <Card className={`bg-white shadow-lg rounded-xl border-0 transition-all duration-1000 ${statsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{
                transitionDelay: statsAnimation.isVisible ? '400ms' : '0ms'
              }}>
                  <CardContent className="px-3 py-16 text-center space-y-4">
                    <p className="text-8xl font-bold" style={{
                    fontFamily: 'Times New Roman, serif',
                    color: '#394161'
                  }}>40%</p>
                    <p className="text-lg text-black">Advisors spend up to 40% of time chasing paperwork instead of providing value.</p>
                  </CardContent>
                </Card>

                <Card className={`bg-white shadow-lg rounded-xl border-0 transition-all duration-1000 ${statsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{
                transitionDelay: statsAnimation.isVisible ? '600ms' : '0ms'
              }}>
                  <CardContent className="px-3 py-16 text-center space-y-4">
                    <p className="text-8xl font-bold" style={{
                    fontFamily: 'Times New Roman, serif',
                    color: '#394161'
                  }}>60%</p>
                    <p className="text-lg text-black">60% of clients expect digital guidance but most providers lack the tools.</p>
                  </CardContent>
                </Card>

                <Card className={`bg-white shadow-lg rounded-xl border-0 transition-all duration-1000 ${statsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{
                transitionDelay: statsAnimation.isVisible ? '800ms' : '0ms'
              }}>
                  <CardContent className="px-3 py-16 text-center space-y-4">
                    <p className="text-8xl font-bold" style={{
                    fontFamily: 'Times New Roman, serif',
                    color: '#394161'
                  }}>1 in 3</p>
                    <p className="text-lg text-black">1 in 3 legal or financial cases is delayed due to missing or outdated information.</p>
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
                <div className={`grid grid-cols-1 gap-12 transition-all duration-1000 ${pathAnimation.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{
                transitionDelay: pathAnimation.isVisible ? '200ms' : '0ms'
              }}>
                  {/* Step 1 */}
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-full bg-brand-orange text-white flex items-center justify-center text-2xl font-bold flex-shrink-0">
                      1
                    </div>
                    <p className="text-lg text-foreground leading-relaxed text-left">We are addressing a market valued at over 126 billion dollars, combining traditional estate and legacy planning with digital preparedness.</p>
                  </div>

                  {/* Step 2 */}
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-full bg-brand-orange text-white flex items-center justify-center text-2xl font-bold flex-shrink-0">
                      2
                    </div>
                    <p className="text-lg text-foreground leading-relaxed text-left">Our technology is built to scale, offering AI-powered tools alongside personalized human guidance.</p>
                  </div>

                  {/* Step 3 */}
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-full bg-brand-orange text-white flex items-center justify-center text-2xl font-bold flex-shrink-0">
                      3
                    </div>
                    <p className="text-lg text-foreground leading-relaxed text-left">
                      Multiple revenue streams are available through individual subscriptions, corporate partnerships, and enterprise solutions.
                    </p>
                  </div>

                  {/* Step 4 */}
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-full bg-brand-orange text-white flex items-center justify-center text-2xl font-bold flex-shrink-0">
                      4
                    </div>
                    <p className="text-lg text-foreground leading-relaxed text-left">
                      ENDevo combines financial opportunity with social impact by solving a real human problem that affects every person, family, and organization.
                    </p>
                  </div>
                </div>

                {/* Right - Image */}
                <div className={`relative transition-all duration-1000 ${pathAnimation.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{
                transitionDelay: pathAnimation.isVisible ? '400ms' : '0ms'
              }}>
                  <img src={consultationMeeting} alt="Professional consultation meeting" className="w-full h-auto rounded-2xl shadow-lg" />
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className={`mt-12 text-center transition-all duration-1000 ${pathAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
            transitionDelay: pathAnimation.isVisible ? '600ms' : '0ms'
          }}>
              <Button onClick={() => navigate('/contact')} size="lg" className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-3 text-lg rounded-full">
                Partner with ENDevo
              </Button>
            </div>
          </div>
        </section>

        {/* White Bar Section with Navy Blue Background */}
        <section ref={barAnimation.elementRef as any} className="py-20 overflow-hidden">
          <div className={`shadow-2xl px-8 md:px-16 py-12 transition-all ease-out ${barAnimation.isVisible ? 'opacity-100' : 'opacity-0'}`} style={{
          backgroundColor: '#08123A',
          borderTopRightRadius: '100px',
          borderBottomRightRadius: '100px',
          width: barAnimation.isVisible ? '85%' : '0%',
          transitionDuration: '2000ms',
          transitionProperty: 'width, opacity'
        }}>
            <p className={`text-lg md:text-xl text-white leading-relaxed transition-opacity duration-1000 ${barAnimation.isVisible ? 'opacity-100' : 'opacity-0'}`} style={{
            transitionDelay: barAnimation.isVisible ? '800ms' : '0ms'
          }}>
              With ENDevo, you are not just supporting individual employees. You are creating a healthier workplace culture, protecting business continuity, and showing that your organization values its people in the moments that matter most.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default WWSServiceProviders;