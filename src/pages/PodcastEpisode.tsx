import { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import Footer from "@/components/Footer";

interface Episode {
  title: string;
  description: string;
  descriptionPreview?: string;
  pubDate: string;
  audioUrl: string;
  image: string;
  duration: string;
  link: string;
  guid: string;
}

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
  html
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>/gi, "\n\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/&#\d+;/g, "")
    .trim();

const getByLocalName = (el: Element, name: string): Element | undefined =>
  Array.from(el.getElementsByTagName("*")).find((node) => node.localName === name);

const PodcastEpisode = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const audioRef = useRef<HTMLAudioElement>(null);

  // Episode passed via navigation state (fast path)
  const stateEpisode: Episode | undefined = location.state?.episode;

  const [episode, setEpisode] = useState<Episode | null>(stateEpisode ?? null);
  const [loading, setLoading] = useState(!stateEpisode);
  const [error, setError] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Fallback: re-fetch RSS if navigated directly (no state)
  useEffect(() => {
    if (stateEpisode) return;

    const guid = location.state?.guid;
    if (!guid) {
      setError("Episode not found.");
      setLoading(false);
      return;
    }

    const fetchEpisode = async () => {
      let xmlText: string | null = null;

      try {
        const res = await fetch(`https://corsproxy.io/?url=${encodeURIComponent(RSS_URL)}`);
        if (res.ok) xmlText = await res.text();
      } catch {}

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
        setError("Unable to load episode.");
        setLoading(false);
        return;
      }

      const parser = new DOMParser();
      const xml = parser.parseFromString(xmlText, "text/xml");
      const channel = xml.querySelector("channel");
      const channelImg =
        getByLocalName(channel!, "image")?.getAttribute("href") ??
        channel?.querySelector("image > url")?.textContent?.trim() ?? "";

      const items = Array.from(xml.querySelectorAll("item"));
      const match = items.find(
        (item) =>
          item.querySelector("guid")?.textContent?.trim() === guid ||
          item.querySelector("title")?.textContent?.trim() === guid
      );

      if (!match) {
        setError("Episode not found.");
        setLoading(false);
        return;
      }

      const getText = (tag: string) => match.querySelector(tag)?.textContent?.trim() ?? "";
      const enclosure = match.querySelector("enclosure");
      const itunesImg = getByLocalName(match, "image");
      const durationEl = getByLocalName(match, "duration");
      const rawDesc = getText("description") || (getByLocalName(match, "summary")?.textContent?.trim() ?? "");

      setEpisode({
        title: getText("title"),
        description: stripHtml(rawDesc),
        pubDate: getText("pubDate"),
        audioUrl: enclosure?.getAttribute("url") ?? "",
        image: itunesImg?.getAttribute("href") ?? channelImg,
        duration: durationEl?.textContent?.trim() ?? "",
        link: getText("link"),
        guid,
      });
      setLoading(false);
    };

    fetchEpisode();
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    audioRef.current.paused ? audioRef.current.play() : audioRef.current.pause();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <ResponsiveNavbar />
        <div className="flex justify-center items-center min-h-[60vh]">
          <div className="w-10 h-10 rounded-full border-4 border-brand-orange border-t-transparent animate-spin" />
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !episode) {
    return (
      <div className="min-h-screen bg-background">
        <ResponsiveNavbar />
        <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 text-center px-4">
          <p className="text-muted-foreground">{error ?? "Episode not found."}</p>
          <button
            onClick={() => navigate("/podcast")}
            className="text-brand-orange underline text-sm font-semibold"
          >
            ← Back to Podcast
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <ResponsiveNavbar />

      {/* Hero */}
      <section className="bg-[#0d1b2e] text-white pt-28 pb-10 px-4">
        <div className="container max-w-4xl mx-auto">
          <button
            onClick={() => navigate("/podcast")}
            className="flex items-center gap-2 text-gray-400 hover:text-white text-sm mb-6 transition-colors"
          >
            ← Back to all episodes
          </button>

          <div className="flex flex-col sm:flex-row gap-6 items-start">
            {/* Artwork */}
            <div className="w-36 h-36 sm:w-44 sm:h-44 flex-shrink-0 rounded-xl overflow-hidden shadow-xl">
              {episode.image ? (
                <img src={episode.image} alt={episode.title} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-[#1a2d46] flex items-center justify-center">
                  <span className="text-[#FF5A00] text-5xl">🎙</span>
                </div>
              )}
            </div>

            {/* Meta */}
            <div className="flex-1">
              <span className="text-[#FF5A00] text-xs font-bold tracking-widest uppercase mb-2 block">
                Digital Legacy Podcast
              </span>
              <h1
                className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug mb-3"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {episode.title}
              </h1>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <span>{formatDate(episode.pubDate)}</span>
                {episode.duration && (
                  <>
                    <span>·</span>
                    <span>{formatDuration(episode.duration)}</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Player */}
      <section className="bg-[#111e2e] px-4 py-6 border-t border-white/10">
        <div className="container max-w-4xl mx-auto">
          {episode.audioUrl ? (
            <div className="flex flex-col gap-3">
              <audio
                ref={audioRef}
                src={episode.audioUrl}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
                controls
                className="w-full"
                style={{ accentColor: "#FF5A00" }}
              />
            </div>
          ) : (
            <p className="text-gray-400 text-sm text-center">
              Audio not available for this episode.{" "}
              {episode.link && (
                <a
                  href={episode.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FF5A00] underline"
                >
                  Listen on original site →
                </a>
              )}
            </p>
          )}
        </div>
      </section>

      <main className="container max-w-4xl mx-auto px-4 py-10 flex-1">
        <div className="text-gray-700 text-base leading-relaxed whitespace-pre-line">
          {episode.description || ""}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PodcastEpisode;
