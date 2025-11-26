import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Card, CardContent } from "@/components/ui/card";

const FamilyTestimonialsSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const testimonials = [
    {
      quote: "During my stage four cancer journey, I journaled extensively, which was helpful for me. However, I did not want my family to read the words I wrote after I was gone. I needed to spare them the pain of reading my raw emotions. I am forever grateful to Niki for supporting me in making this final decision and helping me plan for this meaningful exercise of letting go.",
      author: "Beth",
      role: "Mother of two"
    },
    {
      quote: "After losing my father suddenly, I realized how unprepared we were. ENDevo helped me organize everything so my family won't face the same chaos.",
      author: "Michael T.",
      role: "Small business owner"
    },
    {
      quote: "The Peace of Mind Assessment showed us exactly where we had gaps. Now our entire family knows our wishes and where to find everything.",
      author: "Jennifer L.",
      role: "Teacher and caregiver"
    }
  ];

  return (
    <section ref={elementRef} className="py-20 bg-muted/30">
      <div className="container max-w-7xl mx-auto px-4">
        <h2 
          className={`text-3xl md:text-4xl font-bold text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          What Our <span className="text-brand-orange">Families Say</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className={`bg-white border-0 shadow-lg transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{
                transitionDelay: isVisible ? `${200 + index * 200}ms` : '0ms'
              }}
            >
              <CardContent className="p-8 space-y-6">
                <div className="text-6xl text-brand-orange leading-none">"</div>
                <p className="text-lg text-foreground leading-relaxed italic">
                  {testimonial.quote}
                </p>
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FamilyTestimonialsSection;
