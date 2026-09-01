import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  ArrowRight,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  MapPin,
} from "lucide-react";
import createSquare from "@/assets/create-2026/niki-weiss-square.jpg";

/**
 * Homepage carousel of Niki's speaking appearances.
 *
 * Upcoming events come first, then past ones most-recent-first. Past
 * appearances are not clutter to be swept away once the date passes — a track
 * record of stages is the credibility that makes the next invitation likely, so
 * they stay and simply stop being labelled "upcoming".
 *
 * Adding an event means adding an entry to EVENTS. The upcoming/past split is
 * computed from `endDate`, so nothing needs editing when a date passes.
 */

type SpeakingEvent = {
  id: string;
  session: string;
  conference: string;
  host: string;
  dates: string;
  location: string;
  /** ISO date of the final day; drives the upcoming/past split. */
  endDate: string;
  blurb: string;
  url: string;
  /** Imported asset or absolute URL. */
  image: string;
  imageAlt: string;
};

const EVENTS: SpeakingEvent[] = [
  {
    id: "create-2026",
    session: "Digital Legacy Planning Made Easy",
    conference: "CREATE Conference 2026",
    host: "She Leads AI",
    dates: "October 16–18, 2026",
    location: "Salt Lake City, Utah",
    endDate: "2026-10-18",
    blurb:
      "Someone you love will have to find your passwords one day. This session makes that day gentler — we start your Final Playbook together, one decision at a time.",
    url: "https://sheleadsai.ai/create-niki-weiss/",
    image: createSquare,
    imageAlt:
      "Niki Weiss speaking at CREATE Conference 2026 — Digital Legacy Planning Made Easy",
  },
  {
    id: "consensus-2026",
    session: "Consensus 2026 by CoinDesk",
    conference: "Consensus 2026",
    host: "CoinDesk",
    dates: "May 5–7, 2026",
    location: "Miami, Florida",
    endDate: "2026-05-07",
    blurb:
      "Three days of panels and conversations at crypto's largest gathering, on what happens to digital assets when their owner dies.",
    url: "https://lnkd.in/e6mBzJVE",
    image:
      "https://assets.cdn.filesafe.space/f5ehsbHfdFg2UsHEIb49/media/69f2419bf50d9ecd2e1f9356.jpeg",
    imageAlt:
      "Niki Weiss attending Consensus 2026 in Miami — CoinDesk's flagship crypto event",
  },
  {
    id: "wow3-2025",
    session: "Most Inspirational Women of Web3 and AI",
    conference: "WOW3 Unstoppable 2025",
    host: "WOW3",
    dates: "December 2025",
    location: "Award",
    endDate: "2025-12-01",
    blurb:
      "Recognised among the most inspirational women in Web3 and AI for work on digital legacy and end-of-life readiness.",
    url: "/news-and-events",
    image:
      "https://assets.cdn.filesafe.space/f5ehsbHfdFg2UsHEIb49/media/69d41034ee4b21c3f33199b5.jpg",
    imageAlt:
      "WOW3 Unstoppable 2025 Winner — Most Inspirational Women of Web3 and AI — Niki Weiss",
  },
];

const SpeakingEventsSection = () => {
  // Date-only comparison so an event stays "upcoming" through its final day in
  // every timezone, rather than flipping overnight for viewers ahead of UTC.
  const today = new Date().toISOString().slice(0, 10);
  const upcoming = EVENTS.filter((e) => e.endDate >= today).sort((a, b) =>
    a.endDate.localeCompare(b.endDate),
  );
  const past = EVENTS.filter((e) => e.endDate < today).sort((a, b) =>
    b.endDate.localeCompare(a.endDate),
  );
  const ordered = [...upcoming, ...past];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 7000, stopOnInteraction: true })],
  );
  const [selected, setSelected] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  if (ordered.length === 0) return null;

  return (
    <section className="bg-brand-navy py-14" aria-labelledby="speaking-heading">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2
            id="speaking-heading"
            className="text-3xl md:text-4xl font-bold text-white text-balance"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Where to Find Niki
          </h2>
          <p className="text-white/70 mt-3 max-w-2xl mx-auto">
            Conferences, stages and conversations on digital legacy and
            end-of-life readiness.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {ordered.map((e) => {
                const isUpcoming = e.endDate >= today;
                const external = e.url.startsWith("http");
                return (
                  <div
                    key={e.id}
                    className="pl-4 min-w-0 flex-[0_0_100%] md:flex-[0_0_50%]"
                  >
                    <div className="h-full bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col sm:flex-row gap-5">
                      <div className="w-full sm:w-40 flex-shrink-0">
                        <img
                          src={e.image}
                          alt={e.imageAlt}
                          width={1080}
                          height={1080}
                          loading="lazy"
                          className="w-full aspect-square object-cover rounded-lg"
                        />
                      </div>

                      <div className="flex flex-col flex-1 min-w-0">
                        <span
                          className={`inline-block text-xs font-bold uppercase tracking-widest mb-2 ${
                            isUpcoming ? "text-brand-orange" : "text-white/50"
                          }`}
                        >
                          {isUpcoming ? "Upcoming · Speaking" : "Past"}
                        </span>

                        <h3 className="text-lg font-bold text-white mb-2 text-balance">
                          {e.session}
                        </h3>

                        <p className="text-sm text-white/70 leading-relaxed mb-4 flex-1">
                          {e.blurb}
                        </p>

                        <div className="flex flex-col gap-1.5 text-xs text-white/60 mb-4">
                          <span className="flex items-center gap-2">
                            <CalendarDays
                              className="h-3.5 w-3.5 flex-shrink-0"
                              aria-hidden="true"
                            />
                            {e.dates}
                          </span>
                          <span className="flex items-center gap-2">
                            <MapPin
                              className="h-3.5 w-3.5 flex-shrink-0"
                              aria-hidden="true"
                            />
                            {e.location} · {e.host}
                          </span>
                        </div>

                        {external ? (
                          <a
                            href={e.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center w-fit font-semibold text-sm rounded-md px-4 py-2 transition-colors duration-300 ${
                              isUpcoming
                                ? "bg-brand-orange hover:bg-brand-orange-dark text-white"
                                : "border border-white/30 text-white hover:bg-white/10"
                            }`}
                          >
                            {isUpcoming ? "See the session" : "Read more"}
                            <ArrowRight
                              className="ml-2 h-4 w-4"
                              aria-hidden="true"
                            />
                          </a>
                        ) : (
                          <Link
                            to={e.url}
                            className="inline-flex items-center w-fit border border-white/30 text-white hover:bg-white/10 font-semibold text-sm rounded-md px-4 py-2 transition-colors duration-300"
                          >
                            Read more
                            <ArrowRight
                              className="ml-2 h-4 w-4"
                              aria-hidden="true"
                            />
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {ordered.length > 1 && (
            <>
              <button
                onClick={scrollPrev}
                aria-label="Previous event"
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 md:-translate-x-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-colors duration-300"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                onClick={scrollNext}
                aria-label="Next event"
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 md:translate-x-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-colors duration-300"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </>
          )}
        </div>

        <div className="flex items-center justify-center gap-4 mt-7">
          {ordered.length > 1 && (
            <div className="flex gap-2">
              {ordered.map((e, i) => (
                <button
                  key={e.id}
                  onClick={() => emblaApi?.scrollTo(i)}
                  aria-label={`Go to ${e.session}`}
                  aria-current={i === selected}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === selected ? "w-6 bg-brand-orange" : "w-2 bg-white/30"
                  }`}
                />
              ))}
            </div>
          )}
          <Link
            to="/news-and-events"
            className="text-sm text-white/70 hover:text-white underline underline-offset-4"
          >
            All news &amp; events
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SpeakingEventsSection;
