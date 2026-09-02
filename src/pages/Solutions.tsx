import { Link } from "react-router-dom";
import { ArrowRight, Check, Lock } from "lucide-react";
import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

/**
 * The Solutions fork at /start-here.
 *
 * One platform, two buyers, and they cannot share a page without a hard visual
 * break: an employer seeing a consumer price assumes we are not built for them,
 * and an individual seeing an implementation fee leaves. So the fork is the
 * whole page — two cards above the fold, nothing else competing, each routing
 * to the one action that buyer can actually take.
 *
 * The B2B price is deliberately absent, to keep room to negotiate per employer,
 * and that card carries what the tier actually adds over the individual one:
 * ongoing support, the video library, and 1:1 sessions. The individual price is
 * shown against its anchor — see FOUNDING_OFFER below.
 */

/**
 * Founding-member offer.
 *
 * $500 is the price; $100 is a reason to act now. Stated willingness-to-pay
 * scattered from $50 to $500, which says people were pricing against whatever
 * they last bought — an app at the low end, an attorney at the high end. The
 * anchor is what resolves that: beside $500 this is clearly a plan, not a
 * checklist app, and $100 reads as a decision rather than a discount.
 *
 * BOTH LIMITS MUST BE REAL. If someone finds $100 still here in March, the
 * $500 was never true and neither is anything else we say — and this is a
 * buyer already deciding who to trust with the hardest paperwork of their life.
 * So: stop at 200, and honour the date. Whichever lands first ends it.
 *
 * No live remaining-count is shown. A hardcoded number goes stale and a stale
 * count is worse than none; the real figure lives in the CRM.
 *
 * TO CLOSE THE OFFER: set FOUNDING_OFFER.active to false. The card falls back
 * to the full price and the banner disappears — no other edits needed.
 */
const FOUNDING_OFFER = {
  // OFF: the founding-member terms are an internal decision, not public copy.
  // The seat count and deadline are commitments we would then have to honour
  // in public, and the offer is not being announced that way. With this false
  // the page simply shows the full price and no countdown, and every string
  // below falls back automatically.
  active: false,
  fullPrice: "$500",
  price: "$100",
  seats: 200,
  /** Machine-readable for schema.org; keep in step with endsLabel. */
  endsISO: "2027-01-15",
  endsLabel: "January 15",
};

/**
 * The promo video ships with the site so it is live everywhere from day one;
 * VITE_PROMO_VIDEO_URL overrides it once the file gets a CDN/YouTube home.
 */
const PROMO_VIDEO_URL =
  (import.meta.env.VITE_PROMO_VIDEO_URL as string | undefined) ||
  "/videos/promo-v11.mp4";

/**
 * The product checkout. Unset while payment is still being integrated on the
 * app side — the card's button stays "Get your invite" and feeds the
 * waitlist. The moment checkout is live, set VITE_CHECKOUT_URL in Vercel and
 * the button becomes "Start now" pointing at it. Going live is an env var,
 * not a deploy.
 */
const CHECKOUT_URL = import.meta.env.VITE_CHECKOUT_URL as string | undefined;

/** The five steps, in the visitor's words rather than the product's. */
const STEPS = [
  {
    title: "Tell us about your life",
    body: "A short set of questions about your actual situation — not a checklist built for everyone.",
  },
  {
    title: "Get a plan built for it",
    body: "Milestones across the legal, financial, digital, health, and family parts of your life.",
  },
  {
    title: "Work through it at your pace",
    body: "Plain-English guidance at every step. Most people take a few sittings, not one.",
  },
  {
    title: "Set your own date",
    body: "Pick a deadline that fits your life — and move it without losing your place.",
  },
  {
    title: "Come back and revise",
    body: "A move, a diagnosis, a new grandchild. Your plan changes when your life does.",
  },
];

const Solutions = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "ENDevo Legacy Readiness",
      serviceType: "Legacy and end-of-life readiness planning",
      provider: {
        "@type": "Organization",
        name: "ENDevo",
        url: "https://www.endevo.life",
      },
      areaServed: "US",
      audience: [
        { "@type": "Audience", audienceType: "Employers and HR teams" },
        { "@type": "Audience", audienceType: "Individuals and families" },
      ],
      // priceValidUntil carries the same date the page shows, so the offer we
      // publish to search engines expires exactly when the real one does.
      ...(FOUNDING_OFFER.active
        ? {
            offers: {
              "@type": "Offer",
              name: "Founding member pricing",
              price: FOUNDING_OFFER.price.replace("$", ""),
              priceCurrency: "USD",
              priceValidUntil: FOUNDING_OFFER.endsISO,
              availability: "https://schema.org/LimitedAvailability",
              url: "https://www.endevo.life/start-here",
            },
          }
        : {}),
    },
    // Answer-engine targets: these are the questions people actually type, and
    // the answers are what an AI assistant will quote back when asked.
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is legacy readiness?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Legacy readiness is knowing what you need to put in order — legally, financially, digitally, and medically — and in what order to do it. ENDevo turns that into a structured plan with milestones and a date, rather than a checklist you never finish.",
          },
        },
        {
          "@type": "Question",
          name: "How much does ENDevo cost for an individual?",
          acceptedAnswer: {
            "@type": "Answer",
            text: `Legacy Readiness OS for individuals is ${FOUNDING_OFFER.fullPrice} for a year of access, with no subscription. You can start the assessment and see your plan before you pay.`,
          },
        },
        {
          "@type": "Question",
          name: "How is this different from estate planning with a lawyer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ENDevo does not draft legal documents. It tells you which documents you need, what order to handle them in, and what to gather before you sit down with an attorney — so that conversation is shorter and costs less.",
          },
        },
        {
          "@type": "Question",
          name: "Can employers offer legacy readiness as a benefit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Legacy Readiness OS gives an employer a private tenant where every employee builds their own plan. The employer sees participation rates and topics, never what any individual wrote.",
          },
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Legacy Readiness for Teams and Individuals"
        description="Know exactly what you need to put in order, and in what order to do it. A guided legacy readiness plan for employers and for individuals — start free."
        canonical="/start-here"
        breadcrumbs={[{ name: "Start Here", path: "/start-here" }]}
        jsonLd={jsonLd}
      />
      <ResponsiveNavbar />

      <main>
        {/* ---------- Hero: the thesis, then immediately the fork ---------- */}
        <section className="bg-brand-navy text-white pt-32 pb-16 px-4">
          <div className="container max-w-5xl mx-auto text-center">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Know exactly what you need to do, and in what order.
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Most people know they should get their affairs in order. Almost
              nobody knows where to start. We ask about your life, then hand you
              a plan built for it.
            </p>
          </div>
        </section>

        {/* ---------- The fork ---------- */}
        <section id="pricing" className="px-4 -mt-8 pb-20 scroll-mt-24">
          {FOUNDING_OFFER.active && (
            <div className="container max-w-5xl mx-auto mb-6">
              <p className="bg-brand-orange text-white text-center text-sm font-semibold rounded-lg px-5 py-3 shadow-lg">
                Founding member pricing — {FOUNDING_OFFER.price} instead of{" "}
                {FOUNDING_OFFER.fullPrice} for the first {FOUNDING_OFFER.seats}{" "}
                people, through {FOUNDING_OFFER.endsLabel}.
              </p>
            </div>
          )}
          <div className="container max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            {/* B2C */}
            <div className="bg-card rounded-xl border border-border shadow-lg overflow-hidden flex flex-col">
              <div className="bg-brand-orange/10 border-b-2 border-brand-orange px-6 py-4">
                <span className="text-xs font-bold tracking-widest uppercase text-brand-orange-dark">
                  Legacy Readiness OS
                </span>
                <h2 className="text-2xl font-bold mt-1">For Individuals</h2>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <p className="text-muted-foreground mb-5">
                  Answer questions about your actual situation. Get a
                  personalized plan, and walk away with a finished Playbook that
                  is yours to keep.
                </p>
                <ul className="space-y-2.5 mb-6 flex-1">
                  {[
                    "A plan built around your life, not a template",
                    "Work through it at your own pace",
                    "Your finished Playbook, yours to keep",
                    "No employer needed, no sales call",
                  ].map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm">
                      <Check
                        className="h-4 w-4 text-brand-orange shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {/*
                  The anchor does the work here: $500 struck through tells the
                  visitor what they are getting before the $100 tells them what
                  they pay. Without it, $100 sets the category — and the
                  category it sets is "checklist app", which we lose on
                  features. The strikethrough is marked up with <s> so it is
                  announced as superseded rather than read as the live price.
                */}
                {FOUNDING_OFFER.active && (
                  <div className="mb-4 text-center">
                    <div className="flex items-baseline justify-center gap-2.5">
                      <s className="text-lg text-muted-foreground/70 tabular-nums">
                        {FOUNDING_OFFER.fullPrice}
                      </s>
                      <span className="text-3xl font-bold text-brand-orange tabular-nums">
                        {FOUNDING_OFFER.price}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        for a year
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-brand-orange-dark mt-1.5 uppercase tracking-wide">
                      Founding member price
                    </p>
                  </div>
                )}
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold"
                >
                  {CHECKOUT_URL ? (
                    <a href={CHECKOUT_URL}>
                      Start now —{" "}
                      {FOUNDING_OFFER.active
                        ? FOUNDING_OFFER.price
                        : FOUNDING_OFFER.fullPrice}
                      <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </a>
                  ) : (
                    <a href="#get-invite">
                      Get your invite
                      <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </a>
                  )}
                </Button>
                <p className="text-xs text-muted-foreground text-center mt-3">
                  Start free · {FOUNDING_OFFER.fullPrice} when you are ready
                </p>

                {/*
                  Deliberately no link to the agentic checklist app here. It is
                  the mobile product, and it is unlaunched and untested — it was
                  built in four days and has never been through real use. Two
                  reasons to keep it off this page:

                  1. Sending web traffic to an untested flow risks the thing our
                     own beta notes warn about: a bad first run does not lose a
                     tester, it loses the advisor who sent them and the referral
                     network they sit inside.
                  2. A checklist satisfies the appetite. Someone who gets a list
                     feels handled and never buys the plan that would walk them
                     through it — so offering it beside the Playbook spends our
                     cheapest lead to kill our best sale.

                  The app is discovered in the app stores, where someone looking
                  for a mobile tool is already in a different mindset. The web
                  page sells one thing.
                */}
              </div>
            </div>

            {/* B2B */}
            <div className="bg-card rounded-xl border border-border shadow-lg overflow-hidden flex flex-col">
              <div className="bg-brand-navy/5 border-b-2 border-brand-navy px-6 py-4">
                <span className="text-xs font-bold tracking-widest uppercase text-brand-navy">
                  Legacy Readiness OS
                </span>
                <h2 className="text-2xl font-bold mt-1">For Enterprise</h2>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <p className="text-muted-foreground mb-5">
                  Your people carry this alone, and it shows up as absence and
                  distraction long before anyone talks about it. Give them a
                  structured plan and a private place to work through it.
                </p>
                <ul className="space-y-2.5 mb-6 flex-1">
                  {[
                    "Your own private, isolated workspace",
                    "Every person gets their own guided plan",
                    "Ongoing support as their circumstances change",
                    "A video library for your whole team",
                    "1:1 sessions with our team",
                    "You see participation and topics, never what anyone wrote",
                  ].map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm">
                      <Check
                        className="h-4 w-4 text-brand-navy shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {/*
                  Opens the booking calendar directly rather than routing
                  through the contact form. A booked meeting is its own
                  notification — invite, confirmation, reminders — and the
                  Appointment Booked automation applies the product-demo tag.
                */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      size="lg"
                      className="w-full bg-brand-navy hover:bg-brand-navy-light text-white font-semibold"
                    >
                      Book a call with our team
                      <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl h-[80vh] p-2">
                    <iframe
                      src="https://link.endevo.life/widget/booking/HUYkq6QZs0fI7AMtt6qH"
                      className="w-full h-full rounded-lg"
                      style={{ border: "none" }}
                      title="Book a call with the ENDevo team"
                    />
                  </DialogContent>
                </Dialog>
                <p className="text-xs text-muted-foreground text-center mt-3">
                  We onboard a small number of teams at a time
                </p>
                {/* Advisors are a third buyer with their own ask: they bring
                    the platform to clients they already serve. A quiet line
                    rather than a third card keeps the fork at two doors. */}
                <p className="text-sm text-muted-foreground text-center mt-4 pt-4 border-t border-border">
                  Advisor or planner?{" "}
                  <Link
                    to="/for-service-providers"
                    className="text-brand-navy font-medium underline underline-offset-2 hover:opacity-80"
                  >
                    Request access for your clients
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Promotional video ---------- */}
        <section id="video" className="bg-muted/30 py-20 px-4 scroll-mt-20">
          <div className="container max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-balance">
              What is Legacy Readiness OS?
            </h2>
            <p className="text-muted-foreground mb-8">
              Two minutes on what you get and how it works.
            </p>
            {/*
              The video URL comes from VITE_PROMO_VIDEO_URL so the file never
              enters the repo. Locally it points at a gitignored copy for
              demos; in production it stays unset — and the slot shows a calm
              placeholder — until the file is hosted (GHL media library or
              YouTube) and the variable is set in Vercel.
            */}
            {PROMO_VIDEO_URL ? (
              <video
                controls
                preload="metadata"
                playsInline
                className="w-full rounded-xl shadow-xl bg-brand-navy aspect-video"
                aria-label="What is Legacy Readiness OS? A short introduction"
              >
                <source src={PROMO_VIDEO_URL} type="video/mp4" />
                Your browser does not support embedded video.
              </video>
            ) : (
              <div className="relative rounded-xl overflow-hidden shadow-xl bg-brand-navy aspect-video flex items-center justify-center">
                <p className="text-sm text-white/70 px-6">Video coming soon</p>
              </div>
            )}
          </div>
        </section>

        {/* ---------- How it works ---------- */}
        <section id="how-it-works" className="py-20 px-4 scroll-mt-20">
          <div className="container max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-3 text-balance">
                How it works
              </h2>
              <p className="text-muted-foreground">
                A plan with an owner, a date, and room to change. That is the
                difference between a checklist and a project that actually
                finishes.
              </p>
            </div>
            <ol className="space-y-0">
              {STEPS.map((step, i) => (
                <li
                  key={step.title}
                  className="grid grid-cols-[2.5rem_1fr] gap-5 py-5 border-b border-border last:border-b-0"
                >
                  <span
                    className="text-sm font-bold text-brand-orange bg-brand-orange/10 rounded-lg h-9 flex items-center justify-center tabular-nums"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ---------- Waitlist capture ---------- */}
        <section
          id="get-invite"
          className="bg-brand-navy text-white py-20 px-4 scroll-mt-20"
        >
          <div className="container max-w-2xl mx-auto text-center">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 text-balance"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Get your invite
            </h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">
              Leave your name and email and we will send you an invitation to
              start your Playbook. We are opening access to a small number of
              people at a time.
            </p>
            <div className="bg-card rounded-xl overflow-hidden shadow-2xl text-left">
              <iframe
                src="https://link.endevo.life/widget/form/klbP5ZsVH8lpWmnctFP6"
                style={{
                  width: "100%",
                  height: "679px",
                  border: "none",
                  borderRadius: "3px",
                }}
                id="inline-solutions-waitlist"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-activation-type="alwaysActivated"
                data-deactivation-type="neverDeactivate"
                data-form-name="Solutions - Get Your Invite"
                data-height="679"
                data-layout-iframe-id="inline-solutions-waitlist"
                data-form-id="klbP5ZsVH8lpWmnctFP6"
                title="Get your invite to Legacy Readiness OS"
              />
            </div>
            <p className="text-sm text-white/60 mt-6 flex items-center justify-center gap-2">
              <Lock className="h-3.5 w-3.5" aria-hidden="true" />
              We never sell your details, and you can leave at any time.
            </p>
          </div>
        </section>

        {/* ---------- Privacy ---------- */}
        <section className="py-16 px-4">
          <div className="container max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-3">
              Your plan is yours alone
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We do not store your documents. If you ask us to email you a copy,
              it is held encrypted for up to three days so we can deliver it,
              then deleted automatically. If your employer brought you here,
              they see that you are taking part — never a word of what you
              wrote.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Solutions;
