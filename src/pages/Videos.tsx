import { useState } from "react";
import { format, parseISO } from "date-fns";
import { Loader2 } from "lucide-react";
import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import Footer from "@/components/Footer";
import { useYouTubePlaylist, shortsPlaylistId, type YouTubeVideo } from "@/hooks/useYouTubeVideos";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
type VideoTypeFilter = "long" | "short";

interface UnifiedVideo {
  id: string;
  title: string;
  date: string;
  thumbnail: string;
  type: "long" | "short";
  youtubeId: string;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function formatDate(iso: string) {
  try { return format(parseISO(iso), "MMMM d, yyyy"); } catch { return iso; }
}

const LONG_FORM_PLAYLIST_ID =
  import.meta.env.VITE_YOUTUBE_LONG_FORM_PLAYLIST_ID as string;

const CHANNEL_ID = import.meta.env.VITE_YOUTUBE_CHANNEL_ID as string;
const SHORT_FORM_PLAYLIST_ID = shortsPlaylistId(CHANNEL_ID);

const POSTS_PER_PAGE = 6;

// ---------------------------------------------------------------------------
// Modal for YouTube long-form
// ---------------------------------------------------------------------------
function YouTubeModal({ video, onClose }: { video: UnifiedVideo; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4 py-10"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 sm:p-6">
          <button onClick={onClose} className="mb-3 text-sm text-gray-400 hover:text-gray-600">← Back</button>
          <h2
            className="text-xl sm:text-2xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {video.title}
          </h2>
          <div className="w-full aspect-video rounded-lg overflow-hidden">
            <iframe
              src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
              className="w-full h-full"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Video Card
// ---------------------------------------------------------------------------
function VideoCard({ video, onClick }: { video: UnifiedVideo; onClick: () => void }) {
  return (
    <article
      className="shadow-md overflow-hidden flex flex-col bg-white w-full max-w-[368px] cursor-pointer"
      onClick={onClick}
    >
      <div className="w-full h-48 sm:h-56 md:h-[220px] lg:h-[294px] overflow-hidden bg-gray-100 relative">
        {video.thumbnail ? (
          <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <span className="text-gray-400 text-sm">No image</span>
          </div>
        )}
        {/* Play overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/35 transition-colors">
          <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
            <svg className="w-6 h-6 text-orange-500 ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
        {/* Type badge */}
        <span
          className="absolute top-2 left-2 text-white text-xs font-semibold px-2.5 py-0.5 rounded-full"
          style={{ backgroundColor: video.type === "long" ? "#FF5A00" : "#1a1a2e" }}
        >
          {video.type === "long" ? "Long Form" : "Short Form"}
        </span>
      </div>
      <div className="p-3 flex flex-col flex-1">
        <p className="text-sm text-muted-foreground mb-1">{video.date}</p>
        <h3 className="text-lg font-semibold mb-3 flex-1 line-clamp-3">{video.title}</h3>
        <div className="flex justify-center">
          <button
            className="w-fit text-white text-sm font-semibold px-8 py-1.5 transition-all duration-300 hover:brightness-110 hover:scale-105"
            style={{ backgroundColor: "#FF5A00", boxShadow: "0 4px 12px rgba(255,90,0,0.4)" }}
          >
            Watch Now
          </button>
        </div>
      </div>
    </article>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
const Videos = () => {
  const { videos: longVideos, loading: longLoading, error: longError } = useYouTubePlaylist(LONG_FORM_PLAYLIST_ID);
  const { videos: shortVideos, loading: shortLoading, error: shortError } = useYouTubePlaylist(SHORT_FORM_PLAYLIST_ID);

  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState<VideoTypeFilter>("long");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedYT, setSelectedYT] = useState<UnifiedVideo | null>(null);

  const longFormVideos: UnifiedVideo[] = longVideos.map((v: YouTubeVideo) => ({
    id: `long-${v.id}`,
    title: v.title,
    date: formatDate(v.publishedAt),
    thumbnail: v.thumbnail,
    type: "long",
    youtubeId: v.id,
  }));

  const shortFormVideos: UnifiedVideo[] = shortVideos.map((v: YouTubeVideo) => ({
    id: `short-${v.id}`,
    title: v.title,
    date: formatDate(v.publishedAt),
    thumbnail: v.thumbnail,
    type: "short",
    youtubeId: v.id,
  }));

  const allVideos: UnifiedVideo[] = [...longFormVideos, ...shortFormVideos].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const filtered = allVideos.filter((v) => {
    const matchesSearch = v.title.toLowerCase().includes(search.toLowerCase());
    return matchesSearch && v.type === typeFilter;
  });

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const paginated = filtered.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const isLoading = longLoading || shortLoading;
  const isError = !!longError || !!shortError;

  const handleVideoClick = (v: UnifiedVideo) => {
    setSelectedYT(v);
  };

  return (
    <div className="min-h-screen bg-background">
      <ResponsiveNavbar />

      {/* Hero Banner */}
      <section
        className="relative h-[340px] sm:h-[400px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: `url("https://assets.cdn.filesafe.space/f5ehsbHfdFg2UsHEIb49/media/699cb1131001a59ab0ea46c8.jpg")`,
        }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center px-4">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Videos
          </h1>
          <p className="mt-4 text-white/80 text-lg max-w-xl mx-auto">
            Watch our podcast episodes, interviews, and digital legacy insights.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <div className="border-b border-gray-200 bg-white">
        <div className="container max-w-7xl mx-auto px-4 flex gap-0">
          {([
            { key: "long", label: "Videos" },
            { key: "short", label: "Shorts" },
          ] as { key: VideoTypeFilter; label: string }[]).map((tab) => (
            <button
              key={tab.key}
              onClick={() => { setTypeFilter(tab.key); setCurrentPage(1); }}
              className={`px-8 py-4 text-base font-semibold border-b-[3px] transition-colors ${
                typeFilter === tab.key
                  ? "border-[#FF5A00] text-[#FF5A00]"
                  : "border-transparent text-gray-500 hover:text-gray-800"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <main className="container max-w-7xl mx-auto px-4 py-10">
        {/* Search */}
        <div className="mb-8">
          <input
            type="text"
            placeholder={`Search ${typeFilter === "long" ? "videos" : "shorts"}...`}
            value={search}
            onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
            className="border border-gray-300 rounded-full px-4 py-2 text-sm w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {isLoading && (
          <div className="flex items-center justify-center py-24 gap-3 text-muted-foreground">
            <Loader2 className="w-6 h-6 animate-spin" />
            <span>Loading videos…</span>
          </div>
        )}

        {isError && !isLoading && (
          <div className="rounded-lg border border-destructive/50 bg-destructive/10 text-destructive px-6 py-5 text-sm max-w-lg">
            Could not load some videos. Please try again later.
          </div>
        )}

        {!isLoading && filtered.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            <p>No videos found.</p>
          </div>
        )}

        {!isLoading && filtered.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8 lg:gap-[75px]">
            {paginated.map((v) => (
              <VideoCard key={v.id} video={v} onClick={() => handleVideoClick(v)} />
            ))}
          </div>
        )}

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-10">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 text-sm font-semibold rounded-full border transition-colors disabled:opacity-40 disabled:cursor-not-allowed bg-white text-gray-600 border-gray-300 hover:border-[#FF5A00]"
            >
              ← Prev
            </button>

            {(() => {
              const start = Math.min(
                Math.max(currentPage - 1, 1),
                Math.max(totalPages - 2, 1)
              );
              return [start, start + 1, start + 2]
                .filter((p) => p <= totalPages)
                .map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-9 h-9 text-sm font-semibold rounded-full border transition-colors ${
                      currentPage === page
                        ? "bg-[#FF5A00] text-white border-[#FF5A00]"
                        : "bg-white text-gray-600 border-gray-300 hover:border-[#FF5A00]"
                    }`}
                  >
                    {page}
                  </button>
                ));
            })()}

            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 text-sm font-semibold rounded-full border transition-colors disabled:opacity-40 disabled:cursor-not-allowed bg-white text-gray-600 border-gray-300 hover:border-[#FF5A00]"
            >
              Next →
            </button>
          </div>
        )}
      </main>

      <Footer />

      {selectedYT && <YouTubeModal video={selectedYT} onClose={() => setSelectedYT(null)} />}
    </div>
  );
};

export default Videos;
