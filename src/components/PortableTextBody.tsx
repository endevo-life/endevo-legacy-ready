import { PortableText } from "@portabletext/react";
import type {
  PortableTextBlock,
  PortableTextComponents,
} from "@portabletext/react";

/**
 * Shared Portable Text renderer for Sanity article bodies.
 *
 * Used by both the /blog/:slug article page and the quick-read modal on
 * /blog, so an article reads identically wherever it is rendered.
 *
 * The block types handled here match what an audit of the live dataset
 * found in use across all published posts: normal/h2/h3/h4 blocks, bullet
 * and number lists, and link marks. There are no image or custom object
 * blocks in the content.
 */
const components: PortableTextComponents = {
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
      // Internal links stay in-tab and pass link equity; only external ones
      // get target/noopener.
      const href: string = value?.href ?? "";
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
