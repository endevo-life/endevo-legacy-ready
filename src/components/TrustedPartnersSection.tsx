import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Filter, X } from "lucide-react";
import altogetherLogo from "@/assets/altogether-logo.png";
import prisidioLogo from "@/assets/prisidio-logo.jpg";
import memorialTributeLogo from "@/assets/memorial-tribute-logo.jpg";
import beliefsIcon from "@/assets/beliefs-icon.png";
import legalIcon from "@/assets/legal-icon.png";
import financialIcon from "@/assets/financial-icon.png";
import physicalIcon from "@/assets/physical-icon.png";
import digitalIcon from "@/assets/digital-icon.png";
const partners = [{
  name: "Altogether",
  logo: altogetherLogo,
  tagline: "Your partner through the end-of-life experience",
  description: "Partner with a nationwide network of over 1,700 compassionate professionals dedicated to guiding families through life's most difficult moments. Together, we provide care, clarity, and comfort when it matters most.",
  buttonText: "Partner Now",
  url: "https://www.altogetherfuneral.com/",
  category: "physical" as const
}, {
  name: "Prisidio",
  logo: prisidioLogo,
  tagline: "Your Digital Vault. For Life.®",
  description: "Sign up for this special ENDevo offer today and ensure your most important information is secure, accessible, and never lost with Prisidio. Your digital vault. For Life.™",
  buttonText: "Sign Up",
  url: "https://www.prisidio.com/endevo",
  category: "digital" as const
}, {
  name: "Memorial Tribute Legacy",
  logo: memorialTributeLogo,
  tagline: "Let us carry this with you.",
  description: "After a loss, even small tasks can feel heavy. Simply share your photos, memories, and details, and we will create a beautiful digital tribute that celebrates their legacy and is ready to share. You focus on healing. We will handle the rest.",
  buttonText: "Learn More",
  url: "https://www.memorial-tribute-legacy.com/",
  category: "physical" as const
}];
const categoryInfo = [{
  name: "Beliefs",
  description: "The foundation of every decision, your values, wishes, and priorities.",
  category: "beliefs" as const,
  icon: beliefsIcon
}, {
  name: "Legal",
  description: "Protect your rights and ensure your documents reflect your intentions.",
  category: "legal" as const,
  icon: legalIcon
}, {
  name: "Financial",
  description: "Secure your assets and provide clarity for future generations.",
  category: "financial" as const,
  icon: financialIcon
}, {
  name: "Physical",
  description: "Address care, health, and personal needs with confidence.",
  category: "physical" as const,
  icon: physicalIcon
}, {
  name: "Digital",
  description: "Organize and safeguard your online presence and digital assets.",
  category: "digital" as const,
  icon: digitalIcon
}];
const TrustedPartnersSection = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const filteredPartners = partners.filter(partner => {
    // Filter by category
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(partner.category);

    // Filter by search query
    const matchesSearch = searchQuery === "" || partner.name.toLowerCase().includes(searchQuery.toLowerCase()) || partner.tagline.toLowerCase().includes(searchQuery.toLowerCase()) || partner.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]);
  };
  return <section className="py-16 md:py-20 bg-muted/30">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-foreground">
          Connecting You to Trusted Experts
        </h2>

        {/* Category Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {categoryInfo.map(category => <Card key={category.category} className="bg-card hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                {category.icon && (
                  <div className="flex justify-center mb-4">
                    <img src={category.icon} alt={category.name} className="w-16 h-16 object-contain" />
                  </div>
                )}
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {category.name}
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {category.description}
                </p>
              </CardContent>
            </Card>)}
        </div>
        
        {/* Subtitle */}
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">
          Connecting You to Trusted Experts
        </h3>
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="flex items-center gap-2">
            <Input placeholder="Search" className="bg-background rounded-full" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
          </div>
        </div>
        
        <div className="space-y-6">
          {filteredPartners.map((partner, index) => <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                  {/* Logo */}
                  <div className="flex-shrink-0">
                    <img src={partner.logo} alt={`${partner.name} logo`} className="w-24 h-24 md:w-32 md:h-32 object-contain rounded-[15px]" />
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
                      <Button onClick={() => window.open(partner.url, '_blank')} className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold px-8">
                        {partner.buttonText}
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default TrustedPartnersSection;