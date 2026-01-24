import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const LearnListenHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navItems = [
    { name: "Podcast", href: "/podcast" },
    { name: "Video", href: "/video" },
    { name: "Blog", href: "/blog" },
    { name: "Resources", href: "/resources" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white border-b animate-fade-in">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center animate-fade-in">
            <img 
              src="/lovable-uploads/743e38e0-5495-4af4-b0c0-094c558aed1e.png" 
              alt="Death and Dying in the Digital Age" 
              className="h-16 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="story-link text-sm font-medium text-foreground hover:text-brand-orange transition-all duration-300 px-4 py-2 hover-scale"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop ENDevo + Subscribe */}
          <div className="hidden md:flex items-center gap-6">
            <a href="/" className="text-sm font-medium text-foreground hover:text-brand-orange transition-colors">
              ENDevo
            </a>
            <Button variant="cta" size="sm" className="animate-fade-in hover-scale">
              Subscribe Now
            </Button>
          </div>

          {/* Mobile hamburger menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-brand-orange hover:bg-accent transition-colors duration-300" 
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMobileMenuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-foreground hover:text-brand-orange hover:bg-accent/50 transition-colors duration-300 font-medium py-3 px-2 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 border-t border-border space-y-2">
              <a 
                href="/" 
                className="block text-foreground hover:text-brand-orange hover:bg-accent/50 transition-colors duration-300 font-medium py-3 px-2 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ENDevo
              </a>
              <Button 
                variant="cta" 
                size="sm" 
                className="w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Subscribe Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default LearnListenHeader;