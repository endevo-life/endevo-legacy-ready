import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import employeeWellnessHero from "@/assets/employee-wellness-hero.png";
import { Heart, Smile, DollarSign, TrendingUp, Users } from "lucide-react";
const EmployeeWellness = () => {
  const {
    elementRef,
    isVisible
  } = useScrollAnimation();
  return <div className="min-h-screen">
      <ResponsiveNavbar />
      <main>
        {/* Hero Section */}
        <section ref={elementRef as any} className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url('${employeeWellnessHero}')`
      }}>
          {/* Dark overlay for text contrast */}
          <div className="absolute inset-0 bg-black/50"></div>
          
          {/* Content */}
          <div className="relative z-10 container max-w-4xl mx-auto px-4 text-center">
            <h1 className={`font-bold mb-6 transition-all duration-1000 ease-out text-4xl md:text-5xl lg:text-6xl text-white ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
            fontFamily: 'serif',
            transitionDelay: isVisible ? '0.2s' : '0s'
          }}>
              Empowering Employees to Thrive in Work, Life, and Legacy
            </h1>
            
            <p className={`text-lg md:text-xl mb-12 leading-relaxed transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
            color: '#e5e7eb',
            transitionDelay: isVisible ? '0.4s' : '0s'
          }}>Our Employee Wellness Program helps individuals find balance, build resilience, and prepare for life's transitions because a strong legacy starts with a healthy, fulfilled you.</p>
            
            <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
            transitionDelay: isVisible ? '0.6s' : '0s'
          }}>
              <Button className="bg-[#002147] hover:bg-[#003366] text-white font-bold py-4 px-9 rounded-full text-lg shadow-lg hover:shadow-2xl transition-all duration-300" onClick={() => window.location.href = 'https://jbigogmrgex.typeform.com/to/qBsak5CQ'}>
                Join the Program
              </Button>
            </div>
          </div>
        </section>

        {/* About the Program Section */}
        <section className="py-20 px-4 bg-background">
          <div className="container max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground" style={{ fontFamily: 'serif' }}>
              About the Program
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                The Legacy Readiness Employee Wellness Program is built around one simple truth: you cannot build a lasting legacy without caring for yourself first.
              </p>
              <p>
                We provide a holistic approach to wellness that supports employees physically, emotionally, and financially. Whether it is improving daily habits, navigating career changes, or preparing for major life events, our goal is to empower you to show up as your best self, today and in the future.
              </p>
            </div>
          </div>
        </section>

        {/* Core Pillars Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-foreground" style={{ fontFamily: 'serif' }}>
              Our Core Pillars of Wellness
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {/* Pillar 1 - Physical Health */}
              <div className="flex flex-col items-center text-center group">
                {/* Pillar Top */}
                <div className="w-20 h-3 bg-primary rounded-t-sm mb-1"></div>
                {/* Pillar Body with Icon */}
                <div className="w-16 bg-gradient-to-b from-primary/90 to-primary/70 p-6 flex items-center justify-center min-h-[200px] relative">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg">
                    <Heart className="w-7 h-7 text-primary" />
                  </div>
                </div>
                {/* Pillar Base */}
                <div className="w-24 h-4 bg-primary/80 rounded-b-sm mb-4"></div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Physical Health</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Encouraging movement, nutrition, and rest through fitness challenges, meal planning, and health education.
                </p>
              </div>

              {/* Pillar 2 - Emotional Well-Being */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-20 h-3 bg-primary rounded-t-sm mb-1"></div>
                <div className="w-16 bg-gradient-to-b from-primary/90 to-primary/70 p-6 flex items-center justify-center min-h-[200px] relative">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg">
                    <Smile className="w-7 h-7 text-primary" />
                  </div>
                </div>
                <div className="w-24 h-4 bg-primary/80 rounded-b-sm mb-4"></div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Emotional Well-Being</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Offering mindfulness sessions, counseling resources, and stress management tools to foster inner calm and balance.
                </p>
              </div>

              {/* Pillar 3 - Financial Readiness */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-20 h-3 bg-primary rounded-t-sm mb-1"></div>
                <div className="w-16 bg-gradient-to-b from-primary/90 to-primary/70 p-6 flex items-center justify-center min-h-[200px] relative">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg">
                    <DollarSign className="w-7 h-7 text-primary" />
                  </div>
                </div>
                <div className="w-24 h-4 bg-primary/80 rounded-b-sm mb-4"></div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Financial Readiness</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Helping employees manage money with clarity, from saving strategies to long-term financial planning that supports life beyond work.
                </p>
              </div>

              {/* Pillar 4 - Career Growth */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-20 h-3 bg-primary rounded-t-sm mb-1"></div>
                <div className="w-16 bg-gradient-to-b from-primary/90 to-primary/70 p-6 flex items-center justify-center min-h-[200px] relative">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg">
                    <TrendingUp className="w-7 h-7 text-primary" />
                  </div>
                </div>
                <div className="w-24 h-4 bg-primary/80 rounded-b-sm mb-4"></div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Career Growth and Purpose</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Guidance for personal and professional development, helping employees align their work with their values and goals.
                </p>
              </div>

              {/* Pillar 5 - Community */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-20 h-3 bg-primary rounded-t-sm mb-1"></div>
                <div className="w-16 bg-gradient-to-b from-primary/90 to-primary/70 p-6 flex items-center justify-center min-h-[200px] relative">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg">
                    <Users className="w-7 h-7 text-primary" />
                  </div>
                </div>
                <div className="w-24 h-4 bg-primary/80 rounded-b-sm mb-4"></div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Community and Connection</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Building a culture of care through team activities, shared learning, and open dialogue, because we grow stronger together.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default EmployeeWellness;