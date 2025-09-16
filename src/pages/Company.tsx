import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import companyHeroBg from "@/assets/company-hero-bg.jpg";
import aboutEndevo from "@/assets/about-endevo.jpg";
import clarityGuidance from "@/assets/clarity-guidance.jpg";
import compassionTrust from "@/assets/compassion-trust.jpg";
import resilienceContinuity from "@/assets/resilience-continuity.jpg";

const Company = () => {
  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { elementRef: aboutRef, isVisible: aboutVisible } = useScrollAnimation();
  const { elementRef: valuesRef, isVisible: valuesVisible } = useScrollAnimation();
  const { elementRef: teamRef, isVisible: teamVisible } = useScrollAnimation();

  const [hoveredTeamMember, setHoveredTeamMember] = useState<number | null>(null);

  const teamMembers = [
    {
      image: "/lovable-uploads/niki-headshot.jpg",
      name: "Dr. Sarah Johnson",
      title: "CEO & Founder"
    },
    {
      image: "/lovable-uploads/professional-headshot.jpg",
      name: "Michael Chen",
      title: "CTO"
    },
    {
      image: "/lovable-uploads/niki-lifestyle.jpg",
      name: "Emily Rodriguez",
      title: "Head of Product"
    },
    {
      image: "/lovable-uploads/niki-headshot.jpg",
      name: "David Thompson",
      title: "VP of Strategy"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${companyHeroBg})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div 
          ref={heroRef as any}
          className={`relative z-10 text-center text-white px-4 transition-all duration-1000 ${
            heroVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl mx-auto">
            Our Mission: Building Resilient Legacies
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            We believe preparedness is a gift—for families, employees, companies, and communities.
          </p>
        </div>
      </section>

      {/* About ENDevo Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container max-w-6xl mx-auto px-4">
          <div 
            ref={aboutRef as any}
            className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
              aboutVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                About ENDevo
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Founded to bring clarity and compassion to one of life's hardest conversations, ENDevo blends AI intelligence with human guidance to make legacy readiness and digital resilience accessible, scalable, and impactful.
              </p>
            </div>
            <div className="relative">
              <img 
                src={aboutEndevo} 
                alt="About ENDevo - Team collaboration" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section id="values" className="py-20 bg-muted/30">
        <div className="container max-w-6xl mx-auto px-4">
          <div 
            ref={valuesRef as any}
            className={`transition-all duration-1000 ${
              valuesVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Our Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Clarity & Guidance */}
              <Card className="text-center bg-card hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto mb-4">
                    <img 
                      src={clarityGuidance} 
                      alt="Clarity & Guidance" 
                      className="w-20 h-20 mx-auto rounded-lg"
                    />
                  </div>
                  <CardTitle className="text-xl font-bold">
                    Clarity & Guidance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Simplify the complex
                  </p>
                </CardContent>
              </Card>

              {/* Compassion & Trust */}
              <Card className="text-center bg-card hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto mb-4">
                    <img 
                      src={compassionTrust} 
                      alt="Compassion & Trust" 
                      className="w-20 h-20 mx-auto rounded-lg"
                    />
                  </div>
                  <CardTitle className="text-xl font-bold">
                    Compassion & Trust
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Respect every journey
                  </p>
                </CardContent>
              </Card>

              {/* Resilience & Continuity */}
              <Card className="text-center bg-card hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto mb-4">
                    <img 
                      src={resilienceContinuity} 
                      alt="Resilience & Continuity" 
                      className="w-20 h-20 mx-auto rounded-lg"
                    />
                  </div>
                  <CardTitle className="text-xl font-bold">
                    Resilience & Continuity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Keep businesses and lives flowing
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section id="team" className="py-20 bg-primary/10 rounded-t-[50px]">
        <div className="container max-w-6xl mx-auto px-4">
          <div 
            ref={teamRef as any}
            className={`transition-all duration-1000 ${
              teamVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Meet Our Team
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div 
                  key={index}
                  className="relative group cursor-pointer"
                  onMouseEnter={() => setHoveredTeamMember(index)}
                  onMouseLeave={() => setHoveredTeamMember(null)}
                >
                  <div className="relative overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {hoveredTeamMember === index && (
                      <div className="absolute inset-0 bg-black/80 flex items-center justify-center transition-opacity duration-300">
                        <div className="text-center text-white">
                          <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                          <p className="text-sm">{member.title}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Company;