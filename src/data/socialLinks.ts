import { Youtube, Linkedin, Instagram, Music2, Facebook } from "lucide-react";
import type { LucideIcon } from "lucide-react";

/**
 * The one list of ENDevo's social profiles.
 *
 * Rendered by the footer and by the end-of-article follow row; a single
 * source means a new profile (or a dead one) is changed in one place and
 * both surfaces agree. Medium has no lucide glyph, so it ships its own
 * SVGs and renderers handle icon-or-image.
 */
export type SocialLink = {
  icon: LucideIcon | null;
  label: string;
  href: string;
  imgSrc?: string;
  imgSrcHover?: string;
};

export const socialLinks: SocialLink[] = [
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
