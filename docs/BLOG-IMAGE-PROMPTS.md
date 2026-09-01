# Blog cover image prompts

**For:** generating article covers in Flow / Veo 3 (or any image model)
**Style anchor:** the approved Aug 25 cover — a hand holding an ornate brass key
against a digital keypad lock. Editorial illustration, not photography.

---

## House style — paste this at the end of every prompt

> Editorial illustration style with clean bold linework, muted warm greys and
> deep navy palette, soft directional lighting from the left, exactly one
> glowing cyan digital accent as the only bright color, generous negative
> space, no text, no words, no logos, no watermarks. 16:9 aspect ratio.

**Negative prompt (paste where the tool accepts one):**

> gravestone, tombstone, coffin, skull, candle, wilting flowers, hospital bed,
> grim reaper, dark horror mood, text, letters, watermark, photorealistic faces

The negative list matters more than usual here. Image models reach for funeral
clichés the moment "death" or "estate" appears in a prompt, and this audience
is emotionally sensitive by definition. Every cover should read as _life
admin_, not bereavement.

**Consistency:** run all covers in one session with the same style suffix, and
reuse the seed if the tool exposes one. Target 1376×768 or 1920×1080.

---

## The three drafted articles (priority)

### 1. Your Will Is a Rudimentary Document — digital twin episode

> A single sheet of aged paper lying flat on a dark walnut desk, a last will
> with a wax seal, and standing upright behind it a life-size translucent
> human silhouette formed entirely of fine glowing cyan circuit lines and data
> points, calm and still, as if the figure has outlived the page. The paper is
> dim and matte; the figure is the only light source.

_The article's thesis in one frame: the inert paper document versus the living
entity that knows what you meant._

### 2. It Was Never Procrastination. It Was Protection. — identity grief episode

> A person seen from behind standing before a tall ornate mirror in a warmly
> lit hallway. Their reflection is only a faint outline beginning to dissolve
> into small drifting cyan particles at the edges, gentle rather than eerie.
> Warm domestic light, a sense of quiet, the person's posture calm and
> thoughtful rather than afraid.

_The core question of the episode: "who am I when I stop being a wife, a
mother, a caregiver." Keep the mood tender — if it reads as a ghost story,
regenerate._

### 3. The Laughing Heir Problem — childfree estate episode

> A wall covered with a branching family-tree flowchart drawn in thin dark
> lines, made of many small empty picture frames connected by branches. One
> single glowing cyan line traces a long winding path through the empty
> frames, past all of them, ending at one small distant frame in the far
> corner containing the silhouette of a stranger. Museum-like lighting.

_The intestacy chart made visible: the court's decision tree walking past
everyone you knew to reach someone you didn't._

---

## Upgrades for the imported June–August articles (optional)

These four currently carry covers inherited from the podcast site. Fine as-is;
regenerate when convenient.

### What Long-Term Care Really Costs

> A comfortable armchair in a warm living room, lit by a single lamp, with an
> impossibly long paper receipt spilling from its seat, cascading across the
> floor and out of frame. On the receipt, faint indistinct line items — no
> readable text. One cyan-glowing line item near the top.

### Why Talking About Death Helps Us Live More Fully

> Two comfortable chairs angled toward each other beside a large open window,
> late-afternoon golden light pouring in, two cups of tea on a small table
> between them, one chair's cushion still holding the impression of someone
> who just stood up. Warm, inviting, alive — a conversation waiting to happen.

### Planning for Digital Legacy Transfer With Ease Online

> Two hands from opposite sides of the frame, an older hand passing a small
> glowing translucent cube of cyan light — containing tiny icons of photos,
> folders and keys — into a younger open palm, like a relay baton. Soft warm
> background, the cube the only light source.

### Planning for a Special Needs Child: Lifetime of Care

> A long gently winding path through soft rolling hills at dawn, marked by
> small glowing milestone posts stretching to the horizon, two figures walking
> it together — one adult, one younger adult side by side, not holding hands,
> equals. Warm pink-gold dawn light, one cyan glow on the nearest milestone.

---

## Evergreen spares

Generate a few of these in the same session; they fit almost any future post.

> An ornate brass key transforming along its length into a glowing cyan USB
> connector, floating over a dark navy background, half heritage, half
> digital.

> A wall of old-fashioned bank safe deposit boxes, all matte brass, except one
> box whose front is a glowing cyan touchscreen.

> A paper boat folded from a legal document floating on calm dark water,
> leaving a wake of glowing cyan data particles.

---

## Workflow

1. Generate at 16:9, download to `Downloads/`.
2. Tell Claude which image goes with which post slug.
3. One command swaps it: `npx tsx scripts/swap-cover.ts <slug> <image-path>`
   — uploads to Sanity and patches the post. Visitors see it immediately; the
   social-share og:image refreshes on the next deploy.
