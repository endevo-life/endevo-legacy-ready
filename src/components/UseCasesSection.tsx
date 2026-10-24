import { HeartHandshake, ClipboardList, BarChart3 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

/**
 * The homepage's "why should my company care?" answer: the cost of doing
 * nothing (STATS, formerly HiddenCostStatsSection), then the three situations
 * an HR or EAP buyer already recognizes, framed as their problem first and
 * ENDevo's answer second. Kept to three on purpose: the homepage names the use
 * cases that win first customers, not everything the platform can do.
 */
const STATS = [
  {
    value: "30%",
    label:
      "productivity drop for months among employees dealing with personal loss",
  },
  {
    value: "$1,900",
    label:
      "lost per employee each year to disorganization and crisis-driven leave",
  },
  {
    value: "25%",
    label: "of workers face a major life event each year",
  },
];

const USE_CASES = [
  {
    icon: HeartHandshake,
    title: "When an employee's family faces a death or serious illness",
    problem:
      "Weeks of lost focus, unplanned leave, and managers left improvising.",
    answer:
      "Employees already have a plan, so a family crisis disrupts less work.",
  },
  {
    icon: ClipboardList,
    title: "Fill the gap in your benefits",
    problem:
      "Life insurance and the EAP exist, but no one helps with wills, beneficiaries, passwords or documents.",
    answer:
      "A guided assessment gives each employee a personal, step-by-step Final Playbook.",
  },
  {
    icon: BarChart3,
    title: "Prove the benefit works",
    problem: "Wellbeing spend is hard to justify at renewal.",
    answer:
      "Before-and-after readiness scores and team-level reports, with no individual answers exposed.",
  },
];

const UseCasesSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section ref={elementRef} className="py-20 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <h2
          className={`text-2xl md:text-3xl lg:text-4xl font-bold font-playfair text-center mb-3 text-foreground transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          Why employers add <span className="text-brand-orange">ENDevo</span>
        </h2>
        <p className="text-center text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10">
          Major life events don&apos;t pause work. Start with one team, measure
          the change, then expand.
        </p>

        <dl className="grid sm:grid-cols-3 gap-6 mb-12 text-center">
          {STATS.map(({ value, label }) => (
            <div key={value}>
              <dt className="text-4xl md:text-5xl font-bold font-playfair text-foreground">
                {value}
              </dt>
              <dd className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-[16rem] mx-auto">
                {label}
              </dd>
            </div>
          ))}
        </dl>

        <div className="grid md:grid-cols-3 gap-6">
          {USE_CASES.map(({ icon: Icon, title, problem, answer }, i) => (
            <article
              key={title}
              className={`flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: `${150 + i * 120}ms` }}
            >
              <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="text-lg font-bold text-foreground mb-4 leading-snug">
                {title}
              </h3>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                The problem
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {problem}
              </p>
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-orange-dark mb-1">
                With ENDevo
              </p>
              <p className="text-sm text-foreground leading-relaxed">
                {answer}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
