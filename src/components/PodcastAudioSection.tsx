const SPOTIFY_SHOW_ID = "2MQkOgvyPQnLEz1fO9BHkY";

interface Platform {
  name: string;
  href: string;
}

/**
 * Audio platforms, same URLs digitallegacypodcast.com links out to. Spotify
 * gets the embedded player below; the rest are logo-free text links, since
 * this site has no platform icon assets and hotlinking a third icon set on
 * top of the podcast site's own images (already used in
 * PodcastResourcesSection) felt like one dependency too many.
 */
const PLATFORMS: Platform[] = [
  {
    name: "Apple Podcasts",
    href: "https://podcasts.apple.com/us/podcast/death-and-dying-in-the-digital-age/id1775499012",
  },
  {
    name: "Spotify",
    href: "https://open.spotify.com/show/2MQkOgvyPQnLEz1fO9BHkY",
  },
  {
    name: "Amazon Music",
    href: "https://music.amazon.com/podcasts/7fde1e5a-a51c-4f03-aee8-b29a856e2a6b/death-and-dying-in-the-digital-age",
  },
  {
    name: "iHeartRadio",
    href: "https://iheart.com/podcast/227961831/",
  },
  {
    name: "Pandora",
    href: "https://www.pandora.com/podcast/death-and-dying-in-the-digital-age/PC:1001093639",
  },
];

/**
 * Audio listening for the podcast, embedded via Spotify's own player.
 * Placed right after the video/shorts grid: video stays the page's primary
 * content, audio is offered as the alternative immediately after it.
 *
 * A show-level embed (not a single episode) is used deliberately — it always
 * shows Spotify's own "latest episodes" list, so this section never goes
 * stale as new episodes publish.
 */
const PodcastAudioSection = () => {
  return (
    <section className="bg-muted/30 border-t border-border py-16 px-4">
      <div className="container max-w-3xl mx-auto text-center">
        <h2
          className="text-3xl md:text-4xl font-bold mb-4 text-balance text-foreground"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Listen to the Podcast
        </h2>
        <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
          Prefer audio? Catch every episode of the Digital Legacy Podcast right
          here, or subscribe on your favorite platform.
        </p>

        <div className="rounded-xl overflow-hidden shadow-lg mb-8">
          <iframe
            src={`https://open.spotify.com/embed/show/${SPOTIFY_SHOW_ID}?utm_source=generator`}
            width="100%"
            height="352"
            style={{ border: "none" }}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Death and Dying in the Digital Age — listen on Spotify"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm">
          {PLATFORMS.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#FF5A00] hover:underline"
            >
              {p.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PodcastAudioSection;
