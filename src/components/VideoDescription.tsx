import React from "react";

/**
 * Renders a YouTube episode description with real formatting.
 *
 * Descriptions arrive as plain text but are full of structure: URLs
 * (subscribe links, guest sites, socials) and chapter timestamps
 * ("4:23 Why the Right Questions..."). Rendered as-is they are dead
 * text — a typical episode has ~8 URLs and ~11 chapters.
 *
 * - http/https URLs become links. Only those two protocols are ever
 *   linkified (same allowlist thinking as PortableTextBody), and they get
 *   nofollow since description content is closer to user-generated than
 *   editorial.
 * - Timestamps become buttons that seek the embedded player via onSeek,
 *   turning the CHAPTERS block into working chapter navigation.
 *
 * Everything is built as React nodes from plain text — no HTML parsing,
 * no injection surface.
 */

const TOKEN = /(https?:\/\/[^\s<>"')\]]+)|(\b\d{1,2}:\d{2}(?::\d{2})?\b)/g;

function timestampToSeconds(ts: string): number {
  const parts = ts.split(":").map(Number);
  return parts.reduce((acc, p) => acc * 60 + p, 0);
}

export default function VideoDescription({
  text,
  onSeek,
}: {
  text: string;
  onSeek: (seconds: number) => void;
}) {
  const nodes: React.ReactNode[] = [];
  let last = 0;
  let key = 0;

  for (const m of text.matchAll(TOKEN)) {
    const idx = m.index ?? 0;
    if (idx > last) nodes.push(text.slice(last, idx));

    const [, url, ts] = m;
    if (url) {
      // Trailing punctuation belongs to the sentence, not the URL.
      const trimmed = url.replace(/[.,;:!?]+$/, "");
      const rest = url.slice(trimmed.length);
      nodes.push(
        <a
          key={key++}
          href={trimmed}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="text-orange-500 underline hover:opacity-80 break-all"
        >
          {trimmed}
        </a>,
      );
      if (rest) nodes.push(rest);
    } else if (ts) {
      nodes.push(
        <button
          key={key++}
          type="button"
          onClick={() => onSeek(timestampToSeconds(ts))}
          className="text-orange-500 font-medium hover:underline"
          aria-label={`Jump to ${ts}`}
        >
          {ts}
        </button>,
      );
    }
    last = idx + m[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));

  return (
    <div className="text-base leading-relaxed text-gray-700 whitespace-pre-line">
      {nodes}
    </div>
  );
}
