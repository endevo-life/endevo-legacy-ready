/**
 * Match transcript files to podcast episodes by their content.
 *
 * The Drive transcripts are named by internal episode number (E44.txt), and
 * those numbers do not line up with the published feed — E85 in Drive is the
 * Rabbi Melanie interview, not the newest episode. So the filename says nothing
 * useful, and matching has to come from what is inside the file.
 *
 * Two signals do the work, in order of reliability:
 *
 *   1. The guest's name. Episode titles read "Topic | Guest Name", and Niki
 *      introduces her guest by name in the opening minute. A full-name hit in
 *      the transcript's opening is close to conclusive.
 *   2. Distinctive topic words shared between the title and the transcript,
 *      which resolves the episodes whose titles carry no guest name.
 *
 * Every proposal is written to transcripts/_matches.json with its confidence
 * and the evidence behind it, so a human can check the weak ones before any
 * article is written from a transcript belonging to a different conversation.
 *
 * Usage:
 *   npx tsx scripts/match-transcripts.ts          # propose matches, write JSON
 *   npx tsx scripts/match-transcripts.ts --strict # only high-confidence ones
 */

import { readFileSync, writeFileSync, readdirSync } from "fs";
import { join, basename, extname } from "path";

const DIR = "transcripts";
const STRICT = process.argv.includes("--strict");

type Episode = {
  title: string;
  date: string;
  link?: string;
  img?: string | null;
};

const episodes: Episode[] = JSON.parse(
  readFileSync(join(DIR, "_episodes.json"), "utf8"),
);

// Titles that already have an article still belong in the pool: a transcript
// matching one of those is simply not needed, and letting it match there stops
// it being force-fitted to a different episode.
const files = readdirSync(DIR).filter(
  (f) => extname(f).toLowerCase() === ".txt" && !f.startsWith("_"),
);

// ---------------------------------------------------------------------------
// Signals
// ---------------------------------------------------------------------------

const clean = (s: string) =>
  s
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9 ]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

/**
 * The guest name from an episode title. Titles are "Topic | Guest Name", often
 * with credentials appended ("Dr. Andy Arwari", "Bob Goldberg, CFP").
 */
function guestName(title: string): string | null {
  const parts = title.split("|");
  if (parts.length < 2) return null;
  const raw = parts[parts.length - 1]
    .replace(/,.*$/, "") // drop credentials after a comma
    .replace(/\b(dr|mr|mrs|ms|rabbi|phd|md|esq|cfp|faan|dvm|chpv)\b\.?/gi, "")
    .replace(/\([^)]*\)/g, "")
    .trim();
  const words = clean(raw)
    .split(" ")
    .filter((w) => w.length > 1);
  return words.length >= 2 ? words.join(" ") : null;
}

const STOP = new Set(
  (
    "the a an and or of to in for on with your you is are it that this what how why when we our my his her their about " +
    "from into after before more most just like they them there here who whom will can could would should"
  ).split(" "),
);

function topicWords(title: string): Set<string> {
  return new Set(
    clean(title.split("|")[0])
      .split(" ")
      .filter((w) => w.length > 3 && !STOP.has(w)),
  );
}

// ---------------------------------------------------------------------------
// Match
// ---------------------------------------------------------------------------

type Proposal = {
  file: string;
  title: string;
  date: string;
  confidence: number;
  via: string;
  runnerUp?: string;
};

const proposals: Proposal[] = [];
const unresolved: string[] = [];

for (const file of files) {
  const raw = readFileSync(join(DIR, file), "utf8");
  const head = clean(raw.slice(0, 6000)); // the introduction
  const body = clean(raw);

  const scored = episodes.map((ep) => {
    const guest = guestName(ep.title);
    let score = 0;
    let via = "";

    // A guest named in the opening is the strongest signal available.
    if (guest && head.includes(guest)) {
      score += 0.75;
      via = `guest "${guest}" in intro`;
    } else if (guest && body.includes(guest)) {
      score += 0.5;
      via = `guest "${guest}" in body`;
    }

    // Topic words corroborate, and carry episodes with no guest in the title.
    const topics = [...topicWords(ep.title)];
    if (topics.length) {
      const hits = topics.filter((w) => body.includes(w)).length;
      const ratio = hits / topics.length;
      score += ratio * 0.35;
      if (!via && ratio > 0.7) via = `${hits}/${topics.length} topic words`;
      else if (via && ratio > 0.5) via += ` + ${hits}/${topics.length} topics`;
    }

    return { ep, score, via };
  });

  scored.sort((a, b) => b.score - a.score);
  const best = scored[0];
  const second = scored[1];

  const MIN = STRICT ? 0.75 : 0.5;
  if (!best || best.score < MIN) {
    unresolved.push(file);
    continue;
  }
  // A clear winner needs daylight over the runner-up; without it the evidence
  // does not distinguish two episodes and a human should look.
  const margin = best.score - (second?.score ?? 0);
  if (margin < 0.12) {
    unresolved.push(file);
    continue;
  }

  proposals.push({
    file,
    title: best.ep.title,
    date: best.ep.date,
    confidence: Math.round(best.score * 100) / 100,
    via: best.via || "topic overlap",
    ...(second && second.score > 0.4 ? { runnerUp: second.ep.title } : {}),
  });
}

// One transcript per episode: if two files claim the same episode, keep the
// stronger and return the other to the unresolved pile.
const byEpisode = new Map<string, Proposal>();
const collisions: Proposal[] = [];
for (const p of proposals.sort((a, b) => b.confidence - a.confidence)) {
  const prev = byEpisode.get(p.title);
  if (prev) collisions.push(p);
  else byEpisode.set(p.title, p);
}

const final = [...byEpisode.values()].sort((a, b) =>
  b.date.localeCompare(a.date),
);

const strong = final.filter((p) => p.confidence >= 0.75);
const weak = final.filter((p) => p.confidence < 0.75);

console.log(`Transcripts        : ${files.length}`);
console.log(`Episodes to cover  : ${episodes.length}`);
console.log(`Matched (strong)   : ${strong.length}`);
console.log(`Matched (review)   : ${weak.length}`);
console.log(`Unresolved         : ${unresolved.length}`);
if (collisions.length)
  console.log(`Same-episode clashes: ${collisions.length}`);

console.log(`\n=== STRONG (${strong.length}) ===`);
strong.forEach((p) =>
  console.log(
    `  ${p.confidence}  ${p.file.padEnd(12)} ${p.title.slice(0, 54)}`,
  ),
);

if (weak.length) {
  console.log(`\n=== NEEDS REVIEW (${weak.length}) ===`);
  weak.forEach((p) => {
    console.log(
      `  ${p.confidence}  ${p.file.padEnd(12)} ${p.title.slice(0, 54)}`,
    );
    console.log(
      `        via ${p.via}${p.runnerUp ? ` | also: ${p.runnerUp.slice(0, 42)}` : ""}`,
    );
  });
}

if (collisions.length) {
  console.log(`\n=== TWO FILES, ONE EPISODE (${collisions.length}) ===`);
  collisions.forEach((p) =>
    console.log(`  ${p.file} also claimed "${p.title.slice(0, 48)}"`),
  );
}

if (unresolved.length) {
  console.log(`\n=== UNRESOLVED (${unresolved.length}) ===`);
  console.log("  " + unresolved.join(", "));
}

writeFileSync(
  join(DIR, "_matches.json"),
  JSON.stringify({ matched: final, collisions, unresolved }, null, 2),
);
console.log(`\nWritten to ${DIR}/_matches.json`);
