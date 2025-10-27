import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
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
  category: "Digital"
}, {
  name: "Memorial Tribute Legacy",
  logo: memorialTributeLogo,
  tagline: "Let us carry this with you.",
  description: "After a loss, even small tasks can feel heavy. Simply share your photos, memories, and details, and we will create a beautiful digital tribute that celebrates their legacy and is ready to share. You focus on healing. We will handle the rest.",
  buttonText: "Learn More",
  url: "https://www.memorial-tribute-legacy.com/",
  category: "Physical"
}];
const TrustedExperts = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  
  // All 5 categories
  const categories = ["Beliefs", "Financial", "Digital", "Legal", "Physical"];
  
  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };
  
  const filteredExperts = experts.filter(expert => {
    const matchesSearch = 
      expert.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      expert.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      expert.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      expert.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategories.length === 0 || 
      selectedCategories.includes(expert.category);
    
    return matchesSearch && matchesCategory;
  });
  return <div className="min-h-screen">
      <ResponsiveNavbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-brand-navy/10 to-background">
          <div className="container max-w-7xl mx-auto px-4 pt-8">
            {/* Go Back Link - Top */}
            <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors mb-6 group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium">Go Back</span>
            </button>
            <div className="max-w-2xl mx-auto pb-8">
              <div className="flex gap-3 items-center">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search by name, category, or description..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-11 h-12 text-base rounded-full"
                  />
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-12 w-12 rounded-full flex-shrink-0"
                      aria-label="Filters"
                    >
                      <SlidersHorizontal className="h-5 w-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56 bg-background z-50">
                    <DropdownMenuLabel>Filter by Category</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <div className="px-2 py-2 space-y-2">
                      {categories.map((category) => (
                        <div key={category} className="flex items-center space-x-2">
                          <Checkbox
                            id={category}
                            checked={selectedCategories.includes(category)}
                            onCheckedChange={() => toggleCategory(category)}
                          />
                          <label
                            htmlFor={category}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                          >
                            {category}
                          </label>
                        </div>
                      ))}
                    </div>
                    {selectedCategories.length > 0 && (
                      <>
                        <DropdownMenuSeparator />
                        <div className="px-2 py-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="w-full"
                            onClick={() => setSelectedCategories([])}
                          >
                            Clear Filters
                          </Button>
                        </div>
                      </>
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </section>

        {/* Experts List */}
        <section className="py-8 md:py-12">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="space-y-8">
              {filteredExperts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg">No trusted experts found matching your search.</p>
                </div>
              ) : (
                filteredExperts.map((expert, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
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
                  </Card>
                ))
              )}
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