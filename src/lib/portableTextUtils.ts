import type { PortableTextBlock } from "@portabletext/react";

/**
 * Flattens Portable Text to plain text.
 *
 * Used to derive meta descriptions and word counts from article bodies —
 * both need the prose without markup.
 */
export function toPlainText(blocks: PortableTextBlock[] = []): string {
  return blocks
    .map((block) => {
      if (block._type !== "block" || !Array.isArray(block.children)) return "";
      return block.children.map((child) => child.text ?? "").join("");
    })
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Builds a meta description from the article body.
 *
 * Search engines truncate around 155-160 characters, so we cut at the last
 * word boundary before the limit rather than mid-word, and only append an
 * ellipsis when text was actually dropped.
 */
export function buildMetaDescription(
  blocks: PortableTextBlock[] | undefined,
  fallback: string,
  limit = 155,
): string {
  const text = toPlainText(blocks);
  if (!text) return fallback;
  if (text.length <= limit) return text;

  const cut = text.slice(0, limit);
  const lastSpace = cut.lastIndexOf(" ");
  return `${(lastSpace > 0 ? cut.slice(0, lastSpace) : cut).replace(/[.,;:!?-]+$/, "")}…`;
}
