import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

/**
 * The homepage's "who's behind it?" answer and its closing call to action.
 *
 * Folds three former homepage sections into one: Mission & Vision (the full
 * statements live on /company), Our Human-Centered Support, and Niki's
 * certifications. The certifications are the proof an HR buyer checks; they
 * stay, at a size that supports the copy rather than competing with it.
 */
const CERTIFICATIONS = [
  {
    src: "https://assets.cdn.filesafe.space/f5ehsbHfdFg2UsHEIb49/media/69ce6b79eeb3e5acb33c21f3.png",
    label: "PMI Risk Management Professional",
  },
  {
    src: "https://assets.cdn.filesafe.space/f5ehsbHfdFg2UsHEIb49/media/69ce6b79a7dcb4cff033a7aa.png",
    label: "Project Management Professional",
  },
  {
    src: "https://assets.cdn.filesafe.space/f5ehsbHfdFg2UsHEIb49/media/69ce6b79a7dcb4cff033a7ac.png",
    label: "PMI Authorized Training Partner (PMP/CAPM)",
  },
  {
    src: "https://assets.cdn.filesafe.space/f5ehsbHfdFg2UsHEIb49/media/69ce6b79fcc7c2f5772e2c7f.png",
    label: "Prosci Certified Change Practitioner",
  },
];

const FounderSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section ref={elementRef} className="py-20 bg-background">
      <div
        className={`container max-w-6xl mx-auto px-4 grid lg:grid-cols-[2fr_3fr] gap-12 items-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <img
          src="https://assets.cdn.filesafe.space/f5ehsbHfdFg2UsHEIb49/media/699757798523c5427fce1cde.jpg"
          alt="Niki Weiss, founder of ENDevo"
          className="w-full max-w-sm mx-auto rounded-2xl shadow-lg object-cover"
          loading="lazy"
        />

        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-foreground">
            Who&apos;s behind <span className="text-brand-orange">ENDevo</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            ENDevo was founded by{" "}
            <Link
              to="/company#niki"
              className="text-brand-orange-dark font-semibold hover:underline"
            >
              Niki Weiss
            </Link>
            , a thanatologist and former enterprise project manager who treats
            end-of-life planning as the project it is: clear decisions, the
            right order, and a finished plan.
          </p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Our mission is to normalize the conversation around death, dying,
            and end-of-life planning, so people can{" "}
            <span className="font-semibold text-foreground">
              live fully ~ die ready
            </span>
            .
          </p>

          <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {CERTIFICATIONS.map(({ src, label }) => (
              <li key={label} className="flex flex-col items-center gap-2">
                <img
                  src={src}
                  alt=""
                  className="h-14 w-auto object-contain"
                  loading="lazy"
                />
                <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground text-center leading-tight">
                  {label}
                </span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2">
            {/* Darker brand orange for WCAG AA, matching the hero button. */}
            <Button
              asChild
              className="text-white px-6 py-1.5 text-base font-semibold rounded-full font-opensans bg-brand-orange-dark hover:bg-brand-orange-dark/90"
            >
              <Link to="/contact">Book a 30-minute call</Link>
            </Button>
            <Link
              to="/company"
              className="text-foreground font-semibold underline underline-offset-4 hover:text-brand-orange-dark"
            >
              Meet the team &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
