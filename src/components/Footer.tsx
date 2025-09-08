import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  
  return (
    <footer className="bg-primary text-primary-foreground py-12 animate-fade-in">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Logo Section */}
          <div className="flex items-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <img 
              src="/lovable-uploads/af6b9811-d420-4217-81d1-4de28da0a7ec.png" 
              alt="ENDevo Logo - Plan. Protect. Peace." 
              className="h-12 w-auto hover-scale transition-transform duration-300"
            />
          </div>
          
          {/* Navigation Links */}
          <div className="flex flex-col space-y-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <nav className="flex flex-col space-y-3">
              <a href="#about" className="story-link hover:text-brand-orange transition-colors hover-scale">About</a>
              <a href="#services" className="story-link hover:text-brand-orange transition-colors hover-scale">Services</a>
              <a href="#process" className="story-link hover:text-brand-orange transition-colors hover-scale">Process</a>
              <a href="#testimonials" className="story-link hover:text-brand-orange transition-colors hover-scale">Testimonials</a>
              <a href="#contact" className="story-link hover:text-brand-orange transition-colors hover-scale">Contact</a>
            </nav>
          </div>
          
          {/* Stay Connected Form */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-lg font-semibold">Stay Connected</h3>
            <div className="space-y-3">
              <Input 
                type="text" 
                placeholder="Your Name" 
                className="bg-primary-foreground text-primary border-primary-foreground/20 hover-scale transition-transform duration-300"
              />
              <Input 
                type="email" 
                placeholder="Your Email" 
                className="bg-primary-foreground text-primary border-primary-foreground/20 hover-scale transition-transform duration-300"
              />
              <Button 
                variant="secondary" 
                className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white hover-scale transition-transform duration-300"
              >
                Send
              </Button>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/80">
            © 2025 Endevo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;