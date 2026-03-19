import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import Footer from "@/components/Footer";

interface Episode {
  title: string;
  description: string;     // full plain-text, for episode page
  descriptionPreview: string; // truncated, for card
  pubDate: string;
  audioUrl: string;
  image: string;
  duration: string;
  link: string;
  guid: string;
}

const EPISODES_PER_PAGE = 6;

const RSS_URL = "https://digitallegacypodcast.com/rss";

const formatDate = (dateStr: string) => {
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
};

const formatDuration = (raw: string) => {
  if (!raw) return "";
  const parts = raw.split(":").map(Number);
  if (parts.length === 3) {
    const [h, m, s] = parts;
    if (h > 0) return `${h}h ${m}m`;
    return `${m}m ${s}s`;
  }
  if (parts.length === 2) {
    const [m, s] = parts;
    return `${m}m ${s}s`;
  }
  const secs = parseInt(raw);
  if (!isNaN(secs)) {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}m ${s}s`;
  }
  return raw;
};

const stripHtml = (html: string) =>
  html.replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").replace(/&nbsp;/g, " ").replace(/&#\d+;/g, "").trim();

const getByLocalName = (el: Element, name: string): Element | undefined =>
  Array.from(el.getElementsByTagName("*")).find((node) => node.localName === name);

const Podcast = () => {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [podcastImage, setPodcastImage] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [sortAsc, setSortAsc] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRSS = async () => {
      let xmlText: string | null = null;

      // Try corsproxy.io first (returns raw XML)
      try {
        const res = await fetch(`https://corsproxy.io/?url=${encodeURIComponent(RSS_URL)}`);
        if (res.ok) xmlText = await res.text();
      } catch {}

      // Fallback to allorigins (returns JSON wrapper)
      if (!xmlText) {
        try {
          const res = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(RSS_URL)}`);
          if (res.ok) {
            const json = await res.json();
            xmlText = json.contents;
          }
        } catch {}
      }

      if (!xmlText) {
        setError("Unable to load podcast episodes. Please try again later.");
        setLoading(false);
        return;
      }

      const parser = new DOMParser();
      const xml = parser.parseFromString(xmlText, "text/xml");

      // Channel-level image
      const channel = xml.querySelector("channel");
      const channelItunesImage = channel ? getByLocalName(channel, "image") : undefined;
      const channelImg =
        channelItunesImage?.getAttribute("href") ??
        channel?.querySelector("image > url")?.textContent?.trim() ??
        "";
      setPodcastImage(channelImg);

      const items = Array.from(xml.querySelectorAll("item"));

      const parsed: Episode[] = items.map((item) => {
        const getText = (tag: string) => item.querySelector(tag)?.textContent?.trim() ?? "";

        const enclosure = item.querySelector("enclosure");
        const audioUrl = enclosure?.getAttribute("url") ?? "";

        // Episode image: try itunes:image href, else fall back to channel image
        const itunesImg = getByLocalName(item, "image");
        const image =
          itunesImg?.getAttribute("href") ??
          item.querySelector("media\\:thumbnail")?.getAttribute("url") ??
          channelImg;

        const durationEl = getByLocalName(item, "duration");
        const duration = durationEl?.textContent?.trim() ?? "";

        const rawDesc =
          getText("description") ||
          (getByLocalName(item, "summary")?.textContent?.trim() ?? "");

        const fullDesc = stripHtml(rawDesc);

        return {
          title: getText("title"),
          description: fullDesc,
          descriptionPreview: fullDesc.slice(0, 220),
          pubDate: getText("pubDate"),
          audioUrl,
          image,
          duration,
          link: getText("link"),
          guid: getText("guid") || getText("title"),
        };
      });

      setEpisodes(parsed.filter((e) => e.title));
      setLoading(false);
    };

    fetchRSS();
  }, []);

  const filtered = episodes
    .filter((e) => e.title.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      const dA = new Date(a.pubDate).getTime();
      const dB = new Date(b.pubDate).getTime();
      return sortAsc ? dA - dB : dB - dA;
    });

  const totalPages = Math.ceil(filtered.length / EPISODES_PER_PAGE);
  const paginated = filtered.slice(
    (currentPage - 1) * EPISODES_PER_PAGE,
    currentPage * EPISODES_PER_PAGE
  );

  const handleListen = (ep: Episode) => {
    navigate("/podcast/episode", { state: { episode: ep } });
  };

  return (
    <div className="min-h-screen bg-background">
      <ResponsiveNavbar />

      {/* Hero */}
      <section className="bg-[#0d1b2e] text-white pt-28 pb-14 px-4">
        <div className="container max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <svg className="w-6 h-6 text-[#FF5A00]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3a9 9 0 100 18A9 9 0 0012 3zm0 16a7 7 0 110-14 7 7 0 010 14zm-1-9h2v5h-2zm0-3h2v2h-2z" />
            </svg>
            <span className="text-[#FF5A00] text-xs font-bold tracking-widest uppercase">Digital Legacy Podcast</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-5" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Death and Dying<br />in the Digital Age
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl leading-relaxed mb-6">
            They say we die twice: once when we take our last breath and again when our name is spoken for the final time. But in today's world, there's a third passing — our digital death.
          </p>
          <p className="text-gray-400 text-sm">
            Hosted by <span className="font-semibold text-white">Niki Weiss</span> · by ENDevo
          </p>
        </div>
      </section>

      {/* Episodes */}
      <main className="container max-w-7xl mx-auto px-4 py-10">
        {/* Search + Sort */}
        <div className="flex items-center gap-3 mb-8">
          <input
            type="text"
            placeholder="Search episodes..."
            value={search}
            onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
            className="flex-1 border border-gray-300 rounded-full px-5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange"
          />
          <div className="flex flex-col gap-1">
            <button
              onClick={() => { setSortAsc(false); setCurrentPage(1); }}
              aria-label="Sort newest first"
              className={`w-8 h-8 flex items-center justify-center rounded-full border transition-colors ${!sortAsc ? "bg-brand-orange text-white border-brand-orange" : "bg-white text-gray-500 border-gray-300 hover:border-brand-orange"}`}
            >
              ↑
            </button>
            <button
              onClick={() => { setSortAsc(true); setCurrentPage(1); }}
              aria-label="Sort oldest first"
              className={`w-8 h-8 flex items-center justify-center rounded-full border transition-colors ${sortAsc ? "bg-brand-orange text-white border-brand-orange" : "bg-white text-gray-500 border-gray-300 hover:border-brand-orange"}`}
            >
              ↓
            </button>
          </div>
        </div>

        {loading && (
          <div className="flex justify-center py-24">
            <div className="w-10 h-10 rounded-full border-4 border-brand-orange border-t-transparent animate-spin" />
          </div>
        )}

        {error && (
          <div className="text-center py-20 text-muted-foreground">
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && filtered.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            <p>No episodes found.</p>
          </div>
        )}

        {!loading && !error && filtered.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 justify-items-center">
            {paginated.map((ep) => (
              <article
                key={ep.guid}
                className="shadow-md overflow-hidden flex flex-col bg-white w-full max-w-[368px] rounded-sm"
              >
                {/* Content */}
                <div className="p-4 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-xs text-muted-foreground">{formatDate(ep.pubDate)}</p>
                    {ep.duration && (
                      <span className="text-xs text-gray-400">· {formatDuration(ep.duration)}</span>
                    )}
                  </div>
                  <h3 className="text-base font-semibold mb-2 flex-1 line-clamp-3 leading-snug">{ep.title}</h3>
                  {ep.descriptionPreview && (
                    <p className="text-sm text-gray-500 line-clamp-2 mb-3">{ep.descriptionPreview}</p>
                  )}

                  <div className="flex justify-center">
                    <button
                      onClick={() => handleListen(ep)}
                      className="w-fit text-white text-sm font-semibold px-8 py-1.5 rounded-full transition-all duration-300 hover:brightness-110 hover:scale-105"
                      style={{ backgroundColor: "#FF5A00", boxShadow: "0 4px 12px rgba(255,90,0,0.4)" }}
                    >
                      ▶ Listen
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-10 flex-wrap">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 text-sm font-semibold rounded-full border transition-colors disabled:opacity-40 disabled:cursor-not-allowed bg-white text-gray-600 border-gray-300 hover:border-brand-orange"
            >
              ← Prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-9 h-9 text-sm font-semibold rounded-full border transition-colors ${currentPage === page ? "bg-brand-orange text-white border-brand-orange" : "bg-white text-gray-600 border-gray-300 hover:border-brand-orange"}`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 text-sm font-semibold rounded-full border transition-colors disabled:opacity-40 disabled:cursor-not-allowed bg-white text-gray-600 border-gray-300 hover:border-brand-orange"
            >
              Next →
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Podcast;
