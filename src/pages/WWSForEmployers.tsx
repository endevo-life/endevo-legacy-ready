import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import Footer from "@/components/Footer";
import employerMeeting from "@/assets/employer-meeting.jpg";
import employerResilience from "@/assets/employer-resilience.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
const WWSForEmployers = () => {
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
        {/* Legacy Planning for Employers Section */}
        <section className="py-20 bg-background">
          <div className="container max-w-7xl mx-auto px-4">
            <div ref={individualsAnimation.elementRef as any} id="employers" className="grid lg:grid-cols-2 gap-12 items-center scroll-mt-20">
              {/* Left - Image */}
              <div className={`relative transition-all duration-1000 ${individualsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <img src={employerMeeting} alt="Business professionals collaborating" className="w-full h-auto rounded-2xl shadow-lg" />
              </div>

              {/* Right - Content */}
              <div className={`space-y-6 transition-all duration-1000 delay-200 ${individualsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Tools for Employers & Teams
                </h2>
                
                <p className="text-xl text-brand-orange font-semibold">
                  Support employee well-being, reduce absenteeism, and build a more resilient workforce with ENDevo.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  ENDevo reduces workplace absenteeism and stress by supporting employees with clarity and confidence during life's most challenging moments. By integrating legacy readiness into your wellness programs, you strengthen employee engagement, build organizational resilience, and demonstrate genuine care for your team's well-being.
                </p>
                
                <div className="mt-8">
                  <Button 
                    onClick={() => navigate('/contact')} 
                    variant="default" 
                    className="bg-brand-orange hover:bg-brand-orange/90 text-white px-6 py-1.5 text-base font-semibold rounded-full"
                    style={{ fontFamily: "'Open Sans', 'Helvetica', sans-serif" }}
                  >
                    Empower your team
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
                Unprepared employees cost businesses <span className="text-brand-orange">time and money</span>.
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
                  }}>30%</p>
                    <p className="text-lg text-black">Employees dealing with personal loss experience a 20–30% productivity drop for months</p>
                  </CardContent>
                </Card>

                <Card className={`bg-white shadow-lg rounded-xl border-0 transition-all duration-1000 ${statsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{
                transitionDelay: statsAnimation.isVisible ? '400ms' : '0ms'
              }}>
                  <CardContent className="px-3 py-16 text-center space-y-4">
                    <p className="text-8xl font-bold" style={{
                    fontFamily: 'Times New Roman, serif',
                    color: '#394161'
                  }}>76%</p>
                    <p className="text-lg text-black">76% of employees say they’d feel more loyal to an employer that supports personal preparedness.</p>
                  </CardContent>
                </Card>

                <Card className={`bg-white shadow-lg rounded-xl border-0 transition-all duration-1000 ${statsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{
                transitionDelay: statsAnimation.isVisible ? '600ms' : '0ms'
              }}>
                  <CardContent className="px-3 py-16 text-center space-y-4">
                    <p className="text-8xl font-bold" style={{
                    fontFamily: 'Times New Roman, serif',
                    color: '#394161'
                  }}>$1,900</p>
                    <p className="text-lg text-black">Businesses lose an estimated $1,900 per employee annually due to disorganization and crisis-driven leave.</p>
                  </CardContent>
                </Card>

                <Card className={`bg-white shadow-lg rounded-xl border-0 transition-all duration-1000 ${statsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{
                transitionDelay: statsAnimation.isVisible ? '800ms' : '0ms'
              }}>
                  <CardContent className="px-3 py-16 text-center space-y-4">
                    <p className="text-8xl font-bold" style={{
                    fontFamily: 'Times New Roman, serif',
                    color: '#394161'
                  }}>25%</p>
                    <p className="text-lg text-black">25% of workers face a major life event each year that requires immediate documentation.</p>
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
                Your Path to Organizational Resilience Starts Here
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
                    <p className="text-lg text-foreground leading-relaxed text-left">Provide employees with access to our Peace of Mind Assessment to quickly identify their level of preparedness.</p>
                  </div>

                  {/* Step 2 */}
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-full bg-brand-orange text-white flex items-center justify-center text-2xl font-bold flex-shrink-0">
                      2
                    </div>
                    <p className="text-lg text-foreground leading-relaxed text-left">Guide staff with AI-powered tools that help them organize legal, financial, and digital assets in one secure place.</p>
                  </div>

                  {/* Step 3 */}
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-full bg-brand-orange text-white flex items-center justify-center text-2xl font-bold flex-shrink-0">
                      3
                    </div>
                    <p className="text-lg text-foreground leading-relaxed text-left">
                      Offer confidence and support that reduces stress, protects well-being, and lowers the risk of extended absences.
                    </p>
                  </div>

                  {/* Step 4 */}
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-full bg-brand-orange text-white flex items-center justify-center text-2xl font-bold flex-shrink-0">
                      4
                    </div>
                    <p className="text-lg text-foreground leading-relaxed text-left">
                      Strengthen continuity by ensuring employees can focus on their work, even while navigating personal challenges.
                    </p>
                  </div>
                </div>

                {/* Right - Image */}
                <div className={`relative transition-all duration-1000 ${pathAnimation.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{
                transitionDelay: pathAnimation.isVisible ? '400ms' : '0ms'
              }}>
                  <img src={employerResilience} alt="Professional consultation meeting" className="w-full h-auto rounded-2xl shadow-lg" />
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className={`mt-12 text-center transition-all duration-1000 ${pathAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
            transitionDelay: pathAnimation.isVisible ? '600ms' : '0ms'
          }}>
              <Button 
                onClick={() => navigate('/contact')} 
                className="bg-brand-orange hover:bg-brand-orange/90 text-white px-6 py-1.5 text-base font-semibold rounded-full"
                style={{ fontFamily: "'Open Sans', 'Helvetica', sans-serif" }}
              >
                Start Your Journey Today
              </Button>
            </div>
          </div>
        </section>

        {/* White Bar Section with Navy Blue Background */}
        <section ref={barAnimation.elementRef as any} className="py-20 overflow-hidden">
          <div className="container max-w-7xl mx-auto px-4 mb-8">
            <h2 className={`text-3xl md:text-4xl font-bold text-brand-orange text-center transition-all duration-1000 ${barAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Support Your Employees When It Matters Most
            </h2>
          </div>
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
export default WWSForEmployers;