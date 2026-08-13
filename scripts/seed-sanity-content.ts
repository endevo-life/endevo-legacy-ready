/**
 * Seeds testimonials and Readiness Hub partners into Sanity.
 *
 * Both currently live as hardcoded arrays in the codebase. This pushes them
 * into the CMS once, so future entries are a Studio task rather than a PR.
 *
 * Safe to re-run: uses createOrReplace against deterministic ids, so running
 * it twice updates the same documents instead of duplicating them.
 *
 * Get a Sanity write token:
 *   https://www.sanity.io/manage → project → API → Tokens → Editor
 *
 * Run:
 *   SANITY_WRITE_TOKEN=your_token npx tsx scripts/seed-sanity-content.ts
 */

import { createClient } from "@sanity/client";
import { readFileSync } from "fs";
import { resolve } from "path";
import { testimonials } from "../src/data/testimonialsData";

function loadEnvLocal() {
  try {
    const lines = readFileSync(
      resolve(process.cwd(), ".env.local"),
      "utf-8",
    ).split("\n");
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const eq = trimmed.indexOf("=");
      if (eq === -1) continue;
      const key = trimmed.slice(0, eq).trim();
      if (!(key in process.env))
        process.env[key] = trimmed.slice(eq + 1).trim();
    }
  } catch {
    // No .env.local — rely on the ambient environment.
  }
}
loadEnvLocal();

const PROJECT_ID = process.env.VITE_SANITY_PROJECT_ID ?? "ebvyrev4";
const DATASET = process.env.VITE_SANITY_DATASET ?? "production";
const WRITE_TOKEN = process.env.SANITY_WRITE_TOKEN ?? "";

if (!WRITE_TOKEN) {
  console.error("❌  SANITY_WRITE_TOKEN not set. See the header of this file.");
  process.exit(1);
}

const client = createClient({
  projectId: PROJECT_ID,
  dataset: DATASET,
  apiVersion: "2024-01-01",
  token: WRITE_TOKEN,
  useCdn: false,
});

/** Uploads a remote image and returns a Sanity image reference. */
async function uploadImage(url: string, label: string) {
  const res = await fetch(url);
  if (!res.ok) {
    console.warn(`   ⚠ could not fetch image for ${label}: HTTP ${res.status}`);
    return undefined;
  }
  const buffer = Buffer.from(await res.arrayBuffer());
  const asset = await client.assets.upload("image", buffer, {
    filename: `${label}.jpg`,
  });
  return {
    _type: "image" as const,
    asset: { _type: "reference" as const, _ref: asset._id },
  };
}

/** Uploads a remote video and returns a Sanity file reference. */
async function uploadVideo(url: string, label: string) {
  const res = await fetch(url);
  if (!res.ok) {
    console.warn(`   ⚠ could not fetch video for ${label}: HTTP ${res.status}`);
    return undefined;
  }
  const buffer = Buffer.from(await res.arrayBuffer());
  const asset = await client.assets.upload("file", buffer, {
    filename: `${label}.mp4`,
  });
  return {
    _type: "file" as const,
    asset: { _type: "reference" as const, _ref: asset._id },
  };
}

/**
 * Partners, copied from TrustedPartnersSection. LTCareNav's logo is a bundled
 * asset rather than a URL, so it needs uploading by hand in the Studio after
 * this runs — noted rather than silently skipped.
 */
const partners = [
  {
    name: "Nia Emberly",
    logo: "https://assets.cdn.filesafe.space/f5ehsbHfdFg2UsHEIb49/media/69975744f83453e670329c0b.png",
    tagline: "Carry their love with you—for evermore",
    description:
      "A memorial bracelet handcrafted from solidified cremains. A permanent heirloom made through our patented ash-solidification process — so you can feel close again, every day.",
    buttonText: "Learn More",
    url: "https://niaemberly.ca/",
    category: "physical",
  },
  {
    name: "Trust & Will",
    logo: "https://assets.cdn.filesafe.space/f5ehsbHfdFg2UsHEIb49/media/699757441817156cc8a451cb.png",
    tagline: "Make your estate plan and make it count.",
    description:
      "Create your will or trust with the platform built to evolve, protecting your loved ones today, tomorrow, and beyond.",
    buttonText: "Get Started",
    url: "https://trustandwill.com/",
    category: "legal",
  },
  {
    name: "Childfree Trust",
    logo: "https://assets.cdn.filesafe.space/f5ehsbHfdFg2UsHEIb49/media/6a29b9eb2719d8cb18adab39.png",
    tagline:
      "The first nationwide fiduciary representation and estate planning service for Childfree people.",
    description:
      "With Childfree Trust, members create their estate planning documents, nominate Childfree Trust as the medical and financial POA, executor and trustee, outline their care plans, and have a 24/7 emergency response team to ensure their wishes are followed when needed.",
    buttonText: "Learn More",
    url: "https://childfreetrust.com/",
    category: "legal",
  },
  {
    name: "Prisidio",
    logo: "https://assets.cdn.filesafe.space/f5ehsbHfdFg2UsHEIb49/media/699757448d5b5af29c80f299.jpg",
    tagline: "Your Digital Vault. For Life.®",
    description:
      "Sign up for this special ENDevo offer today and ensure your most important information is secure, accessible, and never lost with Prisidio. Your digital vault. For Life.™",
    buttonText: "Sign Up",
    url: "https://www.prisidio.com/endevo",
    category: "digital",
  },
];

async function seedTestimonials() {
  console.log(`\n📣  Seeding ${testimonials.length} testimonials…`);
  for (const t of testimonials) {
    const photo = t.photo ? await uploadImage(t.photo, t.id) : undefined;
    const video = t.videoUrl
      ? await uploadVideo(t.videoUrl, `${t.id}-video`)
      : undefined;
    const videoThumbnail = t.videoThumbnail
      ? await uploadImage(t.videoThumbnail, `${t.id}-poster`)
      : undefined;

    await client.createOrReplace({
      _id: `testimonial-${t.id}`,
      _type: "testimonial",
      name: t.name,
      ...(t.role ? { role: t.role } : {}),
      ...(t.relationship ? { relationship: "client" } : {}),
      quote: t.quote,
      rating: t.rating,
      ...(photo ? { photo } : {}),
      ...(video ? { video } : {}),
      ...(videoThumbnail ? { videoThumbnail } : {}),
      // Every entry in testimonialsData already carries explicit consent.
      consentGiven: true,
      featured: Boolean(t.featured),
      submittedAt: t.submittedAt,
    });
    console.log(`   ✅  ${t.name}${video ? " (with video)" : ""}`);
  }
}

async function seedPartners() {
  console.log(`\n🤝  Seeding ${partners.length} partners…`);
  for (const p of partners) {
    const slug = p.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    const logo = await uploadImage(p.logo, slug);
    await client.createOrReplace({
      _id: `partner-${slug}`,
      _type: "partner",
      name: p.name,
      ...(logo ? { logo } : {}),
      tagline: p.tagline,
      description: p.description,
      category: p.category,
      url: p.url,
      buttonText: p.buttonText,
      active: true,
      featured: false,
    });
    console.log(`   ✅  ${p.name}`);
  }
  console.log(
    "\n   ℹ  LTCareNav is not seeded: its logo is a bundled asset, not a URL.\n" +
      "      Add it in the Studio and upload src/assets/LTCareNav_logo.png.",
  );
}

async function main() {
  await seedTestimonials();
  await seedPartners();
  console.log("\n🎉  Done. Open /studio to review.\n");
}

main().catch((err) => {
  console.error("Seed failed:", err.message);
  process.exit(1);
});
