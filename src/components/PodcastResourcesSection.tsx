const PODCAST_SITE = "https://digitallegacypodcast.com";

interface ResourceCard {
  image: string;
  tag: string;
  title: string;
  body: string;
  href: string;
  cta: string;
}

/**
 * The four resource offers from digitallegacypodcast.com/resources.html,
 * brought onto the ENDevo site so podcast listeners land here too. The
 * podcast site keeps running independently (nothing here redirects it) —
 * this only mirrors its resource cards. Images are hotlinked from that site
 * rather than duplicated into this repo, since ENDevo controls both domains
 * and the images are the canonical assets for these offers.
 */
const RESOURCES: ResourceCard[] = [
  {
    image: `${PODCAST_SITE}/images/resource-quiz.jpg`,
    tag: "2 minutes",
    title: "Don't Leave Loved Ones in the Dark",
    body: "Take the 2-minute quiz to get your preparedness score and three actionable resources to protect your digital legacy and the people who matter most.",
    href: "https://finalplaybookq12.endevo.life",
    cta: "Take the Quiz",
  },
  {
    image: `${PODCAST_SITE}/images/worksheet.jpg`,
    tag: "PDF download",
    title: "Digital Asset Inventory Worksheet",
    body: "This downloadable PDF makes it easy to document and store your online accounts, subscriptions, and digital assets.",
    href: "https://api.leadconnectorhq.com/widget/form/KZTyjTpGlC77UZ0Qb3jN",
    cta: "Download Now",
  },
  {
    image: `${PODCAST_SITE}/images/resource-prisidio.jpg`,
    tag: "Partner offer",
    title: "Protect Your Legacy and Share Vital Information Safely",
    body: "Prisidio offers podcast subscribers a discounted price for life on its secure digital vault. Start with a 30-day trial.",
    href: "https://prisidio.com/endevo",
    cta: "Start Your 30-Day Trial",
  },
  {
    image: `${PODCAST_SITE}/images/resource-everyonedies.jpg`,
    tag: "Community",
    title: "Living Life to Its Fullest Until Journey's End",
    body: "Everyone Dies encourages exploration, education, and expression of issues related to serious illness, dying, death, and bereavement in both practical and creative ways.",
    href: "https://every1dies.org",
    cta: "Learn More",
  },
];

const PodcastResourcesSection = () => {
  return (
    <section className="bg-white border-t border-border py-16 px-4">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 text-balance text-foreground"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Tools to Plan, Protect and Find Peace of Mind
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            More from the Digital Legacy Podcast: a quick preparedness check,
            a worksheet to get organized, and partners who can help.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {RESOURCES.map((r) => (
            <a
              key={r.title}
              href={r.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden text-left"
            >
              <div className="w-full aspect-square bg-brand-navy overflow-hidden">
                <img
                  src={r.image}
                  alt={r.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5 flex flex-col flex-1 text-center">
                <span className="self-center inline-block bg-orange-50 text-[#FF5A00] text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full mb-3">
                  {r.tag}
                </span>
                <h3 className="font-bold text-lg text-foreground mb-2 leading-snug">
                  {r.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-5 flex-1">
                  {r.body}
                </p>
                <span
                  className="mt-auto inline-block w-full text-white text-sm font-semibold px-4 py-2 rounded-full transition-all duration-300 group-hover:brightness-110"
                  style={{ backgroundColor: "#FF5A00" }}
                >
                  {r.cta}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PodcastResourcesSection;
