import { useState } from "react";
import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import Footer from "@/components/Footer";
import { ChevronDown } from "lucide-react";

type FAQ = {
  question: string;
  bottomLine: string;
  fullStory: (string | { type: "step"; number: number; text: string })[];
  stats?: { value: string; label: string }[];
};

const faqs: FAQ[] = [
  {
    question: "What is end-of-life planning as an employee benefit?",
    bottomLine:
      "A structured, project-managed wellness program that guides employees through building a complete end-of-life plan across Legal, Financial, Physical, and Digital before any crisis occurs. The deliverable is My Final Playbook.",
    fullStory: [
      "ENDevo is a proactive workforce wellness program that uses a structured project management framework to help employees build a comprehensive plan for death, dying, and incapacitation before any life event forces their hand.",
      "Think of it as bringing a project manager to the most complex, high-stakes, multi-domain project your employees will ever face. The program educates employees across four pillars: Legal, Financial, Physical, and Digital. Then it guides them through execution with expert accountability, milestone tracking, and a completed deliverable called My Final Playbook.",
      "The result for the employer is a more prepared, less distracted workforce, a measurable reduction in crisis-driven absenteeism, and a differentiated benefits package that signals whole-person care.",
    ],
  },
  {
    question:
      "How does poor end-of-life planning affect businesses and HR teams?",
    bottomLine:
      "Unprepared employees create unplanned absences and HR chaos when life events hit. ENDevo eliminates that risk by getting employees planned in advance. Conservative modeling shows 5 to 7x ROI.",
    fullStory: [
      "When an unprepared employee faces a death, serious illness, or incapacitation event for themselves or a family member, the chaos lands at work. Unplanned absences, reduced decision quality, and manager and HR bandwidth consumed reactively. These are not edge cases. One in nine employees experiences a significant loss every year.",
      "ENDevo operates entirely upstream. Employees who complete the program have a plan in place before a crisis occurs. When a life event hits, they and their families know exactly what to do. That means shorter, more bounded disruptions rather than open-ended chaos that HR absorbs for weeks or months.",
      "Conservative financial modeling on a 25-person cohort projects $77,888 in total benefits through reduced absenteeism, avoided turnover, and productivity lift against $10,625 in program costs. That is a 5 to 7x projected return on investment.",
    ],
  },
  {
    question: "Why do most employees never finish their end-of-life planning?",
    bottomLine:
      "75% will not. The process is complex, emotional, and easy to defer indefinitely. ENDevo provides the structure, expert accountability, and milestone framework that converts intention into a finished plan.",
    fullStory: [
      "End-of-life planning is not a knowledge problem. Most employees know they should have a will, a healthcare directive, and a digital asset plan. They do not have one because the process is emotionally heavy, cross-domain complex, and easy to defer indefinitely. There is no deadline, no owner, and no accountability structure forcing action.",
      "This is exactly the same dynamic that makes unmanaged projects fail. The work is important but never urgent until it becomes a crisis. ENDevo applies the project management fundamentals that solve this: a defined scope, a timeline, a subject matter expert holding milestones, and a structured deliverable that marks completion.",
      "Our program data confirmed it directly. 75% of participants stated they would not have completed this planning independently. The program is the difference between intention and a finished plan.",
    ],
  },
  {
    question:
      "What does a workplace end-of-life planning program actually include?",
    bottomLine:
      "Employees receive My Final Playbook, a completed plan across all four pillars. HR receives a post-program outcomes report with completion rates, confidence improvement data, and ROI documentation.",
    fullStory: [
      "For the employee, the program produces My Final Playbook. It is a completed, organized, and accessible plan across all four pillars: Legal (will, POA, executor), Financial (accounts, insurance, beneficiaries), Physical (healthcare directive, final wishes), and Digital (account vault, legacy contacts, subscription inventory). It is a living document their family can actually use.",
      "For HR, ENDevo delivers a post-program outcomes report with planning completion rates, confidence improvement data, and ROI documentation. This is not a participation metric. It is measurable evidence that the benefit worked, held to the same standard as any structured wellness program.",
    ],
    stats: [
      { value: "92%", label: "Achieved planning clarity" },
      { value: "75%", label: "Completed critical documents" },
      { value: "9.9/10", label: "Participant satisfaction" },
    ],
  },
  {
    question: "Does my employer offer end-of-life planning as a benefit?",
    bottomLine:
      "92% of participants called it a competitive advantage. Employees compared it to medical and disability coverage. It closes the whole lifecycle gap: birth and life are supported by benefits today. End-of-life planning is not.",
    fullStory: [
      "Employers currently support employees at birth through parental leave and prenatal programs, and throughout life through health insurance and wellness benefits. End-of-life planning is the one phase of the human lifecycle that has never had structured employer support. That gap is both a retention risk and a differentiation opportunity.",
      "92% of employees who completed ENDevo agreed it demonstrated genuine care for their wellbeing as a whole person, not just as a worker. 92% identified it as a competitive advantage in the talent market. In independent feedback, employees compared it in value to medical insurance and disability coverage.",
      "In a market where every employer offers the same health plan, gym reimbursement, and EAP, ENDevo signals something meaningfully different: this organization supports you across your entire life journey.",
    ],
  },
  {
    question:
      "What is the difference between an EAP and end-of-life planning support?",
    bottomLine:
      "Those benefits are reactive. ENDevo is proactive. It also activates the benefits you are already paying for but employees never use. It does not replace your stack. It makes your stack work.",
    fullStory: [
      "Your EAP provides counseling support. Your bereavement policy gives protected time off. Your legal benefit offers document drafting. All three activate after something has already happened, or they sit dormant because employees never get around to using them.",
      "ENDevo operates before any of those benefits get triggered. And critically, ENDevo drives utilization of the legal and benefits infrastructure you are already paying for. Program participants reported having access to legal services for years without ever using them for estate planning. ENDevo provides the structured motivation, education, and accountability to finally engage with those benefits, increasing your return on spend already committed.",
      "ENDevo does not replace what you have. It makes the rest of your benefits stack more effective by ensuring employees are prepared to use it.",
    ],
  },
  {
    question: "Which employees need end-of-life planning support the most?",
    bottomLine:
      "Highest immediate impact: caregivers, employees on medical leave, and employees in major life transitions. Meaningful impact across all ages and roles. The planning gap does not discriminate by age or seniority.",
    fullStory: [
      "Three workforce populations carry the highest immediate risk of unpreparedness becoming a business problem: employees who are active caregivers managing a family member's decline, employees on medical leave navigating their own health situation, and employees in major life transitions such as marriage, having children, buying a home, or approaching retirement.",
      "These are the employees most likely to face an unplanned crisis without a plan in place. A targeted cohort deployment starting with these populations delivers the fastest measurable ROI.",
      "Broader deployment makes sense for any employer serious about whole-person workforce wellness. End-of-life planning is not an age-specific concern. An employee in their 30s with young children, a mortgage, and a growing digital footprint has more at stake and more complexity to manage than most people realize. The planning gap exists across every age, income level, and role.",
    ],
  },
  {
    question:
      "How hard is it for HR to implement an end-of-life planning benefit?",
    bottomLine:
      "Minimal. Your team identifies the cohort and communicates the benefit. ENDevo runs everything else over a 3-month timeline using your existing tools: Teams, Slack, WebEx, or email.",
    fullStory: [
      "ENDevo manages the full program delivery. Your HR team identifies the cohort and communicates the benefit. ENDevo handles everything else: the Peace of Mind Assessment, the live masterclass, the 1:1 accountability sessions with a Digital Thanatologist, the on-demand coursework, the weekly office hours, and the post-program outcomes report delivered back to you.",
      "The program runs over a 3-month governed timeline, structured enough to drive completion and flexible enough to integrate within your existing calendar and communications infrastructure. It operates via the tools your team already uses: Teams, Slack, WebEx, or email.",
      "At the end, you receive a data report with completion rates, confidence improvement metrics, and projected financial impact. You are not buying a benefit and hoping it works. You are buying a managed program with measured outcomes.",
    ],
  },
  {
    question:
      "Do life insurance and legal benefits cover what employees actually need?",
    bottomLine:
      "Your benefits stack is only as strong as your employees' ability to use it. ENDevo ensures they are prepared to do exactly that before a crisis forces the issue.",
    fullStory: [
      "Most organizations already provide a strong foundation: short and long term disability, life insurance, and legal services. The gap is not in what you offer. It is in whether employees are prepared to use those benefits when a life event actually occurs.",
      "Disability coverage means nothing if the employee has no healthcare directive in place. Life insurance pays out, but without an organized financial inventory and confirmed beneficiaries, families spend months untangling what should take days. Legal benefits sit unused for years because employees have no structured reason to finally engage with an attorney.",
      "ENDevo is the activation layer across your entire benefits stack. The education phase builds the knowledge employees need to understand what they have and why it matters. The 1:1 project planning session maps exactly which benefits apply to their situation and what they need to do to make them actionable. The milestone structure creates the accountability that turns 'I should really get to that' into a completed plan.",
      "For employers, this means the benefits already on the books finally generate the outcomes they were purchased to produce. ENDevo does not add cost to your stack. It makes your existing investment pay off.",
    ],
  },
  {
    question: "How do I propose end-of-life planning benefits to my employer?",
    bottomLine:
      "Book a strategy call today. The planning gap in your workforce exists right now. Your organization can be fully up and running, with employees actively building their plans, within 30 days.",
    fullStory: [
      "Getting started with ENDevo is simpler than most benefits implementations you have managed. There is no complex procurement process, no heavy IT lift, and no disruption to your existing benefits stack.",
      "Here is exactly what the process looks like from first conversation to program launch.",
      {
        type: "step",
        number: 1,
        text: "Book a strategy call — Schedule a 30-minute call with Niki Weiss, Founder of ENDevo. This is not a sales pitch. It is a focused conversation about your workforce, your current benefits landscape, and where the planning gap is costing you the most. You will leave with a clear picture of what ENDevo looks like inside your organization.",
      },
      {
        type: "step",
        number: 2,
        text: "Receive your custom program proposal — Within a week of your strategy call, you will receive a tailored proposal scoped to your organization. It includes a recommended cohort size, a program timeline, and a conservative ROI model built around your headcount and salary data. Everything you need to make the case internally.",
      },
      {
        type: "step",
        number: 3,
        text: "Get leadership aligned — ENDevo provides you with the materials to bring this to your leadership team with confidence: a one-page program summary, the ROI model, and answers to every question your CFO or CHRO is likely to ask. You are not going into that room alone.",
      },
      {
        type: "step",
        number: 4,
        text: "Launch in 30 days — Once you have a signed agreement, ENDevo manages the full implementation. Cohort enrollment, platform setup, program communications, and kickoff scheduling are all handled by the ENDevo team. Your HR lift is minimal. Your employees are up and running within 30 days.",
      },
      "ENDevo is built to be the easiest yes in your benefits portfolio. The planning gap in your workforce exists today. The only question is when you close it.",
    ],
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [storyIndex, setStoryIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
    setStoryIndex(null);
  };
  const toggleStory = (i: number) => setStoryIndex(storyIndex === i ? null : i);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ResponsiveNavbar />

      {/* Hero */}
      <section
        className="relative text-white pt-32 pb-16 px-4 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://assets.cdn.filesafe.space/f5ehsbHfdFg2UsHEIb49/media/69cc0fd518eaa31fe1db61a4.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-[#08123A]/60" />
        <div className="relative z-10 container max-w-3xl mx-auto text-center">
          <p className="text-brand-orange text-sm font-semibold uppercase tracking-widest mb-3">
            Got Questions?
          </p>
          <h1
            className="text-4xl sm:text-5xl font-bold leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-white/70 text-base sm:text-lg max-w-xl mx-auto">
            Everything you need to know about ENDevo, legacy readiness, and how
            we can help you plan, protect, and find peace.
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <main className="flex-1 container max-w-3xl mx-auto px-4 py-16">
        <div className="divide-y divide-gray-200">
          {faqs.map((faq, i) => (
            <div key={i} className="py-6">
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between text-left gap-4 group"
              >
                <span className="text-base sm:text-lg font-semibold text-[#08123A] group-hover:text-brand-orange transition-colors">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 text-brand-orange transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === i && (
                <div className="mt-4 space-y-5">
                  {/* Bottom Line */}
                  <div className="bg-[#f4f6fb] border-l-4 border-brand-orange rounded-r-lg px-5 py-4">
                    <p className="text-xs font-bold uppercase tracking-widest text-brand-orange mb-1">
                      Bottom Line
                    </p>
                    <p className="text-sm sm:text-base text-[#08123A] font-medium leading-relaxed">
                      {faq.bottomLine}
                    </p>
                  </div>

                  {/* Full Story toggle */}
                  <div>
                    <button
                      onClick={() => toggleStory(i)}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-brand-orange transition-colors border border-gray-300 hover:border-brand-orange rounded-full px-4 py-1.5"
                    >
                      {storyIndex === i ? "Hide Full Story" : "Full Story"}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-300 ${storyIndex === i ? "rotate-180" : ""}`}
                      />
                    </button>

                    {storyIndex === i && (
                      <div className="mt-4 space-y-3">
                        {faq.fullStory.map((block, j) =>
                          typeof block === "string" ? (
                            <p
                              key={j}
                              className="text-sm sm:text-base text-gray-600 leading-relaxed"
                            >
                              {block}
                            </p>
                          ) : (
                            <div key={j} className="flex gap-3">
                              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-brand-orange text-white text-xs font-bold flex items-center justify-center mt-0.5">
                                {block.number}
                              </span>
                              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                {block.text}
                              </p>
                            </div>
                          ),
                        )}
                      </div>
                    )}
                  </div>

                  {/* Stats (if any) */}
                  {faq.stats && (
                    <div className="grid grid-cols-3 gap-4 pt-2">
                      {faq.stats.map((s, j) => (
                        <div
                          key={j}
                          className="text-center border-2 border-[#08123A] rounded-xl py-4 px-2"
                        >
                          <p className="text-xl sm:text-2xl font-bold text-brand-orange">
                            {s.value}
                          </p>
                          <p className="text-xs mt-1 text-[#08123A] leading-snug">
                            {s.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center bg-[#f9f7f4] rounded-2xl p-10">
          <h2
            className="text-2xl sm:text-3xl font-bold text-[#08123A] mb-3"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Still have questions?
          </h2>
          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            Our team is here to help. Reach out and we'll get back to you.
          </p>
          <a
            href="/contact"
            className="inline-block bg-brand-orange text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            Contact Us
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
