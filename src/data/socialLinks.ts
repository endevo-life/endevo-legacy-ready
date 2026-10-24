import type { ComponentType } from "react";
import { Youtube, Linkedin, Instagram, Music2, Facebook } from "lucide-react";
import { FaGoogle } from "react-icons/fa";

/**
 * The one list of ENDevo's social profiles.
 *
 * Rendered by the footer and by the end-of-article follow row; a single
 * source means a new profile (or a dead one) is changed in one place and
 * both surfaces agree. Medium has no lucide glyph, so it ships its own
 * SVGs and renderers handle icon-or-image. Google has no lucide glyph
 * either; react-icons' mark is monochrome and takes currentColor like the
 * lucide ones, so it hovers the same way.
 */
export type SocialLink = {
  icon: ComponentType<{ className?: string }> | null;
  label: string;
  href: string;
  imgSrc?: string;
  imgSrcHover?: string;
};

/**
 * ENDevo's Google Business Profile. The g.page short link is the permanent
 * one Google issues for the profile; the share.google links from the
 * profile's Share button are session-scoped search URLs and should not be
 * used here.
 */
export const GOOGLE_PROFILE_URL = "https://g.page/r/CcFDFJ3B886qEAI";

/** Opens the "write a review" dialog on the Google Business Profile. */
export const GOOGLE_REVIEW_URL = "https://g.page/r/CcFDFJ3B886qEAI/review";

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
    icon: FaGoogle,
    label: "Google",
    href: GOOGLE_PROFILE_URL,
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
