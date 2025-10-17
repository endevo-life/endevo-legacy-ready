import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import altogetherLogo from "@/assets/altogether-logo.png";
import prisidioLogo from "@/assets/prisidio-logo.jpg";
import memorialTributeLogo from "@/assets/memorial-tribute-logo.jpg";

const partners = [
  {
    name: "Altogether",
    logo: altogetherLogo,
    tagline: "Your partner through the end-of-life experience",
    description: "Partner with a nationwide network of over 1,700 compassionate professionals dedicated to guiding families through life's most difficult moments. Together, we provide care, clarity, and comfort when it matters most.",
    buttonText: "Partner Now",
    url: "https://www.altogetherfuneral.com/",
  },
  {
    name: "Prisidio",
    logo: prisidioLogo,
    tagline: "Your Digital Vault. For Life.®",
    description: "Sign up for this special ENDevo offer today and ensure your most important information is secure, accessible, and never lost with Prisidio. Your digital vault. For Life.™",
    buttonText: "Sign Up",
    url: "https://www.prisidio.com/endevo",
  },
  {
    name: "Memorial Tribute Legacy",
    logo: memorialTributeLogo,
    tagline: "Let us carry this with you.",
    description: "After a loss, even small tasks can feel heavy. Simply share your photos, memories, and details, and we will create a beautiful digital tribute that celebrates their legacy and is ready to share. You focus on healing. We will handle the rest.",
    buttonText: "Learn More",
    url: "https://www.memorial-tribute-legacy.com/",
  },
];

const TrustedPartnersSection = () => {
  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Connecting You to Trusted Experts
        </h2>
        
        <div className="space-y-6">
          {partners.map((partner, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                  {/* Logo */}
                  <div className="flex-shrink-0">
                    <img 
                      src={partner.logo} 
                      alt={`${partner.name} logo`}
                      className="w-24 h-24 md:w-32 md:h-32 object-contain rounded-[15px]"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground">
                      {partner.name}
                    </h3>
                    <p className="text-base md:text-lg font-bold text-brand-orange">
                      {partner.tagline}
                    </p>
                    <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
                      {partner.description}
                    </p>
                    
                    {/* CTA Button */}
                    <div className="pt-2">
                      <Button 
                        onClick={() => window.open(partner.url, '_blank')}
                        className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold px-8"
                      >
                        {partner.buttonText}
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedPartnersSection;
