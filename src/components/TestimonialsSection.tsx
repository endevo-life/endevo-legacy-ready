import { Quote, Star } from "lucide-react";
import {
  initialsFor,
  testimonials,
  videoTestimonials,
} from "@/data/testimonialsData";

/**
 * Every published client testimonial.
 *
 * Filmed testimonials lead, because a person saying it on camera carries more
 * weight than the same words as text — and only two exist. The rest follow as
 * cards. All of it comes from testimonialsData so the homepage, this section
 * and any future surface can never drift out of sync.
 */
const TestimonialsSection = () => {
  const textTestimonials = testimonials.filter((t) => !t.videoUrl);

  return (
    <section
      id="testimonials"
      className="py-12 bg-muted/30 animate-fade-in scroll-mt-20"
    >
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="heading-section text-primary">Our Clients' Stories</h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Real experiences from people who have put their legacy plan in order
            with Niki Weiss.
          </p>
        </div>

        {/* Video testimonials */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {videoTestimonials.map((t) => (
            <figure key={t.id} id={t.id} className="scroll-mt-24">
              <video
                src={t.videoUrl}
                poster={t.videoThumbnail}
                controls
                preload="none"
                className="w-full h-auto rounded-lg shadow-lg bg-black"
                aria-label={`${t.name} testimonial video`}
              >
                <track
                  kind="captions"
                  srcLang="en"
                  label="English captions"
                  default
                />
                Your browser does not support the video tag.
              </video>
              <figcaption className="mt-3">
                <p className="font-semibold text-primary">{t.name}</p>
                {t.role && (
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                )}
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Written testimonials */}
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 list-none p-0">
          {textTestimonials.map((t) => (
            <li
              key={t.id}
              id={t.id}
              className="scroll-mt-24 bg-background rounded-lg shadow-sm border border-border p-6 flex flex-col"
            >
              <Quote
                className="w-7 h-7 text-brand-orange/40 mb-3 flex-shrink-0"
                aria-hidden="true"
              />
              <blockquote className="text-sm leading-relaxed text-foreground/90 flex-1">
                {t.quote}
              </blockquote>
              <div className="mt-5 pt-4 border-t border-border flex items-center gap-3">
                {/* Initials rather than a headshot: the testimonials are the
                    point, and a grid of stock-looking portraits pulls attention
                    away from what people actually said. */}
                <span
                  aria-hidden="true"
                  className="w-10 h-10 rounded-full bg-brand-orange/15 text-brand-orange font-semibold text-sm flex items-center justify-center flex-shrink-0"
                >
                  {initialsFor(t.name)}
                </span>
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
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TestimonialsSection;
