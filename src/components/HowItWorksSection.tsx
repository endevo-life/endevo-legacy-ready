import { Link } from "react-router-dom";
import { ClipboardCheck, ListChecks, ShieldCheck } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

/**
 * The homepage's "how does it work?" answer, right under the hero.
 *
 * Three steps an HR buyer can repeat to a colleague. No step claims a time
 * ("10 minutes") the product has not measured; the third step leads with
 * privacy because "will HR see my answers?" is the first employee objection.
 */
const STEPS = [
  {
    icon: ClipboardCheck,
    title: "Employees take a short assessment",
    body: "A few questions show where each person stands across their legal, financial, digital and medical affairs.",
  },
  {
    icon: ListChecks,
    title: "Each gets their own step-by-step plan",
    body: "Their My Final Playbook lists what to put in order, in what order, and what to gather before seeing an attorney. ENDevo does not draft legal documents.",
  },
  {
    icon: ShieldCheck,
    title: "You see participation, never answers",
    body: "Team-level reports show participation, topics and readiness over time. No one at work sees what any individual wrote.",
  },
];

const HowItWorksSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section ref={elementRef} className="py-20 bg-muted/30">
      <div className="container max-w-6xl mx-auto px-4">
        <h2
          className={`text-2xl md:text-3xl lg:text-4xl font-bold font-playfair text-center mb-3 text-foreground transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          How <span className="text-brand-orange">ENDevo</span> works
        </h2>
        <p className="text-center text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-12">
          Simple for employees. Private by design. Measurable for you.
        </p>

        <ol className="grid md:grid-cols-3 gap-6">
          {STEPS.map(({ icon: Icon, title, body }, i) => (
            <li
              key={title}
              className={`flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: `${150 + i * 120}ms` }}
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-orange-dark">
                  Step {i + 1}
                </span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3 leading-snug">
                {title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {body}
              </p>
            </li>
          ))}
        </ol>

        <p className="text-center mt-10">
          <Link
            to="/program"
            className="text-brand-orange-dark font-semibold underline underline-offset-4 hover:no-underline"
          >
            See the full program &rarr;
          </Link>
        </p>
      </div>
    </section>
  );
};

export default HowItWorksSection;
