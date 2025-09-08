import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const navItems = [
    { 
      name: "Solutions", 
      href: "#solutions",
      items: [
        { name: "Loss Support", href: "#loss-support" },
        { name: "Legacy Planning", href: "#legacy-planning" },
        { name: "EAP Replacement", href: "#eap-replacement" },
        { name: "Approach", href: "#approach" },
      ]
    },
    { 
      name: "Who We Serve", 
      href: "#who-we-serve",
      items: [
        { name: "Employers", href: "#employers" },
        { name: "Consultants", href: "#consultants" },
        { name: "Members", href: "#members" },
        { name: "Providers", href: "#providers" },
        { name: "Financial Institutions", href: "#financial-institutions" },
      ]
    },
    { 
      name: "Resources", 
      href: "#resources",
      items: [
        { name: "Knowledge Base", href: "#knowledge-base" },
        { name: "Blogs & Podcasts", href: "#blogs-podcasts" },
        { name: "Guides", href: "#guides" },
        { name: "Events", href: "#events" },
        { name: "Customer Stories", href: "#customer-stories" },
      ]
    },
    { name: "Plan", href: "#plan" },
    { 
      name: "Company", 
      href: "#company",
      items: [
        { name: "About Us", href: "#about-us" },
        { name: "Team", href: "#team" },
        { name: "Careers", href: "#careers" },
        { name: "News", href: "#news" },
        { name: "Alliance", href: "#alliance" },
      ]
    },
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
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navItems.map((item) => (
              <NavigationMenuItem key={item.name}>
                {item.items ? (
                  <>
                    <NavigationMenuTrigger className="text-sm font-medium text-foreground hover:text-brand-orange transition-colors">
                      {item.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {item.items.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{subItem.name}</div>
                          </a>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="text-sm font-medium text-foreground hover:text-brand-orange transition-colors px-4 py-2 block"
                  >
                    {item.name}
                  </a>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* CTA Button */}
        <Button variant="cta" size="sm">
          Book a Demo
        </Button>
      </div>
    </header>
  );
};

export default Header;