import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const CaseStudyAwarenessToAction = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <SEO
        title="Sandwich Generation Estate Planning Case Study"
        description="How a Project Manager in her late 50s — sandwich generation, sole executor — closed a 13-year estate planning gap after losing her mother unexpectedly."
        canonical="/case-studies/from-awareness-to-action"
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
            When Knowing Is Not Enough:
            <span className="block font-normal text-2xl md:text-3xl mt-2 text-white/70">
              How a Project Manager Closed a 13-Year Planning Gap
            </span>
          </h1>

          <div className="flex flex-wrap gap-2 mt-6 text-sm text-white/50">
            <span>Employee Wellness Intervention Study</span>
            <span>·</span>
            <span>Project Manager</span>
            <span>·</span>
            <span>September 2025</span>
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
                      { label: "Role", value: "Project Manager" },
                      { label: "Age Range", value: "Late 50s" },
                      { label: "Life Stage", value: "Sandwich generation; lost mother unexpectedly in 2025; sole executor of father's estate" },
                      { label: "Prior Status", value: "Will: 13 years old. No power of attorney. No medical advance directive." },
                      { label: "EAP Access", value: "Active legal benefit; previously used for parents — never for herself" },
                      { label: "Program Entry", value: "September 2025" },
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
                    Employee #1 was not unprepared by ignorance. She had facilitated end-of-life conversations with her parents for years, served as sole executor after her mother's unexpected death in May 2025, and had previously used her employer's EAP legal benefit to help her parents plan. She understood, with unusual clarity, what unpreparedness costs a family.
                  </p>
                  <p>
                    She had done none of this for herself. Her own will was 13 years old. Neither she nor her husband had a power of attorney or medical advance directive in place. This is the intention-action gap — the central problem ENDevo is designed to close.
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
                      Professional reframing unlocks action in corporate employees.
                    </h3>
                    <p className="text-muted-foreground">
                      When the ENDevo facilitator reframed end-of-life planning as a project — with stakeholders, milestones, deliverables, and a go-live date — this participant's engagement shifted immediately. She began assigning timelines unprompted, referencing Q1 deadlines, and identifying planning gaps the way she would identify risks on a project plan.
                    </p>
                    <p className="text-muted-foreground">
                      This finding has direct implications for enterprise deployment. The project management frame is not a workaround. It is a messaging strategy that activates professional instincts already present in the workforce.
                    </p>
                    <blockquote className="border-l-4 border-brand-orange pl-4 italic text-muted-foreground mt-4">
                      "De-emotionalize the topic. It's a project. There are stakeholders, risks, timelines, and deliverables."
                      <span className="block not-italic text-sm mt-1">— Employee #1, responding to ENDevo's project management reframe</span>
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
                      Even informed employees have critical digital access gaps.
                    </h3>
                    <p className="text-muted-foreground">
                      Despite managing her parents' estates, Employee #1 was unaware of how Apple's Legacy Contact system works, what happens to device data without a designated contact, and the role a death certificate plays in granting account access. The realization prompted immediate in-session action — she reviewed and flagged her legacy contact setup for correction before the session ended.
                    </p>
                    <blockquote className="border-l-4 border-brand-orange pl-4 italic text-muted-foreground mt-4">
                      "I wouldn't have given any thought to that before doing this program. Now I have a greater peace of mind that my family has another layer of protection."
                      <span className="block not-italic text-sm mt-1">— Employee #1</span>
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
                      Employees with dormant EAP legal benefits need activation, not information.
                    </h3>
                    <p className="text-muted-foreground">
                      Employee #1 had used her employer's legal EAP benefit before — for her parents. She knew it existed. She had not applied it to her own planning needs. Following the ENDevo session, she independently identified January 2026 to use the benefit again for her own estate updates. ENDevo does not replace the EAP benefit. It activates it.
                    </p>
                    <blockquote className="border-l-4 border-brand-orange pl-4 italic text-muted-foreground mt-4">
                      "I've graduated from not thinking about this stuff to really thinking about it. Now I need to graduate again and actually do it."
                      <span className="block not-italic text-sm mt-1">— Employee #1</span>
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
                    "Legacy contact review flagged and corrected in-session",
                    "13-year-old wills identified for update; attorney appointment set for Q1 2026",
                    "Durable POA and medical advance directive added to planning agenda",
                    "EAP legal benefit identified as funding vehicle for January 2026 estate updates",
                    "Five Wishes advance directive framework introduced and written down",
                    "Successor trustee gap identified on irrevocable trust for father's estate",
                    "Conversation with spouse scheduled with a proposed date",
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
                  Employee #1 represents the most common profile in any workforce: a mid-career professional with prior planning exposure, access to employer legal benefits, and genuine intent — who has not acted without a structured intervention. She is not an outlier. She is the norm.
                </p>
                <p className="text-white/80">
                  ENDevo does not replace the EAP legal benefit. It drives employees to use it. A single structured intervention converts years of dormant benefit enrollment into a scheduled attorney appointment, a completed legacy contact, and a spouse conversation that had not happened in 13 years.
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

export default CaseStudyAwarenessToAction;
