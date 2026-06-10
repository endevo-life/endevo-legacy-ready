import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Filter, X, ArrowRight, ChevronDown } from "lucide-react";
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
const partners = [
  {
    name: "Nia Emberly",
    logo: "https://assets.cdn.filesafe.space/f5ehsbHfdFg2UsHEIb49/media/69975744f83453e670329c0b.png",
    tagline: "Carry their love with you—for evermore",
    description:
      "A memorial bracelet handcrafted from solidified cremains. A permanent heirloom made through our patented ash-solidification process — so you can feel close again, every day.",
    buttonText: "Learn More",
    url: "https://niaemberly.ca/",
    category: "physical" as const,
  },
  {
    name: "Trust & Will",
    logo: "https://assets.cdn.filesafe.space/f5ehsbHfdFg2UsHEIb49/media/699757441817156cc8a451cb.png",
    tagline: "Make your estate plan and make it count.",
    description:
      "Create your will or trust with the platform built to evolve, protecting your loved ones today, tomorrow, and beyond.",
    buttonText: "Get Started",
    url: "https://trustandwill.com/?g_acctid=740-480-2447&g_adgroupid=193488517368&g_adid=781597115499&g_adtype=search&g_campaign=Trust+%26+Will+%7C+Branded+%7C+BOFU_m&g_campaignid=23212020865&g_keyword=trust%20and%20will&g_keywordid=kwd-25464110&g_network=g&utm_adgroup={adgroup}&utm_medium=cpc&utm_source=google&utm_term=trust%20and%20will&utm_campaign=trustandwill_bofu_m",
    category: "legal" as const,
  },
  {
    name: "Childfree Trust",
    logo: "https://assets.cdn.filesafe.space/f5ehsbHfdFg2UsHEIb49/media/6a29b9eb2719d8cb18adab39.png",
    tagline:
      "Childfree Trust is the first nationwide fiduciary representation and estate planning service for Childfree people.",
    description:
      "With Childfree Trust, members create their estate planning documents, nominate Childfree Trust as the medical and financial POA, executor and trustee, outline their care plans, and have a 24/7 emergency response team to ensure their wishes are followed when needed.",
    buttonText: "Learn More",
    url: "https://childfreetrust.com/",
    category: "legal" as const,
  },
  {
    name: "Prisidio",
    logo: "https://assets.cdn.filesafe.space/f5ehsbHfdFg2UsHEIb49/media/699757448d5b5af29c80f299.jpg",
    tagline: "Your Digital Vault. For Life.®",
    description:
      "Sign up for this special ENDevo offer today and ensure your most important information is secure, accessible, and never lost with Prisidio. Your digital vault. For Life.™",
    buttonText: "Sign Up",
    url: "https://www.prisidio.com/endevo",
    category: "digital" as const,
  },
];
const categoryInfo = [
  {
    name: "Legal",
    description:
      "Protect your rights and ensure your documents reflect your intentions.",
    category: "legal" as const,
    icon: legalIcon,
  },
  {
    name: "Financial",
    description:
      "Secure your assets and provide clarity for future generations.",
    category: "financial" as const,
    icon: financialIcon,
  },
  {
    name: "Physical",
    description: "Address care, health, and personal needs with confidence.",
    category: "physical" as const,
    icon: physicalIcon,
  },
  {
    name: "Digital",
    description:
      "Organize and safeguard your online presence and digital assets.",
    category: "digital" as const,
    icon: digitalIcon,
  },
  {
    name: "Beliefs",
    description:
      "The foundation of every decision, your values, wishes, and priorities.",
    category: "beliefs" as const,
    icon: beliefsIcon,
  },
];
const TrustedPartnersSection = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const filteredPartners = partners.filter((partner) => {
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(partner.category);
    const matchesSearch =
      searchQuery === "" ||
      partner.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      partner.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      partner.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  }).sort((a, b) => a.name.localeCompare(b.name));
  const selectCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };
  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Connecting You to Trusted Experts
        </h2>

        {/* Desktop: Browse by category label + category cards */}
        <p className="hidden md:block text-center text-lg text-foreground/80 mb-8">
          Browse by category
        </p>

        <div className="hidden md:grid grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {categoryInfo.map((category, index) => (
            <button
              key={index}
              onClick={() => selectCategory(category.category)}
              className={`text-left transition-all hover:shadow-lg ${
                selectedCategories.includes(category.category)
                  ? "ring-2 ring-brand-orange"
                  : ""
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
                    {category.name}
                  </h3>
                  <p className="text-sm text-foreground/70">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            </button>
          ))}
        </div>

        {/* Desktop: View All button */}
        <div className="hidden md:flex justify-center mb-12">
          <Link to="/trusted-experts">
            <Button
              className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold px-6 py-1.5 text-base group rounded-full"
              style={{ fontFamily: "'Open Sans', 'Helvetica', sans-serif" }}
            >
              View All Trusted Experts
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Mobile: Filter by category button + dropdown */}
        <div className="md:hidden mb-6">
          <button
            onClick={() => setMobileFilterOpen((v) => !v)}
            className="w-full flex items-center justify-between px-5 py-3 rounded-full border border-border bg-white shadow-sm text-foreground font-medium"
          >
            <span className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-brand-orange" />
              Filter by Category
              {selectedCategories.length > 0 && (
                <span className="ml-1 bg-brand-orange text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {selectedCategories.length}
                </span>
              )}
            </span>
            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileFilterOpen ? "rotate-180" : ""}`} />
          </button>

          {mobileFilterOpen && (
            <div className="mt-2 rounded-2xl border border-border bg-white shadow-md p-4 grid grid-cols-2 gap-2">
              {categoryInfo.map((category, index) => (
                <button
                  key={index}
                  onClick={() => selectCategory(category.category)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-full border text-sm font-medium transition-all ${
                    selectedCategories.includes(category.category)
                      ? "border-brand-orange bg-brand-orange/10 text-brand-orange"
                      : "border-border text-foreground"
                  }`}
                >
                  <img src={category.icon} alt="" className="w-5 h-5 object-contain" />
                  {category.name}
                </button>
              ))}
              {selectedCategories.length > 0 && (
                <button
                  onClick={() => setSelectedCategories([])}
                  className="col-span-2 text-xs text-muted-foreground underline mt-1 text-center"
                >
                  Clear filters
                </button>
              )}
            </div>
          )}
        </div>

        {/* Mobile: always shows first 3 (or filtered), hidden on desktop */}
        <div className="md:hidden space-y-6">
          {selectedCategories.length > 0 && filteredPartners.length === 0 && (
            <div className="text-center py-12 px-6">
              <p className="text-xl font-semibold text-foreground mb-2">Coming Soon</p>
              <p className="text-foreground/60">We're adding trusted partners in this category. Check back soon!</p>
            </div>
          )}
          {selectedCategories.length > 0 &&
            filteredPartners.map((partner, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start">
                  {/* Logo */}
                  <div
                    className="flex-shrink-0 cursor-pointer"
                    onClick={() => window.open(partner.url, "_blank")}
                  >
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="w-24 h-24 md:w-32 md:h-32 object-contain rounded-[15px]"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4 text-center md:text-left">
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
                    <div className="pt-2 flex justify-center md:justify-start">
                      <Button
                        onClick={() => window.open(partner.url, "_blank")}
                        className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold px-6 py-1.5 text-base rounded-full"
                        style={{
                          fontFamily: "'Open Sans', 'Helvetica', sans-serif",
                        }}
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

        {/* Desktop: only shows cards when a category is selected */}
        <div className="hidden md:block space-y-6">
          {selectedCategories.length > 0 && filteredPartners.length === 0 && (
            <div className="text-center py-12 px-6">
              <p className="text-xl font-semibold text-foreground mb-2">Coming Soon</p>
              <p className="text-foreground/60">We're adding trusted partners in this category. Check back soon!</p>
            </div>
          )}
          {selectedCategories.length > 0 &&
            filteredPartners.map((partner, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start">
                  <div
                    className="flex-shrink-0 cursor-pointer"
                    onClick={() => window.open(partner.url, "_blank")}
                  >
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="w-24 h-24 md:w-32 md:h-32 object-contain rounded-[15px]"
                    />
                  </div>
                  <div className="flex-1 space-y-4 text-center md:text-left">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground">{partner.name}</h3>
                    <p className="text-base md:text-lg font-bold text-brand-orange">{partner.tagline}</p>
                    <p className="text-sm md:text-base text-foreground/80 leading-relaxed">{partner.description}</p>
                    <div className="pt-2 flex justify-center md:justify-start">
                      <Button
                        onClick={() => window.open(partner.url, "_blank")}
                        className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold px-6 py-1.5 text-base rounded-full"
                        style={{ fontFamily: "'Open Sans', 'Helvetica', sans-serif" }}
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

        {/* Mobile: View All button below cards */}
        <div className="md:hidden flex justify-center mt-8">
          <Link to="/trusted-experts">
            <Button
              className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold px-6 py-1.5 text-base group rounded-full"
              style={{ fontFamily: "'Open Sans', 'Helvetica', sans-serif" }}
            >
              View All Trusted Experts
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default TrustedPartnersSection;
