import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const CaseStudyAlreadyCovered = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <SEO
        title="When to Update Your Estate Plan: A Case Study"
        description="She thought she was covered — a 12-year-old irrevocable trust, an out-of-state move, and the planning gap she didn't realize she had."
        canonical="/case-studies/already-covered"
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
            The "Already Covered" Employee:
            <span className="block font-normal text-2xl md:text-3xl mt-2 text-white/70">
              Why Prior Planning Is Not the Same as Current Planning
            </span>
          </h1>

          <div className="flex flex-wrap gap-2 mt-6 text-sm text-white/50">
            <span>Employee Wellness Intervention Study</span>
            <span>·</span>
            <span>Insurance Industry Professional</span>
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
                      { label: "Role", value: "Insurance Industry Professional" },
                      { label: "Age Range", value: "Late 50s" },
                      { label: "Life Stage", value: "Relocated from Connecticut to Delaware; children in other states" },
                      { label: "Prior Status", value: "Irrevocable trust established 12 years prior; estate documents not updated since relocation" },
                      { label: "Background", value: "Former corporate insurance employee; attended employer estate planning session 10+ years ago" },
                      { label: "Orientation", value: "Believed affairs were in order; acknowledged procrastinating on updates" },
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
                  Employee #4 arrived at this program with more prior planning experience than most. She had worked in a corporate insurance environment, attended employer-sponsored estate planning education, and established an irrevocable trust following that experience. She had watched her own parents go through probate unprepared and resolved to avoid the same outcome. On paper, she had her affairs in order.
                </p>
                <p>
                  In practice, she had not reviewed her documents in 12 years. She had relocated from Connecticut to Delaware and had not updated her estate plan to reflect the new state's laws. Her beneficiary designations had not been reviewed. And she had given no thought to the digital dimension of her estate — her accounts, passwords, and phone were inaccessible to her family in the format she had organized them.
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
                    Prior planning creates false confidence that masks compounding gaps.
                  </h3>
                  <p className="text-muted-foreground">
                    The most significant risk Employee #4 represents is not that she never planned. It is that she planned once and stopped. Twelve years of life changes — a cross-state relocation, shifting family circumstances, an entirely new digital landscape — had accumulated on top of a foundation she assumed was still solid. It was not.
                  </p>
                  <p className="text-muted-foreground">
                    This pattern — planning as a one-time event rather than an ongoing practice — is the most common form of unpreparedness in experienced adult employees. It does not show up in HR benefit utilization data because it does not present as a need. ENDevo's structured framework surfaces what has accumulated in the gap.
                  </p>
                  <blockquote className="border-l-4 border-brand-orange pl-4 italic text-muted-foreground mt-4">
                    "The digital world is so different today — even from 12 years ago. My family couldn't guess my passwords. They wouldn't even know where the key to the safe is."
                    <span className="block not-italic text-sm mt-1">— Employee #4</span>
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
                    State relocation is a silent estate planning disruptor.
                  </h3>
                  <p className="text-muted-foreground">
                    Employee #4 had not considered that moving from Connecticut to Delaware created legal exposure in her estate documents. State-specific probate laws, trust requirements, and advance directive formats vary significantly. Her 12-year-old documents were drafted under a different state's legal framework. Without the ENDevo program prompting a full document review, this gap would have remained invisible until it created a problem for her family.
                  </p>
                  <p className="text-muted-foreground">
                    For employers with geographically mobile workforces — which describes most Fortune 100 companies — this finding is directly relevant. Employee relocation is a standard workforce event. Estate plan currency following relocation is not.
                  </p>
                  <blockquote className="border-l-4 border-brand-orange pl-4 italic text-muted-foreground mt-4">
                    "After 12 years, I've moved from Connecticut to Delaware. There are things I need to change in my estate plan. I've just been procrastinating."
                    <span className="block not-italic text-sm mt-1">— Employee #4</span>
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
                    Dormant EAP legal benefits activate when employees understand why they need them.
                  </h3>
                  <p className="text-muted-foreground">
                    Employee #4 had access to her employer's EAP legal benefit for over a decade. She had used it once, years ago, when her parents were ill. She had not used it since because she believed she did not need it. Following the ENDevo program, she enrolled specifically to schedule an attorney appointment to update her trust and estate documents. The legal benefit did not change. Her understanding of why she needed it did.
                  </p>
                  <blockquote className="border-l-4 border-brand-orange pl-4 italic text-muted-foreground mt-4">
                    "I would not have used it. I haven't used it in 12 years. But now I want to go see a lawyer and get everything cleaned up."
                    <span className="block not-italic text-sm mt-1">— Employee #4</span>
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
                  "12-year-old estate documents identified for full review and update",
                  "State law misalignment flagged as an urgent planning gap requiring attorney attention",
                  "Beneficiary designations identified as outdated across financial accounts",
                  "Digital access gaps identified; phone access updated for family members",
                  "Employer EAP legal benefit activated for the first time in over a decade",
                  "Attorney appointment scheduled to update trust for current state law and circumstances",
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
                Employee #4 is the employee HR programs are most likely to miss. She is experienced, has prior planning history, and does not present as a planning need. She would not self-select into a voluntary planning program because she already believes she is prepared. She is the employee who quietly carries the greatest risk.
              </p>
              <p className="text-white/80">
                Universal access — not opt-in access — is the only program design that captures this population. A well-intentioned wellness benefit that requires employees to recognize their own gaps will systematically miss the employees most in need of course correction. ENDevo surfaces those gaps for employees who cannot see them themselves.
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

export default CaseStudyAlreadyCovered;
