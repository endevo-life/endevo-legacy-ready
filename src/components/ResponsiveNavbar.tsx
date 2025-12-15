import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";

const ResponsiveNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null);

  const handleMainMenuClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMobileSubmenu = (menuName: string) => {
    setExpandedMobileMenu(expandedMobileMenu === menuName ? null : menuName);
  };

  const menuItems = [
    {
      name: "Solutions",
      href: "/solution",
      submenu: [
        { name: "Empowering you to take control", href: "/solution#process" },
        { name: "Our comprehensive framework", href: "/solution#framework" },
        { name: "Get connected with service providers", href: "/solution#for-employees" },
        { name: "Core solutions", href: "/solution#core-solutions" },
        { name: "Our edge", href: "/solution#for-companies" },
      ]
    },
    {
      name: "Who We Serve",
      href: "#",
      submenu: [
        { name: "For Employers", href: "/wws-for-employers" },
        { name: "For Service Providers", href: "/wws-service-providers" },
        { name: "For Individuals", href: "/wws-individuals" },
      ]
    },
    {
      name: "Resources",
      href: "/resources",
      submenu: [
        { name: "Peace of Mind", href: "/resources#peace-of-mind" },
        { name: "Mobile App", href: "/resources#mobile-app" },
        { name: "Client Testimonials", href: "/#testimonials" },
      ]
    },
    // {
    //   name: "Plan",
    //   href: "/plan",
    //   submenu: []
    // },
    {
      name: "Marketplace",
      href: "/marketplace",
      submenu: []
    },
    {
      name: "About Us",
      href: "/company",
      submenu: [
        { name: "About ENDevo", href: "/company#about" },
        { name: "Niki Weiss", href: "/company#niki" },
        { name: "Our Core Values", href: "/company#values" },
        { name: "Meet Our Team", href: "/company#team" },
        { name: "Our Partners", href: "/company#partners" },
      ]
    },
    {
      name: "Contact",
      href: "/contact",
      submenu: []
    }
  ];

  return (
    <nav className="bg-white shadow-md border-b fixed top-0 left-0 right-0 z-50">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/7cfe182f-92e2-4cba-83af-773a3b175ea6.png" 
                alt="ENDevo Logo" 
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-4">
            {menuItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.href}
                  onClick={handleMainMenuClick}
                  className="flex items-center text-foreground hover:text-primary transition-colors duration-300 py-2 px-3 rounded-md hover:bg-accent/50 text-sm whitespace-nowrap"
                >
                  {item.name}
                  {item.submenu.length > 0 && (
                    <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                  )}
                </Link>
                
                {/* Dropdown Menu */}
                {item.submenu.length > 0 && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 w-64 bg-white border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50">
                    <div className="py-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors duration-200"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden xl:block flex-shrink-0">
            <a
              href="https://jbigogmrgex.typeform.com/to/qBsak5CQ"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors duration-300 font-medium text-sm whitespace-nowrap"
            >
              Peace of Mind Assessment
            </a>
          </div>

          {/* Mobile hamburger menu button */}
          <div className="xl:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary hover:bg-accent transition-colors duration-300"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`xl:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2 max-h-[70vh] overflow-y-auto">
            {menuItems.map((item) => {
              const hasSubmenu = item.submenu.length > 0;
              const isExpandable = hasSubmenu && item.href === "#";
              const isExpanded = expandedMobileMenu === item.name;

              if (isExpandable) {
                return (
                  <div key={item.name}>
                    <button
                      onClick={() => toggleMobileSubmenu(item.name)}
                      className="w-full flex items-center justify-between text-foreground hover:text-primary hover:bg-accent/50 transition-colors duration-300 font-medium py-3 px-2 rounded-md"
                    >
                      {item.name}
                      <ChevronRight className={`h-4 w-4 transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="pl-4 space-y-1 py-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block text-muted-foreground hover:text-primary hover:bg-accent/50 transition-colors duration-300 py-2 px-2 rounded-md text-sm"
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setExpandedMobileMenu(null);
                              handleMainMenuClick();
                            }}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block text-foreground hover:text-primary hover:bg-accent/50 transition-colors duration-300 font-medium py-3 px-2 rounded-md"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setExpandedMobileMenu(null);
                    handleMainMenuClick();
                  }}
                >
                  {item.name}
                </Link>
              );
            })}
            <div className="pt-4 border-t border-border">
              <a
                href="https://jbigogmrgex.typeform.com/to/qBsak5CQ"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors duration-300 font-medium text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Peace of Mind Assessment
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ResponsiveNavbar;