import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Youtube, Linkedin, Instagram, Music2, Facebook, Send } from "lucide-react";
import endevoLogo from "@/assets/endevo-logo-footer.png";
import podcastLogo from "@/assets/death-dying-footer.png";

const Footer = () => {
  const socialLinks = [
    { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@DigitalLegacyPodcast" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/endevo-digitallegacy/posts/?feedView=all" },
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Music2, label: "TikTok", href: "https://www.tiktok.com/@endevo_digitallegacy?_t=ZS-90FW0Oec9NB&_r=1" },
    { icon: Facebook, label: "Facebook", href: "#" },
  ];

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Solutions", href: "/solution" },
    { name: "Plan", href: "/plan" },
    { name: "Company", href: "/company" },
    { name: "Resources", href: "/resources" },
    { name: "Who We Serve", href: "/who-we-serve" },
  ];

  return (
    <footer className="bg-[#2C8B8B] text-white py-8">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Left Column - Logo & Social */}
          <div className="space-y-6">
            <img 
              src={endevoLogo} 
              alt="ENDevo - Plan. Protect. Peace." 
              className="h-16 w-auto"
            />
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="hover:text-brand-orange transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div className="flex flex-col items-center md:items-start">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-brand-orange transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Podcast Column */}
          <div className="space-y-3 flex flex-col items-center md:items-start">
            <img 
              src={podcastLogo} 
              alt="Death & Dying Podcast" 
              className="h-12 w-auto"
            />
            <p className="text-sm text-white/90">
              Life's Final Chapter, Planned for Today's Digital Age.
            </p>
            <a 
              href="#" 
              className="inline-block text-brand-orange text-sm font-semibold hover:underline"
            >
              Listen Now!
            </a>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Connected:</h3>
            <div className="space-y-3">
              <Input 
                type="text" 
                placeholder="Your Name" 
                className="bg-white text-gray-900 border-white rounded-full"
              />
              <Input 
                type="email" 
                placeholder="Your Email" 
                className="bg-white text-gray-900 border-white rounded-full"
              />
              <Button 
                className="w-full bg-white text-[#2C8B8B] hover:bg-white/90 rounded-full font-semibold"
              >
                <Send className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 text-center space-y-2">
          <p className="text-sm">
            © 2025 ENDevo Services. All rights reserved.
          </p>
          <div className="flex justify-center gap-4 text-sm">
            <a href="#" className="hover:text-brand-orange transition-colors">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#" className="hover:text-brand-orange transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;