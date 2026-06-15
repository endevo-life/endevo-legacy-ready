import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const CaseStudyLifeInTransition = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <SEO
        title="Estate Planning After Divorce: Case Study With a Special Needs Child"
        description="Real case study: how a recently divorced administrative professional with a special needs child navigated estate planning, name changes, and a complete plan rebuild."
        canonical="/case-studies/life-in-transition"
      />
      <ResponsiveNavbar />

      {/* Hero */}
      <section className="bg-[#08123A] pt-32 pb-16 px-4">
        <div className="container max-w-3xl mx-auto">
          <Link
            to="/solution#case-studies"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Case Studies
          </Link>

          <p className="text-xs font-bold uppercase tracking-widest text-brand-orange mb-4">
            Case Study
          </p>

          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            The Realist With a List:
            <span className="block font-normal text-2xl md:text-3xl mt-2 text-white/70">
              How Life-Stage Complexity Stalls Even the Most Motivated Planners
            </span>
          </h1>

          <div className="flex flex-wrap gap-2 mt-6 text-sm text-white/50">
            <span>Employee Wellness Intervention Study</span>
            <span>·</span>
            <span>Administrative Professional</span>
            <span>·</span>
            <span>November 2025</span>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-1 bg-brand-orange" />

      {/* Body */}
      <article className="py-16 px-4">
        <div className="container max-w-7xl mx-auto">
          <div className="space-y-12 text-lg leading-relaxed text-foreground">
            {/* Participant Profile Table */}
            <section>
              <h2
                className="text-base font-bold text-[#08123A] uppercase tracking-widest mb-4"
                style={{ fontFamily: "'Open Sans', sans-serif" }}
              >
                Participant Profile
              </h2>
              <div className="w-full rounded-2xl border border-border overflow-hidden shadow-md">
                <table
                  className="w-full text-sm"
                  style={{ fontFamily: "'Open Sans', sans-serif" }}
                >
                  <tbody>
                    {[
                      { label: "Role", value: "Administrative Professional" },
                      { label: "Age Range", value: "Mid 40s" },
                      {
                        label: "Life Stage",
                        value:
                          "Recently divorced; pending legal name change; one child with special needs",
                      },
                      {
                        label: "Prior Status",
                        value:
                          "Will and trust in progress; blocked by name change documentation cascade",
                      },
                      {
                        label: "Planning Style",
                        value:
                          "Task-driven; resistant to emotional framing; prefers structured checklists",
                      },
                      { label: "Program Entry", value: "November 2025" },
                    ].map(({ label, value }, i) => (
                      <tr
                        key={label}
                        className={i % 2 === 0 ? "bg-muted/40" : "bg-white"}
                      >
                        <td className="px-5 py-4 text-xs font-bold uppercase tracking-widest text-brand-orange align-top whitespace-nowrap w-48 border-r border-border">
                          {label}
                        </td>
                        <td className="px-5 py-4 text-foreground align-top leading-relaxed">
                          {value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Background */}
            <section>
              <h2
                className="text-2xl font-bold text-[#08123A] mb-4"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Background
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Employee #2 entered the program with no resistance to the
                  subject of death. Her position was matter-of-fact: nobody gets
                  out of here alive, so the planning needs to get done. What she
                  needed was not emotional framing — she needed a task list, a
                  clear sequence, and a system.
                </p>
                <p>
                  Her engagement with the program was shaped by a concrete
                  logistical blocker the program helped her identify and name. A
                  recently completed divorce had created a cascading
                  documentation problem: she could not finalize her will and
                  trust, have documents notarized, or update accounts until her
                  legal name was consistent across all identification. The
                  program did not solve that sequencing problem. It surfaced it,
                  named it, and separated it from motivation.
                </p>
              </div>
            </section>

            {/* Key Findings */}
            <section>
              <h2
                className="text-2xl font-bold text-[#08123A] mb-8"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Key Findings
              </h2>
              <div className="space-y-8">
                {/* Finding 01 */}
                <div className="rounded-2xl border border-border p-6 space-y-3 shadow-md">
                  <p
                    className="text-xs font-bold uppercase tracking-widest text-brand-orange"
                    style={{ fontFamily: "'Open Sans', sans-serif" }}
                  >
                    Finding 01
                  </p>
                  <h3
                    className="text-xl font-bold text-[#08123A]"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    Life-stage transitions create planning blockers that look
                    like avoidance but are not.
                  </h3>
                  <p className="text-muted-foreground">
                    Divorce, name changes, remarriage, relocation, and new
                    dependents all create cascading documentation requirements
                    that can stall planning entirely. Employee #2 described her
                    situation as "the chicken or the egg" — she had the will in
                    progress, the intent, and the lawyer, but no framework for
                    sequencing tasks when prior steps were blocked.
                  </p>
                  <p className="text-muted-foreground">
                    For employers, this identifies a high-value design
                    requirement: a planning program that accommodates life-stage
                    transitions will serve a significantly larger portion of the
                    workforce than a generic checklist.
                  </p>
                  <blockquote className="border-l-4 border-brand-orange pl-4 italic text-muted-foreground mt-4">
                    "Give me a one or two pager: this is soup to nuts,
                    everything you need to do. Otherwise it's overwhelming — and
                    it's overwhelming enough already."
                    <span className="block not-italic text-sm mt-1">
                      — Employee #2
                    </span>
                  </blockquote>
                </div>

                {/* Finding 02 */}
                <div className="rounded-2xl border border-border p-6 space-y-3 shadow-md">
                  <p
                    className="text-xs font-bold uppercase tracking-widest text-brand-orange"
                    style={{ fontFamily: "'Open Sans', sans-serif" }}
                  >
                    Finding 02
                  </p>
                  <h3
                    className="text-xl font-bold text-[#08123A]"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    Digital access planning activates even the most
                    task-oriented employees.
                  </h3>
                  <p className="text-muted-foreground">
                    Employee #2 was not emotionally avoidant — she was
                    logistically blocked. Yet she had the same digital gap as
                    every other participant in the cohort: she had not addressed
                    how her family would access her phone, accounts, or digital
                    records in an emergency. She completed the legacy contact
                    setup immediately upon learning the feature existed.
                  </p>
                  <blockquote className="border-l-4 border-brand-orange pl-4 italic text-muted-foreground mt-4">
                    "I love the idea of having it all in a file folder, labeled,
                    in the safe."
                    <span className="block not-italic text-sm mt-1">
                      — Employee #2
                    </span>
                  </blockquote>
                </div>

                {/* Finding 03 */}
                <div className="rounded-2xl border border-border p-6 space-y-3 shadow-md">
                  <p
                    className="text-xs font-bold uppercase tracking-widest text-brand-orange"
                    style={{ fontFamily: "'Open Sans', sans-serif" }}
                  >
                    Finding 03
                  </p>
                  <h3
                    className="text-xl font-bold text-[#08123A]"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    ENDevo surfaces planning categories employees do not know
                    they need.
                  </h3>
                  <p className="text-muted-foreground">
                    The most significant outcome for Employee #2 was not a
                    completed task. It was new awareness. Through the program,
                    she encountered the concept of a special needs trust for the
                    first time — directly relevant to her child with special
                    needs. Standard estate planning conversations, even with
                    attorneys, rarely surface this category unprompted. ENDevo's
                    structured framework did.
                  </p>
                  <blockquote className="border-l-4 border-brand-orange pl-4 italic text-muted-foreground mt-4">
                    "It's like, what came first, the chicken or the egg — I
                    don't have a single document with my new name yet."
                    <span className="block not-italic text-sm mt-1">
                      — Employee #2, on name change as a sequencing blocker
                    </span>
                  </blockquote>
                </div>
              </div>
            </section>

            {/* Outcomes */}
            <section>
              <h2
                className="text-2xl font-bold text-[#08123A] mb-6"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Outcomes
              </h2>
              <ul className="space-y-3">
                {[
                  "Legacy contact setup completed immediately upon learning the feature existed",
                  "Special needs trust identified as a required planning category for the first time",
                  "Name change confirmed as a sequencing blocker, not a motivation barrier",
                  "Will and trust in progress; clear next steps established pending name change resolution",
                  "Document organization system introduced and adopted",
                  "Program delivery feedback provided directly to ENDevo for format improvements",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-brand-orange flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Employer Takeaway */}
            <section className="rounded-2xl bg-[#08123A] p-8 space-y-4">
              <h2
                className="text-2xl font-bold text-white"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Employer Takeaway
              </h2>
              <p className="text-white/80">
                Employee #2 is the employee most likely to fall through the gaps
                of a standard wellness program: task-oriented, genuinely
                motivated, but stalled by life complexity a generic checklist
                does not address. She is also the employee most likely to
                complete planning quickly once the right structure is in place.
              </p>
              <p className="text-white/80">
                For HR and benefits leaders, her case makes the argument for a
                planning benefit that accommodates life-stage variability.
                Employees in transition are among the most planning-vulnerable.
                A structured program that meets them at their actual starting
                point converts intent into action faster than any awareness
                campaign.
              </p>
            </section>
          </div>
        </div>
      </article>

      {/* Back link */}
      <div className="pb-16 px-4">
        <div className="container max-w-7xl mx-auto">
          <Link
            to="/solution#case-studies"
            className="inline-flex items-center gap-2 text-brand-orange hover:underline font-semibold text-sm"
            style={{ fontFamily: "'Open Sans', sans-serif" }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Case Studies
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CaseStudyLifeInTransition;
