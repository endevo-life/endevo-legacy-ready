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
        {/* Logo with ENDevo branding */}
        <div className="flex items-center space-x-4 animate-fade-in">
          <a href="/" className="hover-scale transition-transform duration-300 flex items-center space-x-3">
            <div className="text-xs text-muted-foreground font-medium">ENDevo</div>
            <img 
              src="/lovable-uploads/e4b1e3d7-c5f4-4cde-b4ab-ff21c5e4cd89.png" 
              alt="Death and Dying in the Digital Age" 
              className="h-10 w-auto"
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