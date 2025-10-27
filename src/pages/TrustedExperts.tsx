import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import altogetherLogo from "@/assets/altogether-logo.png";
import prisidioLogo from "@/assets/prisidio-logo.jpg";
import memorialTributeLogo from "@/assets/memorial-tribute-logo.jpg";
const experts = [{
  name: "Altogether",
  logo: altogetherLogo,
  tagline: "Your partner through the end-of-life experience",
  description: "Partner with a nationwide network of over 1,700 compassionate professionals dedicated to guiding families through life's most difficult moments. Together, we provide care, clarity, and comfort when it matters most.",
  buttonText: "Partner Now",
  url: "https://www.altogetherfuneral.com/",
  category: "Beliefs"
}, {
  name: "Prisidio",
  logo: prisidioLogo,
  tagline: "Your Digital Vault. For Life.®",
  description: "Sign up for this special ENDevo offer today and ensure your most important information is secure, accessible, and never lost with Prisidio. Your digital vault. For Life.™",
  buttonText: "Sign Up",
  url: "https://www.prisidio.com/endevo",
  category: "Financial & Digital"
}, {
  name: "Memorial Tribute Legacy",
  logo: memorialTributeLogo,
  tagline: "Let us carry this with you.",
  description: "After a loss, even small tasks can feel heavy. Simply share your photos, memories, and details, and we will create a beautiful digital tribute that celebrates their legacy and is ready to share. You focus on healing. We will handle the rest.",
  buttonText: "Learn More",
  url: "https://www.memorial-tribute-legacy.com/",
  category: "Beliefs & Physical"
}];
const TrustedExperts = () => {
  const navigate = useNavigate();
  return <div className="min-h-screen">
      <ResponsiveNavbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-brand-navy/10 to-background">
          <div className="container max-w-7xl mx-auto px-4">
            {/* Go Back Link - Top */}
            <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors mb-6 group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium">Go Back</span>
            </button>
            <div className="text-center max-w-3xl mx-auto">
              
              
            </div>
          </div>
        </section>

        {/* Experts List */}
        <section className="py-16 md:py-20">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="space-y-8">
              {experts.map((expert, index) => <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                      {/* Logo */}
                      <div className="flex-shrink-0">
                        <img src={expert.logo} alt={`${expert.name} logo`} className="w-24 h-24 md:w-32 md:h-32 object-contain rounded-[15px]" />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 space-y-4">
                        <div className="flex flex-wrap items-start justify-between gap-4">
                          <div>
                            <h3 className="text-xl md:text-2xl font-bold text-foreground">
                              {expert.name}
                            </h3>
                            <span className="inline-block mt-2 px-3 py-1 bg-brand-orange/10 text-brand-orange text-sm font-medium rounded-full">
                              {expert.category}
                            </span>
                          </div>
                        </div>
                        <p className="text-base md:text-lg font-bold text-brand-orange">
                          {expert.tagline}
                        </p>
                        <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
                          {expert.description}
                        </p>
                        
                        {/* CTA Button */}
                        <div className="pt-2">
                          <Button onClick={() => window.open(expert.url, '_blank')} className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold px-8">
                            {expert.buttonText}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </section>

        {/* Go Back Link - Bottom */}
        <section className="py-8 bg-gradient-to-t from-brand-navy/10 to-background">
          <div className="container max-w-6xl mx-auto px-4">
            <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium">Go Back</span>
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default TrustedExperts;