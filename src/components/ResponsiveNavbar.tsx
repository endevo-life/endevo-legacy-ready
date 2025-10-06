import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const ResponsiveNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    {
      name: "Solutions",
      href: "/solution",
      submenu: [
        { name: "Our Holistic Framework", href: "/solution#framework", hover: "Our comprehensive framework" },
        { name: "Core Solutions", href: "/solution#core-solutions", hover: "Core solutions" },
        { name: "Process", href: "/solution#process", hover: "Empowering you to take control" },
        { name: "For Companies", href: "/solution#for-companies", hover: "Our edge" },
        { name: "For Employees", href: "/solution#for-employees", hover: "Get connected with service providers" },
      ]
    },
    {
      name: "Who We Serve",
      href: "/who-we-serve",
      submenu: [
        { name: "Industries Served", href: "/who-we-serve#industries" },
        { name: "Why ENDevo?", href: "/who-we-serve#why-endevo" },
      ]
    },
    {
      name: "Resources",
      href: "/resources",
      submenu: [
        { name: "Peace of Mind", href: "/resources#peace-of-mind" },
        { name: "Mobile App", href: "/resources#mobile-app" },
      ]
    },
    {
      name: "Plan",
      href: "/plan",
      submenu: [
        { name: "Path Options", href: "/plan#path-options" },
        { name: "Avoid the Mess", href: "/plan#avoid-chaos" },
        { name: "Smart Framework", href: "/plan#smart-framework" },
        { name: "Legacy Readiness", href: "/plan#legacy-readiness" },
      ]
    },
    {
      name: "Company",
      href: "/company",
      submenu: [
        { name: "About ENDevo", href: "/company#about" },
        { name: "Our Values", href: "/company#values" },
        { name: "Meet Our Team", href: "/company#team" },
      ]
    }
  ];

  return (
    <nav className="bg-white shadow-md border-b sticky top-0 z-50">
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
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.href}
                  className="flex items-center text-foreground hover:text-primary transition-colors duration-300 py-2 px-4 rounded-md hover:bg-accent/50"
                >
                  {item.name}
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                </Link>
                
                {/* Dropdown Menu */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 w-64 bg-white border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <div className="py-2">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors duration-200 group/item"
                        title={subItem.hover || subItem.name}
                      >
                        <div className="font-medium">{subItem.name}</div>
                        {subItem.hover && (
                          <div className="text-xs text-muted-foreground/80 mt-0.5 group-hover/item:text-foreground/70">
                            {subItem.hover}
                          </div>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 transition-colors duration-300 font-medium"
            >
              Book a Call
            </Link>
          </div>

          {/* Mobile hamburger menu button */}
          <div className="md:hidden">
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
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="py-4 space-y-4">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-border">
              <Link
                to="/contact"
                className="block bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 transition-colors duration-300 font-medium text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book a Call
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ResponsiveNavbar;