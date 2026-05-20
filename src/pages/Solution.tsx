import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  HeartPulse,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import ServiceProvidersSection from "@/components/ServiceProvidersSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import heroBackground from "@/assets/solution-hero-bg.jpg";
import holisticFramework from "@/assets/holistic-framework.png";
import threeStepProcess from "@/assets/three-step-process.jpg";
import forCompanies from "@/assets/for-companies.jpg";
import forEmployees from "@/assets/for-employees.jpg";
import hrEapPrograms from "@/assets/hr-eap-programs.jpg";
import digitalLegacy from "@/assets/digital-legacy.jpg";
import workshopsAssessments from "@/assets/workshops-assessments.jpg";
import peaceMindAssessment from "@/assets/peace-mind-assessment.jpg";
import empowering from "@/assets/empowering-new.png";
import framework from "@/assets/4-domains.png";
import hrEapIcon from "@/assets/hr-eap-programs.png";
import empoweringControlGraphic from "@/assets/empowering-control-graphic.png";

import ProcessSection from "@/components/ProcessSection";
import OrganizationalResilienceSection from "@/components/OrganizationalResilienceSection";
import SEO from "@/components/SEO";
const solutionHeroConsultation =
  "https://assets.cdn.filesafe.space/f5ehsbHfdFg2UsHEIb49/media/69975848df9bdf1a7110b864.jpeg";

const Solution = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const { elementRef: edgeRef, isVisible: edgeVisible } = useScrollAnimation();
  const { elementRef: lifecycleRef, isVisible: lifecycleVisible } =
    useScrollAnimation();
  const { elementRef: aboutRef, isVisible: aboutVisible } =
    useScrollAnimation();
  const {
    elementRef: caseStudiesHeadingRef,
    isVisible: caseStudiesHeadingVisible,
  } = useScrollAnimation();
  const { elementRef: howItWorksRef, isVisible: howItWorksVisible } =
    useScrollAnimation();
  const caseStudiesRef = useRef<HTMLDivElement>(null);
  const scrollCaseStudies = (dir: "left" | "right") => {
    if (caseStudiesRef.current) {
      const isLarge = window.innerWidth >= 1024;
      const cardWidth = isLarge
        ? caseStudiesRef.current.offsetWidth / 3
        : caseStudiesRef.current.offsetWidth;
      caseStudiesRef.current.scrollBy({
        left: dir === "left" ? -cardWidth : cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Employee Wellness Program for Legacy Readiness | ENDevo"
        description="A structured employee wellness program covering end-of-life and digital legacy planning. Reduce HR burden, close the EAP gap, and support employees through life's hardest transitions."
        canonical="/solution"
      />
      <ResponsiveNavbar />

      {/* Employee Wellness Hero Section */}
      <section
        ref={elementRef as any}
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${solutionHeroConsultation}')` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 container max-w-4xl mx-auto px-4 text-center">
          <h1
            className={`font-bold mb-6 transition-all duration-1000 ease-out text-4xl md:text-5xl lg:text-6xl text-white ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{
              fontFamily: "serif",
              transitionDelay: isVisible ? "0.2s" : "0s",
            }}
          >
            Legacy & End-of-Life Wellness for Employees
          </h1>

          <p
            className={`text-lg md:text-xl mb-12 leading-relaxed transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{
              color: "#e5e7eb",
              transitionDelay: isVisible ? "0.4s" : "0s",
            }}
          >
            Empowering employees to thrive through life's transitions without
            overwhelming HR teams.
          </p>

          <div
            className={`transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: isVisible ? "0.6s" : "0s" }}
          >
            <a href="/contact">
              <button
                className="bg-[#002147] hover:bg-[#003366] text-white font-semibold px-6 py-1.5 rounded-full text-base shadow-lg hover:shadow-2xl transition-all duration-300"
                style={{ fontFamily: "'Open Sans', 'Helvetica', sans-serif" }}
              >
                Start the Program
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Closing the Whole Lifecycle Gap Section */}
      <section ref={lifecycleRef as any} className="py-20 px-4 bg-white">
        <div className="container max-w-6xl mx-auto">
          {/* Title */}
          <h2
            className={`text-3xl md:text-4xl font-bold text-[#08123A] text-center mb-16 transition-all duration-1000 ease-out ${lifecycleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              transitionDelay: lifecycleVisible ? "0ms" : "0ms",
            }}
          >
            Closing the 'Whole Lifecycle Gap'
          </h2>

          {/* Roadmap */}
          <div className="relative">
            {/* Orange bracket annotation for End-of-Life */}
            <div
              className="absolute right-0 w-[34%] flex flex-col items-center"
              style={{ top: "-8px" }}
            >
              <p
                className="text-brand-orange font-bold text-sm mb-1 text-center"
                style={{ fontFamily: "'Open Sans', sans-serif" }}
              >
                The Current Benefits Gap
              </p>
              <svg
                viewBox="0 0 160 32"
                className="w-full"
                style={{ height: "32px" }}
              >
                <path
                  d="M8 4 L8 28 L152 28 L152 4"
                  fill="none"
                  stroke="#D95D26"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Icons row */}
            <div className="flex justify-between items-end mb-0 mt-10">
              <div
                className={`w-1/3 flex justify-center transition-all duration-1000 ease-out ${lifecycleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: lifecycleVisible ? "0ms" : "0ms" }}
              >
                <svg
                  viewBox="0 0 64 64"
                  className="w-20 h-20 text-[#08123A]"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 20 C10 20 10 20 10 20 L10 20 Q10 12 18 12 L38 12 Q44 12 46 18 L50 32 L14 32 Z" />
                  <path
                    d="M14 32 L14 42 Q14 46 18 46 L44 46"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <circle cx="22" cy="52" r="5" />
                  <circle cx="42" cy="52" r="5" />
                  <line
                    x1="8"
                    y1="20"
                    x2="2"
                    y2="20"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <line
                    x1="8"
                    y1="20"
                    x2="8"
                    y2="12"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div
                className={`w-1/3 flex justify-center transition-all duration-1000 ease-out ${lifecycleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: lifecycleVisible ? "300ms" : "0ms" }}
              >
                <HeartPulse
                  className="w-20 h-20 text-[#08123A]"
                  strokeWidth={1.8}
                />
              </div>
              <div
                className={`w-1/3 flex justify-center transition-all duration-1000 ease-out ${lifecycleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: lifecycleVisible ? "600ms" : "0ms" }}
              >
                <div
                  className="w-20 h-20 flex items-center justify-center rounded-full"
                  style={{ border: "3px dashed #9ca3af" }}
                >
                  <span
                    className="text-4xl font-bold text-[#6b7280]"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    ?
                  </span>
                </div>
              </div>
            </div>

            {/* Horizontal line + dots */}
            <div className="relative flex items-center justify-between mt-4 mb-6">
              <div className="absolute left-[5%] right-[5%] h-[3px] bg-[#08123A]" />
              <div className="w-1/3 flex justify-center">
                <div className="w-5 h-5 rounded-full bg-[#08123A] z-10" />
              </div>
              <div className="w-1/3 flex justify-center">
                <div className="w-5 h-5 rounded-full bg-[#08123A] z-10" />
              </div>
              <div className="w-1/3 flex justify-center">
                <div className="w-5 h-5 rounded-full bg-[#08123A] z-10" />
              </div>
            </div>

            {/* Labels row */}
            <div className="flex justify-between">
              <div
                className={`w-1/3 text-center px-6 transition-all duration-1000 ease-out ${lifecycleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: lifecycleVisible ? "150ms" : "0ms" }}
              >
                <p
                  className="font-extrabold text-[#08123A] text-base uppercase tracking-widest mb-2"
                  style={{ fontFamily: "'Open Sans', sans-serif" }}
                >
                  Birth
                </p>
                <p
                  className="text-muted-foreground text-sm leading-relaxed"
                  style={{ fontFamily: "'Open Sans', sans-serif" }}
                >
                  Parental Leave,
                  <br />
                  Prenatal Support
                </p>
              </div>
              <div
                className={`w-1/3 text-center px-6 transition-all duration-1000 ease-out ${lifecycleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: lifecycleVisible ? "450ms" : "0ms" }}
              >
                <p
                  className="font-extrabold text-[#08123A] text-base uppercase tracking-widest mb-2"
                  style={{ fontFamily: "'Open Sans', sans-serif" }}
                >
                  Life
                </p>
                <p
                  className="text-muted-foreground text-sm leading-relaxed"
                  style={{ fontFamily: "'Open Sans', sans-serif" }}
                >
                  Health Insurance,
                  <br />
                  Wellness Programs
                </p>
              </div>
              <div
                className={`w-1/3 text-center px-6 transition-all duration-1000 ease-out ${lifecycleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: lifecycleVisible ? "750ms" : "0ms" }}
              >
                <p
                  className="font-extrabold text-[#08123A] text-base uppercase tracking-widest mb-2"
                  style={{ fontFamily: "'Open Sans', sans-serif" }}
                >
                  End-of-Life
                </p>
                <p
                  className="text-muted-foreground text-sm leading-relaxed"
                  style={{ fontFamily: "'Open Sans', sans-serif" }}
                >
                  No Structured
                  <br />
                  Support
                </p>
              </div>
            </div>
          </div>

          {/* Quote */}
          <p
            className={`mt-12 text-center text-muted-foreground italic text-base max-w-3xl mx-auto leading-relaxed transition-all duration-1000 ease-out ${lifecycleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{
              fontFamily: "'Open Sans', sans-serif",
              transitionDelay: lifecycleVisible ? "900ms" : "0ms",
            }}
          >
            "Organizations support birth and life but traditionally have no
            support for end-of-life planning. This program demonstrates care for
            employees across their entire life journey."
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        ref={howItWorksRef as any}
        id="how-it-works"
        className="scroll-mt-20"
      >
        <div
          className={`transition-all duration-1000 ease-out ${howItWorksVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <ProcessSection />
        </div>
      </section>

      {/* About the Program and Why It Matters Section */}
      <section
        ref={aboutRef as any}
        id="about-program"
        className="py-20 px-4 bg-muted/30 scroll-mt-20"
      >
        <div
          className={`container max-w-7xl mx-auto transition-all duration-1000 ease-out ${aboutVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* About the Program Card */}
            <Card
              className={`shadow-lg transition-all duration-1000 ease-out ${aboutVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: aboutVisible ? "200ms" : "0ms" }}
            >
              <CardHeader>
                <CardTitle
                  className="text-2xl md:text-3xl font-bold text-foreground text-center"
                  style={{ fontFamily: "serif" }}
                >
                  About the Program
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                  <p>
                    ENDevo helps employers support their teams with a
                    structured, guided program that educates, project-manages,
                    and empowers employees so their life story, values, and
                    digital footprint are protected, preserved, and passed on
                    with intention.
                  </p>
                  <p>
                    We provide a holistic approach to wellness that supports
                    employees legally, financially, physically, and digitally.
                    Whether it's preparing for major life events or managing
                    important aspects of their personal and digital lives, our
                    goal is to empower employees to show up as their best
                    selves, today and in the future.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Why It Matters Card */}
            <Card
              className={`shadow-lg transition-all duration-1000 ease-out ${aboutVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: aboutVisible ? "400ms" : "0ms" }}
            >
              <CardHeader>
                <CardTitle
                  className="text-2xl md:text-3xl font-bold text-foreground text-center"
                  style={{ fontFamily: "serif" }}
                >
                  Why It Matters
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                  <p>
                    When employees are supported as whole individuals, they
                    become more focused, motivated, and inspired. Our program
                    strengthens workplace culture, reduces burnout, and helps
                    teams create meaningful impact in their careers, families,
                    and communities.
                  </p>
                  <p>
                    Legacy readiness & digital resilience is more than preparing
                    for what is next; it is about living well right now.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section
        id="case-studies"
        className="py-10 px-4 bg-background scroll-mt-20"
      >
        <div className="container max-w-[1400px] mx-auto">
          <div ref={caseStudiesHeadingRef as any} className="text-center mb-12">
            <h2
              className={`text-3xl md:text-4xl font-bold text-foreground mb-4 transition-all duration-1000 ease-out ${caseStudiesHeadingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                transitionDelay: caseStudiesHeadingVisible ? "0ms" : "0ms",
              }}
            >
              See How ENDevo{" "}
              <span className="text-brand-orange">Makes a Difference</span>
            </h2>
            <p
              className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-1000 ease-out ${caseStudiesHeadingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{
                transitionDelay: caseStudiesHeadingVisible ? "200ms" : "0ms",
              }}
            >
              We partner with organizations to provide human-centered support
              that transforms the way employees navigate life's toughest
              moments. Here are a few stories of our impact:
            </p>
          </div>

          {/* Carousel */}
          <div
            ref={caseStudiesRef}
            className="flex gap-8 overflow-x-hidden mb-8 snap-x snap-mandatory"
            style={{ scrollBehavior: "smooth" }}
          >
            {/* Case Study 1 */}
            <div
              className={`rounded-2xl border border-border shadow-md p-6 lg:p-8 flex flex-col gap-4 hover:shadow-xl hover:border-brand-orange/40 transition-all duration-700 ease-out flex-shrink-0 w-full lg:w-[calc(33.333%-1.4rem)] snap-center ${caseStudiesHeadingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{
                transitionDelay: caseStudiesHeadingVisible ? "300ms" : "0ms",
              }}
            >
              <p className="text-xs font-bold uppercase tracking-widest text-brand-orange">
                Case Study
              </p>
              <h3
                className="text-xl font-bold text-foreground leading-snug"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                When Knowing Is Not Enough:
                <span className="block font-normal text-lg mt-1 text-muted-foreground">
                  How a Project Manager Closed a 13-Year Planning Gap
                </span>
              </h3>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs text-muted-foreground">
                    Employee Wellness Intervention Study
                  </span>
                  <span className="text-xs text-muted-foreground">·</span>
                  <span className="text-xs text-muted-foreground">
                    Project Manager
                  </span>
                </div>
                <Link
                  to="/case-studies/from-awareness-to-action"
                  className="flex-shrink-0 ml-4 w-8 h-8 rounded-full bg-brand-orange/10 flex items-center justify-center hover:bg-brand-orange hover:text-white text-brand-orange transition-colors duration-200"
                >
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Case Study 2 */}
            <div
              className={`rounded-2xl border border-border shadow-md p-6 lg:p-8 flex flex-col gap-4 hover:shadow-xl hover:border-brand-orange/40 transition-all duration-700 ease-out flex-shrink-0 w-full lg:w-[calc(33.333%-1.4rem)] snap-center ${caseStudiesHeadingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{
                transitionDelay: caseStudiesHeadingVisible ? "450ms" : "0ms",
              }}
            >
              <p className="text-xs font-bold uppercase tracking-widest text-brand-orange">
                Case Study
              </p>
              <h3
                className="text-xl font-bold text-foreground leading-snug"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                The Realist With a List:
                <span className="block font-normal text-lg mt-1 text-muted-foreground">
                  How Life-Stage Complexity Stalls Even the Most Motivated
                  Planners
                </span>
              </h3>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs text-muted-foreground">
                    Employee Wellness Intervention Study
                  </span>
                  <span className="text-xs text-muted-foreground">·</span>
                  <span className="text-xs text-muted-foreground">
                    Administrative Professional
                  </span>
                </div>
                <Link
                  to="/case-studies/life-in-transition"
                  className="flex-shrink-0 ml-4 w-8 h-8 rounded-full bg-brand-orange/10 flex items-center justify-center hover:bg-brand-orange hover:text-white text-brand-orange transition-colors duration-200"
                >
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Case Study 3 */}
            <div
              className={`rounded-2xl border border-border shadow-md p-6 lg:p-8 flex flex-col gap-4 hover:shadow-xl hover:border-brand-orange/40 transition-all duration-700 ease-out flex-shrink-0 w-full lg:w-[calc(33.333%-1.4rem)] snap-center ${caseStudiesHeadingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{
                transitionDelay: caseStudiesHeadingVisible ? "600ms" : "0ms",
              }}
            >
              <p className="text-xs font-bold uppercase tracking-widest text-brand-orange">
                Case Study
              </p>
              <h3
                className="text-xl font-bold text-foreground leading-snug"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                As Important as Medical Coverage:
                <span className="block font-normal text-lg mt-1 text-muted-foreground">
                  How One Employee's Health Crisis Revealed the Missing Benefit
                </span>
              </h3>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs text-muted-foreground">
                    Employee Wellness Intervention Study
                  </span>
                  <span className="text-xs text-muted-foreground">·</span>
                  <span className="text-xs text-muted-foreground">
                    Healthcare Industry Professional
                  </span>
                </div>
                <Link
                  to="/case-studies/medical-coverage"
                  className="flex-shrink-0 ml-4 w-8 h-8 rounded-full bg-brand-orange/10 flex items-center justify-center hover:bg-brand-orange hover:text-white text-brand-orange transition-colors duration-200"
                >
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Case Study 4 */}
            <div
              className={`rounded-2xl border border-border shadow-md p-6 lg:p-8 flex flex-col gap-4 hover:shadow-xl hover:border-brand-orange/40 transition-all duration-700 ease-out flex-shrink-0 w-full lg:w-[calc(33.333%-1.4rem)] snap-center ${caseStudiesHeadingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{
                transitionDelay: caseStudiesHeadingVisible ? "750ms" : "0ms",
              }}
            >
              <p className="text-xs font-bold uppercase tracking-widest text-brand-orange">
                Case Study
              </p>
              <h3
                className="text-xl font-bold text-foreground leading-snug"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                The "Already Covered" Employee:
                <span className="block font-normal text-lg mt-1 text-muted-foreground">
                  Why Prior Planning Is Not the Same as Current Planning
                </span>
              </h3>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs text-muted-foreground">
                    Employee Wellness Intervention Study
                  </span>
                  <span className="text-xs text-muted-foreground">·</span>
                  <span className="text-xs text-muted-foreground">
                    Insurance Industry Professional
                  </span>
                </div>
                <Link
                  to="/case-studies/already-covered"
                  className="flex-shrink-0 ml-4 w-8 h-8 rounded-full bg-brand-orange/10 flex items-center justify-center hover:bg-brand-orange hover:text-white text-brand-orange transition-colors duration-200"
                >
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Case Study 5 */}
            <div
              className={`rounded-2xl border border-border shadow-md p-6 lg:p-8 flex flex-col gap-4 hover:shadow-xl hover:border-brand-orange/40 transition-all duration-700 ease-out flex-shrink-0 w-full lg:w-[calc(33.333%-1.4rem)] snap-center ${caseStudiesHeadingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{
                transitionDelay: caseStudiesHeadingVisible ? "900ms" : "0ms",
              }}
            >
              <p className="text-xs font-bold uppercase tracking-widest text-brand-orange">
                Case Study
              </p>
              <h3
                className="text-xl font-bold text-foreground leading-snug"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                The Most Informed Person in the Room Still Had Gaps:
                <span className="block font-normal text-lg mt-1 text-muted-foreground">
                  A Hospice Volunteer's Case for Employer Action
                </span>
              </h3>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs text-muted-foreground">
                    Employee Wellness Intervention Study
                  </span>
                  <span className="text-xs text-muted-foreground">·</span>
                  <span className="text-xs text-muted-foreground">
                    Senior Industry Professional
                  </span>
                </div>
                <Link
                  to="/case-studies/hospice-volunteer"
                  className="flex-shrink-0 ml-4 w-8 h-8 rounded-full bg-brand-orange/10 flex items-center justify-center hover:bg-brand-orange hover:text-white text-brand-orange transition-colors duration-200"
                >
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Scroll Buttons */}
          <div className="flex justify-center gap-3">
            <button
              onClick={() => scrollCaseStudies("left")}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-brand-orange hover:text-brand-orange transition-colors duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollCaseStudies("right")}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-brand-orange hover:text-brand-orange transition-colors duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Connecting You With Trusted Service Providers Section */}
      <section id="service-providers" className="scroll-mt-20 -mt-10">
        <ServiceProvidersSection />
      </section>

      {/* Our Edge: Human-Centered Guidance Section */}
      <section
        ref={edgeRef as React.RefObject<HTMLElement>}
        id="our-edge"
        className="py-20 bg-background scroll-mt-20"
      >
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div
              className={`space-y-6 transition-all duration-1000 ${edgeVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <h2 className="text-3xl md:text-4xl text-foreground">
                Our Edge:{" "}
                <span className="font-bold text-brand-orange">
                  Human-Centered Guidance
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                ENDevo isn't just another platform. It is a new standard for
                preparedness, where technology meets humanity, blending
                innovation with empathy to create solutions you can trust. Our
                edge is what makes us different and what makes planning simpler,
                smarter, and more human.
              </p>
            </div>

            {/* Right Column - Accordion */}
            <div
              className={`space-y-4 transition-all duration-1000 ${edgeVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: "200ms" }}
            >
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem
                  value="market-need"
                  className="bg-white rounded-lg shadow-sm px-6 py-2 border-none"
                >
                  <AccordionTrigger className="text-left hover:no-underline">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🌍</span>
                      <span className="font-semibold text-foreground">
                        $126B Market Need
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2 pb-4">
                    Legacy readiness & digital resilience are urgent and costly
                    gaps for families and businesses. ENDevo addresses the
                    crisis head-on with scalable, human-centered solutions.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="comprehensive"
                  className="bg-white rounded-lg shadow-sm px-6 py-2 border-none"
                >
                  <AccordionTrigger className="text-left hover:no-underline">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🛠️</span>
                      <span className="font-semibold text-foreground">
                        Comprehensive Offerings
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2 pb-4">
                    Plan across four identified domains of legal, financial,
                    physical, and digital, all in one unified platform.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="marketplace"
                  className="bg-white rounded-lg shadow-sm px-6 py-2 border-none"
                >
                  <AccordionTrigger className="text-left hover:no-underline">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🛒</span>
                      <span className="font-semibold text-foreground">
                        Readiness Hub
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2 pb-4">
                    Explore trusted partners and resources that help you
                    prepare, plan, and protect what matters most.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="education"
                  className="bg-white rounded-lg shadow-sm px-6 py-2 border-none"
                >
                  <AccordionTrigger className="text-left hover:no-underline">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">📚</span>
                      <span className="font-semibold text-foreground">
                        Human-Centered Education
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2 pb-4">
                    Workshops and resources blend technology with empathy,
                    making complex planning simple and approachable.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="values"
                  className="bg-white rounded-lg shadow-sm px-6 py-2 border-none"
                >
                  <AccordionTrigger className="text-left hover:no-underline">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">❤️</span>
                      <span className="font-semibold text-foreground">
                        Built on Values (C.L.A.R.I.T.Y.)
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2 pb-4">
                    Guided by compassion, resilience, integrity, and teamwork,
                    we prepare today for a better tomorrow.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Solution;
