import { useNavigate } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ArrowRight, Mic, BookOpen, Play, Newspaper } from "lucide-react";

const allItems = [
  {
    type: "News",
    icon: Newspaper,
    label: "News & Events",
    image:
      "https://assets.cdn.filesafe.space/f5ehsbHfdFg2UsHEIb49/media/69c41239c14403a4f73980ad.png",
    title: "What happens to your digital life after you're gone?",
    date: "March 25, 2026",
    displayDate: "March 25, 2026",
    route: "/news-and-events",
  },
  {
    type: "Blog",
    icon: BookOpen,
    label: "Blog",
    image:
      "https://assets.cdn.filesafe.space/f5ehsbHfdFg2UsHEIb49/media/69bad70753d4f13988a73d7b.webp",
    title:
      "The Hidden Administrative Burden of Loss: Navigating the Paperwork of Grief",
    date: "March 17, 2026",
    displayDate: "March 17, 2026",
    route: "/blog",
  },
  {
    type: "Podcast",
    icon: Mic,
    label: "Podcast",
    image:
      "https://assets.cdn.filesafe.space/f5ehsbHfdFg2UsHEIb49/media/6997585bf8345327a132e32f.png",
    title: "Digital Legacy Podcast — Latest Episode",
    date: "March 10, 2026",
    displayDate: "March 10, 2026",
    route: "/podcast",
  },
  {
    type: "Video",
    icon: Play,
    label: "Video",
    image: null,
    videoUrl:
      "https://storage.googleapis.com/msgsndr/f5ehsbHfdFg2UsHEIb49/media/691dfee088e1e604ea8cd838.mp4",
    title: "Meet Jesse L. Bones",
    date: "March 1, 2026",
    displayDate: "March 1, 2026",
    route: "/video",
  },
];

// Sort by date descending and show only the 3 most recent
const latestItems = [...allItems]
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 3);

const LatestSection = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const navigate = useNavigate();

  return (
    <section
      ref={elementRef as React.RefObject<HTMLElement>}
      className="pt-20 pb-10 bg-white"
    >
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <div
          className={`mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Latest
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.type}
                onClick={() => navigate(item.route)}
                className={`group cursor-pointer rounded-2xl overflow-hidden border border-border/50 shadow-sm hover:shadow-md transition-all duration-500 flex flex-col ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Thumbnail */}
                <div className="relative aspect-video bg-muted overflow-hidden">
                  {item.videoUrl ? (
                    <video
                      src={item.videoUrl}
                      className="w-full h-full object-cover"
                      muted
                      playsInline
                    />
                  ) : (
                    <img
                      src={item.image!}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  {/* Type badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-foreground">
                    <IconComponent className="w-3.5 h-3.5 text-brand-orange" strokeWidth={2} />
                    {item.label}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-xs text-muted-foreground mb-2">{item.displayDate}</p>
                  <h3 className="font-semibold text-foreground text-base leading-snug mb-4 flex-1">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-1 text-brand-orange text-sm font-semibold">
                    View <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LatestSection;
