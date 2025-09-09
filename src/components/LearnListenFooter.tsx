import { Button } from "@/components/ui/button";

const LearnListenFooter = () => {
  const navItems = [
    { name: "Podcast", href: "#podcast" },
    { name: "Video", href: "#video" },
    { name: "Blog", href: "#blog" },
    { name: "Resources", href: "#resources" },
  ];

  const podcastPlatforms = [
    { name: "Apple Podcasts", src: "/lovable-uploads/f6babc84-f525-4844-86a2-dd58e7313d90.png", href: "#" },
    { name: "Amazon Music", src: "/lovable-uploads/52a87b6b-8b2f-4bc0-9c73-b68f62df7b5d.png", href: "#" },
    { name: "Spotify", src: "/lovable-uploads/ff2f1422-2b37-4f11-b883-e24612bbb6af.png", href: "#" },
    { name: "Pandora", src: "/lovable-uploads/9d063b21-239e-4b1d-aea8-4a4ccdc0c9ba.png", href: "#" },
    { name: "YouTube", src: "/lovable-uploads/a4b7dcdc-52dd-431f-a44a-9bd6232bc7dd.png", href: "#" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-12 animate-fade-in">
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
                  className="hover-scale transition-transform duration-300"
                >
                  <img
                    src={platform.src}
                    alt={`Listen on ${platform.name}`}
                    className="h-8 w-auto"
                  />
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