import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import employeeWellnessHero from "@/assets/employee-wellness-hero.png";
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
              {/* Pillar 1 */}
              <div className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow">
                <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-primary/10">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Physical Health</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Encouraging movement, nutrition, and rest through fitness challenges, meal planning, and health education.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow">
                <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-primary/10">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Emotional Well-Being</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Offering mindfulness sessions, counseling resources, and stress management tools to foster inner calm and balance.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow">
                <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-primary/10">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Financial Readiness</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Helping employees manage money with clarity, from saving strategies to long-term financial planning that supports life beyond work.
                </p>
              </div>

              {/* Pillar 4 */}
              <div className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow">
                <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-primary/10">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Career Growth and Purpose</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Guidance for personal and professional development, helping employees align their work with their values and goals.
                </p>
              </div>

              {/* Pillar 5 */}
              <div className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow">
                <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-primary/10">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
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