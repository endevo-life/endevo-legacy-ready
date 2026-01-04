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
    { name: "About Us", href: "/company" },
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
              <Link to="/solution">
                <NavigationMenuTrigger className="text-sm font-medium text-foreground hover:text-brand-orange transition-all duration-300">
                  Solutions
                </NavigationMenuTrigger>
              </Link>
              <NavigationMenuContent>
                <ul className="grid gap-2 p-4 w-[280px]">
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="/solution#empowering"
                        className={cn(
                          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        )}
                      >
                        <div className="text-sm font-medium leading-none">Empowering You to Take Control</div>
                        <p className="line-clamp-1 text-xs leading-snug text-muted-foreground">
                          Resources to guide every step
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
                        <div className="text-sm font-medium leading-none">Our Comprehensive Framework</div>
                        <p className="line-clamp-1 text-xs leading-snug text-muted-foreground">
                          Four key areas of readiness
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="/solution#service-providers"
                        className={cn(
                          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        )}
                      >
                        <div className="text-sm font-medium leading-none">Connect with Service Providers</div>
                        <p className="line-clamp-1 text-xs leading-snug text-muted-foreground">
                          Trusted experts at your fingertips
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
                        <p className="line-clamp-1 text-xs leading-snug text-muted-foreground">
                          Key service offerings
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="/solution#why-endevo"
                        className={cn(
                          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        )}
                      >
                        <div className="text-sm font-medium leading-none">Why ENDevo</div>
                        <p className="line-clamp-1 text-xs leading-snug text-muted-foreground">
                          Where AI meets empathy
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-sm font-medium text-foreground hover:text-brand-orange transition-all duration-300">
                Who We Serve
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-2 p-4 w-[280px]">
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="/wws-for-employers"
                        className={cn(
                          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        )}
                      >
                        <div className="text-sm font-medium leading-none">For Employers</div>
                        <p className="line-clamp-1 text-xs leading-snug text-muted-foreground">
                          Support employee well-being
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="/wws-service-providers"
                        className={cn(
                          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        )}
                      >
                        <div className="text-sm font-medium leading-none">For Service Providers</div>
                        <p className="line-clamp-1 text-xs leading-snug text-muted-foreground">
                          Connect with clients
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="/wws-individuals"
                        className={cn(
                          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        )}
                      >
                        <div className="text-sm font-medium leading-none">For Individuals</div>
                        <p className="line-clamp-1 text-xs leading-snug text-muted-foreground">
                          Personal legacy planning
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-sm font-medium text-foreground hover:text-brand-orange transition-all duration-300">
                Resources
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-2 p-4 w-[280px]">
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="/resources#peace-of-mind"
                        className={cn(
                          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        )}
                      >
                        <div className="text-sm font-medium leading-none">Peace of Mind</div>
                        <p className="line-clamp-1 text-xs leading-snug text-muted-foreground">
                          Guidance for life's what-ifs
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="/resources#mobile-app"
                        className={cn(
                          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        )}
                      >
                        <div className="text-sm font-medium leading-none">Mobile App</div>
                        <p className="line-clamp-1 text-xs leading-snug text-muted-foreground">
                          Access care anywhere
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-sm font-medium text-foreground hover:text-brand-orange transition-all duration-300">
                Plan
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-2 p-4 w-[280px]">
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="/plan#path-options"
                        className={cn(
                          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        )}
                      >
                        <div className="text-sm font-medium leading-none">Path Options</div>
                        <p className="line-clamp-1 text-xs leading-snug text-muted-foreground">
                          Enterprise pilot or assessment
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="/plan#avoid-chaos"
                        className={cn(
                          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        )}
                      >
                        <div className="text-sm font-medium leading-none">Avoid the Mess</div>
                        <p className="line-clamp-1 text-xs leading-snug text-muted-foreground">
                          Why planning matters now
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="/plan#smart-framework"
                        className={cn(
                          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        )}
                      >
                        <div className="text-sm font-medium leading-none">Smart Framework</div>
                        <p className="line-clamp-1 text-xs leading-snug text-muted-foreground">
                          Our approach to readiness
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="/plan#legacy-readiness"
                        className={cn(
                          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        )}
                      >
                        <div className="text-sm font-medium leading-none">Legacy Readiness</div>
                        <p className="line-clamp-1 text-xs leading-snug text-muted-foreground">
                          Simple 3-step process
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/company">
                <NavigationMenuTrigger className="text-sm font-medium text-foreground hover:text-brand-orange transition-all duration-300">
                  About Us
                </NavigationMenuTrigger>
              </Link>
              <NavigationMenuContent>
                <ul className="grid gap-2 p-4 w-[280px]">
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="/company#about"
                        className={cn(
                          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        )}
                      >
                        <div className="text-sm font-medium leading-none">About ENDevo</div>
                        <p className="line-clamp-1 text-xs leading-snug text-muted-foreground">
                          Our mission and story
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="/company#niki-weiss"
                        className={cn(
                          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        )}
                      >
                        <div className="text-sm font-medium leading-none">About Founder</div>
                        <p className="line-clamp-1 text-xs leading-snug text-muted-foreground">
                          Meet Niki Weiss
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="/company#values"
                        className={cn(
                          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        )}
                      >
                        <div className="text-sm font-medium leading-none">Our Core Values</div>
                        <p className="line-clamp-1 text-xs leading-snug text-muted-foreground">
                          Our C.L.A.R.I.T.Y. framework
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="/company#team"
                        className={cn(
                          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        )}
                      >
                        <div className="text-sm font-medium leading-none">Meet Our Team</div>
                        <p className="line-clamp-1 text-xs leading-snug text-muted-foreground">
                          The people behind ENDevo
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="/company#partners"
                        className={cn(
                          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        )}
                      >
                        <div className="text-sm font-medium leading-none">Our Partners</div>
                        <p className="line-clamp-1 text-xs leading-snug text-muted-foreground">
                          Building resilience together
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* CTA Button */}
        <Button 
          variant="cta" 
          className="animate-fade-in hover-scale px-6 py-1.5 text-base font-semibold"
          style={{ fontFamily: "'Open Sans', 'Helvetica', sans-serif" }}
        >
          Book A Call
        </Button>
      </div>
    </header>
  );
};

export default Header;