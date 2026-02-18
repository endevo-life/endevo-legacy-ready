import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Youtube, Linkedin, Instagram, Music2, Facebook, Send } from "lucide-react";
import { FaMedium } from "react-icons/fa";
import endevoLogo from "@/assets/endevo-logo-footer-new.png";
import podcastLogo from "@/assets/death-dying-footer.png";
const Footer = () => {
  const socialLinks = [{
    icon: Youtube,
    label: "YouTube",
    href: "https://www.youtube.com/@DigitalLegacyPodcast"
  }, {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/endevo-digitallegacy/posts/?feedView=all"
  }, {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/endevo_digitallegacy/"
  }, {
    icon: Music2,
    label: "TikTok",
    href: "https://www.tiktok.com/@endevo_digitallegacy?_t=ZS-90FW0Oec9NB&_r=1"
  }, {
    icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/endevo.digitallegacy/"
  }, {
    icon: FaMedium,
    label: "Medium",
    href: "https://medium.com/@endevo_digitallegacy"
  }];
  const navLinks = [{
    name: "Solutions",
    href: "/solution"
  }, {
    name: "Resources",
    href: "/resources"
  }, {
    name: "Marketplace",
    href: "/marketplace"
  }, {
    name: "About Us",
    href: "/company"
  }, {
    name: "Contact",
    href: "/contact"
  }];
  return <footer className="bg-[#08123A] text-white py-8">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Left Column - Logo & Social */}
          <div className="space-y-6">
            <a href="/" className="inline-block">
              <img src={endevoLogo} alt="ENDevo - Plan. Protect. Peace." className="h-16 w-auto" />
            </a>
            <div className="flex gap-4">
              {socialLinks.map(social => <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="hover:text-brand-orange transition-colors">
                  <social.icon className="w-5 h-5" />
                </a>)}
            </div>
            <a href="https://jbigogmrgex.typeform.com/to/qBsak5CQ" target="_blank" rel="noopener noreferrer" className="inline-block text-brand-orange text-sm font-bold hover:underline">
              Take The Peace Of Mind Assessment For Free
            </a>
          </div>

          {/* Navigation Column */}
          <div className="flex flex-col items-center md:items-start">
            <nav className="flex flex-col space-y-3">
              {navLinks.map(link => <a key={link.name} href={link.href} className="hover:text-brand-orange transition-colors text-sm">
                  {link.name}
                </a>)}
            </nav>
          </div>

          {/* Podcast Column */}
          <div className="space-y-3 flex flex-col items-center md:items-start">
            <img src={podcastLogo} alt="Death & Dying Podcast" className="h-20 w-auto" />
            <p className="text-sm text-white/90">
              Life's Final Chapter, Planned for Today's Digital Age.
            </p>
          <a href="https://digitallegacypodcast.com/" target="_blank" rel="noopener noreferrer" className="inline-block text-brand-orange text-sm font-semibold hover:underline">
            Listen Now!
          </a>
        </div>

          {/* Newsletter Column */}
          <div className="h-full">
            <iframe src="https://link.endevo.life/widget/form/BgNNJ8PpyFu2svaaJGTp" style={{
            width: '100%',
            height: '100%',
            border: 'none',
            borderRadius: '3px',
            minHeight: '200px'
          }} id="inline-BgNNJ8PpyFu2svaaJGTp" data-layout="{'id':'INLINE'}" data-trigger-type="alwaysShow" data-trigger-value="" data-activation-type="alwaysActivated" data-activation-value="" data-deactivation-type="neverDeactivate" data-deactivation-value="" data-form-name="Website - Stay Connected (Footer Form)" data-height="412" data-layout-iframe-id="inline-BgNNJ8PpyFu2svaaJGTp" data-form-id="BgNNJ8PpyFu2svaaJGTp" title="Website - Stay Connected (Footer Form)" />
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 text-center space-y-2">
          <p className="text-sm">© 2026 ENDevo Services. All rights reserved.</p>
          <div className="flex justify-center gap-4 text-sm">
            <a href="/legal/privacy-policy" className="hover:text-brand-orange transition-colors">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="/legal/terms-of-service" className="hover:text-brand-orange transition-colors">
              Terms of Service
            </a>
            <span>|</span>
            <a href="/legal/cookie-policy" className="hover:text-brand-orange transition-colors">
              Cookie Policy
            </a>
            <span>|</span>
            <a href="/cookie-settings" className="hover:text-brand-orange transition-colors font-semibold">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;