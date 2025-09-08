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
        {/* Podcast Logo */}
        <div className="flex items-center space-x-4 animate-fade-in">
          <img 
            src="/lovable-uploads/e4b1e3d7-c5f4-4cde-b4ab-ff21c5e4cd89.png" 
            alt="Death and Dying in the Digital Age" 
            className="h-10 w-auto"
          />
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

        {/* ENDevo link + Subscribe */}
        <div className="flex items-center gap-4">
          <a href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            by ENDevo
          </a>
          <Button variant="cta" size="sm" className="animate-fade-in hover-scale">
            Subscribe Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default LearnListenHeader;