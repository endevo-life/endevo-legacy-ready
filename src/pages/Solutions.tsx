import { Link } from "react-router-dom";
import { ArrowRight, Check, Lock, Play } from "lucide-react";
import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";

/**
 * The Solutions fork at /solutions.
 *
 * Two buyers, one product, and both offers priced off the number $100 — which
 * is exactly why they cannot share a page without a hard visual break. An
 * employer seeing a consumer price assumes we are not built for them; an
 * individual seeing an implementation fee leaves. So the fork is the whole
 * page: two cards above the fold, nothing else competing, each routing to the
 * one action that buyer can actually take.
 *
 * B2B price is deliberately absent (decided: keep room to negotiate per
 * employer). B2C price is present but understated — it is a strength against a
 * $2,000 attorney, but the headline sells the outcome, not the receipt.
 */

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
            text: "My Final Playbook is $100 once, which includes a year of access. There is no subscription. You can start the assessment and see your plan before you pay.",
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
        canonical="/solutions"
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
        <section className="px-4 -mt-8 pb-20">
          <div className="container max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            {/* B2C */}
            <div className="bg-card rounded-xl border border-border shadow-lg overflow-hidden flex flex-col">
              <div className="bg-brand-orange/10 border-b-2 border-brand-orange px-6 py-4">
                <span className="text-xs font-bold tracking-widest uppercase text-brand-orange-dark">
                  For you and your family
                </span>
                <h2 className="text-2xl font-bold mt-1">My Final Playbook</h2>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <p className="text-muted-foreground mb-5">
                  Answer questions about your actual situation. Get a
                  personalised plan, and walk away with a finished Playbook that
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
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold"
                >
                  <a href="#get-invite">
                    Get your invite
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </a>
                </Button>
                <p className="text-xs text-muted-foreground text-center mt-3">
                  Start free · $100 when you are ready
                </p>
              </div>
            </div>

            {/* B2B */}
            <div className="bg-card rounded-xl border border-border shadow-lg overflow-hidden flex flex-col">
              <div className="bg-brand-navy/5 border-b-2 border-brand-navy px-6 py-4">
                <span className="text-xs font-bold tracking-widest uppercase text-brand-navy">
                  For organisations &amp; advisors
                </span>
                <h2 className="text-2xl font-bold mt-1">Legacy Readiness OS</h2>
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
                    "Every person gets their own plan",
                    "You see participation and topics, never what anyone wrote",
                    "Advisors: bring it to your clients under your own brand",
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
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-brand-navy hover:bg-brand-navy-light text-white font-semibold"
                >
                  <Link to="/contact">
                    Book a call with our team
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
                <p className="text-xs text-muted-foreground text-center mt-3">
                  We onboard a small number of teams at a time
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Promotional video ---------- */}
        <section className="bg-muted/30 py-20 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-balance">
              What is My Final Playbook?
            </h2>
            <p className="text-muted-foreground mb-8">
              Two minutes on what you get and how it works.
            </p>
            <div className="relative rounded-xl overflow-hidden shadow-xl bg-brand-navy aspect-video flex items-center justify-center">
              {/* Replace with the finished promo embed. */}
              <div className="text-center text-white/70 px-6">
                <Play className="h-12 w-12 mx-auto mb-3" aria-hidden="true" />
                <p className="text-sm">Promotional video — coming soon</p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- How it works ---------- */}
        <section className="py-20 px-4">
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
                title="Get your invite to My Final Playbook"
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
