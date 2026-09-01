import { Link } from "react-router-dom";
import { Youtube, Linkedin, Instagram, Music2, Facebook } from "lucide-react";
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

interface FooterLink {
  name: string;
  href: string;
  title: string;
}

/**
 * A labelled column of internal links.
 *
 * Stacks vertically from md up, and wraps into a pipe-separated row on mobile
 * where a tall list of single words costs more height than it earns.
 */
const FooterLinkColumn = ({
  heading,
  links,
}: {
  heading: string;
  links: FooterLink[];
}) => (
  <nav
    aria-label={heading}
    className="flex flex-col items-center md:items-start gap-2"
  >
    <FooterHeading>{heading}</FooterHeading>
    <div className="flex flex-wrap justify-center md:flex-col md:justify-start gap-x-1 gap-y-0.5">
      {links.map((link, index) => (
        <span key={link.href} className="flex items-center">
          <Link
            to={link.href}
            title={link.title}
            className="hover:text-brand-orange transition-colors text-sm py-2 md:py-1 inline-block"
          >
            {link.name}
          </Link>
          {index < links.length - 1 && (
            <span className="mx-2 text-white/40 md:hidden" aria-hidden="true">
              |
            </span>
          )}
        </span>
      ))}
    </div>
  </nav>
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
  // Split into two columns so each is a short, scannable list under its own
  // heading rather than one undifferentiated stack of links.
  const exploreLinks = [
    {
      name: "Start Here",
      href: "/solutions",
      title:
        "My Final Playbook and Legacy Readiness OS — how it works and pricing",
    },
    {
      name: "Pricing",
      href: "/solutions#pricing",
      title: "Pricing for individuals and organisations",
    },
    {
      name: "Podcast",
      href: "/videos",
      title: "Death and Dying in the Digital Age — episodes",
    },
    {
      name: "Articles",
      href: "/blog",
      title: "Articles on digital legacy and end-of-life planning",
    },
    {
      name: "Guides & Tools",
      href: "/resources",
      title: "Legacy readiness worksheets, guides and the mobile app",
    },
    {
      name: "Readiness Hub",
      href: "/marketplace",
      title: "Readiness Hub — vetted legacy planning partners",
    },
  ];

  // Mirrors the "Who We Serve" menu — the three audience pages are among the
  // most-visited destinations and were previously unreachable from the footer.
  const audienceLinks = [
    {
      name: "Individuals & Families",
      href: "/for-individuals",
      title: "End-of-life planning for individuals and families",
    },
    {
      name: "Employers",
      href: "/for-employers",
      title: "Legacy readiness as an employee benefit",
    },
    {
      name: "Advisors & Providers",
      href: "/for-service-providers",
      title: "Bring legacy readiness to your clients",
    },
  ];

  const companyLinks = [
    {
      name: "About",
      href: "/company",
      title: "About ENDevo, Niki Weiss and the team",
    },
    {
      name: "News & Speaking",
      href: "/news-and-events",
      title: "Where to find Niki next — events and announcements",
    },
    {
      name: "FAQ",
      href: "/faq",
      title: "End-of-life and digital legacy planning FAQ",
    },
    {
      name: "Contact",
      href: "/contact",
      title: "Contact the ENDevo team",
    },
  ];

  // FAQs sits in the Company column, so it is deliberately absent here — one
  // destination listed twice in the same footer just dilutes both.
  const legalLinks = [
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
        {/* Brand takes the wider first track; the four link columns need only
            enough room for one short label each. */}
        <div className="grid md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1fr_1fr] gap-x-8 gap-y-6 mb-6 items-start">
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

          <FooterLinkColumn heading="Learn" links={exploreLinks} />

          <FooterLinkColumn heading="About" links={companyLinks} />

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

          {/* The newsletter signup previously sat here. It is hidden until
              there is an actual monthly newsletter to send — see the commented
              block below the component for the markup to restore. The slot now
              carries the audience links from the main nav instead, so the most
              common destinations are reachable from the bottom of any page. */}
          <FooterLinkColumn heading="Who It's For" links={audienceLinks} />
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

/*
 * Newsletter signup — parked until there is a monthly newsletter to send.
 *
 * To restore: drop this column back into the grid above (changing the grid to
 * six tracks or replacing the "For You" column), and re-add the Dialog imports
 * from "@/components/ui/dialog".
 *
 * It is behind a dialog rather than inline because the GHL form is a
 * cross-origin iframe needing ~292px for its two fields, submit button and bot
 * check — more than twice the height of any link column, and not restyleable
 * from here. The trigger button costs one line instead. Same form id, so
 * submissions continue to land in the same GHL list.
 *
 * <div className="flex flex-col items-center md:items-start">
 *   <FooterHeading>Stay Connected</FooterHeading>
 *   <p className="text-sm text-white/90 text-center md:text-left mb-3">
 *     Monthly legacy-readiness guidance from Niki Weiss.
 *   </p>
 *   <Dialog>
 *     <DialogTrigger asChild>
 *       <button
 *         type="button"
 *         className="bg-brand-orange text-white text-sm font-semibold px-4 py-2.5 rounded-md hover:bg-brand-orange/90 transition-colors"
 *       >
 *         Subscribe
 *       </button>
 *     </DialogTrigger>
 *     <DialogContent className="max-w-md p-0 overflow-hidden">
 *       <DialogHeader className="sr-only">
 *         <DialogTitle>Stay Connected</DialogTitle>
 *       </DialogHeader>
 *       <iframe
 *         src="https://link.endevo.life/widget/form/BgNNJ8PpyFu2svaaJGTp"
 *         className="w-full"
 *         style={{ border: "none", height: "420px" }}
 *         id="inline-BgNNJ8PpyFu2svaaJGTp"
 *         data-layout="{'id':'INLINE'}"
 *         data-form-name="Website - Stay Connected (Footer Form)"
 *         data-form-id="BgNNJ8PpyFu2svaaJGTp"
 *         title="Website - Stay Connected (Footer Form)"
 *       />
 *     </DialogContent>
 *   </Dialog>
 * </div>
 */

export default Footer;
