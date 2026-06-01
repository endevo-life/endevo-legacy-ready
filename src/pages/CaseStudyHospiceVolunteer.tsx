import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const CaseStudyHospiceVolunteer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <SEO
        title="What Happens to Your Digital Accounts When You Die? A Case Study"
        description="A hospice volunteer with completed estate documents discovered her digital access was never addressed — and what she did about it before retirement."
        canonical="/case-studies/hospice-volunteer"
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
            The Most Informed Person in the Room Still Had Gaps:
            <span className="block font-normal text-2xl md:text-3xl mt-2 text-white/70">
              A Hospice Volunteer's Case for Employer Action
            </span>
          </h1>

          <div className="flex flex-wrap gap-2 mt-6 text-sm text-white/50">
            <span>Employee Wellness Intervention Study</span>
            <span>·</span>
            <span>Senior Industry Professional</span>
            <span>·</span>
            <span>Fortune 100 Company</span>
            <span>·</span>
            <span>42-Year Tenure</span>
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
                      { label: "Role", value: "Senior Industry Professional" },
                      { label: "Tenure", value: "42 years with the same employer" },
                      { label: "Age Range", value: "Late 60s" },
                      { label: "Life Stage", value: "Near-retirement; one adult daughter; recently added grandson" },
                      { label: "Background", value: "Five-year hospice volunteer; training as end-of-life doula" },
                      { label: "Prior Status", value: "Estate documents completed 8 years ago; digital access not addressed" },
                      { label: "Health History", value: "Ongoing chronic health issues; multiple hospitalizations over prior 18 months" },
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
                  By any objective measure, Employee #5 understands death better than most people in any workforce. She has spent five years as a hospice volunteer, one night per week at the bedside of dying patients. She has watched families arrive at that moment completely unprepared — asking "now what do we do?" — more times than she can count. She is training to become an end-of-life doula. She had an attorney draft her estate documents as a 60th birthday gift to herself.
                </p>
                <p>
                  She still had critical gaps. During a recent hospitalization, she asked her daughter to access the password notebook in her bookcase and pay a few bills. Her daughter arrived at the hospital the next day with her laptop. She could not read her mother's handwriting. She could not decode the passwords. Not a single bill was paid.
                </p>
                <p>
                  This is not a story about avoidance. It is a story about the difference between knowing and doing — and about how even the most informed people design systems that do not actually work for the people who need to use them.
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
                    Knowledge of end-of-life planning does not guarantee functional preparation.
                  </h3>
                  <p className="text-muted-foreground">
                    Employee #5's case is the most instructive in the cohort precisely because it challenges the assumption that informed employees need less intervention. She is deeply informed. What she had not done was translate that knowledge into a system her family could actually operate without her.
                  </p>
                  <p className="text-muted-foreground">
                    The gap between knowing what to do and having it done in a usable format is where unpreparedness lives. ENDevo's value is not in awareness. It is in structured implementation — making preparation functional, not just intended.
                  </p>
                  <blockquote className="border-l-4 border-brand-orange pl-4 italic text-muted-foreground mt-4">
                    "She said, 'Mom, I can't read your writing. I have no idea how to figure out these passwords. I couldn't pay them if you paid me a million dollars.' That was the aha moment."
                    <span className="block not-italic text-sm mt-1">— Employee #5, describing the hospitalization that changed her approach</span>
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
                    End-of-life planning is the missing life stage in employer wellness benefits.
                  </h3>
                  <p className="text-muted-foreground">
                    Employee #5 has 42 years of tenure with the same employer. She has watched the organization's wellness benefits evolve through every stage of employee life: maternity support, pediatric care, menopause resources, mental health access, financial planning tools. She has never seen the organization address end of life.
                  </p>
                  <p className="text-muted-foreground">
                    Her framing is direct: every other wellness benefit applies to a subset of employees. End-of-life planning applies to all of them. It is the only life event that is genuinely universal. The absence of an employer-sponsored benefit in this category is not a gap in a niche program. It is a gap in a foundational one.
                  </p>
                  <blockquote className="border-l-4 border-brand-orange pl-4 italic text-muted-foreground mt-4">
                    "We may not all get cancer. We may not have children. But we're all going to end up facing end of life. I think it's really a critical miss in a healthcare company."
                    <span className="block not-italic text-sm mt-1">— Employee #5, 42-year employee and hospice volunteer</span>
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
                    When asked to rate employer care on a scale of 1 to 10, she said 12.
                  </h3>
                  <p className="text-muted-foreground">
                    When asked how much offering this program would increase her sense that her employer cares about her full wellbeing, Employee #5 did not give a number within the range. She said twelve. Her explanation was structural: employers currently communicate that they care about employees from birth through productive working years. Offering end-of-life planning support completes the message.
                  </p>
                  <blockquote className="border-l-4 border-brand-orange pl-4 italic text-muted-foreground mt-4">
                    "I don't see any other company that says, 'I really care about your whole life — not just these productive years.' This is where we have a gap. And I've never seen anybody else fill it."
                    <span className="block not-italic text-sm mt-1">— Employee #5</span>
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
                  "Phone access updated so both daughter and son-in-law can access in an emergency",
                  "Employer EAP legal benefit enrolled in; attorney appointment scheduled",
                  "8-year-old estate documents identified for full review and revision",
                  "Grandson added to beneficiary and estate planning for the first time",
                  "Digital password access system redesigned for family readability",
                  "Green burial alternatives added — program expanded awareness beyond standard categories",
                  "Legal benefit to be used for the first time since original documents were drafted",
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
                Employee #5 is the senior employee who has given decades to an organization and assumed the hard work of planning was behind her. She is the employee who knows more about death than almost anyone in the building and still had a system that failed when it was tested.
              </p>
              <p className="text-white/80">
                For HR and benefits leaders, her case answers whether a planning benefit has value for employees who are already experienced and engaged with the topic. It does. The value is not awareness — it is implementation accountability. A structured framework that ensures what an employee knows actually gets built into a system their family can use. That is what no amount of individual motivation, legal counsel, or hospice experience provides on its own. That is what ENDevo provides.
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

export default CaseStudyHospiceVolunteer;
