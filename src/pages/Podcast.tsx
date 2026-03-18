import { useState, useEffect } from "react";
import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import Footer from "@/components/Footer";
import { Play, Clock, Calendar, Headphones } from "lucide-react";

interface PodcastEpisode {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  image: string;
  duration: string;
  episodeNumber: string;
  audioUrl: string;
}

const RSS_URL = "https://digitallegacypodcast.com/rss";
const FALLBACK_IMAGE =
  "https://storageapi.podup.com/production/1947/podcastsettings/06dbab4a3a5be245e6b0162da361b5ff35efffba.png";

const fetchRSSXml = async (): Promise<string> => {
  // 1. Try direct (works if the feed has CORS headers)
  try {
    const res = await fetch(RSS_URL);
    if (res.ok) return await res.text();
  } catch { /* CORS blocked */ }

  // 2. corsproxy.io — returns raw content
  try {
    const res = await fetch(`https://corsproxy.io/?${encodeURIComponent(RSS_URL)}`);
    if (res.ok) return await res.text();
  } catch { /* proxy unavailable */ }

  // 3. allorigins — returns JSON wrapper
  const res = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(RSS_URL)}`);
  const data = await res.json();
  return data.contents;
};

const Podcast = () => {
  const [episodes, setEpisodes] = useState<PodcastEpisode[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [playingUrl, setPlayingUrl] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [sortAsc, setSortAsc] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const PER_PAGE = 6;

  useEffect(() => {
    const fetchRSS = async () => {
      try {
        const xmlText = await fetchRSSXml();
        const parser = new DOMParser();
        const xml = parser.parseFromString(xmlText, "text/xml");
        const items = Array.from(xml.querySelectorAll("item"));

        const parsed: PodcastEpisode[] = items.map((item) => {
          const text = (tag: string) =>
            item.querySelector(tag)?.textContent?.trim() || "";
          const attr = (tag: string, a: string) =>
            item.querySelector(tag)?.getAttribute(a) || "";
          const itunes = (tag: string) =>
            item
              .getElementsByTagNameNS(
                "http://www.itunes.com/dtds/podcast-1.0.dtd",
                tag
              )[0]
              ?.textContent?.trim() || "";
          const itunesAttr = (tag: string, a: string) =>
            item
              .getElementsByTagNameNS(
                "http://www.itunes.com/dtds/podcast-1.0.dtd",
                tag
              )[0]
              ?.getAttribute(a) || "";

          const rawDesc = text("description");
          const div = document.createElement("div");
          div.innerHTML = rawDesc;
          const plainDesc = (div.textContent || div.innerText || "")
            .trim()
            .slice(0, 220);

          return {
            title: text("title"),
            link: text("link"),
            pubDate: text("pubDate"),
            description: plainDesc,
            image: itunesAttr("image", "href") || FALLBACK_IMAGE,
            duration: itunes("duration"),
            episodeNumber: itunes("episode"),
            audioUrl: attr("enclosure", "url"),
          };
        });

        setEpisodes(parsed);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchRSS();
  }, []);

  const formatDate = (dateStr: string) => {
    try {
      return new Date(dateStr).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      return dateStr;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <ResponsiveNavbar />

      {/* Hero */}
      <section className="bg-[#0a1628] text-white pt-28 pb-16 px-4">
        <div className="container max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Headphones className="w-7 h-7 text-orange-400" />
            <span className="text-orange-400 text-sm font-semibold uppercase tracking-widest">
              Digital Legacy Podcast
            </span>
          </div>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Death and Dying in the Digital Age
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            They say we die twice: once when we take our last breath and again
            when our name is spoken for the final time. But in today's world,
            there's a third passing — our digital death.
          </p>
          <p className="text-gray-400 text-sm mt-4">
            Hosted by <span className="text-white font-medium">Niki Weiss</span>{" "}
            · by ENDevo
          </p>
        </div>
      </section>

      {/* Episodes */}
      <main className="container max-w-7xl mx-auto px-4 py-14">
        {loading && (
          <div className="flex justify-center items-center py-28">
            <div className="w-10 h-10 border-4 border-orange-400 border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {error && (
          <div className="text-center py-28 text-gray-500">
            <Headphones className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-lg font-medium mb-2">
              Unable to load episodes right now.
            </p>
            <a
              href="https://digitallegacypodcast.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 underline hover:opacity-80"
            >
              Visit the podcast website →
            </a>
          </div>
        )}

        {!loading && !error && (() => {
          const filtered = episodes
            .filter((ep) => ep.title.toLowerCase().includes(search.toLowerCase()))
            .sort((a, b) => {
              const da = new Date(a.pubDate).getTime();
              const db = new Date(b.pubDate).getTime();
              return sortAsc ? da - db : db - da;
            });
          const totalPages = Math.ceil(filtered.length / PER_PAGE);
          const paged = filtered.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE);
          return (
          <>
            {/* Search + Sort */}
            <div className="flex items-center gap-3 mb-8">
              <input
                type="text"
                placeholder="Search episodes..."
                value={search}
                onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
                className="flex-1 border border-gray-300 rounded-full px-5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <div className="flex flex-col gap-1">
                <button
                  onClick={() => { setSortAsc(false); setCurrentPage(1); }}
                  aria-label="Sort newest first"
                  className={`w-8 h-8 flex items-center justify-center rounded-full border transition-colors ${!sortAsc ? "bg-orange-500 text-white border-orange-500" : "bg-white text-gray-500 border-gray-300 hover:border-orange-500"}`}
                >
                  ↑
                </button>
                <button
                  onClick={() => { setSortAsc(true); setCurrentPage(1); }}
                  aria-label="Sort oldest first"
                  className={`w-8 h-8 flex items-center justify-center rounded-full border transition-colors ${sortAsc ? "bg-orange-500 text-white border-orange-500" : "bg-white text-gray-500 border-gray-300 hover:border-orange-500"}`}
                >
                  ↓
                </button>
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-20 text-gray-400">
                <p>No episodes found for "{search}".</p>
              </div>
            ) : (
            <>
            <p className="text-sm text-gray-400 mb-8">
              {filtered.length} episode{filtered.length !== 1 ? "s" : ""}{search ? ` matching "${search}"` : ""} · Page {currentPage} of {totalPages}
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {paged.map((ep, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col"
                >
                  {/* Thumbnail */}
                  <div className="relative">
                    <img
                      src={ep.image}
                      alt={ep.title}
                      className="w-full aspect-square object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = FALLBACK_IMAGE;
                      }}
                    />
                    {ep.episodeNumber && (
                      <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                        EP {ep.episodeNumber}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 mb-3">
                      {ep.duration && (
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {ep.duration}
                        </span>
                      )}
                      {ep.pubDate && (
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {formatDate(ep.pubDate)}
                        </span>
                      )}
                    </div>

                    <h3 className="font-semibold text-gray-900 text-base leading-snug mb-2 line-clamp-2">
                      {ep.title}
                    </h3>

                    {ep.description && (
                      <p className="text-sm text-gray-500 line-clamp-3 mb-5 flex-1">
                        {ep.description}
                        {ep.description.length >= 220 ? "…" : ""}
                      </p>
                    )}

                    {/* Audio player or play button */}
                    {ep.audioUrl && playingUrl === ep.audioUrl ? (
                      <audio
                        className="w-full mt-auto"
                        controls
                        autoPlay
                        src={ep.audioUrl}
                        onEnded={() => setPlayingUrl(null)}
                      />
                    ) : (
                      <div className="mt-auto">
                        {ep.audioUrl && (
                          <button
                            onClick={() => setPlayingUrl(ep.audioUrl)}
                            className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors"
                          >
                            <Play className="w-4 h-4 fill-white" />
                            Play Episode
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-12">
                <button
                  onClick={() => { setCurrentPage((p) => Math.max(1, p - 1)); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded-full border border-gray-300 text-sm font-medium text-gray-600 hover:border-orange-500 hover:text-orange-500 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  ← Prev
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => { setCurrentPage(page); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                    className={`w-9 h-9 rounded-full text-sm font-semibold transition-colors ${
                      page === currentPage
                        ? "bg-orange-500 text-white"
                        : "border border-gray-300 text-gray-600 hover:border-orange-500 hover:text-orange-500"
                    }`}
                  >
                    {page}
                  </button>
                ))}

                <button
                  onClick={() => { setCurrentPage((p) => Math.min(totalPages, p + 1)); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 rounded-full border border-gray-300 text-sm font-medium text-gray-600 hover:border-orange-500 hover:text-orange-500 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  Next →
                </button>
              </div>
            )}
          </>
          )}
          </>
          );
        })()}
      </main>

      <Footer />
    </div>
  );
};

export default Podcast;
