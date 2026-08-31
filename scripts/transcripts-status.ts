/**
 * Match transcript files to podcast episodes and report what is ready to draft.
 *
 * Drop transcript files into transcripts/ in any of these formats:
 *   .txt   plain text
 *   .srt   subtitle file (timestamps are stripped)
 *   .vtt   WebVTT (timestamps are stripped)
 *   .md    markdown
 *
 * Name each file after the episode. Matching is on significant words, so the
 * name does not have to be exact — "bryan-walley.txt", "There Won't Be a Great
 * Wealth Transfer.srt" and "ep85 bryan walley wealth transfer.vtt" all find the
 * same episode. Anything ambiguous or unmatched is reported rather than guessed.
 *
 * Usage:
 *   npx tsx scripts/transcripts-status.ts          # what is matched, what is not
 *   npx tsx scripts/transcripts-status.ts --clean  # write normalised .txt files
 *
 * With --clean, each matched transcript is rewritten as
 * transcripts/clean/<episode-slug>.txt with timestamps, speaker labels and
 * caption artefacts removed, which is the form the drafting step reads.
 */

import {
  readFileSync,
  writeFileSync,
  readdirSync,
  mkdirSync,
  existsSync,
} from "fs";
import { join, extname, basename } from "path";

const DIR = "transcripts";
const CLEAN_DIR = join(DIR, "clean");
const CLEAN = process.argv.includes("--clean");

type Episode = {
  title: string;
  date: string;
  link?: string;
  img?: string | null;
};

// ---------------------------------------------------------------------------
// Matching
// ---------------------------------------------------------------------------

const STOP = new Set(
  (
    "the a an and or of to in for on with your you is are it that this what how why when we our my his her their about " +
    "ep episode transcript final mp3 mp4 srt vtt txt part pt"
  ).split(" "),
);

/** Significant words only, so file names need not match titles exactly. */
function words(s: string): Set<string> {
  return new Set(
    s
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, " ")
      .split(/\s+/)
      .filter((w) => w.length > 2 && !STOP.has(w) && !/^\d+$/.test(w)),
  );
}

/** Fraction of the smaller set's words present in the larger. */
function score(a: Set<string>, b: Set<string>): number {
  if (!a.size || !b.size) return 0;
  let hit = 0;
  for (const w of a) if (b.has(w)) hit++;
  return hit / Math.min(a.size, b.size);
}

function slugify(t: string): string {
  return t
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80);
}

// ---------------------------------------------------------------------------
// Cleaning
// ---------------------------------------------------------------------------

/**
 * Strip caption scaffolding down to readable prose.
 *
 * SRT and VTT carry cue numbers, timecodes and often per-line duplication from
 * rolling captions; YouTube exports repeat each line as it scrolls. What the
 * drafting step needs is the spoken words in order, once each.
 */
function cleanTranscript(raw: string): string {
  const lines = raw
    .replace(/\r/g, "")
    .split("\n")
    .map((l) => l.trim())
    // WebVTT header and cue settings
    .filter(
      (l) => l && !/^WEBVTT/i.test(l) && !/^(NOTE|STYLE|REGION)\b/i.test(l),
    )
    // Bare cue numbers
    .filter((l) => !/^\d+$/.test(l))
    // Timecode lines: 00:00:01,000 --> 00:00:04,000
    .filter((l) => !/^\d{1,2}:\d{2}(:\d{2})?[.,]\d{1,3}\s*-->/.test(l))
    // Leading inline timestamps: "0:15 So what happened was..."
    .map((l) => l.replace(/^\[?\d{1,2}:\d{2}(:\d{2})?\]?\s*/, ""))
    // Inline caption tags
    .map((l) => l.replace(/<[^>]+>/g, "").trim())
    .filter(Boolean);

  // Collapse consecutive duplicates from rolling captions.
  const deduped = lines.filter((l, i) => i === 0 || l !== lines[i - 1]);

  return deduped
    .join(" ")
    .replace(/\s+/g, " ")
    .replace(/\s+([.,!?;:])/g, "$1")
    .trim();
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

if (!existsSync(DIR)) {
  console.error(`No ${DIR}/ folder. Create it and drop transcript files in.`);
  process.exit(1);
}

const episodes: Episode[] = JSON.parse(
  readFileSync(join(DIR, "_episodes.json"), "utf8"),
);
const epWords = episodes.map((e) => ({ ep: e, w: words(e.title) }));

const files = readdirSync(DIR).filter((f) => {
  const ext = extname(f).toLowerCase();
  return [".txt", ".srt", ".vtt", ".md"].includes(ext) && !f.startsWith("_");
});

console.log(`Episodes needing an article : ${episodes.length}`);
console.log(`Transcript files found      : ${files.length}\n`);

if (!files.length) {
  console.log(`Drop transcript files into ${DIR}/ named after the episode.`);
  console.log(
    "Accepted: .txt .srt .vtt .md — names need only share key words.\n",
  );
  console.log("Episodes waiting, newest first:");
  episodes.slice(0, 12).forEach((e) => {
    const d = new Date(e.date);
    console.log(
      "  ",
      isNaN(d.getTime()) ? "??" : d.toISOString().slice(0, 10),
      "|",
      e.title.slice(0, 62),
    );
  });
  process.exit(0);
}

if (CLEAN) mkdirSync(CLEAN_DIR, { recursive: true });

const matched: { file: string; ep: Episode; conf: number; chars: number }[] =
  [];
const unmatched: string[] = [];
const ambiguous: { file: string; options: string[] }[] = [];

for (const file of files) {
  const fw = words(basename(file, extname(file)));
  const ranked = epWords
    .map((x) => ({ ep: x.ep, s: score(fw, x.w) }))
    .sort((a, b) => b.s - a.s);

  const best = ranked[0];
  const runnerUp = ranked[1];

  if (!best || best.s < 0.4) {
    unmatched.push(file);
    continue;
  }
  // Two episodes scoring nearly the same means the name is not distinctive
  // enough to be sure — better to ask than to attach a transcript to the
  // wrong episode and write an article from it.
  if (runnerUp && best.s - runnerUp.s < 0.12) {
    ambiguous.push({ file, options: [best.ep.title, runnerUp.ep.title] });
    continue;
  }

  const raw = readFileSync(join(DIR, file), "utf8");
  const text = cleanTranscript(raw);
  matched.push({ file, ep: best.ep, conf: best.s, chars: text.length });

  if (CLEAN) {
    writeFileSync(
      join(CLEAN_DIR, `${slugify(best.ep.title)}.txt`),
      text,
      "utf8",
    );
  }
}

if (matched.length) {
  console.log(`MATCHED (${matched.length}):`);
  matched
    .sort((a, b) => b.ep.date.localeCompare(a.ep.date))
    .forEach((m) => {
      const thin = m.chars < 4000 ? "  ⚠ short" : "";
      console.log(
        `  ${String(Math.round(m.conf * 100)).padStart(3)}%  ${String(m.chars).padStart(6)} chars  ${m.ep.title.slice(0, 52)}${thin}`,
      );
    });
}

if (ambiguous.length) {
  console.log(
    `\nAMBIGUOUS (${ambiguous.length}) — rename to include a distinctive word:`,
  );
  ambiguous.forEach((a) => {
    console.log(`  ${a.file}`);
    a.options.forEach((o) => console.log(`      could be: ${o.slice(0, 58)}`));
  });
}

if (unmatched.length) {
  console.log(
    `\nNO MATCH (${unmatched.length}) — rename after the episode title:`,
  );
  unmatched.forEach((f) => console.log(`  ${f}`));
}

const covered = new Set(matched.map((m) => m.ep.title));
const waiting = episodes.filter((e) => !covered.has(e.title));
console.log(`\nReady to draft : ${matched.length}`);
console.log(`Still waiting  : ${waiting.length}`);

if (CLEAN && matched.length) {
  console.log(`\nCleaned transcripts written to ${CLEAN_DIR}/`);
} else if (matched.length) {
  console.log(`\nRun with --clean to normalise them for drafting.`);
}
