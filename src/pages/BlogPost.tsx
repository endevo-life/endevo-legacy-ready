import { Link, useParams } from "react-router-dom";
import { format, parseISO } from "date-fns";
import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import PortableTextBody from "@/components/PortableTextBody";
import NotFound from "@/pages/NotFound";
import { useBlogPost } from "@/hooks/useBlogPosts";
import { urlFor } from "@/lib/sanityImageUrl";
import { buildMetaDescription } from "@/lib/portableTextUtils";

const SITE_URL = "https://www.endevo.life";

function formatDate(date: string): string {
  try {
    return format(parseISO(date), "MMMM d, yyyy");
  } catch {
    return date;
  }
}

/**
 * Article page for a single blog post, served at /blog/:slug.
 *
 * Every post needs its own crawlable URL: previously articles only ever
 * opened in a modal over /blog or linked out to Medium, so they had no
 * address for search engines to index and earned no search traffic.
 */
const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: post, isLoading, isError, refetch } = useBlogPost(slug);

  // Hold the frame while loading so the prerenderer and crawlers never
  // capture a 404 for a post that does exist.
  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <ResponsiveNavbar />
        <div className="container max-w-3xl mx-auto px-4 py-20 mt-16">
          <div className="animate-pulse space-y-4" aria-hidden="true">
            <div className="h-8 bg-gray-200 rounded w-3/4" />
            <div className="h-4 bg-gray-200 rounded w-1/4" />
            <div className="h-64 bg-gray-200 rounded" />
          </div>
          <p className="sr-only">Loading article…</p>
        </div>
        <Footer />
      </div>
    );
  }

  // A fetch failure is NOT a missing post. Sanity being briefly unreachable
  // must not render a 404 for an article that exists — Google would see the
  // 404 and could deindex a live post. Show a retryable error marked
  // noIndex instead, so crawlers simply skip this visit.
  if (isError) {
    return (
      <div className="min-h-screen bg-background">
        <SEO
          title="Article temporarily unavailable"
          description="This article could not be loaded. Please try again."
          noIndex
        />
        <ResponsiveNavbar />
        <main className="container max-w-3xl mx-auto px-4 py-20 mt-16 text-center">
          <h1 className="text-2xl font-bold mb-3">
            This article could not be loaded
          </h1>
          <p className="text-muted-foreground mb-6">
            Something went wrong fetching this article. It has not been removed.
          </p>
          <button
            onClick={() => refetch()}
            className="text-orange-500 underline hover:opacity-80"
          >
            Try again
          </button>
          <p className="mt-4">
            <Link to="/blog" className="text-orange-500 underline">
              Back to all articles
            </Link>
          </p>
        </main>
        <Footer />
      </div>
    );
  }

  // Only a confirmed-absent post renders the real 404, so crawlers get a
  // genuine "not found" rather than an empty article shell.
  if (!post || !post.slug) {
    return <NotFound />;
  }

  const canonical = `/blog/${post.slug}`;
  const imageUrl = post.image
    ? urlFor(post.image).width(1200).height(630).fit("crop").url()
    : undefined;
  const description = buildMetaDescription(
    post.content,
    `${post.title} — an article from the ENDevo blog on digital legacy and end-of-life planning.`,
  );

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.date,
    description,
    ...(imageUrl ? { image: imageUrl } : {}),
    ...(post.author
      ? {
          author: {
            "@type": "Person",
            name: post.author,
          },
        }
      : {}),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${canonical}`,
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
        title={post.title}
        description={description}
        canonical={canonical}
        ogType="article"
        {...(imageUrl ? { ogImage: imageUrl } : {})}
        jsonLd={articleSchema}
      />
      <ResponsiveNavbar />

      <main className="container max-w-3xl mx-auto px-4 py-10 mt-16">
        <nav aria-label="Breadcrumb" className="mb-6">
          <Link
            to="/blog"
            className="text-sm text-orange-500 hover:opacity-80 underline"
          >
            ← Back to all articles
          </Link>
        </nav>

        <article>
          <header className="mb-8">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {post.title}
            </h1>
            <p className="text-sm text-muted-foreground">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </p>
          </header>

          {imageUrl && (
            <img
              src={imageUrl}
              alt={post.title}
              width={1200}
              height={630}
              className="w-full h-auto rounded mb-8 object-cover"
            />
          )}

          <div className="space-y-4 text-base leading-relaxed text-gray-700">
            {post.content && <PortableTextBody value={post.content} />}
          </div>
        </article>

        {post.externalLink && (
          <p className="mt-10 pt-6 border-t border-gray-200 text-sm text-muted-foreground">
            This article was also published{" "}
            <a
              href={post.externalLink}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-orange-500 underline hover:opacity-80"
            >
              elsewhere
            </a>
            .
          </p>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
