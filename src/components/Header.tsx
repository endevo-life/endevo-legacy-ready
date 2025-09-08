import { Button } from "@/components/ui/button";

const Header = () => {
  const navItems = [
    { name: "Solutions", href: "#solutions" },
    { name: "Who We Serve", href: "#who-we-serve" },
    { name: "Resources", href: "#resources" },
    { name: "Plan", href: "#plan" },
    { name: "Company", href: "#company" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/7cfe182f-92e2-4cba-83af-773a3b175ea6.png" 
            alt="ENDevo Logo" 
            className="h-8 w-auto"
          />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-foreground hover:text-brand-orange transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <Button variant="cta" size="sm">
          Book a Demo
        </Button>
      </div>
    </header>
  );
};

export default Header;