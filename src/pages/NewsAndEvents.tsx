import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import Footer from "@/components/Footer";

const NewsAndEvents = () => {
  return (
    <div className="min-h-screen flex flex-col">
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
                    <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-orange mb-3">
                      Upcoming Event
                    </span>

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

                  <a
                    href="https://lnkd.in/e6mBzJVE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-primary text-primary-foreground px-5 py-2 rounded-md hover:bg-primary/90 transition-colors duration-300 font-medium text-sm w-fit"
                  >
                    Learn More
                  </a>
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
      <Footer />
    </div>
  );
};

export default NewsAndEvents;
