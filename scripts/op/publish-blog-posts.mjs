/**
 * One-off publisher for the 4 blog posts prepped during the Sept/Oct 2026
 * content push (life insurance, anticipatory grief, Jorge Jorge, pet loss).
 *
 * Reads SANITY_WRITE_TOKEN from .env.local (never VITE_-prefixed — a write
 * token must never ship in the public bundle). Creates each post with
 * createIfNotExists, so re-running this script is safe and won't duplicate
 * posts already published.
 *
 * Cover images are intentionally omitted — the schema marks `image` as
 * required in the Studio UI, but that's a Studio-only validation hint, not
 * an API constraint, so the document still creates fine. BlogPost.tsx
 * already renders correctly with no image. Upload the real image for each
 * post in Sanity Studio once it's generated; no code or script change
 * needed for that.
 *
 * Usage: node scripts/op/publish-blog-posts.mjs [--dry-run]
 */

import { createClient } from "@sanity/client";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..", "..");

function loadEnvLocal() {
  const path = join(ROOT, ".env.local");
  const lines = readFileSync(path, "utf-8").split("\n");
  const env = {};
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#") || !trimmed.includes("=")) continue;
    const i = trimmed.indexOf("=");
    env[trimmed.slice(0, i).trim()] = trimmed.slice(i + 1).trim();
  }
  return env;
}

const env = loadEnvLocal();
const DRY_RUN = process.argv.includes("--dry-run");

if (!env.SANITY_WRITE_TOKEN) {
  console.error("SANITY_WRITE_TOKEN not found in .env.local — aborting.");
  process.exit(1);
}

const client = createClient({
  projectId: env.VITE_SANITY_PROJECT_ID,
  dataset: env.VITE_SANITY_DATASET,
  apiVersion: "2024-01-01",
  token: env.SANITY_WRITE_TOKEN,
  useCdn: false,
});

/** Portable Text helpers — Sanity's block content needs real block objects. */
let keyCounter = 0;
const key = () => `k${Date.now()}${keyCounter++}`;

function para(text) {
  return {
    _type: "block",
    _key: key(),
    style: "normal",
    children: [{ _type: "span", _key: key(), text, marks: [] }],
    markDefs: [],
  };
}

function heading(text) {
  return {
    _type: "block",
    _key: key(),
    style: "h3",
    children: [{ _type: "span", _key: key(), text, marks: [] }],
    markDefs: [],
  };
}

/** A paragraph containing a plain-text video link, until a video block type exists. */
function videoLinkPara(url) {
  return para(`Watch the full conversation: ${url}`);
}

// ---------------------------------------------------------------------------
// Article 1 — Sept 15
// ---------------------------------------------------------------------------
const article1 = {
  _id: "blogpost-when-life-insurance-does-not-pay",
  _type: "blogPost",
  title: "When Life Insurance Does Not Pay",
  slug: { _type: "slug", current: "when-life-insurance-does-not-pay" },
  date: "2026-09-15",
  author: "Niki Weiss",
  externalLink:
    "https://medium.com/@endevo_digitallegacy/when-life-insurance-does-not-pay-a7d6867a3990",
  content: [
    para(
      "A conversation with Stephie Prestridge, an estate attorney whose practice shifted toward helping families with life insurance claims.",
    ),
    para("By Niki Weiss, Digital Thanatologist and Founder of ENDevo"),
    para(
      "You bought the policy. You paid the premiums. You named a beneficiary. You placed the paperwork somewhere safe. You assume that when you die, the insurance company will send the money to the person you chose.",
    ),
    para(
      "That is how life insurance is supposed to work. But supposed to is not the same as guaranteed.",
    ),
    para(
      "In a recent episode of the Digital Legacy Podcast, I spoke with Stephie Prestridge, an estate attorney whose practice shifted toward helping families with life insurance claims. She kept seeing policies that should have been straightforward become denied, delayed, or disputed.",
    ),
    para(
      "The painful truth is that owning a policy is only the beginning. Your family must know it exists, be able to locate it, understand who should receive it, and prove that the policy was still valid when you died. One missed step can turn financial protection into another crisis layered on top of grief.",
    ),
    videoLinkPara("https://www.youtube.com/watch?v=BHaU508My7M"),
    heading("The Three Ways a Life Insurance Claim Can Go Wrong"),
    para(
      "Prestridge describes three common problems: a claim can be denied, delayed, or disputed. They overlap, but each creates a different kind of trouble.",
    ),
    para(
      "A dispute can begin when someone challenges the named beneficiary or questions whether the policyholder truly intended a change. The challenge may or may not succeed, but it can force the insurance company to pause while it reviews the facts. That pause can become expensive when a family is trying to pay for a funeral, a mortgage, or ordinary household bills.",
    ),
    para(
      "A delay can also happen when a newer policy falls within its contestability period. The insurer may compare the application with medical records and review whether the information supplied was accurate. The exact rules depend on the policy and the law, but the practical result is the same: the family waits while the company investigates.",
    ),
    para(
      "A denial may follow if the insurer concludes that the policy lapsed, the application contained a material problem, or another policy requirement was not met. At that point, the grieving family may need professional help to understand whether the decision was valid and whether it can be challenged.",
    ),
    heading("Your Will May Not Control Your Life Insurance"),
    para(
      "One of the biggest traps is believing that a will overrides every other document. It usually does not control a life insurance policy. Life insurance is generally paid according to the beneficiary designation held by the insurer.",
    ),
    para(
      "If your will says one person should receive the money but your policy names someone else, you have created a conflict. The same problem can happen when you try to change a beneficiary by sending a letter but fail to complete the insurer's required form or confirmation process.",
    ),
    para(
      "Intent matters, but incomplete execution can still leave your family with a legal mess. Thinking about a decision is not enough. Writing it somewhere is not always enough. The change must be completed through the correct process and then verified.",
    ),
    heading("Digital Convenience Can Create Expensive Mistakes"),
    para(
      "Online benefits portals make enrollment faster, but speed does not equal accuracy. During our conversation, Prestridge described a case in which a person entered a beneficiary's information but missed a percentage dropdown that defaulted to zero. The name was there, but the system showed that the person should receive nothing.",
    ),
    para(
      "In another case, confusing online entries created uncertainty about which child was meant to receive the benefit. What looked like a simple data-entry task became evidence in a dispute after the policyholder died.",
    ),
    para(
      "This is a digital legacy issue. Every beneficiary choice, percentage, checkbox, and confirmation stored in an online system can shape what happens to real people after your death. Technology can speed up the process, but it cannot confirm that the final result matches your intent unless someone reviews it carefully.",
    ),
    heading("The Damage Is Bigger Than the Missing Money"),
    para(
      "When a claim stalls, the financial impact is obvious. What families often underestimate is the emotional cost.",
    ),
    para(
      "Death, grief, caregiving, and money can expose every fracture in a family. One sibling may have provided years of unpaid care. Another may believe a last-minute beneficiary change was unfair. Someone else may question whether an aging parent understood what they signed. By the time attorneys become involved, they may be able to resolve the claim, but they may not be able to repair the relationship.",
    ),
    para(
      "Planning is not only about distributing money. It is also about reducing avoidable harm. You do not have to give everyone what they expect. You do need to make your wishes clear, complete the right documents, and leave enough evidence that the people you love are not forced to guess.",
    ),
    heading("Six Steps to Protect the People You Love"),
    para(
      "1. Create a policy inventory. Record the insurer, policy number, insured person, owner, agent or contact, premium schedule, current beneficiary, and location of the latest statement. Keep a secure digital copy and note where the original is stored.",
    ),
    para(
      "2. Verify the beneficiary directly. Do not rely on memory or an old screenshot. Contact the insurer or benefits administrator, confirm the beneficiary names and percentages, and save the confirmation.",
    ),
    para(
      "3. Confirm the policy is active. Check that premiums are current and ask what notices are sent before a policy lapses. If the policy allows a backup contact for missed-payment notices, name someone you trust.",
    ),
    para(
      "4. Give someone the roadmap. You do not have to reveal every dollar while you are alive. A trusted person should know that the policy exists, where the information is stored, and whom to contact after your death or during an incapacity.",
    ),
    para(
      "5. Document your intent when conflict is possible. If your family has strained relationships, a recent beneficiary change, or questions about capacity, speak with a qualified attorney. Clear documentation can help show that the decision was informed and voluntary.",
    ),
    para(
      "6. Review after life changes. Recheck the policy after marriage, divorce, birth, death, retirement, a job change, or a major health event. Even without a major event, schedule a review at least every few years.",
    ),
    heading("Move From Good Intentions to Completed Planning"),
    para(
      "Most people do not ignore life insurance because they do not care. They get stuck in the intention action gap. They mean to locate the policy, update the beneficiary, tell their family, or save the confirmation. Then life gets busy and the task remains unfinished.",
    ),
    para(
      "That is why My Final Playbook uses a practical process: reflect, decide, document, execute, communicate, and iterate. Each step closes a different gap. Reflection clarifies what matters. Decisions establish your wishes. Documentation records them. Execution makes them valid. Communication tells the right people where to look. Iteration keeps the plan current as life changes.",
    ),
    para(
      "A life insurance policy should deliver protection, not confusion. The best time to test that protection is while you are alive, capable, and available to correct a mistake.",
    ),
    para(
      "Do not leave your family a locked box with no key. Leave them a clear path to the help you intended to provide.",
    ),
  ],
};

// ---------------------------------------------------------------------------
// Article 2 — Sept 16
// ---------------------------------------------------------------------------
const article2 = {
  _id: "blogpost-grief-that-arrives-before-the-actual-death",
  _type: "blogPost",
  title: "Grief That Arrives Before the Actual Death: Anticipating the Loss",
  slug: {
    _type: "slug",
    current: "grief-that-arrives-before-the-actual-death-anticipating-the-loss",
  },
  date: "2026-09-16",
  author: "Niki Weiss",
  externalLink:
    "https://medium.com/@endevo_digitallegacy/grief-that-arrives-before-the-actual-death-anticipating-the-loss-473f91f911b4",
  content: [
    para(
      "A conversation with Terri Chaplin, Certified Grief Companion and Educator",
    ),
    para(
      "Think about what actually happens when someone dies. The condolences arrive. Someone organizes meals. Colleagues send messages. An employer approves three days of leave. A funeral gets scheduled and people travel to it. For roughly a week, a machinery of support switches on.",
    ),
    para(
      'Now notice what all of it has in common. Every piece is triggered by the same event: "Death."',
    ),
    para(
      "That works if grief begins at death. For a great many people, it does not.",
    ),
    para(
      "On this episode of Death & Dying in the Digital Age, I spoke with Terri Chaplin, a Certified Grief Companion, HeartMath Certified Mentor, and Accredited Course Provider who works with grieving people through a companioning model. She came to the work through her own losses, and she is direct about the one almost nobody names.",
    ),
    videoLinkPara("https://www.youtube.com/watch?v=oKCsp4VVxEM"),
    heading("Grief doesn't wait for a funeral"),
    para(
      "Anticipatory grief is the grief that begins before death. It can start at a diagnosis. It can start at the first significant decline. It is not a rehearsal for loss. It is loss, occurring in advance and continuously.",
    ),
    para(
      "Terri cared for her first husband for five and a half years before he died of renal failure in 2005. Two failed kidney transplants, dialysis three times a week, a third transplant in preparation. She describes grieving things that had nothing to do with his eventual death: the anniversaries they could no longer celebrate, the vacations that stopped, a life that had quietly become a different life.",
    ),
    para(
      "She is emphatic about a misconception that causes real harm. People assume anticipatory grief front-loads the work, that you arrive at the death already partly through it. Her clients tell her the opposite, over and over. They thought they were ready. Nothing prepared them for the moment they could no longer hold the person's hand.",
    ),
    para(
      "Anticipatory grief does not subtract from what comes later. It adds to it.",
    ),
    heading("What it looks like when it is not sadness"),
    para(
      "Most people expect grief to look like crying. Terri's list of how anticipatory grief actually presents is worth sitting with, because almost none of it looks like mourning.",
    ),
    para(
      "Anxiety. Lying awake at two in the morning running scenarios about a future that has not happened yet. Fear. Exhaustion, and not only the physical kind, but the specific depletion of carrying something continuously that you have never named out loud.",
    ),
    para(
      "Anger, which she says surfaces in stages: anger at the illness, anger at the situation, and then, honestly, anger at the person who is sick. Displaced, unearned, and extremely common.",
    ),
    para("Then guilt, which arrives precisely because of the anger."),
    para(
      "She adds one more observation that reframes the whole picture. Both people are grieving. The person who is ill and the person caring for them are frequently in the same room, carrying versions of the same thing, and neither is naming it. So neither speaks.",
    ),
    heading("The scale of the pre-trigger window"),
    para(
      "This is where I want to add something that did not come up in our conversation, because it belongs to my side of this work.",
    ),
    para(
      "Terri's point is that society does not check in until there has been a death. I would put it more structurally: it is not only that people do not check in. It is that no mechanism is designed to.",
    ),
    para(
      "According to Caregiving in the US 2025, the AARP and National Alliance for Caregiving report, 63 million Americans are family caregivers. That is roughly one in four adults, a 45% increase since 2015. Nearly a quarter provide 40 or more hours of care per week. A third have been doing it for five years or more. Sixty-four percent report high emotional stress.",
    ),
    para(
      "Seventy percent of caregivers under 65 are working, and half report the caregiving affecting their work.",
    ),
    para(
      "Every one of those people is standing in the window before the trigger. Bereavement leave does not reach them, because nobody has died. Employee assistance bereavement services do not reach them, for the same reason. The meal train does not arrive. The condolence messages do not send.",
    ),
    para(
      "The support architecture we have built activates at the exact moment the caregiver has already spent years being depleted by something no policy recognized as loss. Then it offers three days.",
    ),
    heading("What technology can and cannot do here"),
    para(
      "I asked her about grief bots and AI companions, because it is the question my field cannot avoid.",
    ),
    para(
      "Her answer was measured. She has seen apps that send a grieving person a daily message, and she can see the value, because grief is isolating and the people around you return to their lives, as they should. She tried a bot on her own website and removed it, because showing up as herself mattered more to her than scaling.",
    ),
    para(
      "She would not recommend any of it as a replacement for professional support. I share the concern I raised with her: a companion optimized to keep you engaged may keep you circling rather than moving. That is a design risk, not a certainty, and the evidence base on AI grief support is still thin. Treat confident claims in either direction with suspicion for now.",
    ),
    para(
      "Terri's framing of the goal is better than the language of moving on. You do not stop carrying grief. You learn to carry it differently, alongside love, rather than trading one for the other. Two days before we spoke, it had been fourteen years since her son died. She grieves the wedding she will not attend and the grandchildren she will not have. She is also grateful for almost eighteen years of being his mother. Both, at once, permanently.",
    ),
    heading("Three things to do now"),
    para(
      "If you are caring for someone who is ill, name it. What you are feeling is likely grief, and it started before anyone told you it counted. Say the word to one person. Terri offers a free resource specific to anticipatory grief for caregivers at myhealingheartscommunity.com. If what you are carrying feels heavier than you can manage, a licensed mental health professional is the right next step, and grief companioning is a complement to that care rather than a substitute for it.",
    ),
    para(
      "If you know a caregiver, do not wait for death. The meal, the message, the offer to sit with the person for two hours so they can leave the house: all of it is worth more now than it will be after the funeral, when it will finally arrive along with everyone else's.",
    ),
    para(
      "If you employ people, audit what your policies are triggered by. Count how many of your bereavement and support benefits require a death certificate to activate. Then consider that roughly one in four of your employees is currently a family caregiver, most of them working, most of them years into it. A benefit that only opens after the loss is a benefit that misses the years of loss preceding it.",
    ),
    heading("What we are actually building for"),
    para(
      "I have spent this work arguing that preparation reduces the administrative weight of a death so that families can spend their capacity on each other rather than on paperwork.",
    ),
    para(
      "This conversation sharpened that for me. The preparation is not only for the aftermath. It is for the years before, when someone is caregiving and grieving simultaneously and the last thing they can absorb is a search for account passwords or an unfunded trust.",
    ),
    para(
      "Getting the practical layer handled while there is still time is not morbid. It is one of the few things you can hand a caregiver that actually lightens the load, on the day it is heaviest, which is almost never the day of the funeral.",
    ),
    heading("Listen and take the next step"),
    para(
      "Listen to the full conversation with Terri Chaplin on the Death & Dying in the Digital Age podcast. Find her work and free grief resources at myhealingheartscommunity.com.",
    ),
    para(
      "To identify the gaps in your own plan, take ENDevo's free Peace of Mind Assessment: finalplaybookq4.endevo.life",
    ),
    para("Live fully, die ready."),
    para(
      "If you are struggling and need someone to talk to, the 988 Suicide and Crisis Lifeline is available 24 hours a day by calling or texting 988 in the United States.",
    ),
  ],
};

// ---------------------------------------------------------------------------
// Article 3 — Sept 22
// ---------------------------------------------------------------------------
const article3 = {
  _id: "blogpost-who-will-know-what-to-do-when-you-cannot",
  _type: "blogPost",
  title: "Who Will Know What to Do When You Cannot",
  slug: { _type: "slug", current: "who-will-know-what-to-do-when-you-cannot" },
  date: "2026-09-22",
  author: "Niki Weiss",
  externalLink:
    "https://medium.com/@endevo_digitallegacy/who-will-know-what-to-do-when-you-cannot-8b6755c34cc4",
  content: [
    para(
      "A conversation with Jorge C. Jorge, MBA, a financial professional with 1847 Financial whose work includes retirement, insurance, and legacy planning.",
    ),
    para("By Niki Weiss, Digital Thanatologist and Founder of ENDevo"),
    para(
      "Most plans answer a private question: what do I want to happen? Your family will face a more immediate one: what do we do first?",
    ),
    para(
      "If the people you trust do not know where your information lives, whom to call, or what role they have, even a thoughtful plan can leave them unprepared at the exact moment they need direction.",
    ),
    para(
      "On this episode of Death and Dying in the Digital Age, I spoke with Jorge C. Jorge, a financial professional with 1847 Financial. His work spans retirement, insurance, and legacy planning, but the lesson he returned to throughout our conversation was not about a product or a document. It was about the transfer of knowledge.",
    ),
    videoLinkPara("https://www.youtube.com/watch?v=_RXxttj3NPQ"),
    heading("A family can be protected and still be unprepared"),
    para(
      "Jorge learned this after a former colleague died unexpectedly. The man's wife knew there were retirement accounts, insurance policies, and other financial arrangements. She did not know how the pieces worked together, because he had never walked her through them.",
    ),
    para(
      "While she was in shock, she and her daughter searched through papers and tried to interpret unfamiliar documents. They even found an insurance policy the family did not know existed.",
    ),
    para(
      "Jorge could help because he understood the system and knew which questions to ask. Most families do not have someone with that knowledge standing beside them after a death.",
    ),
    para("The missing step was not another document. It was a handoff."),
    heading("The people named in the plan need to hear the plan"),
    para(
      "A will, trust, insurance policy, beneficiary form, healthcare directive, or power of attorney may be essential. The people expected to act still need practical information. They need to know the document exists, where it is stored, what responsibility they have, and which professional can guide them.",
    ),
    para(
      "This does not require sharing every balance or turning a family dinner into a financial audit. It requires enough information for the right person to begin.",
    ),
    para(
      "If someone is named as an executor, trustee, healthcare agent, financial agent, or guardian, do not let the assignment be a surprise. Tell them now. Give them enough context to decide whether they can accept the responsibility and understand what may be expected.",
    ),
    heading("Grief is the wrong classroom"),
    para(
      "After a death, even routine tasks become harder. A spouse may need to contact an employer, call an insurance company, secure online accounts, find tax records, and make funeral decisions within the same few days.",
    ),
    para(
      "Jorge said the widow and her daughter did not know what to ask the companies they called. That is not a question of intelligence. It is a question of timing. They were being asked to learn a complicated system while emotionally overwhelmed.",
    ),
    para("A family briefing moves that learning to a calmer day."),
    heading("Bring your family into the professional conversation"),
    para(
      "Jorge compared this to a car repair. If a mechanic says the transmission needs to be replaced, you can go home and try to repeat the explanation to your spouse. You may forget a detail, misunderstand the warranty, or answer a question the mechanic should answer.",
    ),
    para(
      "The simpler choice is to bring your spouse into the conversation with the mechanic.",
    ),
    para(
      "The same principle applies here. Invite the people who may need to act into a meeting with the financial professional, insurance professional, attorney, or tax adviser. Let them hear the explanation directly, ask questions, and meet the people they may need later.",
    ),
    para("That meeting turns private intentions into shared understanding."),
    heading("Incapacity changes the timeline"),
    para(
      "Jorge encountered the same lesson while helping his father, a financial professional who had helped other people plan but resisted parts of his own preparation. His father worried about cost, distrusted attorneys, and did not want to lose control. Then dementia limited what the family could change.",
    ),
    para(
      "The family had some authority in place, including powers of attorney and healthcare directives. Even so, they faced social workers, court processes, questions about guardianship, the sale of a home, and decisions about long-term care.",
    ),
    para(
      "Legacy readiness cannot begin and end with death. The people you trust may need to step in while you are alive but unable to communicate, manage an account, approve care, or explain what you intended.",
    ),
    heading("Your digital system still needs a human guide"),
    para(
      "Policies, statements, legal records, and account details increasingly live behind online logins. Saving a file to the cloud does not mean your family can find or access it. They may not know which platform you use, how access is granted, or where recovery instructions are stored.",
    ),
    para(
      "Show the appropriate person how your system is organized without casually sharing passwords or weakening security. Explain where access instructions are kept, which records matter most, and whom to contact if the technology fails.",
    ),
    para(
      "Think of it as a tour, not a data dump. Your family needs a map and a first point of contact.",
    ),
    heading("Three things to do now"),
    para(
      "1. Name the people who may need to act. Review the legal, financial, healthcare, caregiving, and digital roles in your plan. Confirm that each person knows they have been named and is willing to serve.",
    ),
    para(
      "2. Give them a starting point. Show them where current documents and access instructions are stored. Provide the names of the professionals, employers, insurance companies, and other contacts they may need.",
    ),
    para(
      "3. Schedule a family briefing. Bring the people most likely to act into your next professional review. Let them hear the explanation, ask questions, and leave with the same understanding.",
    ),
    heading("What we are actually preparing for"),
    para(
      "Preparation is not only about preserving money or recording preferences. It is about reducing the number of unfamiliar decisions your family must make while grieving, caregiving, or responding to a crisis.",
    ),
    para(
      "The goal is not to give your family every answer. It is to make sure they are not starting from zero.",
    ),
    para(
      "Your family should hear the plan from you before they have to piece it together without you.",
    ),
    heading("Listen and take the next step"),
    para(
      "Listen to the full conversation with Jorge C. Jorge on the Death and Dying in the Digital Age podcast. You can also connect with Jorge through his LinkedIn profile.",
    ),
    para(
      "To identify gaps in your own legacy readiness, take ENDevo's free Peace of Mind Assessment.",
    ),
    para("Live fully, die ready."),
  ],
};

// ---------------------------------------------------------------------------
// Article 4 — date TBD, placeholder: Sept 25 ("4 days" relative to article 3)
// ---------------------------------------------------------------------------
const article4 = {
  _id: "blogpost-why-pet-loss-deserves-more-compassion-and-better-planning",
  _type: "blogPost",
  title: "Why Pet Loss Deserves More Compassion and Better Planning",
  slug: {
    _type: "slug",
    current: "why-pet-loss-deserves-more-compassion-and-better-planning",
  },
  // PLACEHOLDER DATE — user gave "4 days ago" relative to writing, never
  // confirmed an exact calendar date. Update before this post is considered
  // final; see the publish summary this script prints.
  date: "2026-09-26",
  author: "Niki Weiss",
  externalLink:
    "https://medium.com/@endevo_digitallegacy/why-pet-loss-deserves-more-compassion-and-better-planning-d76ff4fa6928",
  content: [
    para(
      "A conversation with Koryn Greenspan, founder of The Parted Paw, a certified pet loss and grief specialist, end-of-life pet doula, and ACC-ICF coach.",
    ),
    para("By Niki Weiss, Digital Thanatologist and Founder of ENDevo"),
    para(
      "Most end-of-life planning asks what you want to happen. Pet loss asks something harder. It asks you to decide when.",
    ),
    para(
      "That is the part nobody warns you about. You are not only losing your animal. You are the one who picks the room, signs the form, and chooses the morning. You hold an authority most people never hold over a human life, and you usually hold it with no preparation at all.",
    ),
    para(
      "That combination is why so many pet parents end up carrying something heavier than grief. They carry regret.",
    ),
    para(
      "On this episode of Death and Dying in the Digital Age, I spoke with Koryn Greenspan, founder of The Parted Paw in Toronto. She has spent fifteen years working with pets and the people who love them, and she supports grieving pet parents before, during, and after a loss. She also works with veterinary teams on compassion fatigue.",
    ),
    videoLinkPara("https://www.youtube.com/watch?v=AznHwEGnwTY"),
    heading("Two losses, thirteen months apart"),
    para(
      "Koryn's sister died of brain cancer in 2021. Around that loss, support arrived without anyone having to ask: meals, condolences, ritual, time away from work. She was grateful for all of it.",
    ),
    para(
      "Thirteen months later, her dog Georgia died. Georgia was a rescue she loved so much she left a corporate career and built a company around her. That loss, in Koryn's words, was tormenting.",
    ),
    para("Almost none of the support came."),
    para(
      "Same person. Same capacity to grieve. Two completely different responses from the world around her. She went back to school, earned her certifications, and started The Parted Paw so the second kind of loss would stop being met with silence.",
    ),
    heading("Pet grief is several losses at once"),
    para("When a pet dies, more than the animal goes."),
    para(
      "Koryn walked through what a pet parent is actually grieving: identity, because being someone's person was part of who you were; the shape of your day, built around walks and feedings; the feel of your home; often a whole social life that grew up around the animal.",
    ),
    para(
      "She drew one distinction that stayed with me. The people in our lives have lives of their own outside us. A pet's whole existence depends on choices we make for them.",
    ),
    para(
      "That dependence is what makes the bond so strong, and what makes the ending so complicated.",
    ),
    heading("The decision nobody names out loud"),
    para(
      "We decide what our pets eat, when they go out, where they sleep. Most of the time, we also decide when the last day is.",
    ),
    para(
      "Koryn connected something I had not put together. Pet parents routinely make a decision about ending suffering that people are only beginning to have access to for themselves. We hand that authority to ordinary families and offer almost no guidance on how to carry it.",
    ),
    para(
      "You are not only watching a decline. You are the person being asked to decide.",
    ),
    heading("Why her sessions fill up with regret"),
    para(
      "Koryn does a lot of anticipatory grief work, and she explained why. When she sits with someone after a pet has died, much of the time goes to what they believe they got wrong.",
    ),
    para(
      "Did they wait too long. Did they act too soon. Should it have happened at home instead of a clinic.",
    ),
    para(
      "Most of those questions trace back to choices made in a hurry by people who were never told what the options were.",
    ),
    para(
      "Many pet parents do not know that in-home euthanasia exists. They learn it afterward, from someone who mentions it kindly, and it becomes one more thing to replay at two in the morning.",
    ),
    para("Grief comes from the loss. Regret comes from meeting it unprepared."),
    heading("The support gap at work"),
    para(
      "A colleague of mine had no children. Her dog was her family. When the dog died, she asked to use her bereavement days and had to argue for them. Her company said yes in the end, but she had to defend a loss that was obvious to her.",
    ),
    para(
      "Koryn sees worse. Some of her clients do not feel safe saying why they are struggling, so they stay quiet or give another reason. Then they show up at work and cannot perform. Their manager notices. Their reviews suffer. Their finances follow.",
    ),
    para(
      "Part of what allows this is old legal language. In Canada and across most of the United States, pets are still classified as property. New York now asks divorce courts to weigh what is best for a companion animal, though that change applies to divorce and not to the workplace.",
    ),
    para("Language shapes what an employer feels free to wave off."),
    heading("What deciding early actually looked like"),
    para("I can speak to this from my own house."),
    para(
      "We lost a dog this past Memorial Day. Before that day came, we had the conversations. We chose in-home hospice instead of a final car ride to the clinic. At $630 it was not cheap, but we had budgeted for it. We chose a backyard burial, and we dug the hole early.",
    ),
    para(
      "When the day arrived, it was quiet. She did not have to be moved. Nobody was making decisions in a parking lot.",
    ),
    para(
      "The grief still came, and it came fully. What planning removed was everything else we would have spent months second-guessing.",
    ),
    heading("Three things to do now"),
    para(
      "1. Decide the logistics while your pet is well. Where do you want it to happen, who should be in the room, and what happens afterward: cremation, burial, a pet cemetery, aquamation. Ask your veterinarian now whether in-home euthanasia is available where you live, because most people learn it exists too late to choose it.",
    ),
    para(
      "2. Find out this week whether your employer covers pet loss. Read the bereavement policy. If it says nothing about pets, Koryn's advice is to raise it before you need it, and to book grief support in advance.",
    ),
    para(
      "3. Say the plan out loud to one person. Tell your partner, a friend, or your vet. If you live alone, Koryn suggests saying it out loud to yourself and then finding someone to repeat it to. A plan nobody else knows about is one you carry alone at the worst moment.",
    ),
    heading("What we are actually preparing for"),
    para(
      "I spend most of my time on readiness for human loss. This conversation reframed something.",
    ),
    para(
      "For a lot of adults, a pet is where end-of-life authority first lands in your hands. You decide about care, comfort, timing, and what happens to a body. Whatever you learn doing that becomes practice for the decisions waiting for you later, about a parent, a partner, or yourself.",
    ),
    para(
      "That makes pet planning a real part of family preparedness. Decide while you are calm, write it down, and tell the people who will be standing there.",
    ),
    para(
      "Koryn's closing advice was the simplest thing she said all episode. Your pet is still here. If they are still here, celebrate them every single minute.",
    ),
    para("Preparing does not steal time from that. It protects it."),
    para(
      "The day will come when someone has to decide. Make sure that someone is not deciding for the first time.",
    ),
    heading("Listen and take the next step"),
    para(
      "Listen to the full conversation with Koryn Greenspan on the Death and Dying in the Digital Age podcast. You can learn more about her work, including her 21-day Elevate Your Grief workbook, at The Parted Paw.",
    ),
    para(
      "To identify gaps in your own legacy readiness, take ENDevo's free Peace of Mind Assessment.",
    ),
    para("Live fully, die ready."),
    para(
      "This article is educational and does not provide legal, medical, veterinary, or mental health advice. Consult qualified professionals about your situation.",
    ),
  ],
};

const POSTS = [article1, article2, article3, article4];

async function main() {
  console.log(
    DRY_RUN
      ? "DRY RUN — no documents will be created.\n"
      : "LIVE RUN — creating documents.\n",
  );

  for (const post of POSTS) {
    console.log(`→ ${post.title}`);
    console.log(`  slug: /blog/${post.slug.current}`);
    console.log(`  date: ${post.date}`);
    console.log(`  externalLink: ${post.externalLink}`);
    console.log(`  blocks: ${post.content.length}`);

    if (DRY_RUN) continue;

    const result = await client.createIfNotExists(post);
    console.log(`  ✅ created/exists: _id=${result._id}, _rev=${result._rev}`);
  }

  console.log("\nDone.");
  console.log("\n⚠ Reminders:");
  console.log(
    "  - No cover image set on any post yet (Studio will flag this; upload once generated).",
  );
  console.log(
    "  - Article 4's date (2026-09-26) is a PLACEHOLDER — confirm the real publish date and update in Studio.",
  );
  console.log(
    "  - Video links are plain text in the body for now (Sanity has no video block type yet).",
  );
}

main().catch((err) => {
  console.error("FAILED:", err.statusCode ?? "", err.message);
  process.exit(1);
});
