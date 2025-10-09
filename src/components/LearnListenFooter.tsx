import { Button } from "@/components/ui/button";

const LearnListenFooter = () => {
  const navItems = [
    { name: "Podcast", href: "#podcast" },
    { name: "Video", href: "#video" },
    { name: "Blog", href: "#blog" },
    { name: "Resources", href: "#resources" },
  ];

  const podcastPlatforms = [
    { name: "Apple Podcasts", href: "#" },
    { name: "Amazon Music", href: "#" },
    { name: "Spotify", href: "#" },
    { name: "Pandora", href: "#" },
    { name: "YouTube", href: "#" },
  ];

  return (
    <footer className="bg-[#08123A] text-white py-12 animate-fade-in">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-8 items-start">
          {/* Logo Section */}
          <div className="flex items-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <img 
              src="/lovable-uploads/743e38e0-5495-4af4-b0c0-094c558aed1e.png" 
              alt="Death and Dying in the Digital Age" 
              className="h-12 w-auto hover-scale transition-transform duration-300"
            />
          </div>
          
          {/* Navigation Links */}
          <div className="flex flex-col space-y-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="story-link hover:text-brand-orange transition-colors hover-scale"
                >
                  {item.name}
                </a>
              ))}
              <a href="/" className="story-link hover:text-brand-orange transition-colors hover-scale">
                ENDevo
              </a>
            </nav>
          </div>
          
          {/* Where to Listen */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-lg font-semibold">Where to Listen</h3>
            <div className="flex flex-col space-y-3">
              {podcastPlatforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.href}
                  className="story-link hover:text-brand-orange transition-colors hover-scale"
                >
                  {platform.name}
                </a>
              ))}
            </div>
          </div>
          
          {/* My Final Playbook App */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <h3 className="text-lg font-semibold">My Final Playbook</h3>
            <div className="flex flex-col space-y-3">
              <a href="#" className="hover-scale transition-transform duration-300">
                <img
                  src="/lovable-uploads/f816080f-83b6-4d73-a63c-3dcd165d5268.png"
                  alt="Download on the App Store"
                  className="h-10 w-auto"
                />
              </a>
              <a href="#" className="hover-scale transition-transform duration-300">
                <img
                  src="/lovable-uploads/bb68aa0f-b17f-4fdc-a383-97a8eb74e1ea.png"
                  alt="Get it on Google Play"
                  className="h-10 w-auto"
                />
              </a>
              <div className="flex justify-center mt-4">
                <img
                  src="/lovable-uploads/31e64651-f2e6-4f56-8de8-543c6db20fd6.png"
                  alt="My Final Playbook"
                  className="h-8 w-auto"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/80">
            © 2025 Death and Dying in the Digital Age. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default LearnListenFooter;