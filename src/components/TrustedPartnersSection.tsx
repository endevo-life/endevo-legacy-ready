import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Filter, X, ArrowRight } from "lucide-react";
import altogetherLogo from "@/assets/altogether-logo.png";
import prisidioLogo from "@/assets/prisidio-logo.jpg";
import memorialTributeLogo from "@/assets/memorial-tribute-logo.jpg";
import beliefsIcon from "@/assets/beliefs-icon-new.png";
import legalIcon from "@/assets/legal-icon-new.png";
import financialIcon from "@/assets/financial-icon-new.png";
import physicalIcon from "@/assets/physical-icon-new.png";
import digitalIcon from "@/assets/digital-icon-new.png";
import categoryBeliefsIcon from "@/assets/category-beliefs-icon.png";
import categoryLegalIcon from "@/assets/category-legal-icon.png";
import categoryFinancialIcon from "@/assets/category-financial-icon.png";
import categoryPhysicalIcon from "@/assets/category-physical-icon.png";
import categoryDigitalIcon from "@/assets/category-digital-icon.png";
const partners = [{
  name: "Altogether",
  logo: altogetherLogo,
  tagline: "Your partner through the end-of-life experience",
  description: "Partner with a nationwide network of over 1,700 compassionate professionals dedicated to guiding families through life's most difficult moments. Together, we provide care, clarity, and comfort when it matters most.",
  buttonText: "Partner Now",
  url: "https://www.altogetherfuneral.com/",
  category: "beliefs" as const
}, {
  name: "Prisidio",
  logo: prisidioLogo,
  tagline: "Your Digital Vault. For Life.®",
  description: "Sign up for this special ENDevo offer today and ensure your most important information is secure, accessible, and never lost with Prisidio. Your digital vault. For Life.™",
  buttonText: "Sign Up",
  url: "https://www.prisidio.com/endevo",
  category: "financial" as const
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
  category: "beliefs" as const
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
    // Filter by category - only show if category is selected
    const matchesCategory = selectedCategories.length > 0 && selectedCategories.includes(partner.category);

    // Filter by search query
    const matchesSearch = searchQuery === "" || partner.name.toLowerCase().includes(searchQuery.toLowerCase()) || partner.tagline.toLowerCase().includes(searchQuery.toLowerCase()) || partner.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]);
  };
  return <section className="py-16 md:py-20 bg-muted/30">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Connecting You to Trusted Experts
        </h2>

        {/* Category Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {categoryInfo.map((category, index) => (
            <button
              key={index}
              onClick={() => toggleCategory(category.category)}
              className={`text-left transition-all hover:shadow-lg ${
                selectedCategories.includes(category.category) 
                  ? 'ring-2 ring-brand-orange' 
                  : ''
              }`}
            >
              <Card className="p-6 text-center h-full rounded-2xl">
                <CardContent className="p-0 space-y-3">
                  <img 
                    src={category.icon} 
                    alt={`${category.name} icon`} 
                    className="w-12 h-12 mx-auto object-contain"
                  />
                  <h3 className="font-bold text-lg text-foreground">
                    {category.name === "Beliefs" ? "Your Beliefs" : category.name}
                  </h3>
                  <p className="text-sm text-foreground/70">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            </button>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mb-12">
          <Link to="/trusted-experts">
            <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold px-8 py-6 text-lg group">
              View All Trusted Experts
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
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