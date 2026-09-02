import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  noIndex?: boolean;
  /**
   * Trail from Home to this page, excluding Home itself. Emitted as
   * BreadcrumbList so search results show the path rather than a bare URL,
   * and answer engines can see where a page sits in the site.
   */
  breadcrumbs?: { name: string; path: string }[];
}

const SITE_NAME = "ENDevo";

/**
 * Max <title> length search engines will display. Bing's Site Scan warns above
 * 70 characters ("Title too long"); Google truncates around the same width.
 * The count includes the " | ENDevo" suffix, since that is what ships in the tag.
 */
const TITLE_MAX = 70;
const TITLE_SUFFIX = ` | ${SITE_NAME}`;

/**
 * Fits a page title into TITLE_MAX including the site-name suffix.
 *
 * Blog posts and podcast episodes take their title straight from Sanity and the
 * YouTube API, where editorial titles routinely run past 70 characters. Rather
 * than ask editors to keep every title short, shorten here — the one place every
 * title already flows through — so the rule cannot be forgotten on new content.
 *
 * Four steps, in order of how much meaning they cost:
 *
 * 1. Drop trailing pipe-delimited segments. Episode titles are written as
 *    "Topic | Guest Name", so the guest suffix is the cheapest thing to lose:
 *    the topic is what carries the search intent. Only trailing segments go,
 *    and never the first, so the headline itself always survives.
 * 2. Drop the " | ENDevo" suffix. Many editorial titles fit within 70 on their
 *    own and only overflow once branding is appended; losing boilerplate the
 *    domain already conveys beats cutting the author's own words.
 * 3. Drop a trailing colon subtitle. Editorial titles are written as
 *    "Hook: Explanation"; keeping the hook leaves a complete phrase, which
 *    reads better in a result list than the same words cut mid-sentence.
 * 4. Only if the hook alone still overflows, truncate at a word boundary.
 */
function fitTitle(rawTitle: string): string {
  const title = rawTitle.trim().replace(/\s+/g, " ");

  // Already-branded titles are passed through untouched — the caller opted out.
  if (title.includes(SITE_NAME)) return title;

  if (title.length + TITLE_SUFFIX.length <= TITLE_MAX) {
    return `${title}${TITLE_SUFFIX}`;
  }

  // Step 1: shed trailing "| Guest Name" segments, keeping at least the first.
  const segments = title.split("|").map((seg) => seg.trim());
  for (let end = segments.length - 1; end >= 1; end--) {
    const candidate = segments.slice(0, end).join(" | ");
    if (candidate.length + TITLE_SUFFIX.length <= TITLE_MAX) {
      return `${candidate}${TITLE_SUFFIX}`;
    }
  }

  // Step 2: keep the full title and drop the branding instead. A complete
  // headline is worth more in a result list than a truncated one plus "| ENDevo".
  const headline = segments[0];
  if (headline.length + TITLE_SUFFIX.length <= TITLE_MAX) {
    return `${headline}${TITLE_SUFFIX}`;
  }
  if (title.length <= TITLE_MAX) return title;
  if (headline.length <= TITLE_MAX) return headline;

  // Step 3: keep the hook before the colon, if that alone fits and still
  // carries enough of the subject to be a useful result (guard against a
  // terse hook like "Beyond Taboo" that says nothing on its own).
  const colon = headline.indexOf(":");
  if (colon > 0) {
    const hook = headline.slice(0, colon).trim();
    if (hook.length >= 30 && hook.length + TITLE_SUFFIX.length <= TITLE_MAX) {
      return `${hook}${TITLE_SUFFIX}`;
    }
    if (hook.length >= 30 && hook.length <= TITLE_MAX) return hook;
  }

  // Step 4: nothing structural left to shed, so cut at a word boundary.
  const cut = headline.slice(0, TITLE_MAX - 1);
  const lastSpace = cut.lastIndexOf(" ");
  const trimmed = (lastSpace > 0 ? cut.slice(0, lastSpace) : cut).replace(
    /[\s.,;:!?\-–—]+$/,
    "",
  );
  return `${trimmed}…`;
}

const SITE_URL = "https://www.endevo.life";
/**
 * Sitewide social preview: the ENDevo brand hero ("Simplifying Legacy
 * Readiness & Digital Resilience"), cropped to the 1200x630 the og:image
 * tags below declare. This is the ENDevo-wide message, so it is the right
 * default for a link shared from any page.
 */
const DEFAULT_OG_IMAGE = "https://www.endevo.life/og-image-alt.jpg";

/**
 * Employer-facing hero ("Legacy & End-of-Life Wellness for Employees").
 * Pass as `ogImage` on employer pages, where it beats the generic default.
 */
export const OG_IMAGE_EMPLOYERS = "https://www.endevo.life/og-image.jpg";

export default function SEO({
  title,
  description,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  jsonLd,
  noIndex = false,
  breadcrumbs,
}: SEOProps) {
  const fullTitle = fitTitle(title);
  const canonicalUrl = canonical ? `${SITE_URL}${canonical}` : undefined;
  const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  // Home is always the first crumb, so callers pass only what follows it.
  if (breadcrumbs?.length) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [{ name: "Home", path: "/" }, ...breadcrumbs].map(
        (crumb, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: crumb.name,
          item: `${SITE_URL}${crumb.path}`,
        }),
      ),
    });
  }

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta
        name="robots"
        content={noIndex ? "noindex,nofollow" : "index,follow"}
      />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={fullTitle} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD structured data */}
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
