import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import Footer from "@/components/Footer";

const NewsAndEvents = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ResponsiveNavbar />
      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="py-20 px-4" style={{ backgroundColor: "#08123A" }}>
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
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

            {/* Card - Genzio Media Feature */}
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
                        <p className="font-semibold text-foreground">Genzio Media</p>
                        <p className="text-sm text-muted-foreground">@GenzioCo</p>
                      </div>
                    </a>

                    <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                      What happens to your digital life after you're gone?
                    </h2>

                    <p className="text-muted-foreground mb-4">
                      Niki Weiss, Founder &amp; CEO of ENDevo, sat down with{" "}
                      <span className="font-medium text-foreground">@DavidThaDegen</span> to
                      talk about digital legacy, planning ahead, and what "afterlife tech"
                      really means.
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
