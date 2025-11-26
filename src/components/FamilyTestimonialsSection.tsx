import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Card, CardContent } from "@/components/ui/card";
const FamilyTestimonialsSection = () => {
  const {
    elementRef,
    isVisible
  } = useScrollAnimation();
  const testimonials = [{
    quote: "The final playbook has helped guide me through a difficult and challenging subject that is unfortunately avoided by most. The tools that the playbook offers help you delve deeper into personal beliefs and desires in a clear and easy to use layout. The process gives peace of mind in a respectful, comfortable, and easy-to-use format. This is a crucial subject that brings peace of mind to you and those you leave behind.",
    author: "Patty",
    role: "Client"
  }, {
    quote: "Niki coached my husband and me by asking questions about how we want two very important future events handled - our estate and our own care when we are unable to care for ourselves fully. This helped us develop a comprehensive plan partly with our attorney and partly on our own. Now, with the proper documentation in place, our adult children will have an easier time when having to take actions during the emotional times of our disability or loss. Thanks, Niki!",
    author: "Stacy",
    role: "Client"
  }, {
    quote: "Niki Weiss is a true professional who brings both compassion and expertise to a difficult process. She helped me start the process of organizing all the necessary documents for end-of-life planning, and her guidance made everything much less overwhelming. I feel so much more at ease knowing that everything will be in order. I highly recommend Niki to anyone needing support in end-of-life planning.",
    author: "Kristen M.",
    role: "Client"
  }, {
    quote: "During my stage four cancer journey, I journaled extensively, which was helpful for me. However, I did not want my family to read the words I wrote after I was gone. I needed to spare them the pain of reading my raw emotions. I am forever grateful to Niki for supporting me in making this final decision and helping me plan for this meaningful exercise of letting go.",
    author: "Beth",
    role: "Client"
  }];
  return <section ref={elementRef} className="py-20 bg-muted/30">
      <div className="container max-w-7xl mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          What Our <span className="text-brand-orange">Families Say</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <Card key={index} className={`bg-white border-0 shadow-lg transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{
          transitionDelay: isVisible ? `${200 + index * 200}ms` : '0ms'
        }}>
              <CardContent className="p-8 space-y-6">
                
                <p className="text-lg text-foreground leading-relaxed italic">
                  {testimonial.quote}
                </p>
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default FamilyTestimonialsSection;