import { useState } from "react";
import { format, parseISO } from "date-fns";
import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/react";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import { urlFor } from "@/lib/sanityImageUrl";
import { blogPosts } from "@/data/blogPostsData";
import type { BlogPost } from "@/data/blogPostsData";

type BlogPostWithSanity = BlogPost & { sanityContent?: PortableTextBlock[] };

// re-export for migration script compatibility
export { blogPosts };

const POSTS_PER_PAGE = 6;

const Blog = () => {
  const [search, setSearch] = useState("");
  const [sortAsc, setSortAsc] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPost, setSelectedPost] = useState<BlogPostWithSanity | null>(
    null,
  );

  const { data: sanityPosts = [] } = useBlogPosts();
  const sanityMapped: BlogPostWithSanity[] = sanityPosts.map((p) => ({
    image: urlFor(p.image).width(740).height(588).fit("crop").url(),
    title: p.title,
    date: (() => {
      try {
        return format(parseISO(p.date), "MMMM d, yyyy");
      } catch {
        return p.date;
      }
    })(),
    link: p.externalLink ?? "",
    sanityContent: p.content,
  }));

  // Sanity posts take priority — exclude any static post with the same title
  const sanityTitles = new Set(
    sanityMapped.map((p) => p.title.trim().toLowerCase()),
  );
  const staticFallback = blogPosts.filter(
    (p) => !sanityTitles.has(p.title.trim().toLowerCase()),
  );
  const allPosts = [...sanityMapped, ...staticFallback];

  const filteredPosts = allPosts
    .filter((p) => p.title.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortAsc ? dateA - dateB : dateB - dateA;
    });

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE,
  );

  const handleReadNow = (post: BlogPost) => {
    if (post.content || post.sanityContent) {
      setSelectedPost(post);
    } else {
      window.open(post.link, "_blank");
    }
  };

  const blogListSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "ENDevo Blog — Digital Legacy & End-of-Life Planning",
    url: "https://www.endevo.life/blog",
    description:
      "Expert articles on digital legacy, end-of-life planning, grief, and protecting what matters most.",
    publisher: {
      "@type": "Organization",
      name: "ENDevo",
      url: "https://www.endevo.life",
    },
    blogPost: paginatedPosts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      datePublished: p.date,
      image: p.image,
      url: "https://www.endevo.life/blog",
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Blog — Digital Legacy & End-of-Life Planning"
        description="Expert articles on digital legacy, estate planning, grief support, and end-of-life preparation. Read the ENDevo blog."
        canonical="/blog"
        jsonLd={blogListSchema}
      />
      <ResponsiveNavbar />

      {/* Blog List Section */}
      <main className="container max-w-7xl mx-auto px-4 py-10 mt-16">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          ENDevo Blog — Digital Legacy & End-of-Life Planning
        </h1>

        {/* Search + Sort */}
        <div className="flex items-center gap-3 mb-8">
          <input
            type="text"
            placeholder="Search blogs..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className="flex-1 border border-gray-300 rounded-full px-5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange"
          />
          <div className="flex flex-col gap-1">
            <button
              onClick={() => setSortAsc(false)}
              aria-label="Sort newest first"
              className={`w-8 h-8 flex items-center justify-center rounded-full border transition-colors ${!sortAsc ? "bg-brand-orange text-white border-brand-orange" : "bg-white text-gray-500 border-gray-300 hover:border-brand-orange"}`}
            >
              ↑
            </button>
            <button
              onClick={() => setSortAsc(true)}
              aria-label="Sort oldest first"
              className={`w-8 h-8 flex items-center justify-center rounded-full border transition-colors ${sortAsc ? "bg-brand-orange text-white border-brand-orange" : "bg-white text-gray-500 border-gray-300 hover:border-brand-orange"}`}
            >
              ↓
            </button>
          </div>
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            <p>No blog posts found.</p>
          </div>
        )}

        {filteredPosts.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8 lg:gap-[75px]">
            {paginatedPosts.map((post, index) => (
              <article
                key={index}
                className="shadow-md overflow-hidden flex flex-col bg-white w-full max-w-[368px]"
              >
                <div className="w-full h-48 sm:h-56 md:h-[220px] lg:h-[294px] overflow-hidden bg-gray-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3 flex flex-col flex-1">
                  <p className="text-sm text-muted-foreground mb-1">
                    {post.date}
                  </p>
                  <h3 className="text-lg font-semibold mb-3 flex-1 line-clamp-3">
                    {post.title}
                  </h3>
                  <div className="flex justify-center">
                    <button
                      onClick={() => handleReadNow(post)}
                      className="w-fit text-white text-sm font-semibold px-8 py-1.5 transition-all duration-300 hover:brightness-110 hover:scale-105"
                      style={{
                        backgroundColor: "#FF5A00",
                        boxShadow: "0 4px 12px rgba(255,90,0,0.4)",
                      }}
                    >
                      Read Now
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-10">
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

      {/* Blog Modal Overlay */}
      {selectedPost && (
        <div
          className="fixed inset-0 z-50 bg-black/60 flex items-start justify-center overflow-y-auto py-10 px-4"
          onClick={() => setSelectedPost(null)}
        >
          <div
            className="bg-white w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl mx-2"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedPost.image}
              alt={selectedPost.title}
              className="w-full h-48 sm:h-64 md:h-72 object-cover object-top"
            />
            <div className="p-4 sm:p-8">
              <p className="text-sm text-muted-foreground mb-2">
                {selectedPost.date}
              </p>
              <h2
                className="text-xl sm:text-2xl md:text-3xl font-bold mb-6"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {selectedPost.title}
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-gray-700">
                {selectedPost.sanityContent && (
                  <PortableText
                    value={selectedPost.sanityContent}
                    components={{
                      block: {
                        normal: ({ children }) => (
                          <p className="leading-relaxed text-gray-700">
                            {children}
                          </p>
                        ),
                        h3: ({ children }) => (
                          <h3 className="text-xl font-bold text-gray-900 mt-6">
                            {children}
                          </h3>
                        ),
                        h4: ({ children }) => (
                          <h4 className="text-lg font-semibold text-gray-900 mt-4">
                            {children}
                          </h4>
                        ),
                      },
                      listItem: {
                        bullet: ({ children }) => (
                          <li className="ml-5 list-disc">{children}</li>
                        ),
                      },
                      marks: {
                        link: ({ value, children }) => (
                          <a
                            href={value?.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-orange-500 underline hover:opacity-80"
                          >
                            {children}
                          </a>
                        ),
                      },
                    }}
                  />
                )}
                {selectedPost.content?.map((block, i) => {
                  if (block.type === "heading") {
                    return (
                      <h3
                        key={i}
                        className="text-xl font-bold text-gray-900 mt-6"
                      >
                        {block.text}
                      </h3>
                    );
                  }
                  if (block.type === "bullet") {
                    return (
                      <li key={i} className="ml-5 list-disc">
                        {block.text}
                      </li>
                    );
                  }
                  if (block.type === "html") {
                    return (
                      <p
                        key={i}
                        dangerouslySetInnerHTML={{ __html: block.text }}
                      />
                    );
                  }
                  return <p key={i}>{block.text}</p>;
                })}
              </div>
              <div className="mt-8 pt-6 border-t border-gray-100">
                <p className="text-xs text-gray-400 leading-relaxed">
                  If something happened to you, would the people in your life
                  know what to do? Don't leave your loved ones in the dark.
                  Start developing your end-of-life and digital legacy plan.
                  Download the My Final Playbook App on the{" "}
                  <a
                    href="https://apps.apple.com/us/app/my-final-playbook/id6502518647"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-400 underline hover:opacity-80"
                  >
                    App Store
                  </a>{" "}
                  or{" "}
                  <a
                    href="https://play.google.com/store/apps/details?id=com.p4tze2b0necm.pgwvu5pucapp&hl=en_US"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-400 underline hover:opacity-80"
                  >
                    Google Play
                  </a>{" "}
                  or visit us online at{" "}
                  <a
                    href="https://final-playbook.passion.io/app/products"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-400 underline hover:opacity-80"
                  >
                    Final-Playbook.Passion.io
                  </a>{" "}
                  to get started. With My Final Playbook, you'll be able to
                  start and learn how to organize your legal, financial,
                  physical, and digital assets today. Until then, keep your
                  password safe and your playbook up to date.
                </p>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <span className="text-sm text-gray-500 font-medium">
                  Share:
                </span>
                {/* Facebook */}
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(selectedPost.link)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1877F2] hover:opacity-80 transition-opacity"
                  title="Share on Facebook"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="w-4 h-4"
                  >
                    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
                  </svg>
                </a>
                {/* X (Twitter) */}
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(selectedPost.link)}&text=${encodeURIComponent(selectedPost.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-black hover:opacity-80 transition-opacity"
                  title="Share on X"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="w-4 h-4"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                {/* LinkedIn */}
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(selectedPost.link)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-[#0A66C2] hover:opacity-80 transition-opacity"
                  title="Share on LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="w-4 h-4"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                {/* Instagram */}
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:opacity-80 transition-opacity"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
                  }}
                  title="Share on Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="w-4 h-4"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
