import { useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { format, parseISO } from "date-fns";
import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import NotFound from "@/pages/NotFound";
import { useYouTubeVideoDetails } from "@/hooks/useYouTubeVideos";
import { extractVideoId, makeVideoSlug } from "@/lib/videoSlug";
import VideoDescription from "@/components/VideoDescription";

const SITE_URL = "https://www.endevo.life";

function formatDate(iso: string): string {
  try {
    return format(parseISO(iso), "MMMM d, yyyy");
  } catch {
    return iso;
  }
}

/**
 * Trims a YouTube description to a search-result-sized meta description,
 * cutting at a word boundary like the blog pages do.
 */
function metaDescription(text: string, fallback: string, limit = 155): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (!clean) return fallback;
  if (clean.length <= limit) return clean;
  const cut = clean.slice(0, limit);
  const lastSpace = cut.lastIndexOf(" ");
  return `${(lastSpace > 0 ? cut.slice(0, lastSpace) : cut).replace(/[.,;:!?-]+$/, "")}…`;
}

/**
 * Episode page for a single podcast video, served at /videos/:slug.
 *
 * Mirrors the /blog/:slug fix: episodes previously existed only inside a
 * modal on /videos, so they had no URL for search engines to index. The
 * slug ends in the immutable YouTube video ID (see videoSlug.ts), which is
 * the lookup key here.
 */
const VideoEpisode = () => {
  const { slug } = useParams<{ slug: string }>();
  const videoId = extractVideoId(slug);
  const { video, loading, error, notFound } = useYouTubeVideoDetails(videoId);
  // Chapter timestamps in the description seek the player by reloading the
  // embed with a start offset; the ref scrolls it back into view.
  const [startAt, setStartAt] = useState<number | null>(null);
  const playerRef = useRef<HTMLDivElement>(null);

  // Hold the frame while loading so the prerenderer and crawlers never
  // capture a 404 for an episode that does exist. No SEO component here:
  // the prerenderer waits for helmet's data-rh meta, which must only
  // appear once the real episode metadata has rendered.
  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <ResponsiveNavbar />
        <div className="container max-w-4xl mx-auto px-4 py-20 mt-16">
          <div className="animate-pulse space-y-4" aria-hidden="true">
            <div className="h-8 bg-gray-200 rounded w-3/4" />
            <div className="h-4 bg-gray-200 rounded w-1/4" />
            <div className="aspect-video bg-gray-200 rounded" />
          </div>
          <p className="sr-only">Loading episode…</p>
        </div>
        <Footer />
      </div>
    );
  }

  // A fetch failure is NOT a missing episode. YouTube being briefly
  // unreachable must not render a 404 for an episode that exists — Google
  // would see the 404 and could deindex a live page. Retryable, noindex.
  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <SEO
          title="Episode temporarily unavailable"
          description="This episode could not be loaded. Please try again."
          noIndex
        />
        <ResponsiveNavbar />
        <main className="container max-w-3xl mx-auto px-4 py-20 mt-16 text-center">
          <h1 className="text-2xl font-bold mb-3">
            This episode could not be loaded
          </h1>
          <p className="text-muted-foreground mb-6">
            Something went wrong fetching this episode. It has not been removed.
          </p>
          <p>
            <Link to="/videos" className="text-orange-500 underline">
              Back to all videos
            </Link>
          </p>
        </main>
        <Footer />
      </div>
    );
  }

  // Only a confirmed-absent video renders the real 404.
  if (notFound || !video || !videoId) {
    return <NotFound />;
  }

  const canonical = `/videos/${makeVideoSlug(video.title, videoId)}`;
  const description = metaDescription(
    video.description,
    `${video.title} — an episode of the Digital Legacy Podcast on end-of-life planning and digital legacy.`,
  );
  const publishedDate = (video.publishedAt ?? "").slice(0, 10);

  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: video.title,
    description,
    thumbnailUrl: video.thumbnail || undefined,
    uploadDate: publishedDate,
    embedUrl: `https://www.youtube.com/embed/${videoId}`,
    contentUrl: `https://www.youtube.com/watch?v=${videoId}`,
    // Episodes are hosted by Niki Weiss. Naming her rather than the brand ties
    // the video entity to the same Person that the site's other schema does.
    author: {
      "@type": "Person",
      name: "Niki Weiss",
    },
    publisher: {
      "@type": "Organization",
      name: "ENDevo",
      url: SITE_URL,
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={video.title}
        description={description}
        canonical={canonical}
        ogType="article"
        {...(video.thumbnail ? { ogImage: video.thumbnail } : {})}
        jsonLd={videoSchema}
      />
      <ResponsiveNavbar />

      <main className="container max-w-4xl mx-auto px-4 py-10 mt-16">
        <nav aria-label="Breadcrumb" className="mb-6">
          <Link
            to="/videos"
            className="text-sm text-orange-500 hover:opacity-80 underline"
          >
            ← Back to all videos
          </Link>
        </nav>

        <article>
          <header className="mb-6">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {video.title}
            </h1>
            <p className="text-sm text-muted-foreground">
              <time dateTime={publishedDate}>
                {formatDate(video.publishedAt)}
              </time>
            </p>
          </header>

          <div
            ref={playerRef}
            className="w-full aspect-video rounded-lg overflow-hidden mb-8 bg-black"
          >
            <iframe
              key={startAt ?? "initial"}
              src={`https://www.youtube.com/embed/${videoId}${startAt !== null ? `?start=${startAt}&autoplay=1` : ""}`}
              title={video.title}
              className="w-full h-full"
              allowFullScreen
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>

          {video.description && (
            <VideoDescription
              text={video.description}
              onSeek={(seconds) => {
                setStartAt(seconds);
                playerRef.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                });
              }}
            />
          )}
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default VideoEpisode;
