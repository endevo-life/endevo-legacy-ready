import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Youtube,
  Linkedin,
  Instagram,
  Music2,
  Facebook,
  Send,
} from "lucide-react";
const Footer = () => {
  const socialLinks = [
    {
      icon: Youtube,
      label: "YouTube",
      href: "https://www.youtube.com/@DigitalLegacyPodcast",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/endevo-digitallegacy/posts/?feedView=all",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/endevo_digitallegacy/",
    },
    {
      icon: Music2,
      label: "TikTok",
      href: "https://www.tiktok.com/@endevo_digitallegacy?_t=ZS-90FW0Oec9NB&_r=1",
    },
    {
      icon: Facebook,
      label: "Facebook",
      href: "https://www.facebook.com/endevo.digitallegacy/",
    },
    {
      icon: null,
      imgSrc: "https://assets.cdn.filesafe.space/f5ehsbHfdFg2UsHEIb49/media/69a0833f13b842ff7baef2d1.svg",
      imgSrcHover: "https://assets.cdn.filesafe.space/f5ehsbHfdFg2UsHEIb49/media/69a0833f9a0c187c9d07fdff.svg",
      label: "Medium",
      href: "https://medium.com/@endevo_digitallegacy",
    },
  ];
  const navLinks = [
    {
      name: "Solutions",
      href: "/solution",
    },
    {
      name: "Resources",
      href: "/resources",
    },
    {
      name: "Marketplace",
      href: "/marketplace",
    },
    {
      name: "About Us",
      href: "/company",
    },
  ];
  return (
    <footer className="bg-[#08123A] text-white py-8">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Left Column - Logo & Social */}
          <div className="space-y-6 flex flex-col items-center md:items-start">
            <a href="/" className="inline-block">
              <img
                src="https://assets.cdn.filesafe.space/f5ehsbHfdFg2UsHEIb49/media/6998ba2620c0357c04657c0d.png"
                alt="ENDevo - Plan. Protect. Peace."
                className="h-12 w-auto"
                loading="lazy"
              />
            </a>
            <div className="flex gap-4 justify-center md:justify-start">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="group hover:text-brand-orange transition-colors"
                >
                  {social.imgSrc ? (
                    <>
                      <img src={social.imgSrc} alt={social.label} className="w-6 h-6 group-hover:hidden" />
                      {social.imgSrcHover && (
                        <img src={social.imgSrcHover} alt={social.label} className="w-6 h-6 hidden group-hover:block" />
                      )}
                    </>
                  ) : (
                    <social.icon className="w-5 h-5" />
                  )}
                </a>
              ))}
            </div>
            <a
              href="https://jbigogmrgex.typeform.com/to/qBsak5CQ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-brand-orange text-sm font-bold hover:underline"
            >
              Take The Peace Of Mind Assessment For Free
            </a>
          </div>

          {/* Navigation Column */}
          <div className="flex flex-col items-center md:items-start gap-4 justify-center md:justify-start">
            <nav className="flex flex-wrap justify-center md:flex-col md:justify-start gap-y-2 md:space-y-3">
              {navLinks.map((link, index) => (
                <span key={link.name} className="flex items-center">
                  <a
                    href={link.href}
                    className="hover:text-brand-orange transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                  {index < navLinks.length - 1 && (
                    <span className="mx-2 text-white/40 md:hidden">|</span>
                  )}
                </span>
              ))}
            </nav>
            <a
              href="/contact"
              className="text-white text-sm font-bold hover:text-brand-orange transition-colors"
            >
              Contact Us
            </a>
          </div>

          {/* Podcast Column */}
          <div className="space-y-3 flex flex-col items-center md:items-start text-center md:text-left">
            <img
              src="https://assets.cdn.filesafe.space/f5ehsbHfdFg2UsHEIb49/media/699757444c25023cb696936b.png"
              alt="Death & Dying Podcast"
              className="h-20 w-auto"
              loading="lazy"
            />
            <p className="text-sm text-white/90">
              Life's Final Chapter, Planned for Today's Digital Age.
            </p>
            <a
              href="https://digitallegacypodcast.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-brand-orange text-sm font-semibold hover:underline"
            >
              Listen Now!
            </a>
            <Link
              to="/blog"
              className="inline-block text-brand-orange text-sm font-semibold hover:underline"
            >
              Read our Blogs
            </Link>
          </div>

          {/* Newsletter Column */}
          <div className="h-full">
            <iframe
              src="https://link.endevo.life/widget/form/BgNNJ8PpyFu2svaaJGTp"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                borderRadius: "3px",
                minHeight: "200px",
              }}
              id="inline-BgNNJ8PpyFu2svaaJGTp"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Website - Stay Connected (Footer Form)"
              data-height="412"
              data-layout-iframe-id="inline-BgNNJ8PpyFu2svaaJGTp"
              data-form-id="BgNNJ8PpyFu2svaaJGTp"
              title="Website - Stay Connected (Footer Form)"
            />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 text-center space-y-2">
          <p className="text-sm">
            © 2026 ENDevo Services. All rights reserved.
          </p>
          <div className="flex justify-center gap-4 text-sm">
            <Link
              to="/faq"
              className="hover:text-brand-orange transition-colors"
            >
              FAQs
            </Link>
            <span>|</span>
            <a
              href="/legal/privacy-policy"
              className="hover:text-brand-orange transition-colors"
            >
              Privacy Policy
            </a>
            <span>|</span>
            <a
              href="/legal/terms-of-service"
              className="hover:text-brand-orange transition-colors"
            >
              Terms of Service
            </a>
            <span>|</span>
            <a
              href="/legal/cookie-policy"
              className="hover:text-brand-orange transition-colors"
            >
              Cookie Policy
            </a>
            <span>|</span>
            <a
              href="/cookie-settings"
              className="hover:text-brand-orange transition-colors font-semibold"
            >
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
