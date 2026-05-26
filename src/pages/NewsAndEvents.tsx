import { useState } from "react";
import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const NewsAndEvents = () => {
  const [showConsensusReflection, setShowConsensusReflection] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="End-of-Life Planning News & Industry Events"
        description="Stay current on end-of-life planning news, conference appearances, industry awards, and ENDevo announcements."
        canonical="/news-and-events"
      />
      <ResponsiveNavbar />
      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="relative py-20 px-4 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://assets.cdn.filesafe.space/f5ehsbHfdFg2UsHEIb49/media/69cad5474a9b24a78d1d17cd.jpeg')" }}>
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 container max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              News &amp; Events
            </h1>
            <p className="text-lg text-white/80">
              Stay up to date with the latest from ENDevo — announcements,
              upcoming events, and industry news.
            </p>
          </div>
        </section>

        {/* News Feed */}
        <section className="py-20 px-4">
          <div className="container max-w-6xl mx-auto space-y-10">
            {/* Sorted by updatedAt — newest first */}

            {/* Card - Consensus 2026 Miami — updatedAt: 2026-04-29 */}
            <div className="border border-border rounded-xl p-8 md:p-12 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 md:items-center">
                {/* Thumbnail */}
                <div className="flex-shrink-0 w-full md:w-96">
                  <img
                    src="https://assets.cdn.filesafe.space/f5ehsbHfdFg2UsHEIb49/media/69f2419bf50d9ecd2e1f9356.jpeg"
                    alt="Niki Weiss attending Consensus 2026 in Miami — CoinDesk's flagship crypto event"
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </div>

                {/* Info */}
                <div className="flex flex-col justify-between flex-1">
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                      It's official — I'm going to Consensus 2026 by CoinDesk
                    </h2>

                    <p className="text-muted-foreground mb-4">
                      Meet me in Miami for three days of panels, parties, and power moves at Crypto's Most Influential Event.{" "}
                      <span className="font-medium text-foreground">#Consensus2026</span> · CoinDesk
                    </p>

                    <p className="text-sm text-muted-foreground mb-4">
                      May 5–7, 2026 · Miami
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://lnkd.in/e6mBzJVE"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-primary text-primary-foreground px-5 py-2 rounded-md hover:bg-primary/90 transition-colors duration-300 font-medium text-sm w-fit"
                    >
                      Learn More
                    </a>
                    <button
                      onClick={() => setShowConsensusReflection(true)}
                      className="inline-block bg-brand-orange text-white px-5 py-2 rounded-md hover:bg-brand-orange/90 transition-colors duration-300 font-medium text-sm w-fit"
                    >
                      Event Reflection
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Card - WOW3 Award — updatedAt: 2025-12-01 */}
            <div className="border border-border rounded-xl p-8 md:p-12 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 md:items-stretch">
                {/* Thumbnail */}
                <div className="flex-shrink-0 w-full md:w-64 h-48 md:h-auto">
                  <img
                    src="https://assets.cdn.filesafe.space/f5ehsbHfdFg2UsHEIb49/media/69d41034ee4b21c3f33199b5.jpg"
                    alt="WOW3 Unstoppable 2025 Winner — Most Inspirational Women of Web3 and AI — Niki Weiss"
                    className="w-full h-full object-cover object-top rounded-lg"
                  />
                </div>

                {/* Info */}
                <div className="flex flex-col justify-between flex-1">
                  <div>
                    <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-orange mb-3">
                      2025 Award
                    </span>

                    <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                      Most Inspirational Women of Web3 and AI
                    </h2>

                    <p className="text-muted-foreground mb-4">
                      ENDevo Founder &amp; CEO{" "}
                      <span className="font-medium text-foreground">Niki Weiss</span>{" "}
                      was named a 2025 Winner of the WOW3 Unstoppable Award for Most Inspirational Women of Web3 and AI — recognising her work at the intersection of legacy planning and digital futures.
                    </p>
                  </div>

                  <span className="inline-block text-sm font-semibold text-muted-foreground">
                    WOW3 Unstoppable · 2025
                  </span>
                </div>
              </div>
            </div>

            {/* Card - Genzio Media Feature — updatedAt: 2025-09-15 */}
            <div className="border border-border rounded-xl p-8 md:p-12 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 md:items-center">
                {/* Thumbnail */}
                <div className="flex-shrink-0 w-full md:w-96">
                  <img
                    src="https://assets.cdn.filesafe.space/f5ehsbHfdFg2UsHEIb49/media/69c41239c14403a4f73980ad.png"
                    alt="Genzio Media feature with ENDevo founder Niki Weiss"
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </div>

                {/* Info */}
                <div className="flex flex-col justify-between flex-1">
                  <div>
                    <a
                      href="https://x.com/GenzioCo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 mb-3 hover:opacity-80 transition-opacity w-fit"
                    >
                      <img
                        src="https://assets.cdn.filesafe.space/f5ehsbHfdFg2UsHEIb49/media/69c412b3a5f609c08f40fcd3.jpg"
                        alt="Genzio Media logo"
                        className="w-10 h-10 rounded-lg object-cover"
                      />
                      <div>
                        <p className="font-semibold text-foreground">
                          Genzio Media
                        </p>
                        <p className="text-sm text-muted-foreground">
                          @GenzioCo
                        </p>
                      </div>
                    </a>

                    <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                      What happens to your digital life after you're gone?
                    </h2>

                    <p className="text-muted-foreground mb-4">
                      Niki Weiss, Founder &amp; CEO of ENDevo, sat down with{" "}
                      <span className="font-medium text-foreground">
                        @DavidThaDegen
                      </span>{" "}
                      to talk about digital legacy, planning ahead, and what
                      "afterlife tech" really means.
                    </p>
                  </div>

                  <a
                    href="https://x.com/GenzioCo/status/2036132281862029648"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-primary text-primary-foreground px-5 py-2 rounded-md hover:bg-primary/90 transition-colors duration-300 font-medium text-sm w-fit"
                  >
                    Watch the full conversation on X
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>

      {/* Event Reflection Modal */}
      {showConsensusReflection && (
        <div
          className="fixed inset-0 z-50 bg-black/60 flex items-start justify-center overflow-y-auto py-10 px-4"
          onClick={() => setShowConsensusReflection(false)}
        >
          <div
            className="bg-white w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl mx-2"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src="https://assets.cdn.filesafe.space/f5ehsbHfdFg2UsHEIb49/media/69f2419bf50d9ecd2e1f9356.jpeg"
              alt="Consensus 2026 Miami"
              className="w-full h-48 sm:h-64 md:h-72 object-cover object-top"
            />
            <div className="p-4 sm:p-8">
              <p className="text-sm text-muted-foreground mb-2">
                May 5–7, 2026 · Miami
              </p>
              <h2
                className="text-xl sm:text-2xl md:text-3xl font-bold mb-6"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Consensus 2026 — Event Reflection
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-gray-700">
                <p>
                  That is a wrap! <span className="font-semibold">#ConsensusMiami 2026</span> one of Web3 biggest conference in the U.S.
                </p>
                <p>
                  Surrounded by 10,000+ people building the future of crypto, DeFi, and tokenization, I had more than three dozen meaningful conversations that had nothing to do with token prices and everything to do with what happens to a human being when the body stops but the digital life keeps going.
                </p>
                <p>One conversation has not left me.</p>
                <p>
                  A founder of a multimillion-dollar company with 100 employees who depend on him every day.
                </p>
                <p>
                  I asked him a simple question: <em>"If you died tomorrow, who would have access to the data on your phone? Multifactor Authentication access?"</em>
                </p>
                <p>
                  He paused. Looked at the floor. Then said, <em>"Nobody. I don't even have a Legacy Contact set up."</em>
                </p>
                <p>
                  I watched something shift behind his eyes in real time. The same shift I saw countless times.
                </p>
                <p>
                  Founders. Engineers. Investors. People building the most sophisticated digital infrastructure humanity has ever known. None of them had thought about what happens to their own digital life when they are no longer here to manage it.
                </p>
                <p>
                  Some of those conversations went 45 minutes. Some went 2 minutes. All of them ended the same way: <em>"I have never thought about any of this before."</em>
                </p>
                <p>
                  That is the gap I live in. That is the work. People don't think about what happens to the life they've built if they are not here tomorrow.
                </p>
                <p>
                  I am a <span className="font-semibold">Digital Thanatologist</span>. I was the only one in that building. And during the entire conference, I got to be the person who asks the questions nobody else is asking yet.
                </p>
                <ul className="ml-5 list-disc space-y-2">
                  <li>What happens to your digital life if you died tomorrow?</li>
                  <li>How will AI shape your digital afterlife when you are no longer here to consent?</li>
                  <li>What becomes possible when we treat legacy, continuity, and death itself as something we can prepare for, not just react to?</li>
                </ul>
                <p>
                  I did not change anyone's life at Consensus. I am not that arrogant.
                </p>
                <p>
                  But I do believe I cracked open a door that three dozen people walked through this week. And every one of them left that conversation thinking about the people they love and what they would inherit, or fail to inherit, if the worst happened tomorrow.
                </p>
                <p>
                  Looking forward to reconnecting and continuing the conversation about death & dying in the digital age.
                </p>
                <p className="font-semibold">
                  What's your plan? Let's find time to reconnect.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
                <a
                  href="https://www.linkedin.com/posts/nikiweiss_consensusmiami-consensusmiami-digitalthanatologist-ugcPost-7459577612319780864-fJ1e?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD80-gUB9OC2PF66Q4-VnQnPWM3kHTZ-kQI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-brand-orange text-white px-5 py-2 rounded-md hover:bg-brand-orange/90 transition-colors duration-300 font-medium text-sm"
                >
                  View LinkedIn Post
                </a>
                <button
                  onClick={() => setShowConsensusReflection(false)}
                  className="bg-primary text-primary-foreground px-5 py-2 rounded-md hover:bg-primary/90 transition-colors duration-300 font-medium text-sm"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default NewsAndEvents;
