import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  const navItems = [
    { name: "Solutions", href: "/solution" },
    { name: "Who We Serve", href: "/who-we-serve" },
    { name: "Resources", href: "/resources" },
    { name: "Plan", href: "/plan" },
    { name: "Company", href: "/company" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b animate-fade-in">
      <div className="container max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 animate-fade-in">
          <Link to="/" className="hover-scale transition-transform duration-300">
            <img 
              src="/lovable-uploads/7cfe182f-92e2-4cba-83af-773a3b175ea6.png" 
              alt="ENDevo Logo" 
              className="h-8 w-auto"
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="story-link text-sm font-medium text-foreground hover:text-brand-orange transition-all duration-300 px-4 py-2 hover-scale"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <Button variant="cta" size="sm" className="animate-fade-in hover-scale">
          Book a Demo
        </Button>
      </div>
    </header>
  );
};

export default Header;