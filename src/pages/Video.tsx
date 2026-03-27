import { useState } from "react";
import { format, parseISO } from "date-fns";
import { Loader2, Play, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import LearnListenFooter from "@/components/LearnListenFooter";
import { useYouTubeVideos } from "@/hooks/useYouTubeVideos";

const PAGE_SIZE = 12;

function formatDate(iso: string) {
  try { return format(parseISO(iso), "MMMM d, yyyy"); } catch { return iso; }
}

const Video = () => {
  const { videos, loading, error } = useYouTubeVideos();
  const [activeId, setActiveId] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(videos.length / PAGE_SIZE);
  const paged = videos.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function goToPage(n: number) {
    setPage(n);
    setActiveId(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="min-h-screen bg-background">
      <ResponsiveNavbar />

      <main className="container max-w-7xl mx-auto px-4 py-12 pt-28">
        <div className="animate-fade-in">
          <h1 className="text-4xl font-bold text-foreground mb-4">Videos</h1>
          <p className="text-lg text-muted-foreground mb-10">
            Watch our video content exploring legacy, death, and the digital age.
          </p>

          {loading && (
            <div className="flex justify-center py-24">
              <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
            </div>
          )}

          {error && (
            <div className="text-center py-24 text-muted-foreground">
              <p>Could not load videos: {error}</p>
            </div>
          )}

          {!loading && !error && videos.length === 0 && (
            <div className="text-center py-24 text-muted-foreground">
              <p>No videos found on this channel yet.</p>
            </div>
          )}

          {!loading && !error && videos.length > 0 && (
            <>
              <p className="text-sm text-muted-foreground mb-6">
                {videos.length} video{videos.length !== 1 ? "s" : ""} &mdash; page {page} of {totalPages}
              </p>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {paged.map((video) => (
                  <div key={video.id} className="bg-card rounded-lg border overflow-hidden flex flex-col">
                    {activeId === video.id ? (
                      <div className="aspect-video">
                        <iframe
                          src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                          className="w-full h-full"
                          allowFullScreen
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        />
                      </div>
                    ) : (
                      <button
                        className="relative aspect-video w-full group focus:outline-none"
                        onClick={() => setActiveId(video.id)}
                        aria-label={`Play ${video.title}`}
                      >
                        {video.thumbnail ? (
                          <img
                            src={video.thumbnail}
                            alt={video.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-muted" />
                        )}
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                          <Play className="w-12 h-12 text-white drop-shadow-lg fill-white" />
                        </div>
                      </button>
                    )}

                    <div className="p-3 flex flex-col gap-1 flex-1">
                      <h3 className="font-semibold text-foreground text-sm leading-snug line-clamp-2">
                        {video.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {formatDate(video.publishedAt)}
                      </p>
                      <a
                        href={`https://www.youtube.com/watch?v=${video.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto pt-2 inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <ExternalLink className="w-3 h-3" />
                        Watch on YouTube
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-12">
                  <button
                    onClick={() => goToPage(page - 1)}
                    disabled={page === 1}
                    className="p-2 rounded-md border bg-card hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                    aria-label="Previous page"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                    <button
                      key={n}
                      onClick={() => goToPage(n)}
                      className={`min-w-[36px] h-9 px-3 rounded-md border text-sm font-medium transition-colors ${
                        n === page
                          ? "bg-foreground text-background border-foreground"
                          : "bg-card hover:bg-muted"
                      }`}
                    >
                      {n}
                    </button>
                  ))}

                  <button
                    onClick={() => goToPage(page + 1)}
                    disabled={page === totalPages}
                    className="p-2 rounded-md border bg-card hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                    aria-label="Next page"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </main>

      <LearnListenFooter />
    </div>
  );
};

export default Video;