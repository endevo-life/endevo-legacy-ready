import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import Footer from "@/components/Footer";

const CaseStudyMedicalCoverage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
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
            As Important as Medical Coverage:
            <span className="block font-normal text-2xl md:text-3xl mt-2 text-white/70">
              How One Employee's Health Crisis Revealed the Missing Benefit
            </span>
          </h1>

          <div className="flex flex-wrap gap-2 mt-6 text-sm text-white/50">
            <span>Employee Wellness Intervention Study</span>
            <span>·</span>
            <span>Healthcare Industry Professional</span>
            <span>·</span>
            <span>Fortune 100 Company</span>
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
                <table className="w-full text-sm" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                  <tbody>
                    {[
                      { label: "Role", value: "Healthcare Industry Professional" },
                      { label: "Age Range", value: "Mid 50s" },
                      { label: "Life Stage", value: "Married; husband recently diagnosed with prostate cancer; both parents deceased" },
                      { label: "Health History", value: "Multiple medical events; pacemaker implanted at age 50; cancer history" },
                      { label: "Prior Status", value: "Existing will; documents disorganized; safe combination unknown to participant" },
                      { label: "Motivation", value: "Family burden reduction; deferred due to cost and competing priorities" },
                    ].map(({ label, value }, i) => (
                      <tr key={label} className={i % 2 === 0 ? "bg-muted/40" : "bg-white"}>
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
                  Employee #3 did not enter the program without context. She had experienced significant medical issues of her own, including a pacemaker implant at 50. She had lost both parents and witnessed firsthand the weight an unprepared death places on surviving family members. When her husband received a prostate cancer diagnosis, the urgency she had deferred for years became impossible to ignore.
                </p>
                <p>
                  She had documents. She had a will. What she did not have was a system. Her documents were disorganized. Her husband managed the household safe — and she did not know the combination. She had, without naming it, delegated her own planning to someone whose continued availability she had assumed. That assumption was the gap.
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
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-orange" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                    Finding 01
                  </p>
                  <h3
                    className="text-xl font-bold text-[#08123A]"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    Spousal dependency creates a hidden planning liability in long-term partnerships.
                  </h3>
                  <p className="text-muted-foreground">
                    One of the most significant findings from this session was not a missing document — it was a structural vulnerability. Employee #3 had assigned responsibility for household financial and estate management to her husband and had never taken ownership of that information herself. His cancer diagnosis forced her to confront what would happen if that changed.
                  </p>
                  <p className="text-muted-foreground">
                    She located documents she had not reviewed, learned the safe combination for the first time, and began taking direct ownership of information she had previously delegated entirely. This is a planning gap that disproportionately affects one partner in long-term marriages and is almost never surfaced by standard financial or legal planning processes.
                  </p>
                  <blockquote className="border-l-4 border-brand-orange pl-4 italic text-muted-foreground mt-4">
                    "I never bothered to learn the combination. I know it now. Before, I knew nothing."
                    <span className="block not-italic text-sm mt-1">— Employee #3</span>
                  </blockquote>
                </div>

                {/* Finding 02 */}
                <div className="rounded-2xl border border-border p-6 space-y-3 shadow-md">
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-orange" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                    Finding 02
                  </p>
                  <h3
                    className="text-xl font-bold text-[#08123A]"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    Employees facing serious illness rate end-of-life planning on par with medical coverage.
                  </h3>
                  <p className="text-muted-foreground">
                    When asked directly how this program compares to other employer benefits, Employee #3 placed it on the same tier as medical coverage — unprompted, without qualification. Her logic was direct: medical benefits keep you alive; end-of-life planning benefits ensure your family is taken care of when medicine can no longer. She made the same comparison to short-term disability — a benefit most employees ignore until they need it, at which point it becomes critical.
                  </p>
                  <blockquote className="border-l-4 border-brand-orange pl-4 italic text-muted-foreground mt-4">
                    "I see this as just as important as my medical coverage. Medical issues eventually lead to you not being here anymore. That's reality."
                    <span className="block not-italic text-sm mt-1">— Employee #3, unprompted when asked to compare this benefit to others</span>
                  </blockquote>
                </div>

                {/* Finding 03 */}
                <div className="rounded-2xl border border-border p-6 space-y-3 shadow-md">
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-orange" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                    Finding 03
                  </p>
                  <h3
                    className="text-xl font-bold text-[#08123A]"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    Unpreparedness has a direct, named productivity cost.
                  </h3>
                  <p className="text-muted-foreground">
                    When asked how a life event without a plan in place would affect her focus at work, Employee #3 answered immediately: "I would be in pieces." Her role requires sustained critical thinking and full engagement — not compatible with managing the chaos of an unplanned death or medical crisis. She did not speculate. She had lived through her parents' deaths and her own health crises. She knew what unpreparedness costs and said it in the language of workplace performance.
                  </p>
                  <blockquote className="border-l-4 border-brand-orange pl-4 italic text-muted-foreground mt-4">
                    "If you can't focus, you won't be able to do a good job. And if you don't have those things in place and you're worrying, it's just not going to work."
                    <span className="block not-italic text-sm mt-1">— Employee #3</span>
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
                  "Safe combination learned and documented for the first time",
                  "All personal documents located, organized, and centralized",
                  "Trust identified as the appropriate instrument to replace existing basic will",
                  "Living will completed; participant now carries a copy to hospital appointments",
                  "Legacy contact setup completed",
                  "Husband engaged in planning; avoidance shifted to acceptance",
                  "Program shared with adult daughter, age 29, who expressed desire for access at her employer",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground">
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
                Employee #3 is the employee already managing a health crisis without a plan in place. She is not rare. Employees with chronic illness, caregiving responsibilities, or a family member in active treatment are present in every workforce.
              </p>
              <p className="text-white/80">
                Her benefit parity finding is the strongest enterprise sales signal in this cohort. When an employee with a pacemaker and a cancer history says unprompted that end-of-life planning belongs on the same tier as medical coverage, that is a market signal. The employer that offers this benefit first is not offering a wellness add-on. It is closing a gap every employee will eventually face.
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

export default CaseStudyMedicalCoverage;
