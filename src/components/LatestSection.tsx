import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ArrowRight, Newspaper, ChevronLeft, ChevronRight } from "lucide-react";

type LatestItem = {
  icon: typeof Newspaper;
  label: string;
  image: string;
  title: string;
  date: string;
  displayDate: string;
  route: string;
};

const newsItems: LatestItem[] = [
  {
    icon: Newspaper,
    label: "News & Events",
    image:
      "https://assets.cdn.filesafe.space/f5ehsbHfdFg2UsHEIb49/media/69f2419bf50d9ecd2e1f9356.jpeg",
    title: "It's official — I'm going to Consensus 2026 by CoinDesk",
    date: "April 29, 2026",
    displayDate: "April 29, 2026",
    route: "/news-and-events",
  },
  {
    icon: Newspaper,
    label: "News & Events",
    image:
      "https://assets.cdn.filesafe.space/f5ehsbHfdFg2UsHEIb49/media/69d41034ee4b21c3f33199b5.jpg",
    title: "Most Inspirational Women of Web3 and AI",
    date: "December 1, 2025",
    displayDate: "December 2025",
    route: "/news-and-events",
  },
  {
    icon: Newspaper,
    label: "News & Events",
    image:
      "https://assets.cdn.filesafe.space/f5ehsbHfdFg2UsHEIb49/media/69c41239c14403a4f73980ad.png",
    title: "What happens to your digital life after you're gone?",
    date: "September 15, 2025",
    displayDate: "September 2025",
    route: "/news-and-events",
  },
];

const latestItems = [...newsItems]
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 3);

const LatestSection = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>({
    threshold: 0.1,
  });
  const navigate = useNavigate();
  const cardsRef = useRef<HTMLDivElement>(null);

  const scrollCards = (dir: "left" | "right") => {
    if (cardsRef.current) {
      cardsRef.current.scrollBy({
        left:
          dir === "left"
            ? -cardsRef.current.offsetWidth
            : cardsRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section ref={elementRef} className="pt-20 pb-10 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <div
          className={`mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Latest
          </h2>
        </div>

        {/* Cards: horizontal scroll on mobile, grid on desktop */}
        <div
          ref={cardsRef}
          className="flex md:grid md:grid-cols-3 gap-8 overflow-x-auto snap-x snap-mandatory md:overflow-x-visible"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {latestItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.title}
                onClick={() => navigate(item.route)}
                className={`group cursor-pointer rounded-2xl overflow-hidden border border-border/50 shadow-sm hover:shadow-md transition-all duration-500 flex flex-col flex-shrink-0 w-full md:w-auto snap-center ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Thumbnail */}
                <div className="relative aspect-video bg-muted overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Type badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-foreground">
                    <IconComponent
                      className="w-3.5 h-3.5 text-brand-orange"
                      strokeWidth={2}
                    />
                    {item.label}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-xs text-muted-foreground mb-2">
                    {item.displayDate}
                  </p>
                  <h3 className="font-semibold text-foreground text-base leading-snug mb-4 flex-1">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-1 text-brand-orange text-sm font-semibold">
                    View{" "}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Scroll buttons — mobile only */}
        <div className="flex md:hidden justify-center gap-3 mt-6">
          <button
            onClick={() => scrollCards("left")}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-brand-orange hover:text-brand-orange transition-colors duration-200"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scrollCards("right")}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-brand-orange hover:text-brand-orange transition-colors duration-200"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestSection;
