import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Workflow,
  BookOpen,
  User,
  FileText,
  HelpCircle,
  Newspaper,
  Building2,
  Crown,
  UsersRound,
  Handshake,
  ClipboardList,
  BadgeDollarSign,
  Play,
  Mic,
  Store,
} from "lucide-react";
const ResponsiveNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(
    null,
  );
  const handleMainMenuClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const toggleMobileSubmenu = (menuName: string) => {
    setExpandedMobileMenu(expandedMobileMenu === menuName ? null : menuName);
  };
  // Five menus, built around the questions a first-time visitor actually
  // asks — what is this, is it for me, how much, can I trust you, how do I
  // start — rather than the org chart. Labels are the words people search
  // ("Pricing", "Podcast", "FAQ"), and nothing sits deeper than two clicks.
  const menuItems = [
    {
      name: "Start Here",
      href: "/solutions",
      submenu: [
        {
          name: "How it works",
          sub: "Five steps, one plan",
          href: "/solutions#how-it-works",
          icon: Workflow,
        },
        {
          name: "Pricing",
          sub: "For you, or for your team",
          href: "/solutions#pricing",
          icon: BadgeDollarSign,
        },
        {
          name: "Watch the video",
          sub: "What is Legacy Readiness OS?",
          href: "/solutions#video",
          icon: Play,
        },
      ],
    },
    {
      name: "Who It's For",
      href: "#",
      submenu: [
        {
          name: "Individuals & Families",
          sub: "Your plan, yours to keep",
          href: "/for-individuals",
          icon: User,
        },
        {
          name: "Employers",
          sub: "A benefit for the thing nobody plans for",
          href: "/for-employers",
          icon: Building2,
        },
        {
          name: "Advisors & Providers",
          sub: "Request access for your clients",
          href: "/for-service-providers",
          icon: Handshake,
        },
      ],
    },
    {
      name: "Learn",
      href: "#",
      submenu: [
        {
          name: "Podcast",
          sub: "Death and Dying in the Digital Age",
          href: "/videos",
          icon: Mic,
        },
        {
          name: "Articles",
          sub: "Legacy and end-of-life planning, explained",
          href: "/blog",
          icon: FileText,
        },
        {
          name: "FAQ",
          sub: "Straight answers to common questions",
          href: "/faq",
          icon: HelpCircle,
        },
        {
          name: "Guides & Tools",
          sub: "Worksheets and the mobile app",
          href: "/resources",
          icon: BookOpen,
        },
        {
          name: "Readiness Hub",
          sub: "Vetted partners and experts",
          href: "/marketplace",
          icon: Store,
        },
      ],
    },
    {
      name: "About",
      href: "/company",
      submenu: [
        {
          name: "Niki Weiss",
          sub: "Founder and thanatologist",
          href: "/company#niki",
          icon: Crown,
        },
        {
          name: "Team & Partners",
          sub: "The people behind ENDevo",
          href: "/company#team",
          icon: UsersRound,
        },
        {
          name: "Client Stories",
          sub: "Case studies and testimonials",
          href: "/solution#case-studies",
          icon: ClipboardList,
        },
        {
          name: "News & Speaking",
          sub: "Where to find Niki next",
          href: "/news-and-events",
          icon: Newspaper,
        },
      ],
    },
    {
      name: "Contact",
      href: "/contact",
      submenu: [],
    },
  ];
  return (
    <nav className="bg-white shadow-md border-b fixed top-0 left-0 right-0 z-50">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                alt="ENDevo Logo"
                className="h-[52px] w-auto"
                src="https://assets.cdn.filesafe.space/f5ehsbHfdFg2UsHEIb49/media/699757441817153b30a451cf.png"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-4">
            {menuItems.map((item) => (
              <div key={item.name} className="relative group">
                {/*
                  Items with href "#" have no page of their own — they only
                  open a dropdown. Rendering them as a Link makes React Router
                  resolve "#" against the current URL, so on an article page
                  the nav emitted <a href="/blog/this-very-article">, a
                  self-referential link on every page of the site. They are
                  buttons instead, which is also the correct semantics for a
                  control that opens a menu rather than navigating.
                */}
                {item.href === "#" ? (
                  <button
                    type="button"
                    aria-haspopup="true"
                    className="flex items-center text-foreground hover:text-primary transition-colors duration-300 py-2 px-3 rounded-md hover:bg-accent/50 text-sm whitespace-nowrap"
                  >
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                  </button>
                ) : (
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
                )}

                {/* Dropdown Menu */}
                {item.submenu.length > 0 && (
                  <div
                    className={`absolute top-full ${item.alignRight ? "right-0" : "left-0"} mt-1 bg-white border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50 w-[520px]`}
                  >
                    <div
                      className="py-2 grid grid-flow-col"
                      style={{
                        gridTemplateRows: `repeat(${Math.ceil(item.submenu.length / 2)}, auto)`,
                      }}
                    >
                      {item.submenu.map(
                        (subItem: {
                          name: string;
                          href: string;
                          sub?: string;
                          icon?: React.ElementType;
                        }) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="flex items-start gap-3 px-4 py-3 hover:bg-orange-50 transition-colors duration-200"
                          >
                            {subItem.icon && (
                              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-orange/10 flex items-center justify-center mt-0.5">
                                <subItem.icon className="w-4 h-4 text-brand-orange" />
                              </span>
                            )}
                            <span>
                              <span className="block text-sm font-semibold text-foreground">
                                {subItem.name}
                              </span>
                              {subItem.sub && (
                                <span className="block text-xs text-muted-foreground mt-0.5">
                                  {subItem.sub}
                                </span>
                              )}
                            </span>
                          </Link>
                        ),
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden xl:block flex-shrink-0">
            <Link
              to="/solutions#get-invite"
              className="bg-brand-orange text-white px-4 py-2 rounded-md hover:bg-brand-orange-dark transition-colors duration-300 font-medium text-sm whitespace-nowrap inline-block"
            >
              Start your plan
            </Link>
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
        <div
          className={`xl:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMobileMenuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="py-4 space-y-2 max-h-[70vh] overflow-y-auto">
            {menuItems.map((item) => {
              const hasSubmenu = item.submenu.length > 0;
              const isExpanded = expandedMobileMenu === item.name;

              // Show submenu if item has submenu items
              if (hasSubmenu) {
                return (
                  <div key={item.name}>
                    <button
                      onClick={() => toggleMobileSubmenu(item.name)}
                      className="w-full flex items-center justify-between text-foreground hover:text-primary hover:bg-accent/50 transition-colors duration-300 font-medium py-3 px-2 rounded-md"
                    >
                      {item.name}
                      <ChevronRight
                        className={`h-4 w-4 transition-transform duration-300 ${isExpanded ? "rotate-90" : ""}`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                    >
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

              // Show regular link for items without submenu
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
              <Link
                to="/solutions#get-invite"
                className="w-full bg-brand-orange text-white px-6 py-3 rounded-md hover:bg-brand-orange-dark transition-colors duration-300 font-medium text-center inline-block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Start your plan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default ResponsiveNavbar;
