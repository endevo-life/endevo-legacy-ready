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
/**
 * Column heading for the footer.
 *
 * font-sans is explicit because index.css sets a global serif on every h2/h3
 * for section headings. That serif is right for page sections and wrong for a
 * small uppercase label, which reads as a mismatched font at this size.
 *
 * Centered on mobile (where columns stack) and left-aligned from md up, so all
 * three headings share one alignment rule instead of drifting apart.
 */
const FooterHeading = ({ children }: { children: React.ReactNode }) => (
  <h2 className="w-full font-sans text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-white/55 text-center md:text-left mb-1">
    {children}
  </h2>
);

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
      imgSrc:
        "https://assets.cdn.filesafe.space/f5ehsbHfdFg2UsHEIb49/media/69a0833f13b842ff7baef2d1.svg",
      imgSrcHover:
        "https://assets.cdn.filesafe.space/f5ehsbHfdFg2UsHEIb49/media/69a0833f9a0c187c9d07fdff.svg",
      label: "Medium",
      href: "https://medium.com/@endevo_digitallegacy",
    },
  ];
  // title text gives each anchor a descriptive hover/assistive label beyond
  // the short visible word, without padding the visible link out.
  const navLinks = [
    {
      name: "Solutions",
      href: "/solution",
      title: "Employee wellness program for legacy readiness",
    },
    {
      name: "Resources",
      href: "/resources",
      title: "Legacy readiness tools, guides and worksheets",
    },
    {
      name: "Readiness Hub",
      href: "/marketplace",
      title: "Readiness Hub — vetted legacy planning partners",
    },
    {
      name: "About Us",
      href: "/company",
      title: "About ENDevo and our end-of-life planning mission",
    },
  ];

  const legalLinks = [
    {
      name: "FAQs",
      href: "/faq",
      title: "End-of-life and digital legacy planning FAQ",
    },
    {
      name: "Privacy",
      href: "/legal/privacy-policy",
      title: "ENDevo privacy policy",
    },
    {
      name: "Terms",
      href: "/legal/terms-of-service",
      title: "ENDevo terms of service",
    },
    {
      name: "Cookies",
      href: "/legal/cookie-policy",
      title: "ENDevo cookie policy",
    },
    {
      name: "Cookie Settings",
      href: "/legal/cookie-settings",
      title: "Manage your cookie preferences",
      emphasis: true,
    },
  ];
  return (
    <footer className="bg-[#08123A] text-white py-6">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-x-8 gap-y-6 mb-6">
          {/* Left Column - Logo & Social */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            {/* Home link carries a title + aria-label so the anchor has real
                text for crawlers and screen readers, not just an image. */}
            <Link
              to="/"
              className="inline-block"
              title="ENDevo — Legacy Readiness & Digital Preparedness"
              aria-label="ENDevo home — Legacy Readiness and Digital Preparedness"
            >
              <img
                src="https://assets.cdn.filesafe.space/f5ehsbHfdFg2UsHEIb49/media/6998ba2620c0357c04657c0d.png"
                alt="ENDevo — Legacy Readiness & Digital Preparedness. Plan. Protect. Peace."
                className="h-11 w-auto"
                width="180"
                height="44"
                loading="lazy"
              />
            </Link>
            <div className="flex gap-3 justify-center md:justify-start">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`ENDevo on ${social.label}`}
                  title={`ENDevo on ${social.label}`}
                  className="group hover:text-brand-orange transition-colors inline-flex items-center justify-center w-9 h-9 -m-1.5"
                >
                  {social.imgSrc ? (
                    <>
                      <img
                        src={social.imgSrc}
                        alt={social.label}
                        className="w-6 h-6 group-hover:hidden"
                      />
                      {social.imgSrcHover && (
                        <img
                          src={social.imgSrcHover}
                          alt={social.label}
                          className="w-6 h-6 hidden group-hover:block"
                        />
                      )}
                    </>
                  ) : (
                    <social.icon className="w-5 h-5" />
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <nav
            aria-label="Footer"
            className="flex flex-col items-center md:items-start gap-2"
          >
            <FooterHeading>Explore</FooterHeading>
            <div className="flex flex-wrap justify-center md:flex-col md:justify-start gap-x-1 gap-y-0.5">
              {navLinks.map((link, index) => (
                <span key={link.name} className="flex items-center">
                  <Link
                    to={link.href}
                    title={link.title}
                    className="hover:text-brand-orange transition-colors text-sm py-2 md:py-1 inline-block"
                  >
                    {link.name}
                  </Link>
                  {index < navLinks.length - 1 && (
                    <span className="mx-2 text-white/40 md:hidden">|</span>
                  )}
                </span>
              ))}
              <Link
                to="/contact"
                className="text-white text-sm font-semibold hover:text-brand-orange transition-colors py-2 md:py-1 inline-block"
              >
                Contact Us
              </Link>
            </div>
          </nav>

          {/* Podcast Column */}
          <div className="space-y-2 flex flex-col items-center md:items-start text-center md:text-left">
            <FooterHeading>Podcast</FooterHeading>
            {/* The logo was a bare <img> and passed no link equity. Wrapping it
                in the same anchor as "Listen Now" makes it a real, labelled
                link to the podcast rather than decoration. */}
            <a
              href="https://digitallegacypodcast.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="Digital Legacy Podcast — Death & Dying in the Digital Age"
              aria-label="Listen to the Digital Legacy Podcast — Death and Dying in the Digital Age"
              className="inline-block"
            >
              <img
                src="https://assets.cdn.filesafe.space/f5ehsbHfdFg2UsHEIb49/media/699757444c25023cb696936b.png"
                alt="Digital Legacy Podcast — Death & Dying in the Digital Age"
                className="h-14 w-auto"
                width="150"
                height="56"
                loading="lazy"
              />
            </a>
            <p className="text-sm text-white/90">
              Life's Final Chapter, Planned for Today's Digital Age.
            </p>
            {/* Side by side so the two calls to action cost one line, not two. */}
            <div className="flex items-center gap-3">
              <a
                href="https://digitallegacypodcast.com/"
                target="_blank"
                rel="noopener"
                title="Listen to the Digital Legacy Podcast"
                className="text-brand-orange text-sm font-semibold hover:underline py-2 md:py-1 inline-block"
              >
                Listen Now
              </a>
              <span className="text-white/40" aria-hidden="true">
                |
              </span>
              <Link
                to="/blog"
                title="ENDevo blog — digital legacy and end-of-life planning articles"
                className="text-brand-orange text-sm font-semibold hover:underline py-2 md:py-1 inline-block"
              >
                Read our Blogs
              </Link>
            </div>
          </div>

          {/* Newsletter Column */}
          {/* The GHL form is a cross-origin iframe carrying its own internal
              padding, so the heading is inset by the same amount to sit above
              the visible input rather than the iframe's outer edge. */}
          <div className="flex flex-col items-center md:items-stretch md:pl-4">
            <FooterHeading>Stay Connected</FooterHeading>
            <iframe
              className="flex-1"
              src="https://link.endevo.life/widget/form/BgNNJ8PpyFu2svaaJGTp"
              style={{
                width: "100%",
                border: "none",
                borderRadius: "3px",
                // Tall enough for both fields plus the button; any shorter and
                // the widget renders its own scrollbar inside the footer.
                minHeight: "210px",
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
        {/* Copyright and legal links share one row on desktop and only wrap
            on narrow screens, which keeps the bottom bar to a single line. */}
        <div className="border-t border-white/20 pt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-center md:text-left">
          <p className="text-sm">
            © 2026 ENDevo Services. All rights reserved.
          </p>
          {/* Client-side Links rather than raw anchors: a plain href forces a
              full document reload and discards the SPA's already-loaded bundle. */}
          <nav
            aria-label="Legal"
            className="flex flex-wrap justify-center md:justify-end items-center gap-x-3 gap-y-0.5 text-sm"
          >
            {legalLinks.map((link, index) => (
              <span key={link.href} className="flex items-center">
                <Link
                  to={link.href}
                  title={link.title}
                  className={`hover:text-brand-orange transition-colors py-2 md:py-1 inline-block${
                    link.emphasis ? " font-semibold" : ""
                  }`}
                >
                  {link.name}
                </Link>
                {index < legalLinks.length - 1 && (
                  <span className="ml-3 text-white/30" aria-hidden="true">
                    |
                  </span>
                )}
              </span>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
