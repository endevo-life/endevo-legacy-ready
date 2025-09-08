import { Button } from "@/components/ui/button";

const LearnListenHeader = () => {
  const navItems = [
    { name: "Podcast", href: "#podcast" },
    { name: "Video", href: "#video" },
    { name: "Blog", href: "#blog" },
    { name: "Resources", href: "#resources" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b animate-fade-in">
      <div className="container max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 animate-fade-in">
          <a href="/" className="hover-scale transition-transform duration-300">
            <img 
              src="/lovable-uploads/7cfe182f-92e2-4cba-83af-773a3b175ea6.png" 
              alt="ENDevo Logo" 
              className="h-8 w-auto"
            />
          </a>
        </div>

        {/* Navigation */}
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

        {/* Subscribe Button */}
        <Button variant="cta" size="sm" className="animate-fade-in hover-scale">
          Subscribe Now
        </Button>
      </div>
    </header>
  );
};

export default LearnListenHeader;