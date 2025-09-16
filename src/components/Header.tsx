import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

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
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-sm font-medium text-foreground hover:text-brand-orange transition-all duration-300">
                Solutions
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 w-[400px] lg:w-[500px]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/solution"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Enterprise Solutions
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Comprehensive legacy readiness for organizations
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="/solution#framework"
                        className={cn(
                          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        )}
                      >
                        <div className="text-sm font-medium leading-none">Our Holistic Framework</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Four key areas of readiness
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="/solution#core-solutions"
                        className={cn(
                          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        )}
                      >
                        <div className="text-sm font-medium leading-none">Core Solutions</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Key service offerings
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="/solution#process"
                        className={cn(
                          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        )}
                      >
                        <div className="text-sm font-medium leading-none">Process</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Simple 3-step approach
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="/solution#for-companies"
                        className={cn(
                          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        )}
                      >
                        <div className="text-sm font-medium leading-none">For Companies</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Enterprise benefits
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="/solution#for-employees"
                        className={cn(
                          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        )}
                      >
                        <div className="text-sm font-medium leading-none">For Employees</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Personal benefits
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link
                to="/who-we-serve"
                className={cn(navigationMenuTriggerStyle(), "text-sm font-medium text-foreground hover:text-brand-orange transition-all duration-300")}
              >
                Who We Serve
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link
                to="/resources"
                className={cn(navigationMenuTriggerStyle(), "text-sm font-medium text-foreground hover:text-brand-orange transition-all duration-300")}
              >
                Resources
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link
                to="/plan"
                className={cn(navigationMenuTriggerStyle(), "text-sm font-medium text-foreground hover:text-brand-orange transition-all duration-300")}
              >
                Plan
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link
                to="/company"
                className={cn(navigationMenuTriggerStyle(), "text-sm font-medium text-foreground hover:text-brand-orange transition-all duration-300")}
              >
                Company
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* CTA Button */}
        <Button variant="cta" size="sm" className="animate-fade-in hover-scale">
          Book a Demo
        </Button>
      </div>
    </header>
  );
};

export default Header;