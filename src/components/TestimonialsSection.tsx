import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="heading-section text-primary">What Our Families Say</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 - With profile */}
          <Card className="p-6 shadow-lg">
            <CardContent className="p-0">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-brand-orange/20 flex items-center justify-center mr-3">
                  <span className="text-primary font-semibold text-lg">JD</span>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-foreground">Jane Doe</p>
                  <p className="text-sm text-muted-foreground">Client</p>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground italic">
                "The compassionate care and guidance we received during our most difficult time was invaluable. The team made everything so much easier to navigate."
              </p>
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card className="p-6 shadow-lg">
            <CardContent className="p-0">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-brand-orange/20 flex items-center justify-center mr-3">
                  <span className="text-primary font-semibold text-lg">MS</span>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-foreground">Mike Smith</p>
                  <p className="text-sm text-muted-foreground">Client</p>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground italic">
                "The compassionate care and guidance we received during our most difficult time was invaluable. The team made everything so much easier to navigate."
              </p>
            </CardContent>
          </Card>

          {/* Card 3 */}
          <Card className="p-6 shadow-lg">
            <CardContent className="p-0">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-brand-orange/20 flex items-center justify-center mr-3">
                  <span className="text-primary font-semibold text-lg">RJ</span>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-foreground">Robert Johnson</p>
                  <p className="text-sm text-muted-foreground">Client</p>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground italic">
                "The compassionate care and guidance we received during our most difficult time was invaluable. The team made everything so much easier to navigate."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;