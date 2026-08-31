import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import createConferenceImage from "@/assets/create-2026/niki-weiss-square.png";

/**
 * Homepage highlight for Niki's next speaking engagement.
 *
 * A speaking slot is the one piece of homepage content with an expiry date, so
 * the event lives in a single constant and the component renders nothing once
 * the last day has passed. Left to a manual edit, a stale "upcoming" event is
 * the kind of thing that sits on a homepage for months and quietly signals that
 * nobody is minding the site.
 *
 * To feature the next event, update EVENT. To pull the banner early, set
 * `endDate` to a past date or remove <UpcomingEventBanner /> from Index.
 */
const EVENT = {
  eyebrow: "Upcoming · Niki is speaking",
  session: "Digital Legacy Planning Made Easy",
  conference: "CREATE Conference 2026",
  host: "She Leads AI",
  dates: "October 16–18, 2026",
  location: "Salt Lake City, Utah",
  /** Last day of the event; the banner hides itself after this date. */
  endDate: "2026-10-18",
  sessionUrl: "https://sheleadsai.ai/create-niki-weiss/",
  blurb:
    "Someone you love will have to find your passwords one day. This session makes that day gentler — we start your Final Playbook together, one decision at a time.",
};

const UpcomingEventBanner = () => {
  // Compare date-only strings so the banner stays up through the final day in
  // every timezone, rather than disappearing overnight for viewers ahead of UTC.
  const today = new Date().toISOString().slice(0, 10);
  if (today > EVENT.endDate) return null;

  return (
    <section className="bg-brand-navy py-14 px-4">
      <div className="container max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-center">
          <div className="w-full md:w-64 lg:w-72 flex-shrink-0">
            <img
              src={createConferenceImage}
              alt={`Niki Weiss speaking at ${EVENT.conference} — ${EVENT.session}`}
              width={1080}
              height={1080}
              loading="lazy"
              className="w-full h-auto rounded-xl shadow-2xl"
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-orange mb-3">
              {EVENT.eyebrow}
            </span>

            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 text-balance"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {EVENT.session}
            </h2>

            <p className="text-white/80 leading-relaxed mb-5 max-w-2xl">
              {EVENT.blurb}
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center md:justify-start text-sm text-white/70 mb-6">
              <span className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4" aria-hidden="true" />
                {EVENT.dates}
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                {EVENT.location}
              </span>
              <span>
                {EVENT.conference}, hosted by {EVENT.host}
              </span>
            </div>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <a
                href={EVENT.sessionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-6 py-2.5 rounded-md transition-colors duration-300"
              >
                See the session
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
              <Link
                to="/news-and-events"
                className="inline-flex items-center border border-white/30 text-white hover:bg-white/10 font-semibold px-6 py-2.5 rounded-md transition-colors duration-300"
              >
                All news &amp; events
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEventBanner;
