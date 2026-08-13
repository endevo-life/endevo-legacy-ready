import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { featuredTestimonials } from "@/data/testimonialsData";

/**
 * Homepage testimonial slideshow.
 *
 * Shows the `featured` subset rather than all of them — the homepage needs
 * social proof, not the full archive, which lives on /resources#client-stories.
 *
 * Autoplay stops on interaction so it never yanks a slide away mid-read, and
 * the whole carousel is keyboard reachable through the prev/next buttons.
 */
const FeaturedTestimonialsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 6000, stopOnInteraction: true })],
  );
  const [selected, setSelected] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  if (featuredTestimonials.length === 0) return null;

  return (
    <section
      className="py-14 bg-muted/30"
      aria-labelledby="testimonials-heading"
    >
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2
            id="testimonials-heading"
            className="heading-section text-primary"
          >
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            People who stopped putting it off — and what changed once they did.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {featuredTestimonials.map((t) => (
                <div
                  key={t.id}
                  className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4"
                >
                  <figure className="h-full bg-background rounded-lg border border-border shadow-sm p-6 flex flex-col">
                    <Quote
                      className="w-7 h-7 text-brand-orange/40 mb-3"
                      aria-hidden="true"
                    />
                    <blockquote className="text-sm leading-relaxed text-foreground/90 flex-1">
                      {/* Long-form quotes are trimmed on the homepage; the full
                          text is on the testimonials page. */}
                      {t.quote.length > 320
                        ? `${t.quote.slice(0, 317).trimEnd()}…`
                        : t.quote}
                    </blockquote>
                    <figcaption className="mt-5 pt-4 border-t border-border flex items-center gap-3">
                      {t.photo && (
                        <img
                          src={t.photo}
                          alt={t.name}
                          width="40"
                          height="40"
                          loading="lazy"
                          className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                        />
                      )}
                      <div className="min-w-0">
                        <p className="font-semibold text-sm text-primary truncate">
                          {t.name}
                        </p>
                        {t.role && (
                          <p className="text-xs text-muted-foreground truncate">
                            {t.role}
                          </p>
                        )}
                      </div>
                      <span
                        className="ml-auto flex gap-0.5 flex-shrink-0"
                        aria-label={`${t.rating} out of 5`}
                      >
                        {Array.from({ length: t.rating }).map((_, i) => (
                          <Star
                            key={i}
                            className="w-3.5 h-3.5 fill-brand-orange text-brand-orange"
                            aria-hidden="true"
                          />
                        ))}
                      </span>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={scrollPrev}
            aria-label="Previous testimonial"
            className="absolute -left-2 md:-left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background border border-border shadow-md flex items-center justify-center hover:bg-muted transition-colors"
          >
            <ChevronLeft className="w-5 h-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            aria-label="Next testimonial"
            className="absolute -right-2 md:-right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background border border-border shadow-md flex items-center justify-center hover:bg-muted transition-colors"
          >
            <ChevronRight className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6" aria-hidden="true">
          {featuredTestimonials.map((t, i) => (
            <span
              key={t.id}
              className={`h-1.5 rounded-full transition-all ${
                i === selected ? "w-6 bg-brand-orange" : "w-1.5 bg-border"
              }`}
            />
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/resources#client-stories"
            className="text-brand-orange font-semibold hover:underline"
          >
            Read all client stories
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTestimonialsSection;
