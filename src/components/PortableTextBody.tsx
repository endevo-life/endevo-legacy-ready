import { PortableText } from "@portabletext/react";
import type {
  PortableTextBlock,
  PortableTextComponents,
} from "@portabletext/react";
import { urlFor } from "@/lib/sanityImageUrl";

/**
 * Allowlists link protocols before an href reaches the DOM.
 *
 * Portable Text hrefs are author-supplied content, so a `javascript:` (or
 * `data:` / `vbscript:`) URL would otherwise become an XSS vector the moment
 * a reader clicks it. Anything not on the allowlist returns null and is
 * rendered as plain text instead.
 *
 * Protocol-relative and root-relative URLs are allowed through, as are
 * fragment and query-only links.
 */
function sanitizeHref(raw: unknown): string | null {
  if (typeof raw !== "string") return null;

  // Strip whitespace and control characters, which are used to smuggle
  // protocols past naive checks (a tab or newline inside "java...script:").
  // Filtering by code point avoids a control-character range in the
  // regex, which ESLint's no-control-regex rule rightly rejects.
  const href = Array.from(raw)
    .filter((ch) => {
      const code = ch.codePointAt(0) ?? 0;
      return code > 0x20 && code !== 0x7f;
    })
    .join("");
  if (!href) return null;

  if (/^(https?:|mailto:|tel:)/i.test(href)) return href;
  if (/^(\/\/|\/|#|\?)/.test(href)) return href;

  // Anything carrying an explicit scheme that did not match the allowlist
  // above (javascript:, data:, vbscript:, ...) is rejected.
  if (/^[a-z][a-z0-9+.-]*:/i.test(href)) return null;

  // Bare relative paths such as "about" or "guides/planning".
  return href;
}

/**
 * Shared Portable Text renderer for Sanity article bodies.
 *
 * Used by both the /blog/:slug article page and the quick-read modal on
 * /blog, so an article reads identically wherever it is rendered.
 *
 * The block types handled here match what the live dataset uses:
 * normal/h2/h3/h4 blocks, bullet and number lists, link marks, and inline
 * images (added Aug 2026 so long articles can carry per-section
 * illustrations).
 */
const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      // A block whose asset reference is missing renders nothing rather
      // than a broken img.
      if (!value?.asset) return null;
      return (
        <figure className="my-8">
          <img
            src={urlFor(value).width(1200).fit("max").url()}
            alt={value.alt || ""}
            loading="lazy"
            className="w-full h-auto rounded-lg"
          />
          {value.caption && (
            <figcaption className="mt-2 text-sm text-muted-foreground text-center">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
  block: {
    normal: ({ children }) => (
      <p className="leading-relaxed text-gray-700">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-2">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-bold text-gray-900 mt-6">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-semibold text-gray-900 mt-4">{children}</h4>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="ml-5 list-disc space-y-2">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="ml-5 list-decimal space-y-2">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="leading-relaxed">{children}</li>,
    number: ({ children }) => <li className="leading-relaxed">{children}</li>,
  },
  marks: {
    link: ({ value, children }) => {
      const href = sanitizeHref(value?.href);

      // An unsafe or missing href renders as plain text rather than a dead
      // or dangerous link.
      if (!href) return <>{children}</>;

      // Internal links stay in-tab and pass link equity; only external ones
      // get target/noopener.
      const isExternal = /^https?:\/\//i.test(href);
      return (
        <a
          href={href}
          {...(isExternal
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className="text-orange-500 underline hover:opacity-80"
        >
          {children}
        </a>
      );
    },
  },
};

export default function PortableTextBody({
  value,
}: {
  value: PortableTextBlock[];
}) {
  return <PortableText value={value} components={components} />;
}
