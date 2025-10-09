import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const TestimonialsSection = () => {
  return (
    <section className="py-12 bg-muted/30 animate-fade-in">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="heading-section text-primary">What Our Families Say</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 - With profile */}
          <Card className="p-6 shadow-lg hover-scale transition-transform duration-300 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <CardContent className="p-0">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-brand-orange/20 flex items-center justify-center mr-3 hover-scale transition-transform duration-300">
                  <span className="text-primary font-semibold text-lg">B</span>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-foreground">Beth</p>
                  <p className="text-sm text-muted-foreground">Client</p>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400 hover-scale transition-transform duration-300" style={{ animationDelay: `${0.6 + i * 0.1}s` }} />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground italic">
                "During my stage four cancer journey, I journaled extensively, which was helpful for me. However, I did not want my family to read the words I wrote after I was gone. I needed to spare them the pain of reading my raw emotions. I am forever grateful to Niki for supporting me in making this final decision and helping me plan for this meaningful exercise of letting go."
              </p>
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card className="p-6 shadow-lg hover-scale transition-transform duration-300 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <CardContent className="p-0">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-brand-orange/20 flex items-center justify-center mr-3 hover-scale transition-transform duration-300">
                  <span className="text-primary font-semibold text-lg">P</span>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-foreground">Patty</p>
                  <p className="text-sm text-muted-foreground">Client</p>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400 hover-scale transition-transform duration-300" style={{ animationDelay: `${0.8 + i * 0.1}s` }} />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground italic">
                "The final playbook has helped guide me through a difficult and challenging subject that is unfortunately avoided by most. The tools that the playbook offers help you delve deeper into personal beliefs and desires in a clear and easy to use layout. The process gives peace of mind in a respectful, comfortable, and easy-to-use format. This is a crucial subject that brings peace of mind to you and those you leave behind."
              </p>
            </CardContent>
          </Card>

          {/* Card 3 */}
          <Card className="p-6 shadow-lg hover-scale transition-transform duration-300 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <CardContent className="p-0">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-brand-orange/20 flex items-center justify-center mr-3 hover-scale transition-transform duration-300">
                  <span className="text-primary font-semibold text-lg">S</span>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-foreground">Stacy</p>
                  <p className="text-sm text-muted-foreground">Client</p>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400 hover-scale transition-transform duration-300" style={{ animationDelay: `${1.0 + i * 0.1}s` }} />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground italic">
                "Niki coached my husband and me by asking questions about how we want two very important future events handled - our estate and our own care when we are unable to care for ourselves fully. This helped us develop a comprehensive plan partly with our attorney and partly on our own. Now, with the proper documentation in place, our adult children will have an easier time when having to take actions during the emotional times of our disability or loss. Thanks, Niki!"
              </p>
            </CardContent>
          </Card>

          {/* Card 4 */}
          <Card className="p-6 shadow-lg hover-scale transition-transform duration-300 animate-fade-in" style={{ animationDelay: '1.0s' }}>
            <CardContent className="p-0">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-brand-orange/20 flex items-center justify-center mr-3 hover-scale transition-transform duration-300">
                  <span className="text-primary font-semibold text-lg">KM</span>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-foreground">Kristen M.</p>
                  <p className="text-sm text-muted-foreground">Client</p>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400 hover-scale transition-transform duration-300" style={{ animationDelay: `${1.2 + i * 0.1}s` }} />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground italic">
                "Niki Weiss is a true professional who brings both compassion and expertise to a difficult process. She helped me start the process of organizing all the necessary documents for end-of-life planning, and her guidance made everything much less overwhelming. I feel so much more at ease knowing that everything will be in order. I highly recommend Niki to anyone needing support in end-of-life planning."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;